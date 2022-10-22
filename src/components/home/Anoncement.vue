<template>
  <section class="ads" dir="ltr">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 mb-3 item ps-0 super-sell">
          <div class="img-wrapper">
            <img src="@/assets/ads-1.webp" alt="ads" class="img-fluid" />
            <div class="info">
              <h3 class="title">{{ $t('misc.Super Sale') }}</h3>
              <p class="description">{{ $t('misc.New Collection') }}</p>
              <div>
                <a href="#" class="btn btn-primary see-more">
                  {{ $t('links.Shop Now') }}
                  <span>
                    <font-awesome-icon
                      :icon="`fa-solid ${
                        $i18n.locale == 'en'
                          ? 'fa-arrow-right'
                          : 'fa-arrow-left'
                      } `"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 item pe-0 super-sell right">
          <div class="img-wrapper-right">
            <img src="@/assets/ads-2.webp" alt="ads" class="img-fluid" />
            <div class="info">
              <h3 class="title">{{ $t('misc.New Season') }}</h3>
              <p class="description">Sale 40% Off</p>
              <div>
                <a href="#" class="btn btn-primary see-more">
                  <span>
                    <font-awesome-icon
                      :icon="`fa-solid ${
                        $i18n.locale == 'en'
                          ? 'fa-arrow-right'
                          : 'fa-arrow-left'
                      } `"
                    />
                  </span>
                  {{ $t('links.Shop Now') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
section.ads {
  min-height: 400px;
  padding: 50px 0;
  position: relative;
  .item {
    @media (max-width: 768px) {
      padding: 0 !important;
    }
  }
  .super-sell {
    .info {
      right: 10%;
      h3.title {
        line-height: 22px !important;
        font-size: 18px !important;
        margin: 0;
        color: $forth_color;
      }
      p.description {
        color: $forth_color;
        margin: 0;
        line-height: 35px;
        font-size: 24px !important;
      }
      a {
        line-height: 22px !important;
        color: $forth_color !important;

        font-size: 14px !important;

        @media (min-width: 768px) {
          font-size: 18px !important;
        }
      }
    }
    &.right {
      .info {
        right: unset !important;
        left: 10%;
        a {
          text-align: start !important;
          img {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
