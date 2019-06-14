<template>
    <div id="header">
        <P v-on:click="msclick">{{msg}}{{title}}</P>
    </div>
</template>

<script>
export default {
  name: 'headers',
   props:{
      title:{
          type:String
      }
  },
  data () {
    return {
        msg:'这是一个简单的header'
    }
  },
   methods:{
      msclick:function(){
        //   this.title=" ";
        this.$emit("achanged" , "我是子传过来的值")   //注册
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *,p{
        margin: 0;
        padding:0;
    }
    p{
        width: 100%;
        height: 80px;
        font: 600 30px/70px "";
        text-align: center;
        color:cornsilk;
        user-select: none;
        cursor: pointer;
        background-color:#555; 

    }
</style>
