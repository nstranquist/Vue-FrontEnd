/* eslint-disable semi */
const state = {
  scholarships: []
}

const mutations = {
  getScholarships (state, scholarships) {
    Object.assign(state.scholarships, scholarships);
  }
}

const actions = {
  async getScholarshipsAction ({ commit }, scholarships) {
    commit('getScholarships', scholarships);
  }
}

const getters = {

  getScholarshipList: state => {
    return state.scholarships;
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
