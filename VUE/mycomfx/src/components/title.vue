<template>
  <div class="Title conteiner">
    <h3>详细信息
        <router-link to="/" class="btn btn-default">返回主页</router-link>
        <span style="float:right">
            <router-link class="btn btn-info" v-bind:to="'/edit/'+listtitle.id">编辑</router-link>
            <button v-on:click="deletetitle(listtitle.id)"  class="btn btn-danger">删除</button>
        </span>
    </h3>
    <ul class="list-group">
        <li class="list-group-item list-group-item-success"><span class="glyphicon glyphicon-asterisk" style="margin-right:30px;">名字:</span>{{listtitle.name}}</li>
        <li class="list-group-item list-group-item-info"><span class="glyphicon glyphicon-user" style="margin-right:30px;">手机:</span>{{listtitle.phone}}</li>
        <li class="list-group-item list-group-item-warning"><span class="glyphicon glyphicon-envelope" style="margin-right:30px;">邮箱:</span>{{listtitle.email}}</li>
    </ul>
     <ul class="list-group">
        <li class="list-group-item list-group-item-success"><span class="gglyphicon glyphicon-bullhorn" style="margin-right:30px;">学历:</span>{{listtitle.education}}</li>
        <li class="list-group-item list-group-item-warning"><span class="glyphicon glyphicon-briefcase" style="margin-right:30px;">毕业学校:</span>{{listtitle.graduationschool}}</li>
        <li class="list-group-item list-group-item-danger"><span class="glyphicon glyphicon-asterisk" style="margin-right:30px;">职位:</span>{{listtitle.profession}}</li>
         <li class="list-group-item list-group-item-danger"><span class="glyphicon glyphicon-asterisk" style="margin-right:30px;">个人简介:</span>{{listtitle.profile}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data(){
      return{
          listtitle:"",
          alert:""

      }
  },
  methods:{
      datatitle(id){
          this.$http.get("http://localhost:3000/users/"+id)
          .then(function(response){
            //   console.log(response)
                this.listtitle = response.body
          })
      },
      deletetitle(id){
           this.$http.delete("http://localhost:3000/users/"+id)
           .then(function(response){
               this.$router.push({path:"/",query:{alert:"用户删除完成!"}})
            // console.log(123)
           })
      }
  },
  created(){
      this.datatitle(this.$route.params.id)  
  }
  
}
</script>

<style>

</style>
