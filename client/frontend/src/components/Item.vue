<template>
  <b-card
    v-if="this.product"
    :title="product.general.name"
    :img-src="product.images.primary.large"
    img-alt="Loading image"
    img-top
    tag="article">
    <b-card-text text="sm">
      <b>Product id:</b>
      {{product.id}}
    </b-card-text>
    <b-button
      class="cart"
      pill
      variant="outline-success"
      v-on:click.stop="addToCart(product)">
      Add to cart</b-button>
  </b-card>
</template>

<script>
export default {
  name: "Item",
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

<style scoped lang="scss">
.card {
  cursor: pointer;
  padding: 20px;
  height: 100%;
  min-width: 100%;
}
.cart {
  width: 80%;
  margin-bottom: 10px;
  bottom: 0;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>
