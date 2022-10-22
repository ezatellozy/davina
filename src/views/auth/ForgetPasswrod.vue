<template>
  <section class="user-account auth">
    <div class="background">
      <img class="bg-1" src="@/assets/account-bg-1.webp" alt="bg1" />

      <img class="bg-2" src="@/assets/account-bg-3.webp" alt="bg3" />
    </div>
    <div class="container">
      <div class="logo-wrapper">
        <router-link to="/">
          <img src="@/assets/logo.webp" alt="logo" />
        </router-link>
      </div>
      <div>
        <transition name="fade">
          <div class="forget-password" v-if="steps.forgetPassword">
            <h2 class="title">{{ $t('headers.Forget Your Password?') }}</h2>
            <h3 class="title">
              {{
                $t(
                  'headers.Please Enter Your Mobile Number Or Your Email Adreess',
                )
              }}
            </h3>
            <form @click.prevent>
              <div class="row">
                <div class="mb-4 col-12">
                  <input
                    type="text"
                    v-model="email"
                    class="form-control"
                    :placeholder="
                      $t('placeholder.Email Address Or Mobile Number')
                    "
                  />
                </div>
                <div class="mb-4 col-12">
                  <input
                    type="text"
                    v-model="phone"
                    class="form-control"
                    :placeholder="$t('placeholder.mobileNumber')"
                  />
                </div>
                <div class="errMsg mb-4">{{ errMsg }}</div>
                <div class="mb-4 text-center col-12">
                  <button
                    @click="forgetPassword"
                    class="btn btn-primary custom-btn frm-action"
                  >
                    <div class="spinner-border" role="status" v-if="loading">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else>
                      {{ $t('buttons.submit') }}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </transition>
        <transition name="fade">
          <Verification @change-step="sendCode" v-if="steps.verification" />
        </transition>
        <transition name="fade">
          <div class="forget-password" v-if="steps.changePassword">
            <h2 class="title">{{ $t('headers.Forget Your Password?') }}</h2>
            <h3 class="title">
              {{ $t('headers.Please Enter Your New Password') }}
            </h3>
            <form @click.prevent>
              <div class="row">
                <div class="mb-4 col-12">
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="false"
                    v-model="newP"
                    :placeholder="$t('placeholder.newPassword')"
                  />
                </div>
                <div class="mb-4 col-12">
                  <input
                    type="password"
                    class="form-control"
                    autocomplete="false"
                    v-model="confirm"
                    :placeholder="$t('placeholder.cNewPassword')"
                  />
                </div>

                <div class="mb-4 text-center col-12">
                  <button
                    @click="resetPassword"
                    class="btn btn-primary custom-btn frm-action"
                  >
                    <div class="spinner-border" role="status" v-if="loading">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else>
                      {{ $t('buttons.submit') }}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import Verification from './Verification.vue'
import { createToaster } from '@meforma/vue-toaster'
import { useRouter } from 'vue-router'

const router = useRouter()
const steps = reactive({
  forgetPassword: true,
  verification: false,
  changePassword: false,
})
const toast = createToaster()
const email = ref('')
const phone = ref('')
const newP = ref('')
const confirm = ref('')
const errMsg = ref('')
const loading = ref(false)

function step(step) {
  steps.forgetPassword = false
  steps.verification = false
  steps.changePassword = false

  steps[step] = true
}

function forgetPassword() {
  loading.value = true
  errMsg.value = ''
  axios
    .post('auth/password/forget', { email: email.value, phone: phone.value })
    .then((data) => {
      if (data.data.status == true) {
        toast.success(data.data.msg)
        step('verification')
      }
    })
    .catch((err) => {
      if (err.response.data.status == false) {
        errMsg.value = err.response.data.msg
      }
    })
    .finally(() => (loading.value = false))
}

function sendCode() {
  loading.value = true
  axios
    .post('auth/check/code', {
      email: email.value,
      reset_code: 111111,
      phone: phone.value,
    })
    .then((data) => {
      if (data.data.status == true) {
        toast.success(data.data.msg)
        step('changePassword')
      }
    })
    .catch((err) => {
      if (err.response.data.status == false) {
        toast.success(err.response.data.msg)
      }
    })
    .finally(() => (loading.value = false))
}
function resetPassword() {
  loading.value = true
  axios
    .post('auth/password/reset', {
      new_password: newP.value,
      new_password_confirmation: confirm.value,
    })
    .then((data) => {
      if (data.data.status == true) {
        toast.success(data.data.msg)
        router.push('/login')
      }
    })
    .catch((err) => {
      if (err.response.data.status == false) {
        toast.success(err.response.data.msg)
      }
    })
    .finally(() => (loading.value = false))
}
</script>

<style lang="scss">
.otp {
  justify-content: space-between;
  input.otp-input {
    text-align: center;
    max-width: 70px;
  }
}
.btn.custom-btn:disabled {
  background: none !important;
  color: #000 !important;
}
</style>
