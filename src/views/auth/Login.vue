<template>
  <section class="user-account auth">
    <div class="background">
      <img
        width="100"
        height="50"
        class="bg-1"
        src="@/assets/account-bg-1.webp"
        alt="bg1"
      />

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
              :class="{ error: v$.password.$errors.length }"
            >
              <input
                type="password"
                class="form-control"
                autocomplete="false"
                v-model="form.password"
                :placeholder="$t('placeholder.password')"
              />
              <div
                class="input-errors"
                v-for="error of v$.password.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div class="errMsg mb-4" v-if="status">
              {{ status }}
              <router-link
                to="/activate"
                v-if="status == 'هذا الحساب غير مفعل '"
              >
                {{ $t('buttons.activate') }}
              </router-link>
            </div>

            <div class="mb-4 text-center col-12">
              <router-link to="/forget-passwrod" class="errMsg">
                {{ $t('misc.Forget Your Password?') }}
              </router-link>
            </div>
            <div class="mb-4 text-center col-12">
              <button
                @click="submit"
                class="btn btn-primary custom-btn frm-action"
              >
                <div class="spinner-border" role="status" v-if="loading">
                  <span class="sr-only">Loading...</span>
                </div>
                <span v-else>
                  {{ $t('buttons.signIn') }}
                </span>
              </button>
            </div>

            <div class="col-md-6 mb-4">
              <a href="#" class="btn btn-primary custom-btn login-google">
                <img
                  src="@/assets/google-icon.png"
                  width="20"
                  height="20"
                  class="img-fluid me-2"
                  alt="google-icon"
                />
                {{ $t('buttons.Sign In With Google') }}
              </a>
            </div>
            <div class="col-md-6 mb-4">
              <a href="#" class="btn btn-primary custom-btn login-facebook">
                <font-awesome-icon
                  icon="fa-brands fa-facebook-f"
                  class="me-2"
                />
                {{ $t('buttons.Sign In With Facebook') }}
              </a>
            </div>

            <div
              class="col-12 d-flex align-items-center justify-content-center bottom"
            >
              <h4 class="m-0 d-inline me-3">
                {{ $t('misc.Dont Have An Account?') }}
              </h4>
              <router-link to="/register">
                {{ $t('buttons.signUp') }}
              </router-link>
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
      password: '',
      device_type: getDeviceType(),
    })

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required },
      }
    })
    const v$ = useVuelidate(rules, form)

    async function submit() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        store.dispatch('login', form)
      }
    }

    return { form, v$, submit }
  },
}
</script>

<style></style>
