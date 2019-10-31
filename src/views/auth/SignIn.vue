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
                <v-btn color="primary" @click="onLogin">Login</v-btn>
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
    }
  },
  watch: {
    user(value){
      if(value !== null || value !== undefined){
        this.$router.push('/');
      }
    }
  },

   methods:{
    onLogin(){
    this.$store.dispatch('signUserIn', {email: this.email, password: this.password});
    }
  }
}
</script>
