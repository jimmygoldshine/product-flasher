<template>
  <div id='image-container' v-on:click="clicked" v-on:mouseenter="pause" v-on:mouseleave="unpause">
    <img :src="imgUrl">
  </div>
</template>

<script>

  export default {
    name: 'product-card',

    props: ['product'],

    computed: {
      imgUrl: function() {
        return this.product.image
      }
    },

    methods: {
      clicked: function() {
        this.$emit('clicked')
      },
      pause: function() {
        this.$emit('pause')
      },
      unpause: function() {
        this.$emit('unpause')
      }
    },
  }

</script>

<style>

#image-container {
  height: 80%;
  margin: 0 auto;
  cursor: pointer;
  padding: 10px 0;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
}

img {
  height: 100%
}

</style>
