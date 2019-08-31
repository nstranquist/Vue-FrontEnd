const state = {
  personalInfo: {
    gender: '',
    birthday: '',
    citizensihip: '',
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
    graduationDate: '',
    math: '',
    ebrw: '',
    written: '',
    act: '',
    enrolled: '',
    transfer: '',
    college: ''
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

const mutations = {
  updatePersonalInfo (state, personalInfo) {
    Object.assign(state.personalInfo, personalInfo)
  },
  updateParentInfo (state, parentInfo) {
    Object.assign(state.parentInfo, parentInfo)
  },
  updateEducation (state, education) {
    Object.assign(state.education, education)
  },
  updateStudentActivities (state, studentActivities) {
    Object.assign(state.studentActivities, studentActivities)
  }
}

// const actions = {

// }

const getters = {
  getPersonalInfo: state => {
    return state.personalInfo
  },
  getParentInfo: state => {
    return state.personalInfo
  },
  getEducation: state => {
    return state.personalInfo
  },
  getStudentActivities: state => {
    return state.personalInfo
  }

}

export default {
  state,
  mutations,
  getters
}
