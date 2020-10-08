<template>
  <div
    class="container-fluid px-0 bgimg-1 hero"
  >
    <div class="container">
      <div class="row">
          <div class="col-md-12 hero-content">
            <h2>Find the perfect laptop</h2>
            <p>Personalised recommendations because we're all different</p>
            <a href="/laptops/start" rel="nofollow" class="hero-btn"
              >Get started</a
            >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('../assets/wallpaper.jpg');
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

