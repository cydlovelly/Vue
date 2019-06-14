<template>
  <div id="app">
      <div class="center">
        <router-view></router-view>
      </div>
      
      <Footer></Footer>
  </div>
</template>

<script>

import Footer from './components/footer'

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Footer
  }
}
</script>

<style scoped>
    /* 内容 */
    .center{
      width: 100%;
      height: 100%;
    }
</style>
