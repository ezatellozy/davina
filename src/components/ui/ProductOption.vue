<template>
  <div
    class="modal fade show extra-option"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    @click.stop="closeModal"
  >
    <div class="modal-dialog" @click.stop>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ $t('headers.Available Options') }}
          </h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="product-options">
            <div class="form-group mb-4">
              <label class="control-label">{{ $t('misc.selectSize') }}</label>
              <div id="input-option">
                <div
                  class="checkbox"
                  v-for="extraOptions in item.sizes"
                  :key="extraOptions"
                >
                  <label v-if="extraOptions.quantity != 0">
                    <input
                      type="radio"
                      :value="extraOptions.id"
                      v-model="cart.size"
                    />
                    <span class="option-value">
                      {{ extraOptions.size }}
                    </span>
                  </label>
                </div>
              </div>
              <div
                class="input-errors"
                v-for="error of v$.color.$errors"
                :key="error.$uid"
              >
                <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">{{ $t('misc.selectColor') }}</label>
              <div id="input-option">
                <div
                  class="radio"
                  v-for="extraOptions in item.colors"
                  :key="extraOptions.id"
                >
                  <label>
                    <input
                      type="radio"
                      :value="extraOptions.id"
                      v-model="cart.color"
                    />

                    <span
                      :style="`background: ${extraOptions.color}`"
                      class="option-value"
                    ></span>
                  </label>
                </div>
                <div
                  class="input-errors"
                  v-for="error of v$.color.$errors"
                  :key="error.$uid"
                >
                  <div class="errMsg">{{ $t(`misc.${error.$message}`) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="stepper-group cart-group">
            <div class="stepper">
              <span @click="changeQuantity(-1)">
                <font-awesome-icon icon="fa-solid fa-minus" />
              </span>
              <input
                type="text"
                name="quantity"
                v-model="cart.quantity"
                class="form-control"
              />
              <span @click="changeQuantity(1)">
                <font-awesome-icon icon="fa-solid fa-plus" />
              </span>
            </div>
          </div>
          <button
            type="button"
            @click="addToCart"
            class="btn btn-primary custom-btn frm-action"
          >
            <font-awesome-icon icon="fa-solid fa-cart-plus" />
            {{ $t('buttons.addToCart') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  props: ['item'],
  emits: ['closeModal'],

  setup(props, { emit }) {
    const store = useStore()
    const cart = reactive({
      quantity: 1,
      size: '',
      color: '',
      product: props.item,
      product_id: props.item.id,
    })
    function closeModal() {
      emit('close-modal')
    }
    function changeQuantity(e) {
      if (e == -1 && cart.quantity == 1) return
      cart.quantity += e
    }
    async function addToCart() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        store.dispatch('addToCart', cart)

        closeModal()
      }
    }
    const rules = computed(() => {
      return {
        size: { required },
        color: { required },
      }
    })
    const v$ = useVuelidate(rules, cart)
    return { cart, changeQuantity, closeModal, addToCart, v$ }
  },
}
</script>

<style lang="scss">
.modal.extra-option {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.76);
  }
  &.show {
    display: flex !important;
    .modal-dialog {
      transform: scale(1);
    }
  }
  .modal-header {
    border: none;
  }
  .modal-footer {
    .btn.custom-btn {
      flex: 1;
      border-radius: 5px !important;
      height: 35px !important;
    }
    .stepper {
      border-radius: 5px !important;
      input {
        height: 35px !important;
      }
    }
  }
}
#input-option {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .checkbox,
  .radio {
    display: flex;
    label {
      input {
        display: none !important;
      }
      input:checked + .option-value {
        background: #f0f2f5;
        box-shadow: inset 0 0 5px rgb(0 0 0 / 10%);
        border-color: $second-color;
      }
      .option-value {
        border: 2px solid transparent;
        margin-right: 8px;

        min-width: 30px;
        min-height: 30px;
        border-width: 1px;
        border-style: solid;
        border-color: #e2e2e2;
        border-radius: 2px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
      }
    }
  }
}
</style>
