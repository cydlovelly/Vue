<template>
  <div class="hello" style="padding-top:10px;" >
      <div v-for="(item ,index) in imglist" :key="index" v-show="index === sum" class="slideshow">
        <a href="#" class="imga">
          <img :src=item style="width:100%;height:300px;">
        </a>
      </div>
      <div class="bar">
        <span v-for="(imgx,index) in imglist" :class="{'active':index === sum}" :key="index">
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        sum:0,
        imglist:["http://img1.99114.com/group10/M00/01/50/rBADs1nwdc2ARMjYAAMEQhqacpM348.jpg","http://img2.99114.com/group10/M00/FF/B2/rBADslnwdc2AWOxGAAOH2S0OoUQ015.jpg","http://img.zcool.cn/community/01cce75c1cfb18a8012029ac52877c.gif"],
    }
  },
  methods:{
      autoplay:function(){
        this.sum++
        if(this.sum === 3){
          this.sum = 0
        }
      },
      play:function(){
        setInterval(this.autoplay,2500)
      },
      change:function(i) {  
      this.sum = i  
    } 
      
  },
  create:function(){
        this.paly()
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 750px;
    height: 300px;
    position: relative;
    margin: 0 auto;
  }
  .imga{
    position: absolute;
  }
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
  }  
  .bar span {  
    width: 20px;  
    height: 5px;  
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 10px;  
  }  
  .active {  
    background: #bfd6b6 !important;  
  } 

</style>
