import axios from 'axios'
import Cookies from 'js-cookie'
import { createToaster } from '@meforma/vue-toaster'
const toast = createToaster()
export default {
  register(context, user) {
    context.commit('auth_error', '')
    context.commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios({
        url: '/auth/register',
        data: user,
        method: 'POST',
      })
        .then((resp) => {
          if (resp.data.status == true) {
            context.commit('auth_error', '')
            context.commit('setLoading', false)
            toast.success(resp.data.msg)
            context.dispatch('verify', user)
            console.log(user)
          }
        })
        .catch((err) => {
          if (err.response.data.status == false) {
            context.commit('auth_error', err.response.data.msg)
            context.commit('setLoading', false)
            toast.error(err.response.data.msg)
          }

          reject(err)
        })
    })
  },

  login(context, user) {
    context.commit('auth_error', '')
    context.commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios({
        url: '/auth/login',
        data: {
          email: user.email,
          password: user.password,
          device_type: user.device_type,
          device_token: 'test',
        },
        method: 'POST',
      })
        .then((resp) => {
          if (resp.data.status == true) {
            context.commit('auth_error', '')
            context.commit('setLoading', false)
            context.commit('updateUser', resp.data.data)
            localStorage.setItem('user', JSON.stringify(resp.data.data))
            Cookies.set('token', resp.data.data.token)

            let cartItems = JSON.parse(localStorage.getItem('cart'))
            if (cartItems != 'undefined') {
              if (cartItems.length) {
                console.log(cartItems)
                let counter = 0
                cartItems.forEach((element) => {
                  axios
                    .post(
                      'carts',
                      {
                        product_id: element.product_id,
                        quantity: element.quantity,
                        size_id: element.size,
                        color_id: element.color,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${Cookies.get('token')}`,
                        },
                      },
                    )
                    .finally(() => {
                      counter += 1
                      if (cartItems.length == counter) {
                        context.dispatch('getCart')
                        setTimeout(() => window.location.reload(), 1000)
                      }
                    })
                })
              } else {
                context.dispatch('getCart')
                setTimeout(() => window.location.reload(), 1000)
              }
            } else {
              context.dispatch('getCart')
              setTimeout(() => window.location.reload(), 1000)
            }
            toast.success(resp.data.msg)
          }

          resolve(resp)
        })
        .catch((err) => {
          if (err) {
            if (err.response.data.status == false) {
              context.commit('auth_error', err.response.data.msg)
              context.commit('setLoading', false)
              toast.error(err.response.data.msg)
            }
          }
          reject(err)
        })
    })
  },
  logout(context) {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    localStorage.removeItem('cartDetails')
    Cookies.remove('token')
    context.commit('logout')
    window.location.reload()
  },
}
