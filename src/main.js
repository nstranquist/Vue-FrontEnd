import Vue from 'vue'
import App from './App.vue'
import './css/form.css'
// import router from './router'
import store from './store'
import './registerServiceWorker'
import User from './containers/User.vue'

Vue.config.productionTip = false

Vue.component('edurain-user-profile', User)

new Vue({
  //  router,
  store,
  render: h => h(App)
}).$mount('#app')
