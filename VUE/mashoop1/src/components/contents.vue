<template>
  <div class="contents">
        <div class="getback">
            <span class="fanhui glyphicon glyphicon-chevron-left"></span>
            <p class="guowu glyphicon glyphicon-shopping-cart"><span>1</span></p>
        </div>
        <div class="img">
            <img src="@/assets/xiangqing/s1.jpg" style="max-width:100%;" />
        </div>
        <div class="price">
            <p class="price-p1">$26<span>市场价<s>$39.</s></span></p>
            <p class="price-p2">已售件</p>
        </div>
        <div class="title">
          <p>同色系情侣装夏装2019新款</p>
        </div>
        <div class="select">
            <p>请选择：规格</p>
            <span>></span>    
        </div>
        <div class="serve">
           <p>服务</p>
            <div class="server-p">
                <ul>
                   <li>7天退还、48小时发货、正品保障、全国包邮</li>
                   <li>全国包邮西藏.新疆除外</li>
                </ul>
            </div>
           <span> > </span>   
        </div>
        <div class="buy">
            <div class="buy-left">
                <span>
                  店铺
                </span>
                <span>
                  客服
                </span>
                <span>
                  收藏
                </span>
            </div>
            <div class="buy-right">
              <span>加入购物车</span>
              <p>立即购买</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*返回键*/
    .getback{
      width:100%;
      position: fixed;
      top:2vh;
    }
    .fanhui{
      display: inline-block;
      width:30px;
      height:30px;
      border-radius: 50%;
      font:700 1.5em/30px "KaiTi";
      text-align: center;
      color:#fff;
      background: rgba(0,0,0,0.3);
     
    }
    /*购物车*/
    .guowu{
      width:30px;
      height:30px;
      float: right;
      border-radius: 50%;
      line-height: 30px;
      color:#fff;
      text-align: center;
      margin-right:5vw;
      position: relative;
      background: rgba(0,0,0,0.3);
    }
    .guowu span{
      display:inline-block;
      width: 15px;
      height:15px;
      border-radius:50%;
      color:#fff;
      font: 400 0.2em/15px "";
      text-align: center;
      background:#ff7575;
      position: absolute;
      top:-4px;
      right:-4px;
    }
    .img{
      width:100%;
      height: 58vh;
    }
    /*标题*/
    .title{
      width:90%;
      color:#000;
      margin:3vh 0 0 3vw;
      font:400 1.3em/1.5em "" ;
    }
    /*价格*/
    .price{
      width:100%;
      height:6vh;
      color:#ff7575;
    }
    .price p{
      font:400 2em/6vh "";
      margin-left:10vw;
      display: inline-block;
    }
    .price span,s{
      font:400 0.5em/6vh "";
      color:#aaa;
      margin: 0 0 0 4vw;
    }
    .price .price-p2{
      font:400 0.5em/6vh "";
      color:#aaa;
      float: right;
      margin-right:8vw;
    }
    /*规格*/
    .select{
      width:97%;
      margin-left:3vw;
      height:7vh;
      border-bottom:1px solid #ddd;
    }
    .select p,span{
      display: inline-block;
      color:#aaa;
      margin-left: 3vw;
      font: 500 1.2em/7vh "";
    }
    .select span{
      float: right;
      margin-right:5vw;
    }
    /*服务*/
    .serve{
      width:97%;
      height:7vh;
      margin:0 0 15vh 3vw; 
      color:#888;
      font:400  1em/7vh "";
    }
    .serve p{
      display: inline-block;
      width: 20%;
      height:100%;
      text-align: center;
      
    }
    .server-p{
      display: inline-block;
      width:70%;
      height:100%;
    }
    .server-p ul{
      width: 100%;
      height:100%;
    }
    .server-p li {
      height: 40%;
      font: 400 0.4em/7vh "";
    }
    /*购买*/
    .buy{
      width:100%;
      height:10vh;
      /* position: fixed; */
      /* bottom:0; */
      background:#fff;
      /* margin-bottom: 20vh; */
      border-top:1px solid #bbb;
    }
    .buy-left{
      display: inline-block;
      width:40%;
      height:100%;
      margin-left:2vw;
      font:400 0.5em/10vh "";    
    }
    .buy-left span{
      display: inline-block;
      margin:0;
      width:30%;
      height:100%;
    }
    .buy-right{
      display: inline-block;
      width:55%;
      height:100%;
    }
    .buy-right span{
      float: left;
      width:45%;
      height: 60%;
      padding-left:10px;
      font:400 1em/6vh ""; 
      color:#fff;
      background:#555555;
      border-radius:30px 0 0 30px;
    }
    .buy-right p{
      display: inline-block;
      width:45%;
      height: 60%;
      padding-left:10px;
      font:400 1em/6vh ""; 
      color:#fff;
      background:#ec7271;
      border-radius:0 30px 30px 0;
    }
</style>
