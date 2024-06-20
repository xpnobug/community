<script lang="ts" setup>
import {logout} from "@/api/user";
import {message} from "ant-design-vue";
//获取用户信息
const props = defineProps(['user'])

//注销
const userLogout = () => {
  logout().then(res => {
    if (res.status === 200) {
      const key = 'updatable';
      message.loading({ content: '注销中...', key });
      setTimeout(() => {
        //清除缓存中的userId
        localStorage.removeItem('userId')
        message.success({ content: '注销成功!', key, duration: 2 });
        // 登录成功后跳转到首页
        window.location.href = '/login';
      }, 1000);
    }
  })
}
</script>

<template>
  <div class="dropdown-navigation snipcss-Yc4YV" style="width: auto;">
    <div class="dropdown-navigation-header">
      <div class="user-status" style="font-size: 1rem;">
        <div class="xm-header user-avatar" online=""
             style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; position: absolute; top: 0px; left: 0px;">
          <div class="xm-avatar" style="width: 44px; height: 44px; padding: 6.4px;"><img
              :src="props.user.avatar"
              alt="头像"
              class=""
              style="border-radius: 50%;"></div>
          <svg style="width: 44px; height: 44px;" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="svgb281230d-24a6-44f9-9b1c-017d8f8df235" x1="0%" x2="100%" y1="0%"
                              y2="0%">
                <stop offset="0%"></stop>
                <stop offset="100%"></stop>
              </linearGradient>
            </defs>
            <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0"
                  stroke="#e9e9f0" stroke-width="8"></path>
            <path :style="{strokeDasharray: props.user.exp +',287'}"
                  d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0" stroke="url(#svgb281230d-24a6-44f9-9b1c-017d8f8df235)"
                  stroke-width="8"></path>
          </svg>
          <div class="xm-level"
               style="box-sizing: content-box; font-size: 10.8px; width: 18px; height: 18px; border: 1px solid rgb(255, 255, 255);">
            <span style="display: block;"> {{ props.user.level }} </span></div>
        </div>
        <div
            style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: bolder;"><span
        > {{ props.user.username }} </span></div>
        <p class="text-long-ellipsis"
           style="font-size: 0.85rem; margin-top: 4px; word-break: break-all;"></p>
      </div>
    </div>
    <div class="dropdown-navigation-content">
      <div class="dropdown-navigation-box">
        <div class="dropdown-navigation-category">个人</div>
        <a class="dropdown-navigation-link" href="/user/info">我的发布</a>
        <a class="dropdown-navigation-link" href="/user/info">我的信息</a>
<!--        <a class="dropdown-navigation-link">消息通知</a>-->
<!--        <a class="dropdown-navigation-link">邀请注册</a>-->
      </div>
      <div class="dropdown-navigation-box">
        <div class="dropdown-navigation-category">帐号安全</div>
        <a class="dropdown-navigation-link">帐号信息</a> <a class="dropdown-navigation-link"
      >修改密码</a>
      </div>
<!--      <div class="dropdown-navigation-box">-->
<!--        <div class="dropdown-navigation-category">钱包</div>-->
<!--        <a class="dropdown-navigation-link">账单明细</a> <a class="dropdown-navigation-link"-->
<!--      >积分明细</a>-->
<!--      </div>-->
<!--      <div class="dropdown-navigation-box">-->
<!--        <div class="dropdown-navigation-category">版块</div>-->
<!--        <a class="dropdown-navigation-link">我加入的</a> <a class="dropdown-navigation-link"-->
<!--      >邀请信息</a> <a-->
<!--          class="dropdown-navigation-link">申请信息</a>-->
<!--      </div>-->
<!--      <div class="dropdown-navigation-box">-->
<!--        <div class="dropdown-navigation-category">学堂</div>-->
<!--        <a class="dropdown-navigation-link">我的订阅</a> <a class="dropdown-navigation-link"-->
<!--      >我的收藏</a>-->
<!--      </div>-->
      <div class="dropdown-navigation-box">
        <div class="dropdown-navigation-category">积分</div>
        <a class="dropdown-navigation-link" href="/task">我的积分</a> <a class="dropdown-navigation-link"
      >任务中心</a>
      </div>
<!--      <div class="dropdown-navigation-box"></div>-->
    </div>
    <button class="dropdown-navigation-button buttons ant-btn ant-btn-sm" type="button" @click="userLogout"><span>退 出</span></button>
  </div>
</template>


<style scoped>
.dropdown-navigation {
  width: 220px;
  padding: 20px 28px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 3px 5px 40px 0 rgba(94, 92, 154, 0.06);
}

.dropdown-navigation {
  overflow: auto;
}

*, :before, :after {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

:before, :after {
  display: block;
}

*, :after, :before {
  box-sizing: border-box;
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

:selection {
  background-color: #337fff;
}

.dropdown-navigation:-webkit-scrollbar {
  height: 0;
  width: 0;
}

.dropdown-navigation-content {
  display: flex;
  flex-wrap: wrap;
  width: 280px;
}

button {
  font-family: "Rajdhani", sans-serif;
}

button {
  border-radius: 0;
}

button {
  touch-action: manipulation;
}

button {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

button {
  overflow: visible;
}

button {
  text-transform: none;
}

[type="button"], button {
  -webkit-appearance: button;
}

.ant-btn {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, .65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
}

.ant-btn {
  outline: 0;
}

.ant-btn-sm {
  height: 24px;
  padding: 0 7px;
  font-size: 14px;
  border-radius: 4px;
}

button, [type="button"] {
  -webkit-appearance: button;
}

.dropdown-navigation .dropdown-navigation-button {
  width: 100%;
  margin-top: 20px;
}

[type="button"]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}

.buttons {
  height: 48px;
  font-size: .875rem;
  font-weight: 700;
  line-height: 48px;
  border-radius: 10px;
  text-align: center;
}

.ant-btn:before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 1;
  display: none;
  background: #fff;
  border-radius: inherit;
  opacity: .35;
  transition: opacity .2s;
  content: "";
  pointer-events: none;
}

.ant-btn:hover {
  color: #40a9ff;
  background-color: #fff;
  border-color: #40a9ff;
}

.ant-btn:active, .ant-btn:hover {
  text-decoration: none;
  background: #fff;
}

.ant-btn:not([disabled]):hover {
  text-decoration: none;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.dropdown-navigation-content .dropdown-navigation-box {
  width: 80px;
  margin-left: 20px;
}

.dropdown-navigation-content .dropdown-navigation-box:nth-child(3n + 1) {
  margin-left: 0;
}

.ant-btn > span {
  display: inline-block;
  transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);
  pointer-events: none;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
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

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.dropdown-navigation .dropdown-navigation-category {
  margin: 20px 0 10px;
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
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

.dropdown-navigation-link {
  color: #3e3f5e;
}

.dropdown-navigation-link {
  width: fit-content;
  cursor: pointer;
}

.dropdown-navigation .dropdown-navigation-link {
  display: block;
  padding: 8px 0;
  font-size: 0.875rem;
  font-weight: 700;
  transition: padding .2s ease-in-out, color .2s ease-in-out;
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

.dropdown-navigation-link:hover {
  color: #337FFF !important;
}

.dropdown-navigation .dropdown-navigation-link:hover {
  padding-left: 4px;
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

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #337fff;
}
</style>