// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import About from "./components/about"
import Coutomers from "./components/coutomers"
import Add from "./components/add"
import Title from "./components/title"
import Edit from "./components/edit"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router =new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:"/about",component:About},
    {path:"/",component:Coutomers},
    {path:"/add",component:Add},
    {path:"/title/:id",component:Title},
    {path:"/edit/:id",component:Edit}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template:`
  <div class="app container">
  <nav class="navbar navbar-default navbar-static-top">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">信息管理系统</router-link>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><router-link to="/" class="active" exact>主页</router-link></li>
        <li><router-link to="about" exact>关于我们</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/add" style="margin-right:20px">添加用户</router-link></li>
      </ul>
    </div><!--/.nav-collapse -->
</nav>
  <router-view></router-view>

  </div>
  `,
}).$mount("#app")
