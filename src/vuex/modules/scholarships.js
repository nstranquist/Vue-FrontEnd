/* eslint-disable semi */

import * as axios from 'axios';
const state = {
  scholarships: [],
  loadScholarships: null,
  err: null
}

const mutations = {
  getScholarships (state, scholarships) {
    Object.assign(state.scholarships, scholarships);
  },
  setScholarshipLoading (state, payload) {
    state.loadScholarships = payload;
  },
  setErr (state, payload) {
    state.err = payload;
  },
  clearErr (state) {
    state.err = null;
  }

}

const actions = {
  async getScholarships ({ commit }) {
    commit('setScholarshipLoading', true);
    axios
      .get('https://us-central1-edurain.cloudfunctions.net/api/scholarships')
      .then(resp => {
        console.log(resp);
        commit('getScholarships', resp.data);
        commit('setScholarshipLoading', false);
      })
      .catch(error => {
        commit('setErr', error);
        console.log(error);
        commit('setScholarshipLoading', false);
      })
  }

}

const getters = {

  getScholarshipList: state => {
    return state.scholarships;
  },
  loadScholarships: state => {
    return state.loadScholarships;
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
