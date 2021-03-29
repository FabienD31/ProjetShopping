<template>
  <div class="d-flex flex-row justify-content-between px-1 py-1">
    <span>{{ item.title }}</span>
    <span
      ><strong>{{ item.price | price }} </strong></span
    >
    <!-- permet d'ajouter un bouton croix -->
    <div @click="deleteOne(item.id)">
      <button class="btn-close"></button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["item"],
  methods: {
    ...mapMutations("cart", ["deleteOne"]),
  },
};
</script>

<style>
.product-container {
  height: 200px;
}
</style>
