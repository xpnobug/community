<template>
  <div class="dropdown-box header-dropdown">
    <div class="dropdown-box-header">
      <div style="display: flex; align-items: center;">
<!--        <p class="dropdown-box-header-title dropdown-active">互动</p>-->
<!--        <p class="dropdown-box-header-title">新动态</p>-->
        <p class="dropdown-box-header-title dropdown-active">系统</p>
<!--        <p class="dropdown-box-header-title">推送</p>-->
<!--        <p class="dropdown-box-header-title text-long-ellipsis">福利消息</p>-->
      </div>
      <div class="dropdown-box-header-actions">
        <p class="dropdown-box-header-action" style="display: none;">全部已读</p>
      </div>
    </div>
    <div class="dropdown-box-list" data-simplebar="init">
      <div class="simplebar-wrapper" style="margin: 0px;">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
            <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden;">
              <div class="simplebar-content"  style="padding: 0px;">
<!--                <SystemCompontents v-if="messageList.length !== 0" :messageList="messageList" />-->
                <MessageStyleCompontents v-if="loading" :messageList="messageList"/>
                <a-empty v-else description="暂无数据" />
              </div>
            </div>
          </div>
        </div>
        <div class="simplebar-placeholder" style="width: auto; height: 1px;"></div>
      </div>
      <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
        <div class="simplebar-scrollbar simplebar-visible" style="width: 0px; display: none;"></div>
      </div>
      <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
        <div class="simplebar-scrollbar simplebar-visible" style="height: 0px; display: none;"></div>
      </div>
    </div>
    <a class="dropdown-box-button secondary" style="cursor: pointer;" @click="readAll">查看全部消息</a>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue";
import {listMessage, MessageResp, readMessage} from "@/api";
import SystemCompontents from "@/views/message/compontents/systemCompontents.vue";
import MessageStyleCompontents from "@/views/message/compontents/messageStyleCompontents.vue";
const emit = defineEmits<{
  (e: 'readall-success'): void
}>()

const messageList = ref<MessageResp[]>()
const loading = ref(false)
// 查询消息数据
const userId = localStorage.getItem('userId');
const getMessageData = async () => {
  try {
    loading.value = true
    const { data } = await listMessage(false,userId)
    messageList.value = data.data
    if(messageList.value?.length > 0){
      loading.value = true
    }else {
      loading.value = false
    }
  } finally {
  }
}
// 全部已读
const readAll = async () => {
  await readMessage(userId)
  await getMessageData()
  emit('readall-success')
}

onMounted(() => {
  getMessageData()
})
</script>

<style scoped>
.dropdown-box {
  width: 320px;
  /*padding-bottom: 60px;*/
  border-radius: 10px;
  background-color:#f8f8f8;
  box-shadow: 3px 5px 40px 0 rgba(94, 92, 154, 0.06);
  /*position: relative;*/
}

*,:before,:after {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

:before,:after {
  display: block;
}

*,:after,:before {
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

[data-v-30f16d43]:selection {
  background-color: #337fff;
}

.dropdown-box-header  {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 15px 15px 15px;
}

.dropdown-box-header  {
  align-items: center;
}

.dropdown-box-list {
  height: 300px;
  overflow-y: auto;
}

[data-simplebar] {
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
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

.dropdown-box-button {
  width: 100%;
  height: 60px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  transition: background-color .2s ease-in-out;
}

.dropdown-box-button  {
  position: absolute;
  bottom: 0;
  left: 0;
}

.dropdown-box-button.secondary {
  background-color: var(--reaicc-nav-bg)
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

a:active,a:hover {
  text-decoration: none;
  outline: 0;
}

.dropdown-box-button:hover {
  color: #fff;
}

.dropdown-box-button.secondary:hover {
  background-color: #337FFF;
}

.dropdown-box-header .dropdown-box-header-actions  {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: end;
  align-items: flex-end;
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

.dropdown-box-header .dropdown-box-header-title  {
  font-size: 1rem;
  font-weight: 700;
}

.dropdown-box-header .dropdown-box-header-title  {
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
  cursor: pointer;
}

.dropdown-box-header .dropdown-active  {
  font-size: 1rem;
  font-weight: 700;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-long-ellipsis[data-v-30f16d43] {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.dropdown-box-header .dropdown-box-header-title:last-child  {
  max-width: 68px;
}

.dropdown-box-header .dropdown-box-header-actions .dropdown-box-header-action  {
  margin-right: 16px;
  color: #8f91ac;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: .6;
  cursor: pointer;
}

.dropdown-box-header .dropdown-box-header-actions .dropdown-box-header-action:last-child  {
  margin-right: 0;
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

.simplebar-track.simplebar-horizontal .simplebar-scrollbar  {
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

.simplebar-content-wrapper:-webkit-scrollbar,.simplebar-hide-scrollbar:-webkit-scrollbar {
  width: 0;
  height: 0;
}

.simplebar-content:before,.simplebar-content:after {
  content: ' ';
  display: table;
}

.card-header {
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,.03);
  border-bottom: 1px solid rgba(0,0,0,.125);
}

.card-header:first-child {
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}

.tab[data-v-30f16d43] .card-header  {
  display: none;
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

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.card-header-tabs {
  margin-bottom: -.75rem;
  border-bottom: 0;
}

.card-header-tabs {
  margin-right: -.625rem;
  margin-left: -.625rem;
}

.page-loader {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #F8F8FB;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999999;
  transition: opacity .4s ease-in-out, visibility .4s ease-in-out;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-body {
  padding: 0 !important;
}

.tab-content > .tab-pane  {
  display: none;
}

.tab-content > .active  {
  display: block;
}

.loader-bars {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 40px;
}

.loader-bars {
  margin-top: 30px!important;
}

.page-loader .page-loader-indicator  {
  margin-top: 36px;
}

.msg-empty {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #999;
}

.nav-link {
  display: block;
  padding: .5rem 1rem;
}

.nav-tabs .nav-link  {
  margin-bottom: -1px;
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.nav-tabs .nav-link.active  {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-link:hover {
  text-decoration: none;
}

.nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.loader-bars .loader-bar  {
  width: 4px;
  height: 100%;
  margin-right: 4px;
  border-radius: 200px;
  -webkit-transform: scaleY(0.2);
  transform: scaleY(0.2);
  -webkit-animation: loader-bars .5s infinite alternate ease-in;
  animation: loader-bars .5s infinite alternate ease-in;
}

.loader-bars .loader-bar:nth-child(1)  {
  background-color: #347FFF;
}

.loader-bars .loader-bar:nth-child(2)  {
  background-color: #4288FF;
  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}

.loader-bars .loader-bar:nth-child(3)  {
  background-color: #5393FF;
  -webkit-animation-delay: .2s;
  animation-delay: .2s;
}

.loader-bars .loader-bar:nth-child(4)  {
  background-color: #629CFF;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}

.loader-bars .loader-bar:nth-child(5)  {
  background-color: #71A6FF;
  -webkit-animation-delay: .4s;
  animation-delay: .4s;
}

.loader-bars .loader-bar:nth-child(6)  {
  background-color: #81B0FF;
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
}

.loader-bars .loader-bar:nth-child(7)  {
  background-color: #8CB7FF;
  -webkit-animation-delay: .6s;
  animation-delay: .6s;
}

.loader-bars .loader-bar:last-child  {
  margin-right: 0;
}

.loader-bars .loader-bar:nth-child(8)  {
  background-color: #9CC1FF;
  -webkit-animation-delay: .7s;
  animation-delay: .7s;
}

.ant-empty {
  margin: 0 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}

.ant-empty-image {
  height: 100px;
  margin-bottom: 8px;
}

.ant-empty-description {
  margin: 0;
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

.ant-empty-image svg  {
  height: 100%;
  margin: auto;
}


@keyframes loader-bars {
  0% {
    -webkit-transform: scaleY(0.2);
    transform: scaleY(0.2);
    transform: scaleY(0.2);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transform: scaleY(1);
  }

}

</style>