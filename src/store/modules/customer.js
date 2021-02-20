const state = {
  sex: '',
  year: '',
  month: '',
  day: '',
}

const getters = {
  sex: state => state.sex,
  year: state => state.year,
  month: state => state.month,
  day: state => state.day,
}

const mutations = {
  updateSex(state, newSex) {
    state.sex = newSex;
  },
  updateYear(state, newYear) {
    state.year = newYear;
  },
  updateMonth(state, newMonth) {
    state.month = newMonth;
  },
  updateDay(state, newDay) {
    state.day = newDay;
  },
}

const actions = {
  updateSex({ commit }, newSex) {
    commit("updateSex", newSex)
  },
  updateYear({ commit }, newYear) {
    commit("updateYear", newYear)
  },
  updateMonth({ commit }, newMonth) {
    commit("updateMonth", newMonth)
  },
  updateDay({ commit }, newDay) {
    commit("updateDay", newDay)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
};