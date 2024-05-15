<script lang="ts" setup>
import {ref} from "vue";

const postList = ref([
  {
    tag: '资讯',
    cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    title: '奖金变“积分”？董明珠2亿年终奖陷罗生门--引发的有关“内购商城”的思考',
    content: '“董明珠多拿出2亿发年终奖”一事正在朝“罗生门”的方向发展。格力年终奖罗生门：究竟是2亿奖金还是价值2亿？事实证明，董明',
    time: '2023-04-01 12:00:00',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    read: '100',
    like: '100',
    comment: '100',
    share: '100',
    collect: '100',
  }, {
    tag: '帖子',
    cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    title: '奖金变“积分”？董明珠2亿年终奖陷罗生门--引发的有关“内购商城”的思考',
    content: '“董明珠多拿出2亿发年终奖”一事正在朝“罗生门”的方向发展。格力年终奖罗生门：究竟是2亿奖金还是价值2亿？事实证明，董明',
    time: '2023-04-01 12:00:00',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    read: '100',
    like: '100',
    comment: '100',
    share: '100',
    collect: '100',
  }, {
    tag: '帖子',
    cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    title: '奖金变“积分”？董明珠2亿年终奖陷罗生门--引发的有关“内购商城”的思考',
    content: '“董明珠多拿出2亿发年终奖”一事正在朝“罗生门”的方向发展。格力年终奖罗生门：究竟是2亿奖金还是价值2亿？事实证明，董明',
    time: '2023-04-01 12:00:00',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    read: '100',
    like: '100',
    comment: '100',
    share: '100',
    collect: '100',
  }
]);
const recommendList = ref([
  {
    contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    time: '12:00:00',
    place: '深圳',
  }, {
    contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    time: '12:00:00',
    place: '深圳',
  }, {
    contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    time: '12:00:00',
    place: '深圳',
  }, {
    contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
    author: 'LT-REAI小芋头',
    avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
    time: '12:00:00',
    place: '深圳',
  }
]);
</script>

<template>
  <div><!----> <!---->
    <div class="box" style="margin-bottom: 16px;"><!----> <!---->
      <div class="public">
        <div class="title">运营知识库</div>
        <div class="contents contents-three" style="min-height: 608px;">
          <div class="right-content">
            <div>
              <div v-for="item in postList" class="content-box">
                <a class="links" href="#">
                  <div class="pictures">
                    <div class="class-ification">{{ item.tag }}</div>
                    <img :src="item.cover" alt="" style="width: 100%; height: 100%; border-radius: 8px;">
                  </div>
                </a>
                <div class="picture-box"
                     style="display: flex; flex-direction: column; justify-content: space-between;">
                  <a class="links" href="#" style="display: block;">
                    <div class="pictures-title" style="margin-bottom: 5px;">{{ item.title }}</div>
                    <div class="picture-content">{{ item.content }}</div>
                  </a>
                  <a class="links" href="#" style="display: block;">
                    <div class="author-information">
                      <div class="information">
                        <div class="head-portrait">
                          <img :src="item.avatar" alt="" style="width: 100%; height: 100%; border-radius: 50%;">
                        </div>
                        <div class="release-time">
                          <span>{{ item.author }}</span>&nbsp;
                          <span> {{ item.time }} · 未知</span>
                        </div>
                      </div>
                      <div class="views">
                        <span>{{ item.read }} 浏览</span>
                        <span>{{ item.like }} 点赞</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="content-box"><a class="links" href="#">
                <div class="pictures">
                  <div class="video-box-icon">
                    <svg class="play-button-icon icon-play">
                      <use xlink:href="#svg-play"></use>
                    </svg>
                  </div>
                  <div class="class-ification">视频</div>
                  <img
                      alt=""
                      src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/2fba19c7ce76d6adaaad48f4a140a59f.gif?imageMogr2/crop/360x640/gravity/center"
                      style="width: 100%; height: 100%; border-radius: 8px;"></div>
              </a>
                <div class="picture-box"
                     style="display: flex; flex-direction: column; justify-content: space-between;"><a
                    class="links" href="#" style="display: block;">
                  <div class="pictures-title" style="margin-bottom: 5px;">莫兰迪一丨丿丶一丿
                    莫兰迪
                  </div>
                  <div class="picture-content"></div>
                </a> <a class="links" href="#" style="display: block;">
                  <div class="author-information">
                    <div class="information">
                      <div class="head-portrait"><img
                          alt=""
                          src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/26dc97940dbd4f72c44655896ef5331b.png?imageMogr2/crop/80x80/gravity/center"
                          style="width: 100%; height: 100%; border-radius: 50%;">
                      </div>
                      <div class="release-time"><span>私享时代</span> <span
                      >2022-09-13<span> · 未知</span></span></div>
                    </div>
                    <div class="views"><span>791 浏览</span> <span
                    >3 点赞</span></div>
                  </div>
                </a></div>
              </div>
            </div>
          </div>
          <div class="left-content recommended-list">
            <div class="">
              <div class="recommended-title">产品共创</div>
              <ul class="recommended">
                <li v-for="item in recommendList" :key="item.id" class="recommended-li">
                  <a class="link" href="#" target="_blank">
                    <div class="recommended-contents">{{ item.contents }}</div>
                  </a>
                  <a class="" href="#">
                    <div class="recommended-author">
                      <div class="author">
                        <div class="head-portrait"><img
                            :src="item.avatar"
                            alt=""
                            style="width: 100%; height: 100%; border-radius: 50%;">
                        </div>
                        <div class="author-name">{{ item.author }}</div>
                      </div>
                      <div class="release-times">{{ item.time }}<span> · {{ item.place }}</span></div>
                    </div>
                  </a></li>

              </ul>
            </div>
          </div>
        </div> <!----></div>
    </div> <!----></div>
</template>

<style scoped>
.box .public {
  margin-top: 28px;
  position: relative;
}

.box .public .title {
  margin: 5px;
  /*margin-bottom: 26px;*/
  font-size: 22px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
}

.box .public .contents {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
}

.box .public .contents .right-content {
  margin-right: 15px;
  /*width: 848px;*/
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: rgba(94, 92, 154, .06);
  padding: 28px;
}

.box .public .contents-three .right-content .content-box {
  display: flex;
  margin-bottom: 24px;
}

.box .public .contents-three .right-content .content-box .links {
  display: flex;
  cursor: pointer;
  color: #afb0c0;
  line-height: 20px;
}

a {
  touch-action: manipulation;
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .3s;
  -webkit-text-decoration-skip: objects;
}

.box .public .contents-three .right-content .content-box .pictures {
  width: 200px;
  height: 120px;
  flex: none;
  background-color: rgba(207, 208, 218, .2);
  background-size: 100% 100%;
  position: relative;
  border-radius: 8px;
  margin-right: 24px;
}

.box .public .contents-three .right-content .content-box .pictures .class-ification {
  line-height: 1.5;
  position: absolute;
  padding: 0 2px;
  text-align: center;
  top: 4px;
  left: 4px;
  border-radius: 4px;
  color: #fff;
  background: rgba(21, 21, 31, .6);
}

img {
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
}

.box .public .contents-three .right-content .content-box .picture-box {
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  flex-wrap: wrap;
}


.box .public .contents-three .right-content .content-box .picture-box .pictures-title {
  width: 568px;
  font-size: 16px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.box .public .contents-three .right-content .content-box .picture-box .picture-content {
  width: 100%;
  height: 62px;
  font-size: 14px;
  color: #afb0c0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.box .public .contents-three .right-content .content-box .picture-box .author-information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
}

.box .public .contents-three .right-content .content-box .picture-box .author-information .information {
  display: flex;
  align-items: center;
}

.box .public .contents-three .right-content .content-box .picture-box .author-information .information .head-portrait {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: rgba(207, 208, 218, .2);
  background-size: 100% 100%;
  margin-right: 8px;
}

.box .public .contents-three .right-content .content-box .picture-box .author-information .information .release-time, .box .public .contents-three .right-content .content-box .picture-box .author-information .views {
  font-size: 12px;
  color: #afb0c0;
}

/*視頻*/
.video-box-icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  color: #fff;
  background: rgba(21, 21, 31, .6);
  opacity: 0;
  transition: .5s;
  cursor: pointer;
}

.video-box-icon .icon-play {
  fill: #f0f8ff;
}

svg:not(:root) {
  overflow: hidden;
}

.icon-play {
  fill: #fff;
  width: 12px;
  height: 14px;
}

/*左側列表*/
.box .public .contents .left-content {
  /*width: 320px;*/
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
  padding: 24px 28px;
}

.box .public .contents-three .recommended-list .recommended-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
}

dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1em;
}

.box .public .contents-three .recommended-list .recommended .recommended-li:first-child {
  margin-top: 14px;
}

.box .public .contents-three .recommended-list .recommended .recommended-li {
  margin-top: 20px;
  border-bottom: 1px solid #eaeaf5;
  list-style-type: none;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .link {
  display: block;
  color: var(--reaicc-fontcolor);
  line-height: 20px;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .recommended-contents {
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--reaicc-fontcolor);
  margin-bottom: 7px;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .recommended-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .recommended-author .author {
  display: flex;
  align-items: center;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .recommended-author .author .head-portrait {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: rgba(207, 208, 218, .2);
  background-size: 100% 100%;
  margin-right: 8px;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .recommended-author .author .author-name {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
  font-size: 12px;
  color: #afb0c0;
}

.box .public .contents-three .recommended-list .recommended .recommended-li .recommended-author .release-times {
  font-size: 12px;
  color: #afb0c0;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .box .public .contents {
    flex-direction: column;
  }

  .box .public .contents .right-content {
    /*width: 375px;*/
  }

  .box .public .contents .left-content {
    /*width: 375px;*/
    padding: 0px 27px;
  }

  .box .public .contents-three .right-content .content-box .pictures {
    width: 120px;
    height: 120px;
  }

  .box .public .contents-three .right-content .content-box .picture-box .pictures-title {
    width: 249px;
  }

  .box .public .contents-three .right-content .content-box .picture-box .author-information .views {
    display: none;
  }
}
</style>