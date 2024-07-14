<template>

  <main id="posts" class="posts" @click="postActionProcessing($event.target)">
    <a-space warp style="width: 100%; justify-content: center;" v-if="userId !=null">
      <a-button type="text" danger @click="readMeList()">我发布的</a-button>
<!--      <a-button type="text" danger @click="readMeFollowList()">关注</a-button>-->
      <a-button type="text" danger @click="readAllList()">所有All</a-button>
      <DiaLogComponents/>
    </a-space>
    <article v-for="(item, index) in friendPostList" :id="'post-' + index + '-mxLp'" :data-author="item.author"
             :data-date="item.publishDate" :data-title="item.title" class="g-clear-both" :data-url="item.url || 'undefined'">
      <div class="post-avatar g-left">
        <img :src="item.avatar" alt="" class="g-alias-imgblock entered loading" data-ll-status="loading" draggable="true" loading="lazy">
      </div>
      <div class="post-main g-right">
        <header class="post-header g-clear-both">
          <div class="post-title g-left g-txt-ellipsis g-user-select">{{ item.author }}</div>
        </header>
        <section class="post-content g-inline-justify g-user-select">
          <p>{{ item.content }}</p>
          <div :class="['post-content-gallery', item.imgList.length > 0 ? 'grid-' +  Math.min(item.imgList.length, 3)  : '']">
            <figure v-for="img in item.imgList" :key="img" class="gallery-thumbnail" style="--aspectratio: auto;">
              <img :data-index="img" :src="img" alt="" class="thumbnail-image g-alias-imgblock" data-action="viewimage" draggable="true" loading="lazy">
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
</template>

<script lang="ts" setup>
import {postActionProcessing} from "@/hooks/post.ts";
import {friendCircleList} from "@/api/article";
import {defineProps, provide, ref, watch} from "vue";
import LikeComponents from "@/views/userPyq/component/likeComponents.vue";
import {getLikesList} from "@/api/likes";
import fetchIpAddress from "@/api/useIp";
import page from "@/api/base";
import DiaLogComponents from "@/views/userPyq/component/form/diaLogComponents.vue";
import {commentList} from "@/api/comment";

// 定义文章列表和用户ID
const friendPostList = ref([]);
const userId = localStorage.getItem('userId');
// 获取文章列表
const postsList = () => {
  friendCircleList(page, userId ? userId : 'null').then(res => {
    friendPostList.value = res.data.data;
  })
}
postsList();
//传递列表重新加载方法
provide('initList', postsList);

const readMeList = () => {
  friendCircleList(page, userId).then(res => {
    friendPostList.value = res.data.data;
  })
}


const readAllList = () => {
  friendCircleList(page, "null").then(res => {
    friendPostList.value = res.data.data;
  })
}

// 定义props
const props = defineProps(['externalFriendPostList']);

// 监听props变化
watch(props, (newVal) => {
  if (newVal) {
    friendPostList.value = friendPostList.value.concat(newVal.externalFriendPostList);
  }
})

// 获取点赞列表
const likeList = ref([]);
const initLikesList = () => {
  getLikesList().then(res => {
    likeList.value = res.data.data;
  })
}
initLikesList();

const ipAddress = ref("");
fetchIpAddress().then(ip => {
  ipAddress.value = ip;
})

const isClick = ref(false);
const handleComment = () => {
  console.log(isClick)
  isClick.value = !isClick.value;
}

// 评论数据
const pyqCommentList = ref([]);
commentList(page).then(res => {
  pyqCommentList.value = res.data.data;
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