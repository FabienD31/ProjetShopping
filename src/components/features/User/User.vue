<template>
  <div class="d-flex flex-row">
    <Shop class="w-75" />
    <Cart class="w-25" />
  </div>
</template>

<script>
import Shop from "./Shop/Shop.vue";
import Cart from "./Cart/Cart.vue";
export default {
  components: {
    Shop,
    Cart,
  },
};
</script>
