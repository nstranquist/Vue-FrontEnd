<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login Form</v-toolbar-title>
              </v-toolbar>
                <v-row v-if="error">
                <v-col xs12 sm6 offset-sm3 >
                  <app-alert @dismissed="onDismissed" :text="error"></app-alert>
                </v-col>
              </v-row>
              <v-card-text>
                <form >
                 <v-text-field
                    id="email"
                    label="Email"
                    v-model="email"
                    prepend-icon="email"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    prepend-icon="lock"
                    type="password"
                    required
                  ></v-text-field>
                </form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="onLogin" :disabled="loading" :loading="loading">
                  Login
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </template>
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name:'LogIn',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
     email: '',
    password:'',

  }),
    computed: {
    user (){
      console.log("userComputed: ")
      console.log(this.$store.getters.getUser)
      return this.$store.getters.getUser;
    },
        error() {
          return this.$store.getters.error;
    },
    loading(){
      return this.$store.getters.loading;
    }

  },
  watch: {
    user(value){
      if(value !== null || value !== undefined){
        this.$router.push('/');
      }
    },
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
  },

   methods:{
    onLogin(){
    this.$store.dispatch('signUserIn', {email: this.email, password: this.password});
    },
        onDismissed(){
      console.log('Dismissed Alert');
      this.$store.dispatch('clearError');
    }

  }
}
</script>
