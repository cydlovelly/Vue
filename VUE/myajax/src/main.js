// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"


// axios.defaults.headers.common["token"] = "f4c902c9ae5a2a9d8f84868ad064e706"  //创建 token
// axios.defaults.headers.post["Content-type"] = "application/json"


axios.defaults.header.common["token"] = "....."
axios.defaults.header.post["Content-type"] = "applisasdasdsad"

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
