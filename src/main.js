import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from './auth'
import App from './components/App.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import operation from'../../operation/src/App.vue'
import container from './container.vue';
import triangle from './triangle.vue';
import information from './information2.vue';
import button from './button_op.vue';

Vue.use(VueRouter);


function requireAuth (to, from, next) 

{
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Login },
    {path: '/operation', component: operation},
    { path: '/logout',beforeEnter (to, from, next) {
        auth.logout()
        next()
      }
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#myApplication',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
