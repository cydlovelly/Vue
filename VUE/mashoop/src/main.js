// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/home'
import Shoop from './components/shoop'
import Personel from './components/personel'
import News from './components/news'
import Activity from './components/activity'

// 二级路由
import Recommend from './components/home/recommend'
import WomenWear from './components/home/womenwear'
import Menwear from './components/home/menwear'
import Beauty from './components/home/beautymakeup'
import Household from './components/home/household'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode:"history",
    routes:[
      {path:"/",redirect:"/home/recommend",component:Home,children:[
        {path:"/home/recommend",name:"recommend",component:Recommend},
        {path:"/home/womenwear",name:"womenwear",component:WomenWear},
        {path:"/home/menwear",name:"womenwear",component:Menwear},
        {path:"/home/beauty",name:"womenwear",component:Beauty},
        {path:"/home/household",name:"womenwear",component:Household}

      ]},
      {path:"/news",name:"news",component:News},
      {path:"/activity",name:"activity",component:Activity},
      {path:"/shoop",name:"shoop",component:Shoop},
      {path:"/personel",name:"personel",component:Personel},
    ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
