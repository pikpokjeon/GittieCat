import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './views/Index.vue';
import Profile from './views/Profile.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/Profile',
      component: Profile,
    },
   
  ],
});
