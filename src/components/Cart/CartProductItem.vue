<template>
    <div class="d-flex flex-row justify-content-between px-1 py-1">
      <span>{{ item.title }}</span>
      <span><strong>{{ item.price }} $</strong></span>
      <!-- permet d'ajouter un bouton croix -->
      <button  @click="removeProductToCart">
        <span>&times;</span>
      </button>    
    </div>
</template>

<script>
import {eventBus} from "../../main"

export default {
  props: ["item"],
  methods: {
    removeProductToCart() {
      eventBus.removeProductToCart({...this.item}); //idem methode addProductInCart dans ShopProductItem.vue
    }
  }
};
</script>

<style>
.product-container {
  height: 200px;
}
</style>
