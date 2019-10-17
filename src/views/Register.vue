<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-form>
            <v-text-field required type="email" v-model="email" label="email" />
            <v-text-field required type="password" v-model="password" label="password" />
            <v-text-field
              required
              type="password"
              v-model="confirmPassword"
              label="confirmPassword"
            />
            <v-btn v-on:click="register">Register</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <!-- <label for="email">Enter email</label>
    <input type="email" name="email" />
    <label for="password">Enter password</label>
    <input type="password" name="password" />
    <button>Register</button>-->
  </v-card>
</template>

<script>
import * as firebase from "firebase";

export default {
  name: "Register",
  data: function() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register: function(e) {
      if (this.password === this.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(res => console.log("success: " + res))
          .catch(err => console.log(err));
      } else console.log("passwords did not match");
    }
  }
};
</script>