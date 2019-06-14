<template>
<div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterinput">
    <table class="table table-striped">
        <thead>
            <tr>
                <td>姓名</td>
                <td>电话</td>
                <td>邮箱</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(msga,index) in filterBy(msg,filterinput)" :key="index">
                <td>{{msga.name}}</td>
                <td>{{msga.phone}}</td>
                <td>{{msga.email}}</td>
                <td><router-link class="btn btn-default"  v-bind:to="'/customer/'+ msga.id">详情</router-link></td> 
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>

import Alert from "./alert"

export default {
  name: 'customers',
  data () {
    return {
        msg:[],
        alert:"",
        filterinput:""
    }
  },
  methods:{
      fetchCustomers(){
          this.$http.get("http://localhost:3000/users")
          .then(function(response){
            //   console.log(response);
            this.msg = response.body;
          })
        //    this.$http.get("http://localhost:3000/users")   //axios请求
        //   .then((response) =>{
        //     //   console.log(response);
        //     this.msg = response.data;
        //   })
      },
      filterBy(msg,value){
          return msg.filter(function(msga){   //收缩的进行匹配
              return msga.name.match(value)
          })
      }
  },
  created(){
      if(this.$route.query.alert){  //判断是否为空!
          this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
  },
  uptaded(){
      this.fetchCustomers();
  },
  components:{
      Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
