import questionsApi from "../api/questionsApi";
import Vue from 'vue'

const state = {
  questions: [],
  isDoing: false,
  currentTest: 1,
  answer: {},
};

const actions = {
  startAnswer(context) {
    return new Promise(function(resolve) {
      questionsApi.getQuestion((questions) => {
        context.commit("setQuestion", questions);
        context.commit("setIsDoing", true);
        resolve();
      });
    });
  },

  stopQuiz(context) {
    context.commit("setIsDoing", false);
    // Object.keys(state.answer).forEach(a => {

    // })
  },
};

const mutations = {
  setQuestion(state, questions) {
    state.questions = questions;
  },

  setIsDoing(state, val) {
    state.currentTest = val ? 1 : 0;
    state.isDoing = val;
  },

  UPDATE_ANSWER(state, payload) {
    Vue.set(state.answer, payload.key, payload.value);
  },
};

export const questions = {
  namespace: true,
  state,
  actions,
  mutations,
};
