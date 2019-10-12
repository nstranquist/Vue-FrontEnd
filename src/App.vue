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
import * as axios from 'axios'

export default {
  components: {
    NavDrawer: () => import('@/components/core/NavDrawer'),
    Footer: () => import('@/components/core/Footer'),
    AppBar: () => import('@/components/core/AppBar'),
    ContentView: () => import('@/components/core/ContentView')
  },
  data () {
    return {
      loading: true,
      items: [
        { route: '/', title: 'Dashboard', icon: 'dashboard' },
        { route: '/profile', title: 'Profile', icon: 'account_box' },
        { route: '/scholarships', title: 'Scholarships', icon: 'school' },
        { route: '/templates', title: 'Templates', icon: 'border_color' },
        { route: '/settings', title: 'Settings', icon: 'settings' }
      ]
    }
  },
  created(){
       axios.get("https://us-central1-edurain.cloudfunctions.net/api/scholarships")
                .then(resp => {
                  console.log(resp);
                  this.$store.dispatch('getScholarshipsAction', resp.data);
                  console.log(this.scholarshipList);
                  this.loading = false;
                })
                .catch(err => {
                  console.log(err);
                  this.error = true;
                })
                .finally(() => (this.loading = false));
             },
  methods: {
    pushRoute (routeName) {
      this.$router.push(routeName)
    }
  }
}
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
