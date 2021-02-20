const state = {
  health: '',
  hospital: '',
  surgery: '',

}

const getters = {
  health: state => state.health,
  hospital: state => state.hospital,
  surgery: state => state.surgery,
}

const mutations = {
  updateHealth(state, newHealth) {
    state.health = newHealth;
  },
  updateHospital(state, newHospital) {
    state.hospital = newHospital;
  },
  updateSurgery(state, newSurgery) {
    state.surgery = newSurgery;
  },
}

const actions = {
  updateHealth({ commit }, newHealth) {
    commit("updateHealth", newHealth)
  },
  updateHospital({ commit }, newHospital) {
    commit("updateHospital", newHospital)
  },
  updateSurgery({ commit }, newSurgery) {
    commit("updateSurgery", newSurgery)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
};