<template>
  <div>
    <ShopProductList :products="products" class="p-3"></ShopProductList>
  </div>
</template>

<script>
import ShopProductList from "./ShopProductList.vue";
import { eventBus } from '../../../../main';
export default {
  components: {
    ShopProductList
  },
  data() {
    return {products: []} 
  },
  created() {
    this.products = eventBus.products;
    eventBus.$on('update:products', (products) => {this.products = products})
  }
}

</script>

<style>

</style>
