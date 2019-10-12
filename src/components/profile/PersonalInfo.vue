<template>
        <v-container class="py-0" >
          <v-card flat>
            <v-form>
              <v-container>
                <h1 class="title-heading">Personal Information</h1>
                <v-row>
                  <v-col cols="12" md="2">
                    <v-select
                    :items="iAmA"
                    label="I am A..." v-model="personalInfo.iAmA"
                    ></v-select>
                  </v-col>
                  <v-row>
                    <v-col cols="12" md="">
                      <p>Birthday</p>
                    </v-col>
                       <v-col cols="12" md="1">
                    <v-select  :items ="months"
                      label="M" v-model="selectedMonth"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="1">
                   <v-select
                      :items="days"
                      label="D" v-model="selectedDay"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="1">
                   <v-select
                      :items="years"
                      label="Y" v-model="selectedYear"
                    ></v-select>
                  </v-col>
                    <v-col cols="12" md="3">
                   <v-select
                   v-model="personalInfo.gender"
                      :items="genders"
                      label="Gender"
                    ></v-select>
                  </v-col>
                  </v-row>

                  <v-col cols="12" md="3">
                   <v-select
                      :items="citizenship"
                      label="Citizenship" v-model="personalInfo.citizenship"
                    ></v-select>
                  </v-col>
                    <v-col cols="12" md="4">
                   <v-select
                      :items="items"
                      label="Religion" v-model="personalInfo.religion"
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="4">
                   <v-select
                      :items="items"
                      label="Heritage" v-model="personalInfo.heritage"
                    ></v-select>
                  </v-col>
                    <v-col cols="12" md="4">
                   <v-select
                      :items="disabilities"
                      label="Disabilities" v-model="personalInfo.disabilities"
                    ></v-select>
                  </v-col>
                    <v-col cols="12" md="4">
                   <v-select
                      :items="majors"
                      label="Possible Majors" v-model="personalInfo.major"
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="4">
                   <v-select
                      :items="items"
                      label="Career Objectives" v-model="personalInfo.career"
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="4">
                   <v-select
                      :items="items"
                      label="Academic Honors"  v-model="personalInfo.honors"
                    ></v-select>
                  </v-col>
                 <v-col cols="12" md="4">
                   <v-select
                      :items="educationalExperiences"
                      label="Educational Experiences" v-model="personalInfo.educationalExperiences"
                    ></v-select>
                  </v-col>
                      <v-col cols="12" md="4">
                   <v-select
                      :items="yearScholarshipNeeded"
                      label="Year Scholarship Needed" v-model="personalInfo.yearScholarshipNeeded"
                    ></v-select>
                  </v-col>
                      <v-col cols="12" md="4">
                   <v-select
                      :items="currentSchoolYear"
                      label="Current School Year" v-model="personalInfo.currentSchoolYear"
                    ></v-select>
                  </v-col>
                   <v-col  cols="12" class="text-center">
                      <v-btn v-show="displayBtn" class="form-update-btn ma-2" @click="setPersonalInfo">Save</v-btn>
                      <v-btn v-show="displayBtn" class="form-update-btn" @click="clickNext('Education')">Next</v-btn>
                  </v-col>
                      <v-col  cols="12" class="text-center" v-show="!displayBtn">
                      <v-btn class="form-update-btn" @click="setPersonalInfo">Update</v-btn>
                    </v-col>
                    </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-container>
</template>
<script>
import * as data from '../../data'
import { profileSurveyMixins } from '../../mixins/profileSurveyMixins.js'

export default {
  mixins: [profileSurveyMixins],
  components: {
  },
  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      months: data.default.months,
      genders: data.default.genders,
      majors: data.default.majors,
      disabilities: data.default.disabilities,
      selectedMonth: '',
      selectedDay: '',
      selectedYear: '',
      educationalExperiences: data.default.educationalExperiences,
      yearScholarshipNeeded: data.default.yearScholarshipNeeded,
      currentSchoolYear: data.default.currentSchoolYear,
      citizenship: data.default.citizenship,
      iAmA: data.default.iAmA,
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
        disabilities: '',
        educationalExperiences: '',
        yearScholarshipNeeded: '',
        currentSchoolYear: ''
      }
    }
  },
  computed: {
    years () {
      const fromYear = 1960
      const toYear = new Date()
      const yearArray = Array.from(
        { length: toYear.getFullYear() - (fromYear - 1) },
        (_, index) => fromYear + index
      )
      return yearArray.reverse()
    },
    days () {
      const maxDays = 31
      const listDays = []
      let dayNumber = 1
      while (dayNumber <= maxDays) {
        listDays.push(dayNumber)
        dayNumber++
      };
      return listDays
    }

  },
  methods: {
    setPersonalInfo () {
      // set data
      console.log('personal info set')
      let setBirthday = ''
      setBirthday += this.selectedMonth + ' '
      setBirthday += this.selectedDay + ' '
      setBirthday += this.selectedYear
      this.personalInfo.birthday = setBirthday

      this.updateSurvey('updatePersonalInfo', this.personalInfo)
    }
  }
}
</script>

<style>
.py-0 {
  border: 1px solid #6200ea;
}
.save-btn{
  margin-right: 20 px;
}

</style>
