// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'

// import Users from './components/Users'   //全局组件
Vue.config.productionTip = false

//全局组件  调用
// Vue.component("users",Users)
Vue.use( VueRouter)
Vue.use( VueResource)
const router = new VueRouter({
  routes:[
    {path:"/",component:Home},
    {path:"/home",component:Home},
    {path:"/HelloWorld",component:HelloWorld}
  ],
  mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
