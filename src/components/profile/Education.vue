<template>
   <v-container>
          <v-card>
            <v-form>
              <v-container>
                <h3 class="title-heading">Education</h3>
                <v-row>
                   <v-col cols="12" md="3">
                    <v-text-field v-model="education.math" label="SAT Math Score" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="education.ebrw" label="SAT ( EBRW )" />
                  </v-col>
                        <v-col cols="12" md="3">
                    <v-text-field v-model="education.written"  label="SAT Written Score" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="education.act"  label="ACT Score" />
                  </v-col>
                 <v-col cols="12" md="5">
                   <v-select
                      :items="items"
                      v-model="education.highSchoolGraduationYear"
                      label="High School Graduation Year"
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="5">
                   <v-select
                      :items="items"
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
                      <p>Transfer Within a Year</p>
                      <v-radio-group v-model="education.transfer">
                        <v-radio label="Yes" value="Yes"></v-radio>
                        <v-radio label="No" value="No"></v-radio>
                     </v-radio-group>
                  </v-col>
                        <v-col cols="12" md="4">
                      <p>Currently Enrolled</p>
                      <v-radio-group v-model="education.enrolled">
                        <v-radio label="Yes" value="Yes"></v-radio>
                        <v-radio label="No" value="No"></v-radio>
                     </v-radio-group>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn v-show="displayBtn" @click="clickPrevious">Previous</v-btn>
                     <v-btn v-show="displayBtn"  @click="setEducation">Save</v-btn>
                    <v-btn v-show="displayBtn" @click="clickNext">Next</v-btn>
                    <v-btn v-show="!displayBtn" class="form-update-btn" @click="setEducation">Update</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-container>
</template>

<script>
import * as data from '../../data'

export default {
  components: {
  },
   props: {
   displayBtn: Boolean
  },
  data () {
    return {
      gpa: data.default.gpa,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
      gpa:''
      }
    }
  },
  computed: {
  },
  methods: {
    setEducation () {
      // set data
      this.$store.commit('updateEducation', this.education);

      if(!this.displayBtn){
        this.returnToDisplayProfileSurvey();
      }
    },
    clickNext () {
      console.log(this.$store.getters.getEducation)
      this.selectComponent('StudentActivities');
    },
    clickPrevious () {
      this.selectComponent('PersonalInfo');
    },
    selectComponent (componentName) {
      this.$emit('selectComponent', componentName);
    },
    returnToDisplayProfileSurvey(){
      console.log('return to display')
      this.$emit('selectComponent', 'DisplayProfileSurvey');
  }
  }
}
</script>

<style>
p {
  color: rgba(0, 0, 0, 0.54)
}
</style>
