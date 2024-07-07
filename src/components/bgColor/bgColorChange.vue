<template>
  <div>
    <el-button type="primary" @click="handleChange"> 切换 </el-button>
  </div>
</template>

<script lang="ts" setup>

import {onMounted} from "vue";

const handleChange = () => {
  // 获取当前的主题模式
  const currentTheme = document.documentElement.getAttribute("data-theme") || localStorage.getItem('theme');
  // 切换主题模式
  const willChangeMode = currentTheme === "dark" ? "light" : "dark";

  // 更新DOM的主题模式
  document.documentElement.setAttribute("data-theme", willChangeMode);

  // 将主题模式保存到localStorage
  localStorage.setItem('theme', willChangeMode);

  // 在这里，你可以添加逻辑来根据新的主题模式改变CSS或其他样式
  // 例如，通过改变body的class来应用不同的CSS样式
  document.body.className = willChangeMode;
};

// 页面加载时从localStorage中读取主题模式并应用到DOM
// 重新加载页面
onMounted(() => {
  // 检查本地存储中是否存在主题模式
  if (localStorage.getItem('theme')) {
    // 如果存在，则应用主题模式
    document.documentElement.setAttribute("data-theme", localStorage.getItem('theme'));
  }
})
</script>

<style scoped>

</style>