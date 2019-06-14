<template>
  <div class="index">
        <ul>
            <li v-for="(lista,index) in list" :key="index">
                <router-link to="/ps">
                         <p>{{lista.name}}</p>
                         <p>{{lista.werk}}</p>
                </router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
        {name:"陈雨弟",werk:"划水",id:1},
        {name:"陈雨弟",werk:"划水",id:2},
        {name:"陈雨弟",werk:"划水",id:3},
        {name:"陈雨弟",werk:"划水",id:4},
        {name:"陈雨弟",werk:"划水",id:5},
        {name:"陈雨弟",werk:"划水",id:6},
        {name:"陈雨弟",werk:"划水",id:7}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li{
        list-style: none;
        float: left;
        margin-left:30px;
    }
</style>
