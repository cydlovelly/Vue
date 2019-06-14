<template>
  <div class="coutomers container">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h3 class="page-header">用户信息管理系统</h3>
    <input type="text"  class="form-control" placeholder="搜索" v-model="appdate" />
   <table class="table table-striped">
       <thead>
           <tr>
                <td>姓名</td>
                <td>电话</td>
                <td>电子邮件</td>
                <td></td>
           </tr>
       </thead>
       <tbody>
         <!-- 传的实参 -->
           <tr v-for="(lists,index) in passtitle(list, appdate)" :key="index">
               <td>{{lists.name}}</td>
               <td>{{lists.phone}}</td>
               <td>{{lists.email}}</td>
               <td>
                   <router-link v-bind:to="'/title/'+lists.id"  class="btn btn-default">详情</router-link>
               </td>
           </tr>
       </tbody>
   </table>
  </div>
</template>

<script>

import Alert from "./alert"

export default {
  name: 'coutomers',
  data () {
    return {
        list:[],
        alert:"",
        appdate:""
    }
  },

  methods:{
      fetchCustomers(){
          this.$http.get("http://localhost:3000/users")
          .then(function(response){
            //   console.log(response)
            this.list = response.body
          })
      },
      passtitle(list,value){
          return list.filter(function(lists){   //进行字符串的匹配
            return lists.name.match(value)
          })
      }
  },

  created(){
      if(this.$route.query.alert){  //判断是否为空
          this.alert = this.$route.query.alert;
      }
    this.fetchCustomers()
  },
  uptaded(){
       this.fetchCustomers()
  },
  components:{
      Alert
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
