const state = {
  personalInfo: {
    gender: '',
    birthday: '',
    citizenship: '',
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
    gpa: ''
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
    return state.parentInfo
  },
  getEducation: state => {
    return state.education
  },
  getStudentActivities: state => {
    return state.studentActivities
  }

}

export default {
  state,
  mutations,
  getters
}
