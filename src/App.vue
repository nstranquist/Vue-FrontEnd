<template>
  <!-- Put this into our UserProfile View -->
  <v-app>
    <NavDrawer></NavDrawer>
    <AppBar></AppBar>
    <ContentView></ContentView>
    <Footer></Footer>
  </v-app>
</template>

<script>
import * as axios from "axios";

export default {
  components: {
    NavDrawer: () => import("@/components/NavDrawer"),
    Footer: () => import("@/components/Footer"),
    AppBar: () => import("@/components/AppBar"),
    ContentView: () => import("@/components/ContentView")
  },
  data() {
    return {
      loading: true,
      items: [
        { route: "/", title: "Dashboard", icon: "dashboard" },
        { route: "/profile", title: "Profile", icon: "account_box" },
        { route: "/scholarships", title: "Scholarships", icon: "school" },
        { route: "/templates", title: "Templates", icon: "border_color" },
        { route: "/settings", title: "Settings", icon: "settings" }
      ]
    };
  },

  created() {
    const scholarshipList = this.$store.getters.getScholarshipList;
    if(scholarshipList == null || scholarshipList == undefined){
       this.$store.dispatch('getScholarships');
    }

  },
  methods: {
    pushRoute(routeName) {
      this.$router.push(routeName);
    },
  }
};
</script>

<style>
.img-fluid {
  max-height: 100%;
  margin: 0 auto;
}
.nav-avatar {
  cursor: pointer;
}
.content-section-header {
  text-align: center;
  margin-bottom: 10px;
}
</style>
