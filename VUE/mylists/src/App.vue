<template>
  <div id="app">
      <list-one></list-one>
      <list-two></list-two>
  </div>
</template>

<script>

import listOne from "./components/listOne.vue"
import listTwo from "./components/listTwo.vue"

export default {
  name: 'app',
  components:{
    "list-one":listOne,
    "list-two":listTwo
  },
  data () {
    return {
      
    }
  },
}
</script>

<style>

</style>
