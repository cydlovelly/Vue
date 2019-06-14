<template>
    <div class="Search">
        <div class="kong"></div>
         <div class="inputs">
             <span class="glyphicon glyphicon-search"></span>
             <input type="text" placeholder="用户" v-model="filterinput" />
         </div>
          <b  class="glyphicon glyphicon-remove"></b>
         <div class="conlist">
             <ul>
                 <li>用户</li>
             </ul>
         </div>
         <br />
         <div class="datacon">
                <ul>
                    <li v-for="(data,index) in filterBy(datas,filterinput)" :key="index"><router-link :to="'/bianji/'+ data.id">{{data.name}}</router-link></li>
                </ul>
         </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data () {
    return {
        datas:[],
        filterinput:"",
        flag:false
    }
  },
  methods:{
    //请求
    updata(){
       this.$http.get("http://localhost:3000/users")
      .then((response) =>{
        //   console.log(response);
          this.datas = response.body
          console.log(this.datas)
      })
    },
    //编辑界面
    //匹配搜素值
    filterBy(datas,value){
      return this.datas.filter(function(data){
        return data.name.match(value);
      })
    }
  },
  created(){
    this.updata()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *,li{
        margin:0;
        padding:0;
    }
   .kong{
        width: 100%;
        height: 128px;
       }
        .Search{
          width:100%;
          height: 45px;
          margin-top:20px;
          padding-left:5%;
        }
        .inputs{
        width: 80%;
        height: 100%;
        padding-left:5%;
        background:#ddd;
        display: inline-block;
        color:#bbb;
        border-radius: 30px;
        font:400 16px/45px "";
      }
      input{
        border:none;
        outline:none;
        
        background:#ddd;
      }
      b{
        width: 10%;
        height: 60%;
        border-radius: 50%;
        margin:9px 10px 0 0 ;
        line-height: 27px;
        color:#bbb;
        text-align: center;
        display: inline-block;
      }
    @media(max-width:750px){
        .kong{
        width: 100%;
        height: 34px;
       }
        .Search{
          width:100%;
          height: 45px;
          margin-top:20px;
          padding-left:5%;
        }
        .inputs{
        width: 80%;
        height: 100%;
        padding-left:5%;
        background:#ddd;
        color:#bbb;
        display: inline-block;
        border-radius: 30px;
        font:400 16px/45px "";
      }
      input{
        border:none;
        outline:none;
        
        background:#ddd;
      }
       b{
        width: 10%;
        height: 60%;
        border-radius: 50%;
        margin:9px 10px 0 0 ;
        line-height: 27px;
        color:#bbb;
        background:#ddd;
        text-align: center;
        display: inline-block;
      }
    }
    /*导航结束*/
    .conlist{
      width:100%;
      padding:4% 0 0 10%;
    }
    .conlist ul{
      width:80%;

    }
    .conlist li{
      width:33%;
      text-align: center;
      float:left;
    }
    .conlist a{
      color:#222;
      text-decoration: none;
    }
    .router-link-active{
      color:rgb(117, 185, 216);
      border-bottom: 2px solid rgb(117, 185, 216);
    }
    .datacon li{
      width: 100%;
      height:50px;
      cursor: pointer;
      line-height: 50px;
      display: block;
    }
    .datacon a{
      width: 100%;
      height:50px;
      cursor: pointer;
      line-height: 50px;
      display: block;
      color:#222;
      font:400 20px/50px "";
      text-decoration: none;
    }
</style>
