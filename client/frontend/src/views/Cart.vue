<template>
  <div v-if="$store.state.cart.length > 0">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody v-for="product in $store.state.cart" :key="product.id">
        <tr v-if="product">
          <td>{{ product.general.name }}</td>
          <td class="pl-3">{{ product.quantity }}</td>
          <td>
            <b class="ml-4" title="Remove from cart" v-on:click="removeFromCart(product)">X</b>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h2 class="ml-2" href>Your cart is empty</h2>
  </div>
</template>
<script>
export default {
  methods: {
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
      this.$store.commit("saveCart");
    }
  }
};
</script>
<style>
th {
  width: 100%;
  left: 0;
  right: 0;
}
</style>
