<template>
<nav>
  <v-app-bar  app color="transparent" class="page-app-bar">
    <v-app-bar-nav-icon  dark icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="tertiary--text font-weight-light align-self-center">

      {{ title }}
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-row align="center" class="mx-0">
        <v-text-field class="mr-4 purple-input" color="purple" label="Search..." hide-details />

        <v-btn icon to="/">
          <v-icon color="tertiary">dashboard</v-icon>
        </v-btn>

        <v-menu bottom left offset-y transition="slide-y-transition">
          <template v-slot:activator="{ attrs, on }">
            <v-btn class="toolbar-items" icon v-bind="attrs" v-on="on">
              <v-badge color="error" overlap>
                <!--<template slot="badge">{{ notifications.length }}</template>-->
                <v-icon color="tertiary">notifications</v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-card>
            <v-list dense>
              <v-list-item
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-item-title v-text="notification" />
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn to="/profile" icon>
          <v-icon color="tertiary">account_circle</v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items>
  </v-app-bar>
  <NavDrawer :drawer = "drawer"></NavDrawer>
</nav>
</template>

<script>
// Utilities
import { mapMutations } from "vuex";

export default {
  components: {
        NavDrawer: () => import("@/components/NavDrawer"),

  },
  data: () => ({
    notifications: [
      "You applied to a scholarship",
      "You got accepted to a scholarship",
      "You received funding for housing",
      "You started a scholarship application",
      "Hard-Coded Notifications are just meh"
    ],
    title: null,
    drawer: false
  }),


};
</script>

<style>
.page-app-bar {
  width: auto;
  background: #f5f5f5 !important;
}
.page-app-bar a {
  text-decoration: none;
}
</style>
