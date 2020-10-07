<template>
  <div class="d-flex justify-content-center row">
    <div class="col-md-10 col-lg-10">
      <div class="border">
        <div class="question bg-white p-3 border-bottom">
          <div class="d-flex flex-row justify-content-between align-items-center mcq">
            <h4>Question package: {{ $route.params.level }}</h4>
          </div>
        </div>
        <div class="question bg-white p-3 border-bottom">
          <div class="d-flex flex-row align-items-center question-title">
            <h4 class>{{ $route.params.id }}.</h4>
            <h5 class="mt-1 ml-2">{{ questions[$route.params.id - 1].contents }}</h5>
          </div>
          <div v-for="(option, index) in questions[$route.params.id - 1].options" v-bind:key="option">
            <div class="form-check text-left">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                v-on:click="submitAnswer($route.params.id - 1, index)"
              />
              <label class="form-check-label">{{ option }}</label>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
          <router-link
            v-if="parseInt($route.params.id) > 1"
            :to="{ name: 'question', params: { id: parseInt($route.params.id) - 1, level: $route.params.level }}"
          >
            <button class="btn btn-primary d-flex align-items-center btn-danger" type="button">
              <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
            </button>
          </router-link>
          <router-link class="ml-auto"
            v-if="parseInt($route.params.id) < 10"
            :to="{ name: 'question', params: { id: parseInt($route.params.id) + 1, level: $route.params.level }}"
          >
            <button
              class="btn btn-primary border-success align-items-center btn-success"
              type="button"
            >Next</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "question",
  computed: {
    ...mapState({
      questions: (state) => state.questions.questions,
    }),
  },
  methods: {
    submitAnswer: function (qid, value) {
      this.$store.commit('UPDATE_ANSWER', {'key': qid, 'value': value})
    }
  }
};
</script>

