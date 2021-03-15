<template>
  <form @submit="trySubmit">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100" />
    <div class="form-group my-3">
      <label>Image</label>
      <input v-model="form.img" type="text" class="form-control" />
    </div>
    <div class="form-group my-3">
      <label>Titre</label>
      <input v-model="form.title" type="text" class="form-control" />
    </div>
    <div class="form-group my-3">
      <label>Description</label>
      <textarea
        v-model="form.description"
        type="text"
        class="form-control"
      ></textarea>
    </div>
    <div class="form-group my-3">
      <label>Prix</label>
      <input v-model.number="form.price" type="number" class="form-control" />
    </div>
    <div v-if="errors.length" class="alert alert-danger" role="alert">
      <div v-for="error in errors" :key="error">{{ error }}</div>
    </div>
    <button class="btn btn-primary mt-3 w-100">
      Ajouter
    </button>
  </form>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  data() {
    return {
      form: {
        img: "",
        title: "",
        description: "",
        price: "",
      },
      errors: [],
    };
  },
  methods: {
    trySubmit(e) {
      e.preventDefault(); //peut etre remplacer par <form @submit.prevent="myFunction"> dans le html </form>
      if (this.formIsValid()) {
        eventBus.addProduct({ ...this.form });
        this.resetForm();
        this.$router.push("/shop");
      }
    },
    resetForm() {
      this.form = {
        img: "",
        title: "",
        description: "",
        price: "",
      };
    },
    formIsValid() {
      if (!this.form.img) {
        this.errors.push("Image est nécessaire");
      }
      if (!this.form.title) {
        this.errors.push("titre est nécessaire");
      }
      if (!this.form.description) {
        this.errors.push("descrption est nécessaire");
      }
      if (!this.form.price) {
        this.errors.push("prix est nécessaire");
      }
      return this.errors.length ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
