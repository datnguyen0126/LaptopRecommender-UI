<template>
  <div class="d-block">
    <br />
    <h3>
      These question are
      <span class="font-weight-bold">{{ $route.params.level }}</span> level. Do you want to try it?
    </h3>
    <br />
    <br />
    <br />
    <router-link v-bind:to="$route.params.level + '/question/1'" class="text-light">
      <button class="btn btn-success" v-on:click="startQuiz">Do quiz</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "testinfo",
  methods: {
    ...mapActions({
      startQuiz: "startQuiz",
    }),
  },
};
</script>

