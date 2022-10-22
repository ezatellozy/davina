<template>
  <section class="features">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6 mb-4 col-lg-2">
          <div class="feature">
            <div class="icon">
              <img
                width="80"
                height="auto"
                class="img-fluid"
                src="@/assets/icons/product-return.webp"
                alt="icon"
              />
            </div>
            <h3 class="title">{{ $t('misc.30 Days Free Return') }}</h3>
          </div>
        </div>
        <div class="col-6 mb-4 col-lg-2">
          <div class="feature">
            <div class="icon">
              <img
                width="80"
                height="auto"
                class="img-fluid"
                src="@/assets/icons/credit-card.webp"
                alt="icon"
              />
            </div>
            <h3 class="title">{{ $t('misc.3 Ways Payment') }}</h3>
          </div>
        </div>
        <div class="col-6 mb-4 col-lg-2">
          <div class="feature">
            <div class="icon">
              <img
                width="80"
                height="auto"
                class="img-fluid"
                src="@/assets/icons/customer-service.webp"
                alt="icon"
              />
            </div>
            <h3 class="title">{{ $t('misc.Excellent Support') }}</h3>
          </div>
        </div>
        <div class="col-6 mb-4 col-lg-2">
          <div class="feature">
            <div class="icon">
              <img
                width="80"
                height="auto"
                class="img-fluid"
                src="@/assets/icons/satisfaction-guaranteed.webp"
                alt="icon"
              />
            </div>
            <h3 class="title">{{ $t('misc.Satisfaction Guarantee') }}</h3>
          </div>
        </div>
        <div class="col-6 mb-4 col-lg-2">
          <div class="feature">
            <div class="icon">
              <img
                width="80"
                height="auto"
                class="img-fluid"
                src="@/assets/icons/delivery-truck.webp"
                alt="icon"
              />
            </div>
            <h3 class="title">{{ $t('misc.Super Fast Delivery') }}</h3>
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
.features {
  padding: 100px 0;
  background: $section-background 0% 0% no-repeat padding-box;
  .feature {
    .icon {
      text-align: center;
      margin-bottom: 15px;
      img {
        width: 80px;
      }
    }
    h3.title {
      @media (min-width: 768px) {
        font-size: 24px;
      }
      // font: normal normal bold 24px/33px Montserrat;
    }
  }
}
</style>
