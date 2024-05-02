import {createRouter, createWebHistory} from "vue-router";
import home from "../views/index.vue";
import ShowView from "../views/newindex/showView.vue";
import Dynamic from "../views/dynamic/index.vue";
import UserMember from "../views/userMembers/index.vue";
import User from "../views/user/index.vue";
import PostInfoComponent from "@/views/user/components/PostInfoComponent.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
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
            ]
        },
    ]
});