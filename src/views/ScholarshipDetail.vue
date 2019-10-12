<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card>
          <v-container>
            <h1 class="content-section-header">{{selectedScholarship.name}}</h1>
            <v-col cols="12">
              <p>Scholarship Description: <span>{{selectedScholarship.requirements}}</span></p>
              <p>Scholarship Organization: <span>{{'need organization'}}</span></p>
              <p>GPA Min: <span>{{0}}</span></p>
              <p>ACT Min:<span>{{0}}</span></p>
              <p>Other Parameters:</p>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn to="/templates/0" color="blue-grey" class="apply-btn">Apply</v-btn>
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'ScholarshipDetail',
    data (){
      return{
        selectedScholarship:{}
      }
    },
   computed: {
    ...mapGetters(['getScholarshipList' ]),
  },
  created (){
      const id = this.$route.params.id;
      const scholarshipList = this.$store.getters.getScholarshipList;
      const scholarship = scholarshipList.filter(s => s.id === id);
      Object.assign(this.selectedScholarship, scholarship[0] );
      return this.selectedScholarship;
  }
  }
</script>

<style scoped>
.apply-btn {
  color: #fff;
}
p{
  font-weight: bold;
}
span{
  font-weight: 450;
}
</style>
