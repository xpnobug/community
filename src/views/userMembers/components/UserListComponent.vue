<script setup lang="ts">
import {getCurrentInstance, onBeforeMount, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {addFollow} from "@/api/follow";
import {message} from "ant-design-vue";
import {isLogin} from "@/api/user";

const viewIdValueSet = ref('1');
const tagIdValueSet = ref('1');
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on("viewId", (param:any) => {
  viewIdValueSet.value = param;
  setAvatarSize(viewIdValueSet.value)
})
instance?.proxy?.$Bus.on("tagId", (param:any) => {
  tagIdValueSet.value = param;
})
const avatarWidth = ref('');
const avatarHeight = ref('');
onBeforeMount(() => {
  avatarWidth.value = '85';
  avatarHeight.value = '85';
  addWh(avatarWidth.value, avatarHeight.value)
})
const addWidth = ref();
const addHeight = ref();
const setAvatarSize = (size:any) => {
  avatarWidth.value = '85';
  avatarHeight.value = '85';
  addWh(avatarWidth.value, avatarHeight.value)
  switch (size) {
    case '1':
      avatarWidth.value = '85';
      avatarHeight.value = '85';
      addWh(avatarWidth.value, avatarHeight.value)
      break;
    case '2':
      avatarWidth.value = '65';
      avatarHeight.value = '65';
      addWh(avatarWidth.value, avatarHeight.value)
      break;
    case '3':
      avatarWidth.value = '35';
      avatarHeight.value = '35';
      addWh(avatarWidth.value, avatarHeight.value)
      break;
    default:
      avatarWidth.value = '85';
      avatarHeight.value = '85';
      addWh(avatarWidth.value, avatarHeight.value)
      break;
  }
}
const addWh = (width: any, height: any) => {
  //求和avatarWidth + 15
  const wnum = parseInt(width);
  const hnum = parseInt(height);
  addWidth.value = wnum + 25;
  addHeight.value = hnum + 25;
  console.log(addWidth.value, addHeight.value)
}

//获取用户信息
const props = defineProps(['userList'])

const router = useRouter();
const toUserInfo = (item:any) => {
  router.push({ path: '/user/'+item.userId })
}

interface Follow  {
  userId: string;
  username: string;
  followUserId: string;
  isLogin: boolean;
}
const follow = reactive<Follow>({
  userId: '',
  username: '',
  followUserId: '',
  isLogin: false,
});
isLogin().then((res) => {
  follow.isLogin = res.data.data;
})
instance?.proxy?.$Bus.on("userInfo", (param: any) => {
  follow.userId = param.userId;
  console.log(follow.userId)
});
const addFollows = (item:any) => {
  if (!follow.isLogin){
    message.warning('请先登录');
    return
  }
  follow.username = item.username;
  follow.followUserId = item.userId;
  addFollow(follow).then((res) => {
    if (res.status === 200) {
      message.success('关注成功');
    }
  })
}
</script>

<template>
  <div :class="[{'grid-4-4-4' : viewIdValueSet === '1' , 'grid-3-3-3-3': viewIdValueSet === '2'}]"
       class="grid centered"
       style="margin-top: 16px; justify-content: flex-start;">
    <div v-for="item in props.userList"
         v-show="tagIdValueSet === '1'"
         :class="[{'small' : viewIdValueSet === '2'}]"
         class="user-preview">
      <div :class="[{'small' : viewIdValueSet === '2' , 'landscape': viewIdValueSet === '3'}]"
           class="user-preview">
        <figure class="user-preview-cover"
                @click="toUserInfo(item)"
                :style="{background: 'url(' + item.userCover + ') center center / cover no-repeat rgb(255, 255, 255)',}">
          <img alt="图片" :src=item.userCover style="display: none;"> <!----></figure>
        <div class="user-preview-info">
          <div class="user-short-description ">
            <div class="xm-header user-avatar user-short-description-avatar"
                 :style="[{width: addWidth + 'px', height: addHeight + 'px'} ,'border: 11px solid rgb(255, 255, 255); cursor: pointer; border-radius: 50%;']">
              <div class="xm-avatar"
                   @click="toUserInfo(item)"
                   :style="[{width: avatarWidth + 'px', height: avatarHeight + 'px'},'padding:13px']">
                <img
                    alt="头像"
                    class=""
                    :src=item.avatar
                    style="border-radius: 50%;"></div>
              <svg :style="[{width: addWidth + 'px', height: addWidth + 'px'}]" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="svg5ce7c7db-de6a-41b1-8c38-866e22cac3b4" x1="0%" x2="100%"
                                  y1="0%" y2="0%">
                    <stop offset="0%"></stop>
                    <stop offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0"
                      stroke="#e9e9f0" stroke-width="8"></path>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                      fill-opacity="0" stroke="url(#svg5ce7c7db-de6a-41b1-8c38-866e22cac3b4)" stroke-width="8"
                      :style="[{strokeDasharray: item.exp + ',287'}]"></path>
              </svg>
              <div class="xm-level"
                   style="box-sizing: content-box; font-size: 16.5px; width: 27.5px; height: 27.5px; border: 3px solid rgb(255, 255, 255);">
                <span style="display: block;">{{ item.level }}</span>
              </div>
              <div class="xm-level" style="background: transparent;" v-show="item.role === '1'"><img
                  src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E7%BA%A2V1605690514?upload_type/Tencent_COS"
                  style="width: 27.5px; height: 27.5px;">
              </div>
              <div class="xm-level" style="background: transparent;" v-show="item.role === '2'"><img
                  src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E9%BB%84v1605690523?upload_type/Tencent_COS"
                  style="width: 27.5px; height: 27.5px;">
              </div>

            </div>
            <p class="user-short-description-title text-long-ellipsis"
               @click="toUserInfo(item)"
               :style="{color: item.color}">
              {{ item.username }}
            </p>
            <p class="user-short-description-text">

            </p></div>
          <div class="is-show">
            <div class="">
              <div id="tns196-ow" class="tns-outer">
                <div aria-atomic="true" aria-live="polite" class="tns-liveregion tns-visually-hidden">slide <span
                    class="current">1</span> of 2
                </div>
                <div id="tns196-mw" class="tns-ovh">
                  <div id="tns196-iw" class="tns-inner">
                    <div
                        id="tns196"
                        class="user-preview-stats-slides  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                      <div id="tns196-item0" class="user-preview-stats-slide tns-item tns-slide-active"
                      >
                        <div class="user-stats">
                          <div class="user-stat">
                            <p class="user-stat-title">{{ item.userPush }}</p>
                            <p class="user-stat-text">发布</p>
                          </div>
                          <div class="user-stat">
                            <p class="user-stat-title">{{ item.follows }}</p>
                            <p class="user-stat-text">关注</p>
                          </div>
                          <div class="user-stat">
                            <p class="user-stat-title">{{ item.fans }}</p>
                            <p class="user-stat-text">粉丝</p>
                          </div>
                        </div>
                      </div>
                      <div id="tns196-item1" aria-hidden="true" class="user-preview-stats-slide tns-item"
                           tabindex="-1"><p class="user-preview-text">
                        这个家伙有点懒，还没有个性签名~
                      </p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="" v-if="viewIdValueSet === '1'">
              <div aria-label="Carousel Pagination" class="user-preview-stats-roster slider-roster">
                <div aria-controls="tns196" aria-label="Carousel Page 1 (Current Slide)"
                     class="slider-roster-item tns-nav-active"
                     data-nav="0"></div>
                <div aria-controls="tns196" aria-label="Carousel Page 2" class="slider-roster-item" data-nav="1"
                     tabindex="-1"></div>
              </div>
            </div>
          </div>
          <div class="user-preview-actions" style="height: 48px;">
            <p v-if="viewIdValueSet !== '3' && item.isFollow !== true"
               @click="addFollows(item)"
               class="button secondary">
              + 关注
            </p>
            <p v-else class="button secondary">
              已关注
            </p>
          </div>

          <div class="user-preview-actions" v-if="viewIdValueSet === '3' && item.isFollow !== true">
            <p class="button accept">
              <!--              <svg class="button-icon icon-add-friend">-->
              <!--                <use xlink:href="#svg-add-friend"></use>-->
              <!--              </svg>-->
              + 关注
            </p>
          </div>
        </div>
      </div> <!----> <!----></div>

  </div>

</template>


<style scoped>
.grid.grid-3-3-3-3 {
  grid-template-columns: repeat(auto-fit, 279px);
}

.grid.grid-4-4-4 {
  grid-template-columns: repeat(auto-fit, 377px);
}

.grid.centered {
  -ms-flex-pack: center;
  justify-content: center;
}

.content-grid .grid {
  margin-top: 32px;
}

.grid {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  -ms-flex-align: start;
  align-items: start;
}

.user-preview {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  cursor: pointer;
}


.user-preview .user-preview-cover {
  height: 96px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
}

.user-preview.landscape {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 100px;
  padding-left: 84px;
  position: relative;
}

.user-preview.landscape .user-preview-cover {
  width: 84px;
  height: 100%;
  border-top-right-radius: 0;
  border-bottom-left-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
}

.user-preview.landscape .user-preview-info {
  width: 100%;
  padding: 0 28px 0 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.user-preview.landscape .user-preview-info .user-short-description {
  width: 160px;
}

.user-preview.landscape .user-short-description .user-short-description-avatar {
  position: absolute;
  top: -15px;
  left: 0;
  margin-left: -60px;
}

.user-preview.landscape .user-short-description {
  padding-top: 0;
}

.user-short-description.landscape.tiny {
  height: 56px;
  padding-top: 12px;
}

.user-short-description.landscape {
  padding: 0 0 0 32px;
}

.user-short-description {
  padding-top: 84px;
  position: relative;
}

.user-short-description.landscape.tiny .user-short-description-avatar {
  left: -25px;
}

.user-short-description.landscape .user-short-description-avatar {
  top: 0;
  margin-left: 0;
}

.user-short-description-avatar {
  transform: translate(-50%);
  margin-left: 0 !important;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
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

.user-preview .user-preview-info {
  padding: 0 28px 32px;
  position: relative;
}

.user-short-description {
  padding-top: 84px;
  position: relative;
}

.user-short-description-avatar {
  transform: translate(-50%);
  margin-left: 0 !important;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

.user-short-description .user-short-description-avatar {
  position: absolute;
  top: -54px;
  left: 50%;
  margin-left: -60px;
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

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: #337fff;
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

.user-preview .user-preview-info .user-short-description .user-short-description-title {
  font-size: 1.25rem;
}

.user-short-description-title {
  line-height: normal;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-short-description .user-short-description-title {
  font-size: 1.125rem;
}

.user-short-description .user-short-description-title, .user-short-description .user-short-description-text {
  font-weight: 700;
  text-align: center;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

h1, h2, h3, h4, h5, h6, p, ol, ul, figure, .table, .form-row {
  margin: 0;
}

.user-preview .user-preview-info .user-short-description .user-short-description-text {
  font-size: 0.75rem;
}

.user-short-description-text {
  height: 12px;
  font-size: 12px;
  color: #3e3f5e;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-short-description .user-short-description-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
}

.user-short-description .user-short-description-title, .user-short-description .user-short-description-text {
  font-weight: 700;
  text-align: center;
}

.tns-outer {
  padding: 0 !important;
}

.tns-visually-hidden {
  position: absolute;
  left: -10000em;
}

.tns-ovh {
  overflow: hidden;
}

#tns196-iw {
  margin: 0px;
}

#tns196 {
  width: calc(200%);
  transition-duration: 0.3s;
}

.user-preview .user-preview-info .user-preview-stats-slides {
  /*margin-top: 40px;*/
}

.tns-horizontal.tns-subpixel {
  white-space: nowrap;
}

.tns-slider {
  -webkit-transition: all 0s;
  -moz-transition: all 0s;
  transition: all 0s;
}

.tns-horizontal.tns-subpixel > .tns-item {
  display: inline-block;
  vertical-align: top;
  white-space: normal;
}

.user-preview-stats-slide {
  width: 328px;
  float: left;
}

.tns-slider > .tns-item {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.user-stats {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.user-stats .user-stat {
  position: relative;
}

.user-stat {
  padding: 0 24px;
}

.user-stat-title {
  max-width: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-stat .user-stat-title {
  font-size: 0.875rem;
}

.user-stat .user-stat-title, .user-stat .user-stat-text {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
}

.user-stat .user-stat-title, .user-stat .user-stat-text {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stats .user-stat::after {
  content: '';
  width: 1px;
  height: 20px;
  background-color: #eaeaf5;
  position: absolute;
  top: 6px;
  right: 0;
}

#tns196 > .tns-item {
  width: calc(50%);
}

#tns196 > .tns-item {
  font-size: 14px;
}

.tns-horizontal.tns-subpixel > .tns-item {
  display: inline-block;
  vertical-align: top;
  white-space: normal;
}

.user-preview-stats-slide {
  width: 328px;
  float: left;
}

.tns-slider > .tns-item {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.user-preview .user-preview-info .user-preview-text {
  display: none;
  width: 270px;
  margin: -10px auto 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4285714286em;
  text-align: center;
}

.user-preview-text {
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-line;
}

.user-preview .user-preview-info .user-preview-stats-roster {
  position: absolute;
  top: 22px;
  right: 28px;
}

.slider-roster {
  display: -ms-flexbox;
  display: flex;
}

.slider-roster .slider-roster-item {
  margin-right: 8px;
}

.slider-roster-item {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #3e3f5e;
  opacity: .2;
  cursor: pointer;
}

.slider-roster .slider-roster-item:last-child {
  margin-right: 0;
}

.slider-roster .slider-roster-item {
  margin-right: 8px;
}

.slider-roster-item.tns-nav-active {
  opacity: 1;
}

.slider-roster-item {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #3e3f5e;
  opacity: .2;
  cursor: pointer;
}

.user-preview .user-preview-info .user-preview-actions {
  display: -ms-flexbox;
  display: flex;
  margin-top: 40px;
}

.user-preview .user-preview-info .user-preview-actions .button:last-child {
  margin-right: 0;
}

.user-preview .user-preview-info .user-preview-actions .button {
  width: 100%;
  margin-right: 16px;
}

.button.primary, .button.secondary {
  background-color: #337fff;
}

.button.primary, .button.secondary {
  background-color: #337fff;
}

.button.secondary {
  background-color: #615dfa;
  box-shadow: 4px 7px 12px 0 rgba(97, 93, 250, 0.2);
}

.button {
  /* color: #fff !important; */
}

.button {
  display: inline-block;
  height: 48px;
  border-radius: 10px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  transition: background-color .2s ease-in-out, color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
  box-shadow: 3px 5px 10px 0 rgba(62, 63, 94, 0.2);
}
.user-preview.landscape .user-preview-info .user-preview-actions {
  margin-top: 0;
}
.user-preview.landscape .user-preview-info .user-avatar-list, .user-preview.landscape .user-preview-info .badge-list, .user-preview.landscape .user-preview-info .user-preview-social-links-wrap, .user-preview.landscape .user-preview-info .user-preview-actions, .user-preview.landscape .user-preview-info .social-links {
  margin-top: 0;
}
.user-preview .user-preview-info .user-preview-actions {
  display: -ms-flexbox;
  display: flex;
  margin-top: 40px;
}
.user-preview.landscape .user-preview-info .user-preview-actions .button:last-child, .user-preview.landscape .user-preview-info .user-preview-actions .tag-sticker:last-child {
  margin-right: 0;
}
.user-preview .user-preview-info .user-preview-actions .button:last-child {
  margin-right: 0;
}
.user-preview.landscape .user-preview-info .user-preview-actions .button {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 64px;
  height: 44px;
}
.user-preview.landscape .user-preview-info .user-preview-actions .button {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 64px;
  height: 44px;
}
.user-preview.landscape .user-preview-info .user-preview-actions .button, .user-preview.landscape .user-preview-info .user-preview-actions .tag-sticker {
  margin-right: 12px;
}
.user-preview .user-preview-info .user-preview-actions .button {
  width: 100%;
  margin-right: 16px;
}
.user-preview .user-preview-info .user-preview-actions .button .button-icon {
  fill: #fff;
}
.button .button-icon {
  fill: #fff;
  transition: fill .2s ease-in-out;
}
svg:not(:root) {
  overflow: hidden;
}
.icon-comment, .icon-thumbs-up, .icon-friend, .icon-info, .icon-group, .icon-marketplace, .icon-add-friend, .icon-remove-friend, .icon-delete, .icon-send-message, .icon-settings, .icon-cross-thin, .icon-newsfeed, .icon-overview, .icon-members, .icon-badges, .icon-quests, .icon-streams, .icon-events, .icon-events-monthly, .icon-events-weekly, .icon-events-daily, .icon-pin, .icon-ticket, .icon-forums, .icon-profile, .icon-timeline, .icon-photos, .icon-videos, .icon-blog-posts, .icon-forum, .icon-store, .icon-share, .icon-pinned, .icon-status, .icon-big-grid-view, .icon-small-grid-view, .icon-list-grid-view, .icon-poll, .icon-camera, .icon-gif, .icon-tags, .icon-trophy, .icon-return, .icon-clock, .icon-earnings, .icon-wallet, .icon-item, .icon-revenue {
  fill: #adafca;
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 768px) {
  .user-preview {
    margin-bottom: 16px;
  }
  .is-show{
    display: none;
  }
}
</style>