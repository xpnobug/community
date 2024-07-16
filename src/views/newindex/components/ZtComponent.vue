<script lang="ts" setup>
import {watch,defineProps, computed} from "vue";
import {useRouter} from "vue-router";

//获取用户信息
const props = defineProps(['posts', 'loadings'])
const leftPost = computed(() => {
  return props.posts.filter(item => item && item.publishPlatform === 'LT-REAI专题');
});
const rightPost = computed(() => {
  return props.posts.filter(item => item && item.publishPlatform === '功能前瞻');
});
watch(() => props.loadings, (newValue, oldValue) => {
}, {immediate: true, deep: true})

const router = useRouter();
const toUserInfo = (item: any) => {
  router.push({path: '/post/' + item.articleId})
}
</script>

<template>
  <!--专题-->
  <div><!----> <!---->
    <div class="box" style="margin-bottom: 16px;">
      <div class="public">
        <div class="title">LT-REAI专题</div>
        <div class="contents contents-one">
          <div class="right-content">
            <a-empty v-if="leftPost.length === 0" :description="null" />
            <div class="subject-matter-text" v-if="props.loadings" v-for="item in leftPost.slice(0,1)"  >
              <a class="link"  @click="toUserInfo(item)" style="line-height: 20px;">
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
                  <li v-for="item in leftPost.slice(1,12)">
                    <div class="explain" style="width: 34px;">{{ item.tag }}</div>
                    <div class="explain-content">
                      <a class=""  @click="toUserInfo(item)">
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
          <div class="left-content left-content-public">
            <div class="identification">功能前瞻</div>
            <a-empty v-if="rightPost.length === 0" :description="null" />
            <div class="content-list" v-if="props.loadings">
              <ul>
                <li v-for="(item,index) in rightPost.slice(0,10)" :key="index">
                  <div class="serial-no">{{ index+1 }}</div>
                  <div class="serial-no-content">
                    <a class=""  @click="toUserInfo(item)">
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
.box .public .contents .right-content{
  display: flex;
}
/*设置手机端样式*/
@media screen and (orientation: portrait) {
  .box .public .title{
    margin: 20px !important;
  }
  .box .public .contents {
    flex-direction: column;
  }
  /*.box .public .contents .right-content{*/
  /*  margin-right: 0 !important;*/
  /*}*/
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