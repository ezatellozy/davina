import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

import auth from './auth/index'

import { createToaster } from '@meforma/vue-toaster'
const toast = createToaster()

function updateLocaleStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    pageAuth: false,
    pageLoading: false,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    status: '',
    loading: false,
    cartDetais: JSON.parse(localStorage.getItem('cartDetails')) || [],
  },
  getters: {
    pageAuth(state) {
      return state.pageAuth
    },
    pageLoading(state) {
      return state.pageLoading
    },

    status: (state) => state.status,

    loading: (state) => state.loading,
    totalPrice: (state) => {
      return `${state.cart.reduce(
        (a, b) => +a + +b.product.price * b.quantity,
        0,
      )}`
    },

    cart: (state) => state.cart,
    cartDetais: (state) => state.cartDetais,

    totalQuantity: (state) => {
      return state.cart.length
    },
    totalItems: (state) => {
      return state.cart.length
    },
  },
  mutations: {
    pageAuth(state, payload) {
      state.pageAuth = payload
    },
    pageLoading(state, payload) {
      state.pageLoading = payload
    },

    removeItem(state, product) {
      let item = state.cart.filter((el) => el.product.id !== product.product.id)
      let newItems = []
      newItems.push(...item)
      updateLocaleStorage(newItems)
      state.cart = JSON.parse(localStorage.getItem('cart'))
    },
    addItemByOne(state, product) {
      let item = state.cart.filter((i) => i.product.id === product.product.id)
      if (item.length) {
        item[0].quantity += 1
      } else {
        state.cart.push({ ...product })
      }
      updateLocaleStorage(state.cart)
    },
    removeItemByOne(state, product) {
      let item = state.cart.filter((i) => i.product.id === product.product.id)
      if (item.length) {
        item[0].quantity -= 1
        if (item[0].quantity < 1) {
          let item = state.cart.filter(
            (el) => el.product.id !== product.product.id,
          )
          let newItems = []
          newItems.push(...item)
          updateLocaleStorage(newItems)
          state.cart = JSON.parse(localStorage.getItem('cart'))
        }
      } else {
        state.cart.push({ ...product })
      }
      updateLocaleStorage(state.cart)
    },

    updateCart(state, payload) {
      state.cart = payload
    },
    cartDetais(state, payload) {
      state.cartDetais = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },

    logout(state) {
      state.status = ''
      state.token = ''
      state.cart = []
      state.cartDetais = []
    },
  },
  actions: {
    verify(context, user) {
      context.commit('auth_error', '')
      context.commit('setLoading', true)
      return new Promise((resolve, reject) => {
        context.commit('pageLoading', true)
        axios({
          url: '/auth/email/verify',
          data: {
            email: user.email,
            phone: user.phone,
            verification_code: '111111',
            device_type: user.device_type,
            device_token: 'test',
          },
          method: 'POST',
        })
          .then((resp) => {
            if (resp.data.status == true) {
              context.commit('auth_error', '')
              context.commit('setLoading', false)
              toast.success(resp.data.msg)
              context.dispatch('login', user)
            }
            console.log(resp)
            resolve(resp)
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

    removeItem(context, product) {
      context.commit('setLoading', true)
      if (context.getters.isLoggedIn) {
        axios
          .delete(`carts/${product.cart_id}`, {
            _method: 'Delete',

            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
            },
          })
          .then((data) => {
            context.commit('updateCart', data.data.data)
            context.commit('cartDetais', data.data)
            updateLocaleStorage(data.data.data)
            localStorage.setItem('cartDetails', JSON.stringify(data.data))
            context.commit('setLoading', false)
          })

        return
      }
      let item = context.state.cart.filter(
        (el) => el.product.id !== product.product.id,
      )
      let newItems = []
      newItems.push(...item)
      updateLocaleStorage(newItems)
      context.state.cart = JSON.parse(localStorage.getItem('cart'))
      context.commit('setLoading', false)
    },
    addToCart(context, product) {
      if (context.getters.isLoggedIn) {
        axios
          .post(
            'carts',
            {
              product_id: product.product_id,
              quantity: product.quantity,
              size_id: product.size,
              color_id: product.color,
            },
            {
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
              },
            },
          )
          .then((data) => {
            if (data.data.status == true) {
              toast.success(data.data.msg, {
                position: 'top-right',
              })
              context.dispatch('getCart')
            }
          })
        return
      }
      let item = context.state.cart.filter(
        (i) => i.product.id == product.product.id,
      )
      if (item.length) {
        item[0].quantity += product.quantity
      } else {
        context.state.cart.push({ ...product })
      }
      toast.success('Added Successfully', {
        position: 'top-right',
      })
      updateLocaleStorage(context.state.cart)
    },
    getCart(context) {
      axios
        .get('carts', {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        })
        .then((data) => {
          context.commit('updateCart', data.data.data)
          context.commit('cartDetais', data.data)
          updateLocaleStorage(data.data.data)
          localStorage.setItem('cartDetails', JSON.stringify(data.data))
        })
    },
  },
  modules: { auth },
})
