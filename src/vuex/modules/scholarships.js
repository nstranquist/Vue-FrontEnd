/* eslint-disable semi */
import { GET_SCHOLARSHIPS } from '../mutation-types'

const state = {
  scholarships: []
}

const mutations = {
  [GET_SCHOLARSHIPS] (state, scholarships) {
    Object.assign(state.scholarships, scholarships);
  }
}

const actions = {
  async getScholarshipsAction ({ commit }, scholarships) {
    commit(GET_SCHOLARSHIPS, scholarships);
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
