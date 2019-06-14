<template>
  <div class="shoop">
      <div class="head">
          购物车
          <span>(1)</span>
          <p>编辑</p>
      </div>
      <div class="ddc"></div>
      <div class="shoopcona">
          <div class="all">
                <input type="checkbox" class="checkall" />
                <span>全选</span>
          </div>
          <div class="shoopcon">
            <ul>
              <li>
                
                <div class="shoopleft"> 
                    <input type="checkbox" class="checkall" />
                </div>
                <div class="srca">
                    <img src="@/assets/shangpin/s1.jpg" style="max-height:15vh;"/>
                </div>
                <div class="shoopright">
                      <p>海飞丝洗发水750ml清爽去油型 控油去屑止痒洗发露男士女士正品</p>
                      <p>规格:</p>
                </div>
                 <div class="control">
                    <span>$45</span>
                    <div class="button">
                        <div class="b1">-</div>
                        <div class="b2">1</div>
                        <div class="b3">+</div>
                    </div>
                </div>
              </li>
            </ul>
          </div>
         
      </div>
  </div>
</template>
<script>
export default {
  name: 'shoop',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*空格*/
.ddc{
  width:100%;
  height: 3vh;
  background:rgba(228, 227, 227, 0.5);
}
       /*头部*/
      .head{
        width:100%;
        height:10vh;
        font: 400 2em/10vh "";
        text-align: center;
        border-bottom:1px solid rgb(221, 221, 221);
      }
      .head p{
        float: right;
        margin-right: 2vw;
        color:#999;
         font: 400 0.6em/10vh "";
      }
      /*全选*/
      .all{
        width:100%;
        height:8vh;
        font:400 1.4em/8vh "";
      }
      .checkall{
        width:6%;
        height:3.5vh;
        margin:3.5% 0 0 3%; 
      }
      /*购物车商品*/
      .shoopcon{
        width: 100%;
        height:15vh;
        border-top:1px solid  rgb(210,210,210);
      }
      .shoopleft{
        /* display: inline-block; */
        float: left;
        width:10%;
        overflow: hidden;
        height:15vh;
      }
      .shoopleft input{
          width: 60%;
          margin: 2vh 0 0 25%;
      }
      .srca{
        /* display: inline-block; */
        float: left;
        width:20%;
        height:15vh;
      }
      .shoopright{
        /* display: inline-block; */
        float: right;
        width:55%;
        height:15vh;
        padding-top:2vh;
        margin-right:3vw;
      }
      /*添加个数*/
      .control{
        width:100%;
        height:5vh;
        font:400 1em/1vh "";
        text-align: center;
      }
      .control span{
           display: inline-block;
           margin-left:30%;
           font:400 1em/5vh "";
           color:#e6686b;
      }
      .button{
        width:40%;
        height:80%;
        display: inline-block;
        margin-top:1vh;
        float: right;
      }
      .b1{
        width:20%;
        height:100%;
        font: 400 3em/2.5vh "";
        text-align: center;
        background:#f9f9f9;
        color:#dcdcdc;
        border:1px solid #dcdcdc;
        float: left;
      }
      .b2{
        float: left;
        width:40%;
        height:100%;
         font: 400 1em/4vh "";
         color:#aaa;
         text-align: center;
        border:1px solid #dcdcdc;
        border-left:none;
        border-right:none;
      }
      .b3{
        width:20%;
        height:100%;
        font: 400 2.5em/2.5vh "";
        text-align: center;
        background:#f9f9f9;
        color:#dcdcdc;
        border:1px solid #dcdcdc;
        float: left;
      }
</style>
