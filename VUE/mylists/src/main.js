import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store' //引入store

new Vue({
  store:store,  //调用
  el: '#app',
  render: h => h(App)
})
