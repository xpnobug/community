import {createRouter, createWebHistory} from "vue-router";
import home from "../views/index.vue";

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
        meta: {title: '我的', icon: 'icon-wode',},
        component: () => import('../views/newindex/index.vue'),
      },]
    },
  ]
});