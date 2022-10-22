<template>
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div
      id="liveToast"
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <button
          type="button"
          class="btn-close"
          @click="closeNotification"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">
        <div class="row">
          <div class="col-3 mb-3">
            <img
              width="50"
              height="50"
              :src="imgSrc"
              alt="notification"
              class="img-fluid"
              v-if="imgSrc"
            />
          </div>

          <div class="col-12">
            <div class="cart-buttons">
              <a href="/cart" class="btn-primary btn">
                <i class="fa"></i>
                <span>{{ $t('misc.View Cart') }}</span>
              </a>
              <a href="/checkout" class="btn-checkout btn">
                <i class="fa"></i>
                <span>Checkout{{ $t('buttons.Checkout') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mode', 'imgSrc', 'message'],
  methods: {
    closeNotification() {
      this.$emit('close-modal')
    },
  },
}
</script>

<style lang="scss">
.toast-container {
  position: relative;
  .toast-header {
    position: absolute;
    padding: 0;
    top: 24px;
    right: 24px;
    border: 0;
    z-index: 20;
    .btn-close {
      margin: 0;
      padding: 0;
    }
  }
}
.toast-body {
  h4 {
    margin-bottom: 0;
    font-size: 16px;
    text-transform: none;
  }
  .cart-buttons {
    text-align: center;
    a {
      margin: 0 6px;
      font-size: 13px;
    }
    .btn-checkout {
      background: rgb(80, 173, 85);
      color: #fff !important;
    }
  }
}
</style>
