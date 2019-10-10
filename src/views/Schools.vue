<template>
  <v-container class="page-schools" fill-height fluid grid-list-xl>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="content-section-header">Schools</h1>
        <v-card>
          <ul id="schools">
            <li v-for="item in results" v-bind:key="item.id">
              <h3>{{item.name}}</h3>
              <p>Location: {{item.location}}</p>
              <p>Tuition: {{item.tuition}}</p>
              <p>Website: {{item.website}}</p>
            </li>
          </ul>
          <v-data-table :headers="headers" :results="results" click:row="toggleRoute(:result)" />
        </v-card>
        <v-card to="/schools/1">
          <v-data-table :headers="headers" :items="items" click:row="toggleRoute(:item)" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "schools",
  methods: {
    toggleRoute() {
      this.$router.push("/schools/1");
    }
  },
  filters: {
    // filter functions for incoming data here
  },
  data: () => ({
    results: null,
    loading: true,
    error: false,
    headers: [
      {
        sortable: false,
        text: "Name",
        value: "name"
      },
      {
        sortable: false,
        text: "Location",
        value: "location"
      },
      {
        sortable: false,
        text: "Tuition",
        value: "tuition"
      },
      {
        sortable: false,
        text: "Website",
        value: "website"
      }
    ],
    items: [
      {
        id: "dlksfjd8fsudfkdsf",
        name: "Hard-Coded School Name",
        location: "LameCode, Missouri",
        tuition: 100000,
        website: "fkslajfdlsfkj.com"
      },
      {
        id: "dlksfjd8fsfdsfkdsf",
        name: "Hard-Coded School Name 2",
        location: "LameCode2, Missouri",
        tuition: 150000,
        website: "fggjfafefdd.com"
      }
    ]
  }),
  mounted() {
    axios
      .get("https://us-central1-edurain.cloudfunctions.net/api/schools")
      .then(resp => {
        console.log(resp);
        console.log("response: " + resp.data);
        console.log("response: " + resp.data[0].name);
        this.results = resp.data;
      })
      .catch(err => {
        console.log(err);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style scoped>
#schools {
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
#schools p {
  margin: 0;
  padding: 0;
}
</style>
