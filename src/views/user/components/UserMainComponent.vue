<script lang="ts" setup>
//获取地址栏中id
import {nextTick, onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import {listByUserId} from "@/api/article.js";
import {createFromIconfontCN} from "@ant-design/icons-vue";
import PostInfoList from "@/components/PostInfoList.vue";

//svg图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_6kwgvtuqt0b.js',
});

const tagList = ref([
  {id: "1", label: '推荐'},
  {id: "2", label: '圈子'},
  {id: "3", label: '最新'},
  {id: "4", label: '新手必学'},
  {id: "5", label: '功能前瞻'},
  {id: "6", label: '瀑布频道'},
  {id: "7", label: '功能讲解'},
  {id: "8", label: '文章'},
  {id: "9", label: '问答'},
  // Add more menu items as needed
]);

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
  count: 0,
  maxPage: 10,
  minPage: 1,
});
const route = useRoute();
const ids = route.params.id;
const postList = ref<any[]>([]);
const postCount = ref<number>(1);
const showList = () => {
  listByUserId(page, ids).then(res => {
    page.count = res.data.count;
    page.maxPage = res.data.maxPage;
    page.minPage = res.data.minPage;
    page.pageSize = res.data.pageSize;
    //.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)
    postList.value = res.data.data;
    initLoading.value = false;
  })
}
showList();

const current = ref(1);
const initLoading = ref(true);
const loading = ref(false);
const onLoadMore = () => {
  page.currentPage++;
  loading.value = true;
  listByUserId(page, ids).then(res => {
    page.count = res.data.count;
    page.maxPage = res.data.maxPage;
    page.minPage = res.data.minPage;
    page.pageSize = res.data.pageSize;
    // postList.value = res.data.data.concat(
    //     [...new Array(page.pageSize)].map(() => ({ loading: true, avatar: '' })),
    // );
    postCount.value = res.data.data.length;
    postList.value = postList.value.concat(res.data.data);
    initLoading.value = false;
    loading.value = false;
  })

  nextTick(() => {
    window.dispatchEvent(new Event('resize'));
  });
};
onMounted(() => {
  let amount = 1;
  window.onload = function () {
    scrollLoadEvent();
  };
  window.addEventListener("scroll", scrollLoadEvent);
  function scrollLoadEvent() {
    let contents = document.querySelectorAll(".content");
    let targetValue = window.innerHeight * 1.1;

    contents.forEach(function (content) {
      let contentTop = content.getBoundingClientRect().top;
      if (contentTop <= targetValue - 100) {
        content.classList.add("content-center");
      } else {
        content.classList.remove("content-center");
      }
    });
    // createBox();
  }

  function createBox() {
    let pageHeight = document.documentElement.scrollHeight;
    let stop = document.documentElement.scrollTop;
    let screenHeight = window.innerHeight;
    let bottom = pageHeight - stop - screenHeight;
    if (bottom <= 200) {
      let div = document.createElement("div");
      div.classList.add("content");
      div.innerHTML = "内容" + amount;
      amount++;
      document.body.appendChild(div);
    }
  }

});
// CategoryBar滚动
function scrollCategoryBarToRight() {
  // 获取需要操作的元素
  const items = document.getElementById("catalog-list");
  const nextButton = document.getElementById("category-bar-next");

  // 检查元素是否存在
  if (items && nextButton) {
    const itemsWidth = items.clientWidth;

    // 判断是否已经滚动到最右侧
    if (items.scrollLeft + items.clientWidth + 1 >= items.scrollWidth) {
      // 滚动到初始位置并更新按钮内容
      items.scroll({
        left: 0,
        behavior: "smooth",
      });
      // nextButton.innerHTML = '<icon-font class="icon svg" type="icon-xiayige"/>';
    } else {
      // 滚动到下一个视图
      items.scrollBy({
        left: itemsWidth,
        behavior: "smooth",
      });
    }
  } else {
    console.error("Element(s) not found: 'catalog-list' and/or 'category-bar-next'.");
  }
}
const tagId = ref("1");
const handleTag = (value: any) => {
  tagId.value = value.id
}

</script>

<template>
  <div class="grid-column snipcss-iJ4SG">
    <div id="slider_home" class="home-slider" style="height:65px;">
      <div class="right" id="category-bar-next" style="" @click="scrollCategoryBarToRight()">
        <icon-font class="icon svg" type="icon-xiayige"/>
      </div>
      <div class="slider-list" id="catalog-list" style="transform:translateX(0px);">
        <div class="slider" style="min-width: 95px;" v-for="tag in tagList" :class="[{ 'active': tagId === tag.id}]"
             @click="handleTag(tag) "><span>{{ tag.label }}</span></div>
      </div>
    </div>
    <a-list
        class="demo-loadmore-list"
        :loading="initLoading"
        item-layout="vertical"
        :data-source="postList">
      <template #loadMore>
        <div
            v-if="!initLoading && !loading"
            :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
        >
          <a-button @click="onLoadMore" v-if="postCount !== 0 ">加载更多...</a-button>
          <a-empty v-else :description="null" />
        </div>
      </template>
      <PostInfoList :postInfo="postList" :showList="showList"/>
    </a-list>
    <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
      <a-spin tip="Loading..."  v-show="loading === true"/>
    </div>

    <!--    <div class="widget-box no-padding" video-height="0">-->
    <!--      <div class="widget-box-settings" style="z-index: 100;">-->
    <!--        <div class="post-settings-wrap" style="display: none;">-->
    <!--          <div style="position: relative;">-->
    <!--            <div>-->
    <!--              <div class="post-settings widget-box-post-settings-dropdown-trigger">-->
    <!--                <svg class="post-settings-icon icon-more-dots">-->
    <!--                  <use xlink:href="#svg-more-dots"></use>-->
    <!--                </svg>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div-->
    <!--                style="position: absolute; z-index: 9999; top: 44px; right: -6px; opacity: 0; visibility: hidden; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">-->
    <!--              <div class="simple-dropdown">-->
    <!--                <p class="simple-dropdown-link"> 收藏 </p>-->
    <!--                <p class="simple-dropdown-link"> 举报 </p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="widget-box-see"></div>-->
    <!--      <div class="widget-box-status">-->
    <!--        <div class="widget-box-status-content">-->
    <!--          <div class="user-status" style="position: relative;">-->
    <!--            <div class="xm-header user-avatar"-->
    <!--                 style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; position: absolute; top: 0px; left: 0px;">-->
    <!--              <div class="xm-avatar" style="width: 44px; height: 44px; padding: 6.4px;"><img-->
    <!--                  alt="头像"-->
    <!--                  class=""-->
    <!--                  src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_668781628835603?imageMogr2/crop/128x128/gravity/center"-->
    <!--                  style="border-radius: 50%;"></div>-->
    <!--              <svg style="width: 44px; height: 44px;" viewBox="0 0 100 100">-->
    <!--                <defs>-->
    <!--                  <linearGradient id="svg85c0fb91-96a9-4386-ac65-436696d05170" x1="0%" x2="100%" y1="0%" y2="0%">-->
    <!--                    <stop offset="0%"></stop>-->
    <!--                    <stop offset="100%"></stop>-->
    <!--                  </linearGradient>-->
    <!--                </defs>-->
    <!--                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0" stroke="#e9e9f0"-->
    <!--                      stroke-width="8"></path>-->
    <!--                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"-->
    <!--                      fill-opacity="0" stroke="url(#svg85c0fb91-96a9-4386-ac65-436696d05170)" stroke-width="8"-->
    <!--                      style="stroke-dasharray: 160.72, 287;"></path>-->
    <!--              </svg>-->
    <!--              <div class="xm-level" style="background: transparent;"><img-->
    <!--                  src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E9%BB%84v1605690523?upload_type/Tencent_COS"-->
    <!--                  style="width: 18px; height: 18px;"></div>-->
    <!--            </div>-->
    <!--            <p class="user-status-title medium"><span class="bold" style="cursor: pointer; color: rgb(251, 91, 90);">LT-REAI软件小蘑菇</span>-->
    <!--            </p>-->
    <!--            <p class="user-status-text small">02-18 09:21<span> · 浙江</span></p>-->
    <!--            <div class="cad" style="right: 0px;"></div>-->
    <!--            <p></p>-->
    <!--          </div>-->
    <!--          <div>-->
    <!--            <p class="widget-box-status-text feed-summary" style="margin-top: 0px;">-->
    <!--              大年初九，开工大吉！愿我们以梦为马，不负韶华，勇往直前，迎接新的挑战！</p>-->
    <!--            <div class="img-single"><img-->
    <!--                src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/729aef714f8b96019651ff42576895c1.png?imageMogr2/crop/700x700/gravity/center"-->
    <!--                style="border-radius: 10px;"></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="widget-box-status-content">-->
    <!--          <div class="tag-list">-->
    <!--            <div class="topic-forum-box"><a class="tag-item secondary" style="margin-top: 16px;">闲聊灌水</a></div>-->
    <!--            <div class="to-detail" style="margin-top: 16px; flex-grow: 1; text-align: right;"><a class="to-detail"-->
    <!--                                                                                                 href="/post/6241"-->
    <!--                                                                                                 >查看详情</a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="content-actions" style="margin-top: -2px; border-top: none;">-->
    <!--            <div class="content-action">-->
    <!--              <div class="meta-line">-->
    <!--                <div class="meta-line-list reaction-item-list">-->
    <!--                  <div class="reaction-item"><img alt="reaction-like" class="reaction-image"-->
    <!--                                                  src="https://pc.opensns.cn/img/reaction/like.png"></div>-->
    <!--                </div>-->
    <!--                <div style="margin-left: 5px;"><img-->
    <!--                    class="support-list-avatar"-->
    <!--                    src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_134861708632920?imageMogr2/crop/80x80/gravity/center">-->
    <!--                </div>-->
    <!--                <p class="meta-line-text" style="margin-left: 5px;"> 1 人点赞 </p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="content-action">-->
    <!--              <div class="meta-line">-->
    <!--                <p class="meta-line-text">66 浏览</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="post-options">-->
    <!--        <div class="post-option-wrap">-->
    <!--          <div class="post-option">-->
    <!--            <svg class="post-option-icon icon-thumbs-up">-->
    <!--              <use xlink:href="#svg-thumbs-up"></use>-->
    <!--            </svg>-->
    <!--            <p class="post-option-text">点赞</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="post-option">-->
    <!--          <svg class="post-option-icon icon-comment">-->
    <!--            <use xlink:href="#svg-comment"></use>-->
    <!--          </svg>-->
    <!--          <p class="post-option-text">0 评论</p>-->
    <!--        </div>-->
    <!--        <div class="post-option">-->
    <!--          <svg class="post-option-icon icon-share">-->
    <!--            <use xlink:href="#svg-share"></use>-->
    <!--          </svg>-->
    <!--          <p class="post-option-text">分享</p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <!--    <div class="loader-bars">-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--      <div class="loader-bar"></div>-->
    <!--    </div>-->
<!--    <a-pagination-->
<!--        v-model:current="current"-->
<!--        :total="page.count"-->
<!--        @change="onChange"/>-->
  </div>
</template>


<style scoped>
@media screen and (orientation: portrait) {
  .post-preview.medium .post-preview-info {
    height: 180px !important;
  }
  .content:nth-child(odd) {
    transform: translateX(0%)!important;
  }

  /* 偶数盒子 */
  .content:nth-child(even) {
    transform: translateX(-0%)!important;
  }
}

.content {
  color: #fff;
  /* 添加过度效果 */
  transition: transform 0.4s ease;
}

/* 奇数盒子 */
.content:nth-child(odd):first-child {
  transform: translateX(0%);
}
.content:nth-child(odd) {
  transform: translateX(110%);
}

/* 偶数盒子 */
.content:nth-child(even) {
  transform: translateX(-110%);
}

.content.content-center {
  transform: translateX(0);
}

.grid-column {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  min-width: 0;
}

.grid-column:nth-child(2) {
  grid-area: content;
}

*, :before, :after {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

:before, :after {
  display: block;
}

*, :after, :before {
  box-sizing: border-box;
}

:selection {
  color: #fff;
  background-color: #23d2e2;
}

:selection {
  color: #fff;
  background: #1890ff;
}

:selection {
  background-color: #337fff;
}

:selection {
  background-color: #337fff;
}

.home-slider {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  border-radius: 12px;
  background:var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
  padding: 0 40px;
  position: relative;
  overflow: hidden;
}

:selection {
  background-color: #337fff;
}

.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
}

.widget-box.no-padding {
  padding: 0;
}

:selection {
  background-color: #337fff;
}

.loader-bars {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 40px;
}

.loader-bars {
  margin-top: 30px !important;
}

.loader-bars {
  margin: 48px auto 0;
}

.home-slider .left {
  left: 0;
  transform: rotate(180deg);
}

.home-slider .left {
  position: absolute;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfd;
  z-index: 100;
  cursor: pointer;
}

.home-slider .right {
  position: absolute;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--reaicc-meta-theme-post-color);
  z-index: 100;
  cursor: pointer;
}

.home-slider .right {
  right: 0;
}

.home-slider .slider-list {
  font-size: .875rem;
  display: flex;
  flex-wrap: nowrap;
  transition-duration: .3s;
}

.widget-box .widget-box-settings {
  position: absolute;
  top: 22px;
  right: 19px;
  z-index: 9999;
}

.widget-box-see {
  position: absolute;
  top: 22px;
  right: 65px;
  z-index: 9;
  height: 30px;
  display: flex;
  align-items: center;
  color: #afb0c0;
}

.widget-box .widget-box-status {
  padding-top: 24px;
  position: relative;
}

.post-options {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 65px;
  padding: 0 28px;
  border-top: 1px solid #eaeaf5;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #fcfcfd;
}

.post-options {
  background-color: #fcfcfd;
}

.loader-bars .loader-bar {
  width: 4px;
  height: 100%;
  margin-right: 4px;
  border-radius: 200px;
  -webkit-transform: scaleY(0.2);
  transform: scaleY(0.2);
  -webkit-animation: loader-bars .5s infinite alternate ease-in;
  animation: loader-bars .5s infinite alternate ease-in;
}

.loader-bars .loader-bar:nth-child(1) {
  background-color: #347FFF;
}

.loader-bars .loader-bar:nth-child(2) {
  background-color: #4288FF;
  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}

.loader-bars .loader-bar:nth-child(3) {
  background-color: #5393FF;
  -webkit-animation-delay: .2s;
  animation-delay: .2s;
}

.loader-bars .loader-bar:nth-child(4) {
  background-color: #629CFF;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}

.loader-bars .loader-bar:nth-child(5) {
  background-color: #71A6FF;
  -webkit-animation-delay: .4s;
  animation-delay: .4s;
}

.loader-bars .loader-bar:nth-child(6) {
  background-color: #81B0FF;
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
}

.loader-bars .loader-bar:nth-child(7) {
  background-color: #8CB7FF;
  -webkit-animation-delay: .6s;
  animation-delay: .6s;
}

.loader-bars .loader-bar:last-child {
  margin-right: 0;
}

.loader-bars .loader-bar:nth-child(8) {
  background-color: #9CC1FF;
  -webkit-animation-delay: .7s;
  animation-delay: .7s;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-small-arrow {
  fill: #adafca;
  width: 6px;
  height: 8px;
}

svg:not(:root) {
  overflow: hidden;
}

.home-slider .icon-small-arrow {
  cursor: pointer;
}

.home-slider .slider {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  color: #bababa;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /*border-bottom: 4px solid #fff;*/
}

.home-slider .active {
  color: #212529;
  border-bottom: 4px solid #337fff;
}

.home-slider .slider::before {
  content: "";
  position: absolute;
  bottom: 0;
  height: 10px;
}

.home-slider .slider:hover {
  color: #212529;
}

.widget-box .widget-box-status .widget-box-status-content {
  padding: 0 28px;
}

.post-option {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 160px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

.post-option:hover {
  background-color: #fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, 0.1);
}

.post-preview {
  min-height: 516px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
}

.post-preview.medium {
  min-height: auto;
  box-shadow: none;
}

.widget-box .widget-box-status .post-preview {
  margin-top: 28px;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.user-status {
  margin-bottom: 16px;
}

.widget-box .widget-box-status .widget-box-status-content .user-status {
  font-family: "Rajdhani", sans-serif;
  padding-right: 70px;
}

.tag-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -12px;
}

.tag-list {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0 !important;
}

.widget-box .widget-box-status .tag-list {
  margin-top: 28px;
}

.widget-box .widget-box-status .tag-list:first-child {
  margin-top: 18px;
}

.content-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 52px;
}

.widget-box .widget-box-status .content-actions {
  margin-top: 28px;
  border-top: 1px solid #eaeaf5;
}

.icon-comment {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.post-option .post-option-icon {
  margin-right: 16px;
  fill: #adafca;
  opacity: .6;
  transition: fill .2s ease-in-out, opacity .2s ease-in-out;
}

p {
  margin: 0;
}

p {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

p {
  margin-bottom: 0 !important;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

.post-option .post-option-text {
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 700;
  transition: color .2s ease-in-out;
}

.icon-share {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

figure {
  margin: 0;
}

figure {
  margin: inherit !important;
}

figure {
  display: block;
}

figure {
  margin: 0 0 1rem;
}

figure {
  margin: 0 0 1em;
}

.post-preview .post-preview-image {
  height: 210px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.post-preview .post-preview-info {
  width: 91.6666666667%;
  padding: 28px;
  margin: -48px auto 0;
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 3px 5px 40px 0 rgba(94, 92, 154, 0.1);
}

.post-preview.medium .post-preview-image {
  padding-top: 56.25%;
  border-radius: 0;
}

.post-preview.medium .post-preview-info {
  width: 100%;
  margin-top: -140px;
}

.post-preview.medium .post-preview-info {
  margin-top: -135px;
  padding: 24px;
}

:selection {
  background-color: #337fff;
}

.with-cover {
  border-radius: 0;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  background: rgba(0, 0, 0, .02);
  border: 1px solid #e6e6e6;
  box-shadow: none;
}

.info-no-bg {
  margin: 0 !important;
  width: 100% !important;
}

.no-cover {
  border-radius: 12px;
}

.attachments {
  padding: 16px 0 0;
}

:selection {
  background-color: #337fff;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

:selection {
  background-color: #337fff;
}

.user-status .user-status-title {
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4285714286em;
}

.user-status .user-status-title.medium {
  font-size: 1rem;
}

.small {
  font-size: 80%;
  font-weight: 400;
}



.user-status .user-status-text {
  font-size: 12px;
}

.user-status .user-status-text.small {
  font-size: 0.75rem;
}

.user-status .user-status-title.medium + .user-status-text {
  margin-top: 2px;
}

.cad {
  position: absolute;
  text-align: center;
  right: 35px;
  top: 2px;
}

.cad {
  display: flex;
  align-items: center;
}

.widget-box-status-text {
  white-space: pre-line;
  word-break: break-all;
  line-height: 24px;
  font-size: 14px;
  overflow: hidden;
}

.feed-summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
}

.widget-box .widget-box-status .widget-box-status-text {
  font-size: 0.875rem;
  line-height: 1.7142857143em;
  font-weight: 500;
}

.tag-list .topic-forum-box {
  display: flex;
  align-items: center;
}

.to-detail {
  height: 15px;
  font-size: 13px;
  color: #adafca;
  display: block;
}

.content-actions .content-action {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.icon-thumbs-up {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.post-option .post-option-icon.icon-thumbs-up {
  position: relative;
  top: -2px;
}

.img-single {
  position: relative;
  margin-top: 16px;
  width: 350px;
  height: 350px;
}

.img-list {
  margin-top: 16px;
  display: flex;
  flex-flow: wrap;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

figure > img {
  width: 100%;
  height: 100%;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.ellipsis {
  white-space: normal !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2;
}

.post-preview-title {
  font-size: 18px !important;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  margin-top: 0 !important;
}

.post-preview-title {
  display: flex;
  align-items: center;
}

.post-preview .post-preview-info .post-preview-title {
  margin-top: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2em;
}

.post-preview.medium .post-preview-info .post-preview-title {
  font-size: 1.5rem;
  line-height: 1.3333333333em;
}

.ellipsis-content-cover {
  -webkit-line-clamp: 4;
}

.post-preview-text {
  margin-top: 8px !important;
  word-break: break-all;
  line-height: 21px !important;
  max-height: 210px;
  overflow: hidden;
  font-size: 14px;
}

.post-preview .post-preview-info .post-preview-text {
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.7142857143em;
  font-weight: 500;
}

.post-preview.medium .post-preview-info .post-preview-text {
  margin-top: 24px;
}

.ellipsis-content {
  -webkit-line-clamp: 8;
}

.attachments .attachment {
  background-color: #fcfcfd;
  border: 1px solid #dedeea;
  border-radius: 12px;
  margin-bottom: 16px;
  height: 70px;
  position: relative;
  font-family: Rajdhani, sans-serif;
  font-size: .9rem;
  font-weight: 500;
}

.attachments .attachment:last-child {
  margin-bottom: 0;
}

.post-settings {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 40px;
  height: 30px;
  cursor: pointer;
}

.simple-dropdown {
  width: 140px;
  padding: 10px 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.12);
}

.xm-avatar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.xm-level {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #0051d4;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
}

.user-status .user-status-title .bold {
  color: #3e3f5e;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.user-status-title .bold {
  cursor: pointer;
}

.cad > div {
  display: flex;
  align-items: center;
}

.cad > div {
  margin-left: 8px;
  width: 56px;
  height: 22px;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  justify-content: center;
  line-height: 1;
}

.cad > .is-top {
  color: #337fff;
  background: rgba(51, 127, 255, .1);
}

a {
  text-decoration: none;
}

a {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

a {
  text-decoration: none !important;
  background-color: transparent;
}

a {
  color: #007bff;
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

a {
  touch-action: manipulation;
}

.tag-item {
  display: block;
  height: 24px;
  padding: 0 12px;
  border-radius: 200px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 24px;
}

.tag-list .tag-item {
  margin: 12px 12px 0 0;
}

.tag-item.secondary {
  background-color: #615dfa;
  transition: background-color .2s ease-in-out;
}

.tag-item.secondary {
  background-color: #337fff;
}

.tag-list a {
  cursor: pointer;
}

.tag-item.secondary {
  background-color: #337fff;
}

a:hover {
  color: #00c7d9;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:hover {
  color: #40a9ff;
}

a:active, a:hover {
  text-decoration: none;
  outline: 0;
}

.tag-item.secondary:hover {
  color: #fff;
  background-color: #23d2e2;
}

.tag-item.secondary:hover {
  background-color: #337fff;
}

.meta-line {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.img-single img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.img-list .list {
  width: 32%;
  margin-right: 2%;
  margin-top: 2%;
  position: relative;
}

.img-list .list:nth-child(-n + 3) {
  margin-top: 0;
}

.img-list .list:nth-child(3n + 3) {
  margin-right: 0;
}

.post-preview-link {
  color: #337fff;
  font-size: 16px;
  margin-top: 8px !important;
}

.post-preview .post-preview-info .post-preview-link {
  margin-top: 20px;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: color .2s ease-in-out;
}

.tag-list .tag-item-box {
  display: flex;
  align-items: center;
  height: 24px;
  background: rgba(207, 208, 218, .34);
  border-radius: 16px;
  padding: 0 14px 0 5px;
  margin: 12px 12px 0 0;
}

.attachments .attachment-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  height: 50px;
  width: 50px;
}

.attachments .attachment-name {
  position: absolute;
  top: 15px;
  left: 80px;
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.attachments .attachment-size {
  position: absolute;
  bottom: 15px;
  left: 80px;
  font-size: .8rem;
  color: #9e9e9e;
}

.attachments .attachment-download {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  color: #337fff;
  cursor: pointer;
}

.icon-more-dots {
  fill: #fff;
  width: 22px;
  height: 6px;
}

.post-settings .post-settings-icon {
  fill: #adafca;
  opacity: .4;
  transition: opacity .2s ease-in-out, fill .2s ease-in-out;
}

.simple-dropdown .simple-dropdown-link {
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: color .2s ease-in-out, padding-left .2s ease-in-out;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.cad > div > .icon {
  width: 16px;
  height: 14px;
}

.cad > .is-top > .icon {
  fill: #337fff;
}

.reaction-item-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.meta-line .meta-line-text {
  font-size: 0.75rem;
  font-weight: 700;
}

.img-list .img {
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
}

.img-list .img {
  height: 0;
  padding-top: 100%;
  background-position: 50%;
}

.img-list .list .list-mask {
  position: absolute;
  top: 0;
  height: 100%;
  background: rgba(51, 127, 255, .637);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

.img-list .list .list-mask {
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
}

.tag-list .tag-item-box .topic-svg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: #337fff;
  border-radius: 16px;
  margin-right: 6px;
}

.reaction-item-list .reaction-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -6px;
}

.reaction-item-list .reaction-item:last-child {
  margin-left: 0;
}

.support-list-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-sizing: content-box;
  margin-left: -5px;
}

.icon-cross {
  fill: #fff;
  width: 12px;
  height: 12px;
}

.tag-list .tag-item-box .topic-svg svg {
  width: 10px;
  height: 10px;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #337fff;
}

.reaction-image {
  width: 20px;
  height: 20px;
}

.reaction-item-list .reaction-item > .reaction-image {
  cursor: pointer;
}


@keyframes loader-bars {
  0% {
    -webkit-transform: scaleY(0.2);
    transform: scaleY(0.2);
    transform: scaleY(0.2);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transform: scaleY(1);
  }

}




.home-slider .active {
  color: var(--reaicc-hovertext) !important;
  border-bottom: 4px solid #337fff !important;
}
:selection {
  background: #2128bd;
  color: #f7f7f7;
}

:-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

:-webkit-scrollbar-thumb {
  background-color: #888;
  opacity: 1;
  transition: opacity 0.5s;
}

:-webkit-scrollbar-thumb {
  background: var(--scrollbar-color);
  border-radius: 8px;
  cursor: pointer;
}

:-webkit-scrollbar-track {
  background-color: transparent;
}

:-webkit-scrollbar-corner {
  background-color: transparent;
}

#category-bar #catalog-bar  {
  margin-bottom: 0;
  overflow-y: hidden;
}

#catalog-list {
  display: flex;
  white-space: nowrap;
  overflow-x: hidden;
}

#catalog-list:-webkit-scrollbar {
  display: none;
}

.category-bar-next {
  margin-left: 16px;
  cursor: pointer;
  display: flex;
}

.category-bar-next:hover {
  color: var(--reaicc-lighttext);
}

a {
  background-color: transparent;
}

a {
  color: var(--reaicc-fontcolor);
  text-decoration: none;
  word-wrap: break-word;
  -webkit-transition: all 0.2s ease 0s;
  -moz-transition: all 0.2s ease 0s;
  -o-transition: all 0.2s ease 0s;
  -ms-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
  overflow-wrap: break-word;
}

a.catalog-more {
  min-width: fit-content;
  font-weight: bold;
  color: var(--reaicc-fontcolor);
  margin-left: 16px;
}

a:hover {
  color: #425aef;
}

a.catalog-more:hover {
  color: var(--reaicc-theme);
}

.catalog-list-item {
  display: flex;
  align-items: center;
}

.reaiccfont {
  font-family: "reaiccfont";
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.reaiccfont {
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-family: reaiccfont !important;
}

#catalog-bar i  {
  line-height: inherit;
}

.reaiccfont:before {
  font-family: "reaiccfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.reaicc-icon-angle-double-right:before {
  content: "";
}

.catalog-list-item a  {
  margin-right: 0.3rem;
  font-weight: bold;
  color: var(--font-color);
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.5rem;
  border-radius: 8px;
  height: 30px;
  line-height: 30px;
}

.catalog-list-item.select a  {
  background: var(--reaicc-main);
  color: var(--reaicc-white);
  border-radius: 8px;
}

.catalog-list-item:hover a {
  background: var(--reaicc-main);
  color: var(--reaicc-white);
}
</style>