import Vue from 'vue'
import Vuex from 'vuex'
import customer from './modules/customer'
import questionnaire from './modules/questionnaire'
import consultation from './modules/consultation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    customer,
    questionnaire,
    consultation
  }
})
