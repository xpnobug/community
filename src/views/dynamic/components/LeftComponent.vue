<script lang="ts" setup>
import {ref, reactive} from "vue";
import {recommendList} from "@/api/recom";
import {message} from "ant-design-vue";
import {addFollow} from "@/api/follow";
import {isLogin} from "@/api/user";

const tagList = ref([
  {id: "1", filter: '最近加入'},
  {id: "2", filter: '最受欢迎'},
  {id: "3", filter: '最近活跃'},
]);
const gGaoList = ref([
  {id: "1", title: '欢迎大家一起找bug~', content: '各位社区的朋友，您们好：目前官方社区已经成功更新至4.1.2版，欢迎大家反馈使用'},
  {id: "2", title: '欢迎大家一起找bug~', content: '欢迎大家一起找bug~'},
  {id: "3", title: '欢迎大家一起找bug~', content: '欢迎大家一起找bug~'},
]);
const tjUserList = ref([]);
const tagId = ref("1");
const handleTag = (value: any) => {
  tagId.value = value.id
}

const followList = () => {
  recommendList().then(res => {
    tjUserList.value = res.data.data
  })
}
followList();
interface Follow  {
  username: string;
  followUserId: string;
  isLogin: boolean;
}
const follow = reactive<Follow>({
  username: '',
  followUserId: '',
  isLogin: false,
});
isLogin().then((res) => {
  follow.isLogin = res.data.data;
})

const addFollows = (item: any) => {
  if (!follow.isLogin) {
    message.warning('请先登录');
    return
  }
  follow.username = item.username;
  follow.followUserId = item.userId;
  addFollow(follow).then((res) => {
    if (res.status === 200) {
      message.success(res.data.message);
      followList();
    }
  })
}


const timeFromNow = (data) => {
  // data 转换为时间戳
  const date = new Date(data);
  const currentDate = new Date();

  // 确保data是一个有效的日期
  if (isNaN(date.getTime()) || date > currentDate) {
    return '无效的时间或未来的时间';
  }

  const difference = currentDate - date;

  // 将毫秒数转换为天数
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (days >= 1) {
    if (days === 1) {
      return '昨天';
    }
    return `${days.toFixed(0)}天前`;
  }

  // 将剩余的毫秒数转换为小时
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours > 0) {
    return `${hours.toFixed(0)}小时前`;
  }

  // 将剩余的毫秒数转换为分钟
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes > 0) {
    return `${minutes.toFixed(0)}分钟前`;
  }

  // 将剩余的毫秒数转换为秒，并设置一个阈值（例如10秒）来避免“刚刚”
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  if (seconds > 0) {
    return `${seconds.toFixed(0)}秒前`;
  }

  // 如果时间差小于或等于阈值（例如10秒），则返回“刚刚”
  return '刚刚';
};
</script>

<template>
  <div class="grid-column fixed" style="top: -639px;">
    <div class="bulletin-board-box">
      <div class="head">公告栏
        <svg class="slider-control-icon icon-small-arrow left"
             style="width: 20px; height: 20px; margin-left: 5px;">
          <use xlink:href="#svg-gonggaoS"></use>
        </svg>
      </div>
      <div class="content-box">
        <div class="viewport">
          <div class="box-content"
               style="transition: all 1s ease 0s; transform: translateX(-16px);">
            <div class="box">
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in gGaoList" :key="item">
                  <div class="title">{{ item.title }}</div>
                  <div class="content">{{ item.content }}</div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="widget-box">
      <p class="widget-box-title">推荐用户</p>
      <div class="widget-box-content">
        <div class="filters">
          <p class="filter"
             v-for="tag in tagList"
             :class="[{ 'active': tagId === tag.id}]"
             @click="handleTag(tag)">{{ tag.filter }}</p>
        </div>
        <div v-for="item in tjUserList" class="user-status-list">
          <div class="user-status request-small"
               v-for="user in item.usersVoList"
               v-if="tagId === item.type">
            <div class="xm-header user-avatar"
                 style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; position: absolute; top: 0px; left: 0px;">
              <div class="xm-avatar" style="width: 30px;height: 30px; padding: 6.4px;">
                <img :src="user.avatar" alt="头像" class="" style="border-radius: 50%;">
              </div>
              <svg viewBox="0 0 100 100" style="width: 44px; height: 44px;">
                <defs>
                  <linearGradient :id="user.userId" x1="0%" y1="0%"
                                  x2="100%" y2="0%">
                    <stop offset="0%"></stop>
                    <stop offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke="#e9e9f0"
                      stroke-width="8" fill-opacity="0"></path>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"

                      :stroke="'url(#'+user.userId+')'" :style="{strokeDasharray: user.exp +',287'}" fill-opacity="0"
                      stroke-width="8"></path>
              </svg>
              <div class="xm-level"
                   style="box-sizing: content-box; font-size: 10.8px; width: 18px; height: 18px; border: 1px solid rgb(255, 255, 255);">
                <span style="display: block;">{{ user.level }}</span></div> <!----></div>
            <p class="user-status-title text-long-ellipsis" style="color: rgb(251, 91, 90);">
              <a class="bold" href="#" style="color: rgb(251, 91, 90);">{{ user.nickName }}</a>
            </p>
            <p class="user-status-text small" v-if="tagId === '2'">
              {{ user.fansCount }} 粉丝
            </p>
            <p class="user-status-text small" v-else>
              {{ timeFromNow(user.registrationTime) }}
            </p>
            <div class="action-request-list">
              <div class="action-request accept" v-if="user.isFollow === false" @click="addFollows(user)"> +</div>
              <div class="action-request accept" v-else> √ </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="widget-box" style="padding: 0px;">
      <div data-v-2dfd8ab4="">
        <div class="adv ant-carousel">
          <div class="slick-slider slick-initialized">
            <div class="slick-list">
              <div class="slick-track" style="width: 284px; opacity: 1; transform: translate3d(0px, 0px, 0px);">
                <div tabindex="-1" data-index="0" class="slick-slide slick-active slick-current"
                     style="outline: none; width: 284px;">
                  <div>
                    <div tabindex="-1" class="" style="width: 100%; display: inline-block;">
                      <div class="section-banner"
                           style="background: url(https://alist.reaicc.com/nas/image/png/2024-08-20/1/68fc8735-18b0-48d6-8442-7ab8f38793db.png) center center / cover no-repeat; cursor: pointer; height: 284px;">
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
  color: #3e3f5e;
  /*font-family: "Rajdhani", sans-serif;*/
  line-height: 1em;
}

h1, h2, h3, h4, h5, h6, p, ol, ul, figure, .table, .form-row {
  margin: 0;
}

.grid.grid-3-6-3 > .grid-column:nth-child(1) {
  grid-area: sidebar1;
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

.bulletin-board-box {
  /*width: 85%;*/
  padding: 28px;
  border-radius: 12px;
  background: var(--reaicc-meta-theme-post-color);
}

.bulletin-board-box .head {
  color: var(--reaicc-fontcolor);;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
}

svg:not(:root) {
  overflow: hidden;
}

.icon-small-arrow {
  fill: #adafca;
  width: 6px;
  height: 8px;
}

.content-box {
  width: 100%;
  position: relative;
}

.content-box > .left {
  transform: rotate(180deg);
  left: -20px;
}

.content-box > .slider-control-icon {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.content-box .empty-left, .content-box .empty-right {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 52%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 1;
}

.content-box .empty-left {
  left: -30px;
}

.content-box .viewport {
  width: 100%;
  background: var(--reaicc-meta-theme-post-color);
  border-radius: 8px;
  margin: 0 auto;
  height: 150px;
  overflow: hidden;
}

.content-box .viewport .box-content {
  transition: .5s;
  display: flex;
  height: 100%;
}

.content-box .viewport .box-content > .box {
  background: var(--reaicc-meta-theme-post-color);
  cursor: pointer;
  padding: 16px;
  flex: 0 0 100%;
}

.content-box .viewport .box-content > .box .title {
  color:var(--reaicc-fontcolor);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 7px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.content-box .viewport .box-content > .box .content {
  font-size: 14px;
  font-weight: 400;
  color: var(--reaicc-fontcolor);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  word-break: break-all;
}

.content-box > .right {
  right: -20px;
}

.content-box > .slider-control-icon {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.content-box .empty-right {
  right: -30px;
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
  color: var(--reaicc-fontcolor);;
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
  color: var(--reaicc-fontcolor);
}

.filters {
  display: -ms-flexbox;
  display: flex;
}

.filters .filter {
  margin-right: 20px;
  padding-bottom: 4px;
  color: var(--reaicc-fontcolor);;
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
  /*color: #3e3f5e;*/
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
  color: var(--reaicc-fontcolor);
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
  color: #ffffff;
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

@media screen and (orientation: portrait) {

  .grid .grid-column {
    display: none !important;
  }
}
</style>