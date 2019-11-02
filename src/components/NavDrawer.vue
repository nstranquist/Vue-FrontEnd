<template>
  <v-navigation-drawer
    id="app-drawer"
    app
    color="deep-purple accent-4"
    dark
    floating
    permanent
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
    </template>

    <v-list-item two-line>
      <v-list-item-avatar color="white">
        <v-img src="/img/logo.png" height="34" contain />
      </v-list-item-avatar>

      <v-list-item-title class="title">{{userName}}</v-list-item-title>
    </v-list-item>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <div />

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.route"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list nav>
        <v-list-item to="/upgrade">
          <v-list-item-action>
            <v-icon>mdi-arrow-up-bold-circle</v-icon>
          </v-list-item-action>
          <v-list-item-title class="font-weight-light">Upgrade</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    links: [
      {
        route: '/',
        icon: 'dashboard',
        text: 'Dashboard'
      },
      {
        route: '/profile',
        icon: 'account_box',
        text: 'Profile'
      },
      {
        route: '/scholarships',
        icon: 'school',
        text: 'Scholarships'
      },
      {
        route: '/templates',
        icon: 'border_color',
        text: 'Templates'
      },
      {
        route: "",
        icon: "",
        text: "------------------------"
      },
      {
        route: "/housing",
        icon: "home",
        text: "Housing"
      },
      {
        route: "/schools",
        icon: "mdi-book-open-page-variant",
        text: "Schools"
      },
      {
        route: "/settings",
        icon: "settings",
        text: "Settings"
      }
    ],
    userName:'Bryon P'
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      },
    },
   user (){
      console.log("userComputed: ")
      console.log(this.$store.getters.getUser)
      return this.$store.getters.getUser;
    }
  },
  watch: {
    user(value){
      const hasFirstName = value.firstName !==null &&value.firstName !== undefined && value.firstName !=="" ;
      const hasLastName = value.lastName !==null && value.lastName !==undefined && value.lastName !=="";
      if( hasFirstName && hasLastName){
       this.userName =  value.firstName + ' ' + value.lastName;
      }
      return this.username;
  },

  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
  }
}
</script>
