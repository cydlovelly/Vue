<template>
  <div class="footers">
          <ul>
              <li><router-link to="/"><img src="../assets/zhuye.png" style="max-width:50%;"/>主页</router-link></li>
              <li><router-link to="/news"><img src="../assets/xiaoxi.png" style="max-width:50%;"/>消息</router-link></li>
              <li><router-link to="/activity"><img src="../assets/hongbao.png" style="max-width:110%; margin:0 3% 0 0;"/></router-link></li>
              <li><router-link to="/shoop"><img src="../assets/guowu.png" style="max-width:50%;" />购物车</router-link></li>
              <li><router-link to="/personel"><img src="../assets/gerenzhongxi.png" style="max-width:50%;"/>个人中心</router-link></li>
          </ul>
  </div>
</template>

<script>
export default {
  name: 'footers' ,
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footers{
        width: 100%;
        height: 23vh;
        background: #fff;
        position: fixed;
        bottom:0;
    }
    .footers li{
        list-style:none;
        display: inline-block;
        text-align:center;
        width:19%;
        height:100%;
        font:400 4rem/4rem "QinFan";
    }
    .footers a{
        width: 100%;
        height:100%;
        text-decoration: none;
        color:#222;
        
    }
    .footers img{
        display: block;
        margin: 15% 0px 15% 25%;
    }
    @media(max-width:750px){
         .footers{
        width: 100%;
        height: 14vh;
        background: #fff;
        position: fixed;
        bottom: -2vh;
    }
        .footers li{
        font:400 1rem/1rem "QinFan";
    }
    }
</style>
