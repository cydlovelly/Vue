<template>
  <div id="app">
    <headers></headers>
      <!-- <appblog></appblog> -->
      <!-- <Showblog></Showblog> -->
      <router-view></router-view>
  </div>
</template>

<script>
import appblog from './components/appblog'
import Showblog from './components/showblog'
import headers from './components/header'


export default {
  name: 'App',
  components: {
    appblog,
    Showblog,
    headers
  }
}
</script>

<style>

</style>
