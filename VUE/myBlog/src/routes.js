
import showBlogs from './components/showBlog.vue'
import appblogs from './components/appblog.vue'
import singleBlogs from './components/singleBlog.vue'

export default [
    {path:"/",component:showBlogs},
    {path:"/add",component:appblogs},
    {path:"/p/:id",compoment:singleBlogs}
]
