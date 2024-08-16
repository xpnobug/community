<script setup lang="ts">
import {getCurrentInstance, ref} from "vue";
import {useRouter} from "vue-router";
import {getStatisticsById} from "@/api/statistics";
import {useDefer} from "@/hooks/useDefer.js";
import {isLogin} from '@/utils/auth'
import {useUserStore} from "@/store";

//定义变量
const menuPmView = ref();
const djValueSet = ref(true);
const instance = getCurrentInstance()
const router = useRouter();
const defer = useDefer();

instance?.proxy?.$Bus.on("djValue", (param) => {
  djValueSet.value = param;
})
//屏幕大小钮监听事件 true :pc false:mobile
instance?.proxy?.$Bus.on("pmView", (param) => {
  menuPmView.value = param;
})
//获取登录人信息
const userInfo = ref({});
const statistics = ref({});
const userStore = useUserStore();
userInfo.value = userStore.userInfo;
console.log(userInfo.value)
getStatisticsById(localStorage.getItem("userId")).then(res => {
  statistics.value = res.data.data;
});


const toUserInfo = (item: any) => {
  router.push({path: '/user/' + item.userId})
}

</script>

<template>
  <!-- 用户信息 -->
  <div class="is-showCard">
    <div  v-show="isLogin()" class="simplebar-content">
      <figure
              :style="{background: 'url('+userInfo.userCover+') center center / cover no-repeat rgb(255, 255, 255)'}"
              class="navigation-widget-cover">
        <img
            :src="userInfo.userCover"
            alt="图片"
            style="display: none;"></figure>
      <div class="user-short-description" style="">
        <div :style="djValueSet?
          'width:110px;height:110px;border:11px solid #fff;cursor:pointer;border-radius:50%;display:block;margin-left:-70px;':
          'width: 55px; height: 55px; top:30px; margin-left:-33px;'"
             class="xm-header user-avatar user-short-description-avatar navigation-widget-close"
        >
          <div @click="toUserInfo(userInfo)" :style="djValueSet ? 'padding:13px':'padding:8px'" class="xm-avatar">
                            <img
                                :src="userInfo.avatar" alt="头像"
                                class=""
                                style="border-radius: 50%;width: 84px;">
            <!--              sm: 32, md: 40, lg: 64, xl: 80, xxl: 85-->
<!--            <a-avatar :size="djValueSet ? { lg: 85,xxl: 86 } : { lg: 40,xxl: 40 }" :src="userInfo.avatar"></a-avatar>-->
          </div>
          <svg :style="djValueSet ? 'width:110px;height:110px;':'width:55px;height:55px;'"
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
          <div :style="djValueSet ? 'box-sizing:content-box;font-size:16.5px;width:27.5px;height:27.5px;border:3px solid #fff;':
                 'width:20.5px;height:20.5px'"
               class="xm-level"
          ><span
              style="display:block">{{ userInfo.level }}</span></div>
        </div>
        <p  @click="toUserInfo(userInfo)"  class="user-short-description-title navigation-widget-close"
        >
          <a href="JavaScript:;" style="color:red;"> {{ userInfo.nickName }} </a>
        </p>
      </div>
      <div v-show="djValueSet" class="user-stats" style="">
        <div class="user-stat">
          <p class="user-stat-title">{{ statistics.publishArticleCount }}</p>
          <p class="user-stat-text">帖子</p>
        </div>
        <div class="user-stat">
          <p class="user-stat-title">{{ statistics.followCount }}</p>
          <p class="user-stat-text">关注</p>
        </div>
        <div class="user-stat">
          <p class="user-stat-title">{{ statistics.fansCount }}</p>
          <p class="user-stat-text">粉丝</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/*-----------------*/
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
  margin-top: 20px;
/*  margin-bottom: 10px;*/
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

.shell {
  width: 100px;
  /*height: 93%;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(17, 24, 39);
  border-radius: 10px;
  transition: .3s;
  overflow: hidden;

  position: fixed;
  margin: 55px 0;
  z-index: 1;
}

.box {
  display: block;
  height: 5rem;
  width: 85%;
  /*margin: 9px;*/
  border-radius: 5px;
  position: relative;
  transition: .3s;
  color: rgb(160, 160, 175);
}
.box i {
  font-size: 30px;
  position: absolute;
  margin: 25px 0 0 25px;
}

.box:nth-child(1)::before,
.box:last-child::before {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(55, 65, 81);
  position: absolute;
  bottom: -10px;
}

.box span{
  position: relative;
  top: 30px;
  left: 80px;
  /*font: 500 20px '';*/
  opacity: 0;
  transition: .1s;
}
.shell:hover{
  width: 270px;
}
.box:hover{
  background-color: rgb(55, 65, 81);
}
.shell:hover span{
  opacity: 1;
}
.box:hover{
  color: #fff;
}

.shell:nth-child(2) {
  background-color: var(--reaicc-meta-theme-post-color);;
}
.shell:nth-child(2) .box:hover{
  background-color: rgb(209, 213, 219);
  color: var(--reaicc-nav-bg);
}
.shell:nth-child(2) .box{
  color: var(--reaicc-fontcolor);;
}

.shell:nth-child(2) .active{
  background-color: rgb(209, 213, 219);
  color: var(--reaicc-nav-bg);
}

.shell:nth-child(3) {
  background-color: rgb(49,46,129);
}
.shell:nth-child(3) .box:hover{
  background-color: rgb(67, 56, 202);
}
.shell:nth-child(3) .box{
  color: rgb(140, 120, 240);
}
</style>