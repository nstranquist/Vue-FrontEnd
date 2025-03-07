/* eslint-disable semi */
import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
// import plugins
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './vuex/store'
// style imports
import './css/form.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import AlertCmp from './components/shared/Alert.vue'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

// init firebase
const config = {
  apiKey: 'AIzaSyAlctduxH2jJOZNEdoyoUoN96GiX_j3BCs',
  authDomain: 'edurain.firebaseapp.com',
  databaseURL: 'https://edurain.firebaseio.com',
  projectId: 'edurain',
  storageBucket: 'edurain.appspot.com',
  messagingSenderId: '121691707714',
  appId: '1:121691707714:web:c1ff88636e8b24476410db',
  measurementId: 'G-CH3JB3FFW8'
}

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user);
        let displayName = user.displayName;
        let email = user.email;
        let uid = user.uid;
      }
    })
  }
}).$mount('#app')
