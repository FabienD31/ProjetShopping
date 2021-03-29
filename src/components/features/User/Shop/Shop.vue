<template>
  <div>
    <ShopProductList :products="products" class="p-3"></ShopProductList>
  </div>
</template>

<script>
import ShopProductList from "./ShopProductList.vue";
export default {
  props: ['products'],
  components: {
    ShopProductList,
  },
};
</script>

<style></style>
