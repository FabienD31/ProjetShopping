<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="d-flex flex-row">
      <Shop class="col-sm-9"></Shop>
      <Cart class="col-sm-3"></Cart>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import Shop from "./components/Shop/Shop.vue"
import Cart from "./components/Cart/Cart.vue"

export default {
  name: 'App',
  components: {
    TheHeader,
    Shop,
    Cart
  }
}
</script>

<style>

</style>
