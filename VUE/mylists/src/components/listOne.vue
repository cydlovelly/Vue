<template>
  <div id="listone">
      <h1>福布斯排行榜</h1>
        <ul>
            <li v-for="(lista,index) in saleProducts" :key="index">
                <span>{{lista.name}}</span>
                <span>${{lista.price}}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'  //引入    cnpm install babel-preset-stage-2 --save-dev
import {mapActions} from 'vuex' 

export default {
   computed:{
       list(){    
           return this.$store.state.list   //接收的数据
       },
    //    saleProducts(){
    //         var saleProducts = this.$store.state.list.map(lista =>{
    //             return {
    //                 name:"#"+lista.name+"#",
    //                 price:  lista.price
    //             }
    //         }) 
    //         return  saleProducts 
    //     } 

        // saleProducts(){
        //    return this.$store.getters.saleProducts;
        // }  
        ...mapGetters([
            "saleProducts"
        ])
    },
    methods:{
        // reducePrice(amount){
        //     // this.$store.state.list.forEach(lista =>{
        //     //     lista.price -=2;
        //     // })
        //     // this.$store.commit('reducePrice')
        //     this.$store.dispatch("reducePrice",amount)
        // }
        ...mapActions([
            "reducePrice"
        ])
    }
}
</script>

<style scoped>
    #listone{
        width:100%;
        height: 200px;
        background:#199;
    }
    #listone li{
        list-style: none;
        padding: 20px 30px;
        margin:5px 20px;
        background:#ddd;
        float:left;
    }
</style>
