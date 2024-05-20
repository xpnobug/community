<script lang="ts" setup>
import {watch, reactive, ref} from "vue";
//获取用户信息
const props = defineProps(['posts','loadings'])
watch(()=>props.loadings,(newValue,oldValue)=>{
},{immediate:true,deep:true})
// const ztList = ref([
//   {
//     id: 1,
//     cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/76df301b-d0ef-45b0-95fc-979f2d358782.jpg',
//     title: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     tag: '帖子',
//     content: 'LT-REAI开发日报：通用版4.1.1 后台关闭了消息订阅，前端依旧开启的问题修复完成（4.19/周五）',
//     author: 'LT-REAI小芋头'
//   },
//   {
//     id: 2,
//     cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/76df301b-d0ef-45b0-95fc-979f2d358782.jpg',
//     title: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     tag: '帖子',
//     content: '1111111111111111111111111111111111111',
//     author: 'LT-REAI小芋头'
//   },
//   {
//     id: 3,
//     cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/76df301b-d0ef-45b0-95fc-979f2d358782.jpg',
//     title: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     tag: '帖子',
//     content: 'LT-REAI开发日报：通用版4.1.1 后台关闭了消息订阅，前端依旧开启的问题修复完成（4.19/周五）',
//     author: 'LT-REAI小芋头'
//   },
//   {
//     id: 4,
//     cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/76df301b-d0ef-45b0-95fc-979f2d358782.jpg',
//     title: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     tag: '帖子',
//     content: 'LT-REAI开发日报：通用版4.1.1 后台关闭了消息订阅，前端依旧开启的问题修复完成（4.19/周五）',
//     author: 'LT-REAI小芋头'
//   },
//   {
//     id: 5,
//     cover: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/76df301b-d0ef-45b0-95fc-979f2d358782.jpg',
//     title: 'LT-REAI|企微推送/消息开关/随机推荐等内容新增优化',
//     tag: '帖子',
//     content: 'LT-REAI开发日报：通用版4.1.1 后台关闭了消息订阅，前端依旧开启的问题修复完成（4.19/周五）',
//     author: 'LT-REAI小芋头'
//   },
// ]);
//
// const serialList = ref([
//   {
//     id: '1',
//     no: 1,
//     content: '升职加薪好办法',
//   },
//   {
//     id: '2',
//     no: 2,
//     content: '玩好抖音，你不能忽视的短视频内容套路化创作技巧！',
//   }, {
//     id: '3',
//     no: 3,
//     content: '这套版块图标有喜欢的可以自取',
//   }, {
//     id: '4',
//     no: 4,
//     content: '文案新人首先要做的事',
//   }, {
//     id: '5',
//     no: 5,
//     content: 'CC社区：“知识付费”解读（下）',
//   }
// ]);
</script>

<template>
  <!--专题-->
  <div><!----> <!---->
    <div class="box" style="margin-bottom: 16px;">
      <div class="public">
        <div class="title">LT-REAI专题</div>
        <div class="contents contents-one">
          <div>
            <div class="right-content">
              <div class="subject-matter-text" v-if="props.loadings" v-for="item in props.posts.slice(0,1)"  >
                <a class="link" href="#" style="line-height: 20px;">
                  <div class="picture"><!---->
                    <img :src="item.coverImage"
                         alt=""
                         style="width: 100%; height: 100%; border-radius: 8px;">
                  </div>
                  <div class="title">{{ item.title }}</div>
                  <div class="title-content">
                    <a class="link" href="#"><!--体验及咨询可V+小番茄--></a>
                  </div>
                </a>
              </div>
              <div class="subject-matter-text" v-else>
                <a-skeleton active />
              </div>
              <div class="content-list">
                <div class="" >
                  <ul v-if="props.loadings">
                    <li v-for="item in props.posts.slice(1,11)">
                      <div class="explain" style="width: 34px;">{{ item.tag }}</div>
                      <div class="explain-content"><a class="" href="#">
                        {{ item.title }}
                      </a></div>
                      <div class="author"><a class="" href="#">{{ item.author }}</a>
                      </div>
                    </li>
                  </ul>
                  <div class="content-list" v-else v-for="item in 3">
                    <a-skeleton active />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="left-content left-content-public">
            <div class="">
              <div class="identification">功能前瞻</div>
              <div class="content-list" v-if="props.loadings">
                <ul>
                  <li v-for="(item,index) in props.posts.slice(0,10)" :key="index">
                    <div class="serial-no">{{ index+1 }}</div>
                    <div class="serial-no-content">
                      <a class="" href="#">
                        {{ item.content }}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="content-list" v-else v-for="item in 3">
                <a-skeleton active />
              </div>
            </div>
          </div>
        </div> <!----></div> <!----> <!----></div> <!----></div>
</template>


<style scoped>
.box .public {
  margin-top: 28px;
  position: relative;
}

.box .public .title {
  margin-bottom: 26px;
  font-size: 22px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
}

/*.box .public .contents-one {*/
/*  height: 402px;*/
/*}*/

.box .public .contents {
  display: flex;
  justify-content: space-between;
}

.box .public .contents-one .right-content {
  display: flex;
}

.box .public .contents .right-content {
  /*margin-right: 15px;*/
  /*width: 848px;*/
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: rgba(94, 92, 154, .06);
  padding: 28px;
}

.box .public .contents-one .right-content .subject-matter-text {
  width: 320px;
  margin-right: 22px;
}

.box .public .contents-one .right-content .subject-matter-text .picture {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: rgba(207, 208, 218, .2);
  background-size: 100% 100%;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
}

.picture {
  width: 52px;
  height: 52px;
}

img {
  -o-object-fit: cover;
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
}

.box .public .contents-one .right-content .subject-matter-text .title {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 16px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
  margin: 16px 0 0;
}

.box .public .contents-one .right-content .subject-matter-text .title-content {
  font-size: 14px;
  margin-top: 7px;
  color: #afb0c0;
}

.box .public .contents-one .right-content .subject-matter-text .title-content > .link, .box .public .contents-one .right-content .subject-matter-text .title-content > span {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  line-height: 18px;
  color: #afb0c0;
}

/*帖子列表*/
.box .public .contents-one .right-content .content-list {
  width: 450px;
}

dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1em;
}

.box .public .contents-one .right-content .content-list ul li {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
}

.box .public .contents-one .right-content .content-list ul li .explain {
  text-align: center;
  font-size: 12px;
  color: #fff;
  height: 20px;
  border-radius: 4px;
  background: #afb0c0;
  margin-right: 8px;
  flex-shrink: 0;
  padding: 0 5px;
}

.box .public .contents-one .right-content .content-list ul li .explain-content, .box .public .contents-one .right-content .content-list ul li .explain-content a {
  font-size: 14px;
  display: block;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--reaicc-fontcolor);
}

.box .public .contents-one .right-content .content-list ul li .author {
  width: 68px;
  flex-shrink: 0;
  white-space: nowrap;
  font-size: 14px;
  color: #afb0c0;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 16px;
}

.box .public .contents-one .right-content .content-list ul :last-child {
  margin-bottom: 0;
}

.box .public .contents-one .right-content .content-list ul li .author a {
  display: block;
  color: #afb0c0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.box .public .contents-one .right-content .content-list ul :last-child {
  margin-bottom: 0;
}

a {
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .3s;
  -webkit-text-decoration-skip: objects;
}

/*左侧排行榜*/
.box .public .contents .left-content {
  width: 320px;
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
  padding: 24px 28px;
}

.box .public .contents .left-content-public .identification {
  font-size: 16px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
  margin-bottom: 14px;
}

.box .public .contents .left-content-public .content-list {
  height: 100%;
}

.box .public .contents .left-content-public .content-list ul li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.box .public .contents .left-content-public .content-list ul :first-child .serial-no {
  width: 20px;
  opacity: 1;
  background: #337fff;
}

.box .public .contents .left-content-public .content-list ul li .serial-no {
  width: 20px;
  flex: none;
  text-align: center;
  line-height: 20px;
  border-radius: 4px;
  margin-right: 12px;
  font-size: 14px;
  color: #fff;
  background: #cfd0da;
}

.box .public .contents .left-content-public .content-list ul li .serial-no-content {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.box .public .contents .left-content-public .content-list ul :last-child {
  margin-bottom: 0;
}

.box .public .contents .left-content-public .content-list ul li .serial-no-content a {
  width: 232px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: var(--reaicc-fontcolor);
  line-height: 20px;
}

.box .public .contents .left-content-public .content-list ul :last-child {
  margin-bottom: 0;
}

.box .public .contents .left-content-public .content-list ul :nth-child(2) .serial-no {
  opacity: .6;
  background: #337fff;
}

.box .public .contents .left-content-public .content-list ul :nth-child(3) .serial-no {
  opacity: .3;
  background: #337fff;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .box .public .title{
    margin: 20px !important;
  }
  .box .public .contents {
    flex-direction: column;
  }

  .box .public .contents-one .right-content {
    width: auto;
    flex-direction: column;
  }

  .box .public .contents-one .right-content .subject-matter-text {
    width: 100%;
  }

  .box .public .contents-one .right-content .content-list {
    width: auto;
  }

  .box .public .contents .left-content {
    width: auto;
  }

  ul {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .box .public .contents .left-content-public .content-list ul li .serial-no-content a {
    width: 100%;
  }
}
</style>