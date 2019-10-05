import Vue from 'vue'
import Vuex from 'vuex'
// import modules
import accountInformation from '../modules/accountInfo'
import profile from '../modules/profile'
import scholarships from '../modules/scholarships'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    accountInformation,
    profile,
    scholarships
  }
})
