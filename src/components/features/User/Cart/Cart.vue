<template>
  <div>
    <CartProductList :cart="cart" class="p-3"></CartProductList>
  </div>
</template>

<script>
import CartProductList from "./CartProductList.vue";
import { eventBus } from '../../../../main';
export default {
  components: {
    CartProductList
  },
  data() {
    return {cart: []} 
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on('update:cart', (cart) => {this.cart = cart})
  }
}

</script>

<style>

</style>
