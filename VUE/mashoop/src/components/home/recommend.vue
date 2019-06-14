<template>
  <div class="recommend">
      <div class="banner">
          <ul class="banners">
              <li v-for="(itema,index) in item" :key="index" v-show="n == index"><img :src="itema.src" style="max-width:96vw;"/></li>
          </ul>
          <ul class="dot">
              <li v-for="(itema,index) in item" :key="index" :class="{active:index == n}"></li>
          </ul>
          <div class="commodity">
            <ul>
                <li v-for="(lista,i) in list" :key="i">
                    <img :src="lista.src" style="max-width:55%;" />
                    <p>{{lista.name}}</p>
                </li>
            </ul>
        </div>
        <div class="ddc"></div>
        <div class="conlist">
            <ul>
                <li class="con-list" v-for="(commjsona,index) in commjson" :key="index">
                    <div class="c-left">
                        <img :src="commjsona.src" style="max-height:94%;margin-left:3%" />
                    </div>
                    <div class="c-right">
                        <p>{{commjsona.title}}</p>
                        <span class="quota">{{commjsona.piece}}</span>
                        <p class="price">${{commjsona.price}}<s>${{commjsona.originalCost}}</s></p>
                        <div class="rob">
                            <div class="bg"></div>
                            <p>以抢{{commjsona.yigo}}件</p>
                            <span>{{commjsona.Collagen}}%</span>  
                        </div>  
                        <span class="gorob">去抢购</span> 
                    </div>
                </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
        item:[
            {src:require("@/assets/banner/banner1.png")},
            {src:require("@/assets/banner/banner2.png")},
            {src:require("@/assets/banner/banner3.png")},
            {src:require("@/assets/banner/banner4.png")},
        ],
        list:[
            {src:require("@/assets/guide/dindanguanli.png"),name:"订单管理"},
            {src:require("@/assets/guide/dingdanjiesuan.png"),name:"订单结算"},
            {src:require("@/assets/guide/fenxianghaibao.png"),name:"海报分享"},
            {src:require("@/assets/guide/jifen.png"),name:"积分"},
            {src:require("@/assets/guide/shanghuzhinan.png"),name:"商户指南"},
            {src:require("@/assets/guide/shanghuzhongxin.png"),name:"商户中心"},
            {src:require("@/assets/guide/wodeshanghu.png"),name:"我的商户"},
            {src:require("@/assets/guide/yejipaiming.png"),name:"业绩排行"},
        ],
        commjson:[
            {
                title:"海飞丝洗发水750ml清爽去油型 控油去屑止痒洗发露男士女士正品",
                piece:"限量 | 前50件再减2.6元",
                src:require("@/assets/shangpin/s1.jpg"),
                price:45,
                originalCost:54.9,
                yigo:10,
                Collagen:10,
                di:1
            },
            {
                title:"同色系情侣装夏装2019新款韩版百搭气质ins超火短袖班服不一样t恤",
                piece:"限量 | 前50件再减10元",
                src:require("@/assets/shangpin/s2.jpg"),
                price:65,
                originalCost:138.00,
                yigo:45,
                Collagen:90,
                id:2
            },
            {
                title:"同色系情侣装夏装裙2019新款沙滩海边度假套装短袖t恤男女连衣裙",
                piece:"限量 | 前50件再减15元",
                src:require("@/assets/shangpin/s3.jpg"),
                price:85,
                originalCost:119.00,
                yigo:56,
                Collagen:28,
                id:3
            }
        ],
        n:0
    }
  },
  methods:{
      autoplay(){
        setInterval(this.gonext,4000)
      },
      gonext(){
          this.n++;
          if(this.n == this.item.length){
              this.n = 0;
          }
      }
  },
  created(){
      this.autoplay();  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.recommend{
    width:100%;
    height:100vh;
}
/*搜索框*/
    .banner{
        width:100%;
        height: 150px;
        margin-top:1vh;
        position: relative;
    }
    .banners img{
        border-radius: 10px;
        margin-left:2vw;
    }
    .dot{
        width:50vw;
        height:10px;
        position:absolute;
        left:50%;
        margin-left:-10vw;
        bottom: 2%;
    }
    .dot li{
        list-style: none;
        float:left;
        width:12px;
        height:12px;
        border-radius:50%; 
        margin:0 5px;
        float:left;
        background:rgb(200,200,200);
    }
    .dot .active{
        background:royalblue;
        border:1px solid rgb(240, 129, 129);
    }
    /* banner结束 */
    /* 空格 */
    .ddc{
        width:100%;
        height:2vh;
        background:rgb(231, 230, 230);
    }
    /* 小导航 */
    .commodity{
        width:100%;
        height:28vh;

    }
    .commodity ul{
        width:100%;
        height: 100%;
    }
    .commodity li{
        width:24%;
        height: 14vh;
        float: left;
        text-align:center;
        list-style:none;
    }
    .commodity img{
        margin-bottom:1vh;
    }
    /*商品列表*/
    .conlist{
        width:100%;
        margin-bottom:15vh;
    }
    .con-list{
        width:100%;
        height: 22vh;
        margin: 1vh 0 4vh 0;
        padding-top:1vh;
        border-top: 1px solid rgba(233, 230, 230, 0.7);
    }
    .c-left{
        width:40%;
        height:100%;
        float: left;
    }
    .c-right{
        width:60%;
        height:100%;
        margin-left:40%;
    }
    .quota{
        display: inline-block;
        padding:0.3vh 2vw; 
        border-radius: 6px;
        background:#faeef2;
        color:rgb(230, 39, 39);
    }
    .price{
        margin-top:4vh;
        font:400 1.3em/1em "";
        color: #ff8490;
    }
    .price s{
        margin:0 10px;
        font:400 0.6em/1.4em "";
        color:#ccc;
    }
    .rob{
        width:45%;
        height:2vh;
        display: inline-block;
        border-radius: 20px;
        position: relative;
        font: 400 0.3em/2vh "";
        background:#f4aeae;
    }
    .bg{
        width:30%;
        height:100%;
        border-radius: 20px;
        position: absolute;
        background: #fa7974;
    }
    .rob p{
        margin-left:8%;
        position: absolute;
        left:2%;
        color:#fff;
    }
    .rob span{
        position: absolute;
        color:#fff;
        right:5%;
    }
    .gorob{
        display: inline-block;
        padding:1vw 2vh;
        border-radius: 10px;
        margin-left: 10%;
        color:#fff;
        background:#ff6b6d;
    }
</style>
