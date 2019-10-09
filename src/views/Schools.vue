<template>
  <v-container class="page-schools" fill-height fluid grid-list-xl>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="content-section-header">Schools</h1>
        <v-card to="/schools/1">
          <v-data-table :headers="headers" :items="items" click:row="toggleRoute(:item)" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "schools",
  methods: {
    toggleRoute() {
      this.$router.push("/schools/1");
    }
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
        name: "Hard-Coded School Name",
        location: "LameCode, Missouri",
        tuition: 100000,
        website: "fkslajfdlsfkj.com"
      },
      {
        name: "Hard-Coded School Name 2",
        location: "LameCode2, Missouri",
        tuition: 150000,
        website: "fggjfafefdd.com"
      }
    ]
  })
};
</script>

<style scoped>
</style>
