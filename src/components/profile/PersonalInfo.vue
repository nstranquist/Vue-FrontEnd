<template>
        <v-container class="py-0" >
          <v-card flat>
            <v-form>
              <v-container>
                <h1 class="title-heading">Personal Information</h1>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-select
                    :items="iAmA"
                    label="I am A..." v-model="personalInfo.iAmA"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="personalInfo.birthday"
                        label="Birthday date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                     </template>
                      <v-date-picker
                        ref="picker"
                        v-model="personalInfo.birthday"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1950-01-01"
                    ></v-date-picker>
                  </v-menu>
                  </v-col>
                    <v-col cols="12" md="4">
                   <v-select
                   v-model="personalInfo.gender"
                      :items="genders"
                      label="Gender"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4">
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
                      <v-btn v-show="displayBtn" class="form-update-btn ma-2" @click="updateSurvey('updatePersonalInfoAction', personalInfo)">Save</v-btn>
                      <v-btn v-show="displayBtn" class="form-update-btn" @click="clickNext('Education')">Next</v-btn>
                  </v-col>
                      <v-col  cols="12" class="text-center" v-show="!displayBtn">
                      <v-btn class="form-update-btn" @click="updateSurvey('updatePersonalInfoAction', personalInfo)">Update</v-btn>
                    </v-col>
                    </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-container>
</template>
  <script>
    import data from '../../data'
    import { profileSurveyMixins } from '../../mixins/profileSurveyMixins.js'

    export default {
      mixins: [profileSurveyMixins],
      components: {
      },
      data () {
        return {
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          genders: data.genders,
          majors: data.majors,
          disabilities: data.disabilities,
          educationalExperiences: data.educationalExperiences,
          yearScholarshipNeeded: data.yearScholarshipNeeded,
          currentSchoolYear: data.currentSchoolYear,
          citizenship: data.citizenship,
          iAmA: data.iAmA,
          menu: false,
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
      },
       watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
      methods: {
        save (date) {
        this.$refs.menu.save(date)
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
