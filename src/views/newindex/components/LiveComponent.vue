<script lang="ts" setup>
import {computed, watch} from 'vue'
import {useRouter} from "vue-router";

const props = defineProps(['dict','posts','loadings'])
const leftPost = computed(() => {
  return props.posts.filter(item => item && item.type === 'home-colorlife');
});
const rightPost = computed(() => {
  return props.posts.filter(item => item && item.type === 'home-news');
});
watch(()=>props.loadings,(newValue,oldValue)=>{
},{immediate:true,deep:true})

const router = useRouter();
const toPostInfo = (item: any) => {
  router.push({path: '/post', query: {articleId: item.articleId}})
}
</script>
<template>
  <div><!----> <!---->
    <div class="box" style="margin-bottom: 16px;"><!---->
      <div class="public">
        <div class="title">{{ dict["home-colorlife"] }}</div>
        <div class="contents contents-tow">
          <div class="right-content">
            <div class="subject-matter-text">
              <ul v-if="props.loadings" >
                <a-empty v-if="leftPost.length === 0" :description="null" />
                <li v-for="item in leftPost.slice(0,3)" :key="item.id">
                  <div class="picture"><!---->
                    <a class="" @click="toPostInfo(item)" style="width: 100%; height: 100%; display: block;"><img
                        :src="item.coverImage"
                        alt=""
                        style="width: 100%; height: 100%; border-radius: 8px;">
                    </a>
                  </div>
                  <div class="picture-title"><a class="" @click="toPostInfo(item)">
                    {{ item.title }}
                  </a></div>
                </li>
              </ul>
              <div v-else>
                <a-skeleton active avatar :paragraph="{ rows: 3 }" />
              </div>
            </div>
            <div class="subject-matter-text">
              <ul v-if="props.loadings" >
                <li v-for="item in leftPost.slice(3,6)" :key="item.id">
                  <div class="picture"><!---->
                    <a class="" @click="toPostInfo(item)" style="width: 100%; height: 100%; display: block;"><img
                        :src="item.coverImage"
                        alt=""
                        style="width: 100%; height: 100%; border-radius: 8px;">
                    </a>
                  </div>
                  <div class="picture-title"><a class="" @click="toPostInfo(item)">
                    {{ item.title }}
                  </a></div>
                </li>
              </ul>
              <div v-else>
                <a-skeleton active avatar :paragraph="{ rows: 3 }" />
              </div>
            </div>

          </div>
          <div class="left-content left-content-public">
            <div class="">
              <div class="identification">{{ dict["home-news"] }}</div>
              <div class="content-list">
                <ul v-if="props.loadings">
                  <a-empty v-if="rightPost.length === 0" :description="null" />
                  <li v-for="(item,index) in rightPost" :key="item.articleId">
                    <div class="serial-no">{{ index+1 }}</div>
                    <div class="serial-no-content"><a class="" @click="toPostInfo(item)">{{ item.content }}</a>
                    </div>
                  </li>
                </ul>
                <div class="content-list" v-else v-for="item in 3">
                  <a-skeleton active />
                </div>
              </div>
            </div>
          </div>
        </div> <!----></div> <!----></div> <!----></div>
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

/*.box .public .contents-tow {*/
/*  height: 402px;*/
/*}*/

.box .public .contents {
  display: flex;
  justify-content: space-between;
}

.box .public .contents-tow .right-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}


.box .public .contents-tow .right-content .subject-matter-text {
  margin-bottom: 15px;
}

.box .public .contents-tow .right-content .subject-matter-text ul {
  display: flex;
  justify-content: space-between;
}

dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1em;
}

.box .public .contents-tow .right-content .subject-matter-text ul li {
  margin: 15px;
  text-decoration: none;
  /*去除小黑点*/
  list-style: none;
  width: 233px;
}

.box .public .contents-tow .right-content .subject-matter-text ul li .picture {
  position: relative;
  width: 100%;
  height: 144px;
  border-radius: 8px;
  background-color: rgba(207, 208, 218, .2);
  background-size: 100% 100%;
  margin: 15px;
}

.picture {
  width: 52px;
  height: 52px;
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

img {
  vertical-align: middle;
  border-style: none;
  object-fit: cover;
}

.box .public .contents-tow .right-content .subject-matter-text ul li .picture-title {
  width: 220px;
  font-size: 16px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.box .public .contents-tow .right-content .subject-matter-text ul li .picture-title a {
  color: var(--reaicc-fontcolor);
  display: block;
  line-height: 20px;
}

.box .public .contents-tow .right-content .content-list {
  flex-grow: 1;
  width: 260px;
}

.box .public .contents-tow .right-content .content-list ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.box .public .contents-tow .right-content .content-list ul li {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 384px;
  padding-left: 21px;
  margin-bottom: 15px;
  align-items: center;
  font-size: 14px;
}

.box .public .contents-tow .right-content .content-list ul > li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #d8d8d8;
}

.box .public .contents-tow .right-content .content-list ul li .author a {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #afb0c0;
}

.box .public .contents-tow .right-content .content-list ul li .explain-content {
  width: 266px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.box .public .contents-tow .right-content .content-list ul li .explain-content a {
  width: 266px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: var(--reaicc-fontcolor);
}

.box .public .contents-tow .right-content .content-list ul li .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #afb0c0;
  margin-left: 16px;
}

/*左侧排行榜*/
.box .public .contents .left-content-public .identification {
  font-size: 16px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
  margin-bottom: 14px;
  width: 260px;
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

/*设置手机端样式*/
@media screen and (orientation: portrait) {
  .box .public .title{
    margin: 20px !important;
  }
  .box .public .contents {
    flex-direction: column;
  }

  .box .public .contents-tow .right-content .subject-matter-text ul {
    display: block;
    margin: 15px;
  }
  /*.box .public .contents-tow .right-content .subject-matter-text ul li .picture {*/
  /*  width: 90%;*/
  /*  height: 80px;*/
  /*}*/

  .box .public .contents-tow .right-content .subject-matter-text ul li .picture-title a {
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 12px;
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
  .box .public .contents-tow .right-content .subject-matter-text ul li .picture-title{
    width: 100px;
    text-align: center;
  }
}
</style>