<template>
  <h2 class="title fw-normal">
    {{ $t('headers.Welcome') }} {{ user.full_name }}
  </h2>

  <form @click.prevent class="register">
    <div class="row">
      <div class="col-12">
        <div class="img-wrapper text-center">
          <img
            :src="user.avatar"
            :alt="user.full_name"
            class="img-fluid mb-5"
          />
        </div>
      </div>
      <div class="mb-4 col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="user.full_name"
          :placeholder="$t('placeholder.fullName')"
        />
      </div>
      <div class="mb-4 col-md-6">
        <input
          type="text"
          class="form-control"
          v-model="user.user_name"
          :placeholder="$t('placeholder.userName')"
        />
      </div>
      <div class="mb-4 col-12">
        <input
          type="email"
          class="form-control"
          v-model="user.email"
          :placeholder="$t('placeholder.emailAddress')"
        />
      </div>

      <div class="mb-4 col-9">
        <input
          type="phone"
          class="form-control"
          autocomplete="false"
          v-model="user.phone"
          :placeholder="$t('placeholder.mobileNumber')"
        />
      </div>

      <div class="mb-4 text-center col-12">
        <button
          :disabled="loading"
          @click="logout"
          class="btn btn-primary custom-btn frm-action"
        >
          <div class="spinner-border" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
          <span v-else>
            {{ $t('buttons.logout') }}
          </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const loading = computed(() => store.getters.loading)

const user = computed(() => store.getters.user)

function logout() {
  store.dispatch('logout')
}
</script>

<style></style>
