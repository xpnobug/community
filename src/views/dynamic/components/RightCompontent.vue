<script setup lang="ts">
import {ref} from "vue";

const tagList = ref([
  {id: "1", filter: '最新创建'},
  {id: "2", filter: '最受欢迎'},
  {id: "3", filter: '最近活跃'},
]);
const tagId = ref("1");
const handleTag = (value:any) => {
  tagId.value = value.id
}

const tjBanKList = ref([
  // {
  //   id: "1",
  //   avatar: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E9%9C%80%E6%B1%821600064352?imageMogr2/crop/160x160/gravity/center',
  //   level: '9',
  //   userName: '需求市场',
  //   small: '3707',
  //   tagId: '3'
  // },
  // {
  //   id: "2",
  //   avatar: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/bbb3fa3b5005b4f6cf3072e79dc12a7e.png?imageMogr2/crop/160x160/gravity/center',
  //   level: '8',
  //   userName: '产品共创',
  //   small: '3707',
  //   tagId: '3'
  // },
  // {
  //   id: "3",
  //   avatar: 'https://h5a.opensns.cn/public/uploads/attach/2019/08/06/5d497c3d4de72.jpg_160x160m1',
  //   level: '7',
  //   userName: '闲聊灌水',
  //   small: '3707',
  //   tagId: '1'
  // },
  // {
  //   id: "4",
  //   avatar: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/5e058460bc75d1625714318?imageMogr2/crop/160x160/gravity/center',
  //   level: '7',
  //   userName: '干货',
  //   small: '3707',
  //   tagId: '2'
  // },
]);
</script>


<template>
  <div class="grid-column fixed" style="top: -142px;"><!---->
    <div class="widget-box"><p class="widget-box-title">推荐版块</p>
      <div class="widget-box-content">
        <div class="filters">
          <p class="filter"
             v-for="tag in tagList"
             :class="[{ 'active': tagId === tag.id}]"
             @click="handleTag(tag)">{{ tag.filter }}</p>
        </div>
        <div class="user-status-list">
          <div class="user-status request-small"
               v-for="item in tjBanKList"
               v-show="tagId === item.tagId">
            <div class="xm-header user-avatar"
                 style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 8px; position: absolute; top: 0px; left: 0px;">
              <div class="xm-avatar" style="width: 44px; height: 44px; padding: 0px;"><img
                  :src="item.avatar"
                  alt="头像" class="" style="border-radius: 8px;"></div>
            </div>
            <p class="user-status-title text-long-ellipsis">
              <a href="#" class="bold">{{ item.userName }}</a></p>
            <p class="user-status-text small" v-if="tagId === '2'">
              {{ item.small }} 成员
            </p>
            <p data-v-2f920749="" class="user-status-text small" v-else>
              13小时前
            </p>
            <div class="action-request-list">
              <div class="action-request accept">
                <svg class="action-request-icon icon-join-group">
                  <use xlink:href="#svg-join-group"></use>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div> <!----> <!----> <!---->
    <div class="widget-box" style="padding: 0px; display: none">
      <div data-v-2dfd8ab4="">
        <div class="adv ant-carousel">
          <div class="slick-slider slick-initialized">
            <div class="slick-list">
              <div class="slick-track" style="opacity: 1; transform: translate3d(0px, 0px, 0px); width: 284px;">
                <div tabindex="-1" data-index="0" class="slick-slide slick-active slick-current"
                     style="outline: none; width: 300px;">
                  <div>
                    <div tabindex="-1" class="" style="width: 100%;">
                      <div class="section-banner"
                           style="background: url(https://alist.reaicc.com/nas/image/jpeg/2024-04/1/76df301b-d0ef-45b0-95fc-979f2d358782.jpg) center center / cover no-repeat; cursor: default; height: 284px;">
                        <p class="section-banner-title"></p>
                        <p class="section-banner-text"></p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left" style="display: none;">
          <svg data-v-2dfd8ab4="">
            <use xlink:href="#svg-small-arrow"></use>
          </svg>
        </div>
        <div class="right" style="display: none;">
          <svg data-v-2dfd8ab4="">
            <use xlink:href="#svg-small-arrow"></use>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6, a, p {
  color: var(--reaicc-fontcolor);
  /*font-family: "Rajdhani", sans-serif;*/
  line-height: 1em;
}

h1, h2, h3, h4, h5, h6, p, ol, ul, figure, .table, .form-row {
  margin: 0;
}

.fixed {
  position: sticky;
  top: 54px;
}

.fixed {
  position: sticky;
  top: 54px;
}

.grid .grid-column {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  min-width: 0;
}

/*推荐用户*/
.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
}

.widget-box .widget-box-title {
  font-size: 1rem;
  font-weight: 700;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

p {
  margin-bottom: 0 !important;
}

.widget-box .widget-box-content {
  margin-top: 36px;
}

.filters {
  display: -ms-flexbox;
  display: flex;
}

.filters .filter {
  margin-right: 20px;
  padding-bottom: 4px;
  /*color: #adafca;*/
  font-size: 0.875rem;
  font-weight: 700;
  opacity: .6;
  cursor: pointer;
  transition: color .2s ease-in-out, opacity .2s ease-in-out;
}

.filters .filter.active, input[type=password]:focus, input[type=text]:focus, select:focus, textarea:focus {
  border-color: #337fff;
}

.filters .filter.active, input[type=password]:focus, input[type=text]:focus, select:focus, textarea:focus {
  border-color: #337fff;
}

.filters .filter.active, input[type=password]:focus, input[type=text]:focus, select:focus, textarea:focus {
  border-color: #337fff;
}

.filters .filter.active {
  border-bottom: 2px solid #23d2e2;
}

.filters .filter.active, .filters .filter:hover {
  color: var(--reaicc-fontcolor);
  opacity: 1;
}


.filters .filter:last-child {
  margin-right: 0;
}


.widget-box .widget-box-content .filters + .user-status-list, .widget-box .widget-box-content .filters + .post-preview-line-list {
  margin-top: 24px;
}

.user-status.request-small {
  padding-right: 48px;
}

.user-status-list .user-status {
  margin-bottom: 22px;
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
  color: var(--reaicc-fontcolor);
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
  color: var(--reaicc-fontcolor);
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

/*左侧底部图片*/
.adv[data-v-2dfd8ab4] {
  height: 284px;
}

.adv[data-v-2dfd8ab4] {
  height: 284px;
}

.ant-carousel {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
}

.ant-carousel .slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.ant-carousel .slick-slider .slick-list, .ant-carousel .slick-slider .slick-track {
  transform: translateZ(0);
}

.ant-carousel .slick-list {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.ant-carousel .slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}

.ant-carousel .slick-list .slick-slide.slick-active {
  pointer-events: auto;
}

.ant-carousel .slick-initialized .slick-slide {
  display: block;
}

.ant-carousel .slick-list .slick-slide {
  pointer-events: none;
}

.ant-carousel .slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}

.section-banner {
  min-height: 160px;
  padding: 52px 60px 0 200px;
  border-radius: 12px;
  /* background: url(/img/banner/banner-bg.png) no-repeat center; */
  position: relative;
  cursor: pointer;
}

.section-banner .section-banner-title, .section-banner .section-banner-text {
  color: #fff;
}

.section-banner .section-banner-text {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
}
</style>