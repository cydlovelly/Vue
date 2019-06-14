<template>
  <div v-bcolor:theme="'vriw'" class="showBlog col-xl-6 offset-xl-3">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="(getlists,index) in filteredBlog" :key="index" class="content">
        <h1 v-randcolor>{{getlists.title | to-uppercase}}</h1> 
        <p>{{getlists.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showblog',
  data () {
    return {
        getlist:[],
        search:""
    }
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts",{
      
    })
    .then(function(data){
      console.log(data)
      this.getlist = data.body.slice(0,10)   // 用数组接收数据
    })
  },
  computed:{   //搜索框的运用

    filteredBlog:function(){
      return this.getlist.filter((getlists) =>{  //获取用户输入的字符进行匹配
        return getlists.title.match(this.search)
      })
    }
  },
  filters:{
      "to-uppercase":function(value){
          return value.toUpperCase();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content{
      background: #fff;
      padding: 20px 20px;
      margin:10px 0;
    }
    [type="text"]{
      width: 440px;
    }
</style>
