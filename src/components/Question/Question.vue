<template>
  <div class="container">
      <div class="row">
        <div class="col-md-12 top-100">
          <div id="holding">
            <div id="text-box">
              <div class="chat-icon-container-first">
                <img src="@/assets/smile.png" width="30" alt=".." />
              </div>
              <h4 id="intro1">
                <span class="chat-intro" v-if="questions[currentIndex] !== undefined">{{ questions[currentIndex].content }}</span>
              </h4>
              <p class="multi-txt-p" v-if="questions[currentIndex] !== undefined && questions[currentIndex].multiple === true">You can select one or more</p>
            </div>
            <div class="question-box">
              <div id="back-btn" v-bind:style="[ currentIndex > 0 ? activateStyle : disableStyle]">
                <a
                    href="#"
                    id="bckNew"
                    class="subcat-btn tt t2"
                    @click="previousQuestion"
                >
                <span class="back-btn-in">
                  <i class="fas fa-chevron-left" aria-hidden="true"></i>
                </span>
                  <span class="back-btn-text">Back</span>
                </a>
              </div>
              <div id="next-btn" v-bind:style="[ currentIndex < questions.length - 1 ? activateStyle : disableStyle]">
                <a href="#" class="next-btn-click" data-qtype="2" @click="nextQuestion">
                  <span class="next-btn-in">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </span>
                  <span class="next-btn-text">Next</span>
                </a>
              </div>
              <div id="question-wrap">
                <div class="question-row" v-if="questions[currentIndex] !== undefined">
                  <div v-for="(option, index) in questions[currentIndex].answers" :key="index">
                    <div class="my-col-md-2 mb-3">
                      <a
                          data-id="200"
                          data-type="option"
                          class="btn btn-block btn-hero question-btn budget-btn subcat-single-btn 200 m-1"
                          v-bind:style="[ checkInAnswer(option.content) ? selectedStyle : '']"
                          @click="addAnswer(option.content)"
                      >
                        <div class="center-btn" v-if="option.content !== undefined">
                          <div class="budget-icon"></div>
                          {{ option.content }}
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
import { mapState, mapActions } from "vuex";

export default {
  name: "question",
  data() {
    return {
      currentIndex: 0,
      disableStyle: {
        opacity: 0.3
      },
      activateStyle: {
        opacity: 1
      },
      selectedStyle: {
        background: '#15b9d5!important',
        color: '#fff!important'
      },
    };
  },
  computed: {
    ...mapState({
      questions: (state) => state.questions.questions,
      answers: (state) => state.questions.answers
    }),
  },
  created(){
    this.getQuestions()
  },
  methods: {
    nextQuestion(){
      if (this.currentIndex < this.questions.length - 1){
        this.currentIndex++;
      }
    },
    previousQuestion() {
      if (this.currentIndex > 0){
        this.currentIndex--;
      }
    },
    checkInAnswer(option) {
      if (this.answers === undefined) {
        return false
      }
      return this.answers.flat().indexOf(option) > -1
    },
    addAnswer(option) {
      this.$store.commit("setAnswer", { option: option, currentIndex: this.currentIndex });
      // if (this.questions[this.currentIndex].multiple === true) {
      //   if (this.answers[this.currentIndex] === undefined) {
      //     this.answers[this.currentIndex] = []
      //   }
      //   if (this.answers[this.currentIndex].indexOf(option) > -1) {
      //     this.answers[this.currentIndex] = this.answers[this.currentIndex].filter(e => e !== option);
      //   } else {
      //     this.answers[this.currentIndex].push(option)
      //   }
      // } else {
      //   this.answers[this.currentIndex] = option
      // }
      // if (this.answers.length > 20) {
      //   this.answers.splice(0, this.answers.length - 5)
      // } else {
      //   this.answers.push([])
      // }
    },
    submitAnswer: function (qid, value) {
      this.$store.commit("UPDATE_ANSWER", { key: qid, value: value });
    },
    ...mapActions({
      getQuestions: 'getQuestions',
    }),
  },
  filters: {
    formatPrice (value) {
      let words = value.split(' ')[2]
      words[2] = parseInt(words[2]).toLocaleString()
      return words.join(' ') + ' vnd'
    },
  }
};
</script>
<style scoped>
@import "./style.scss";
</style>

