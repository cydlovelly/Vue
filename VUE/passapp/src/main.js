import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'





Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode:"history",
    scrollBehavior(to,form,savedPosition){   //定位滚动
      // return {
      //   // x:0,y:100
      //   // selector:'button',
      // }
        if(savedPosition){
          return{
              savedPosition
          } 
        }else{
          return{
              x:0,y:0
           
        }
      }
    }
})

// router.beforeEach((to,form,next) => {
//   //alert("你好,你还没有登录请先登录")
//   //next();

//   //判断  store.gettes.isLogin === false

//   if(to.path === '/login' || to.path === '/register'){
//         next();
//   }else{
//       alert("你还没有登录,请先登录");
//       next("/login");
//   }

// })
 


// 后调钩子
// router.afterEach((to,form) =>{
//     alert("hello youri")
// })


new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
