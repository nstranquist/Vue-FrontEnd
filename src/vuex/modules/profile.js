/* eslint-disable semi */
const state = {
  personalInfo: {
    iAmA: '',
    gender: '',
    birthday: '',
    citizenship: '',
    heritage: '',
    religion: '',
    major: '',
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

const mutations = {
  updatePersonalInfo (state, personalInfo) {
    Object.assign(state.personalInfo, personalInfo);
  },
  updateParentInfo (state, parentInfo) {
    Object.assign(state.parentInfo, parentInfo);
  },
  updateEducation (state, education) {

    Object.assign(state.education, education);
  },
  updateStudentActivities (state, studentActivities) {
    Object.assign(state.studentActivities, studentActivities);
  }
}

const actions = {
  async updatePersonalInfoAction ({ commit }, personalInfo) {
    commit('updatePersonalInfo', personalInfo);
  },
  async updateParentInfoAction ({ commit }, parentInfo) {
    commit('updateParentInfo', parentInfo);
  },
  async updateEducationAction ({ commit }, education) {
    commit('updateEducation', education);
  },
  async updateStudentActivitiesAction ({ commit }, studentActivities) {
    commit('updateStudentActivities', studentActivities);
  }

}

const getters = {
  getPersonalInfo: state => {
    return state.personalInfo;
  },
  getParentInfo: state => {
    return state.parentInfo;
  },
  getEducation: state => {
    return state.education;
  },
  getStudentActivities: state => {
    return state.studentActivities;
  }

}

export default {
  state,
  mutations,
  getters,
  actions
}
