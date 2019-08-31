const state = {
  accountInfo: {
    firstname: '',
    lastnmae: '',
    verify: '',
    password: '',
    email: '',
    address: ''
  }
}

const mutations = {
  updateAccountInfo (state, accountInfo) {
    Object.assign(state.accountInfo, accountInfo)
  }

}

// const actions = {

// }

const getters = {
  getAccountInfo: state => {
    return state.accountInfo
  }
}

export default {
  state,
  mutations,
  getters
}
