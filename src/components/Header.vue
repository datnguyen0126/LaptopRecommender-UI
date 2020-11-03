<template>
  <nav class="bg-primary">
    <router-link to="/" exact>
      <div class="logo" v-on:click="stopQuiz">
        <img
          class="logo"
          src="../assets/logo.png"
          alt="Girl in a jacket"
          width="250"
          height="70"
        />
      </div>
    </router-link>
    <div class="cart-link">
      <router-link class="font-weight-bold text-nav mr-3" to="/about">Article</router-link>
      <router-link class="font-weight-bold text-nav mr-3" to="/about">Categories</router-link>
      <router-link class="font-weight-bold text-nav mr-3" to="/about">Brands</router-link>
      <router-link class="font-weight-bold text-nav mr-3" to="/about">About us</router-link>
      <span v-if="user.isConnected" class="dropdown show">
          <img :src="user.picture"
          height="40px">
        <a
          class="btn btn-info"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{{ user.name }}</a>
      </span>
      <router-link
        v-else
        class="btn btn-primary font-weight-bold text-light mr-3"
        to="/login"
        exact
      >Login</router-link>
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
  padding: 24px;
  height: 90px;
  color: white;
  background-color: #d3cedb;
  z-index: 99;
}

.logo {
  float: left;
  position: relative;
  top: -7px;
}

.text-nav { 
    font-weight: 300;
    font-size: 16px;
    display: inline-block;
    padding-top: 18px;
    padding-right: 30px;
    font-family: 'Roboto';
  color: #16b8d4!important;
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

