<script lang="ts" setup>

import {nextTick, onMounted, reactive, ref,inject} from "vue";
import {list} from "@/api/article";
import {createFromIconfontCN} from "@ant-design/icons-vue";
import PostInfoList from "@/components/PostInfoList.vue";
import { useDefer } from "@/hooks/useDefer.js";
const defer = useDefer();
//svg图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_4559alb1b0i.js',
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
  count: 10,
  maxPage: 10,
  minPage: 1,
});


const store = inject('store');
store.setLoading(true);
const postList = ref<any[]>([]);
const postCount = ref<number>(1);
const showList = () => {
  list(page).then(res => {
    page.count = res.data.count;
    page.maxPage = res.data.maxPage;
    page.minPage = res.data.minPage;
    page.pageSize = res.data.pageSize;
    //.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)
    postList.value = res.data.data;
    initLoading.value = false;
    store.setLoading(false);
  })
}
showList();

const current = ref(1);
const initLoading = ref(true);
const loading = ref(false);
const onLoadMore = () => {
  page.currentPage++;
  loading.value = true;
  list(page).then(res => {
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

const tagId = ref("1");
const handleTag = (value: any) => {
  tagId.value = value.id
}

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
</script>

<template>
  <div class="grid-column"><!---->
    <div id="slider_home" class="home-slider" style="height:65px;">
      <div class="right" id="category-bar-next" style="" @click="scrollCategoryBarToRight()">
        <icon-font class="icon svg" type="icon-xiayige"/>
      </div>
      <div class="slider-list" id="catalog-list" style="transform:translateX(0px);">
        <div class="slider" style="min-width: 95px;" v-for="tag in tagList" :class="[{ 'active': tagId === tag.id}]"
             @click="handleTag(tag) "><span>{{ tag.label }}</span></div>
      </div>
    </div>
    <div>
      <a-list
          :data-source="postList"
          v-if="defer(postList.length)"
          :loading="initLoading"
          class="demo-loadmore-list"
          item-layout="vertical">
        <template #loadMore>

          <div
              v-if="!initLoading && !loading"
              :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
          >
            <a-button v-if="postCount !== 0 " @click="onLoadMore">加载更多...</a-button>
            <a-empty v-else :description="null" />
          </div>
        </template>
        <PostInfoList :postInfo="postList"/>
      </a-list>
      <div :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
        <a-spin tip="Loading..."  v-show="loading === true"/>
      </div>

      <!--      <div class="widget-box no-padding post-card content" video-height="0"-->
      <!--           v-for="post in postInfo"-->
      <!--           v-show="tagId === '1'"-->
      <!--           v-if="postInfo.length !== 0">-->
      <!--        <div class="widget-box-settings" style="z-index: 100;">-->
      <!--          <div class="post-settings-wrap" style="display: none;">-->
      <!--            <div style="position: relative;">-->
      <!--              <div>-->
      <!--                <div class="post-settings widget-box-post-settings-dropdown-trigger">-->
      <!--                  <svg class="post-settings-icon icon-more-dots">-->
      <!--                    <use xlink:href="#svg-more-dots"></use>-->
      <!--                  </svg>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div-->
      <!--                  style="position: absolute; z-index: 9999; top: 44px; right: -6px; opacity: 0; visibility: hidden; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">-->
      <!--                <div class="simple-dropdown"><p class="simple-dropdown-link">-->
      <!--                  收藏-->
      <!--                </p> &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <p class="simple-dropdown-link">-->
      <!--                  举报-->
      <!--                </p> &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;</div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="widget-box-see">&lt;!&ndash;&ndash;&gt;</div>-->
      <!--        <div class="widget-box-status">-->
      <!--          <div class="widget-box-status-content">-->
      <!--            <div class="user-status" style="position: relative;">-->
      <!--              <div class="xm-header user-avatar"-->
      <!--                   style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; position: absolute; top: 0px; left: 0px;">-->
      <!--                <div class="xm-avatar" style="width: 30px;height: 30px; padding: 6.4px;">-->
      <!--                  <img :src="post.avatar" alt="头像" class="" style="border-radius: 50%;">-->
      <!--                </div>-->
      <!--                <svg viewBox="0 0 100 100" style="width: 44px; height: 44px;">-->
      <!--                  <defs>-->
      <!--                    <linearGradient id="svg573003bc-ce97-4440-849f-bf339f3d645a" x1="0%" y1="0%" x2="100%" y2="0%">-->
      <!--                      <stop offset="0%"></stop>-->
      <!--                      <stop offset="100%"></stop>-->
      <!--                    </linearGradient>-->
      <!--                  </defs>-->
      <!--                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke="#e9e9f0"-->
      <!--                        stroke-width="8" fill-opacity="0"></path>-->
      <!--                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"-->
      <!--                        stroke="url(#svg573003bc-ce97-4440-849f-bf339f3d645a)" stroke-width="8" fill-opacity="0"-->
      <!--                        :style="{strokeDasharray: post.exp +',287'}"></path>-->
      <!--                </svg> &lt;!&ndash;&ndash;&gt;-->
      <!--                <div class="xm-level" style="background: transparent;">-->
      <!--                  <img-->
      <!--                      src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E7%BA%A2V1605690514?upload_type/Tencent_COS"-->
      <!--                      style="width: 18px; height: 18px;">-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <p class="user-status-title medium"><span class="bold" style="cursor: pointer; color: rgb(251, 91, 90);">{{-->
      <!--                  post.author-->
      <!--                }}</span>-->
      <!--              </p>-->
      <!--              <p class="user-status-text small">{{ post.publishDate }} <span> · 未知</span></p>-->
      <!--              <div class="cad" style="right: 0px;">&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;</div>-->
      <!--              <p></p>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="post-preview medium" style="margin: 16px 28px 0px;">-->
      <!--            <figure class="post-preview-image post-preview-info"-->
      <!--                    :style="{background: 'url(' + post.coverImage + ') center center / cover no-repeat rgb(255, 255, 255)'}"-->
      <!--              style="margin: 0px auto !important; border-top: 1px solid rgb(230, 230, 230); border-right: 1px solid-->
      <!--              rgb(230, 230, 230); border-bottom: none; border-left: 1px solid rgb(230, 230, 230); border-image: initial;-->
      <!--              border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: none; cursor: pointer; ">-->
      <!--              <img :src="post.coverImage" alt="图片" style="display: none;">-->
      <!--            </figure>-->
      <!--            <div class="post-preview-info with-cover" style="margin-top: 0px;"><p></p>-->
      <!--              <p class="post-preview-title text-long-ellipsis ellipsis" style="display: inline-block; width: 100%;">-->
      <!--                {{ post.title }}-->
      <!--              </p>-->
      <!--              &lt;!&ndash;              插入小广告&ndash;&gt;-->
      <!--&lt;!&ndash;              <p class="post-preview-text ellipsis ellipsis-content-cover">体验及咨询可V+小番茄</p>&ndash;&gt;-->
      <!--              <p class="post-preview-text ellipsis ellipsis-content-cover">{{ post.content }}</p>-->

      <!--              <div><a href="#" class="post-preview-link" target="_blank">-->
      <!--                <svg-->
      <!--                    style="width: 16px; height: 16px; margin: -2px 5px 0px 0px; fill: rgb(51, 127, 255);">-->
      <!--                  <use xlink:href="#svg-md-open"></use>-->
      <!--                </svg>-->
      <!--                查看全文</a></div>-->
      <!--            </div> &lt;!&ndash;&ndash;&gt;</div>-->
      <!--          <div class="widget-box-status-content">-->
      <!--            <div class="tag-list">-->
      <!--              <div class="topic-forum-box">&lt;!&ndash;&ndash;&gt; <a class="tag-item secondary"-->
      <!--                                                      style="margin-top: 16px;">{{ post.tag }}</a></div>-->
      <!--              <div class="to-detail" style="margin-top: 16px; flex-grow: 1; text-align: right;"><a-->
      <!--                  href="#" class="to-detail" target="_blank">查看详情</a></div>-->
      <!--            </div>-->
      <!--            <div class="content-actions" style="margin-top: -2px; border-top: none;">-->
      <!--              <div class="content-action">-->
      <!--                <div class="meta-line">-->
      <!--                  <div class="meta-line-list reaction-item-list">-->
      <!--                    <div class="reaction-item">-->
      <!--                      <img src=""-->
      <!--                           alt="reaction-like" class="reaction-image"></div>-->
      <!--                  </div>-->
      <!--                  <div style="margin-left: 5px;"></div>-->
      <!--                  <p class="meta-line-text" style="margin-left: 5px;">-->

      <!--                    0 人点赞-->
      <!--                  </p></div>-->
      <!--              </div>-->
      <!--              <div class="content-action">-->
      <!--                <div class="meta-line"><p class="meta-line-text">45 浏览</p></div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="post-options">-->
      <!--          <div class="post-option-wrap">-->
      <!--            <div class="post-option">-->
      <!--              <svg class="post-option-icon icon-thumbs-up">-->
      <!--                <use xlink:href="#svg-thumbs-up"></use>-->
      <!--              </svg>-->
      <!--              <p class="post-option-text">点赞</p></div>-->
      <!--          </div>-->
      <!--          <div class="post-option">-->
      <!--            <svg class="post-option-icon icon-comment">-->
      <!--              <use xlink:href="#svg-comment"></use>-->
      <!--            </svg>-->
      <!--            <p class="post-option-text">1 评论</p></div>-->
      <!--          <div class="post-option">-->
      <!--            <svg class="post-option-icon icon-share">-->
      <!--              <use xlink:href="#svg-share"></use>-->
      <!--            </svg>-->
      <!--            <p class="post-option-text">分享</p></div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <el-empty :image-size="200" v-else/>-->
      <!--      <div class="some-style-you-like">-->
      <!--        <div class="loader-bars">-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--          <div class="loader-bar"></div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>


<style scoped>

.grid.grid-3-6-3 > .grid-column:nth-child(2) {
  grid-area: content;
}

.grid .grid-column {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  min-width: 0;
}

.home-slider {
  display: flex;
  flex-wrap: nowrap;
  /*width: 100%;*/
  border-radius: 12px;
  background: var(--reaicc-meta-theme-post-color);;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
  padding: 0 40px;
  position: relative;
  overflow: hidden;
}

.home-slider .left, .home-slider .right {
  position: absolute;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--reaicc-meta-theme-post-color);;
  z-index: 1;
  cursor: pointer;
}

.home-slider .left {
  left: 0;
  transform: rotate(180deg);
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

.home-slider .active {
  color: var(--reaicc-hovertext) !important;
  border-bottom: 4px solid #337fff !important;
}

.home-slider .slider {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  color: var(--reaicc-fontcolor);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /*border-bottom: 4px solid #fff;*/
}

.home-slider .slider:before {
  content: "";
  position: absolute;
  bottom: 0;
  height: 10px;
}

/**
文章内容
 */
.post-card[data-v-2f920749] {
  margin-bottom: 16px;
}

.post-card[data-v-2f920749] {
  margin-bottom: 16px;
}

.widget-box.no-padding {
  padding: 0;
}

.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
  margin-bottom: 16px;
}

.widget-box .widget-box-settings {
  position: absolute;
  top: 22px;
  right: 19px;
  z-index: 9999;
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

.post-settings .post-settings-icon {
  fill: #adafca;
  opacity: .4;
  transition: opacity .2s ease-in-out, fill .2s ease-in-out;
}

svg:not(:root) {
  overflow: hidden;
}

.icon-more-dots {
  fill: #fff;
  width: 22px;
  height: 6px;
}

.simple-dropdown {
  width: 140px;
  padding: 10px 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.12);
}

.simple-dropdown .simple-dropdown-link {
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: color .2s ease-in-out, padding-left .2s ease-in-out;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0 !important;
}

h1, h2, h3, h4, h5, h6, a, p {
  color: #3e3f5e;
  /*font-family: "Rajdhani", sans-serif;*/
  line-height: 1em;
}

.simple-dropdown .simple-dropdown-link {
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: color .2s ease-in-out, padding-left .2s ease-in-out;
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

.widget-box .widget-box-status .widget-box-status-content {
  padding: 0 28px;
}

.widget-box .widget-box-status .widget-box-status-content .user-status {
  font-family: "Rajdhani", sans-serif;
  padding-right: 70px;
}

.user-status {
  margin-bottom: 16px;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}


.xm-avatar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

img {
  vertical-align: middle;
  border-style: none;
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

img, svg {
  vertical-align: middle;
}

.user-status.request .user-status-title, .user-status.request-small .user-status-title {
  margin-top: 2px;
  line-height: 1.1428571429em;
}

.user-status-title {
  line-height: 20px !important;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-status-title {
  line-height: 20px !important;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-status .user-status-title {
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4285714286em;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-status .user-status-title .bold {
  color: #3e3f5e;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

p a {
  color: #00c7d9;
  font-weight: 600;
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

.user-status .user-status-text.small {
  font-size: 0.75rem;
}

.user-status.request .user-status-text, .user-status.request-small .user-status-text {
  margin-top: 8px;
}

.user-status .user-status-text {
  font-size: 12px;
}

.user-status .user-status-text {
  margin-top: 4px;
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
}

.small, small {
  font-size: 80%;
  font-weight: 400;
}

.user-status .action-request-list {
  position: absolute;
  top: 2px;
  right: 0;
}

.action-request-list {
  display: -ms-flexbox;
  display: flex;
}

.action-request-list .action-request:last-child {
  margin-right: 0;
}

.action-request.accept {
  background-color: #337fff;
}

.action-request-list .action-request {
  margin-right: 12px;
}

.action-request {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #dedeea;
  border-radius: 10px;
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: border-color .2s ease-in-out, background-color .2s ease-in-out, color .2s ease-in-out;
}

.action-request.accept .action-request-icon {
  fill: #fff;
  opacity: 1;
}

.action-request .action-request-icon {
  fill: #adafca;
  opacity: .6;
  transition: fill .2s ease-in-out, opacity .2s ease-in-out;
}

/*stroke-dasharray: 183.68, 287; 设置弧度
svg 设置颜色
*/
stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #ff3370;
}

/*-----------*/


.widget-box .widget-box-status .post-preview, .widget-box .widget-box-status .quote-box {
  margin-top: 28px;
}

.post-preview.medium {
  min-height: auto;
  box-shadow: none;
}

.post-preview {
  min-height: 516px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
}


.post-preview.medium .post-preview-image {
  padding-top: 56.25%;
  border-radius: 0;
}

.post-preview .post-preview-info {
  /*width: 91.6666666667%;*/
  padding: 28px;
  margin: -48px auto 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 3px 5px 40px 0 rgba(94, 92, 154, 0.1);
}

.post-preview .post-preview-image {
  height: 210px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

figure {
  margin: 0 0 1em;
}

article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

figure {
  margin: 0 0 1rem;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

figure {
  margin: inherit !important;
}

h1, h2, h3, h4, h5, h6, p, ol, ul, figure, .table, .form-row {
  margin: 0;
}

figure > img {
  width: 100%;
  height: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}

img, svg {
  vertical-align: middle;
}

.post-preview.medium .post-preview-info {
  margin-top: -135px;
  padding: 24px;
}

.post-preview.medium .post-preview-info {
  /*width: 100%;*/
  margin-top: -140px;
}

.with-cover {
  border-radius: 0;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  background: rgba(0, 0, 0, .02);
  border: 1px solid #e6e6e6;
  box-shadow: none;
}

.post-preview.medium .post-preview-info .post-preview-title {
  font-size: 1.5rem;
  line-height: 1.3333333333em;
}

.post-preview .post-preview-info .post-preview-title {
  margin-top: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2em;
}

.flex-align, .post-preview-title {
  display: flex;
  align-items: center;
}

.post-preview-title {
  font-size: 18px !important;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  margin-top: 0 !important;
}

.ellipsis {
  white-space: normal !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2;
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

.post-preview.medium .post-preview-info .post-preview-text {
  margin-top: 24px;
}

.post-preview .post-preview-info .post-preview-text {
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.7142857143em;
  font-weight: 500;
}

.post-preview-text {
  margin-top: 8px !important;
  word-break: break-all;
  line-height: 21px !important;
  max-height: 210px;
  overflow: hidden;
  font-size: 14px;
}

.ellipsis-content-cover {
  -webkit-line-clamp: 4;
}

.ellipsis {
  white-space: normal !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2;
}

.post-preview .post-preview-info .post-preview-link {
  margin-top: 20px;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: color .2s ease-in-out;
}

.post-preview-link {
  color: #337fff;
  font-size: 16px;
  margin-top: 8px !important;
}

.widget-box .widget-box-status .widget-box-status-content {
  padding: 0 28px;
}

.widget-box .widget-box-status .tag-list:first-child {
  margin-top: 18px;
}

.widget-box .widget-box-status .tag-list {
  margin-top: 28px;
}

.tag-list {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0 !important;
}

.tag-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -12px;
}

.tag-list .topic-forum-box {
  display: flex;
  align-items: center;
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

.tag-item.secondary {
  background-color: #615dfa;
  transition: background-color .2s ease-in-out;
}

.tag-list .tag-item {
  margin: 12px 12px 0 0;
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

.to-detail {
  height: 15px;
  font-size: 13px;
  color: #adafca;
  display: block;
}

.tag-list a {
  cursor: pointer;
}

.to-detail {
  height: 15px;
  font-size: 13px;
  color: #adafca;
  display: block;
}

.widget-box .widget-box-status .content-actions {
  margin-top: 28px;
  border-top: 1px solid #eaeaf5;
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

.content-actions .content-action {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.meta-line {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.reaction-item-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.reaction-item-list .reaction-item:last-child {
  margin-left: 0;
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

.reaction-item-list .reaction-item > .reaction-image {
  cursor: pointer;
}

.reaction-image {
  width: 20px;
  height: 20px;
}

img {
  vertical-align: middle;
  border-style: none;
}

img, svg {
  vertical-align: middle;
}

.meta-line .meta-line-text {
  font-size: 0.75rem;
  font-weight: 700;
}

.content-actions .content-action {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.meta-line {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.meta-line .meta-line-text {
  font-size: 0.75rem;
  font-weight: 700;
}

.post-options {
  background-color: #fcfcfd;
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

.post-option {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  /*width: 160px;*/
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

.post-option .post-option-icon.icon-thumbs-up {
  position: relative;
  top: -2px;
}

.post-option .post-option-icon {
  margin-right: 16px;
  fill: #adafca;
  opacity: .6;
  transition: fill .2s ease-in-out, opacity .2s ease-in-out;
}

.post-option .post-option-text {
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 700;
  transition: color .2s ease-in-out;
}

/*设置手机端样式*/
@media screen and (orientation: portrait) {
  .grid {
    display: block !important;
  }

  .grid-column .fixed {
    display: none;
  }

  .content:nth-child(odd) {
    transform: translateX(0%) !important;
  }

  /* 偶数盒子 */
  .content:nth-child(even) {
    transform: translateX(-0%) !important;
  }
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