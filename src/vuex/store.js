import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
// import modules
import accountInformation from './modules/accountInfo'
import profile from './modules/profile'
import scholarships from './modules/scholarships'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedScholarships: [
      {
        id: 'dkfjlsdkfjdlkfj',
        title: 'first scholarship',
        details: 'details for first scholarship',
        amount: 4000
      }
    ],
    loading: false
  },
  modules: {
    accountInformation,
    profile,
    scholarships,
    user
  }
})
