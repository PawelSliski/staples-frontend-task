<template>
  <div>
    <b-modal hide-footer :id="'detail' + product.id" :title="product.general.name">
      <b-img fluid :src="product.images.primary.large"/>
      <b text-left>Product id:</b>
      {{ product.id }} &nbsp;|
      <b text-right>Brand:</b>
      {{ product.brand.name }} &nbsp;| 
      <b-button pill variant="outline-success">Add to cart</b-button>
      <b-form text-right class="desc" v-html="product.general.description"></b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    product: Object
  }
};
</script>