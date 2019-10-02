<template>
<v-container>
          <v-card>
            <v-form>
              <v-container class="py-0">
                <h1 class="title-heading">Parent Information</h1>
                <v-row>
                   <v-col cols="12" md="3">
                    <v-text-field v-model="parentInfo.occupation" label="Parent Occupation" />
                  </v-col>
                   <v-col cols="12" md="5">
                   <v-select
                      :items="military" v-model="parentInfo.military"
                      label="Parent Military Experience"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                         <v-textarea
                        outlined
                        name="input-7-4" v-model="parentInfo.memberships"
                        label="Parent Associations and Memberships">
                        </v-textarea>
                  </v-col>
                  <v-col cols="12" md="6">
                         <v-textarea
                        outlined
                        name="input-7-4" v-model="parentInfo.employer"
                        label="Current/Previous Employers">
                        </v-textarea>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn  v-show="displayBtn"  @click="clickPrevious('StudentActivities')">Previous</v-btn>
                    <v-btn v-show="displayBtn"  @click="updateSurvey('updateParentInfo', parentInfo)">Save</v-btn>
                    <v-btn v-show="displayBtn"  @click="completed">Done</v-btn>
                     <v-btn v-show="!displayBtn" class="form-update-btn" @click="updateSurvey('updateParentInfo', parentInfo)">Update</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-container>
</template>

<script>
import * as data from '../../data'
import {profileSurveyMixins} from '../../mixins/profileSurveyMixins.js'

export default {
    mixins: [profileSurveyMixins],
  components: {
  },
  data () {
    return {
      military: data.default.military,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      parentInfo: {
        memberships: '',
        employer: '',
        occupation: '',
        military: ''
      },
    }
  },
  methods: {
      completed() {
        console.log('submit')
        this.selectComponent('DisplayProfileSurvey');
      }
  }
}
</script>

<style>
</style>
