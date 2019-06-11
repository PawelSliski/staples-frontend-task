<template>
    <b-modal hide-footer :id="'detail' + product.id" :title="product.general.name">
      <b-img fluid :src="product.images.primary.large"/>
      <b text-left>Product id:</b>
      {{ product.id }} &nbsp;|
      <b-button class="cart" v-on:click="addToCart(product)" pill variant="outline-success">Add to cart</b-button>
      <div class="d-inline-block"><b>Brand:</b>
      {{ product.brand.name }}</div>
      <b-form class="desc" v-html="product.general.description"></b-form>
    </b-modal>
</template>
<script>
export default {
  name: "Modal",
  props: {
    product: Object
  },
    methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
      this.$store.commit("saveCart");
    }
  }
};
</script>
<style>
.cart {
  float: right;
}
</style>
