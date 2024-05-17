import {createRouter, createWebHashHistory} from "vue-router";
import home from "../views/index.vue";
import ShowView from "../views/newindex/showView.vue";
import Dynamic from "../views/dynamic/index.vue";
import UserMember from "../views/userMembers/index.vue";
import User from "../views/user/index.vue";
import PostInfoComponent from "@/views/user/components/PostInfoComponent.vue";
import Login from "@/views/login/index.vue";

/**
 * vue-router历史模式的问题： vue3中历史模式默认改为了HTML5模式：createWebHistory()
 *
 * 解决办法： createWebHistory 换成 createWebHashHistory， 将历史模式由当前的HTML5模式改为Hash模式
 */
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/',
            name: 'home',
            component: home,
            redirect: '/new_index', //重定向到 /site/mysite
            children: [
                {
                    path: '/new_index',
                    name: 'new_index',
                    component: ShowView,
                },
                {
                    path: '/dynamic',
                    name: 'dynamic',
                    component: Dynamic,
                },
                {
                    path: '/members',
                    name: 'members',
                    component: UserMember,
                },
                {
                    path: '/user/:id',
                    name: 'user',
                    component: User,
                },
                {
                    path: '/post/:id',
                    component: PostInfoComponent,
                },
                {
                    path: '/task',
                    name: 'task',
                    component: () => import('@/views/userInfo/index.vue')
                },
                {
                    path: '/user/info',
                    name: 'info',
                    component: () => import('@/views/userSetting/index.vue')
                },
            ]
        },
    ]
});