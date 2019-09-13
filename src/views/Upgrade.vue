<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="content-section-header">Upgrade to Pro!</h1>
        <v-row>
          <v-col cols="12" lg="6">
            <v-card>
              <v-container>
                <h3 class="content-section-header">Free</h3>
                <p>Feature</p>
                <p>Feature</p>
                <p>Feature</p>
                <v-col cols="12" class="text-center">
                  <v-btn>Select</v-btn>
                </v-col>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card>
              <v-container>
                <h3 class="content-section-header">Premium</h3>
                <p>Feature</p>
                <p>Feature</p>
                <p>Feature</p>
                <v-col cols="12" class="text-center">
                  <v-btn class="select-btn" color="deep-purple">Select</v-btn>
                </v-col>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "upgrade"
};
</script>

<style scoped>
.select-btn {
  color: #fff;
}
</style>