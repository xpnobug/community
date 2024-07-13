<template>
  <div class="main-newchat" :themes="currentTheme" :class="{ dark: isDarkMode }">
    <div class="app-container">
      <button class="mode-switch" @click="toggleDarkMode">
        <svg class="sun" fill="none" stroke="#fbb046" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs/><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg class="moon" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24"><defs/><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const isDarkMode = ref(false);
// 计算当前主题
const currentTheme = computed(() => (isDarkMode.value ? 'dark' : 'light'));

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  handleChange();
};


const handleChange = () => {
  // 获取当前的主题模式
  const currentTheme = document.documentElement.getAttribute("data-theme") || localStorage.getItem('theme');
  // 切换主题模式
  const willChangeMode = currentTheme === "dark" ? "light" : "dark";

  // 更新DOM的主题模式
  document.documentElement.setAttribute("data-theme", willChangeMode);
  // 更新朋友圈主题
  document.documentElement.className = willChangeMode === "dark" ? "darkmode":"";

  // 将主题模式保存到localStorage
  localStorage.setItem('theme', willChangeMode);

  // 在这里，你可以添加逻辑来根据新的主题模式改变CSS或其他样式
  // 例如，通过改变body的class来应用不同的CSS样式
  document.body.className = willChangeMode;
};

// 页面加载时从localStorage中读取主题模式并应用到DOM
// 页面加载时从localStorage中读取主题模式并应用到DOM
onMounted(() => {
  // 从localStorage中获取保存的主题模式
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    // 如果存在已保存的主题模式，则应用它
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.className = savedTheme === "dark" ? "darkmode":"";
    // 更新isDarkMode变量的值
    isDarkMode.value = savedTheme === "dark";
  }
});
</script>

<style scoped>


.main-newchat.dark .mic {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mic-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/%3E%3Cpath d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8'/%3E%3C/svg%3E%0A");
}
.main-newchat.dark .camera {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-camera-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56'/%3E%3C/svg%3E%0A");
}
.main-newchat.dark .maximize {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-maximize' viewBox='0 0 24 24'%3E%3Cpath d='M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'/%3E%3C/svg%3E%0A");
}
.main-newchat.dark .magnifier {
  color: #fff;
}
.main-newchat.dark .chat-header {
  border-color: var(--message-bg);
}
.main-newchat.dark .btn-close-right {
  color: #fff;
}

a {
  text-decoration: none;
}

.app-container {
  /*background-color: var(--app-background);*/
  width: 100%;
  height: 100%;
  font-family: "DM Sans", sans-serif;
  display: flex;
  justify-content: center;
  transition: 0.2s;
}




.mode-switch {
  /*z-index: 1;*/
  /*position: absolute;*/
  /*top: 20px;*/
  /*left: 36px;*/
  /*background-color: var(--chat-background);*/
  border: none;
  color: #ddd;
  outline: none;
  cursor: pointer;
  box-shadow: var(--navigation-box-shadow);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  transform-origin: center;
}
.mode-switch svg {
  width: 0;
  height: 24px;
  transition: all 0.3s ease-in;
  transform-origin: center;
}
.mode-switch .moon {
  opacity: 0;
}
.mode-switch .sun {
  width: 24px;
}

.dark .moon {
  opacity: 1;
  width: 24px;
}

.dark .sun {
  opacity: 0;
  width: 0;
}

@media screen and (max-width: 900px) {


  .mode-switch {
    left: 16px;
  }
}

</style>
