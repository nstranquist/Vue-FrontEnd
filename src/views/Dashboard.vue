<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12" md="7">
         <v-card color="yellow darken-3">
          <v-container class="completed-container">
            <h2  class="content-section-header">Matched Scholorships</h2>
            <v-card>
              <div v-show="loading" class="text-center">
                <v-progress-circular class="spinner"
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
             <v-list v-show="!loading" dense class="application-list-container" >
              <v-list-item-group   multiple >
                <v-list-item v-for="(item) in matchedScholarships" :key="item.id"  @click="addMyFaveScholarship(item)" color="indigo">
                  <v-list-item-title v-text="item.text" class="list-item" ></v-list-item-title>
                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon >star</v-icon>
                  </v-list-item-icon>
                  </v-list-item>
                </v-list-item-group>
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
                <v-list-item v-for="(item) in recentActivity" :key="item.id" :to="item.link">
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
                <v-list-item-group
                 multiple
                  color="indigo">
                  <v-list-item
                   v-for="(item, i) in availableHousing"
                  :key="i"
                  @click="addMyFaveHousing(item)">
                  <v-list-item-title v-text="item.text" class="list-item" ></v-list-item-title>
                   <v-list-item-icon>
                    <v-icon >home</v-icon>
                  </v-list-item-icon>
                  </v-list-item>
                </v-list-item-group>
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
    loading: false,
    approachDeadline: 'Approaching Deadlines',
    matched: 'Matched Scholarships',
    completeSurve: 'Get Matched to Scholorships By Completeing Profile Survey',
    profile: true,
    dialog: false,
   selected: false,
    dates: [
      { text: 'Sep. 12' },
      { text: 'Sep. 18' },
      { text: 'Oct. 9' },
      { text: 'Nov. 21' }
    ],
    activity: [
      { text: 'My Favorites', icon: 'star', link: '/favorites' },
      { text: 'Scholarship Applications', icon: 'mdi-clipboard-text', link:'/' },
      { text: 'Housing Applications', icon: 'mdi-clipboard-text-outline', link:'/'},
      { text: 'Profile', icon: 'account_box', link:'/profile' },
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
      { text: 'House 1', id:1},
      { text: 'House 2', id:2 },
      { text: 'House 3',  id:3},
      { text: 'House 4', id:4},
      { text: 'House 5', id:5}
    ],
    scholarshipsList: [
      { text: 'Scholarship 1', id:1},
      { text: 'Scholarship 2', id:2 },
      { text: 'Scholarship 3',  id:3},
      { text: 'Scholarship 4', id:4},
      { text: 'Scholarship 5', id:5},
      { text: 'Scholarship 6', id:6},
      { text: 'Scholarship 7', id:7},
      { text: 'Scholarship 8', id:8},
      { text: 'Scholarship 9', id:9}

    ]
  }),
  computed: {
    matchedScholarships: function () {
      // let array = this.$store.getters.getScholarshipList;
      let array = this.scholarshipsList;

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
  createProfile(){
      this.$router.push(`/profile`)
    },
    addMyFaveHousing(value){
      let myFaveHousing = this.$store.state.myFaveHousing;

      if(this.myFaveHousing.length == 0 || !this.myFaveHousing.includes(value)){
        this.myFaveHousing.push(value);
         this.$store.dispatch('updateMyFaveHousingAction', this.myFaveHousing)
        console.log('added housing: ' + value)
      }
      else{
        let index = this.myFaveHousing.indexOf(value)
        this.myFaveHousing.splice(index,1);
        this.$store.dispatch('updateMyFaveHousingAction', this.myFaveHousing);
        console.log('removed housing: ' + value)
      }
      console.log(this.myFaveHousing);
      },


 addMyFaveScholarship(value){

      let myFaveScholarships =  this.$store.state.myFavorites.myFaveScholarships;

      if (myFaveScholarships.filter(s=> s === value).length > 0) {
        let index = myFaveScholarships.indexOf(value);

        myFaveScholarships.splice(index,1);
        console.log('Found at index: ' + index);
        const updatedMyFaveScholarships = myFaveScholarships.filter( s =>  s !== value);

        this.$store.dispatch('updateMyFaveScholarshipsAction', updatedMyFaveScholarships)
        myFaveScholarships =  this.$store.state.myFavorites.myFaveScholarships;

        console.log('removed scholarship: ' + value.text + 'id: ' + value.id)
}else{
        myFaveScholarships.push(value);
        this.$store.dispatch('updateMyFaveScholarshipsAction', this.myFaveScholarships);
        myFaveScholarships =  this.$store.state.myFavorites.myFaveScholarships;
        console.log('added scholarship: ' + value.text + ' id: ' + value.id)
}
      console.log('number of objects:' + myFaveScholarships.length);
    }
  },
  created(){
    setTimeout(() => {
            this.loading = false;
          }, 6000);
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
