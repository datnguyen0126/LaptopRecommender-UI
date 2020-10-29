<template>
  <nav>
    <router-link to="/" exact>
      <div class="logo" v-on:click="stopQuiz">
        <img
          class="logo"
          src="../assets/logo.png"
          alt="Girl in a jacket"
          width="130"
          height="50"
        />
      </div>
    </router-link>
    <div class="cart-link">
      <router-link class="font-weight-bold text-light mr-3" to="/about">Find product</router-link>
      <router-link class="font-weight-bold text-light mr-3" to="/about">News</router-link>
      <router-link class="font-weight-bold text-light mr-3" to="/about">Brand</router-link>
      <router-link class="font-weight-bold text-light mr-3" to="/about">Guide</router-link>
      <router-link class="font-weight-bold text-light mr-3" to="/about">About us</router-link>
      <router-link class="font-weight-bold text-light mr-3" to="/about">Feed Back</router-link>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["user"],
  name: "header",
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
  box-shadow: 1px 0rem 14px 0px #eee;
  width: 100%;
  padding: 24px;
  position: fixed;
  height: 66px;
  color: white;
  background-color: orange;
  z-index: 99;
}

.logo {
  float: left;
  position: relative;
  top: -7px;
}

.nav-link {
  display: inline;
}

.cart-link {
  float: right;
  position: relative;
  bottom: 9px;
}

.list-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.cart-link__count {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  top: -8px;
  right: -5px;
  background: #5044ff;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
</style>

