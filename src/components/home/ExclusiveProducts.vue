<template>
  <section class="exclusive-products">
    <div class="container">
      <h2 class="title">{{ $t('headers.Exclusive Products') }}</h2>
      <div class="content">
        <ul class="list-unstyled tabs">
          <li>
            <a
              :class="categoryId == 'all' ? 'active' : ''"
              role="button"
              @click="getItems('all')"
            >
              {{ $t('headers.All') }}
            </a>
          </li>
          <li v-for="category in items.categories" :key="category.id">
            <a
              :class="categoryId == category.id ? 'active' : ''"
              role="button"
              @click="getItems(category.id)"
            >
              {{ category.name }}
            </a>
          </li>
        </ul>
        <transition name="fade">
          <carousel
            :settings="settings"
            :items-to-show="2"
            :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
            v-if="cat"
          >
            <slide v-for="product in items.items" :key="product.id">
              <ProductCard class="items" :item="product" />
            </slide>
            <template #addons>
              <navigation />
            </template>
          </carousel>
        </transition>
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

import { defineProps, ref } from 'vue'
import ProductCard from '../ui/ProductCard.vue'
const categoryId = ref('all')
const cat = ref(true)
function getItems(id) {
  cat.value = false
  categoryId.value = id
  setTimeout(() => (cat.value = true), 300)
}
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

const items = defineProps(['items', 'categories'])
</script>

<style lang="scss">
.exclusive-products {
  padding-top: 50px;
  .content {
    padding: 50px 15px;
  }
}
.best-offers .carousel__slide,
.exclusive-products .carousel__slide {
  .items {
    padding: 0 10px;
  }
}
</style>
