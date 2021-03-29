<template>
  <div>
    <CartProductList :cart="cart" class="p-3"></CartProductList>
  </div>
</template>

<script>
import CartProductList from "./CartProductList.vue";
export default {
  props: ["cart"],
  components: {
    CartProductList,
  },
};
</script>

<style></style>
