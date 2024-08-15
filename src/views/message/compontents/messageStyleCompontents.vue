<template>
  <div class="body">
    <div class="container w-72">
      <ul class="notice">
        <li class="item" v-for="item in messageList" :key="item.id">
          <div class="mb-1 flex justify-between text-xs">
            <div>
              <i class="fab fa-weixin text-success"></i>
              <span>LT-REAI</span>
            </div>
            <div class="time">{{ timeUtils.convertTime(item.createTime, true) }}</div>
          </div>
          <div class="text-sm font-bold">{{ item.title }}</div>
          <div class="text-sm">{{ item.content }}</div>
        </li>
      </ul>
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

.body{
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  height: 250px;
  -ms-overflow-style: none;  /* 适用于IE和Edge */
  scrollbar-width: none; /* 适用于Firefox */
}

/* 隐藏滚动条 */
.body::-webkit-scrollbar {
  display: none; /* 适用于WebKit浏览器（如Chrome、Safari） */
}

/*.container {*/
/*  position: relative;*/
/*  top: -8rem;*/
/*}*/
.w-72 {
  width: 19rem !important;
}
.notice {
  position: relative;
  transform-style: preserve-3d;
  perspective: 800px;
  cursor: pointer;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.notice.unfolded .item {
  color: black;
  background: rgba(255, 255, 255, 0.7);
}
.item {
  position: relative;
  margin: 5px;
  /*width: 100%;*/
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  -webkit-backdrop-filter: saturate(130%) blur(20px);
  backdrop-filter: saturate(130%) blur(20px);
  transition: 0.6s var(--ease-out-cubic);
}
.text-xs {
  font-size: .75rem;
}
.mb-1 {
  margin-bottom: .25rem !important;
}
.justify-between {
  justify-content: space-between;
}
.flex {
  display: flex;
}
.fab, .far {
  font-weight: 400;
}
.fa, .fab, .fad, .fal, .far, .fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.text-success {
  color: var(--success-color);
}
.text-xs {
  font-size: .75rem;
}
.time {
  color: #848080;
}
.font-bold {
  font-weight: 700;
}
.text-sm {
  font-size: .875rem;
}

</style>