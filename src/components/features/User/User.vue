<template>
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <Shop :products="products" class="w-75" />
    </transition>
    <transition name="right" appear>
      <Cart :cart="cart" class="w-25" />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
export default {
  components: {
    Shop,
    Cart,
  },
  created() {
    this.$store.dispatch("product/fetchDatas");
  },
  computed: {
    ...mapState("product", {
      products: "datas", //permets de donner un alias à "datas"
    }),
    ...mapState("cart", {
      cart: "datas", //permets de donner un alias à "datas"
    }),
  },
};
</script>
<style scoped>
@keyframes fromleft {
  0% {
    transform: translateX(-30px);
  }
  to {
  }
}
@keyframes fromright {
  0% {
    transform: translateX(30px);
  }
  to {
  }
}
.left-enter-active {
  animation: fromleft 1s;
}
.right-enter-active {
  animation: fromright 1s;
}
</style>
