<template>
  <div
    class="container-fluid px-0 bgimg-1 hero"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 hero-content">
          <h2>Find the perfect laptop</h2>
          <p>Tell us about what you want and get the recommendations</p>
          <router-link to="/laptops/start" rel="nofollow" class="hero-btn">
            Get started
          </router-link>
        </div>
        <div class="col-md-12 how-it-works">
          <div style="margin-top: 0px">
            <div class="col-md-12 text-center">
              <p class="subtitle" style="margin-bottom: 40px;">How it works</p>
            </div>
          </div>
          <div class="row hiw-content">
            <div class="col-md-4 col-sm-4">
              <div class="icon-wrap">
                <span class="hiw-number">1</span>
                <span class="icon"><img src="../assets/money-talk.svg" width="150px" height="80px" /></span>
              </div>
              <h3 class="mt-3">Tell us about your needs and lifestyle</h3></div>
            <div class="col-md-4 col-sm-4">
              <div class="icon-wrap">
                <span class="hiw-number">2</span>
                <span class="icon"><img src="../assets/computer.svg" width="150px" height="80px" /></span>
              </div>
              <h3 class="mt-3">We find the best match that suits you</h3>
            </div>
            <div class="col-md-4 col-sm-4">
              <div class="icon-wrap hiw-icon-small">
                <span class="hiw-number">3</span>
                <span class="icon"><img src="../assets/shopping-bag.svg" width="150px" height="80px" /></span>
              </div>
              <h3 class="mt-3">We show you the best deals</h3>
            </div>
          </div>
        </div>
        <section class="about-sectio hiw-item" style="margin-top: 60px">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-md-offset-2 col-xs-12 text-center normal-content">
                <p>It is ensured that our recommendations are totally independent. We make it for non-profit purpose.
                  Feel free to tell us if have any feedback about product ideas you get.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.resetQuestion()
  },

  methods: {
    ...mapActions({
      resetQuestion: "resetQuestion"
    })
  }
};
</script>

<style scoped>

.icon-wrap {
  position: relative;
  max-width: 150px;
  display: block;
  margin: auto;
}

.hiw-number {
  background: transparent !important;
  border: 1px solid #15b9d5 !important;
  color: #15b9d5 !important;
  position: absolute;
  top: 0;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  font-size: 14px;
  font-family: roboto,sans-serif;
}

.how-it-works h3 {
  max-width: 250px;
  text-align: center;
  font-size: 20px;
  line-height: 1.4em;
  padding: 0 25px;
  display: block;
  margin: auto;
  font-weight: 400;
}

p.subtitle {
  font-size: 27px!important;
  font-weight: 300!important;
}

.hero {
  background-size: cover !important;
  background-position: center center !important;
  background: #000;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  text-transform: uppercase;
}

.bgimg-1,
.bgimg-2,
.bgimg-3 {
  position: relative;
  opacity: 0.9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgimg-1 {
    background-image: linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url('../assets/wallpaper.jpg');
    background-position: center 65% !important;
  
  height: 700px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

.hero-content {
  margin-top: 0;
  text-align: center;
  color: #fff;
  display: table;
  padding: 240px 0;
}

.hero p {
  font-family: roboto, sans-serif;
  text-transform: none !important;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 1.6em;
  margin-top: 15px;
  font-weight: 300 !important;
}

.hero-btn {
  display: inline-block;
  color: #fff !important;
  background: #e26e2c;
  padding: 15px 40px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 30px;
  border-radius: 4px !important;
}

.hero h2 {
  font-size: 70px;
  line-height: 1em;
  letter-spacing: 1.5px;
  margin-top: 25px;
  text-transform: none !important;
  font-weight: 300;
  margin-bottom: 35px;
}
</style>

