<template>
  <div class="Footer">
      <div class="footer">
          <ul>
            <li><router-link to="/"><img src="../assets/zhuyewps.png" style="max-width:40%;" /><p>主页</p></router-link></li>
            <li><router-link to="/bynamice"><img src="../assets/faxian.png" style="max-width:40%;" /><p>动态</p></router-link></li>
            <li class="add"><router-link to="/addtitle"><img src="../assets/jiahao.png" style="max-width:40%;" /></router-link></li>
            <li><router-link to="/message"><img src="../assets/liaotianwps.png" style="max-width:40%;" /><p>消息</p></router-link></li>
            <li><router-link to="/mycenter"><img src="../assets/wodewps.png" style="max-width:40%;" /><p>我的</p></router-link></li>
          </ul>
      </div>
  </div>
</template>

<script>



export default {
  name: 'Footer',
  data(){
    return {

    }
  },
  components: {
    
  }
}
</script>

<style scoped>
    /* 底部 */
    .footer{
      width: 100%;
      height: 220px;
      padding-top: 5px;
      background:#fff;
      position: fixed;
      bottom: 0px;
    }
    .footer li{
      width: 20%;
      height: 100%;
      font: 400 35px/40px "";
      text-align: center;
      float: left;
    }
    .footer a{
      color: #333;
      text-decoration: none;
    }
    .add img{
      border-radius:50%;
      padding:5px;
      margin-top:10px;
      width: 140px;
      background:rgb(74, 105, 190);
    }
    @media(max-width:750px){
.footer{
      width: 100%;
      height: 14%;
      position: fixed;
      bottom: -15px;
    }
    .footer li{
      width: 20%;
      height: 100%;
      font: 400 12px/25px "";
      text-align: center;
      float: left;
    }
    .footer a{
      color: #333;
      text-decoration: none;
    }
    .add img{
      border-radius:50%;
      padding:5px;
      margin-top:10px;
      width: 140px;
      background:rgb(74, 105, 190);
    }
    }
</style>
