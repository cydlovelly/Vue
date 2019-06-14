<template>
  <div class="customertitle container">
      
      <router-link to="/" class="btn btn-default">返回主页</router-link>
      
      <h1 class="page-header">{{customer.name}}
        <span style="float:right">
          <router-link v-bind:to="'/edit/'+customer.id" class="btn btn-primary">编辑</router-link>
          <button class="btn btn-danger" v-on:click="delecttitle(customer.id)">删除</button>
        </span>
      </h1>
      <ul class="list-group">
          <li class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-user"></span>{{customer.phone}}</li>
          <li class="list-group-item list-group-item-info"><span class="glyphicon glyphicon-envelope"></span>{{customer.email}}</li>
      </ul>
      <ul class="list-group">
          <li class="list-group-item list-group-item-warning"><span class="glyphicon glyphicon-screenshot"></span>{{customer.education}}</li>
          <li class="list-group-item list-group-item-info"><span class="glyphicon glyphicon-book"></span>{{customer.graduationschool}}</li>
          <li class="list-group-item list-group-item-danger"><span class="glyphicon glyphicon-calendar"></span>{{customer.profession}}</li>
          <li class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-dashboard"></span>{{customer.profile}}</li>
          <li class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-dashboard"></span>{{customer.profile}}</li>
      </ul>
  </div>
</template>

<script>


export default {
  name: 'customertitle',
  data () {
    return {
        customer:"",
    }
  },
  methods:{
       fetchCustomers(id){
          this.$http.get("http://localhost:3000/users/"+id)
          .then(function(response){
            //   console.log(response);
            this.customer = response.body;
          })
          //  this.$http.get("http://localhost:3000/users/"+id)
          // .then((response) =>{
          //   //   console.log(response);
          //   this.customer = response.data;
          // })
      },
      delecttitle(id){
        this.$http.delete("http://localhost:3000/users/"+id)
        .then(function(response){
          // console.log(123)
          this.$router.push({path:"/",query:{alert:"用户删除完成!"}})
       })
      //   .then((response) =>{
      //     // console.log(123)
      //     this.$router.push({path:"/",query:{alert:"用户删除完成!"}})
      //  })
      }
  },
  created(){
      this.fetchCustomers(this.$route.params.id)
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style:none;
  }
  span{
    display: inline-block;
    margin-right: 10px;
  }

</style>
