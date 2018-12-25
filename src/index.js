import Vue from 'vue'
import VueRx from 'vue-rx'
import Rx from 'rxjs/Rx'

Vue.use(VueRx, Rx)

const app = new Vue({
  el: '#app',

  data: () => ({
    isLoaded: document.readyState === 'complete'
  })

})

app.isLoaded || window.addEventListener('load', () => {
  app.isLoaded = true
  console.log('reol loaded.')
})
