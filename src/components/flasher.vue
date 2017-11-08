<template>
  <div id="flasher-container">
    <product-card :product="product" v-on:clicked="clicked" v-on:pause="paused = true" v-on:unpause="paused = false"/>
  </div>
</template>

<script>

import productCard from './productCard'

export default {
  name: 'flasher',

  components: {
    productCard
  },

  mounted() {
    this.interval = setInterval(() => {
      this.nextProduct()
    }, this.speed)
  },

  props: ['speed', 'products'],

  data() {
    return {
      i: 0,
      product: this.products[0],
      paused: false
    }
  },

  methods: {
    nextProduct: function() {
      if (!this.paused) {
        if (this.i < this.products.length - 1 && !this.paused) {
          this.i += 1
        } else {
          this.i = 0
        }
      }
    },
    clicked: function() {
      this.$emit('product-clicked', this.i)
    },
  },

  watch: {
    i: function() {
      this.product = this.products[this.i]
    },
    speed: function() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.nextProduct()
      }, this.speed)
    }
  }
}

</script>

<style>

#flasher-container {
  display: flex;
  align-items: center;
  height: 350px;
}

</style>
