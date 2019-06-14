// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import http from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(http)
Vue.use(VueRouter)
//自定义属性
Vue.directive('randcolor',{
    bind(el,binding,vnode){
      el.style.color = "#"+ Math.random().toString(16).slice(2,8)
    }
})

//自定义过滤器

// Vue.filter("toUppercase",function(value){  //传递的俩个参数
//     return value.toUpperCase()
// })

Vue.filter("snippet",function(value){
  return value.slice(2,80) + "..."
})

Vue.directive('bcolor',{
  bind(el,binding,vnode){
    if(binding.value == 'vriw'){
      el.style.width = "1280px";
    }else{
      el.style.weidth = "750px";
    };
    if(binding.arg == 'theme'){
      el.background = "#ad4521";
    }
  }
})
Vue.config.productionTip = false

//创建路由

const router = new VueRouter({   //创建路由名    在下方要进行引用
    routes: routes,
    mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    App,
   },
  template: '<App/>',
  router:router
})
