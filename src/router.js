import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from './components/features/Admin/Admin'
import User from './components/features/User/User'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', redirect:'/shop' },
    { path: '/shop', component: User },
    { path: '/admin', component: Admin },
    { path: '*', redirect:'/shop'},
  ]
});