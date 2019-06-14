import Vue from "vue"  //引入VUE
import vuex from "vuex" //引入vuex
import { Store } from "vuex";  // 引入Store

Vue.use(vuex)

 
export const store =new Store({   //创建  stire
    state:{
        list:[  //创建的数据
            {name:"王剑文",price:"5000"},
            {name:"祝孟军",price:"5000"},
            {name:"周明远",price:"5000"},
            {name:"范志立",price:"5000"},
            {name:"丰俊",price:"5000"},
        ]
    },
    getters:{      //运用getters的方法进行
        saleProducts:(state) => {
            var saleProducts =state.list.map(lista =>{
                return {
                    name:"#"+lista.name+"#",
                    price:  lista.price
                }
            }) 
            return  saleProducts 
        } 
    },
    mutations:{
        reducePrice: (state,payalod) =>{
            state.list.forEach(lista =>{
                lista.price -=payalod;
            })
        }
    },
    actions:{
        reducePrice(context,payalod){
            setTimeout(function(){
                context.commit("reducePrice",payalod)
            },3000)
            
        }
    }
})
 