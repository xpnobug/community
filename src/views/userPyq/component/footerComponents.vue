<template>
  <footer id="navigation">
    <div id="autoload" :class="{wait: autoWaitBool}" class="g-inline-center" data-indexdefault="1"
         data-lasttxt="没有更多了" data-normaltxt="加载更多" data-totalpages="21"
         data-waittxt="正在加载‥" v-text="autoStatusText.output"
         @click.stop="autoHandleClick"></div>
  </footer>
</template>

<script lang="ts" setup>
import {friendCircleList} from "@/api/friend-article.ts";
import {onMounted, ref} from "vue";


const userId = localStorage.getItem('userId');
// 定义父组件事件
const emit = defineEmits(['send']);
const siteParams = {
  userIP: "111.205.14.9",
  userUid: "MTExMjA1MTQ5",
  userLoggedIn: false,
  bgmAutoPlay: true,
  bgmAutoNext: true,
  ajaxDelay: 500,
  editorAntiDialogClose: true,
  SSL: true
};

// 初始化分页参数
const page = ref({
  pageSize: 10,
  currentPage: 1,
  count: 10,
  maxPage: 1,
  minPage: 1,
});

// 初始化自动加载参数
const autoParam = ref({
  exist: false,
  index: 1,
  indexDef: 0,
  indexMax: 0,
  navApi: '',
  isLast: undefined,
  ajaxLock: false,
  ajaxDelay: siteParams.ajaxDelay,
  scrollTopBefore: 0,
  elements: {
    posts: null as HTMLElement | null
  }
});

// 初始化自动状态文本
const autoStatusText = ref({
  normaltxt: '',
  waittxt: '',
  lasttxt: '',
  output: ''
});

const autoWaitBool = ref(false);

// 目标链接打开方式
function targetSelf(target: string) {
  window.location.href = target;
}

// 自动加载状态更新
function autoStatus(s: string) {
  switch (s) {
    case 'last':
      autoParam.value.isLast = true;
      autoWaitBool.value = false;
      autoStatusText.value.output = autoStatusText.value.lasttxt;
      break;
    case 'wait':
      autoWaitBool.value = true;
      autoStatusText.value.output = autoStatusText.value.waittxt;
      break;
    case 'normal':
      autoParam.value.isLast = false;
      autoWaitBool.value = false;
      autoStatusText.value.output = autoStatusText.value.normaltxt;
      break;
  }
}

// 自动加载点击处理
function autoHandleClick() {
  if (!autoParam.value.isLast) autoAjaxRequest();
}

// 自动加载滚动处理
function autoHandleScroll() {
  if (!autoParam.value.isLast) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.clientHeight;
    if (scrollTop > autoParam.value.scrollTopBefore && scrollTop + windowHeight > (autoParam.value.elements.posts?.offsetTop || 0)) {
      autoAjaxRequest();
    }
    autoParam.value.scrollTopBefore = scrollTop;
  }
}

// 防抖函数，避免滚动事件频繁触发
function debounce(fn, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
}

// 绑定滚动事件
window.addEventListener('scroll', debounce(autoHandleScroll, 200));

// 自动加载Ajax请求
function autoAjaxRequest() {
  if (!autoParam.value.ajaxLock) {
    autoParam.value.ajaxLock = true;
    autoStatus('wait');
    setTimeout(() => {
      autoParam.value.index++;
      page.value.currentPage = autoParam.value.index;
      // friendCircleList 函数需要在项目中定义并导入
      friendCircleList(page.value, userId ? userId : 'null').then(res => {
        // 发送数据到父组件
        emit('send', res.data.data);
        autoStatus(autoParam.value.index < res.data.maxPage ? 'normal' : 'last');
        autoParam.value.ajaxLock = false;
      }).catch(err => {
        console.log('nav error: ' + err.message);
        autoParam.value.ajaxLock = false;
      });
    }, autoParam.value.ajaxDelay);
  }
}

// 组件挂载时执行的操作
onMounted(() => {
  autoParam.value.elements.posts = document.getElementById('posts');
  autoParam.value.exist = !!document.getElementById('autoload');
  autoParam.value.indexDef = autoParam.value.exist ? Number(document.getElementById('autoload')?.getAttribute('data-indexdefault')) : 0;
  autoParam.value.indexMax = autoParam.value.exist ? Number(document.getElementById('autoload')?.getAttribute('data-totalpages')) : 0;
  autoParam.value.navApi = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-api') || '' : '';

  autoStatusText.value.normaltxt = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-normaltxt') || '' : '';
  autoStatusText.value.waittxt = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-waittxt') || '' : '';
  autoStatusText.value.lasttxt = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-lasttxt') || '' : '';

  if (autoParam.value.exist) {
    if (autoParam.value.indexDef < autoParam.value.indexMax) {
      autoParam.value.index = autoParam.value.indexDef;
      window.addEventListener('scroll', autoHandleScroll);
      autoStatus('normal');
    } else {
      autoStatus('last');
    }
  }
});
</script>

<style scoped>

</style>