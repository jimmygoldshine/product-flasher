<template>
  <div class='product-container'>
    <div class='found'>
      <h2 class='match'>You've picked <span>{{ this.products.length }}</span> products</h2>
    </div>
    <div class='product-grid'>
      <button id='checkout'>Add Items to Basket</button>
      <product-grid-item v-for="(product, index) in products" :key="index" :product="product" v-on:remove="remove(index)"></product-grid-item>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import ProductGridItem from './ProductGridItem'

export default {
  props: ['products'],

  components: {
    ProductGridItem
  },

  created() {
  },

  methods: {
    remove: function(index) {
      this.$emit('remove', index)
    }
  },

  computed: {
    getUrl: function() {
      return this.selectedProduct.img
    }
  }
};

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto+Slab');

.product-container {
  width: 80%;
  margin: 0 auto;
}

.product-grid {
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.found {
  font-family: 'Raleway', sans-serif;
  text-align: right;
}

.match {
  display: inline-block;
}

#checkout {
  margin: 0 40%;
  font-family: 'Raleway', sans-serif;
  margin-top: 20px;
  border: 2px solid;
  height: 40px;
  font-size: 18px;
  border-radius: 3px;
  background: #226666;
  color: rgba(255,255,255,.8);
  padding: 0 16px;
  outline: none;
  border-style: none;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  cursor: pointer;
  z-index: 3;
}

#checkout:hover {
  color: white;
}

</style>
