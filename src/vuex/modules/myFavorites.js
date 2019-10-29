/* eslint-disable semi */
const state = {
  myFaveScholarships: [],
  myFaveHousing: []
}

const mutations = {
  updateMyFaveScholarships (state, myFaveScholarships) {
    Object.assign(state.myFaveScholarships, myFaveScholarships);
  },
  updateMyFaveHousing (state, myFaveHousing) {
    Object.assign(state.myFaveHousing, myFaveHousing);
  }
}

const actions = {
  async updateMyFaveScholarshipsAction ({ commit }, myFaveScholarships) {
    commit('updateMyFaveScholarships', myFaveScholarships);
  },
  async updateMyFaveHousingAction ({ commit }, myFaveHousing) {
    commit('updateMyFaveHousing', myFaveHousing);
  }
}

const getters = {

  getMyFaveScholarshipsList: state => {
    return state.myFaveScholarships;
  },
  getMyFaveHousingList: state => {
    return state.myFaveHousing;
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
