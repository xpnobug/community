<template>
  <main id="posts" class="posts" @click="postActionProcessing($event.target)">
    <a-space v-if="userId !== 'null'" style="width: 100%; justify-content: center;" warp>
      <a-button danger type="text" @click="fetchPosts('me')">我发布的</a-button>
      <a-button danger type="text" @click="fetchPosts('all')">所有All</a-button>
      <DiaLogComponents/>
    </a-space>
    <a-spin :spinning="loading" style="
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px;"
            tip="加载中..."/>
    <article v-for="(item, index) in friendPostList" v-show="loading === false" :id="'post-' + index + '-mxLp'"
             :data-author="item.nickName"
             :data-date="item.publishDate" :data-title="item.title" :data-url="item.url || 'undefined'"
             class="g-clear-both">
      <div class="post-avatar g-left">
        <img :src="item.avatar" alt="" class="g-alias-imgblock entered loading" data-ll-status="loading"
             draggable="true" loading="lazy">
      </div>
      <div class="post-main g-right">
        <header class="post-header g-clear-both">
          <div class="post-title g-left g-txt-ellipsis g-user-select">{{ item.nickName }}</div>
        </header>
        <section class="post-content g-inline-justify g-user-select">
          <p>{{ item.content }}</p>
          <div
              :class="['post-content-gallery', item.imgList.length > 0 ? 'grid-' + Math.min(item.imgList.length, 3) : '']">
            <figure v-for="img in item.imgList" :key="img" class="gallery-thumbnail" style="--aspectratio: auto;">
              <img :data-index="img.url" :src="img.url" alt="" class="thumbnail-image g-alias-imgblock" data-action="viewimage"
                   draggable="true" loading="lazy">
            </figure>
          </div>
          <figure v-for="music in item.musicList" :key="music.sid" class="post-content-audio" :style="{ '--background_image': `url(${music.songImg})` }">
            <div class="audio-meta">
              <span class="meta-image"><img :src="music.songImg" alt="" class="cover g-alias-imgblock" draggable="true" loading="lazy"></span>
              <span class="meta-text">
                <span class="title g-txt-ellipsis">{{ music.songName }}</span>
                <span class="artist g-txt-ellipsis">{{ music.singer }}</span>
              </span>
            </div>
            <div :id="music.sid" :data-attachment1="music.songUrl" :data-attachment2="music.songImg" :data-index="music.sid"
                 class="audio-btn canplay" data-action="audioplay"></div>
          </figure>
          <figure v-if="item.videoList.length" class="post-content-video aspectratio vertical"
                  style="--aspectratio: 888 / 1182;">
            <video :src="item.videoList[0]" class="play-vedio g-alias-videoblock"
                   controls controlslist="nodownload noplaybackrate noremoteplayback"
                   oncontextmenu="return false" preload="metadata"></video>
          </figure>
        </section>
        <section v-if="item.address" class="post-attachcontent g-txt-ellipsis g-user-select">{{
            item.address
          }}
        </section>
        <LikeComponents :index="index"
                        :initLikesList="initLikesList"
                        :ipAddress="ipAddress"
                        :likeList="likeList"
                        :postInfo="item" :pyqCommentList="pyqCommentList"/>
      </div>
    </article>
  </main>
  <footer v-show="loading === false" id="navigation">
    <div id="autoload" :class="{wait: autoWaitBool}" class="g-inline-center" data-indexdefault="1"
         data-lasttxt="没有更多了" data-normaltxt="加载更多" data-totalpages="21"
         data-waittxt="正在加载‥" v-text="autoStatusText.output"
         @click.stop="autoHandleClick"></div>
  </footer>
</template>

<script lang="ts" setup>
import {postActionProcessing} from "@/hooks/post.ts";
import {friendCircleList} from "@/api/friend-article";
import { onMounted, provide, ref, watch} from "vue";
import LikeComponents from "@/views/userPyq/component/likeComponents.vue";
import {getLikesList} from "@/api/likes";
import fetchIpAddress from "@/api/useIp";
import page from "@/api/base";
import DiaLogComponents from "@/views/userPyq/component/form/diaLogComponents.vue";
import {commentList} from "@/api/comment";

// 定义文章列表和用户ID
const friendPostList = ref([]); // 用于存储文章列表
const userId = localStorage.getItem('userId'); // 从本地存储获取用户ID

const currentFetchType = ref<'me' | 'all'>('me'); // 当前获取文章的类型

// 获取点赞列表
const likeList = ref([]); // 用于存储点赞列表
const initLikesList = () => {
  getLikesList().then(res => {
    likeList.value = res.data.data; // 更新点赞列表
  });
};
initLikesList(); // 初始加载点赞列表

const ipAddress = ref("");
fetchIpAddress().then(ip => {
  ipAddress.value = ip; // 获取并存储IP地址
});

const isClick = ref(false);
const handleComment = () => {
  isClick.value = !isClick.value; // 切换评论状态
};

// 评论数据
const pyqCommentList = ref([]); // 用于存储评论列表
const getCommentList = () => {
  commentList(page).then(res => {
    pyqCommentList.value = res.data.data; // 更新评论列表
  });
};
getCommentList(); // 初始加载评论列表

// 定义props
const props = defineProps(['externalFriendPostList']); // 定义接收的外部文章列表属性

// 监听props变化
watch(props, (newVal) => {
  if (newVal) {
    friendPostList.value = friendPostList.value.concat(newVal.externalFriendPostList); // 合并外部文章列表
  }
});

// 定义父组件事件
const emit = defineEmits(['send']); // 定义发送事件
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

const autoWaitBool = ref(false); // 自动加载等待状态

// 目标链接打开方式
function targetSelf(target: string) {
  window.location.href = target; // 打开目标链接
}

const loading = ref<boolean>(false);
// 获取文章列表
const fetchPosts = (type: 'me' | 'all') => {
  loading.value = true; // 显示加载状态
  currentFetchType.value = type;
  const fetchUserId = type === 'me' ? userId : 'null';
  page.currentPage = 1; // 重置页码
  autoParam.value.index = 1;
  friendCircleList(page, fetchUserId).then(res => {
    friendPostList.value = res.data.data; // 更新文章列表
    console.log(friendPostList.value);
    getCommentList();
    autoStatus('normal'); // 更新自动加载状态
    loading.value = false;
  });
};

// 初始化时获取当前用户的文章列表
fetchPosts('me');

// 传递列表重新加载方法
provide('initList', fetchPosts);

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
  if (!autoParam.value.isLast) autoAjaxRequest(); // 处理点击自动加载
}

// 自动加载滚动处理
function autoHandleScroll() {
  if (!autoParam.value.isLast) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.clientHeight;
    if (scrollTop > autoParam.value.scrollTopBefore && scrollTop + windowHeight > (autoParam.value.elements.posts?.offsetTop || 0)) {
      autoAjaxRequest(); // 当用户滚动到接近底部时发起自动加载请求
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
window.addEventListener('scroll', debounce(autoHandleScroll, 200)); // 防抖处理滚动事件

// 自动加载Ajax请求
function autoAjaxRequest() {
  if (!autoParam.value.ajaxLock) {
    autoParam.value.ajaxLock = true;
    autoStatus('wait');
    setTimeout(() => {
      autoParam.value.index++;
      page.currentPage = autoParam.value.index;
      friendCircleList(page, currentFetchType.value === 'me' ? userId : 'null').then(res => {
        friendPostList.value = friendPostList.value.concat(res.data.data); // 追加文章列表
        emit('send', res.data.data); // 发送数据到父组件
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
  autoParam.value.elements.posts = document.getElementById('posts'); // 获取文章列表元素
  autoParam.value.exist = !!document.getElementById('autoload'); // 检查是否存在自动加载元素
  autoParam.value.indexDef = autoParam.value.exist ? Number(document.getElementById('autoload')?.getAttribute('data-indexdefault')) : 0; // 获取默认索引
  autoParam.value.indexMax = autoParam.value.exist ? Number(document.getElementById('autoload')?.getAttribute('data-totalpages')) : 0; // 获取最大页数
  autoParam.value.navApi = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-api') || '' : ''; // 获取导航API

  autoStatusText.value.normaltxt = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-normaltxt') || '' : ''; // 正常状态文本
  autoStatusText.value.waittxt = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-waittxt') || '' : ''; // 等待状态文本
  autoStatusText.value.lasttxt = autoParam.value.exist ? document.getElementById('autoload')?.getAttribute('data-lasttxt') || '' : ''; // 最后状态文本

  if (autoParam.value.exist) {
    if (autoParam.value.indexDef < autoParam.value.indexMax) {
      autoParam.value.index = autoParam.value.indexDef;
      window.addEventListener('scroll', autoHandleScroll); // 绑定滚动事件
      autoStatus('normal');
    } else {
      autoStatus('last');
    }
  }
});
</script>

<style scoped>
div:first-child:not(.recent-posts) {
  -webkit-box-shadow: var(--reaicc-shadow-border);
  box-shadow: var(--reaicc-shadow-border);
  border-radius: 12px;
  /*background: var(--reaicc-card-bg);*/
  /*border: var(--style-border);*/
  /*width: calc(100% - 300px);*/
  -webkit-align-self: flex-start;
  align-self: flex-start;
  -ms-flex-item-align: start;
  -webkit-animation: slide-in 0.6s 0.1s backwards;
  -moz-animation: slide-in 0.6s 0.1s backwards;
  -o-animation: slide-in 0.6s 0.1s backwards;
  -ms-animation: slide-in 0.6s 0.1s backwards;
  animation: slide-in 0.6s 0.1s backwards;
}

img {
  border-style: none;
  border-radius: 8px;
  max-width: 100%;
  transition: all 0.2s ease 0s;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
}

img {
  border: 0 none;
}


@keyframes slide-in {
  0% {
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -o-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    -ms-filter: none;
    filter: none;
    transform: translateY(0px);
    opacity: 1;
    filter: none;
  }

}

@keyframes autowait-anim {
  0% {
    opacity: 0.4;
    opacity: 0.4;
  }
  100% {
    opacity: 1;
    opacity: 1;
  }

}

@keyframes g-animation-wait-circle {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }

}

@keyframes g-animation-transparent-to-opaque {
  0% {
    opacity: 0;
    opacity: 0;
  }
  100% {
    opacity: 1;
    opacity: 1;
  }

}

@keyframes funbox-anim {
  0% {
    opacity: 0;
    transform: translateX(5px);
    opacity: 0;
    transform: translateX(5px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    opacity: 1;
    transform: translateX(0px);
  }

}

</style>