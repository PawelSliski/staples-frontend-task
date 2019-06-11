import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');


let store = {
  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
  },

  mutations: {
    addToCart(state, product) {
      let found = state.cart.find(item => item.id == product.id);

      if (found) {
        found.quantity++;
      } else {
        state.cart.push(product);
        Vue.set(product, 'quantity', 1);
      }
      state.cartCount++;
    },
    removeFromCart(state, product) {
      let index = state.cart.indexOf(product);

      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;
        state.cart.splice(index, 1);
      }
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    }
  }
}
export default store