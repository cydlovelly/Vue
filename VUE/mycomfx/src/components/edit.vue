<template>
  <div class="edit container">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h2>编辑用户</h2>
      <form class="form-horizontal" v-on:submit="updataBlog">
        <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="text" class="form-control"  placeholder="姓名" v-model="blog.name">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">手机</label>
            <input type="text" class="form-control" placeholder="手机"   v-model="blog.phone">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">邮箱</label>
            <input type="text" class="form-control" placeholder="邮箱"  v-model="blog.email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">学历</label>
            <input type="text" class="form-control" placeholder="学历"  v-model="blog.education">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">毕业学校</label>
            <input type="text" class="form-control" placeholder="毕业学校"  v-model="blog.graduationschool">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">职业</label>
            <input type="text" class="form-control" placeholder="职业"  v-model="blog.profession">
        </div>
        <!-- <div class="form-group">
            <label for="exampleInputPassword1">个人说明</label>
            <input type="text" class="form-control" placeholder="个人简历"  v-model="blog.profile">
        </div> -->
        <div class="form-group">
             <label for="exampleInputPassword1">个人说明</label>
            <textarea class="form-control" rows="10" placeholder="个人简历" v-model="blog.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">编辑</button>
    </form>
  </div>
</template>

<script>

import Alert from "./alert"

export default {
  name: 'edit',
  data(){
      return{
          blog:{},
          alert:""
      }
  },
  methods:{
      updatatitle(id){
          this.$http.get("http://localhost:3000/users/"+id)
          .then(function(response){
              this.blog = response.body
          })
      },
      updataBlog(e){
          if(!this.blog.name || !this.blog.email || !this.blog.phone){
            //   console.log("请填写必要信息")
            this.alert="请填写必要信息!";
          }else{
                let updataBlog ={  //传什么?用数组传递 传递所需要的信息
                    name:this.blog.name,
                    phone:this.blog.phone,
                    email:this.blog.email,
                    education:this.blog.education,
                    graduationschool:this.blog.graduationschool,
                    profession:this.blog.profession,
                    profile:this.blog.profile
                }
                this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updataBlog)  //获得指定id的内容
                 .then(function(response){
                    this.$router.push({path:"/",query:{alert:"信息更改完成!"}})

            })
            //  console.log(123); 
             e.preventDefault();
          }
        e.preventDefault();
      }
      
  },
  created(){
      this.updatatitle(this.$route.params.id)
  },
  components:{
      Alert
  }
  
}
</script>

<style>

</style>
