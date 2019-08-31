import Vue from 'vue'
import Vuex from 'vuex'
import switchComponents from './modules/switchComponents'
import accountInformation from './modules/accountInfo'
import profile from './modules/profile'
import scholarships from './modules/scholarships'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    switchComponents,
    accountInformation,
    profile,
    scholarships
  }
})
