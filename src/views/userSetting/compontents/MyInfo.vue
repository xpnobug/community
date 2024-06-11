<template>
  <div class="account-hub-content">
    <div class="section-header">
      <div class="section-header-info">
        <p class="section-pretitle">个人</p>
        <h2 class="section-title">我的信息</h2>
      </div>
    </div>
    <div class="grid-column">
      <div class="grid grid-3-3-3 centered">
        <div class="user-preview small fixed-height"
             style="position: relative;cursor: default">
          <figure class="user-preview-cover liquid">
            <img
                :src="userCover == null ? userInfo.userCover : userCover"
                style="border-top-left-radius: 12px; border-top-right-radius: 12px; object-fit: cover;">
            <input v-model="formState.userCover" style="display:none;" type="input">
          </figure>
          <div class="user-preview-info">
            <div class="user-short-description small">
              <div class="xm-header user-avatar user-short-description-avatar"
                   style="width:85px;height:85px;border:none;cursor:default;border-radius:50%;display:block;">
                <div class="xm-avatar" style="width:85px;height:85px;padding:10.5px;">
                  <img
                      :src="avatar == null ? userInfo.avatar : avatar" alt="头像" class=""
                      style="border-radius: 50%;">
                </div>
                <svg style="width:85px;height:85px;" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="svgabc18a0f-2756-4227-9735-f5f6aa5b0ffd" x1="0%"
                                    x2="100%" y1="0%"
                                    y2="0%">
                      <stop offset="0%"></stop>
                      <stop offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                        fill-opacity="0" stroke="#e9e9f0" stroke-width="8"></path>
                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                        fill-opacity="0" stroke="url(#svgabc18a0f-2756-4227-9735-f5f6aa5b0ffd)"
                        stroke-width="8" :style="[{strokeDasharray: userInfo.exp + ',287'}]"></path>
                </svg>
                <div class="xm-level"
                     style="box-sizing:content-box;font-size:12.75px;width:21.25px;height:21.25px;border:3px solid #fff;">
                  <span style="display:block">{{ userInfo.level }}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="upload-box">
          <UserInfoUpload :handleUp="handleUp" :imgType="tx"/>
          <p class="upload-box-title">更换头像</p>
          <p class="upload-box-text">最小支持尺寸：110px110px</p>
        </div>
        <div class="upload-box">
          <UserInfoUpload  :handleCover="handleCover" :imgType="cover"/>
          <p class="upload-box-title">更换封面</p>
          <p class="upload-box-text">最小支持尺寸：1184x300px </p>
        </div>
      </div>
      <div class="widget-box">
        <div class="widget-box-content">
          <form class="form">
            <div class="form-row split">
              <div class="form-item">
                <div class="form-input with-button active small"><label for="groups-search">
                  <span>昵称</span></label>
                  <input v-model="formState.username" maxlength="" name="username" placeholder="" type="text">
                </div>
              </div>
              <!--                    <div class="form-item">-->
              <!--                      <div class="form-select"><label for="profile-sex">性别</label>-->
              <!--                        <select id="profile-sex" name="profile_sex">-->
              <!--                          <option selected="selected" value="0">保密</option>-->
              <!--                          <option value="1">男生</option>-->
              <!--                          <option value="2">女生</option>-->
              <!--                        </select>-->
              <!--                        <svg class="form-select-icon icon-small-arrow">-->
              <!--                          <use xlink:href="#svg-small-arrow"></use>-->
              <!--                        </svg>-->
              <!--                      </div>-->
              <!--                    </div>-->
            </div>
            <!--                  <div class="form-row split">-->
            <!--                    <div class="form-item">-->
            <!--                      <div class="form-select" style="position: relative;"><label-->
            <!--                          for="profile-sex"-->
            <!--                          style="z-index: 999;">工作单位</label>-->
            <!--                        <div class="custom-choose hands">-->
            <!--                          <div class="custom-choose-text custom-choose-text-hui">去选择工作单位</div>-->
            <!--                        </div>-->
            <!--                        <div class="hands hands-button">-->
            <!--                          <svg class="icon-magnifying-glass">-->
            <!--                            <use xlink:href="#svg-magnifying-glass"></use>-->
            <!--                          </svg>-->
            <!--                        </div>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                    <div class="form-select " style="position: relative;"><label-->
            <!--                        for="profile-sex"-->
            <!--                        style="z-index: 999;">学校</label>-->
            <!--                      <div class="custom-choose hands">-->
            <!--                        <div class="custom-choose-text custom-choose-text-hui">去选择学校</div>-->
            <!--                      </div>-->
            <!--                      <div class="hands hands-button">-->
            <!--                        <svg class="icon-magnifying-glass">-->
            <!--                          <use xlink:href="#svg-magnifying-glass"></use>-->
            <!--                        </svg>-->
            <!--                      </div>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <div class="form-row split">
              <div class="form-item">
                <div class="form-input with-button active small"><label
                    for="groups-search"> <span>个性签名</span></label> <textarea
                    maxlength="100" placeholder="最多支持100字" style="height:;" type="text"
                    value=""></textarea></div>
              </div>
              <div class="form-item"></div>
            </div>
          </form>
        </div>
      </div>
      <div class="button-box">
        <button class="button cancel" style="color:#AFB0C0;margin-right:16px;display:none;"
                type="primay">忽略修改
        </button>
        <button class="button" style="background: #337FFF;color: #FFF;" type="primay" @click="update">保存修改
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserInfo} from "@/hooks/useCached";
import {getCurrentInstance, reactive, ref} from "vue";
import {message, UploadProps} from "ant-design-vue";
import UserInfoUpload from "@/views/userSetting/compontents/UserInfoUpload.vue";
import {updateUser} from "@/api/user";

interface FormState {
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  userCover: string;
  avatar: string;
  userId: string;
}

const formState = reactive<FormState>({
  username: "",
  email: "",
  phoneNumber: "",
  address: "",
  userCover: "",
  avatar: "",
  userId: "",
});
const fileList = ref<UploadProps['fileList']>([]);
//获取登录人信息
const tx = ref("tx");
const cover = ref("cover");
const avatar = ref();
const userCover = ref();
const userInfo = useUserInfo();
const handleUp = (value) => {
  avatar.value = value;
  formState.avatar = value;
}
const handleCover = (value) => {
  userCover.value = value
  formState.userCover = value;
}
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on("userInfo", (param: any) => {
  formState.userId = param.userId;
})

const update = (val) => {
  updateUser(formState).then(res => {
    if (res.status === 200) {
      message.success("修改成功");
    }
  })
}
</script>

<style scoped>
@media screen and (min-width: 1366px) {
  .content-grid {
    margin: auto;
    transform: none !important;
  }
}

.content-grid {
  max-width: 1184px;
  padding: 54px 0 32px;
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
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  -ms-flex-align: start;
  align-items: start;
}

.grid {
  margin-top: 32px;
}

.grid.grid-3-9 {
  grid-template-areas: 'sidebar content';
  grid-template-columns: 23.9864864865% 74.6621621622%;
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
  background-color: #fff;
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
  background-color: #fff;
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