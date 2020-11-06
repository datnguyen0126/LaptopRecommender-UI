<template>
  <div id="app">
    <Navbar v-bind:user="user" v-on:logout="logout" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {
    ...mapActions({
      logout: "onLogout",
    }),
  },
};
</script>
<style>
@import "./assets/styles.css";
</style>

