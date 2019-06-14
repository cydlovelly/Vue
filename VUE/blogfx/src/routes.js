

// import Showblog from './components/appblog.vue'
// import Appblog from "./components/appblog.vue"

// export default[
//     {path:'/',component:"Showblog"},
//     {path:'/add',component:"Appblogs"}
// ]



import showBlogs from './components/showblog.vue'
import appblogs from './components/appblog.vue'
import showtexts from './components/showtext.vue'
// import singleBlogs from './components/singleBlog.vue'

export default [
    {path:"/",component:showBlogs},
    {path:"/add",component:appblogs},  //这里不是字符串
    {path:"/blog/:id",component:showtexts}, 
    // {path:"/p/:id",compoment:singleBlogs}
]
    

