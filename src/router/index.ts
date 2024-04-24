import {createRouter, createWebHistory} from "vue-router";
import home from "../views/index.vue";
import ShowView from "../views/newindex/showView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [{
        path: '/new_index',
        name: 'new_index',
        component: ShowView,
      },]
    },
  ]
});