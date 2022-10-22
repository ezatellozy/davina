import { createRouter, createWebHistory } from 'vue-router'

import createStore from '@/store'
import { computed } from 'vue'
const store = createStore

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Register.vue'),

    meta: {
      guest: true,
    },
  },
  {
    path: '/forget-passwrod',
    name: 'forget-passwrod',
    component: () => import('@/views/auth/ForgetPasswrod.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('@/views/auth/Verification.vue'),

    meta: {
      guest: true,
    },
  },
  {
    path: '/activate',
    name: 'activate',

    component: () => import('@/views/auth/Activate.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/account',
    name: 'account',

    component: () => import('@/views/Account.vue'),
  },
  { path: '/washlist', redirect: '/' },
  { path: '/about-us', redirect: '/' },
  { path: '/shop', redirect: '/' },
  { path: '/contact-us', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const isLoggedIn = computed(() => store.getters.isLoggedIn)

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !isLoggedIn.value) {
    next('/login')
  } else if (to.meta.guest && isLoggedIn.value) {
    next('/')
  } else {
    next()
  }
})
export default router
