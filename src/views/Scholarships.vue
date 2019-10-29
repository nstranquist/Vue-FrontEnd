<template>
  <v-container class="page-scholarships" fill-height fluid grid-list-xl>
    <v-row justify="center">
       <v-col cols="12">
        <h1 class="content-section-header">Scholarships</h1>
        <!-- <v-card>
          <ul id="scholarships">
            <li v-for="item in items" v-bind:key="item.id">
              <h3>{{item.name}}</h3>
              <p>Deadline: {{item.deadline}}</p>
              <p>Requirements: {{item.requirements}}</p>
              <p>Contact: {{item.contact}}</p>
            </li>
          </ul>
        </v-card> -->
        <v-card>
          <v-data-table   :headers="headers" :items="scholarshipList" item-key="id"  @click:row="toggleRoute">
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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

             },
  computed:
    mapState({
      scholarshipList: state => state.scholarships.scholarships,
    }),
  methods: {
    ...mapActions(['getScholarshipsAction']),
     toggleRoute(value) {
       this.$router.push(`/scholarships/${value.id}`);
    },

  },
  filters: {
    // filter functions for incoming data here
  },
  data: () => ({
      loading: true,
       dataLoaded: false,
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
</style>
