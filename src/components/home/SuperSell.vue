<template>
  <section class="super-sell">
    <div class="container-fluid p-0">
      <div class="img-wrapper">
        <img src="@/assets/3.webp" class="img-fluid" alt="super sell" />
      </div>
      <div class="info">
        <h3 class="title">{{ $t('misc.Super Sale') }}</h3>
        <p class="description">{{ $t('misc.New Collection') }}</p>
        <div>
          <a href="#" class="btn btn-primary see-more">
            {{ $t('links.Shop Now') }}
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

<script>
export default {
  props: ['items'],
}
</script>

<style lang="scss">
.super-sell {
  position: relative;
  .info {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    h3.title {
      text-align: left;
      font: normal normal normal 20px/30px Montserrat;
      letter-spacing: 0px;
      color: #ffffff;
      text-transform: capitalize;
      opacity: 0.63;
    }
    p.description {
      font: normal normal 600 18px/28px Montserrat;
      color: #ffffff;
    }
    a {
      display: block !important;

      text-align: right;
      color: #ffffff !important;
      font: normal normal 600 14px/28px Montserrat !important;
      img {
        filter: brightness(0) invert(1);
      }
    }
    @media (min-width: 768px) {
      p.description {
        font: normal normal 600 38px/50px Montserrat;
      }
      h3.title {
        font: normal normal normal 30px/45px Montserrat;
      }
      a {
        font: normal normal normal 30px/45px Montserrat !important;
      }
    }
    @media (min-width: 992px) {
      right: 20%;
    }
  }
}
</style>
