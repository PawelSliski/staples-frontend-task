<template>
  <div class="row">
    <div class="item" v-for="(product,id) in products" v-bind:key="id">
      <img :src="product.images.primary.large">
      {{ product.general.name }}
      <li class="product-id">Product id: {{ product.id }}</li>
            <button class="cart-add">Add to cart</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Item",

  data() {
    return {
      products: []
    };
  },
  watch: {
    filters() {
      this.fetchData();
    }
  },
  methods: {
    fetchData: function() {
      const apiUrl = "http://localhost:3005/products";
      axios({ method: "GET", url:apiUrl}).then(response => {
        this.products = response.data;
      },
          error => {         
        /* eslint-disable no-console */
        console.error(error)
        /* eslint-enable no-console */;
    });
  }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>

<style scoped lang="scss">
.row{
  text-align: center;
}
.item{
  width: 20%;
  height: 20%;
  display: inline-block;
  margin: 40px;
}
img{
  width: 100%;
  height: 100%;
}
.cart-add {
  margin-left: 20px;
}
.product-id{
  font-size: 14px;
  vertical-align: center;
}
</style>
