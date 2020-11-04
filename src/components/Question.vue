<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="holding">
          <div id="text-box">
            <div class="chat-icon-container-first">
              <img src="../assets/smile.png" width="30" alt=".." />
            </div>
            <h4 id="intro1">
              <span class="chat-intro">{{ question.content }}</span>
            </h4>
          </div>
          <div class="question-box">
            <div id="back-btn" style="opacity: 0.3">
              <a
                href="#"
                id="bckNew"
                class="subcat-btn tt t2"
              >
                <span class="back-btn-in">
                  <i class="fas fa-chevron-left" aria-hidden="true"></i>
                </span>
                <span class="back-btn-text">Back</span>
              </a>
            </div>
            <div id="next-btn">
              <a href="#" class="next-btn-click" data-qtype="2">
                <span class="next-btn-in"
                  ><i class="fa fa-chevron-right" aria-hidden="true"></i
                ></span>
                <span class="next-btn-text">Next</span></a
              >
            </div>
            <div id="question-wrap">
              <div class="question-row">
                <div v-for="option in question.options" :key="option">
                  <div class="my-col-md-2">
                    <a
                      href="#"
                      data-id="200"
                      data-type="option"
                      class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 200 m-1"
                    >
                      <div class="center-btn">
                        <div class="budget-icon"><div>$</div></div>
                        Up to $200
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "question",
  data() {
    return {
      question: {
        content: "What 's your available budget?",
        options: [
          "Up to 5tr",
          "Up to 5tr",
          "Up to 5tr",
          "Up to 5tr",
          // 'Up to 5tr',
          // 'Up to 5tr',
          // 'Up to 5tr',
          // 'Up to 5tr',
        ],
      },
    };
  },
  computed: {
    ...mapState({
      questions: (state) => state.questions.questions,
    }),
  },
  methods: {
    submitAnswer: function (qid, value) {
      this.$store.commit("UPDATE_ANSWER", { key: qid, value: value });
    },
  },
};
</script>
<style scoped>
@import "./style.scss";
</style>

