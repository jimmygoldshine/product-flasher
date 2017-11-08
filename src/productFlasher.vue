<template>
  <div id="product-flasher">
    <div id="controls">
      <h1 class='speed-control'>Speed Control</h1>
      <vue-slider v-model="value" :max="max" :min="40" reverse="reverse" tooltip="never" :bgStyle="gradient"/>
      <div id="categories">
          <button class='category' v-for="category in categories" v-on:click="categoryClick(category)">{{ category }}</button>
      </div>
    </div>
    <div id='pre-loader'>
      <img v-for="product in categoryProducts.slice(0,1000)" :src="product.image">
    </div>
    <flasher :speed="value" :products="categoryProducts" v-on:product-clicked="selectProduct"/>
    <product-grid :products="selectedProducts" v-on:remove="removeSelectedProduct"/>
  </div>
</template>

<script>

  import vueSlider from 'vue-slider-component';
  import Flasher from './components/flasher';
  import ProductGrid from './components/ProductGrid';
  var products = require('./test-data');

  export default {
    name: 'product-flasher',

    components: {
      Flasher,
      vueSlider,
      ProductGrid
    },

    data() {
      return {
        start: true,
        value: 1000,
        max: 1500,
        reverse: true,
        direction: "vertical",
        allProducts: products.list,
        categoryProducts: products.list,
        selectedProducts: [],
        categories: ["All", "Dresses", "Shirts", "Skirts"],
      }
    },

    methods: {
      go: function() {
        return this.start = !this.start
      },
      selectProduct: function(i) {
        this.selectedProducts.push(this.categoryProducts[i])
      },
      removeSelectedProduct: function(i) {
        this.selectedProducts.splice(i, 1)
      },
      categoryClick: function(category) {
        if (category === "All") {
          this.categoryProducts = this.allProducts
        } else {
          this.categoryProducts = this.allProducts.filter((product) => {
            return product.subcategory == category
          })
        }
      }
    },

    computed: {
      gradient: function() {
        return {
          "backgroundImage": "-webkit-linear-gradient(left, #3498db, #f05b72)"
        }
      }
    },


  }

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto+Slab');


#controls {
  position: relative;
  margin: 50px auto 0;
}

.speed-control {
  font-family: 'Raleway', sans-serif;
  text-align: center
}

.vue-slider-component {
  margin: 0 auto;
  width: 25% !important;
  height: 10px;
}

.vue-slider {
  height: 10px !important;
  border-radius: 3px !important;
}

.vue-slider-component .vue-slider-process {
  background-color: transparent;
}

.vue-slider-component .vue-slider-dot {
  border-radius: 0px !important;
  width: 12px !important;
  height: 25px !important;
  top: -8px !important;
}

#categories {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.category {
  font-family: 'Raleway', sans-serif;
  margin-top: 20px;
  border: 2px solid;
  height: 40px;
  font-size: 16px;
  border-radius: 3px;
  background: #226666;
  color: rgba(255,255,255,.8);
  margin-right: 8px;
  padding: 0 16px;
  outline: none;
  border-style: none;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  cursor: pointer;
  z-index: 3;
}

.category:hover {
  color: white
}

#pre-loader {
  height: 0px;
  width: 0px;
}

</style>
