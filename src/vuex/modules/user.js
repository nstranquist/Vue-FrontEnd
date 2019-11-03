/* eslint-disable semi */
import * as firebase from 'firebase'
const state = {
  user: null,
  loading: false,
  authError: null,
  myFavorites: [],
  profileSurvey: {
    userId: null,
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
    }
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
    state.myFavorites = payload;
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
        resp => {
          console.log(resp);
          const newUser = {
            id: resp.user.uid
          }
          commit('setLoading', false);
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

    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        resp => {
          console.log(resp.user);
          const newUser = {
            id: resp.user.uid
          }
          commit('setUser', newUser);
          commit('setLoading', false);
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
    // should use db.collection(firestore) and not firebase
    firebase.database().col('profileSurvey').push(payload)
      .then((data) => {
        console.log(data);
        const key = data.key;
        commit('submitProfileSurvey', payload);
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
    // should use db.collection(firestore) and not firebase
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
  autoSignIn ({ commit }, payload) {
    console.log('below is the uid')
    console.log(payload.uid)
    commit('setUser', { id: payload.uid, profileSurvey: [], myFavorites: [] })
  },
  loading ({ commit }, payload) {
    commit('setLoading', payload);
  },
  logout ({ commit }) {
    firebase.auth().signOut();
    commit('setUser', null)
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
