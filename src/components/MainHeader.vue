<template>
  <teleport to="body">
    <div
      class="modal fade"
      id="cart-menu"
      tabindex="-1"
      aria-labelledby="cart-menuLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>

          <div class="modal-body">
            <cart-menu />
          </div>
        </div>
      </div>
    </div>
  </teleport>
  <teleport to="body">
    <div
      class="modal fade"
      id="navbar-menu"
      tabindex="-1"
      aria-labelledby="cart-navbar-menu"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>

          <div class="modal-body">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  {{ $t('navs.home') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about-us">
                  {{ $t('navs.aboutUs') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shop">
                  {{ $t('navs.Shop') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact-us">
                  {{ $t('navs.contactUs') }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </teleport>
  <teleport to="body">
    <search v-if="searchArea" @closeSearch="closeSearch" />
  </teleport>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    :class="pageScroll ? 'fixed-top' : ''"
    id="navbar"
  >
    <div
      class="container-fluid justify-content-center justify-content-md-between"
    >
      <router-link to="/" class="navbar-brand mb-3 mb-sm-0" href="">
        <img src="@/assets/logo.webp" alt="logo" />
      </router-link>

      <div
        class="collapse justify-content-center navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              {{ $t('navs.home') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-us">
              {{ $t('navs.aboutUs') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">
              {{ $t('navs.Shop') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">
              {{ $t('navs.contactUs') }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="cart-wrapper">
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link
          to="/login"
          class="btn btn-primary custom-btn"
          v-if="!isLoggedIn"
        >
          {{ $t('buttons.signIn') }}
        </router-link>
        <a
          role="button"
          class="btn btn-primary custom-btn"
          @click="logout"
          v-else
        >
          {{ $t('buttons.logout') }}
        </a>
        <a role="button" @click="openSearch">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </a>
        <a
          role="button"
          class="cart-btn"
          data-bs-toggle="modal"
          data-bs-target="#cart-menu"
        >
          <font-awesome-icon icon="fa-solid fa-cart-arrow-down" />
          <span class="budget" v-if="totalQuantity != 0">
            {{ totalQuantity }}
          </span>
        </a>
        <router-link to="/washlist">
          <font-awesome-icon icon="fa-regular fa-heart" />
        </router-link>
        <router-link to="/account">
          <font-awesome-icon icon="fa-regular fa-user" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import CartMenu from './CartMenu.vue'
import { ref, computed } from 'vue'
import Search from './Search.vue'
import { useStore } from 'vuex'
const pageScroll = ref(false)
const searchArea = ref(false)
const store = useStore()
function closeSearch() {
  searchArea.value = false
}
const totalQuantity = computed(() => store.getters.totalQuantity)

const isLoggedIn = store.getters.isLoggedIn

function logout() {
  store.dispatch('logout')
}

function openSearch() {
  searchArea.value = true
}

window.addEventListener('scroll', () => {
  window.scrollY > 90 ? (pageScroll.value = true) : (pageScroll.value = false)
})
</script>

<style lang="scss">
.navbar {
  min-height: 70px;
  animation: move-out 0.3s linear forwards !important;

  &.fixed-top {
    opacity: 1;
    background: #fff;
    animation: move-in 0.3s linear forwards !important;
    @keyframes move-in {
      0% {
        transform: translateY(-10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  @keyframes move-out {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .navbar-nav {
    height: 70px;
    .nav-item {
      .nav-link {
        height: 100%;
      }
    }
  }
  a {
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    &.nav-link {
      font: normal normal 300 18px/27px Montserrat;
      letter-spacing: 0px;
      color: #000;
      text-transform: capitalize;
      opacity: 1;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0e3958;
        transition: all 0.3s ease-in;
        height: 3px;
        width: 0;
      }
      &:hover {
        &::after {
          width: calc(100% - 16px);
        }
      }
    }

    &.router-link-exact-active {
      font: normal normal 500 18px/27px Montserrat;
      letter-spacing: 0px;
      color: #0e3958;
      text-transform: capitalize;
      opacity: 1;
      &::after {
        width: calc(100% - 16px);
      }
    }
  }
  .cart-wrapper {
    display: flex;
    align-items: center;

    a.custom-btn {
      font: normal normal normal 11px/15px Montserrat !important;
      padding: 8px 20px;
    }
    .cart-btn {
      position: relative;
      span {
        position: absolute;
        top: -5px;
        right: 2px;
        background: red;
        outline: 1px solid #fff;
        border-radius: 50%;
        width: 13px;
        height: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        color: #fff;
      }
    }
  }
  .navbar-toggler {
    box-shadow: none !important;
    outline: none !important;
  }
}
</style>
