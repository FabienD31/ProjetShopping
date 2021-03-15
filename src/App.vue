<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "app",
  components: {
    TheHeader,
  },
};
</script>
