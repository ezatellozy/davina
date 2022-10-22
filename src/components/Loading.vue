<template>
  <div class="loading">
    <div class="logo mb-4">
      <img src="@/assets/logo.webp" alt="logo" />
    </div>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
}
</style>
