// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-Resource'
import VueRouter from 'vue-router'
import Routes from "./routes"

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

//自定义属性
  // directive  
//设置文字的随机变色  
Vue.directive('randcolor',{
    bind(el,binding,vnode){
      el.style.color = "#"+ Math.random().toString(16).slice(2,8)
    }
})
//设置宽度变动
Vue.directive('bcolor',{
  bind(el,binding,vnode){
    if(binding == 'view'){
      el.style.width = "1280px";
    }else{
      el.style.width = "750px";
    };
  }
})


//自定义过滤器
//运用 filter
//设置的主体的文字省略  
Vue.filter("sinpper",function(value){
  return value.slice(2,20) + "..."
})

//创建路由
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
