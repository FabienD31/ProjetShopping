import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://marketplace-2bdda-default-rtdb.europe-west1.firebasedatabase.app/';
Vue.prototype.$http = axios;


Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
})

export const eventBus = new Vue({
  data: {
    products: [],
    cart: [],
  },
  methods: {
    addProductInCart(product) {
      if(!this.cart.find(item => item.id === product.id)){
      this.cart = [...this.cart, product]; //créer un nouveau tableau de panier pour y ajouter à la fin un produit//
      this.$emit('update:cart', this.cart);// permet d'écouter l'evenement update dans le panier//
      }
    },
    removeProductToCart(item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id);//slice() copie le panier et filter() selectionne l'element à supprimer grace à son id
      this.$emit('update:cart',this.cart);
    },
    addProduct(product) {
      this.$http.post('products.json', product)
                .then(() => {
                  this.products = [...this.products, {...product, id: this.products.length + 1 + ''}] //permet d'ajouter l'ID dans le tableau products et de le transformer en chaine de caractère
                  this.$emit('update:products', this.products)
                });
    },
    addProducts(products) {
      this.products = products;
      this.$emit('update:products', this.products)
    },
    initProducts() {
      this.$http.get('products.json')
                .then(res => {
                  const data = res.data;
                  this.addProducts(Object.keys(data).map(key => data[key]));//transforme l'objet json en tableau et récupère chaque data
                })
    }       
  },
  created() {
    this.initProducts();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')