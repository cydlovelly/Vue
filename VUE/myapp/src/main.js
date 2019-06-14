// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Home from './components/home'
import Bynamice from './components/bynamice'
import Addtitle from './components/addtitle'
import Message from './components/message'
import Mycenter from './components/mycenter'
import Bianji from './components/bianji'
import Dateils from './components/dateils'

//home的二级路由
import Search from './components/home/search'
import Attention from './components/home/attention'
import Recommend from './components/home/recommend'
import Video from './components/home/video'
import Title from './components/home/title'

// 三级路由 
// import Invitation from "./components/home/search/invitation"
// import Topic from "./components/home/search/topic"
// import User from "./components/home/search/user"


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(vuex)

Vue.config.productionTip = false

//实例化路由
export const routes = new VueRouter({
  mode:'history',            
  routes:[
    {path:'/',redirect:"/recommend",component:Home,children:[
      // 三级路由 
      {path:'/search',name:"search", component:Search},   //搜索
      {path:'/attention',name:"attention",component:Attention},   //关注
      {path:'/recommend',name:"recommend",component:Recommend},  //推荐
      {path:'/video',name:"video",component:Video},  //视频
      {path:'/title',name:"title",component:Title},  //图文
    ]}, //主页
    {path:'/bynamice',name:"bynamice",component:Bynamice}, //动态
    {path:'/addtitle',name:"addtitle",component:Addtitle}, //添加
    {path:'/message',name:"message",component:Message}, //消息
    {path:'/mycenter',name:"mycenter",component:Mycenter}, //个人主页
    {path:"/bianji/:id",component:Bianji} ,  //编辑页面
    {path:"/dateils/:id",component:Dateils}   //详细信息
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:routes
})
