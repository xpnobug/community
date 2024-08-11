import type {RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHistory} from "vue-router";
import home from "../views/index.vue";
import ShowView from "../views/newindex/showView.vue";
import Dynamic from "../views/dynamic/index.vue";
import UserMember from "../views/userMembers/index.vue";
import User from "../views/user/index.vue";
import Login from "@/views/login/components/LoginComponents.vue";
import Friends from "@/views/userPyq/index.vue";
import Chat from "@/views/newchat/demo1/index.vue";
import Channels from "@/views/channelbk/index.vue";
import Live from "@/views/live-moudle/pc/index.vue";
import MobileLayout from "@/views/live-moudle/mobile/index.vue"

import {isIPad, isMobile} from "billd-utils";

/**
 * vue-router历史模式的问题： vue3中历史模式默认改为了HTML5模式：createWebHistory()
 *
 * 解决办法： createWebHistory 换成 createWebHashHistory， 将历史模式由当前的HTML5模式改为Hash模式
 */
export const commonRouterName = {
  qrcodeLogin: 'qrcodeLogin',
};
export const mobileRouterName = {
  h5: 'h5',
  h5Room: 'h5Room',
  h5Area: 'h5Area',
  h5Rank: 'h5Rank',
  h5Profile: 'h5Profile',
  ...commonRouterName,
};

export const routerName = {
  home: 'home',
  about: 'about',
  area: 'area',
  areaDetail: 'areaDetail',
  rank: 'rank',
  sponsors: 'sponsors',
  privatizationDeployment: 'privatizationDeployment',
  videoTools: 'videoTools',
  frameScreenshotByCanvas: 'frameScreenshotByCanvas',
  frameScreenshotByWebcodec: 'frameScreenshotByWebcodec',
  support: 'support',
  order: 'order',
  wallet: 'wallet',
  shop: 'shop',
  link: 'link',
  ad: 'ad',
  faq: 'faq',
  team: 'team',
  oauth: 'oauth',
  release: 'release',
  pushStreamDifferent: 'pushStreamDifferent',
  notFound: 'notFound',
  group: 'group',
  profile: 'profile',
  download: 'download',
  downloadLive: 'downloadLive',
  downloadRemoteDesktop: 'downloadRemoteDesktop',

  pull: 'pull',
  push: 'push',
  ...mobileRouterName,
};

const defaultRoutes: RouteRecordRaw[] = [
// export default createRouter({
//     history: createWebHistory("/"),
//     routes: [
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
      // {
      //     path: '/social/callback',
      //     component: () => import('@/views/login/social/socialIndex.vue'),
      //     meta: { hidden: true }
      // },
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
      }, {
        path: '/friends',
        name: 'friends',
        component: Friends,
      },
      {
        path: '/user/:id',
        name: 'user',
        component: User,
      },
      {
        path: '/chat',
        name: 'chat',
        component: Chat,
      },
      {
        path: '/channels',
        name: 'channels',
        component: Channels,
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
        path: '/release',
        name: 'release',
        component: () => import('@/views/Edit/index.vue')
      },
      {
        path: '/post',
        name: 'post',
        component: () => import('@/views/postView/index.vue')
      },
      //live
      {
        path: '/live',
        name: 'live',
        component: Live,
      },
      {
        name: routerName.rank,
        path: '/rank',
        component: () => import('@/views/live-moudle/pc/rank/index.vue'),
      },
      {
        name: routerName.shop,
        path: '/shop',
        component: () => import('@/views/live-moudle/shop/index.vue'),
      },
      {
        name: routerName.profile,
        path: '/profile/:userId',
        component: () => import('@/views/live-moudle/pc/profile/index.vue'),
      },
      {
        name: routerName.wallet,
        path: '/wallet',
        component: () => import('@/views/live-moudle/wallet/index.vue'),
      },
      {
        name: routerName.order,
        path: '/order',
        component: () => import('@/views/live-moudle/order/index.vue'),
      },
      {
        name: routerName.pull,
        path: '/pull/:roomId',
        component: () => import('@/views/live-moudle/pull/index.vue'),
      },
      {
        name: routerName.push,
        path: '/push',
        component: () => import('@/views/live-moudle/push/index.vue'),
      },
      {
        path: '/tool/generator',
        name: 'generator',
        component: () => import('@/views/tool/generator/index.vue'),
      }
    ]
  },
  {
    path: '/h5',
    component: MobileLayout,
    children: [
      {
        name: mobileRouterName.h5,
        path: '',
        component: () => import('@/views/live-moudle/h5/index.vue'),
      },
      {
        name: mobileRouterName.h5Area,
        path: 'area/:id',
        component: () => import('@/views/live-moudle/h5/area/index.vue'),
      },
      {
        name: mobileRouterName.h5Rank,
        path: 'rank',
        component: () => import('@/views/live-moudle/h5/rank/index.vue'),
      },
      {
        name: mobileRouterName.h5Profile,
        path: 'profile',
        component: () => import('@/views/live-moudle/h5/profile/index.vue'),
      },
    ],
  },
  {
    name: mobileRouterName.h5Room,
    path: '/h5/:roomId',
    component: () => import('@/views/live-moudle/h5/room/index.vue'),
  },
  // {
  //   name: routerName.oauth,
  //   path: '/oauth',
  //   component: () => import('@/views/oauth/index.vue'),
  // },
];

const router = createRouter({
  routes: [
    ...defaultRoutes,
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: routerName.notFound,
    //   component: () => import('@/views/notFound.vue'),
    // },
  ],
  history: createWebHistory(),
});
router.beforeEach((to, from, next) => {
  if (to.name === routerName.oauth) {
    return next();
  }
  if (Object.keys(commonRouterName).includes(to.name as string)) {
    // 跳转通用路由
    return next();
  } else if (isMobile() && !isIPad()) {
    if (!Object.keys(mobileRouterName).includes(to.name as string)) {
      // 当前移动端，但是跳转了非移动端路由
      console.log('当前移动端，但是跳转了非移动端路由', to, from);
      if (to.name === routerName.pull) {
        return next({
          name: mobileRouterName.h5Room,
          params: {roomId: to.params.roomId},
          query: {...to.query},
        });
      } else {
        return next({
          name: mobileRouterName.h5,
        });
      }
    } else {
      return next();
    }
  } else {
    if (Object.keys(mobileRouterName).includes(to.name as string)) {
      // 当前非移动端，但是跳转了移动端路由
      console.log('当前非移动端，但是跳转了移动端路由');
      if (to.name === mobileRouterName.h5Room) {
        // 有可能是原生webrtc或srs-webrtc
        return next({
          name: routerName.home,
        });
      } else {
        return next({
          name: routerName.home,
        });
      }
    }
    return next();
  }
});

export default router;
