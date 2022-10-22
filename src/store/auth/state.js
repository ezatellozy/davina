import Cookies from 'js-cookie'
export default {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: Cookies.get('token') || null,
}
