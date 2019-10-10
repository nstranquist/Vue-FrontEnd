<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12">
        <!-- Scholarships Section -->
        <h1>Scholarships</h1>
      </v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-container>
            <h4>Your Matches</h4>
            <v-list>
              <v-list-item v-for="(item, i) in matchedScholarships" :key="i" to="/scholarships/2">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
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
        </v-card>
      </v-col>
      <v-col cols="12">
        <!-- Applications Section -->
        <h1>Applications</h1>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="blue-grey">
          <v-container class="completed-container">
            <h4 class="content-section-header">Not Started</h4>
            <v-card>
              <v-list dense class="application-list-container">
                <v-list-item v-for="(item, i) in notStartedApps" :key="i" to="/templates">
                  <v-list-item-title v-text="item.text" class="list-item"></v-list-item-title>
                  <v-spacer />
                  <v-icon class="list-icon">delete</v-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="yellow darken-3">
          <v-container class="completed-container">
            <h4 class="content-section-header">In-Progress</h4>
            <v-card>
              <v-list dense class="application-list-container">
                <v-list-item v-for="(item, i) in inProgressApps" :key="i" to="/templates/0">
                  <v-list-item-title v-text="item.text" class="list-item"></v-list-item-title>
                  <v-spacer />
                  <v-icon class="list-icon">border_color</v-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="success">
          <v-container class="completed-container">
            <h4 class="content-section-header">Completed</h4>
            <v-card>
              <v-list dense class="application-list-container">
                <v-list-item v-for="(item, i) in completedApps" :key="i" >
                  <v-list-item-title v-text="item.text" class="list-item"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'dashboard',
  data: () => ({
    date: 1,
    dates: [
      { text: 'Sep. 12' },
      { text: 'Sep. 18' },
      { text: 'Oct. 9' },
      { text: 'Nov. 21' }
    ],
    matchedScholarships: 1,
    matchedScholarships: [
      { route: '/scholarships/1', text: 'Washington Universtiy' },
      { route: '/scholarships/2', text: 'Saint Louis Universtiy' },
      { route: '/scholarships/3', text: 'University of Missoui - St. Louis' },
      { route: '/scholarships/4', text: 'Rotary Club Scholarship' }
    ],
    notStartedApps: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' },
      { text: 'Item 4' }
    ],
    inProgressApps: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' }
    ],
    completedApps: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' },
      { text: 'Item 4' },
      { text: 'Item 5' }
    ]
  }),
  methods: {}
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
</style>
