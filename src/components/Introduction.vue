<template>
  <div class="d-block">
    <br />
    <h3 style="margin-top: 100px">
      Welcome to Laptop recommender
    </h3>
    <br />
    <br />
    <br />
    <router-link v-bind:to="$route.params.level + '/question/1'" class="text-light">
      <button class="btn btn-success" v-on:click="startAnswer">Start</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "testinfo",
  methods: {
    ...mapActions({
      startAnswer: "startAnswer",
    }),
  },
};
</script>

