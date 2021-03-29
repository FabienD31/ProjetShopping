<template>
  <div class="">
    <h2 class="text-center border-bottom"><strong>Panier</strong></h2>
    <div class="d-flex flex-column flex-row p-1">
      <CartProductItem
        v-for="item in cart"
        :key="item.id"
        :item="item"
      ></CartProductItem>
      <hr />
      <template v-if="cart.length">
        <span>Total : {{ total }} $</span>
        <hr />
      </template>
      <div class="d-flex flex-row justify-content-evenly">
        <button class="btn btn-primary btn-sm">valider</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartProductItem from "./CartProductItem";

export default {
  components: {
    CartProductItem,
  },
  props: ["cart"],
  computed: {
    ...mapGetters("cart", ["total"]),
  },
};
</script>

<style></style>
