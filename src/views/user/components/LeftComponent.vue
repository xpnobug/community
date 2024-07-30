<template>
  <div class="grid-column fixed snipcss-JMfhZ" style="top: -768px;">
    <div class="widget-box">
      <p class="widget-box-title">简介</p>
      <div class="widget-box-content">
        <p class="paragraph">100年互联网行业经验</p>
        <div class="flex">
          <div class="auth">工作单位</div>
          <div class="auth-content" style="flex:3;"> REAI信息科技有限公司 </div>
        </div>
        <div class="flex">
          <div class="auth">学校</div>
          <div class="auth-content text-long-ellipsis" style="max-width:70%;"> 哥伦比亚大学 </div>
        </div>
        <div class="flex">
          <div class="auth">认证</div>
          <div class="auth-content">
            <div style="display:flex;">
              <div id="tooltip107a3041-a821-4236-82d7-8e7e2f0c431d" data-title="官方认证" style="position: relative;"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E7%BA%A2V1605690514?imageMogr2/crop/40x40/gravity/center" class="auth-content photo">
                <div class="xm-tooltip" style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -36px; opacity: 0; visibility: hidden; transform: translate(0px, -10px); transition: all 0.3s ease-in-out 0s;">
                  <p class="xm-tooltip-text">官方认证</p>
                </div>
              </div> <span style="margin-left:5px;">技术总监</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="auth">等级</div>
          <div class="auth-content"> 10级 </div>
        </div>
        <div class="flex">
          <div class="auth">公司</div>
          <div class="auth-content"> LT-REAI </div>
        </div>
        <div class="flex">
          <div class="auth">UID</div>
          <div class="auth-content"> 35 </div>
        </div>
        <div class="flex">
          <div class="auth">IP属地</div>
          <div class="auth-content text-long-ellipsis" style="max-width:70%;"> 外星 </div>
        </div>
      </div>
    </div>
    <div class="widget-box">
      <p class="widget-box-title">关注 <span class="highlighted" style="cursor:pointer;">999</span></p>
      <div class="widget-box-content">
        <div class="user-status-list">
<!--          <div class="user-status request-small">-->
<!--            <div class="xm-header user-avatar" style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; position: absolute; top: 0px; left: 0px;">-->
<!--              <div class="xm-avatar" style="width: 44px; height: 44px; padding: 6.4px;"><img src="https://h5a.opensns.cn/public/uploads/avatar/20/982d877ebdeedc17187e4a31100d2666.png_128x128m1" alt="头像" class="" style="border-radius: 50%;"></div> <svg viewBox="0 0 100 100" style="width: 44px; height: 44px;">-->
<!--              <defs>-->
<!--                <linearGradient id="svg8bb8a279-4435-4d93-9c85-1ae2fdb5ea82" x1="0%" y1="0%" x2="100%" y2="0%">-->
<!--                  <stop offset="0%"></stop>-->
<!--                  <stop offset="100%"></stop>-->
<!--                </linearGradient>-->
<!--              </defs>-->
<!--              <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke="#e9e9f0" stroke-width="8" fill-opacity="0"></path>-->
<!--              <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke="url(#svg8bb8a279-4435-4d93-9c85-1ae2fdb5ea82)" stroke-width="8" fill-opacity="0" style="stroke-dasharray: 123.41, 287;"></path>-->
<!--            </svg>-->
<!--              <div class="xm-level" style="box-sizing: content-box; font-size: 10.8px; width: 18px; height: 18px; border: 1px solid rgb(255, 255, 255);"><span style="display: block;">7</span></div>-->
<!--            </div>-->
<!--            <p class="user-status-title text-long-ellipsis"><a class="bold"> 扶一把小安 </a></p>-->
<!--            <p class="user-status-text small text-long-ellipsis">42粉丝</p>-->
<!--            <div class="action-request-list">-->
<!--              <div class="action-request accept"><svg class="action-request-icon icon-add-friend">-->
<!--                <use xlink:href="#svg-add-friend"></use>-->
<!--              </svg></div>-->
<!--            </div>-->
<!--          </div>-->
          <div v-for="item in followUserList" class="user-status request-small">
            <div class="xm-header user-avatar"
                 style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; position: absolute; top: 0px; left: 0px;">
              <div class="xm-avatar" style="width: 44px; height: 44px; padding: 6.4px;">
                <img :src="item.avatar" alt="头像" class="" style="border-radius: 50%;"></div>
              <svg style="width: 44px; height: 44px;" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="svgbcc0b24d-dc41-4e49-8d78-4d1a3a4a1c4d" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%"></stop>
                    <stop offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0" stroke="#e9e9f0"
                      stroke-width="8"></path>
                <path :style="[{strokeDasharray: item.exp + ',287'}]"
                      d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" fill-opacity="0" stroke="url(#svgbcc0b24d-dc41-4e49-8d78-4d1a3a4a1c4d)"
                      stroke-width="8"></path>
              </svg>
              <div class="xm-level" style="background: transparent;">
                <img
                    src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E7%BA%A2V1605690514?upload_type/Tencent_COS"
                    style="width: 18px; height: 18px;"></div>
            </div>
            <p class="user-status-title text-long-ellipsis" style="color: rgb(251, 91, 90);"><a class="bold"
                                                                                                style="color: rgb(251, 91, 90);">{{
                item.username
              }}</a></p>
            <p class="user-status-text small text-long-ellipsis">{{ item.statistics.fansCount }} 粉丝</p>
            <div class="action-request-list">
              <div class="action-request accept">
                <p class="button accept" @click="addFollows(item)">+ 关注</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="widget-box">
      <p class="widget-box-title">视频 <span class="highlighted pointer">999</span></p>
      <div class="widget-box-content">
        <div class="video-box-list">
          <div class="video-box small">
            <div class="video-box-cover popup-video-trigger">
              <figure class="video-box-cover-image" style="background: url(&quot;https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/fdc968e2edbff43ff57bf250a3930ce6.gif?imageMogr2/crop/400x225/gravity/center&quot;) center center / cover no-repeat rgb(255, 255, 255);"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/fdc968e2edbff43ff57bf250a3930ce6.gif?imageMogr2/crop/400x225/gravity/center" alt="图片" style="display: none;"> </figure>
              <div class="play-button"><svg class="play-button-icon icon-play">
                <use xlink:href="#svg-play"></use>
              </svg></div>
              <div class="video-box-info">
                <p class="video-box-title"> 外面白雪皑皑。 给大家看</p>
                <p class="video-box-text">2022-12-01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getFollowListById} from "@/api/user";
import {useRoute} from "vue-router";
import {ref} from "vue";

const followUserList = ref([]);
//获取地址栏中id
const route = useRoute();
const getFollowList = () => {
  getFollowListById(route.params.id).then(res => {
    followUserList.value = res.data.data;
  })
}
getFollowList();

</script>

<style scoped>

*,:before,:after {
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
  box-sizing: border-box;
}

:before,:after {
  display: block;
}

*,:after,:before {
  box-sizing: border-box;
}

:selection {
  color: rgb(255, 255, 255);
  background-color: rgb(35, 210, 226);
}

:selection {
  color: rgb(255, 255, 255);
  background: rgb(24, 144, 255);
}

:selection {
  background-color: rgb(51, 127, 255);
}

:selection {
  background-color: #337fff;
}

.grid-column  {
  display: grid;
  grid-template-columns: 100%;
  gap: 16px;
  min-width: 0px;
}

.fixed {
  position: sticky;
  top: 54px;
}

.grid.grid-3-6-3 > .grid-column:nth-child(1) {
  grid-area: sidebar1;
}

.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(94, 92, 154, 0.06) 0px 0px 40px 0px;
  position: relative;
}

.widget-box .widget-box-content  {
  margin-top: 36px;
  color: #1a1a1a;
}

p {
  margin: 0px;
}

p {
  color: var(--reaicc-fontcolor);
  font-family: Rajdhani, sans-serif;
  line-height: 1em;
}

p {
  margin-bottom: 0px !important;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-top: 0px;
  margin-bottom: 1em;
}

.widget-box .widget-box-title  {
  font-size: 1rem;
  font-weight: 700;
}

.paragraph {
  font-size: 0.875rem;
  line-height: 1.71429em;
  font-weight: 500;
}

.paragraph {
  white-space: pre-line;
  font-size: 16px;
}

.flex {
  margin-top: 20px;
  display: flex;
  font-size: 14px;
}

.highlighted {
  color: #337fff!important;
}

.widget-box .widget-box-title .highlighted  {
  color: rgb(0, 199, 217);
}

.pointer {
  cursor: pointer;
}

.flex .auth  {
  width: 30%;
  color: #bababa;
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

a {
  text-decoration: none;
}

a {
  color: var(--reaicc-fontcolor);
  font-family: Rajdhani, sans-serif;
  line-height: 1em;
}

a {
  background-color: transparent;
  text-decoration: none !important;
}

a {
  color: rgb(0, 123, 255);
}

a {
  color: rgb(24, 144, 255);
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease 0s;
}

a {
  touch-action: manipulation;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

svg:not(:root) {
  overflow: hidden;
}

:selection {
  background-color: rgb(51, 127, 255);
}

.user-status {
  min-height: 44px;
  padding: 2px 0px 0px 52px;
  position: relative;
}

.user-status-list .user-status  {
  margin-bottom: 22px;
}

.user-status.request-small {
  padding-right: 48px;
}

.user-status-list .user-status:last-child  {
  margin-bottom: 0px;
}

.video-box {
  border-radius: 12px;
  box-shadow: rgba(94, 92, 154, 0.06) 0px 0px 40px 0px;
}

.small {
  font-size: 80%;
  font-weight: 400;
}

.video-box-list .video-box  {
  margin-bottom: 22px;
}

.video-box-list .video-box:last-child  {
  margin-bottom: 0px;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.xm-header {
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-sizing: content-box;
}

:selection {
  background-color: rgb(51, 127, 255);
}

.user-status .user-status-title  {
  color: var(--reaicc-fontcolor);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.42857em;
}

.user-status-title {
  cursor: pointer;
}

.user-status.request-small .user-status-title  {
  margin-top: 2px;
  line-height: 1.14286em;
}

.user-status.request-small .user-status-title  {
  line-height: normal;
}



.user-status .user-status-text  {
  font-size: 12px;
}

.user-status.request-small .user-status-text  {
  margin-top: 8px;
}

.user-status .user-status-text.small  {
  font-size: 0.75rem;
}

.action-request-list {
  display: flex;
}

.user-status .action-request-list  {
  position: absolute;
  top: 2px;
  right: 0px;
}

.video-box .video-box-cover  {
  cursor: pointer;
  position: relative;
}

.video-box .video-box-cover::after {
  content: "";
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgba(21, 21, 31, 0.6);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
}

.video-box.small .video-box-cover::after {
  border-radius: 12px;
}

.video-box .video-box-cover:hover::after {
  opacity: 1;
  visibility: visible;
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
  right: 0px;
  bottom: 0px;
  background: rgb(0, 81, 212);
  color: rgb(255, 255, 255);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
}

p a  {
  color: rgb(0, 199, 217);
  font-weight: 600;
}

.user-status .user-status-title .bold  {
  color: var(--reaicc-fontcolor);
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

a:hover {
  color: rgb(0, 199, 217);
  text-decoration: none;
}

a:hover {
  color: rgb(0, 86, 179);
  text-decoration: underline;
}

a:hover {
  color: rgb(64, 169, 255);
}

a:active,a:hover {
  text-decoration: none;
  outline: 0px;
}

.action-request {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(222, 222, 234);
  border-radius: 10px;
  color: rgb(173, 175, 202);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
}

.action-request-list .action-request  {
  margin-right: 12px;
}

.action-request.accept {
  background-color: rgb(51, 127, 255);
}

.action-request-list .action-request:last-child  {
  margin-right: 0px;
}

figure {
  margin: 0px;
}

figure {
  margin: inherit !important;
}

figure {
  display: block;
}

figure {
  margin: 0px 0px 1rem;
}

figure {
  margin: 0px 0px 1em;
}

.video-box .video-box-cover .video-box-cover-image  {
  height: 160px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.video-box.small .video-box-cover .video-box-cover-image  {
  height: 128px;
  border-radius: 12px;
}

:selection {
  background-color: rgb(51, 127, 255);
}

.play-button {
  width: 46px;
  height: 46px;
  padding: 12px 0px 0px 15px;
  border: 4px solid rgb(65, 239, 255);
  border-radius: 50%;
  background-color: rgba(21, 21, 31, 0.96);
}

.play-button {
  border: 4px solid rgb(51, 127, 255);
}

.play-button {
  border: 4px solid #337fff;
}

.video-box .video-box-cover .play-button  {
  position: absolute;
  top: 56px;
  left: 50%;
  margin-left: -23px;
  z-index: 2;
}

.video-box.small .video-box-cover .play-button  {
  top: 40px;
  transition: transform 0.3s ease-in-out 0s, -webkit-transform 0.3s ease-in-out 0s;
}

.video-box.small .video-box-cover:hover .play-button {
  transform: translate(0px, -20px);
}

.video-box .video-box-info  {
  padding: 22px 28px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: rgb(255, 255, 255);
}

.video-box.small .video-box-cover .video-box-info  {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0px 16px 14px;
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 2;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

.photo {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.xm-avatar img  {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.icon-add-friend {
  fill: rgb(173, 175, 202);
  width: 20px;
  height: 20px;
}

.action-request .action-request-icon  {
  fill: rgb(173, 175, 202);
  opacity: 0.6;
  transition: fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
}

.action-request.accept .action-request-icon  {
  fill: rgb(255, 255, 255);
  opacity: 1;
}

figure > img  {
  width: 100%;
  height: 100%;
}

.icon-play {
  fill: rgb(255, 255, 255);
  width: 12px;
  height: 14px;
}

.play-button .play-button-icon  {
  display: block;
}

.icon-play:before {
  content: "\E726";
}

.video-box-title {
  height: 32px;
  line-height: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: pre-line;
}

.video-box .video-box-info .video-box-title  {
  font-size: 0.875rem;
  font-weight: 700;
}

.video-box.small .video-box-cover .video-box-info .video-box-title  {
  color: rgb(255, 255, 255);
  transform: translate(20px, 0px);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, -webkit-transform 0.3s ease-in-out 0s;
}

.video-box.small .video-box-cover .video-box-info .video-box-title  {
  font-size: 0.75rem;
}

.video-box .video-box-info .video-box-text  {
  margin-top: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.video-box.small .video-box-cover .video-box-info .video-box-text  {
  color: rgb(255, 255, 255);
  transform: translate(20px, 0px);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, -webkit-transform 0.3s ease-in-out 0s;
}

.video-box.small .video-box-cover .video-box-info .video-box-text  {
  margin-top: 4px;
  transition-delay: 0.15s;
}

.xm-tooltip-text {
  padding: 0px 12px;
  border-radius: 200px;
  background-color: var(--reaicc-fontcolor);
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 24px;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: rgb(51, 127, 255);
}

@media screen and (orientation: portrait) {
  .grid.grid-3-6-3 > .grid-column[data-v-21c5d470]:nth-child(1){
    display: none;
  }
  .grid.grid-3-6-3 > .grid-column[data-v-0982f1f3]:nth-child(3){
    display: none;
  }
}
</style>