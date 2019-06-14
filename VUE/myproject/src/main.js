// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Index from "./components/index"
import Add from "./components/add"
import Ps from "./components/home/ps"

Vue.config.productionTip = false

Vue.use(VueRouter)

export const router = new VueRouter({
      mode:'history',
      routes:[
          {path:"/",name:"index",children:[
              {path:"/ps",name:"ps",component:Ps}
          ],component:Index},
          {path:"/add",name:"add",component:Add}
      ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
