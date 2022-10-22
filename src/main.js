import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import BootstrapVue3 from 'bootstrap-vue-3'
import '@/style/main.scss'
import VOtpInput from 'vue3-otp-input'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import VueLazyLoad from 'vue3-lazyload'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Cookies from 'js-cookie'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toaster from '@meforma/vue-toaster'

library.add(far)
library.add(fas)
library.add(fab)

axios.defaults.baseURL = 'https://davina.elsaed.aait-d.com/api/'

axios.defaults.headers.common['Authorization'] =
  'Bearer ' + Cookies.get('token')

axios.defaults.headers = {
  lang: i18n.global.locale,
}

// axios.defaults.headers = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
//   lang: i18n.global.locale,
// }

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('v-otp-input', VOtpInput)
app.use(i18n)
app.use(store)
app.use(Toaster, {
  position: 'bottom',
})
app.use(VueLazyLoad)
app.use(VueAxios, axios)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
