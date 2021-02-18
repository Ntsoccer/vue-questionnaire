const state = {
  consultation: '',
}

const getters = {
  consultation: state => state.consultation,
}

const mutations = {
  updateConsultation(state, newConsultation) {
    state.consultation = newConsultation;
  },
}

const actions = {
  updateConsultation({ commit }, newConsultation) {
    commit("updateConsultation", newConsultation)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
};