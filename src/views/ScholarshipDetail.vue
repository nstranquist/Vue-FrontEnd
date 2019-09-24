<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card>
          <v-container>
            <h1 class="content-section-header">Scholarship Name</h1>
            <v-col cols="12">
              <p>Scholarship Description:</p>
              <p>Scholarship Organization:</p>
              <p>GPA Min.:</p>
              <p>ACT Min.:</p>
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
export default {
  name: 'ScholarshipDetail'
}
</script>

<style scoped>
.apply-btn {
  color: #fff;
}
</style>
