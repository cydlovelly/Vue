<template>
  <div id="app">
      <Header></Header>
      <!-- <showblog></showblog> -->
      <router-view></router-view>
      <!-- <appblog></appblog> -->
  </div>
</template>

<script>
import appblog from './components/appblog'
import Header from './components/header'
import showblog from './components/showBlog'
import singleblog from './components/singleBlog'

// import routes from './routes'

export default {
  name: 'App',
  components: {
   appblog,
   Header,
   showblog,
   singleblog
  }
}
</script>

<style scoped>

</style>
