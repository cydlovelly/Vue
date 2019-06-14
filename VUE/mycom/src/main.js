// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
// import axios from "axios"
import VueRouter from "vue-router"
import About from "./components/About"
import Customers from "./components/Customers"
import Add from "./components/add"
import CustomerTitle from "./components/customertitle"
import Edit from "./components/Edit"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.prototype.$http=axios



const router =new VueRouter({
    mode:"history",
    base:__dirname,
    routes:[
      {path:"/About",component:About},
      {path:"/customers",component:Customers},
      {path:"/",component:Customers},
      {path:"/Add",component:Add},
      {path:"/customer/:id",component:CustomerTitle},
      {path:"/Edit/:id",component:Edit}
    ]
})


/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app container">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">用户管理系统</a>
          <ul class="nav navbar-nav">
            <li><router-link to="/customers"  exact>主页<span class="sr-only">(current)</span></router-link></li>
            <li><router-link to="/About" exact>关于我们</router-link></li> 
          </ul>
          <ul class="nav navbar-nav navber-right" style="float:right">
          <li><router-link to="/Add"  exact>添加用户</router-link></li>
        </ul>
        </div>
      </nav>
    
        <router-view></router-view>
    </div>
  `,
}).$mount("#app")
