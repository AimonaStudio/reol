import Vue from 'vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

Vue.use(VueRx, Rx)

const app = new Vue({
  el: '#app'
})

export default app
