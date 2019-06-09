<template>
  <b-card
    v-if="this.product"
    :title="product.general.name"
    :img-src="product.images.primary.large"
    img-alt="Product image"
    img-top
    tag="article">
    <b-card-text>{{product.id}}</b-card-text>
    <!-- Póki co jest w przycisku prevent modala, trzeba dodac koszykowanie -->
    <b-button pill variant="outline-success" v-on:click.stop="doThis">Add to cart</b-button>
  </b-card>
</template>

<script>
export default {
  name: "Item",
  props: {
    product: Object
  }
};
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;
  padding: 15px;
}
</style>
