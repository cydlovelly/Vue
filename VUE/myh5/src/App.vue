<template>
  <div id="app">
    <ul>
      <li><router-link to="/">主页</router-link></li>
       <li><router-link to="/helloworld">分页</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

//局部组件引用路径
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{   //局部组件的注册
   
  }
}
</script>

<style scoped>
  li{
    list-style: none;
  }
</style>
