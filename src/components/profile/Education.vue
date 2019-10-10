<template>
   <v-container class="py-0" >
          <v-card flat>
            <v-form>
              <v-container>
                <h3 class="title-heading">Education</h3>
                <v-row>
                   <v-col cols="12" md="3">
                   <v-select
                      v-model="education.math"
                      :items="satScores"
                      label="SAT Math Score"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                     v-model="education.ebrw"
                      :items="satScores"
                       label="SAT ( EBRW )"
                    ></v-select>
                  </v-col>
                        <v-col cols="12" md="3">
                        <v-select
                     v-model="education.written"
                      :items="satScores"
                     label="SAT Written Score"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      v-model="education.act"
                      :items="actScores"
                      label="ACT Score"
                    ></v-select>
                  </v-col>
                 <v-col cols="12" md="5">
                   <v-select
                      :items="graduationYear"
                      v-model="education.highSchoolGraduationYear"
                      label="High School Graduation Year"
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="5">
                   <v-select
                      :items="graduationYear"
                      v-model="education.collegeGraduationYear"
                      label="College Graduation Year"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="education.highSchool"  label="High School" />
                  </v-col>
                   <v-col cols="12" md="3">
                   <v-select
                      :items="gpa"
                      label="GPA" v-model="education.gpa"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="education.college" label="College" />
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-select
                      :items="yesOrNo"
                      label="Transfer Within a Year" v-model="education.transfer"
                    ></v-select>
                  </v-col>
                        <v-col cols="12" md="4">
                       <v-select
                      :items="yesOrNo"
                      label="Currently Enrolled" v-model="education.enrolled"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4">
                      <v-select
                      :items="yesOrNo"
                      label="Previous Funding Received" v-model="education.prevFundingReceived"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn v-show="displayBtn"  class="form-update-btn ma-2" @click="clickPrevious('PersonalInfo')">Prev</v-btn>
                     <v-btn v-show="displayBtn"  class="form-update-btn"  @click="updateSurvey('updateEducation', education)">Save</v-btn>
                    <v-btn v-show="displayBtn"   class="form-update-btn ma-2" @click="clickNext('StudentActivities')">Next</v-btn>
                  </v-col>
                    <v-col cols="12" class="text-center" v-show="!displayBtn" >
                    <v-btn class="form-update-btn" @click="updateSurvey('updateEducation', education)">Update</v-btn>
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
      gpa: data.default.gpa,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      yesOrNo:['Yes','No'],
      satScoreList: [],
      actScoreList: [],
      education: {
        highSchoolGraduationYear: '',
        collegeGraduationYear: '',
        math: '',
        ebrw: '',
        written: '',
        act: '',
        enrolled: '',
        transfer: '',
        college: '',
        highSchool: '',
        gpa: '',
        prevFundingReceived: ''
      }
    }
  },
  computed: {
    satScores () {
      Object.assign(this.satScoreList, this.calculateScores(801, 200));
      return this.satScoreList;
    },
    actScores () {
      Object.assign(this.actScoreList, this.calculateScores(801, 200));
      return this.actScoreList;
    },
    graduationYear () {
      const fromYear = new Date();
      const toYear = 2036;
      const yearArray = Array.from(
        { length: toYear - (fromYear.getFullYear() - 1) },
        (_, index) => fromYear.getFullYear() + index
      );
      return yearArray;
    }
  },
  methods: {

  }
}
</script>

<style>
p {
  color: rgba(0, 0, 0, 0.54)
}
.edit-btn{
   color: white;
  background: #5097dd !important;
}
</style>
