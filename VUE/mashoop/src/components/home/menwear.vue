<template>
  <div class="menwear">
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
</template>

<script>
export default {
  name: 'manwear',
  data () {
    return {
        commjson:[
          {
                title:"原创森女部落短袖t恤学生内搭夏季上衣女小清新衣服2019夏装新款",
                piece:"限量 | 前50件再减30元",
                src:require("@/assets/shangpin/s4.jpg"),
                price:69,
                originalCost:138,
                yigo:20,
                Collagen:10,
                id:4
            },
             {
                title:"原创森女部落内搭短袖t恤衣服女宽松女装打底衫2019新款夏装上衣",
                piece:"限量 | 前50件再减25元",
                src:require("@/assets/shangpin/s5.jpg"),
                price:69,
                originalCost:138,
                yigo:32,
                Collagen:64,
                id:5
            },
            {
                title:"芥子记枝南子坦领半臂对襟上襦原创传统汉服女春夏装齐腰襦裙刺绣",
                piece:"限量 | 前50件再减25元",
                src:require("@/assets/shangpin/s6.jpg"),
                price:200,
                originalCost:228,
                yigo:25,
                Collagen:10,
                id:6
            },
            {
                title:"原创森女部落半袖t恤夏装学生打底衫可爱系短袖上衣女装2019新款",
                piece:"限量 | 前50件再减10元",
                src:require("@/assets/shangpin/s7.jpg"),
                price:59.9,
                originalCost:118,
                yigo:60,
                Collagen:36,
                id:7
            },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        left:4%;
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
