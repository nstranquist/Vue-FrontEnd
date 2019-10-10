<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card>
          <v-container>
            <h1 class="content-section-header">Housing Name</h1>
            <v-col cols="12">
              <p>Housing Description:</p>
              <p>Housing Organization:</p>
              <p>Other Parameters:</p>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn color="blue-grey" class="apply-btn">Apply</v-btn>
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HousingDetail"
};
</script>

<style scoped>
.apply-btn {
  color: #fff;
}
</style>
