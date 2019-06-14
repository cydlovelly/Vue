<template>
  <div class="header">
    <ul class="col-xl-6 offset-xl-3">
      <li><router-link class="active" to="/" exact>主页</router-link></li>
      <li> <router-link to="/add" exact>添加博客</router-link></li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
      width: 100%;
      height: 100px;
      background: rgb(245, 199, 199);
    }
    .header li{
      list-style: none;
      display: inline;
      text-align: center;
      font: 400 20px/100px "";
    }
    a{
      color:#222;
      padding:10px 20px;
      text-decoration: none;
      border-radius: 7px;
    }
    .router-link-active{
      background: rgb(158, 103, 103);
      color: #fff;
    }

</style>
