<template>
  <div class="class-fication class-fications"
       style="opacity: 1; transition: all 0.5s ease 0s; margin: 10px;">
    <div class="class-fication-title">
      <div class="class-fication-type">选择发布类型</div>
      <div class="class-fication-drafts">草稿箱（<span>0</span>）</div>
    </div>
    <ul class="class-fication-box">
      <li @click="pushPost('dt')">
        <div class="top">
          <svg class="option-item-icon icon-status">
            <use xlink:href="#svg-status"></use>
          </svg>
        </div>
        <div class="bottom">动态</div>
      </li>
      <li @click="pushPost('tz')">
        <div class="top">
          <svg class="option-item-icon icon-blog-posts">
            <use xlink:href="#svg-blog-posts"></use>
          </svg>
        </div>
        <div class="bottom"> 帖子</div>
      </li>
      <li @click="pushPost('video')">
        <div class="top">
          <svg class="option-item-icon icon-videos">
            <use xlink:href="#svg-videos"></use>
          </svg>
        </div>
        <div class="bottom">视频</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const pushPost = (val: any) => {
  //跳转页面 path: '/post/:id',
  router.push({path: '/release/', query: { type: val } })
}
</script>

<style scoped>
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

.class-fication-title {
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
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

.class-fication-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.class-fication-title .class-fication-type {
  color: #d4d4d4;
}

.class-fication-title .class-fication-drafts {
  color: #3e3f5e;
  cursor: pointer;
}

.class-fication-box li {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 24px;
}

.class-fication-box li:last-child {
  margin-right: 0;
}

.class-fication-box li .top {
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  opacity: .85;
}

.class-fication-box li:first-child .top {
  background: rgba(80, 139, 254, .1);
}

.class-fication-box li .bottom {
  white-space: nowrap;
  margin-top: 18px;
  font-size: 14px;
  color: rgba(0, 0, 0, .88);
  text-align: center;
  line-height: 1;
}

.class-fication-box li:nth-child(2) .top {
  background: rgba(250, 173, 20, .1);
}

.class-fication-box li:nth-child(3) .top {
  background: rgba(255, 77, 79, .1);
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-status {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

svg:not(:root) {
  overflow: hidden;
}

.class-fication-box li .top .option-item-icon {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.class-fication-box li:first-child .top .option-item-icon {
  fill: #31a0ff;
}

.icon-blog-posts {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.class-fication-box li:nth-child(2) .top .option-item-icon {
  fill: #ff9a02;
}

.icon-videos {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.class-fication-box li:nth-child(3) .top .option-item-icon {
  fill: #fd434f;
}
</style>