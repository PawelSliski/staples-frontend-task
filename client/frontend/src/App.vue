<template>
  <div id="app">
    <b-nav id="nav">
      <b-nav-item class="home pt-2">
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item >
        <router-link to="/cart" class="cart-nav pt-2 pr-4">{{ $store.state.cartCount }}<img class="cart-img" src="./assets/shopping-cart.svg">
        </router-link>
      </b-nav-item>
    </b-nav>

    <router-view/>
  </div>
</template>

<style scoped lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 75px;
  color: #2c3e50;
}
#nav {
  background: #232323;
  position: fixed;
  height: 60px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  a, .cart-img {
    font-weight: bold;
    color: #42b983;
  }
}
.cart-nav {
  right: 0;
  position: absolute;
  color: #42b983;
}
.cart-img{
  height: 30px;
  width: 30px;
}
.home{
  font-size: 20px;
}

</style>