import Cookies from 'js-cookie'
export default {
  updateUser(state, payload) {
    state.user = payload
  },
  auth_success(state, payload) {
    state.status = payload
    state.token = Cookies.get('token')
    state.user = JSON.parse(localStorage.getItem('user'))
  },
  auth_error(state, payload) {
    state.status = payload
  },
}
