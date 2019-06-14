<template>
  <div class="home">
      <Homeheader></Homeheader>

     <router-view></router-view>
  </div>
</template>

<script>


import Homeheader from './homeheader'

export default {
  name: 'home',
  data () {
    return {
    
    }
  },
  components:{
    Homeheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .kong{
      width: 100%;
      height: 125px;
    }
</style>
