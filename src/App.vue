<template>
  <header v-if="!auth">
    <main-header />
  </header>
  <div class="app-wrapper" id="app-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer v-if="!auth" />
</template>

<script setup>
import MainHeader from './components/MainHeader.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import i18n from './i18n'

import { onMounted, computed, watchEffect } from 'vue'

const route = useRoute()

const store = useStore()

watchEffect(() => {
  if (
    route.name == 'login' ||
    route.name == 'register' ||
    route.name == 'activate' ||
    route.name == 'verification' ||
    route.name == 'forget-passwrod'
  ) {
    store.commit('pageAuth', true)
  } else {
    store.commit('pageAuth', false)
  }
})
const auth = computed(() => store.getters.pageAuth)

onMounted(() => {
  let appWrapper = document.getElementById('app-wrapper')
  let header = document.getElementsByTagName('header')
  let footer = document.getElementsByTagName('footer')
  document.addEventListener('touchstart', { passive: true })
  let innerHeight = Math.abs(header[0].clientHeight - footer[0].clientHeight)
  appWrapper.style.minHeight = `calc(100vh - ${innerHeight}px)`

  if (i18n.global.locale == 'ar') {
    document.documentElement.lang = 'ar'
    document.body.dir = 'rtl'
    document.body.classList.add('is-rtl')
  }
})
</script>

<style lang="scss"></style>
