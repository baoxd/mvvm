import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Users from './components/Users.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/users': {
    component: Users
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')