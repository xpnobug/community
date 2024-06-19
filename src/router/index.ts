import {createRouter,createWebHistory, createWebHashHistory} from "vue-router";
import home from "../views/index.vue";
import ShowView from "../views/newindex/showView.vue";
import Dynamic from "../views/dynamic/index.vue";
import UserMember from "../views/userMembers/index.vue";
import User from "../views/user/index.vue";
import PostInfoComponent from "@/views/user/components/PostInfoComponent.vue";
// import Login from "@/views/login/index.vue";
import Login from "@/views/login/components/LoginComponents.vue";

/**
 * vue-router历史模式的问题： vue3中历史模式默认改为了HTML5模式：createWebHistory()
 *
 * 解决办法： createWebHistory 换成 createWebHashHistory， 将历史模式由当前的HTML5模式改为Hash模式
 */
export default createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/',
            name: 'home',
            component: home,
            redirect: 'index', //重定向到 /site/mysite
            children: [
                {
                    path: '/index',
                    name: 'new_index',
                    component: ShowView,
                    meta: {
                        keepAlive: true,
                        title: 'LT-REAI',
                        keywords: '论坛, 社区',
                        description: '热爱无需多言'
                    }
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
                    path: '/task',
                    name: 'task',
                    component: () => import('@/views/userInfo/index.vue')
                },
                {
                    path: '/user/info',
                    name: 'info',
                    component: () => import('@/views/userSetting/index.vue')
                },
                {
                    path: '/release/:type',
                    name: 'release',
                    component: () => import('@/views/Edit/index.vue')
                },
                {
                    path: '/post/:id',
                    name: 'post',
                    component: () => import('@/views/postView/index.vue')
                },
                {
                    path: '/friends',
                    name: 'friends',
                    component: () => import('@/views/userPyq/index.vue')
                },
            ]
        },
    ]
});