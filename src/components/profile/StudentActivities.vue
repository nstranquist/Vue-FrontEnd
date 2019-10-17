<template>
  <v-container class="py-0">
          <v-card flat>
            <v-form>
              <v-container>
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
                  <v-col cols="12" class="text-center"  v-show="displayBtn">
                    <v-btn   class="form-update-btn ma-2" @click="clickPrevious('Education')">Prev</v-btn>
                     <v-btn  class="form-update-btn" @click="updateSurvey('updateStudentActivitiesAction', activities)" >Save</v-btn>
                    <v-btn class="form-update-btn ma-2" @click="clickNext('ParentInfo')">Next</v-btn>
                  </v-col>
                   <v-col cols="12" class="text-center" v-show="!displayBtn">
                   <v-btn class="form-update-btn" @click="updateSurvey('updateStudentActivitiesAction', activities)">Update</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-container>
</template>

<script>
import  data, {military} from '../../data'
import { profileSurveyMixins } from '../../mixins/profileSurveyMixins.js'

export default {
  mixins: [profileSurveyMixins],
  components: {
  },
  data () {
    return {
      military: data.military,
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
  }
}
</script>

<style>
</style>
