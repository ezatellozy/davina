<template>
  <section class="clients">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col" v-for="item in items" :key="item.id">
          <div class="img-wrapper">
            <img
              class="img-fluid"
              v-lazy="item.image"
              :alt="item.title"
              :title="item.title"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['items'],
}
</script>

<style lang="scss">
.clients {
  padding: 50px;
  .img-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
