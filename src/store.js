import Vue from 'vue'
import Vuex from 'vuex'
// import modules
import switchComponents from './modules/switchComponents'
import accountInformation from './modules/accountInfo'
import profile from './modules/profile'
import scholarships from './modules/scholarships'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    switchComponents,
    accountInformation,
    profile,
    scholarships
  }
})
