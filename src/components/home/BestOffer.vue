<template>
  <section class="best-offers">
    <div class="container">
      <h2 class="title">{{ $t('headers.bestOffers') }}</h2>
      <div class="content">
        <carousel
          :settings="settings"
          :items-to-show="2"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
          <slide v-for="product in items.items" :key="product.id">
            <ProductCard class="items" :item="product" />
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
        <div class="text-center mt-5">
          <a href="#" class="btn btn-primary see-more">
            {{ $t('links.See All') }}
            <span>
              <font-awesome-icon
                :icon="`fa-solid ${
                  $i18n.locale == 'en' ? 'fa-arrow-right' : 'fa-arrow-left'
                } `"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import { defineProps } from 'vue'
import ProductCard from '../ui/ProductCard.vue'

const settings = {
  breakpoints: {
    768: {
      itemsToShow: 3,
    },
    1024: {
      itemsToShow: 4,
    },
  },
}

const items = defineProps(['items'])
</script>

<style lang="scss">
.best-offers {
  @media (min-width: 992px) {
    padding-top: 50px;
  }
  .content {
    padding: 50px 15px;
  }
}
</style>
