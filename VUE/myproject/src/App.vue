<template>
  <div id="app">
        <Hello></Hello>
        <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/HelloWorld'

export default {
  name: 'App',
  components: {
      Hello
  }
}
</script>

<style>

</style>
