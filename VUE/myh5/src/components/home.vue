<template>
  <div id="home">
    <headers v-on:achanged="updata($event)" v-bind:title="title"></headers>
    <users v-bind:listss="listss"></users>
    <users v-bind:listss="listss"></users>
    <footers v-bind:title="title"></footers>
  </div>
  
</template>

<script>

//局部组件引用路径
import Users from './Users'
import Header from './Header'
import afooter from './footer'
export default {
  name: 'Home',
  data(){
    return {
      // title:'我的第二个脚手架工具',
      title:'我是传值',
       listss:[
                // {name:'lly',werk:'建模师',show:false},
                // {name:'gud',werk:'运营',show:false},
                // {name:'sdg',werk:'姓名提',show:false},
                // {name:'cyd',werk:'web前端',show:false},
                // {name:'asr',werk:'ajax大师',show:false},
                // {name:'aas',werk:'java大佬',show:false},
                // {name:'aas',werk:'java大佬',show:false},
                // {name:'aas',werk:'java大佬',show:false}
            ]
    }
  },
  created(){
   this.$http.get("http://jsonplaceholder.typicode.com/users")
    .then((data) => {
        this.listss = data.data
    })
  },
  methods:{
      updata:function(title){  //子传父   
        this.title = title
      }
  },
  components:{   //局部组件的注册
    'users':Users,
    'footers':afooter,
    'headers':Header
  }
}
</script>

<style scoped>
  *,p{
    margin: 0;
    padding:0;
  }
  h1{
    color:blueviolet;
  }
</style>
