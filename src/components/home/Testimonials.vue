<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="title">{{ $t('headers.Our Client Say!') }}</h2>
      <div class="content">
        <carousel
          :settings="settings"
          :items-to-show="1"
          :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
        >
          <slide v-for="item in items.items" :key="item.id">
            <div class="testimonial">
              <p class="description">
                <span class="left">
                  <font-awesome-icon icon="fa-solid fa-quote-left" />
                </span>
                {{ item.description }}
                <span class="right">
                  <font-awesome-icon icon="fa-solid fa-quote-right" />
                </span>
              </p>
              <div class="client-info">
                <div class="img-wrapper">
                  <img v-lazy="item.image" :alt="item.name" />
                </div>
                <h4 class="name">{{ item.name }}</h4>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import { defineProps } from 'vue'

const items = defineProps(['items'])
</script>

<style lang="scss">
.testimonials {
  padding-top: 50px;
  background: $section-background;
  .content {
    padding: 0 20px;
    .carousel__next,
    .carousel__prev {
      margin: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .testimonial {
      padding: 50px 0;
      p.description {
        position: relative;
        width: 80%;
        margin: 0 auto 20px;
        font-size: 16px;
        @media (min-width: 768px) {
          font-size: 20px;
        }
        letter-spacing: 0px;
        color: #676767;
        span {
          position: absolute;
          color: $main-color;
          font-size: 30px;
          &.left {
            top: -30px;
            left: -20px;
          }
          &.right {
            bottom: -30px;
            right: -30px;
          }
        }
      }
      .client-info {
        .img-wrapper {
          text-align: center;
          padding: 5px;
          img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
          }
        }
        h4.name {
          font: normal normal bold 18px/20px Montserrat;
          letter-spacing: -0.29px;
          color: #000;
        }
      }
    }
  }
}
</style>
