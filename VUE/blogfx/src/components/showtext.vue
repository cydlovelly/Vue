<template>
  <div class="showtext">
      <div class="col-xl-6 offset-xl-3 col-sm-6 offset-sm-3 col-mb-6 offset-mb-3 con">
        <h1>{{gettext.title}}</h1>
        <p>{{gettext.content}}</p>
        <p>标签:<ul>
            <li v-for="(gettexta,index) in gettext.list_blog" :key="index">{{gettexta}}</li>
          </ul></p>
        <p>作者:<span>{{gettext.antur}}</span></p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'showtext',
  data () {
    return {
        id:this.$route.params.id,
        gettext:{}
    }
  },
  created(){
      this.$http.get("https://myvue-f05b1.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data){
          // this.gettext = data.body
          //   console.log(data)
          return data.json();
      })
      .then(function(data){
        this.gettext = data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .showtext{
        padding-top:70px;
    }
    .showtext h1{
        margin:30px 0;
        text-align: center;
    }
    .con{
        padding:20px 20px 60px 20px;
        border-radius: 10px;
        background: #eee;
    }
    ul,li{
      list-style: none;
      display: inline-block;
    }
</style>
