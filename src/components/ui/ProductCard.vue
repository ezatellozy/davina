<template>
  <div class="product-wrapper" v-if="item">
    <div class="inner-item">
      <div class="img-wrapper">
        <div class="product-labels">
          <span class="product-label" v-if="item.discount">
            {{ item.discount }} % {{ $t('misc.off') }}
          </span>
        </div>
        <img
          v-lazy="item.main_image"
          class="main-img img-fluid"
          :alt="item.name"
        />
        <img
          v-lazy="item.hover_image"
          class="hover-img img-fluid"
          :alt="item.name"
        />
      </div>
      <div class="caption">
        <h3 class="name">{{ item.name }}</h3>
        <p class="description">{{ item.brand_name }}</p>
        <div class="bottom d-flex justify-content-between align-items-center">
          <div class="price">
            <span class="price-offer" v-if="item.offer_price">
              {{ item.offer_price }}
            </span>
            <span class="old-price" v-if="item.offer_price">
              {{ item.price }}
            </span>
            <span class="normal-price" v-if="!item.offer_price">
              {{ item.price }}
            </span>
            <span>$</span>
          </div>

          <div class="cart-wraper">
            <a
              role="button"
              @click="openModal(item.id)"
              class="btn btn-primary see-more"
            >
              <font-awesome-icon icon="fa-solid fa-cart-arrow-down" />
            </a>
            <teleport to="body">
              <ProductOption
                :item="item"
                @closeModal="closeModal"
                v-if="openProductModal == item.id"
              />
            </teleport>
            <a role="button" class="btn btn-primary see-more">
              <font-awesome-icon icon="fa-regular fa-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOption from './ProductOption.vue'
export default {
  props: ['item'],
  components: { ProductOption },
  data() {
    return {
      openProductModal: 0,
    }
  },
  methods: {
    closeModal() {
      this.openProductModal = 0
    },
    openModal(id) {
      this.openProductModal = id
    },
  },
}
</script>

<style lang="scss">
.product-wrapper {
  position: relative;
  max-width: 250px;
  cursor: pointer;
  height: 100%;
  .inner-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    .img-wrapper {
      position: relative;
      display: flex;
      text-align: center;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 10px;
      height: 250px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .main-img {
        opacity: 1;
        visibility: visible;
        transition: all 0.3s ease-in-out;
      }
      .hover-img {
        transition: all 0.3s ease-in-out;
        position: absolute;
        visibility: hidden;
        top: 0;
        left: 0;

        opacity: 0;
      }
    }
    .product-labels {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      .product-label {
        border-radius: 20px 8px 8px 0px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 14px;
        background: red;
      }
    }
    .caption {
      flex: 1;
      display: flex;
      flex-direction: column;
      .name {
        font-weight: 500;
        font-size: 16px;
        @media (min-width: 768px) {
          font-weight: 700;
          font-size: 18px;
        }
        color: $forth_color;
        opacity: 1;
        margin-bottom: 10px;
        text-align: start;
      }
      p.description {
        letter-spacing: 0px;
        text-align: start;
        color: #474747;
        opacity: 1;
        margin-bottom: 10px;
        font-size: 15px;
        font-size: 16px;
        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
      .price {
        .normal-price {
          font: normal normal 500 18px/26px Montserrat;
          letter-spacing: 0px;
          color: $forth_color;
        }
        .offer-price {
          font: normal normal 600 20px/27px Montserrat;
          letter-spacing: 0px;
          color: $forth_color;
        }
        .old-price {
          font: normal normal 600 14px/19px Montserrat;
          letter-spacing: 0px;
          color: #767676;
          text-decoration: line-through;
        }
      }
      .bottom {
        margin-top: auto;
      }
      .cart-wraper {
        a {
          min-width: 30px;
        }
      }
    }
  }

  &:hover {
    .inner-item {
      .img-wrapper {
        .main-img {
          opacity: 0;
          visibility: hidden;
        }
        .hover-img {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}
</style>
