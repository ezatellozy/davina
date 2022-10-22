export default {
  isLoggedIn: (state) => !!state.token,
  user: (state) => state.user,
}
