<template>
  <div class="notification-box default" v-for="item in messageList" :key="item.id">
    <div class="user-status notification">
      <div class="user-status-avatar">
        <div class="messages-informs icon-notification">
          <icon-font class="icon svg" type="icon-xiaoxi"/>
        </div>
      </div>
      <p class="user-status-title text-long-ellipsis snipcss0-2-2-7"><strong class="snipcss0-3-7-8">{{ item.title }}</strong></p>
      <p class="user-status-title snipcss0-2-2-9" style="color: rgb(153, 153, 153); word-break: break-word;">
        {{ item.content }}</p>
      <p class="user-status-timestamp small-space">{{ timeUtils.convertTime(item.createTime, true) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {timeUtils} from "@/store/TimeUtil";
import {createFromIconfontCN} from "@ant-design/icons-vue";
// SVG 图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_6kwgvtuqt0b.js',
});

// 获取父组件传递的 props
const props = defineProps<{  messageList }>();
</script>

<style scoped>

.notification-box {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  min-height: 88px;
  padding: 0 28px;
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
}

.notification-box {
  margin-bottom: 16px;
  cursor: pointer;
}

.notification-box.default {
  cursor: default;
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

:selection {
  background-color: #337fff;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.user-status  {
  width: 100%;
}

.user-status.notification {
  /*padding-right: 60px;*/
}

.user-status.notification {
  /*padding-left: 60px;*/
}

.user-status .user-status-avatar  {
  position: absolute;
  top: 0;
  left: 0;
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

.user-status .user-status-title  {
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4285714286em;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-long-ellipsis {
  word-break: break-all;
}

.user-status .user-status-timestamp  {
  margin-top: 10px;
  color: #8f91ac;
  font-size: 0.75rem;
  font-weight: 500;
}

.user-status .user-status-timestamp.small-space  {
  margin-top: 4px;
}

.messages-informs {
  width: 44px;
  height: 44px;
  background: var(--reaicc-nav-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

strong {
  font-weight: bolder;
}
svg {
  width: 100px;
  height: 50px;
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

svg:not(:root) {
  overflow: hidden;
}
.icon-notification {
  fill: #fff;
}

svg:not(:root) {
  overflow: hidden;
}




</style>