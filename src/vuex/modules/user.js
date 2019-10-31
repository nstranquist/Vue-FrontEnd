/* eslint-disable semi */
import * as firebase from 'firebase'
const state = {
  user: null
}

const mutations = {
  setUser (state, payload) {
    state.user = payload;
  }
}

const actions = {
  async signUpUser ({ commit }, payload) {
    commit('setUser', payload);
    // firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    //   .then(
    //     user => {
    //       const newUser = {
    //         id: user.uid,
    //         scholarshipSurvey: {},
    //         myFavorites: [],
    //         firstName: payload.firstName,
    //         lastName: payload.lastName,
    //         city: payload.city,
    //         state: payload.usState,
    //         zipCode: payload.zipCode
    //       }
    //       commit('setUser', newUser);
    //     }
    //   )
    //   .catch(
    //     error => {
    //       console.log(error);
    //     }
    //   )
  },
  async signUserIn ({ commit }, payload) {
    commit('setUser', payload);
    // firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    //   .then(
    //     user => {
    //       const newUser = {
    //         id: user.uid,
    //         scholarshipSurvey: {},
    //         myFavorites: [],
    //         firstName: payload.firstName,
    //         lastName: payload.lastName,
    //         city: payload.city,
    //         state: payload.usState,
    //         zipCode: payload.zipCode
    //       }
    //       commit('setUser', newUser);
    //     }
    //   )
    //   .catch(
    //     error => {
    //       console.log(error);
    //     }
      // )
  }
}

const getters = {
  getUser (state) {
    return state.user;
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
