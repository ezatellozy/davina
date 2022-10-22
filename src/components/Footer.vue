<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="links">
            <h2>{{ $t('misc.HELP & INFORMATIONS') }}</h2>
            <ul class="list-unstyled">
              <li>
                <a href="#">{{ $t('links.help') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.FAQs') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Shipping') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Order Tracking') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Return A Product') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.VAT') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Privacy Policy') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Terms Of Use') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Terms Of Sell') }}</a>
              </li>
              <li>
                <a href="#">{{ $t('links.Terms & Condition') }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 mb-5">
          <div class="about">
            <div class="logo-wrapper">
              <img src="@/assets/logo.webp" alt="footerLogo" />
            </div>
            <div class="content">
              <p class="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <ul class="list-unstyled contacts">
                <li>
                  <a href="mailto:example@example.com">example@example.com</a>
                </li>
                <li><a href="tell:3596546321">3596546321</a></li>
              </ul>
              <ul class="list-unstyled settings d-flex justify-content-between">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{{ $t(`misc.Ship To`) }}</span>
                    <img
                      class="img-fluid"
                      src="@/assets/egypt.png"
                      alt="shipTo"
                    />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="lang">
                    <li>
                      <a class="dropdown-item" role="button">
                        <span>{{ $t('misc.Egypt') }}</span>
                        <img
                          class="img-fluid"
                          src="@/assets/ar.png"
                          alt="language"
                        />
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" role="button">
                        <span>{{ $t('misc.Saudi') }}</span>
                        <img
                          class="img-fluid"
                          src="@/assets/saudi.png"
                          alt="language"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{{ $t(`misc.Currency`) }}</span>
                    <img
                      class="img-fluid"
                      src="@/assets/egypt.png"
                      alt="shipTo"
                    />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="lang">
                    <li>
                      <a class="dropdown-item" role="button">
                        <span>{{ $t('misc.EGP') }}</span>
                        <img
                          class="img-fluid"
                          src="@/assets/ar.png"
                          alt="language"
                        />
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" role="button">
                        <span>{{ $t('misc.SAR') }}</span>
                        <img
                          class="img-fluid"
                          src="@/assets/saudi.png"
                          alt="language"
                        />
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="lang"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{{ $t(`misc.Language`) }}</span>
                    <img
                      class="img-fluid"
                      :src="`${$i18n.locale}.png`"
                      alt="language"
                    />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="lang">
                    <li>
                      <a
                        class="dropdown-item"
                        role="button"
                        @click="selLocale('en')"
                      >
                        <span>English</span>
                        <img
                          class="img-fluid"
                          src="@/assets/en.png"
                          alt="language"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        role="button"
                        @click="selLocale('ar')"
                      >
                        <span>العربية</span>
                        <img
                          class="img-fluid"
                          src="@/assets/ar.png"
                          alt="language"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-5">
          <div class="app-download">
            <h2>{{ $t('misc.Download Our Mobile App') }}</h2>
            <div class="row">
              <div class="col-4">
                <img src="@/assets/footer-app.webp" alt="app" />
              </div>
              <div class="col-8 d-flex flex-column info">
                <h5>{{ $t('misc.Get Our Offers Only On Our App') }}</h5>
                <div>
                  <a href="#">
                    <img src="@/assets/app-store.png" alt="app-store" />
                  </a>
                  <a href="#">
                    <img src="@/assets/google-play.png" alt="google-play" />
                  </a>
                </div>
              </div>
              <div class="col-12 mt-3 text-center">
                <img
                  class="img-fluid"
                  src="@/assets/payment.png"
                  alt="payment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <p>
        <bdi>&copy; {{ year }}</bdi>
        &nbsp;

        <bdi>{{ $t('misc.Shop All Rights Reserved') }}</bdi>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import Cookies from 'js-cookie'
function selLocale(lang) {
  Cookies.set('locale', lang)
  setTimeout(() => window.location.reload(), 300)
}

const year = computed(() => new Date().getFullYear())
</script>

<style lang="scss">
footer {
  background: $main_color;
  .container {
    padding-top: 50px;

    display: flex;
    flex-direction: column;
    > div > div:first-child {
      @media (max-width: 992px) {
        order: 2;
      }
    }
    > div > div:last-child {
      @media (max-width: 992px) {
        order: 3;
      }
    }
    > div > div:nth-child(2) {
      @media (max-width: 992px) {
        order: 1;
      }
    }
  }
  .links {
    h2 {
      color: #fff;
      font: normal normal bold 18px/24px Montserrat;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    ul {
      column-count: 2;
      margin: 0;
      li {
        margin-bottom: 30px;
        a {
          font: normal normal normal 13px/17px Montserrat;
          letter-spacing: 0px;
          color: #ffffff;
          text-transform: capitalize;
          opacity: 1;
        }
      }
    }
  }
  .about {
    height: 100%;
    display: flex;
    flex-direction: column;
    order: 1;
    .logo-wrapper {
      text-align: center;
      margin-bottom: 30px;
      img {
        filter: brightness(0) invert(1);
      }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    p.description {
      font: normal normal normal 15px/20px Raleway;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 40px;
    }
    ul.contacts {
      text-align: center;
      li {
        &:first-child {
          margin-bottom: 10px;
        }
      }
      a {
        color: #fff;
      }
    }
    ul.settings {
      margin-top: auto;
      li {
        color: #fff;
        img {
          max-width: 30px;
          margin-inline-start: 10px;
        }
      }
      a.dropdown-item {
        justify-content: space-between !important;
      }
    }
  }
  .app-download {
    h2 {
      font: normal normal normal 20px/27px Montserrat;
      letter-spacing: 0px;
      color: #ffffff;
      text-transform: capitalize;
      opacity: 1;
      margin-bottom: 30px;
    }
    .info {
      h5 {
        flex: 1;
        display: flex;
        align-items: center;
        font: normal normal normal 24px/27px Montserrat;
        color: #fff;
      }
    }
  }
  .copyrights {
    background: rgba(0, 0, 0, 0.18);
    // opacity: 0.18;
    p {
      opacity: 0.6;
      color: #fff;
      margin: 0;
      text-align: center;
      padding: 10px 0;
    }
  }
}
</style>
