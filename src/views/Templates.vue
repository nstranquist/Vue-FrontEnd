<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <h1 class="content-section-header">Your Templates</h1>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="blue" to="/templates/1">
          <v-img class="white--text" height="200px">
            <v-card-title class="fill-height align-center justify-center">Prose Fiction</v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="blue-grey" to="/templates/2">
          <v-img class="white--text" height="200px">
            <v-card-title class="fill-height align-center justify-center">Persuasive Essay</v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="orange darken-2" to="/templates/3">
          <v-img class="white--text" height="200px">
            <v-card-title class="fill-height align-center justify-center">Research Paper</v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="brown" to="/templates/4">
          <v-img class="white--text" height="200px">
            <v-card-title class="fill-height align-center justify-center">Argumentative</v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="red lighten-1" to="/templates/5">
          <v-img class="white--text" height="200px">
            <v-card-title class="fill-height align-center justify-center">Personal Narrative</v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card class="mx-auto" max-width="400" color="purple" to="/templates/6">
          <v-img class="white--text" height="200px">
            <v-card-title class="fill-height align-center justify-center">Poetry</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "templates",
  data: () => ({
    templateItems: [
      "Prose Fiction",
      "Persuasive Essay",
      "Research Paper",
      "Argumentative",
      "Personal Narrative",
      "Poetry"
    ]
  })
};
</script>

<style scoped>
</style>