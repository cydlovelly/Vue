import Home from './components/home'
import menv from './components/menv'
import about from './components/about/about'
import login from './components/login'
import register from './components/register'
import admin from './components/admin'

// 二级导航
import history  from './components/about/history'
import contact  from './components/about/contact'
import orderingGuide  from './components/about/orderingGuide'
import delivery  from './components/about/delivery'


//三级导航

import phone from './components/about/contact/phone'
import personname from './components/about/contact/personname'



//定义全局守卫

export const routes=[   //给路由起名字
  {path:"/",name:"homeLink",components:{
      default:Home,
      'orderingGuide':orderingGuide,
      'delivery':delivery,
      'history':history
  }},
  {path:"/menv",name:"menvLink",component:menv},
  {path:"/about",name:"aboutLink",redirect:"/history",component:about,children:[
      {path:"/history",name:"historyLink",component:history},
      {path:"/contact",name:"contactLink",component:contact,children:[
        {path:"/phone",name:"phoneLink",component:phone},
        {path:"/personname",name:"personnameLink",component:personname}
      ]},
      {path:"/orderingGuide",name:"orderingGuideLink",component:orderingGuide},
      {path:"/delivery",name:"deliveryLink",component:delivery}
  ]},
  {path:"/login",name:"loginLink",component:login},
  {path:"/register",name:"reginsterLink",component:register},
  {path:"/admin",name:"adminLink",component:admin , 
      // beforeEnter:(to,form,next) =>{    //路由独享守卫
      //   // alert("你好,看这里需要登录哟!");
      //   // next();
      //     //判断  store.gettes.isLogin === false

      //     if(to.path === '/login' || to.path === '/register'){
      //           next();
      //     }else{
      //         alert("你还没有登录,请先登录");
      //         next("/login");
      //     }
      // }
},
  {path:"/*",redirect:"/"}
]