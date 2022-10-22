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
        <div class="verification">
          <h2 class="title">{{ $t('headers.Verification') }}</h2>
          <h3 class="title">
            {{
              $t(
                'headers.Please Enter The Code That Sent To Your Email Address Or Mobile Number',
              )
            }}
          </h3>
          <form @click.prevent>
            <div class="row">
              <div class="mb-4 col-12">
                <v-otp-input
                  class="otp"
                  ref="otpInput"
                  input-classes="otp-input"
                  separator=""
                  :num-inputs="6"
                  :should-auto-focus="true"
                  :is-input-num="true"
                  :conditionalClass="['one', 'two', 'three', 'four', 'five']"
                  :placeholder="['-', '-', '-', '-', '-']"
                  v-model="code"
                  @on-complete="sendCode($event)"
                />
              </div>
              <div class="text-center mb-4">
                <p class="mb-0">{{ $t('misc.Resndding Code After') }}</p>
                <span>
                  {{ minutes }}: {{ seconds < 10 ? '0' : '' }}{{ seconds }}
                </span>
              </div>
              <div class="mb-5 text-center col-12">
                <button
                  :disabled="seconds != 0 || minutes != 0"
                  class="btn btn-primary custom-btn frm-action"
                >
                  {{ $t('buttons.Resend Code') }}
                </button>
              </div>
              <div class="mb-4 text-center col-12">
                <button
                  @click="sendCode($event)"
                  class="btn btn-primary custom-btn frm-action"
                >
                  {{ $t('buttons.submit') }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const seconds = ref(50)
const minutes = ref(1)
const emit = defineEmits(['change-step'])
function countDown() {
  let secondsInterval = setInterval(() => {
    seconds.value--
    if (seconds.value <= 0) {
      clearTimeout(secondsInterval)
      if (minutes.value == 0) return
      minutesInterval()
    }
  }, 1000)
}
function minutesInterval() {
  let minuteInterval = setInterval(() => {
    minutes.value--

    if (minutes.value <= 0) {
      clearTimeout(minuteInterval)
      seconds.value = 49
      countDown()
    }
  }, 1000)
}

const code = ref(111111)
// step('changePassword')
function sendCode(e) {
  emit('change-step', e)
}
countDown()
</script>

<style></style>
