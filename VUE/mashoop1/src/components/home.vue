<template>
  <div class="home">
        <div class="headers">
          <div class="serch">
              <span  class="glyphicon glyphicon-search"></span>
              <input type="text" placeholder="洗面奶" />
          </div>
          <div class="nav">
            <ul>
                <li><router-link class="active" exact to="/home/recommend">推荐</router-link></li>
                <li><router-link to="/home/womenwear" exact>女装</router-link></li>
                <li><router-link to="/home/menwear" exact>男装</router-link></li>
                <li><router-link to="/home/household" exact>家居专场</router-link></li>
                <li><router-link to="/home/beauty" exact>美妆装场</router-link></li>
            </ul>
          </div>
      </div>
      <div class="con">
          <router-view></router-view>
      </div>  
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con{
    width:100%;
    height:77vh;
}
input{
        border:none;
        background:#ddd;
        outline: none;
    }
    .headers{
        width: 100%;
        height: 13vh;
        /* overflow: hidden; */
        border-bottom: 1px solid #aaa;
    }
    .serch{
        width:80%;
        height:40%;
        color:#bbb;
        font: 400 1.5rem/30px ""; 
        background:#ddd;
        border-radius: 10px;
        padding:2px 0 0  10px;
        margin: 2vh 0 0 10%;
    }
    .nav{
        width:100vw;
        height:5vh;
        margin-top:2.5vh;
        overflow: auto;
    }
    .headers ul{
        width: 200vw;
    }
    .headers li{
        float: left;
        height:100%;
        padding: 0 4%; 
        text-align:center;
        list-style: none; 
        font: 400 2rem/2rem "";
    }
    .headers a{
        color: #222;
        text-decoration: none;
    }
    li .router-link-active{
        color:rgb(236, 160, 160);
    }
</style>
