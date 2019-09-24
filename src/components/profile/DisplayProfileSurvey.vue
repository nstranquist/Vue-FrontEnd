<template>
    <v-container>
      <v-card>
        <v-container class="py-0">
          <v-subheader>Personal Information</v-subheader>
          <v-divider class="v-div" :inset="true"></v-divider>
          <v-col cols="12">
              <p>Birthday: <span>{{birthday}}</span></p>
              <p>Gender: <span>{{gender}}</span></p>
              <p>Citizenship: <span>{{citizenship}}</span></p>
              <p>Disabilities: <span>{{disabilities}}</span></p>
              <p>Heritage: <span>{{heritage}}</span></p>
              <p>Religion: <span>{{religion}}</span></p>
              <p>Possible Majors: <span>{{majors}}</span></p>
              <p>Career Objectives: <span>{{career}}</span></p>
              <p>Academic Honors: <span>{{honors}}</span></p>
              <p>Educational Experiences:<span>{{education}}</span></p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn class="edit-btn" @click="updatePersonalInfoSurvey" v-show="displayEdit">Edit</v-btn>
          </v-col>
        </v-container>
    </v-card>
    <v-card>
      <v-container class="py-0">
      <v-subheader >Student Activities</v-subheader>
      <v-divider class="v-div" :inset="true"></v-divider>
      <v-col cols="12">
          <p>Fraternity: <span>{{fraternity}}</span></p>
          <p>Military Experience: <span>{{militaryStudent}}</span></p>
          <p>Sorority: <span>{{sorority}}</span></p>
          <p>Sports: <span>{{sports}}</span></p>
          <p>Performing Arts: <span>{{perform}}</span></p>
          <p>Current/Previous Employer: <span>{{studentEmployer}}</span></p>
                  </v-col>
      <v-col cols="12" class="text-right">
        <v-btn class="edit-btn" v-show="displayEdit" @click="updateStudentActivitiesSurvey">Edit</v-btn>
      </v-col>
      </v-container>
      </v-card>
        <v-card>
          <v-container class="py-0">
<v-subheader >Education</v-subheader>
          <v-divider class="v-div" :inset="true"></v-divider>
          <v-col cols="12">
              <p>High School Graduation Year: <span>{{highSchoolGraduationYear}}</span></p>
              <p>SAT Math Score: <span>{{math}}</span></p>
              <p>SAT (EBRW): <span>{{ebrw}}</span></p>
              <p>SAT Written Score: <span>{{written}}</span></p>
              <p>ACT Score: <span>{{act}}</span></p>
              <p>Currently Enrolled: <span>{{enrolled}}</span></p>
              <p>Transfer Within A Year: <span>{{transfer}}</span></p>
              <p>College Graduation Year: <span>{{collegeGraduationYear}}</span></p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn class="edit-btn" v-show="displayEdit" @click="updateEducationSurvey">Edit</v-btn>
          </v-col>
          </v-container>
</v-card>
<v-card>
  <v-container class="py-0">
     <v-subheader >Parent Information</v-subheader>
 <v-divider class="v-div" :inset="true"></v-divider>
          <v-col cols="12">
              <p> Parent Associations and Memberships: <span>{{memberships}}</span></p>
              <p>Current/Previous Employers: <span>{{parentEmployer}}</span></p>
              <p> Parent Military Experience: <span>{{militaryParent}}</span></p>
              <p>Parent Occupation: <span>{{occupation}}</span></p>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn class="edit-btn"  v-show="displayEdit" @click="updateParentInfoSurvey" >Edit</v-btn>
          </v-col>
    </v-container>
</v-card>
 <v-col cols="12" class="text-right">
            <v-btn class="edit-btn" @click="submit">Submit</v-btn>
          </v-col>
</v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      updateSurveyComponent: '',
      displayEdit: true
    }
  },
  computed: mapState({
    gender: state => state.profile.personalInfo.gender,
    birthday: state => state.profile.personalInfo.birthday,
    citizenship: state => state.profile.personalInfo.citizenship,
    heritage: state => state.profile.personalInfo.heritage,
    religion: state => state.profile.personalInfo.religion,
    majors: state => state.profile.personalInfo.majors,
    career: state => state.profile.personalInfo.career,
    honors: state => state.profile.personalInfo.honors,
    education: state => state.profile.personalInfo.education,
    disabilities: state => state.profile.personalInfo.disabilities,
    highSchoolGraduationYear: state => state.profile.education.highSchoolGraduationYear,
    math: state => state.profile.education.math,
    ebrw: state => state.profile.education.ebrw,
    written: state => state.profile.education.written,
    act: state => state.profile.education.act,
    enrolled: state => state.profile.education.enrolled,
    transfer: state => state.profile.education.transfer,
    collegeGraduationYear: state => state.profile.education.collegeGraduationYear,
      memberships: (state) => state.profile.parentInfo.memberships,
    parentEmployer: (state) => state.profile.parentInfo.employer,
    occupation: (state) => state.profile.parentInfo.occupation,
    militaryParent: (state) => state.profile.parentInfo.military,
     fraternity: state => state.profile.studentActivities.fraternity,
    militaryStudent: state => state.profile.studentActivities.military,
    sorority: state => state.profile.studentActivities.sorority,
    sports: state => state.profile.studentActivities.sports,
    perform: state => state.profile.studentActivities.perform,
    studentEmployer: state => state.profile.studentActivities.employer

  }),
  methods: {
    submit() {
      // update method
      console.log('submit')
      this.displayEdit = false;
      this.$emit('submit');
    },
    updateEducationSurvey(){
      console.log('updating education');
        this.$emit('selectComponent', 'Education');
    },
     updateParentInfoSurvey(){
      console.log('updating parentInfo');
        this.$emit('selectComponent', 'ParentInfo');

    },
    updatePersonalInfoSurvey(){
      console.log('updating personalInfo');
        this.$emit('selectComponent', 'PersonalInfo');
    },
    updateStudentActivitiesSurvey(){
      console.log('updating student activities');
        this.$emit('selectComponent', 'StudentActivities');
    },
  }
}
</script>

<style scoped>
.py-0 {
  border: 1px solid #6200ea;
  margin-bottom: 10px;
}
.v-div {
  margin-bottom: 10px;
}
p {
 color:  #5097dd;
}
span {
  color: black;
  font-style: italic;
}
.edit-btn{
   color: white;
  background: #5097dd !important;
}

</style>
