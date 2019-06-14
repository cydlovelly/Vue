<template>
  <div class="singleblog">
          <h1>{{bloga.titile}}</h1>
          <p>{{blog.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'singleblog',
  data(){
    return {
        id:4,  //创建Id
        bloga:{}  //接收数组内容
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
    .then(function(data){
          // console.log(data);
          this.bloga = data.body
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
