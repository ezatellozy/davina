<template>
  <section class="subscription">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h2 class="title mb-3 m-md-0">
            {{ $t('headers.SUBSCRIBE OUR NEWSLETTER') }}
          </h2>
        </div>
        <div class="col-md-6">
          <div class="form">
            <form @click.prevent>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  :placeholder="$t('placeholder.Your Email Address')"
                />
                <button class="input-group-text">
                  {{ $t('buttons.SUBSCRIBE') }}
                </button>
              </div>
            </form>
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
.subscription {
  padding: 50px 0;
  background: $section-background;
  h2.title {
    text-align: center;
    @media (min-width: 768px) {
      text-align: start;
    }
  }
  .input-group {
    border-radius: 50px;
    overflow: hidden;
  }
  button {
    border: 0;
    border-radius: 0;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    font: normal normal bold 14px/19px Montserrat;
    letter-spacing: 0px;
    color: #0e3958;
    padding-inline: 30px;
  }
  input {
    border: 0 !important;
    border-radius: 0 !important;
    background: #fff !important;
    padding-inline: 50px;
    color: #000 !important;
  }
}
</style>
