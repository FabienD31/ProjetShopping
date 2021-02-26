<template>
  <div class="d-flex flex-wrap flex-row">
    <ShopProductItem v-for="product in products" :key="product.id" :product="product" ></ShopProductItem>
  </div>
</template>

<script>
import ShopProductItem from "./ShopProductItem";

export default {
  components: {
    ShopProductItem
  },
  props:['products']
}

</script>

<style>

</style>
