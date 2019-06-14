<template>
  <div class="Add container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">添加用户</h1>
        <form v-on:submit="addCustomers">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业学校</label>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">添加用户</button>
            </div>
        </form>
  </div>
</template>

<script>

import Alert from "./alert"
export default {
  name: 'Add',
  data () {
    return {
        customer:{},
        alert:""
    }
  },
    methods:{
        addCustomers(e){
            if(!this.customer.name || !this.customer.phone || !this.customer.email){   //不能为空
                // alert("请填写必要信息")
                this.alert = "请填写必要信息";  
            }else{
                let newCustomer = {   //传递的为数组
                    name:this.customer.name,
                    phone:this.customer.phone,
                    email:this.customer.email,
                    education:this.customer.education,
                    graduationschool:this.customer.graduationschool,
                    profession:this.customer.profession,
                    profile:this.customer.profile
                }
                 this.$http.post("http://localhost:3000/users",newCustomer)
                 .then(function(response){
                    this.$router.push({path:"/",query:{alert:"信息添加成功!"}});
                    // console.log(response);
                 })
                //   .then((response) =>{
                //     this.$router.push({path:"/",query:{alert:"信息添加成功!"}});
                //     // console.log(response);
                //  })
                 e.preventDefault();
            }
            // console.log(123);
            e.preventDefault();
        }
    },
    components:{
        Alert
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
