<template>
  <div id="app">
    <b-nav id="nav">
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about">Cart</router-link>
      </b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 55px;
  color: #2c3e50;
}
#nav {
  background: #232323;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  a {
    font-weight: bold;
    color: #42668a;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
