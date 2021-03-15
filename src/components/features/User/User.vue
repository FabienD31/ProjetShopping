<template>
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <Shop class="w-75" />
    </transition>
    <transition name="right" appear>
      <Cart class="w-25" />
    </transition>
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
