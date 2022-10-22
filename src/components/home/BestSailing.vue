<template>
  <section class="best-offers">
    <div class="conatiner-fluid">
      <div class="container">
        <h2 class="title">{{ $t('headers.Best Selling') }}</h2>

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
              v-if="cat"
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
    </div>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import { defineProps, ref } from 'vue'
import ProductCard from '../ui/ProductCard.vue'
const items = defineProps(['items', 'categories'])

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
</script>

<style lang="scss">
.best-offers {
  .content {
    padding: 50px 15px;
  }
}
.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  li {
    a {
      font-weight: 400;
      font-size: 14px !important;
      // font: normal normal medium 25px/40px Montserrat;
      color: #767676;
      flex-direction: column;
      align-items: flex-start;
      transition: all 0.3s ease-in;
      &.active {
        color: $forth_color;
        position: relative;
        &::after {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          margin-top: 5px;
          align-self: baseline;

          background: $forth_color;
        }
      }
    }
  }
}
.carousel {
  padding: 0;
}

.carousel__next,
.carousel__prev {
  margin: 0;
  top: 35%;
  transform: translateY(-35%);
}
.carousel__next {
  right: -25px;
}
.carousel__prev {
  left: -25px;
}

.carousel--rtl .carousel__next {
  right: auto;
  left: -25px;
}
.carousel--rtl .carousel__prev {
  left: auto;
  right: -25px;
}
</style>
