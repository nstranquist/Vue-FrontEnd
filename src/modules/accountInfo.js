const state = {
  accountInfo: {
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    city: '',
    zipcode: ''
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
