<template>
  <div id="listtwo">
        <h1>福布斯排行榜</h1>
        <ul>
            <li v-for="(lista,index) in saleProducts" :key="index">
                <span>{{lista.name}}</span>
                <span>${{lista.price}}</span>
            </li>
        </ul>
        <button v-on:click="jiangjia">商品血亏</button>
  </div>
</template>

<script>
export default {
  computed:{
       list(){
           return this.$store.state.list  //返回的就是这个store里的的数据
       },
        saleProducts(){
       var saleProducts = this.$store.state.list.map(lista =>{
           return {
               name:"@"+ lista.name +"@",
               price:lista.price / 2
           }
       })
       return saleProducts
    }
   },
   methods:{
       jiangjia(){
        //    this.$store.state.list.forEach(lista =>{
        //        lista.price -=4;
        //    })
        this.$store.commit('reducePrice')
       }
   }
}
</script>

<style scoped>
    #listtwo{
        width:100%;
        height:auto;
        padding:20px 10px;
        margin-top:30px;
        background:rgb(243, 222, 120);
    }
    #listtwo li{
        list-style: none;
        width: 200px;
        height:30px;
        font:400 19px/30px "";
        text-align: center;
        padding: 20px 30px;
        margin:20px 20px;
        background:#aaa;
        color:#fff;
    }
</style>
