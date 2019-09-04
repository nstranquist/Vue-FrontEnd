const state = {
  accountInfo: {
    firstname: '',
    lastname: '',
    verify: '',
    password: '',
    email: '',
    address: '',
    phone: ''
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
