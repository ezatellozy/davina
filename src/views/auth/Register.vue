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
        <h2 class="title fw-normal">{{ $t('headers.Welcome To Davina') }}</h2>
        <h3 class="title fw-normal">{{ $t('headers.Create An Account') }}</h3>
        <form @click.prevent class="register">
          <div class="row">
            <div
              class="mb-4 col-md-6"
              :class="{ error: v$.full_name.$errors.length }"
            >
              <input
                type="text"
                class="form-control"
                v-model="form.full_name"
                :placeholder="$t('placeholder.fullName')"
              />
              <div
                class="input-errors"
                v-for="error of v$.full_name.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div
              class="mb-4 col-md-6"
              :class="{ error: v$.user_name.$errors.length }"
            >
              <input
                type="text"
                class="form-control"
                v-model="form.user_name"
                :placeholder="$t('placeholder.userName')"
              />
              <div
                class="input-errors"
                v-for="error of v$.user_name.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div
              class="mb-4 col-12"
              :class="{ error: v$.email.$errors.length }"
            >
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                :placeholder="$t('placeholder.emailAddress')"
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
              class="mb-4 col-3"
              :class="{ error: v$.countryCode.$errors.length }"
            >
              <select class="form-select" v-model="form.countryCode">
                <option value="+996">
                  <img src="@/assets/saudi.png" alt="saudi-flag" />
                  +966
                </option>
                <option value="+2">
                  <img src="@/assets/egypt.png" alt="saudi-flag" />
                  +2
                </option>
              </select>
              <div
                class="input-errors"
                v-for="error of v$.countryCode.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div class="mb-4 col-9" :class="{ error: v$.phone.$errors.length }">
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
            <div
              class="mb-4 col-12"
              :class="{ error: v$.password_confirmation.$errors.length }"
            >
              <input
                type="password"
                class="form-control"
                autocomplete="false"
                v-model="form.password_confirmation"
                :placeholder="$t('placeholder.cPassword')"
              />
              <div
                class="input-errors"
                v-for="error of v$.password_confirmation.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>

            <div class="errMsg mb-4" v-if="status">{{ status }}</div>

            <div class="mb-4 text-center col-12">
              <button
                :disabled="loading"
                @click="submit"
                class="btn btn-primary custom-btn frm-action"
              >
                <div class="spinner-border" role="status" v-if="loading">
                  <span class="sr-only">Loading...</span>
                </div>
                <span v-else>
                  {{ $t('buttons.signUp') }}
                </span>
              </button>
            </div>
            <div class="col-12 mb-4 d-flex justify-content-between">
              <div class="row w-100">
                <div class="col-md-6 mb-4 mb-md-0">
                  <a href="#" class="btn btn-primary custom-btn login-google">
                    <img
                      src="@/assets/google-icon.png"
                      class="img-fluid me-2"
                      alt="google-icon"
                    />
                    {{ $t('buttons.Sign Up With Google') }}
                  </a>
                </div>
                <div class="col-md-6 mb-4 mb-md-0">
                  <a href="#" class="btn btn-primary custom-btn login-facebook">
                    <font-awesome-icon
                      icon="fa-brands fa-facebook-f"
                      class="me-2"
                    />
                    {{ $t('buttons.Sign Up With Facebook') }}
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-12 d-flex align-items-center justify-content-center bottom"
            >
              <h4 class="m-0 d-inline me-3">
                {{ $t('misc.Have An Account?') }}
              </h4>
              <router-link to="/login">
                {{ $t('buttons.signIn') }}
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { useStore, mapGetters } from 'vuex'

import {
  required,
  email,
  sameAs,
  numeric,
  minLength,
} from '@vuelidate/validators'

export default {
  computed: {
    ...mapGetters(['status', 'loading']),
  },

  setup() {
    const store = useStore()

    const form = reactive({
      full_name: '',
      user_name: '',
      countryCode: '+2',
      phone: '',
      email: '',
      password: '',
      password_confirmation: '',
      device_token: 'sadsad',
      device_type: 'desktop',
    })
    const rules = computed(() => {
      return {
        full_name: { required },
        user_name: { required },
        // lastName: { required },
        countryCode: { required },
        phone: { required, numeric, minLength: minLength(10) },
        email: { required, email },
        password: { required },
        password_confirmation: {
          required,
          sameAsPassword: sameAs(form.password),
        },
      }
    })
    const v$ = useVuelidate(rules, form)

    async function submit() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        store.dispatch('register', form)
      }
    }

    return { form, v$, submit }
  },
}
</script>

<style></style>
