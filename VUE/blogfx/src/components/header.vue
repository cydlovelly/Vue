<template>
  <div class="Header">
      <div class="col-xl-6 offset-xl-4 col-sm-6 offset-sm-4 col-mb-6 offset-mb-4">
      <ul>
          <li><router-link to="/" class="active" exact>主页</router-link></li>
           <li><router-link to="/add" exact>添加分享</router-link></li>
      </ul>
      </div>
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
    .Header{
        width: 100%;
        height: 100px;
        background:rgba(241, 186, 186, 0.849);
    }
    .Header li{
        list-style: none;
        display: inline-block;
        font:400 23px/23px "";
    }
    .Header a{
        display: inline-block;
        text-align: center;
        padding: 15px 20px;
        margin:20px 10px;
        color:aliceblue;
        border-radius: 5px;
        text-decoration: none;
    }
    .router-link-active{
      background: rgba(182, 110, 110, 0.6);
      
    }
</style>
