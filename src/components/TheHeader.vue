<template>
  <transition appear>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">
          <img src="../assets/photo copie.png" width="30" height="30" />
        </a>
        <button class="navbar-toggler " v-trigger-collapse="'collapse'">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="collapse" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">Boutique</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Admin</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  //permet d'afficher et de gerer le menu déroulant en mode petit écran sans bootstrap.
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        //enlève le menu déroulant en cliquand nimporte où sur la page
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });
        const nav = document.querySelector("#" + binding.value);
        el.addEventListener("click", (e) => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          e.stopPropagation();
        });
      },
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
@keyframes fromtop {
  0% {
    transform: translateY(-30px);
  }
  to {
  }
}
.v-enter-active {
  animation: fromtop 1s;
}
.router-link-active {
  font-weight: bold;
}
</style>
