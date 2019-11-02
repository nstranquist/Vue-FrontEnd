<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Sign Up Form</v-toolbar-title>
                </v-toolbar>
               <v-row v-if="error">
                <v-col xs12 sm6 offset-sm3 >
                  <app-alert @dismissed="onDismissed" :text="error"></app-alert>
                </v-col>
              </v-row>
              <v-card-text>
                <form >
                  <v-text-field
                    label="First name"
                    v-model="firstName"
                    prepend-icon="mdi-account-outline"
                    type="text" >
                   </v-text-field>
                  <v-text-field
                    label="Last Name"
                    v-model="lastName"
                    prepend-icon="person"
                    type="text" required>
                   </v-text-field>
                    <v-text-field
                    label="City"
                    v-model="city"
                    prepend-icon="mdi-home-city-outline"
                    type="text" >
                   </v-text-field>
                    <v-text-field
                    label="State"
                    v-model="usState"
                    prepend-icon="mdi-city"
                    type="text"
                     >
                   </v-text-field>
                   <v-text-field
                    label="Zip Code"
                    v-model="zipCode"
                    prepend-icon="mdi-crosshairs"
                    type="text"
                     >
                   </v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    prepend-icon="lock"
                    type="password"

                  ></v-text-field>
                   <v-text-field
                    id="confirmPassword"
                    label="Confirm Password"
                    v-model="confirmPassword"
                    prepend-icon="mdi-lock-outline"
                    type="password"
                    :rules=[comparePasswords]
                  ></v-text-field>
                   <v-text-field
                    id="email"
                    label="Email"
                    v-model="email"
                    prepend-icon="email"
                    type="email"
                  ></v-text-field>
                </form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="onSignUp" :disabled="loading" :loading="loading">
                  Sign Up
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
  name: 'LogIn',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: '',
    password:'',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    city: '',
    usState:'',
    zipCode:'',
    newUser:{
            email:'',
            password: '',
            firstName: '',
            lastName: '',
            city: '',
            usState: '',
            zipCode: '',
    }
  }),
  computed: {
    comparePasswords(){
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ' ';
    },
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
    onSignUp(){
      this.newUser.email = this.email;
      this.newUser.password = this.password;
      this.newUser.firstName = this.firstName;
      this.newUser.lastName = this.lastName;
      this.newUser.usState = this.usState;
      this.newUser.zipCode = this.zipCode;
      this.newUser.city = this.city;
    this.$store.dispatch('signUpUser', this.newUser);
    },
    onDismissed(){
      console.log('Dismissed Alert');
      this.$store.dispatch('clearError');
    }
  }
}
</script>
