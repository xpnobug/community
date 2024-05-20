<template>
  <div class="left-menu-style">
    <el-menu
        :collapse="djValueSet"
        :mode="menuPmView === false ? 'horizontal' : 'vertical'"
        class="el-menu-vertical-demo"
        default-active="1"
        @close="handleClose"
        @open="handleOpen"
    >
      <div class="is-showCard">
        <div v-if="userInfo !== null" :style="djValueSet === false ?'width: 300px':'padding-left: 10px;'"
             class="simplebar-content snipcss-WosQN">
          <figure v-show="djValueSet === false"
                  :style="{background: 'url('+userInfo.userCover+') center center / cover no-repeat rgb(255, 255, 255)'}"
                  class="navigation-widget-cover"

          >
            <img
                :src="userInfo.userCover"
                alt="图片"

                style="display: none;"></figure>
          <div class="user-short-description" style="">
            <div :style="djValueSet === false ?
          'width:110px;height:110px;border:11px solid #fff;cursor:pointer;border-radius:50%;display:block;margin-left:-70px;':
          'width: 55px; height: 55px; top:30px; margin-left:-33px;'"
                 class="xm-header user-avatar user-short-description-avatar navigation-widget-close"
            >
              <div :style="djValueSet === false ? 'padding:13px':'padding:10px'" class="xm-avatar"><img
                  :src="userInfo.avatar" alt="头像"
                  class=""
                  style="border-radius: 50%;">
              </div>
              <svg :style="djValueSet === false ? 'width:110px;height:110px;':'width:55px;height:55px;'"
                   viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="svg84fab083-c425-4697-a768-90ba4d0b4d59" x1="0%" x2="100%"
                                  y1="0%"
                                  y2="0%">
                    <stop offset="0%"></stop>
                    <stop offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0"
                      stroke="#e9e9f0" stroke-width="8"></path>
                <path :style="[{strokeDasharray: userInfo.exp + ',287'}]"
                      d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0"
                      stroke="url(#svg84fab083-c425-4697-a768-90ba4d0b4d59)" stroke-width="8"></path>
              </svg>
              <div :style="djValueSet === false ? 'box-sizing:content-box;font-size:16.5px;width:27.5px;height:27.5px;border:3px solid #fff;':
                 'width:20.5px;height:20.5px'"
                   class="xm-level"
              ><span
                  style="display:block">{{ userInfo.level }}</span></div>
            </div>
            <p v-show="djValueSet === false" class="user-short-description-title navigation-widget-close"
            ><a href="JavaScript:;" style="color:;"> {{ userInfo.username }} </a>
            </p>
            <p class="user-short-description-text navigation-widget-close"><a
                href="JavaScript:;">
            </a></p>
          </div>
          <div v-show="djValueSet === false" class="user-stats" style="">
            <div class="user-stat">
              <p class="user-stat-title">0</p>
              <p class="user-stat-text">帖子</p>
            </div>
            <div class="user-stat">
              <p class="user-stat-title">3</p>
              <p class="user-stat-text">关注</p>
            </div>
            <div class="user-stat">
              <p class="user-stat-title">0</p>
              <p class="user-stat-text">粉丝</p>
            </div>
          </div>
        </div>
      </div>

      <el-menu-item v-for="item in menuItems" :key="item.id" :index="item.id" @click="handleMenuItemClick(item)">
<!--        <el-icon>-->
<!--          <icon-menu/>-->
<!--        </el-icon>-->
        <template #title>{{ item.label }}</template>
      </el-menu-item>
    </el-menu>
    <div class="right-content-style">
      <RouterView/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, ref} from 'vue'
// import {Menu as IconMenu} from '@element-plus/icons-vue'
import {RouterView, useRouter} from 'vue-router';
//定义变量
const menuPmView = ref();
const djValueSet = ref(false);
const instance = getCurrentInstance()
const router = useRouter();
//导航菜单动态加载
const menuItems = ref([
  {id: "1", label: '首页', url: '/index', expanded: false},
  {id: "2", label: '社区', url: '/dynamic', expanded: false},
  {id: "3", label: '用户版块', url: '/members', expanded: false},
  {id: "5", label: '频道', url: '/pages/aboutus', expanded: false},
]);
//点击按钮监听事件
instance?.proxy?.$Bus.on("djValue", (param) => {
  djValueSet.value = param;
})
//屏幕大小钮监听事件 true :pc false:mobile
instance?.proxy?.$Bus.on("pmView", (param) => {
  menuPmView.value = param;
})
//获取登录人信息
const userInfo = ref({});
instance?.proxy?.$Bus.on("userInfo", (param: any) => {
  userInfo.value = param;
})

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

const handleMenuItemClick = (item: any) => {
  const routeName = item.label; // 使用菜单项的name属性作为路由名称
  router.push({path: item.url})
  // console.log(routeName, item.url)
};

</script>

<style scoped>
:root {
  --menu-bg-color: #337fff;
}

.left-menu-style {
  display: flex;
  width: 100%;
  height: 100%;
}

.right-content-style {
  width: 100%;
  /*height: 100%;*/
  background-color: var(--global-bg);
  display: flex;
  justify-content: center;
}

.el-menu-vertical-demo {
  position: fixed;
  height: 100%;
  border: none;
  /*background-color: #ffffff;*/
  background-color: var(--reaicc-leftnav-bg);
  box-shadow: 0 0 10px 0 rgba(94, 92, 154, 0.06);
  /*transition-delay: .25s;*/
  padding-top: 50px;
  overflow-y: visible;
}

.el-menu-vertical-demo .el-menu-item {
  color: var(--reaicc-menu-active-color);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {

  .left-menu-style {
    display: block;
  }

  .el-menu-item .el-menu-tooltip__trigger {
    top: 5px;
    left: -11px;
  }

  .el-menu-vertical-demo {
    height: 12% !important;
    width: 100% !important;
    z-index: 1;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 0;
    height: 0;
  }

  .right-content-style {
    display: block;
    /*width: 83%;*/
  }

  .is-showCard{
    display: none;
  }
}


.simplebar-content:before, .simplebar-content:after {
  content: ' ';
  display: table;
}

:selection {
  color: #fff;
  background-color: #23d2e2;
}

:selection {
  color: #fff;
  background: #1890ff;
}

:selection {
  background-color: #337fff;
}

figure {
  margin: 0;
}

figure {
  margin: inherit !important;
}

figure {
  display: block;
}

figure {
  margin: 0 0 1rem;
}

figure {
  margin: 0 0 1em;
}

.navigation-widget-cover {
  width: 100%;
  height: 76px;
}

:selection {
  background-color: #337fff;
}

:selection {
  background-color: #337fff;
}

.user-short-description {
  padding-top: 84px;
  position: relative;
}

.user-stats {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.user-stats {
  margin-top: 44px;
  margin-bottom: 44px;
}

ul {
  list-style: none;
}

ul {
  margin: 0;
}

ul {
  margin-bottom: 1rem;
}

ul {
  margin-top: 0;
  margin-bottom: 1em;
}

.menu {
  margin-top: 60px;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

figure > img {
  width: 100%;
  height: 100%;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.user-short-description .user-short-description-avatar {
  position: absolute;
  top: -54px;
  left: 50%;
  margin-left: -60px;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

:selection {
  background-color: #337fff;
}

p {
  margin: 0;
}

p {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

p {
  margin-bottom: 0 !important;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

.user-short-description .user-short-description-title {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-title {
  font-size: 1.125rem;
}

.user-short-description .user-short-description-text {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
}

.user-stat {
  padding: 0 24px;
}

.user-stats .user-stat {
  position: relative;
}

.user-stats .user-stat::after {
  content: '';
  width: 1px;
  height: 20px;
  background-color: #eaeaf5;
  position: absolute;
  top: 6px;
  right: 0;
}

.user-stats .user-stat:last-child::after {
  display: none;
}

.menu .menu-item {
  padding: 0 8px;
  margin-bottom: 10px;
}

.menu .menu-item:last-child {
  margin-bottom: 0;
}

.xm-avatar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

svg:not(:root) {
  overflow: hidden;
}

.xm-level {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #0051d4;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
}

a {
  text-decoration: none;
}

a {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

a {
  text-decoration: none !important;
  background-color: transparent;
}

a {
  color: #007bff;
}

a {
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .3s;
  -webkit-text-decoration-skip: objects;
}

a {
  touch-action: manipulation;
}

p a {
  color: #00c7d9;
  font-weight: 600;
}

.user-short-description .user-short-description-title a {
  color: #3e3f5e;
  font-weight: 700;
}

a:hover {
  color: #00c7d9;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:hover {
  color: #40a9ff;
}

a:active, a:hover {
  text-decoration: none;
  outline: 0;
}

.user-short-description .user-short-description-text a {
  color: #adafca;
  font-weight: 700;
}

.user-short-description .user-short-description-text a:hover {
  color: #00c7d9;
}

.user-short-description .user-short-description-text a:hover {
  color: #337fff;
}

.user-stat .user-stat-title {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-title {
  font-size: 0.875rem;
}

.user-stat .user-stat-text {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
}

.menu .menu-item .menu-item-link {
  display: block;
  height: 48px;
  padding-left: 62px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 48px;
  position: relative;
  transition: all .2s ease-in-out;
}

.menu .menu-item .menu-item-link {
  color: #3e3f5e;
}

.menu .menu-item .menu-item-link:hover {
  background-color: #fff;
  color: #3e3f5e;
  padding-left: 70px;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, 0.12);
}

.menu .menu-item.active .menu-item-link {
  color: #fff;
  background-color: #23d2e2;
  box-shadow: 4px 7px 12px 0 rgba(35, 210, 226, 0.2);
}

.menu .menu-item.active .menu-item-link {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
  background-color: #337fff;
}

.menu .menu-item.active .menu-item-link {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
  background-color: #337fff;
}

.menu .menu-item.active .menu-item-link:hover {
  background-color: #23d2e2;
  color: #fff;
  padding-left: 62px;
  box-shadow: 4px 7px 12px 0 rgba(35, 210, 226, 0.2);
}

.menu .menu-item.active .menu-item-link:hover {
  background-color: #337fff;
}

.menu .menu-item.active .menu-item-link:hover {
  background-color: #337fff;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.icon-newsfeed {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.menu .menu-item .menu-item-link .menu-item-link-icon {
  position: absolute;
  top: 14px;
  left: 14px;
  pointer-events: none;
  transition: all .2s ease-in-out;
}

.icon-overview {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-forum {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-group {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-members {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-profile {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.menu .menu-item.active .menu-item-link .menu-item-link-icon {
  fill: #fff;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #337fff;
}


</style>
