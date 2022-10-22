<template>
  <section class="about-us">
    <div class="background-img">
      <img src="@/assets/about/d-1.webp" alt="bg" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 mb-4 mb-md-0">
          <div class="info">
            <h2 class="title">{{ $t('headers.aboutUs') }}</h2>
            <p class="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
            <a href="#" class="btn btn-primary see-more">
              {{ $t('links.Learn More') }}
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
        <div class="col-md-5">
          <div class="img-wrapper">
            <img
              class="img-fluid"
              src="@/assets/about/d-2.webp"
              srcset="@/assets/about/d-2.webp"
              alt="about"
            />
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
.about-us {
  .background-img {
    img {
      position: absolute;
      left: 0;
      top: 0;

      @media (max-width: 768px) {
        width: 100%;
      }
      width: 80%;
      z-index: -1;
    }
  }
  position: relative;
  margin: 50px 0;
  padding: 30px 0;

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    h2.title {
      text-align: start;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
      margin-bottom: 30px;
    }
    p.description {
      line-height: 20px;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      @media (max-width: 992px) {
        margin-bottom: 20px;
        line-height: 28px;
        font-size: 16px;
      }
      margin-bottom: 30px;
    }
    .btn.see-more {
      margin-top: auto;
    }
  }
}
</style>
