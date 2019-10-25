<template>
  <v-card flat>
    <v-app-bar>

      <v-btn icon tile>
        <v-icon  >mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Scholarship List</v-toolbar-title>
    </v-app-bar>

    <v-container>
    <v-row :justify="alignment">
        <v-col cols="4" xs=4  >
        <v-card
        flat
        outlined
        class="pa-2"
      >              <p class="text-end align-center">Best Matches</p>
          </v-card>
          </v-col>
      </v-row>

    <v-card
        outlined
        v-for="scholarship in scholist"  :key="scholarship.id"
        class="mb-3"
    >
      <v-list-item three-line >
        <v-list-item-content>
           <v-row>
            <v-col cols="12" xs="4" sm="4" >
           <v-card flat tile>
              <p class="text-end">100% chance</p>
           </v-card>
            </v-col>
         </v-row>
        <v-list-item-title class="headline mb-1">{{scholarship.name}}</v-list-item-title>
        <p>{{scholarship.requirements}}</p>
        <p>{{scholarship.deadline}}</p>
      </v-list-item-content>
    </v-list-item>
    <div class="text-center pa-2">

      <v-btn small depressed >Apply</v-btn>
    </div>
    </v-card>
     </v-container>
    </v-card>

</template>

<script>
import * as data from '../data'
import * as axios from 'axios'

import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'scholarships',
  scholarships: '',
  results: [],
      created(){
      //  axios.get("https://us-central1-edurain.cloudfunctions.net/api/scholarships")
      //           .then(resp => {
      //             this.loading = true;
      //             console.log(resp);
      //             this.$store.dispatch('getScholarshipsAction', resp.data);
      //             console.log(this.scholarshipList);
      //           })
      //           .catch(err => {
      //             console.log(err);
      //             this.error = true;
      //           })
      //           .finally(() => (this.loading = false));
             },
  computed:
    mapState({
      // scholarshipList: state => state.scholarships.scholarships,
    }),
  methods: {
    ...mapActions(['getScholarshipsAction']),
     toggleRoute(value) {
       this.$router.push(`/scholarships/${value.id}`);
    },
  scholarships: function () {
      let array = this.scholarshipList;
      // console.log(array);
      const firstTen = array.slice(0,10);
      return firstTen;
    },
  },
  filters: {
    // filter functions for incoming data here
  },
  data: () => ({
      loading: null,
      alignment: 'end',
    headers: [
      {
        sortable: false,
        text: "Name",
        value: "name"
      },
      {
        sortable: false,
        text: "Organization",
        value: "organization"
      },
      {
        sortable: false,
        text: "Award",
        value: "award"
      },
      {
        sortable: false,
        text: "Type",
        value: "type"
      },
      {
        sortable: false,
        text: "Deadline",
        value: "deadline"
      }
    ],
    scholist: [
           {name: 'Scholarship 1', requirements: 'Some description ', deadline: 'October 31, 2019'},
           {name: 'Scholarship 2', requirements: 'Some description ', deadline: 'November 30, 2019'},
           {name: 'Scholarship 3', requirements: 'Some description ', deadline: 'December 31, 2019'},
           {name: 'Scholarship 4', requirements: 'Some description ', deadline: 'December 31, 2019'},
           {name: 'Scholarship 5', requirements: 'Some description', deadline: 'November 31, 2019'},
           {name: 'Scholarship 6', requirements: 'Some description', deadline: 'October 31, 2019'},
           {name: 'Scholarship 7', requirements: 'Some description', deadline: 'October 31, 2019'},
           {name: 'Scholarship 8', requirements: 'Some description', deadline: 'October 31, 2019'},
           {name: 'Scholarship 9', requirements: 'Some description', deadline: 'October 31, 2019'},
           {name: 'Scholarship 10', requirements: 'Some description', deadline: 'October 31, 2019'}
      ],

  })
}
</script>

<style scoped>
#scholarships {
  padding-top: 2%;
  padding-bottom: 2%;
}
li {
  list-style: none;
  padding-top: 5px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
#scholarships p {
  margin: 0;
  padding: 0;
}
.overline-border {
  border: 0.5px solid #CDCDCD;
  display: inline-block;
}
</style>
