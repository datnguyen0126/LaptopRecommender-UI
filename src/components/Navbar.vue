<template>
  <nav class="navbar navbar-fixed-top cookie-nav">
    <div class="container d-block">
      <div class="row">
        <div class="col-md-2">
          <div class="navbar-header">

          </div>
          <router-link to="/" exact>
            <div v-on:click="stopQuiz">
              <img
                  class="logo"
                  src="../assets/logo.png"
                  alt="Girl in a jacket"
                  height="53"
              />
            </div>
          </router-link>
        </div>
        <div class="col-md-10 d-block">
          <ul class="main-nav hidden-sm hidden-xs">
            <li>
              <router-link class="" to="/">Shop</router-link>
            </li>
            <li>
              <router-link class="" to="/">Brands</router-link>
            </li>
            <li>
              <router-link class="" to="/about">About us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["user"],
  name: "navbar",
  methods: {
    ...mapActions({
      stopQuiz: "stopQuiz"
    }),
    
    sendLogoutEvent() {
      this.$emit("logout");
    },
  }
};
</script>

<style >
nav {
  padding: 24px;
  height: 90px;
  color: white;
  background-color: white;
  z-index: 99;
  max-height: 70px;
}

.main-nav li {
  display: inline-block;
}

.main-nav {
  float: right;
  list-style-type: none;
}

.subpage .navbar {
  background: #fff!important;
  padding: 5px 0;
  min-height: 70px;
}

ul.main-nav {
  margin-bottom: 0px !important;
  margin-right: 70px !important;
}

.navbar-header {
  width: 100%;
  float: left;
}

.logo {
  float: left;
  position: relative;
}

.main-nav li a {
  padding-right: 30px;
  font-family: 'Roboto';
}

.main-nav li a {
  color: #16b8d4!important;
  font-weight: 300;
  font-size: 16px;
  display: inline-block;
  padding-top: 18px;
}

</style>

