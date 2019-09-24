<template>
        <v-container>
          <v-card>
            <v-form>
              <v-container>
                <h1 class="title-heading">Personal Information</h1>
                <v-row>
                   <v-col cols="12" md="12">
                    <p>Birthday</p>
                  </v-col>
                   <v-col cols="12" md="2">
                    <v-select  :items ="months"
                      label="Month" v-model="selectedMonth"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                   <v-select
                      :items="days"
                      label="Day" v-model="selectedDay"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2">
                   <v-select
                      :items="years"
                      label="Year" v-model="selectedYear"
                    ></v-select>
                  </v-col>
                    <v-col cols="12" md="3">
                   <v-select
                   v-model="personalInfo.gender"
                      :items="genders"
                      label="Gender"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                   <v-select
                      :items="items"
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
                   <v-col  cols="12" class="text-center">
                    <v-btn v-show="displayBtn" class="form-update-btn" @click="setPersonalInfo">Save</v-btn>
                    <v-btn v-show="displayBtn" class="form-update-btn" @click="clickNext">Next</v-btn>
                     <v-btn v-show="!displayBtn" class="form-update-btn" @click="setPersonalInfo">Update</v-btn>
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
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      months: data.default.months,
      genders: data.default.genders,
      majors: data.default.majors,
      disabilities: data.default.disabilities,
      selectedMonth: '',
      selectedDay: '',
      selectedYear: '',
      educationalExperiences: data.default.educationalExperiences,
      personalInfo: {
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
        educationalExperiences:''
      }
    }
  },
  computed: {
    years () {
      const year = new Date();
      const yearArray = Array.from(
        { length: year.getFullYear() - 1959 },
        (_, index) => 1960 + index
      );
      return yearArray.reverse();
    },
    days(){
      const maxDays = 31;
      const listDays = [];
      let dayNumber = 1;
      while ( dayNumber  <= maxDays) {
              listDays.push(dayNumber) ;
              dayNumber++;
      };
      return listDays;
    }
  },
  methods: {
    setPersonalInfo () {
      // set data

      let setBirthday = '';
      setBirthday += this.selectedMonth + ' ';
      setBirthday +=  this.selectedDay + ' ';
      setBirthday +=  this.selectedYear;

      this.personalInfo.birthday =   setBirthday;
      this.$store.commit('updatePersonalInfo', this.personalInfo);

      if(!this.displayBtn){
        this.returnToDisplayProfileSurvey();
      }
    },
    clickNext () {
      console.log('display:' + this.display)
      console.log(this.$store.getters.getPersonalInfo)
      this.$emit('selectComponent', 'Education');
    },
     returnToDisplayProfileSurvey(){
      console.log('return to display')
      this.$emit('selectComponent', 'DisplayProfileSurvey');
  }
  },

}
</script>

<style>
</style>
