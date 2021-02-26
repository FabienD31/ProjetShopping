<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <component :is="page"></component>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./main";

import TheHeader from "./components/TheHeader";
import User from "./components/features/User/User";
import Admin from "./components/features/Admin/Admin";

export default {
  name: "app",
  components: {
    TheHeader,
    User,
    Admin,
  },
  data() {
    return {
      page: eventBus.page,
    };
  },
  created() {
    eventBus.$on("update:page", (page) => {
      this.page = page;
    });
  },
};
</script>
