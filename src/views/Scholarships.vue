<template>
  <v-container class="page-scholarships" fill-height fluid grid-list-xl>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="content-section-header">Scholarships</h1>
        <v-card>
          <ul id="scholarships">
            <li v-for="item in results" v-bind:key="item.id">
              <h3>{{item.name}}</h3>
              <p>Deadline: {{item.deadline}}</p>
              <p>Requirements: {{item.requirements}}</p>
              <p>Contact: {{item.contact}}</p>
            </li>
          </ul>
        </v-card>
        <v-card>
          <v-data-table :headers="headers" :items="items" click:row="toggleRoute(:item)" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "scholarships",
  results: [],
  loading: true,
  error: false,
  methods: {
    toggleRoute(id) {
      this.$router.push(`/scholarships/${id}`);
    }
  },
  mounted() {
    axios
      .get("https://us-central1-edurain.cloudfunctions.net/api/scholarships")
      .then(resp => {
        console.log(resp);
        console.log("response: " + resp.data);
        this.results = resp.data;
      })
      .catch(err => {
        console.log(err);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
    // filter functions for incoming data here
  },
  data: () => ({
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
        text: "Amount",
        value: "amount"
      },
      {
        sortable: false,
        text: "Type",
        value: "type"
      },
      {
        sortable: false,
        text: "Due Date",
        value: "date"
      }
    ],
    items: [
      {
        name: "First Scholarship",
        organization: "Balsa Foundation",
        amount: "2,000",
        type: "Essay",
        date: "Sep. 8"
      },
      {
        name: "Second Scholarship",
        organization: "Washington University",
        amount: "2,000",
        type: "Essay",
        date: "Sep. 8"
      },
      {
        name: "Third Scholarship",
        organization: "Tech Artista",
        amount: "2,000",
        type: "Essay",
        date: "Sep. 8"
      }
    ]
  })
};
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
