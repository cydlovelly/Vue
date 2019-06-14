<template>
  <div class="dateils">
      <div class="heads">
        <span class="glyphicon glyphicon-chevron-left"></span>
        帖子详情
      </div>
      <div class="con" v-for="(msga,index) in msg" :key="index">
          <div class="con-1">
             <span><img src="@/assets/pengyuyan.jpg" style="max-width:45px;" /></span>
             <p>{{msg.name}}</p>
          </div>
          <div class="con-2">
             <img src="@/assets/shanggan2.jpg" style="max-width:200px;" />
          </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'dateils',
  data(){
    return {
        id:this.$route.params.id,
        msg:{}
    }
  },
  methods:{
      autotext(){
        this.$http.get("http://localhost:3000/users/"+this.id)
        .then((data) =>{
            return data.json;
        })
        .then((data) =>{
            this.msg = data;
        })
      }
  },
  created(){
      this.autotext(this.$route.params.id)
  },
  components: {
  }
}
</script>

<style scoped>
    .dateils{
        width: 100%;
    }
    /* //头部 */
    .heads{
        width: 100%;
        height: 50px;
        font:400 18px/50px "KaiTi";
        text-align: center;
        border-bottom:1px solid #222;
    }
    .heads span{
        float:left;
        line-height: 50px;
    }

    /* 头像部分 */
    .con{
        width: 100%;
        height:100px;
        background:#000;
    }
    .con-1{
        width:100%;
        height: 50px;
    }
    .con-1 span{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background:#000;
    }
</style>
