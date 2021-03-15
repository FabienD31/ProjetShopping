import Vue from 'vue'
import App from './App.vue'
import * as filters from "./utils/filters"
import {router} from "./router"

Vue.config.productionTip = false

Object.keys(filters).forEach( (f) => {
  Vue.filter(f, filters[f])

})

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: `Quand nous avons créé le MacBook, nous avons tout simplement tenté l'impossible. C'est le plus fin et le plus léger de nos ordinateurs portables`,
        price: 1500
      },
      {
        id: '2',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300
      },
      {
        id: '3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: `Quand nous avons créé le MacBook, nous avons tout simplement tenté l'impossible. C'est le plus fin et le plus léger de nos ordinateurs portables`,
        price: 1500
      },
      {
        id: '4',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook Pro',
        description: `Quand nous avons créé le MacBook, nous avons tout simplement tenté l'impossible. C'est le plus fin et le plus léger de nos ordinateurs portables`,
        price: 3400
      },
      {
        id: '5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook Air',
        description: `Quand nous avons créé le MacBook, nous avons tout simplement tenté l'impossible. C'est le plus fin et le plus léger de nos ordinateurs portables`,
        price: 1200
      },
    ],
    cart: [],
    page: 'User',
  },
  methods: {
    addProductInCart(product) {
      if(!this.cart.find(item => item.id === product.id)){//permet de vérifier si un produit à été ajouté 2 fois//
        this.cart = [...this.cart, product]; //créer un nouveau tableau de panier pour y ajouter à la fin un produit//
        this.$emit('update:cart', this.cart);// permet d'écouter l'evenement update dans le panier//
      }
    },
    removeProductToCart(item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id);//slice() copie le panier et filter() selectionne l'element à supprimer grace à son id
      this.$emit('update:cart',this.cart);
    },
    changePage(page) {
      this.page = page;
      this.$emit('update:page', this.page);
    },
    addProduct(product) {
      this.products = [...this.products, {...product, id: this.products.length + 1 + ''}] //permet d'ajouter l'ID dans le tableau products et de le transformer en chaine de caractère
      this.$emit('update:products', this.products);
    }
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
