import questionsApi from "../api/questionsApi";
//import axios from 'axios'

const state = {
  questions: [],
  isDoing: false,
  currentTest: 1,
  answers: [],
};

const actions = {
  getQuestions(context) {
    return new Promise(function(resolve) {
      questionsApi.getQuestion((questions) => {
        context.commit("setQuestion", questions);
        resolve();
      });
    });
  },

  resetQuestion(context) {
    context.commit("resetQuestion")
  },

  getAnswer() {
    return state.answers
  },
  submitAnswer() {

  }
};

const mutations = {
  resetQuestion(state){
    state.answers = []
  },

  setAnswer(state, payload) {
    if (state.questions[payload.currentIndex].multiple === true) {
      if (state.answers[payload.currentIndex] === undefined) {
        state.answers[payload.currentIndex] = []
      }
      if (state.answers[payload.currentIndex].indexOf(payload.option) > -1) {
        state.answers[payload.currentIndex] = state.answers[payload.currentIndex].filter(e => e !== payload.option);
      } else {
        state.answers[payload.currentIndex].push(payload.option)
      }
    } else {
      if(state.answers[payload.currentIndex] === payload.option){
        state.answers[payload.currentIndex] = ''
      } else {
        state.answers[payload.currentIndex] = payload.option
      }
    }
    if (state.answers.length > 20) {
      state.answers.splice(0, state.answers.length - 5)
    } else {
      state.answers.push([])
    }
  },
  setQuestion(state, questions) {
    state.questions = questions;
  },

  UPDATE_ANSWER(state, payload) {
    console.log(payload.key, payload.value)
  },
};

export const questions = {
  namespace: true,
  state,
  actions,
  mutations,
};
