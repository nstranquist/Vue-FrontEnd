import Vue from 'vue'
import Router from 'vue-router'
import * as firebase from 'firebase'
// import views
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Schools from './views/Schools.vue'
import Scholarships from './views/Scholarships.vue'
import ScholarshipDetail from './views/ScholarshipDetail.vue'
import Templates from './views/Templates.vue'
import TemplateItem from './views/TemplateItem.vue'
import Housing from './views/Housing.vue'
import HousingDetail from './views/HousingDetail.vue'
import Settings from './views/Settings.vue'
import Upgrade from './views/Upgrade.vue'
import SignIn from './views/auth/SignIn.vue'
import SignUp from './views/auth/SignUp.vue'
import Register from './views/Register.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'LogIn',
      component: SignIn,
      //meta: { guest: true }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      //meta: { guest: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: AuthGuard
      //meta: { auth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    // add store objects here to /profile routes
    {
      path: '/schools',
      name: 'Schools',
      component: Schools,
      beforeEnter: AuthGuard
    },
    {
      path: '/scholarships',
      name: 'Scholarships',
      component: Scholarships,
      beforeEnter: AuthGuard
    },
    {
      path: '/scholarships/:id',
      name: 'Scholarship Detail',
      component: ScholarshipDetail,
      beforeEnter: AuthGuard,
      props: r => ({ id: parseInt(r.params.id) })
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates,
      beforeEnter: AuthGuard
    },
    {
      path: '/templates/:id',
      name: 'Template Item',
      component: TemplateItem,
      beforeEnter: AuthGuard
    },
    {
      path: '/housing',
      name: 'Housing',
      component: Housing,
      beforeEnter: AuthGuard
    },
    {
      path: '/housing/:id',
      name: 'Housing Detail',
      component: HousingDetail,
      beforeEnter: AuthGuard
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      beforeEnter: AuthGuard
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


/*router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next({
          path: "/login",
        })
      }
    })
  } else if (to.matched.some(record => record.meta.guest)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({
          path: "/",
        })
      } else {
        next()
      }
    })

  } else {
    next()
  }

})*/

export default router
