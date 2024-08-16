<!-- MyIcon.vue -->
<script lang="ts" setup>
import { createFromIconfontCN } from '@ant-design/icons-vue';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_bz47p19iuh8.js', // 在 iconfont.cn 上生成
});

// Props 定义
defineProps<{
  type: string;
  style?: object;
}>();

// 使用 JSX 渲染图标组件
</script>

<template>
  <IconFont :type="type" :style="style" />
</template>

<style scoped>
/* 可以在这里添加一些默认的样式 */
</style>
