<template>
  <div class="showblog col-xl-6 offset-xl-4 col-sm-6 offset-sm-4 col-mb-6 offset-mb-4" v-bcolor:theme="'view'">
      <h1>分享总览</h1>
       <input type="text" placeholder="搜索" v-model="search">
      <div class="con" v-for="(getlists,index) in filteredBlog" :key="index">
      <router-link v-bind:to="'/blog/' + getlists.id"> <h1 v-randcolor>{{getlists.title | to-uppercase}}</h1></router-link>
        <p>{{getlists.content | sinpper}}</p>
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
      this.$http.get("https://myvue-f05b1.firebaseio.com/posts.json",{

      })
      .then(function(data){
          // this.getlist = data.body.slice(0,4)
          // console.log(data.json());
          return data.json();  
      })
      .then(function(data){
          var getlistArray =[];
          for(let key in data){
            // console.log(key);  打印key值
            // console.log(data[key])   打印所有的data
            data[key].id = key;
            getlistArray.push(data[key]);
            this.getlist = getlistArray;
          }
      })
  },
   computed:{   //搜索框的运用

    filteredBlog:function(){
      return this.getlist.filter((getlists) =>{  //获取用户输入的字符进行匹配
        return getlists.title.match(this.search)
      })
    }
  },
  filters:{  //定义过滤器
    "to-uppercase":function(value){
        return value.toUpperCase();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  [type="text"]{
    width: 440px;
    height: 40px;
  }
  .con{
    background: #eee;
    border-radius: 10px;
    padding:20px 10px;
    margin:20px 0;
    cursor: pointer;
  }
  .con:hover{
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  }
  h1{
    margin:20px 0;
  }
  a{
    text-decoration:none;
  }
</style>
