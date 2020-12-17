import axios from "axios";
import { API_HOST } from "@/store/env";

const question_url = API_HOST + 'question/'

const state = {
  questions: [],
  isDoing: false,
  currentTest: 1,
  answers: [],
};

const actions = {
  getQuestions(context) {
    return axios.get(question_url).then(data => {
      context.commit("setQuestion", data.data);
    })
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
    if (state.answers.length > questions.length + 1) {
      state.answers.splice(0, state.answers.length - 1)
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
