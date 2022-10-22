<template>
  <section class="user-account">
    <div class="background">
      <img class="bg-1" src="@/assets/account-bg-1.webp" alt="bg1" />
      <img class="bg-2" src="@/assets/account-bg-2.webp" alt="bg2" />
    </div>
    <div class="container">
      <div class="logo-wrapper">
        <img src="@/assets/logo.webp" alt="logo" />
      </div>
      <div class="accountDetails">
        <AccountDetails v-if="isLoggedIn" />
        <Account v-else />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AccountDetails from './auth/AccountDetails.vue'
import Account from './auth/Account.vue'

const store = useStore()

const isLoggedIn = computed(() => store.getters.isLoggedIn)
</script>

<style lang="scss"></style>
