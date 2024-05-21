<script setup lang="ts">
import {getCurrentInstance, onBeforeMount, ref} from 'vue';

const visible = ref(false);
const open = ref<boolean>(false);
const instance = getCurrentInstance()
const handleMenu = () => {
  open.value = false;
  const emit = () => {
    instance?.proxy?.$Bus.emit("openValue", open.value)
  }
  emit();
}
const imgInfoList = ref([])
onBeforeMount(() => {
  instance?.proxy?.$Bus.on("imgInfoList", (param: any) => {
    imgInfoList.value = param;
    // console.log(imgInfoList)
  })
})

</script>
<template>
  <div id="postModel___BV_modal_outer_" style="position: absolute; z-index: 1040;" class="snipcss-EROh9">
    <div id="postModel" role="dialog" aria-describedby="postModel___BV_modal_body_" class="modal fade show"
         aria-modal="true" style="display: block;">
      <div class="modal-dialog modal-md modal-dialog-centered"><span tabindex="0"></span>
        <div id="postModel___BV_modal_content_" tabindex="-1" class="modal-content">
          <div id="postModel___BV_modal_body_" class="modal-body">
            <div class="flex-body">
              <div class="popup-picture"
                   style="position: fixed; z-index: 100001; opacity: 1; visibility: visible; width: 100%; height: 100%;">
                <textarea id="text"
                          style="position: fixed; width: 80px; z-index: -99999;"></textarea>
                <div class="popup-close-button" style="top: 6px; right: 6px; z-index: 999999;"
                     @click="handleMenu">
                  <!--                  <svg class="popup-close-button-icon icon-cross">-->
                  <!--                    <use xlink:href="#svg-cross"></use>-->
                  <!--                  </svg>-->
                  关闭
                </div>
                <div class="widget-box no-padding" style="overflow: hidden; border-radius: 0px;">
                  <div data-simplebar="init" class="widget-box-scrollable" style="height: 100%;">
                    <div class="simplebar-wrapper" style="margin: 0px;">
                      <div class="simplebar-height-auto-observer-wrapper">
                        <div class="simplebar-height-auto-observer"></div>
                      </div>
                      <div class="simplebar-mask">
                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                          <div class="simplebar-content-wrapper"
                               style="height: 100%; overflow: hidden scroll;">
                            <div class="simplebar-content" style="padding: 0px;">
                              <div class="widget-box-settings"></div>
                              <div class="widget-box-status">
                                <div class="widget-box-status-content">
                                  <div class="user-status">
                                    <div
                                        class="xm-header user-avatar user-status-avatar"
                                        style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%;">
                                      <div class="xm-avatar"
                                           style="width: 44px; height: 44px; padding: 6.4px;"><img
                                          src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_544381688968711?imageMogr2/crop/128x128/gravity/center"
                                          alt="头像" class=""
                                          style="border-radius: 50%;">
                                      </div>
                                      <svg viewBox="0 0 100 100" style="width: 44px; height: 44px;">
                                        <defs>
                                          <linearGradient
                                              id="svg04aacff7-ae3e-4d5a-8602-279db3fc4699" x1="0%" y1="0%"
                                              x2="100%" y2="0%">
                                            <stop offset="0%"></stop>
                                            <stop offset="100%"></stop>
                                          </linearGradient>
                                        </defs>
                                        <path
                                            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                                            stroke="#e9e9f0" stroke-width="8" fill-opacity="0"></path>
                                        <path
                                            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                                            stroke="url(#svg04aacff7-ae3e-4d5a-8602-279db3fc4699)" stroke-width="8"
                                            fill-opacity="0" style="stroke-dasharray: 34.44, 287;"></path>
                                      </svg>
                                      <div class="xm-level" style="background: transparent;"><img

                                          src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E7%BA%A2V1605690514?upload_type/Tencent_COS"
                                          style="width: 18px; height: 18px;"></div>
                                    </div>
                                    <p class="user-status-title medium"><span
                                        class="bold"
                                        style="color: rgb(251, 91, 90);">纯烬 </span>
                                    </p>
                                    <p class="user-status-text text-long-ellipsis"> 2023-09-12<span
                                    > · 浙江</span></p>
                                  </div>
                                  <div class="widget-box-status-text">可爱⚈₃⚈</div>
                                  <div class="tag-list"><a
                                      class="tag-item secondary">闲聊灌水</a></div>
                                  <div class="content-actions"
                                       style="margin-top: -2px; border-top: none;">
                                    <div class="content-action">
                                      <div class="meta-line">
                                        <div class="meta-line-list reaction-item-list">
                                          <div class="reaction-item"><img
                                              src="https://pc.opensns.cn/img/reaction/like.png"
                                              alt="reaction-like"
                                              class="reaction-image">
                                          </div>
                                        </div>
                                        <p class="meta-line-text">0</p>
                                      </div>
                                    </div>
                                    <div class="content-action">
                                      <div class="meta-line">
                                        <p class="meta-line-text"> 0评论 </p>
                                      </div>
                                      <div class="meta-line">
                                        <p class="meta-line-text"> 99浏览 </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="post-options">
                                <div class="post-option-wrap" style="position: relative;">
                                  <div class="post-option no-text">
                                    <svg class="post-option-icon icon-thumbs-up">
                                      <use xlink:href="#svg-thumbs-up"></use>
                                    </svg>
                                    <p class="post-option-text">点赞</p>
                                  </div>
                                </div>
                                <div class="post-option no-text active">
                                  <svg class="post-option-icon icon-comment">
                                    <use xlink:href="#svg-comment"></use>
                                  </svg>
                                  <p class="post-option-text">评论</p>
                                </div>
                                <div class="post-option no-text">
                                  <svg class="post-option-icon icon-share">
                                    <use xlink:href="#svg-share"></use>
                                  </svg>
                                  <p class="post-option-text">分享</p>
                                </div>
                              </div>
                              <div class="post-comment-form">
                                <div class="loginComment"> 请登录后评论</div>
                              </div>
                              <div class="post-comment-list"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="simplebar-placeholder" style="width: auto; height: 1178px;"></div>
                    </div>
                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                      <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                    </div>
                    <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                      <div class="simplebar-scrollbar"
                           style="height: 357px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
                    </div>
                  </div>
                </div>
                <div id="popup_picture_image_wrap" class="popup-picture-image-wrap"
                     style="overflow: hidden; border-radius: 0px;">
                  <div></div>
                  <div id="hevue-imgpreview-wrap" class="hevue-imgpreview-wrap">
                    <div class="he-img-wrap">
                      <a-image-preview-group>
                        <a-image :src="imgInfoList.image"/>
                      </a-image-preview-group>
                    </div>
                  </div>
                  <object tabindex="-1" type="text/html" aria-hidden="true" data="about:blank"
                          style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span tabindex="0"></span>
      </div>
    </div>
    <div id="postModel___BV_modal_backdrop_" class="modal-backdrop"></div>
  </div>
</template>


<style scoped>

@media screen and (min-width: 1366px) {
  #postModel___BV_modal_outer_ {
    z-index: 99999 !important;
  }
}

@media screen and (max-width: 768px) {
  .widget-box.no-padding {
    display: none;
  }
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

.fade {
  transition: opacity .15s linear;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop {
  opacity: .5;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
}

.modal.fade .modal-dialog {
  transition: transform .3s ease-out;
  transform: translateY(-50px);
}

.modal.show .modal-dialog {
  transform: none;
}

.modal.fade .modal-dialog {
  transform: none !important;
}

.modal-dialog-centered:before {
  display: block;
  height: calc(100vh - 1rem);
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  content: "";
}

@media (min-width: 576px) {
  .modal-dialog-centered:before {
    height: calc(100vh - 3.5rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: .3rem;
  outline: 0;
}

.modal-content {
  background: transparent;
  border: none;
}

[tabindex="-1"]:focus {
  outline: none !important;
}

[tabindex="-1"]:focus:not(.focus-visible), [tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-picture {
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  height: 80%;
  opacity: 0;
  visibility: hidden;
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

.popup-close-button {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #45437f;
  cursor: pointer;
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 2;
  transition: background-color .2s ease-in-out;
}

.popup-close-button {
  background-color: #0051d4;
}

.popup-close-button {
  background-color: #0051d4;
}

.popup-close-button {
  z-index: 101;
}

.popup-close-button:hover {
  background-color: #23d2e2;
}

.popup-close-button:hover {
  background-color: #337fff;
}

.popup-close-button:hover {
  background-color: #337fff;
}

.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
}

.popup-picture .widget-box {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 384px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.widget-box.no-padding {
  padding: 0;
}

.popup-picture .popup-picture-image-wrap {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #15151f;
}

.popup-picture-image-wrap {
  position: relative;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-cross {
  fill: #fff;
  width: 12px;
  height: 12px;
}

svg:not(:root) {
  overflow: hidden;
}

.popup-close-button .popup-close-button-icon {
  pointer-events: none;
}

[data-simplebar] {
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
}

.widget-box-scrollable {
  height: 738px;
}

.popup-picture .widget-box .widget-box-scrollable {
  overflow: hidden auto;
}

.hevue-imgpreview-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  z-index: 9999;
  color: hsla(0, 0%, 100%, .6);
}

#hevue-imgpreview-wrap {
  z-index: 99999;
}

.simplebar-wrapper {
  overflow: hidden;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
}

.simplebar-track {
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.simplebar-track.simplebar-horizontal {
  left: 0;
  height: 11px;
}

.simplebar-track.simplebar-vertical {
  top: 0;
  width: 11px;
}

.hevue-imgpreview-wrap .he-img-wrap {
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .3);
}

.simplebar-height-auto-observer-wrapper {
  box-sizing: inherit !important;
  height: 100%;
  width: 100%;
  max-width: 1px;
  position: relative;
  float: left;
  max-height: 1px;
  overflow: hidden;
  z-index: -1;
  padding: 0;
  margin: 0;
  pointer-events: none;
  flex-grow: inherit;
  flex-shrink: 0;
  flex-basis: 0;
}

.simplebar-mask {
  direction: inherit;
  position: absolute;
  overflow: hidden;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto !important;
  height: auto !important;
  z-index: 0;
}

.simplebar-placeholder {
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  pointer-events: none;
}

.simplebar-scrollbar {
  position: absolute;
  right: 2px;
  width: 4px;
  min-height: 10px;
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  right: auto;
  left: 0;
  top: 2px;
  height: 7px;
  min-height: 0;
  min-width: 10px;
  width: auto;
}

.simplebar-scrollbar:before {
  position: absolute;
  content: '';
  background: #adafca;
  border-radius: 7px;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.2s linear;
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar::before {
  height: 100%;
  left: 2px;
  right: 2px;
}

.simplebar-track.simplebar-vertical .simplebar-scrollbar::before {
  top: 2px;
  bottom: 2px;
}

.heimgfont {
  font-family: heimgfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hevue-imgpreview-wrap .hevue-img-status-icon {
  font-size: 56px;
}

.hevue-imgpreview-wrap .rotate-animation {
  -webkit-animation: rotate-data-v-754275f4 1.5s linear infinite;
  animation: rotate-data-v-754275f4 1.5s linear infinite;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

.hevue-imgpreview-wrap .arrow {
  width: 42px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  transition: all .2s;
  background: rgba(0, 0, 0, .3);
}

.hevue-imgpreview-wrap .arrow-left {
  left: 50px;
}

.hevue-imgpreview-wrap .arrow:hover {
  opacity: .8;
  transform: translateY(-50%) scale(1.2);
}

.hevue-imgpreview-wrap .arrow-right {
  right: 50px;
}

.hevue-imgpreview-wrap .he-control-bar-wrap {
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 10%;
  left: 0;
}

.hevue-imgpreview-wrap .he-control-num {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  padding: 0 22px;
  font-size: 16px;
  border-radius: 15px;
  background: rgba(0, 0, 0, .3);
}

.simplebar-height-auto-observer {
  box-sizing: inherit;
  display: block;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 1000%;
  width: 1000%;
  min-height: 1px;
  min-width: 1px;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.simplebar-offset {
  direction: inherit !important;
  box-sizing: inherit !important;
  resize: none !important;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}

.hevue-imgpreview-wrap .he-control-bar {
  height: 44px;
  bottom: 10%;
  padding: 0 22px;
  display: flex;
  border-radius: 22px;
  margin: 0 auto;
  background: rgba(0, 0, 0, .3);
}

.simplebar-content-wrapper {
  direction: inherit;
  box-sizing: border-box !important;
  position: relative;
  display: block;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.simplebar-content-wrapper:-webkit-scrollbar, .simplebar-hide-scrollbar:-webkit-scrollbar {
  width: 0;
  height: 0;
}

.hevue-imgpreview-wrap .he-control-btn {
  line-height: 44px;
  font-size: 24px;
  cursor: pointer;
  padding: 0 9px;
  transition: all .2s;
}

.hevue-imgpreview-wrap .he-control-btn:hover {
  transform: scale(1.2);
}

.simplebar-content:before, .simplebar-content:after {
  content: ' ';
  display: table;
}

.widget-box .widget-box-settings {
  position: absolute;
  top: 22px;
  right: 19px;
  z-index: 9999;
}

.widget-box .widget-box-status {
  padding-top: 24px;
  position: relative;
}

.post-options {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 65px;
  padding: 0 28px;
  border-top: 1px solid #eaeaf5;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #fcfcfd;
}

.post-comment-form {
  padding: 26px 28px 26px 80px;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
}

.post-comment-form {
  padding: 26px 28px 9px 80px;
  border-top: 1px solid #eaeaf5;
}

.post-comment-list {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.widget-box .widget-box-status .widget-box-status-content {
  padding: 0 28px;
}

.post-option {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 160px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

.post-option.no-text {
  width: 80px;
}

.post-option.active {
  background-color: #fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, 0.1);
}

.post-option.active, .post-option:hover {
  background-color: #fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, 0.1);
}

.post-option:hover {
  background-color: #fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, 0.1);
}

.loginComment {
  display: flex;
  padding: 1px 0;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #afb0c0;
  margin-left: -45px;
  margin-top: -15px;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.widget-box .widget-box-status .widget-box-status-content .user-status {
  font-family: "Rajdhani", sans-serif;
  padding-right: 70px;
}

.widget-box-status-text {
  word-break: break-all;
}

.widget-box .widget-box-status .widget-box-status-text {
  font-size: 0.875rem;
  line-height: 1.7142857143em;
  font-weight: 500;
}

.widget-box .widget-box-status .user-status + .widget-box-status-text {
  margin-top: 20px;
}

.tag-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -12px;
}

.tag-list {
  display: flex;
  align-items: center;
  margin-top: 0 !important;
}

.widget-box .widget-box-status .tag-list {
  margin-top: 28px;
}

.widget-box .widget-box-status .widget-box-status-text + .tag-list {
  margin-top: 8px;
}

.content-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 52px;
}

.widget-box .widget-box-status .content-actions {
  margin-top: 28px;
  border-top: 1px solid #eaeaf5;
}

.icon-comment {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.post-option .post-option-icon {
  margin-right: 16px;
  fill: #adafca;
  opacity: .6;
  transition: fill .2s ease-in-out, opacity .2s ease-in-out;
}

.post-option.no-text .post-option-icon {
  margin-right: 0;
}

.post-option.active .post-option-icon {
  fill: #23d2e2;
  opacity: 1;
}

.post-option.active .post-option-icon {
  fill: #337fff;
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

.post-option .post-option-text {
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 700;
  transition: color .2s ease-in-out;
}

.post-option-text {
  margin-left: 6px;
}

.post-option.active .post-option-text {
  color: #3e3f5e;
}

.icon-share {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.user-status .user-status-avatar {
  position: absolute;
  top: 0;
  left: 0;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

:selection {
  background-color: #337fff;
}

.user-status .user-status-title {
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4285714286em;
}

.user-status .user-status-title.medium {
  font-size: 1rem;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-status .user-status-text {
  margin-top: 4px;
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-status .user-status-text {
  font-size: 12px;
}

.user-status .user-status-title.medium + .user-status-text {
  margin-top: 2px;
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

.tag-item {
  display: block;
  height: 24px;
  padding: 0 12px;
  border-radius: 200px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 24px;
}

.tag-list .tag-item {
  margin: 12px 12px 0 0;
}

.tag-item.secondary {
  background-color: #615dfa;
  transition: background-color .2s ease-in-out;
}

.tag-item.secondary {
  background-color: #337fff;
}

.tag-list a {
  cursor: pointer;
}

.tag-item.secondary {
  background-color: #337fff;
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

.tag-item.secondary:hover {
  color: #fff;
  background-color: #23d2e2;
}

.content-actions .content-action {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.icon-thumbs-up {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.post-option .post-option-icon.icon-thumbs-up {
  position: relative;
  top: -2px;
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

.user-status .user-status-title .bold {
  color: #3e3f5e;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.meta-line {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.meta-line + .meta-line {
  margin-left: 22px;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.reaction-item-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.meta-line .meta-line-text {
  font-size: 0.75rem;
  font-weight: 700;
}

.meta-line .meta-line-list + .meta-line-text {
  margin-left: 10px;
}

.reaction-item-list .reaction-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -6px;
}

.reaction-item-list .reaction-item:last-child {
  margin-left: 0;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #337fff;
}

.reaction-image {
  width: 20px;
  height: 20px;
}

.reaction-item-list .reaction-item > .reaction-image {
  cursor: pointer;
}


@keyframes rotate-data-v-754275f4 {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
    transform: rotate(1turn);
  }

}
</style>