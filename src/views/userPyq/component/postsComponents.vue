<script lang="ts" setup>
import {postActionProcessing} from "@/hooks/post.ts"
import {friendCircleList} from "@/api/article";
import {reactive, ref, getCurrentInstance, inject, defineProps, watch} from "vue";
import {timeUtils} from "@/store/TimeUtil";

interface Page {
  pageSize: number;
  currentPage: number;
  count: number;
  maxPage: number;
  minPage: number;
  // firstResult: number;
  // recount: boolean;
}

const page = reactive<Page>({
  pageSize: 10,
  currentPage: 1,
  count: 10,
  maxPage: 10,
  minPage: 1,
});
const friendPostList = ref([]);
const postsList = () => {
  friendCircleList(page, "1838721172619927552").then(res => {
    friendPostList.value = res.data.data;
  })
}
postsList();
const props = defineProps(['externalFriendPostList'])
watch(props, (newVal, oldVal) => {
  // 监听外部传入的props数据变化
  if (newVal) {
    // console.log('props中的数据存在', newVal.externalFriendPostList)
    friendPostList.value = friendPostList.value.concat(newVal.externalFriendPostList);
  }
})


</script>

<template>
  <main id="posts" class="posts" @click="postActionProcessing($event.target)">
    <article v-for="(item,index) in friendPostList" :id="'post-' + index + '-mxLp'" :data-author="item.author"
             :data-date="item.publishDate" :data-title="item.title"
             class="g-clear-both" data-url="undefined">
      <div class="post-avatar g-left">
        <img :src="item.avatar" alt="" class="g-alias-imgblock entered loading" data-ll-status="loading"
             draggable="true"
             loading="lazy">
      </div>
      <div class="post-main g-right">
        <header class="post-header g-clear-both">
          <div class="post-title g-left g-txt-ellipsis g-user-select">{{ item.author }}</div>
        </header>
        <section class="post-content g-inline-justify g-user-select">
          <p class=""> {{ item.content }} </p>
          <div :class="[ 'post-content-gallery',item.imgList.length > 0 ? 'grid-' + item.imgList.length : '']">
            <figure v-for="img in item.imgList" class="gallery-thumbnail" style="--aspectratio: auto;">
              <img
                  :data-index="img"
                  :src="img"
                  alt=""
                  class="thumbnail-image g-alias-imgblock"
                  data-action="viewimage" draggable="true"
                  loading="lazy">
            </figure>
          </div>

          <figure v-for="music in item.musicList" class="post-content-audio"
                  style="--background_image: url(https://p2.music.126.net/UyDVlWWgOn8p8U8uQ_I1xQ==/7934075907687518.jpg?param=400y400);">
            <div class="audio-meta"><span class="meta-image"><img
                alt=""
                class="cover g-alias-imgblock" draggable="true" loading="lazy"
                :src="music.songImg"></span>
              <span class="meta-text">
                <span class="title g-txt-ellipsis">{{ music.songName }}</span>
                <span class="artist g-txt-ellipsis">{{ music.singer }}</span>
              </span></div>
            <div :id="music.sid" class="audio-btn canplay"
                 data-action="audioplay"
                 :data-attachment1="music.songUrl"
                 data-attachment2="https://p2.music.126.net/UyDVlWWgOn8p8U8uQ_I1xQ==/7934075907687518.jpg?param=400y400"
                 :data-index="music.sid"></div>
          </figure>

          <figure v-if="item.videoList.length !== 0" class="post-content-video aspectratio vertical" style="--aspectratio: 888 / 1182;">
            <video class="play-vedio g-alias-videoblock"
                   controls="controls" controlslist="nodownload noplaybackrate noremoteplayback" oncontextmenu="return false"
                   poster="" preload="metadata"
                   :src="item.videoList"></video>
          </figure>

        </section>
        <section class="post-attachcontent g-txt-ellipsis g-user-select" v-if="item.address != null">{{ item.address }}</section>
        <footer class="post-footer g-clear-both">
          <div class="post-info g-left g-txt-ellipsis"><span
              class="post-date">{{ timeUtils.convertTime(item.publishDate, true) }}</span></div>
          <div class="post-fun g-right">
            <div :data-index="index + '-mxLp'" class="fun-ico g-txt-hide" data-action="fun">互动</div>
            <div :id="item.articleId" class="fun-box">
              <div :data-index="index" class="fun-btn like allow" data-action="like"
                   data-likedtext="取消" data-liketext="赞">赞
              </div>
              <div :data-index="index + '-mxLp'" class="fun-btn comment allow" data-action="comment" data-count="0"
                   data-people="0">评论
              </div>
            </div>
          </div>
        </footer>
        <aside :id="'like-'+item.articleId" class="post-aside show">
          <div :id="'post-'+item.articleId+'-mxLp-like'"
               class="fun-area post-like g-clear-both show">
            <ul class="like-userslist g-right-flex">
              <li class="like-name more" data-separator=",">1位喜欢</li>
            </ul>
          </div>
          <div id="post-0-mxLp-comment" class="fun-area post-comment g-clear-both index">
            <ul id="post-0-mxLp-comment-list" class="comment-itemslist" data-hash1="5xVU5S"></ul>
          </div>
        </aside>
      </div>
    </article>
    <article id="post-1-mxLp" class="g-clear-both" data-author="undefined" data-date="undefined" data-title="undefined"
             data-url="undefined">
      <div class="post-avatar g-left"><img alt="" class="g-alias-imgblock entered loading"
                                           data-ll-status="loading" draggable="true" loading="lazy"
                                           src="https://q1.qlogo.cn/g?b=qq&amp;nk=2877406366&amp;s=640"></div>
      <div class="post-main g-right">
        <header class="post-header g-clear-both">
          <div class="post-title g-left g-txt-ellipsis g-user-select">REAI</div>
        </header>
        <section class="post-content g-inline-justify g-user-select">
          <p><br></p>
          <figure class="post-content-audio"
                  style="--background_image: url(https://p2.music.126.net/UyDVlWWgOn8p8U8uQ_I1xQ==/7934075907687518.jpg?param=400y400);">
            <div class="audio-meta"><span class="meta-image"><img
                alt=""
                class="cover g-alias-imgblock" draggable="true" loading="lazy"
                src="https://p2.music.126.net/UyDVlWWgOn8p8U8uQ_I1xQ==/7934075907687518.jpg?param=400y400"></span><span
                class="meta-text"><span class="title g-txt-ellipsis">此生不换</span><span
                class="artist g-txt-ellipsis">青鸟飞鱼</span></span></div>
            <div id="asveh6y4c3lfaa954ed117014bd98c0831e012ae1caa" class="audio-btn canplay"
                 data-action="audioplay"
                 data-attachment1="https://music.163.com/song/media/outer/url?id=25638340.mp3"
                 data-attachment2="https://p2.music.126.net/UyDVlWWgOn8p8U8uQ_I1xQ==/7934075907687518.jpg?param=400y400"
                 data-index="asveh6y4c3lfaa954ed117014bd98c0831e012ae1caa"></div>
          </figure>
        </section>
        <section></section>
        <footer class="post-footer g-clear-both">
          <div class="post-info g-left g-txt-ellipsis"><span class="post-date">2023-09-03 21:07:33</span></div>
          <div class="post-fun g-right">
            <div class="fun-ico g-txt-hide" data-action="fun" data-index="1-mxLp">互动</div>
            <div id="dzaa954ed117014bd98c0831e012ae1caa" class="fun-box">
              <div class="fun-btn like allow" data-action="like" data-index="aa954ed117014bd98c0831e012ae1caa"
                   data-likedtext="取消" data-liketext="赞">赞
              </div>
              <div class="fun-btn comment allow" data-action="comment" data-count="0" data-index="1-mxLp"
                   data-people="0">评论
              </div>
            </div>
          </div>
        </footer>
        <aside id="likesaa954ed117014bd98c0831e012ae1caa" class="post-aside show">
          <div id="post-aa954ed117014bd98c0831e012ae1caa-mxLp-like" class="fun-area post-like g-clear-both show">
            <ul class="like-userslist g-right-flex">
              <li class="like-name more" data-separator=",">13位喜欢</li>
            </ul>
          </div>
          <div id="post-1-mxLp-comment" class="fun-area post-comment g-clear-both index">
            <ul id="post-1-mxLp-comment-list" class="comment-itemslist" data-hash1="5xVU5S"></ul>
          </div>
        </aside>
      </div>
    </article>
  </main>
</template>


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