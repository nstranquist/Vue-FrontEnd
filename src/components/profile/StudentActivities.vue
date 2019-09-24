<template>
  <v-container>
          <v-card>
            <v-form>
              <v-container class="py-0">
                <h3 class="title-heading">Student Activities</h3>
                <v-row>
                   <v-col cols="12" md="3">
                    <v-text-field v-model="activities.fraternity" label="Fraternity" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="activities.sorority" label="Sorority" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="activities.perform" label="Performing Arts" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="activities.employer" label="Employer" />
                  </v-col>
                 <v-col cols="12" md="4">
                   <v-select
                      :items="items" v-model="activities.sports"
                      label="Sports"
                    ></v-select>
                  </v-col>
                   <v-col cols="12" md="4">
                   <v-select
                      :items="military" v-model="activities.military"
                      label="Military"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn  v-show="displayBtn" @click="clickPrevious">Previous</v-btn>
                     <v-btn  v-show="displayBtn" @click="setStudentActivities" >Save</v-btn>
                    <v-btn  v-show="displayBtn" @click="clickNext">Next</v-btn>
                    <v-btn v-show="!displayBtn" class="form-update-btn" @click="setStudentActivities">Update</v-btn>
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
      military: data.default.military,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      activities: {
        fraternity: '',
        military: '',
        sorority: '',
        sports: '',
        perform: '',
        employer: ''
      }
    }
  },
  methods: {
    setStudentActivities () {
      // set data
      this.$store.commit('updateStudentActivities', this.activities);
        if(!this.displayBtn){
             this.returnToDisplayProfileSurvey();
        }
    },
    clickNext () {
      console.log(this.$store.getters.getStudentActivities)
      this.selectComponent('ParentInfo');
    },
    clickPrevious () {
      this.selectComponent('Education');
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
</style>
