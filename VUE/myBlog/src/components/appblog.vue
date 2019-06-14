<template>
  <div id="appblog">
      <div class="col-xl-12 text-center">
          <h2>写博客</h2>
      </div>
      <div class="col-xl-6 offset-xl-4">
           <form v-if="!submints">
            <div class="col-xl-8">
                <label>主题:</label>
                <input type="text" placeholder="输入你发表的东西吧!" v-model="blog.title" required/>
            </div>
            <div class="col-xl-8">
                <p>内容:</p>
                <label>
                <textarea placeholder="内容" v-model="blog.content"></textarea>
                </label>
            </div>
            <div class="col-xl-8">
                 <label>
                        <input type="checkbox" value="web前端" v-model="blog.categories">
                        <span>web前端</span>
                        <input type="checkbox" value="php" v-model="blog.categories">
                        <span>php</span>
                        <input type="checkbox" value="java" v-model="blog.categories">
                        <span>java</span>
                        <input type="checkbox" value="javascript" v-model="blog.categories">
                        <span>javascript</span>
                        <input type="checkbox" value="ajax" v-model="blog.categories">
                        <span>ajax</span>
                </label>
            </div>
            <div class="col-xl-6">
                <label>作者</label>
                <select v-model="blog.lists">
               <option v-for="(lists,index) in list" :key="index" >{{lists}}</option>
                </select>
            </div>
            <div class="col-xl-5">
                <button v-on:click.prevent="post">添加博客</button>
            </div>
           
        </form>
      </div>
      
      
      <div v-if="submints" class="text-success">博客添加成功!</div>
      <hr v-if="!submints" />
      <div class="con col-xl-6 offset-xl-4">
          <h3>博客总览</h3>
          <div class="con-x">
                <p>标题:<span>{{blog.title}}</span></p>
                <p>内容:<span>{{blog.content}}</span></p>
                <ul>
                <p>分类:</p>
                    <li v-for="(categorie,index) in blog.categories" :key="index">{{categorie}}</li>
                </ul>
                <p>作者:<span>{{blog.lists}}</span></p>
          </div>
      </div>
  </div>
</template>

<script>
//https://jsonplaceholder.typicode.com/
export default {
  name: 'appblog',
  data () {
    return {
        blog:{
            title:"",
            content:"",
            categories:[],
            lists:""
        },
         list:["lly","cyd","hasdwe"],
         submints:false
    }
  },
  methods:{
      post:function(){    
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{    //发出请求

              title:this.blog.title,

              content:this.blog.content,
              
              userId:1
              
          })
          .then(function(data){
              console.log(data),
              this.submints= true
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    #appblog *{
        padding: 0;
    }
    .col-xl-12 h2{
        margin-top: 20px;
    }
    .col-xl-8 [type="text"]{
        width:400px;
        height: 40px;
        margin: 20px 0;
        border:0;
        background:  rgba(208, 242, 245, 0.87);
        box-shadow: 0 0 2px rgba(0,0,0,0.2);
    }
    .col-xl-8 textarea{
        width: 440px;
        height: 200px;
        border-color: #466389; 
         background:  rgba(208, 242, 245, 0.87);
        box-shadow: 0 0 4px rgba(0,0,0,0.2);
    }
    .col-xl-6 select{
        width: 400px;
        margin:20px 0;
         background:  rgba(208, 242, 245, 0.87);
    }
    button{
        border: 0;
        width:100px;
        height: 40px;
        background: #992234;
        color: #fff;
        border-radius: 6px;
    }
    .con{
        padding: 20px 0;
    }
    .con-x{
        width: 440px;
        height: 240px;
        border: 1px solid #861221;
        margin:20px 0 30px 0;
        line-height: 50px;
    }
</style>