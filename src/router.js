import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Schools from './views/Schools.vue'
import Scholarships from './views/Scholarships.vue'
import ScholarshipDetail from './views/ScholarshipDetail.vue'
import Templates from './views/Templates.vue'
import TemplateItem from './views/TemplateItem.vue'
import Housing from './views/Housing.vue'
import Settings from './views/Settings.vue'
import Upgrade from './views/Upgrade.vue'
// import SignIn from './views/SignIn.vue'
// import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect
      name: 'Home',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    // add store objects here to /profile routes
    {
      path: '/schools',
      name: 'Schools',
      component: Schools
    },
    {
      path: '/scholarships',
      name: 'Scholarships',
      component: Scholarships
    },
    {
      path: '/scholarships/:id',
      name: 'Scholarship Detail',
      component: ScholarshipDetail
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/templates/:id',
      name: 'Template Item',
      component: TemplateItem
    },
    {
      path: '/housing',
      name: 'Housing',
      component: Housing
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('./views/About.vue')
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
      component: Upgrade
    }
  ]
})
