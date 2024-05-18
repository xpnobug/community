<script lang="ts" setup>
//获取用户信息
import {onMounted, watch} from "vue";

const props = defineProps(['posts','loadings'])
//监听loadings.value，修改loadings

watch(()=>props.loadings,(newValue,oldValue)=>{
  // console.log('workOrder变化了',newValue,oldValue)
},{immediate:true,deep:true})
// const recommendList = ref([
//   {
//     contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     author: 'LT-REAI小芋头',
//     avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
//     time: '12:00:00',
//     place: '深圳',
//   }, {
//     contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     author: 'LT-REAI小芋头',
//     avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
//     time: '12:00:00',
//     place: '深圳',
//   }, {
//     contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     author: 'LT-REAI小芋头',
//     avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
//     time: '12:00:00',
//     place: '深圳',
//   }, {
//     contents: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     author: 'LT-REAI小芋头',
//     avatar: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/8360dd93-6f22-45d8-8db3-6004e5d7e645.jpg',
//     time: '12:00:00',
//     place: '深圳',
//   }
// ]);
</script>

<template>
  <div><!----> <!---->
    <div class="box" style="margin-bottom: 16px;"><!----> <!---->
      <div class="public">
        <div class="title">运营知识库</div>
        <div class="contents contents-three" style="min-height: 608px;">
          <div class="right-content">
            <div v-if="props.loadings" v-for="item in props.posts">
              <div v-if="item.typeName === '运营知识库'">
                <div v-for="info in item.articleList.slice(0, 5)" class="content-box">
                  <a class="links" href="#">
                    <div class="pictures">
                      <div class="class-ification">{{ info.tag }}</div>
                      <img :src="info.coverImage" alt="" style="width: 100%; height: 100%; border-radius: 8px;">
                    </div>
                  </a>
                  <div class="picture-box"
                       style="display: flex; flex-direction: column; justify-content: space-between;">
                    <a class="links" href="#" style="display: block;">
                      <div class="pictures-title" style="margin-bottom: 5px;">{{ info.title }}</div>
                      <div class="picture-content">{{ info.content }}</div>
                    </a>
                    <a class="links" href="#" style="display: block;">
                      <div class="author-information">
                        <div class="information">
                          <div class="head-portrait">
                            <img :src="info.avatar" alt=""
                                 style="width: 100%; height: 100%; border-radius: 50%;">
                          </div>
                          <div class="release-time">
                            <span>{{ info.author }}</span>&nbsp;
                            <span> {{ info.publishDate }} · 未知</span>
                          </div>
                        </div>
                        <div class="views">
                          <span>{{ info.readCount }} 浏览</span>
                          <span>{{ info.likeCount }} 点赞</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div v-else v-for="item in 5">
              <a-skeleton active avatar :paragraph="{ rows: 3 }" />
            </div>
          </div>
          <div class="left-content recommended-list">
            <div class="">
              <div class="recommended-title">产品共创</div>
              <ul v-if="props.loadings" v-for="list in props.posts" class="recommended">
                <li v-for="item in list.articleList" v-if="list.typeName === '产品共创'" :key="item.id"
                    class="recommended-li">
                  <a class="link" href="#" target="_blank">
                    <div class="recommended-contents">{{ item.content }}</div>
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
                      <div class="release-times">{{ item.publishDate }}<span> · {{ item.place }}</span></div>
                    </div>
                  </a></li>

              </ul>
              <div v-else v-for="item in 5">
                <a-skeleton active />
              </div>
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
  width: 848px;
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
  width: 320px;
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