<template>
  <div class="search-area">
    <form @click.prevent>
      <div class="input-group justify-content-center align-items-center">
        <input
          type="text"
          class="form-control"
          :placeholder="$t('placeholder.Search Here')"
        />
        <span
          class="input-group-text"
          id="inputGroup-sizing-default"
          @click="closeSearch"
        >
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    closeSearch() {
      this.$emit('close-search')
    },
  },
}
</script>

<style lang="scss">
.search-area {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1040;
  form {
    width: 100%;
    text-align: center;
    input {
      width: 90%;
      max-width: 600px;
      font: normal normal 600 60px/90px Montserrat !important;
      text-align: center;
      letter-spacing: 0px;
      color: #ffffff !important;
      text-transform: capitalize !important;
      background: none !important;
      border: none !important;
      border-radius: 0 !important;
      padding-bottom: 10px;
      height: auto !important;
      border-bottom: 1px solid #fff !important;
    }
    .input-group-text {
      background: none !important;
      border: none !important;
      color: #fff;
      font-size: 18px;
      background: #000 !important;
      width: 25px !important;
      height: 25px !important;
      margin-left: 0px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-radius: 50%;
      padding: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
