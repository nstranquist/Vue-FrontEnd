/* eslint-disable semi */
import * as firebase from 'firebase'
const state = {
  user: null,
  loading: false,
  authError: null,
  myFavorites: [],
  profileSurvey: {
    personalInfo: {
      iAmA: '',
      gender: '',
      birthday: '',
      citizenship: '',
      heritage: '',
      religion: '',
      majors: '',
      career: '',
      honors: '',
      education: '',
      disabilities: ''
    },
    parentInfo: {
      memberships: '',
      employer: '',
      occupation: '',
      military: ''
    },
    education: {
      highSchoolGraduationYear: '',
      math: '',
      ebrw: '',
      written: '',
      act: '',
      enrolled: '',
      transfer: '',
      college: '',
      collegeGraduationYear: '',
      highSchool: '',
      gpa: '',
      prevFundingReceived: ''
    },
    studentActivities: {
      fraternity: '',
      military: '',
      sorority: '',
      sports: '',
      perform: '',
      employer: ''
    },
    id: ''
  }
}

const mutations = {
  setUser (state, payload) {
    state.user = payload;
  },
  setLoading (state, payload) {
    state.loading = payload;
  },
  setError (state, payload) {
    state.authError = payload;
  },
  clearError (state) {
    state.authError = null;
  },
  submitProfileSurvey (state, payload) {
    Object.assign(state.profileSurvey, payload);
  },
  myFavorites (state, payload) {
    state.myFavorites = payloade;
  },
  saveMyFavorites (state) {
    firebase.database().ref('myFavorites').push(this.state);
  }
}

const actions = {
  async signUpUser ({ commit }, payload) {
    commit('setLoading', true);
    commit('clearError');
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            scholarshipSurvey: {},
            myFavorites: [],
            firstName: payload.firstName,
            lastName: payload.lastName,
            city: payload.city,
            state: payload.usState,
            zipCode: payload.zipCode
          }
          commit('setUser', newUser);
        }
      )
      .catch(
        error => {
          commit('setLoading', false);
          commit('setError', error);
          console.log(error);
        }
      )
  },
  async signUserIn ({ commit }, payload) {
    commit('setLoading', true);
    commit('clearError');

    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          this.$store.dispatch('setLoading', false);
          const newUser = {
            id: user.uid,
            scholarshipSurvey: {},
            myFavorites: [],
            firstName: payload.firstName,
            lastName: payload.lastName,
            city: payload.city,
            state: payload.usState,
            zipCode: payload.zipCode
          }
          commit('setUser', newUser);
        }
      )
      .catch(
        error => {
          commit('setLoading', false);
          commit('setError', error);
        }
      )
  },
  async submitProfileSurvey ({ commit }, payload) {
    firebase.database().ref('profileSurvey').push(payload)
      .then((data) => {
        console.log(data);
        const key = data.key;
        commit('submitProfileSurvey', { ...payload, id: key });
      })
      .catch((error) => {
        console.log(error);
      })
  },
  async myFavorites ({ commit }, payload) {
    commit('myFavorites', payload);
  },
  async saveMyFavorites ({ commit }) {
    commit('saveMyFavorites');
  },
  loadMyFavorites ({ commit }) {
    firebase.database().ref('myFavorites').once('value')
      .then((data) => {
        const myFavorites = [];
        const obj = data.val();
        for (let key in obj) {
          myFavorites.push({
            id: key,
            lastName: obj[key]
          })
        }
        commit('myFavorites', myFavorites);

      })
      .catch(
        (error) => {
          console.log(error);
        })
  },
  loading ({ commit }, payload) {
    commit('setLoading', payload);
  },
  error ({ commit }) {
    commit('error')
  },
  clearError ({ commit }) {
    commit('clearError')
  }
}

const getters = {
  getUser (state) {
    return state.user;
  },
  loading (state) {
    return state.loading;
  },
  error (state) {
    return state.authError;
  },
  profileSurvey (state) {
    return state.profileSurvey;
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
