
<script setup lang="ts">
import { ref } from 'vue'
import MyInfo from "@/views/userSetting/compontents/MyInfo.vue";
import MyPushPost from "@/views/userSetting/compontents/MyPushPost.vue";
const menuList = ref([
  {id: "1", label: '我的发布'},
  {id: "2", label: '我的信息'},
  {id: "3", label: '消息通知'},
  {id: "4", label: '邀请注册'},
]);
const menuId = ref("1");
const handleMenu = (value: any) => {
  menuId.value = value.id
}
</script>

<template>
  <div class="content-grid snipcss0-1-1-433"
       style="width: 100%; transform: translate(253.5px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="snipcss-134kU">
      <div class="section-banner"
           style="background: url(&quot;https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/708dc9521e44ae71738a97e18d4bdae8.png?imageMogr2/crop/2368x320/gravity/center&quot;) center center / cover no-repeat; cursor: default;">
        <p class="section-banner-title"></p>
        <p class="section-banner-text"></p>
      </div>
      <div class="grid grid-3-9 medium-space">
        <div>
          <div class="account-hub-sidebar">
            <div class="sidebar-box no-padding">
              <div class="sidebar-menu round-borders">
                <div class="sidebar-menu-item">
                  <div class="sidebar-menu-header accordion-trigger-linked">
                    <svg class="sidebar-menu-header-icon icon-profile">
                      <use xlink:href="#svg-profile"></use>
                    </svg>
                    <div class="sidebar-menu-header-control-icon">
                      <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                        <use xlink:href="#svg-minus-small"></use>
                      </svg>
                      <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                        <use xlink:href="#svg-plus-small"></use>
                      </svg>
                    </div>
                    <p class="sidebar-menu-header-title">个人</p>
                    <p class="sidebar-menu-header-text">管理发布内容，修改个人消息，管理消息通知</p>
                  </div>
                  <div style="overflow: hidden; height: 161px; transition: all 0.3s ease-in-out 0s;">
                    <div class="sidebar-menu-body accordion-content-linked accordion-open">
                      <a :class="item.id=== menuId ? 'sidebar-menu-link active' : 'sidebar-menu-link'"
                         v-for="item in menuList"
                         @click="handleMenu(item)"
                      >{{ item.label }}</a>
                    </div>
                  </div>
                </div>
                <div class="sidebar-menu-item" style="display: none;">
                  <div class="sidebar-menu-header accordion-trigger-linked">
                    <svg class="sidebar-menu-header-icon icon-settings">
                      <use xlink:href="#svg-settings"></use>
                    </svg>
                    <div class="sidebar-menu-header-control-icon">
                      <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                        <use xlink:href="#svg-minus-small"></use>
                      </svg>
                      <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                        <use xlink:href="#svg-plus-small"></use>
                      </svg>
                    </div>
                    <p class="sidebar-menu-header-title">帐号</p>
                    <p class="sidebar-menu-header-text">帐号安全相关设置，密码修改，第三方帐号管理</p>
                  </div>
                  <div style="overflow: hidden; height: 0px; transition: all 0.3s ease-in-out 0s;">
                    <div class="sidebar-menu-body accordion-content-linked"><a
                        class="sidebar-menu-link">帐号信息</a> <a class="sidebar-menu-link"
                    >修改密码</a></div>
                  </div>
                </div>
                <div class="sidebar-menu-item" style="display: none;">
                  <div class="sidebar-menu-header accordion-trigger-linked">
                    <svg class="sidebar-menu-header-icon icon-group">
                      <use xlink:href="#svg-group"></use>
                    </svg>
                    <div class="sidebar-menu-header-control-icon">
                      <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                        <use xlink:href="#svg-minus-small"></use>
                      </svg>
                      <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                        <use xlink:href="#svg-plus-small"></use>
                      </svg>
                    </div>
                    <p class="sidebar-menu-header-title">版块</p>
                    <p class="sidebar-menu-header-text">创建新组，管理您创建的组或接受邀请!</p>
                  </div>
                  <div style="overflow: hidden; height: 0px; transition: all 0.3s ease-in-out 0s;">
                    <div class="sidebar-menu-body accordion-content-linked"><a
                        class="sidebar-menu-link" style="display:none;">我管理的</a> <a
                        class="sidebar-menu-link">我加入的</a> <a class="sidebar-menu-link"
                    >邀请信息</a> <a
                        class="sidebar-menu-link">申请信息</a></div>
                  </div>
                </div>
                <div class="sidebar-menu-item" style="display: none;">
                  <div class="sidebar-menu-header accordion-trigger-linked">
                    <svg class="sidebar-menu-header-icon icon-group">
                      <use xlink:href="#svg-dollar"></use>
                    </svg>
                    <div class="sidebar-menu-header-control-icon">
                      <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                        <use xlink:href="#svg-minus-small"></use>
                      </svg>
                      <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                        <use xlink:href="#svg-plus-small"></use>
                      </svg>
                    </div>
                    <p class="sidebar-menu-header-title">钱包</p>
                    <p class="sidebar-menu-header-text">查看积分、余额等账单明细，激活后可以进行支付操作</p>
                  </div>
                  <div style="overflow: hidden; height: 0px; transition: all 0.3s ease-in-out 0s;">
                    <div class="sidebar-menu-body accordion-content-linked"><a
                        class="sidebar-menu-link">钱包概览</a> <a class="sidebar-menu-link"
                    >账单明细</a> <a
                        class="sidebar-menu-link">提现记录</a> <a class="sidebar-menu-link"
                    >钱包设置</a> <a
                        class="sidebar-menu-link">积分明细</a></div>
                  </div>
                </div>
                <div class="sidebar-menu-item" style="display: none;">
                  <div class="sidebar-menu-header accordion-trigger-linked">
                    <svg class="sidebar-menu-header-icon icon-profile">
                      <use xlink:href="#svg-profile"></use>
                    </svg>
                    <div class="sidebar-menu-header-control-icon">
                      <svg class="sidebar-menu-header-control-icon-open icon-minus-small">
                        <use xlink:href="#svg-minus-small"></use>
                      </svg>
                      <svg class="sidebar-menu-header-control-icon-closed icon-plus-small">
                        <use xlink:href="#svg-plus-small"></use>
                      </svg>
                    </div>
                    <p class="sidebar-menu-header-title">学堂</p>
                    <p class="sidebar-menu-header-text">查看、管理我已订阅的课程，我收藏的课程</p>
                  </div>
                  <div style="overflow: hidden; height: 0px; transition: all 0.3s ease-in-out 0s;">
                    <div class="sidebar-menu-body accordion-content-linked"><a
                        class="sidebar-menu-link">我的订阅</a> <a class="sidebar-menu-link"
                    >我的收藏</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyInfo />
        <MyPushPost />
      </div>
    </div>
  </div>
</template>


<style scoped>
@media screen and (min-width: 1366px) {
  .content-grid {
    margin: auto;
    transform: none !important;
  }
}

.content-grid {
  max-width: 1184px;
  /*padding: 54px 0 32px;*/
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

.section-banner {
  min-height: 160px;
  padding: 52px 60px 0 200px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
}

.grid {
  /*display: grid;*/
  /*grid-template-columns: 100%;*/
  /*grid-gap: 16px;*/
  -ms-flex-align: start;
  align-items: start;
}

.grid {
  margin-top: 32px;
}

.grid.grid-3-9 {
  grid-template-areas: 'sidebar content';
  /*grid-template-columns: 23.9864864865% 74.6621621622%;*/
}

.grid.medium-space {
  margin-top: 64px;
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

.section-banner .section-banner-title {
  color: #fff;
}

.section-banner .section-banner-title {
  font-size: 2.25rem;
  font-weight: 700;
}

.section-banner .section-banner-text {
  color: #fff;
}

.section-banner .section-banner-text {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
}

:selection {
  background-color: #337fff;
}

.section-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.section-header {
  margin-top: 60px;
}

.account-hub-content .section-header {
  margin-bottom: 28px;
}

.account-hub-content .section-header:first-child {
  margin-top: 0;
}

.grid .grid-column {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  min-width: 0;
}

.sidebar-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
}

.sidebar-box.no-padding {
  padding: 0;
}

.grid.centered {
  -ms-flex-pack: center;
  justify-content: center;
}

.grid.grid-3-3-3 {
  grid-template-columns: repeat(auto-fit, 284px);
}

.grid .grid {
  margin-top: 0;
}

.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
}

.button-box {
  display: flex;
  justify-content: flex-end;
}

.section-header-info .section-pretitle {
  color: #8f91ac;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

h2 {
  margin: 0;
}

h2 {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

h2 {
  font-weight: 700;
}

h2 {
  margin-bottom: .5rem;
}

h2 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
}

h2 {
  margin-top: 0;
  margin-bottom: .5em;
  color: rgba(0, 0, 0, .85);
  font-weight: 500;
}

.section-header-info .section-title {
  margin-top: 8px;
  font-size: 1.625rem;
  font-weight: 700;
}

.user-preview {
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  cursor: pointer;
}

.small {
  font-size: 80%;
  font-weight: 400;
}

.user-preview.fixed-height {
  height: 140px;
}

.upload-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  height: 140px;
  padding-top: 32px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  cursor: pointer;
  transition: box-shadow .25s ease-in-out, -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out, box-shadow .25s ease-in-out;
  transition: transform .2s ease-in-out, box-shadow .25s ease-in-out, -webkit-transform .2s ease-in-out;
}

.upload-box {
  position: relative;
}

.upload-box:hover {
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.12);
  -webkit-transform: translate(0, -4px);
  transform: translate(0, -4px);
}

.widget-box .widget-box-content {
  margin-top: 36px;
}

.widget-box .widget-box-content:first-child {
  margin-top: 0;
}

button {
  font-family: "Rajdhani", sans-serif;
}

button {
  border-radius: 0;
}

button {
  -webkit-appearance: button;
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

.button {
  display: inline-block;
  height: 48px;
  border-radius: 10px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  transition: background-color .2s ease-in-out, color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
  box-shadow: 3px 5px 10px 0 rgba(62, 63, 94, 0.2);
}

button:not(:disabled) {
  cursor: pointer;
}

.button {
  width: 160px;
  height: 48px;
  background: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
}

.button:hover {
  color: #fff;
  background-color: #2e2e47;
}

.button.cancel:hover {
  color: #fff !important;
  background-color: #fe5b5a !important;
}

.button.cancel:hover {
  color: #fff !important;
  background-color: #fe5b5a !important;
}

.sidebar-menu-item {
  border-bottom: 1px solid #eaeaf5;
}

.sidebar-menu .sidebar-menu-item:last-child {
  border-bottom: none;
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

.user-preview .user-preview-cover {
  height: 96px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
}

.user-preview.small .user-preview-cover {
  height: 70px;
}

.user-preview .user-preview-info {
  padding: 0 28px 32px;
  position: relative;
}

input {
  height: 54px;
  padding: 0 18px;
}

input {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

input {
  overflow: visible;
}

input:not([type="range"]) {
  touch-action: manipulation;
}

.upload {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: initial;
  padding: initial;
  opacity: 0;
}

.upload {
  cursor: pointer;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-members {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

svg:not(:root) {
  overflow: hidden;
}

.upload-box .upload-box-icon {
  fill: #adafca;
  transition: fill .25s ease-in-out;
}

.upload-box .upload-box-title {
  margin-top: 26px;
  font-size: 0.875rem;
  font-weight: 700;
}

.upload-box .upload-box-text {
  margin-top: 4px;
  color: #8f91ac;
  font-size: 0.75rem;
  font-weight: 500;
}

.icon-photos {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.form {
  width: 100%;
}

.sidebar-menu-header {
  height: 112px;
  padding: 28px 26px 0 60px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
}

.sidebar-menu .sidebar-menu-item:first-child .sidebar-menu-header {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.sidebar-menu.round-borders .sidebar-menu-item:last-child .sidebar-menu-header {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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

.user-short-description {
  padding-top: 84px;
  position: relative;
}

.user-short-description.small {
  padding-top: 62px;
}

.user-short-description {
  width: 99px;
  height: 99px;
  background: #fff;
  border-radius: 50%;
  margin-top: -49.5px;
  margin-left: 64.5px;
}

.form-row {
  margin: 0;
}

.form-row {
  width: 100%;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row.split {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.form-row + .form-row {
  margin-top: 28px;
}

.icon-profile {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.sidebar-menu-header .sidebar-menu-header-icon {
  fill: #23d2e2;
  position: absolute;
  top: 28px;
  left: 28px;
}

.sidebar-menu-header .sidebar-menu-header-icon {
  fill: #337fff;
}

.sidebar-menu-header .sidebar-menu-header-title {
  font-size: 1rem;
  font-weight: 700;
}

.sidebar-menu-header .sidebar-menu-header-text {
  margin-top: 4px;
  color: #8f91ac;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3333333333em;
}

.sidebar-menu-body {
  padding: 12px 0 12px 60px;
  border-top: 1px solid #eaeaf5;
  background-color: #fcfcfd;
}

.icon-settings {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-group {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.sidebar-menu.round-borders .sidebar-menu-item:last-child .sidebar-menu-body {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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

.user-short-description.small .user-short-description-avatar {
  margin-left: -50px;
}

.user-short-description.small .user-short-description-avatar {
  width: 85px;
  height: 85px;
  top: 7px;
  left: 57px;
}

:selection {
  background-color: #337fff;
}

.form-item {
  width: 100%;
}

.form-row.split .form-item {
  margin-right: 16px;
}

.form-row.split .form-item:last-child {
  margin-right: 0;
}

.form-select {
  width: 100%;
  height: 48px;
  position: relative;
}

.icon-minus-small {
  fill: #3e3f5e;
  width: 8px;
  height: 8px;
}

.sidebar-menu-header .sidebar-menu-header-control-icon .sidebar-menu-header-control-icon-open {
  fill: #3e3f5e;
  position: absolute;
  top: 32px;
  right: 28px;
}

.sidebar-menu-header .sidebar-menu-header-control-icon .sidebar-menu-header-control-icon-open {
  display: none;
}

.icon-plus-small {
  fill: #3e3f5e;
  width: 8px;
  height: 8px;
}

.sidebar-menu-header .sidebar-menu-header-control-icon .sidebar-menu-header-control-icon-closed {
  fill: #3e3f5e;
  position: absolute;
  top: 32px;
  right: 28px;
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

.sidebar-menu-body .sidebar-menu-link {
  display: block;
  height: 34px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 34px;
  cursor: pointer;
  transition: color .25s ease-in-out, -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out, color .25s ease-in-out;
  transition: transform .2s ease-in-out, color .25s ease-in-out, -webkit-transform .2s ease-in-out;
}

.sidebar-menu-link {
  color: #3e3f5e;
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

.sidebar-menu-body .sidebar-menu-link:hover {
  color: #00c7d9;
  -webkit-transform: translate(4px, 0);
  transform: translate(4px, 0);
}

.sidebar-menu-body .sidebar-menu-link:hover {
  color: #337fff;
}

.sidebar-menu-body .sidebar-menu-link:hover, .sidebar-menu-body .sidebar-menu-link.active {
  color: #00c7d9;
  -webkit-transform: translate(4px, 0);
  transform: translate(4px, 0);
}

.sidebar-menu-body .sidebar-menu-link.active, .sidebar-menu-body .sidebar-menu-link:hover {
  color: #337fff;
}

.xm-avatar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
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

.form-input {
  position: relative;
}

.form-row.split .form-item > * {
  margin-bottom: 28px;
}

.form-row.split .form-item > :last-child {
  margin-bottom: 0;
}

label {
  font-family: "Rajdhani", sans-serif;
}

label {
  display: block;
  margin: 0;
  color: #3e3f5e;
  line-height: 1em;
}

label {
  margin: 0 !important;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

label {
  touch-action: manipulation;
}

.form-select label {
  padding: 0 6px;
  background-color: #fff;
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 600;
  position: absolute;
  top: -8px;
  left: 12px;
  pointer-events: none;
}

.hands {
  cursor: pointer;
}

.custom-choose {
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #dedeea;
}

.hands-button {
  width: 64px;
  height: 48px;
  background-color: #337fff;
  border-radius: 12px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.form-input label {
  color: #adafca;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all .3s ease-in-out;
  pointer-events: none;
}

.form-input.small label {
  font-size: 0.875rem;
}

.form-input.small label {
  top: 16px;
}

.form-input.active label {
  background-color: #fff;
  padding: 0 6px;
  font-size: 0.75rem;
  top: -6px;
  left: 12px;
}

input[type="text"] {
  font-family: "Rajdhani", sans-serif;
}

input[type="text"] {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input[type="text"] {
  height: 54px;
  padding: 0 18px;
}

input[type="text"] {
  -webkit-appearance: none;
}

.form-input.small input {
  font-size: 0.875rem;
}

.form-input.small input {
  height: 48px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select {
  font-family: "Rajdhani", sans-serif;
}

select {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
}

select {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

select {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

select {
  word-wrap: normal;
}

select {
  touch-action: manipulation;
}

select {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

select {
  text-transform: none;
}

.form-select select {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 0.875rem;
  cursor: pointer;
}

.icon-small-arrow {
  fill: #adafca;
  width: 6px;
  height: 8px;
}

.form-select .form-select-icon {
  fill: #3e3f5e;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  top: 20px;
  right: 20px;
  pointer-events: none;
}

.custom-choose-text {
  font-size: .875rem;
  font-weight: 700;
  height: 48px;
  margin-left: 16px;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
}

.custom-choose-text-hui {
  color: #adafca;
  font-size: 14px;
}

.icon-magnifying-glass {
  fill: #fff;
  width: 20px;
  height: 20px;
}

:selection {
  background-color: #337fff;
}

textarea {
  font-family: "Rajdhani", sans-serif;
}

textarea {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

textarea {
  padding: 14px 18px;
  resize: none;
}

textarea {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

textarea {
  -webkit-appearance: none;
}

textarea {
  touch-action: manipulation;
}

textarea {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

textarea {
  overflow: auto;
  resize: vertical;
}

textarea:focus {
  border-color: #615dfa;
}

textarea:focus {
  border-color: #337fff;
}

textarea {
  resize: none;
  word-break: break-all;
  overflow: hidden;
  padding: 14px 18px;
  line-height: normal;
}

.form-input.small textarea {
  font-size: 0.875rem;
}

.form-input.small textarea {
  height: 100px;
}

textarea:focus {
  border-color: #337fff;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #337fff;
}
</style>