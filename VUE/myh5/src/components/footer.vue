<template>
    <div id="afooter">
        <h1 v-on:click="msclick">{{ps}}{{title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'afooter',
  props:{
      title:{
          type:String
      }
  },
  data () {
    return {
        ps:'这是一个简单的footer'
    }
  },
  methods:{
      msclick:function(){    //传值的点击事件  
          this.title= " ";
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
    h1{
        width: 100%;
        height: 70px;
        font: 400 30px/70px "";
        text-align: center;
        color:cornsilk;
         user-select: none;
        cursor: pointer;
        background-color:#555; 
    }
</style>
