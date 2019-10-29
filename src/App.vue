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
      loading: false,
      dataLoaded:false,
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
    // if(!this.dataLoaded) {
    //       axios.get("https://us-central1-edurain.cloudfunctions.net/api/scholarships")
    //             .then(resp => {
    //               console.log(resp);
    //               this.$store.dispatch('getScholarshipsAction', resp.data);
    //               console.log(this.scholarshipList);
    //             })
    //             .catch(err => {
    //               console.log(err);
    //               this.error = true;
    //             })
    //             .finally(() =>{
    //               setTimeout(() => {
    //                  this.loading = false;
    //                   this.dataLoaded=true;
    //               }, 25000);
    //             });
    //   }
  },
  methods: {
    pushRoute(routeName) {
      this.$router.push(routeName);
    },
    printThis() {
      let array = this.$store.getters.getScholarshipList;
      console.log("hello");
      console.log(array.slice(0, 6));
    }
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
