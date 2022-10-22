<template>
  <div class="cart-items">
    <div class="header">
      <h2 class="title">
        {{ $t('headers.Cart') }}
      </h2>
      <h4>
        {{ totalItems }}
        <span>{{ $t('misc.items in cart') }}</span>
      </h4>
    </div>
    <div class="cart-content overflow-hidden">
      <table v-if="cart" class="w-100">
        <tr
          v-for="item in cart"
          :key="item"
          class="w-100 justify-content-between"
        >
          <td class="product">
            <div class="img-wrapper">
              <img
                v-if="item.product"
                class="img-fluid"
                v-lazy="item.product.main_image"
                :alt="item.product.name"
              />
              <img
                v-else
                class="img-fluid"
                v-lazy="item.product_image"
                :alt="item.product_name"
              />
            </div>
            <div class="caption">
              <h3 class="name" v-if="item.product">{{ item.product.name }}</h3>
              <h3 class="name" v-if="item.product_name">
                {{ item.product_name }}
              </h3>
              <p class="brand" v-if="item.product">
                {{ item.product.brand_name }}
              </p>
              <p class="brand" v-if="item.category_name">
                {{ item.category_name }}
              </p>
              <p class="price" v-if="item.product">{{ item.product.price }}</p>
              <p class="price" v-if="item.product_price">
                {{ item.product_price }}
              </p>
            </div>
          </td>
          <td class="quantity">
            <div class="stepper-group cart-group">
              <div class="stepper">
                <span>
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </span>
                <input
                  type="text"
                  name="quantity"
                  v-model="item.product_quantity"
                  class="form-control"
                  v-if="item.product_quantity"
                />
                <input
                  v-else
                  type="text"
                  name="quantity"
                  v-model="item.quantity"
                  class="form-control border-0"
                />
                <span>
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </span>
              </div>
            </div>
          </td>
          <td class="action">
            <button
              class="btn btn-primary custom-btn see-more text-danger"
              @click="removeItem(item)"
            >
              <div class="spinner-border" role="status" v-if="loading">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span v-else>
                <font-awesome-icon icon="fa-regular fa-trash-can" />
              </span>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div v-if="isLoggedIn">
      <div class="checkout" v-if="cartDetais">
        <div class="input-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <button class="input-group-text">{{ $t('buttons.apply') }}</button>
        </div>
        <div>
          <span class="total">{{ $t('misc.Sub Total') }}</span>
          <span class="line"></span>
          <span class="price">{{ cartDetais.sub_total_price }} $</span>
        </div>
        <div>
          <span class="total">{{ $t('misc.Descount') }}</span>
          <span class="line"></span>
          <span class="price">{{ cartDetais.discount }} $</span>
        </div>
        <div>
          <span class="total">{{ $t('misc.Shipping') }}</span>
          <span class="line"></span>
          <span class="price">{{ cartDetais.shipping_price }} $</span>
        </div>
        <div>
          <span class="total totals">{{ $t('misc.totals') }}</span>
          <span class="line"></span>
          <span class="price">{{ cartDetais.final_price }} $</span>
        </div>
        <div class="justify-content-center mt-4">
          <button class="btn btn-primary custom-btn frm-action">
            {{ $t('buttons.CHECKOUT') }}
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-5" v-else>
      <a href="/login" class="btn btn-primary custom-btn frm-action">
        {{ $t('buttons.signIn') }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    removeItem(item) {
      this.$store.dispatch('removeItem', item)
    },
  },
  computed: {
    ...mapGetters([
      'totalItems',
      'isLoggedIn',
      'cartDetais',
      'cart',
      'loading',
    ]),
  },
}
</script>

<style lang="scss">
.cart-items {
  .spinner-border {
    width: 20px !important;
    height: 20px !important;
  }
  .header {
    h4 {
      text-align: center;
      font: normal normal bold 14px/19px Montserrat;
      span {
        font: normal normal 300 14px/19px Montserrat;
      }
    }
  }
  .cart-content {
    height: 270px;
    overflow-y: auto;
    table {
      tr {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        align-items: center;
      }
      td.product {
        display: flex;
        flex: 1;
        margin-right: 10px;
        align-items: center;
        max-width: 200px;
        .img-wrapper {
          margin-inline-end: 10px;
          img {
            width: 80px;
            border-radius: 20px;
          }
        }
        .caption {
          flex: 1;
          .name {
            font: normal normal bold 14px/25px Montserrat;
            letter-spacing: 0px;
            color: $forth_color;
          }
          .brand {
            font: normal normal 300 14px/19px Montserrat;
            letter-spacing: 0px;
            color: #000000;
          }
          .price {
            font: normal normal bold 16px/21px Montserrat;
            letter-spacing: 0px;
            color: #22d877;
          }
        }
      }
    }
  }
  .input-group {
    border: 1px solid #00000026 !important;
    border-radius: 50px !important;
    overflow: hidden !important;
    button,
    input {
      background: none !important;
      border: none !important;
      padding-inline: 20px;
    }
  }
  .checkout {
    > div {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .total {
        font: normal normal normal 13px/17px Montserrat;
        &.totals {
          font-weight: bold;
        }
      }
      .price {
        font: normal normal bold 16px/21px Montserrat;
      }
      .line {
        height: 0 !important;
        border: 1px dashed #dddddd;
        flex: 1;

        margin: 0 10px;
      }
    }
  }
}
</style>
