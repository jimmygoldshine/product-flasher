

import Vue from 'vue'
import ProductFlasher from './productFlasher'

Vue.config.productionTip = false

new Vue({
  el: '#product-flasher-container',

  template: '<ProductFlasher />',

  components: { ProductFlasher }
})
