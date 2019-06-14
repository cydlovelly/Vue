<template>
  <div id="app">
      <div class="con">
        <router-view></router-view>
      </div>
      <div class="kong"></div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style scoped>
  .con{
    width: 100%;
    height: 86Vh;
  } 
</style>
