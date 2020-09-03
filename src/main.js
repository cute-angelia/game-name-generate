import Vue from 'vue'
import App from './App.vue'
import 'at-ui-style'
import AtUI from 'at-ui'

Vue.use(AtUI)

new Vue({
  el: '#app',
  render: h => h(App)
})