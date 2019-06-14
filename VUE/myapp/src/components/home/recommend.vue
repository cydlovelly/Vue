<template>
  <div class="recommend">
      <Homeheader></Homeheader>
      <div class="kong"></div>
      <ul class="con">
          <li v-for="(msga,index) in msg" :key="index" id="lis">
              <!-- 用户名和头像 -->
               <div class="con-1">
                    <span><img :src="msga.headportrait" style="max-width:45px;" /></span>
                    <p>{{msga.name}}</p>
                    <b v-on:click="deletetitle(msga.id)"><img src="../../assets/jiahao2.png"/></b>
              </div>
              <div class="con-2">
                  <p>{{msga.conent}}</p>
                  <ul>
                      <li>#{{msga.topic}}</li>
                  </ul>
              </div>
              <div class="con-3">
                  <ul>
                      <li><img :src=" msga.picture" style="max-width:200px;" /></li>
                  </ul>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>

import Homeheader from '../homeheader'
export default {
  name: 'recommend',
  data () {
    return {
        msg:[]
    }
  },
  methods:{
      deletetitle(id){
        this.$http.delete("http://localhost:3000/users/" + id)
        .then(function(response){
            this.$router.push({path:"/attention"},alert("段子删除成功!"))
        })
      },
    updata(){
       this.$http.get("http://localhost:3000/users")
      .then((response) =>{
        //   console.log(response);
          this.msg = response.body
      })
    }
  },
  created(){
     this.updata()
  },
 updated(){
      this.updata()
  },
  components:{
    Homeheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #lis{
        display: block;
    }
    *,li{
        margin:0;
        padding:0;
    }
    .kong{
      width: 100%;
      height: 125px;
    }
    /* 头像和用户名*/
    .con-1{
        width: 100%;
        line-height: 80px;
    }
    .con-1 span {
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius:50%;
        margin: 0 5% 0 10%;
        overflow: hidden;
    }
    .con-1 img{
        max-width: 20%;
    }
    .con-1 p{
        font: 400 35px/60px "";
        color:#aaa;
        display: inline-block;
    }
    .con-1 b{
        float: right;
    }
    @media(max-width:750px){
       .con-1{
        width: 100%;
        line-height: 40px;
    }
    .kong{
      width: 100%;
      height: 40px;
    }
    .con-1 span {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius:50%;
        margin: 0 5%;
        overflow: hidden;
    }
    .con-1 p{
        font: 400 16px/30px "";
        color:#aaa;
        display: inline-block;
    }
    .con-1 img{
        max-width: 50%;
    }
    .con-1 b{
        width: 10%;
        height:50%;
        float: right;
    }
    }
    /*内容部分*/
    .con-2{
        font: 400 35px/35px "";
        margin:2% 0 ;
        padding-left: 10%;
    }
    .con-2 li{
        font:400 18px/35px "";
        display: inline-block;
        margin-top:20px;
        border-radius: 10px;
        padding:2px 10px;
        background:rgba(160, 203, 231, 0.7);
        border:1px solid rgb(93, 148, 201);
    }
    @media(max-width:750px){
        .con-2{
        font: 400 18px/35px "";
        padding-left: 5%;
    }
    .con-2 li{
        font:400 10px/18px "";
        display: inline-block;
        margin-top:20px;
        border-radius: 10px;
        background:rgba(160, 203, 231, 0.7);
        border:1px solid rgb(93, 148, 201);
    }
    }
    /* 多图图片部分*/
    .con-3{
        width: 80%;
        height: 600px;
        padding-left:10%;
    }
    .con-3 li{
        display: inline-block;
        width:30%;
        height:100px;
    }
    @media(max-width:750px){
        .con-3{
        width: 100%;
        height: 200px;
        padding-left:5%;
    }
    .con-3 li{
        display: inline-block;
        width:29%;
        height: 60px;
    }
    }
    /*单图部分*/
    /* .con-3{
        width: 80%;
        height: 600px;
        padding-left:10%;
    }
    .con-3 li{
        display: inline-block;
        width:30%;
        height:100px;
        margin:1% 1.5%;
        background:#f00;
    }
    @media(max-width:750px){
        .con-3{
        width: 100%;
        height: 200px;
        padding-left:5%;
    }
    .con-3 li{
        width:50%;
        height: 170px;
        background:#f00;
    }
    } */
</style>
