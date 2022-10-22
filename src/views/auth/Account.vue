<template>
  <div class="container">
    <div class="content py-5">
      <h2 class="title">{{ $t('headers.Welcome') }}</h2>
      <h3 class="title">
        {{ $t('headers.Please Choose Your Way To Get Your Account') }}
      </h3>
      <div class="row">
        <div class="mb-4 text-center col-12">
          <router-link
            class="btn btn-primary custom-btn frm-action"
            to="/login"
          >
            {{ $t('buttons.signIn') }}
          </router-link>
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
