<template>
  <div>
    <h1>SignIn</h1>
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
//import "firebaseui/dist/firebasui.css";

export default {
  name: "SignIn",
  data() {
    return {};
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      signInSuccessUrl: "/",
      signInFlow: "popup"
      //signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>