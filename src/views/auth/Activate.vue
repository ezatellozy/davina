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
        <form @click.prevent>
          <h2 class="title">{{ $t('headers.Sign In To Your Account') }}</h2>
          <div class="row">
            <div
              class="mb-4 col-12"
              :class="{ error: v$.email.$errors.length }"
            >
              <input
                type="email"
                class="form-control"
                :placeholder="$t('placeholder.emailAddress')"
                v-model="form.email"
              />
              <div
                class="input-errors"
                v-for="error of v$.email.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div
              class="mb-4 col-12"
              :class="{ error: v$.phone.$errors.length }"
            >
              <input
                type="phone"
                class="form-control"
                autocomplete="false"
                v-model="form.phone"
                :placeholder="$t('placeholder.mobileNumber')"
              />
              <div
                class="input-errors"
                v-for="error of v$.phone.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div class="mb-4 col-12" :class="{ error: v$.code.$errors.length }">
              <input
                type="text"
                class="form-control"
                autocomplete="false"
                v-model="form.code"
                :placeholder="$t('placeholder.code')"
              />
              <div
                class="input-errors"
                v-for="error of v$.code.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>

            <div class="errMsg mb-4" v-if="status">{{ status }}</div>

            <div class="mb-4 text-center col-12">
              <button
                @click="submit"
                class="btn btn-primary custom-btn frm-action"
              >
                <div class="spinner-border" role="status" v-if="loading">
                  <span class="sr-only">Loading...</span>
                </div>
                <span v-else>
                  {{ $t('buttons.activate') }}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { useStore, mapGetters } from 'vuex'
import { reactive, computed } from 'vue'
import { required, email } from '@vuelidate/validators'
export default {
  computed: {
    ...mapGetters(['status', 'loading']),
  },
  setup() {
    const getDeviceType = () => {
      const ua = navigator.userAgent
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet'
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua,
        )
      ) {
        return 'mobile'
      }
      return 'desktop'
    }
    const store = useStore()
    const form = reactive({
      email: '',
      phone: '',
      code: 111111,
      device_type: getDeviceType(),
      device_token: 'sdasdasdsad',
    })

    const rules = computed(() => {
      return {
        email: { required, email },
        phone: { required },
        code: { required },
      }
    })
    const v$ = useVuelidate(rules, form)

    async function submit() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        store.dispatch('verify', form)
      }
    }

    return { form, v$, submit }
  },
}
</script>

<style></style>
