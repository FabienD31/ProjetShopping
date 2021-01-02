<template>
      <div class="col-md-4 p-3">
        <div>
          <img class="w-100" :src="product.img"/>
        </div>
        <div>
          <h3 class="pt-2">{{product.title}}</h3>
          <hr>
        </div>
        <div>
          <p>{{product.description}}</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center">
          <p class="m-0">{{product.price}}</p>
          <button @click="addProductInCart" class="btn btn-primary btn-sm">Acheter</button>
        </div> 
      </div>
</template>

<script>
import {eventBus} from "../../main"

export default {
 props: ['product'],
 methods: {
   addProductInCart() {
     eventBus.addProductInCart({...this.product}) // Cette expression permet de copier toutes les propriétés d'un objet dans un nouvel objet littéral grâce à ES6. = spread(object)//
   }
 }
};

</script>

<style>
.product-container {
  height: 200px;
}
p {
  font-size: 12px;
}
</style>
