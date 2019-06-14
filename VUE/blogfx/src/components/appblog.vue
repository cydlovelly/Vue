<template>
  <div class="appblog">
        <div class="title col-xl-6 offset-xl-4 col-sm-6 offset-sm-4 col-mb-6 offset-mb-4" v-if="!submints">
            <h2>写分享</h2>
            <form>
                <label>标题:</label>
                <input type="text" placeholder="输入你想的标题" v-model="blog.title" />
                <label>内容:</label>
                <textarea placeholder="输入你想输入的内容" v-model="blog.content"></textarea>
                <label>分类:</label>
                <input type="checkbox" value="人文" v-model="blog.list_blog"/>
                <span>人文</span>
                <input type="checkbox" value="感情" v-model="blog.list_blog"/>
                <span>感情</span>
                <input type="checkbox" value="搞笑" v-model="blog.list_blog"/>
                <span>搞笑</span>
                <input type="checkbox" value="历史" v-model="blog.list_blog"/>
                <span>历史</span>
                <input type="checkbox" value="电影" v-model="blog.list_blog"/>
                <span>电影</span>
                <label>作者:</label>
                <!-- <select v-model="blog.listb">
                    <option v-for="(listb,index) in list_op" :key="index">{{listb}}</option>
                </select> -->
                <input type="text" placeholder="留下你的名字" v-model="blog.antur">
                <button v-on:click.prevent="post">添加分享</button>
            </form>
        </div>
          <hr v-if="!submints" />
          <h2 v-if="submints" class="col-xl-6 offset-xl-4 col-sm-6 offset-sm-4 col-mb-6 offset-mb-4 text-success">恭喜你分享添加成功</h2>
        <div class="con col-xl-6 offset-xl-4 col-sm-6 offset-sm-4 col-mb-6 offset-mb-4">
            <h3>分享预览</h3>
            <p>标题:<span>{{blog.title}}</span></p>
            <p>内容:<span>{{blog.content}}</span></p>
            <span>分类:</span>
            <ul>
                <li v-for="(list,index) in blog.list_blog" :key="index">{{list}}</li>
            </ul>
            <p>作者:<span>{{blog.antur}}</span></p>
        </div>
        <div class="footer col-xl-6 offset-xl-4 col-sm-6 offset-sm-4 col-mb-6 offset-mb-4" v-if="submints">
            <!-- <router-link to="/add">接着添加</router-link> -->
            <router-link to="/">返回主页</router-link>
        </div>     
  </div>
</template>

<script>
// import axios from 'axios'
export default {

  name: 'appblog',
  data () {
    return {
        blog:{
            title:"", //标题
            content:"", //内容
            list_blog:[], //分类
            antur:""   //新建一个接收一个作者
        },
        // list_op:["lly","cyd","likkey","anymi"],
        submints:false
    }
  },
  methods:{
      post:function(){
        this.$http.post("https://myvue-f05b1.firebaseio.com/posts.json",
            this.blog
        )
        // axios.post("https://myvue-f05b1.firebaseio.com/posts.json",
        //     this.blog
        // )
        .then((data) =>{
             this.submints = true
            // console.log(data);
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .appblog *{
        padding:0;
    }
    .appblog{
        padding-top: 20px;
    }
    h2{
        font:400 30px/30px "";
    }
    li{
        display: inline;
        list-style: none;
    }
    .title{
        font:400 25px/25px "";
    }
    .title h2{
        margin:20px 0;
    }
    [type="text"],select{
        width: 440px;
        height:40px;
        margin:20px 0;
    }
    [type="checkbox"]{
        margin:20px 0;
    }
    textarea{
        width: 440px;
        height: 300px;
        margin:20px 0;
    }
    .title label{
        display: block;
    }
    button{
        display: block;
        width: 120px;
        height: 50px;
        border:none;
        background:#124556;
        margin:5px;
        border-radius: 8px;
        color: #fff;
    }
    .con{
        padding: 20px 0;
        line-height: 20px;
    }
     .footer{
         margin-bottom: 30px;
     }
    .footer a{
        color:rgb(236, 223, 223);
        padding: 10px 20px;
        background: #124556;
        cursor: pointer;
        text-decoration: none;
        border-radius: 10px;
    }
</style>
