<template>
  <div class='product'>
    <button class="close" v-on:click="remove">&#10006;</button>
    <div class='image'>
      <img :src="getUrl">
    </div>
    <div class="product-info">
      <span id="name">{{ product.name }}</span>
      <span id="tagline"></span>
      <span id='price'>£{{ product.price }}</span>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  props: ['product'],

  methods: {
    remove: function() {
      this.$emit('remove')
    }
  },

  computed: {
    getUrl: function() {
      return this.product.image
    }
  }
};

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto+Slab');

.product {
  width: calc(23%);
  margin: 5% 1% 0% 1%;
}

.product > div {
  display: block;
}

.image {
  width: 100%;
  height: auto;
}

.product:hover {
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

img {
  width: 100%;
  height: auto;
}

.product-info {
  text-align: center;
}

span {
  display: block;
}

#name, #price {
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
}

.close {
  display: block;
  opacity: 0;
  border: none;
  background: none;
  color: grey;
  cursor: pointer;
  float: right;
  outline: none;
}

.product:hover > .close {
  opacity: 50;
}

.close:hover {
  color: #b71b1b;
}

#tagline {
  font-family: 'Roboto Slab', serif;
}


</style>
