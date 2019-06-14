<template>
  <div class="users">
      <ul>
          <li v-for="(item,index) in listss" 
          :key="index">
                <h1>{{item.name}}</h1>
                <p>{{item.email}}</p>
          </li>
          
      </ul>
      <div class="btn"><button v-on:click="muclick">删除</button></div>
  </div>
  
</template>

<script>
//传值  string nember booler   传值只变一个
 
//引用  Arrar object    传引用要变都变
export default {
    name: 'users',
    props:["listss"],
    // props:{
    //     listss:{
    //         type:Array,
    //         required:true
    //     } 
    // },
    data(){
        return {
            
        }       
    },
    methods:{
        muclick:function(){   //传引用的
            this.listss.pop()
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        width:100%;
        height: 200px;
        overflow: hidden;
        padding-left:100px; 
        text-align: center;
    }      
    li{
        list-style: none;
        float: left;
        margin: 20px 10px; 
        width: 10%;
        height: 110px;
        padding-top:40px;
        user-select: none;
        cursor: pointer;
        border: 1px solid #222;
    }
    h1{
        color:burlywood;
    }
    .btn{
        width: 100%;
        height: 50px;
    }
</style>
