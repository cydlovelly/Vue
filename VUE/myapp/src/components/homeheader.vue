<template>
  <div class="homeheader">
     <ul class="routerNav">
        <li><router-link style="border:none;" to="/search" exact><img src="../assets/sousuowps.png" style="max-width:27%;" /></router-link></li>
        <li><router-link to="/attention"  exact>关注</router-link></li>
        <li><router-link to="/recommend" class="active"  exact>推荐</router-link></li>
        <li><router-link to="/video"  exact>视频</router-link></li>
        <li><router-link to="/title"  exact>图文</router-link></li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'homeheader',
  data () {
    return {
    
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .homeheader{
         width: 100%;
        height: 125px;
        position:fixed;
        background: #fff;
        top: 0;
        margin-bottom: 20px;
        border-bottom: 1px solid #bbb;
    }
  .routerNav{
    width: 100%;
    height:10%;
  }
  .routerNav li{
    width: 20%;
    height:100%;
    float:left;
    font:400 35px/110px "";
    text-align: center;
  }
  .routerNav a{
    color:#333;
    text-decoration: none;
  }
   li .router-link-active{
         color:rgb(110, 178, 233);
      border-bottom: 2px solid rgb(110, 178, 233);
    }
  
  @media(max-width:750px){
    
      .homeheader{
         width: 100%;
        height: 34px;
        margin-bottom: 5px;
        border-bottom: 1px solid #bbb;
    }
        .routerNav{
        width: 100%;
        height:10%;
    }
    .routerNav li{
        width: 20%;
        height:100%;
        float:left;
        font:400 16px/25px "";
        text-align: center;
    }
    .routerNav a{
        color:#333;
        text-decoration: none;
    }
    li .router-link-active{
         color:rgb(110, 178, 233);
      border-bottom: 2px solid rgb(110, 178, 233);
    }
  }
</style>
