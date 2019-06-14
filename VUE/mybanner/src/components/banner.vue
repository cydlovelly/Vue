<template>
    <div id="banner">
        <ul class="b-img">
            <li v-for="(item , index) in imglist" v-show="index === sum" :key="index">
                <img :src=item />
            </li>
        </ul>
        <div class="bar">
            <span  v-for="(item , index) in imglist" v-on:click="onindex(index)" :class="{'active':index===sum}" :key="index">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'banner',
    data () {
    return {
        sum:0,
        imglist:["http://img1.99114.com/group10/M00/01/50/rBADs1nwdc2ARMjYAAMEQhqacpM348.jpg","http://img2.99114.com/group10/M00/FF/B2/rBADslnwdc2AWOxGAAOH2S0OoUQ015.jpg","http://img.zcool.cn/community/01cce75c1cfb18a8012029ac52877c.gif"],
    }
  },
  methods:{
      //自动轮播
      play(){
          this.sum++
          if(this.sum === 3){
              this.sum = 0 
          }
      },
      onindex(i){
          this.sum = i
      },
      move(){
          setInterval(this.play,4000)
      }
  },
//   change(i){
//       this.sum = i
//   },
  created(){
      this.move()
  }
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    #banner{
        width: 750px;
        height: 300px;
        position: relative;
        margin: 0 auto;
    }
    .b-img{
        width: 100%;
        height:100%;
        position:absolute;
    }
    .b-img li{
        position:absolute;
        list-style: none;
    }
    .bar{
        width: 120px;
        height: 10px;
        position:absolute;
        bottom: 30px;
        left:50%;
        margin-left: -60px;

    }
    .bar span{
        width:20px;
        height:10px;
        float: left;
        margin: 0 5px;
        border: 1px solid #ff23af;
    }
    .active{
        background:#00ff33;
    }
</style>

