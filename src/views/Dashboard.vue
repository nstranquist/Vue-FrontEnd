<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12" md="7">
         <v-card color="yellow darken-3">
          <v-container class="completed-container">
            <h2 v-show="!profile"  class="content-section-header">Scholarships Approaching Deadline</h2>
            <h2  v-show="profile" class="content-section-header">Matched Scholorships</h2>
            <v-card>
              <div v-show="loading" class="text-center">
                <v-progress-circular class="spinner"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
              <v-list v-show="!loading" dense class="application-list-container">
                <v-list-item v-for="(item) in approachingDeadline" :key="item.id" >
                  <v-list-item-title v-text="item.name" class="list-item" ></v-list-item-title>
                  <v-card-actions>
                  <v-spacer />
                  <v-icon :style="{color: changeColor}" @click="myFavorite(item)">star</v-icon>
                  </v-card-actions>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
        <!-- <v-card>
          <v-container>
            <h4>Your Matches</h4>
            <v-list>
              <v-list-item v-for="(item, i) in matchedScholarships" :key="i" to="/scholarships/2">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-container>
        </v-card> -->
      </v-col>
      <v-col cols="12" md="5">
         <v-card color="deep-purple darken-4">
          <v-container class="completed-container">
            <h2 class="content-section-header">Recent Activity</h2>
            <v-card>
              <v-list dense class="application-list-container">
                <v-list-item v-for="(item) in recentActivity" :key="item.id" to="/templates/0">
                  <v-list-item-title v-text="item.text" class="list-item"></v-list-item-title>
                   <v-spacer />
                  <v-icon class="list-icon" color = "deep-purple darken-4">{{ item.icon }}</v-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
        <!-- <v-card>
          <v-container>
            <h4>Due Dates</h4>
            <v-list dense>
              <v-list-item-group v-model="item" color="deep-purple">
                <v-list-item v-for="(item, i) in dates" :key="i">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-container>
        </v-card> -->
      </v-col>
      <v-col cols="12" md="7">
      <div v-show="loading" class="text-center">
        <v-progress-circular class="spinner"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
         <v-card color="blue-grey darken-4">
          <v-container class="completed-container">
            <h3 class="content-section-header">Off-Campus Housing</h3>
            <v-card>
              <v-list v-show="!loading" dense class="application-list-container">
                <v-list-item v-for="(item) in availableHousing" :key="item.id" to="/templates/0">
                  <v-list-item-title v-text="item.text" class="list-item"></v-list-item-title>
                  <v-spacer />
                  <v-icon class="list-icon">home</v-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
          </v-card>
        </v-col>
      <v-col cols="12" md="5">
        <v-card color="green darken-2">
          <v-container class="completed-container">
            <h3 class="content-section-header">Colleges & Universities</h3>
            <v-card>
              <v-list dense class="application-list-container">
                <v-list-item v-for="(item) in schools" :key="item.id">
                  <v-list-item-title v-text="item.name" class="list-item"></v-list-item-title>
                   <v-spacer/>
                 <v-list-item-title v-text="item.location" class="list-item text-right"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" >
       <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="450">
      <template v-slot:activator="{ on }">
        <div color="primary" dark v-on="on"></div>
      </template>
      <v-card >
        <v-card-title class="headline">Improve Your Scholarship Search!</v-card-title>
        <v-card-text>Complete the profile survey to improve your chances of finding a scholarships that are more inline with your future goals.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="deep-purple darken-4" text @click="dialog = false">Close</v-btn>
          <v-btn color="deep-purple darken-4" text @click="createProfile">Create Profile</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'dashboard',
  data: () => ({
    loading: true,
    approachDeadline: 'Approaching Deadlines',
    matched: 'Matched Scholarships',
    completeSurve: 'Get Matched to Scholorships By Completeing Profile Survey',
    profile: true,
    dialog: false,
    myFave: [],
    selected: false,
    changeColor: '',
    date: 1,
    dates: [
      { text: 'Sep. 12' },
      { text: 'Sep. 18' },
      { text: 'Oct. 9' },
      { text: 'Nov. 21' }
    ],
    matchedScholarships: 1,
    matchedScholarships: [
      { route: '/scholarships/1', text: 'Washington Universtiy' },
      { route: '/scholarships/2', text: 'Saint Louis Universtiy' },
      { route: '/scholarships/3', text: 'University of Missoui - St. Louis' },
      { route: '/scholarships/4', text: 'Rotary Club Scholarship' }
    ],
    activity: [
      { text: 'My Favorites', icon: 'star' },
      { text: 'Scholarship Applications', icon: 'mdi-clipboard-text' },
      { text: 'Housing Applications', icon: 'mdi-clipboard-text-outline' },
      { text: 'Profile', icon: 'account_box' },
      { text: 'Item 5' },
    ],
    school: [
      { name: 'Maryville University', location: 'St.Louis, Mo' },
      {  name: 'St.Louis Community College', location: 'St.Louis, Mo'},
      {  name: 'Kansas City University', location: 'Kansas City, Mo'},
      {  name: 'University Of Missouri', location: 'Columbia, Mo'},
       { name: 'Southeast Missouri State', location: 'Cape Girardeau, Mo'}
    ],
    offCampusHousing: [
      { text: 'House 1' },
      { text: 'House 2' },
      { text: 'House 3' },
      { text: 'House 4' },
      { text: 'House 5' }
    ]
  }),
  computed: {
    approachingDeadline: function () {
      let array = this.$store.getters.getScholarshipList;
      // console.log(array);
      const firstFive = array.slice(0,5);
      return firstFive;
    },
    availableHousing: function () {
      return this.offCampusHousing;
    },
     recentActivity: function () {
      return this.activity;
    },
     schools: function () {
      return this.school;
    },
  },
  methods: {
    completedProfileSurvey(){
      console.log('completed profile survey method called')
     if(!this.profile){
       setTimeout(() => {
        this.dialog = true;
      }, 20000);
  }
     },
         createProfile(){
      this.$router.push(`/profile`)
    },
    myFavorite(value){
      console.log(value)
      if(this.myFave.length === 1 && this.myFave.includes(value)){
        this.myFave = [];
        this.changeColor = '';
         console.log('=====1');
             return;
      } else if(this.myFave.includes(value) && this.myFave.length > 1){
         console.log('=====2');
         this.changeColor = '';
          this.myFave = this.myFave.filter(m => m!== value);
          console.log(this.myFave)
          return;
      }
      this.myFave.push(value);
      this.changeColor ="yellow";
      console.log('=====3');
      console.log(this.myFave);
      return this.myFave;
    }

  },
  created(){
    setTimeout(() => {
            this.loading =false;
          }, 2000);
     this.completedProfileSurvey()
      },
}
</script>

<style scoped>
.completed-container {
  color: #fff;
}
.application-list-container .list-item {
  padding-left: 10px;
}
.application-list-container .list-icon {
  font-size: 20px;
}
.spinner{
  margin-top: 55px;
  margin-bottom: 55px;
}
.subtitle{
  font-weight: bold;
  margin-right: 15px;
}
.sub-subtitle{
  margin-top: 2px;
}


</style>
