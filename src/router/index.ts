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
      redirect: '/new_index', //重定向到 /site/mysite
      children: [{
        path: '/new_index',
        name: 'new_index',
        component: ShowView,
      },]
    },
  ]
});