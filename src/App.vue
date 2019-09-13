<template>
  <v-app>
    <NavDrawer></NavDrawer>
    <!--<v-navigation-drawer app class="deep-purple accent-4 sidenav" dark permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Welcome, Bryon</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link @click="pushRoute(item.route)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>-->

    <AppBar></AppBar>
    <!--<v-app-bar app>
      <img src="./assets/logo.png" alt="edurain logo" class="img-fluid" />
      <div class="flex-grow-1"></div>
      <!-toolbar-title>Dashboard</v-toolbar-title>
      <v-avatar color="orange" class="nav-avatar">
        <span class="white--text headline">BP</span>
      </v-avatar>
    </v-app-bar>-->

    <ContentView></ContentView>
    <!--<v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>-->

    <Footer></Footer>
    <!--<v-footer app inset>
      <span>&copy; 2019 EduRain</span>
    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  components: {
    NavDrawer: () => import("@/components/core/NavDrawer"),
    Footer: () => import("@/components/core/Footer"),
    AppBar: () => import("@/components/core/AppBar"),
    ContentView: () => import("@/components/core/ContentView")
  },
  data() {
    return {
      items: [
        { route: "/", title: "Dashboard", icon: "dashboard" },
        { route: "/profile", title: "Profile", icon: "account_box" },
        { route: "/scholarships", title: "Scholarships", icon: "school" },
        { route: "/templates", title: "Templates", icon: "border_color" },
        { route: "/settings", title: "Settings", icon: "settings" }
      ]
    };
  },
  methods: {
    pushRoute(routeName) {
      this.$router.push(routeName);
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