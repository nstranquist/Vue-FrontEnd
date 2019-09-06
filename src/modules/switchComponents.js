// data store for User.vue
const state = {
  selectedComponent: ''
}

const mutations = {
  switchComponent (state, payload) {
    state.selectedComponent = payload
    console.log(state.selectedComponent)
  }
}

const actions = {
  selectComponent: ({ commit }, payload) => {
    commit('switchComponent', payload)
    console.log(state.selectedComponent)
  }
}

const getters = {
  selectComponent: state => {
    console.log(state.selectedComponent)
    return state.selectedComponent
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
