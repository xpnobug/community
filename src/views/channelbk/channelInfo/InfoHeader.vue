<template>
  <div class="profile-header">
    <figure class="profile-header-cover"
            :style="{background: 'url('+infoChannel.background+') center center / cover no-repeat var(--reaicc-meta-theme-post-color)'}">
      <img :src="infoChannel.background" alt="图片" style="display: none;">
    </figure>
    <div class="profile-header-info">
      <div class="user-short-description big">
        <div class="xm-header user-avatar user-short-description-avatar" style="width:150px;height:150px;border:none;cursor:default;border-radius:12px;top:-40px !important;left:115px;" data-v-2fadc57c="">
          <div class="xm-avatar" style="width:130px;height:130px;padding:10px;" data-v-2fadc57c="">
            <img alt="头像" style="border-radius: 12px;" data-v-2fadc57c="" class=""
                 :src="infoChannel.logo"></div>
        </div>
        <div class="forum-box">
          <p class="user-short-description-title text-long-ellipsis">{{ infoChannel.title }}</p>
          <p class="user-short-description-text" style="text-transform: none;">{{ infoChannel.summary }}</p>
        </div>
        <div class="user-stats">
          <div class="user-stat big">
<!--            <p class="user-stat-title" style="height: 22px;"><svg class="tag-sticker-icon icon-public">-->
<!--              <use xlink:href="#svg-public"></use>-->
<!--            </svg></p>-->
            <p class="user-stat-text">公开</p>
          </div>
          <div class="user-stat big">
            <p class="user-stat-title">{{ infoChannel.postCount }}</p>
            <p class="user-stat-text">内容</p>
          </div>
          <div class="user-stat big">
            <p class="user-stat-title">{{ infoChannel.memberCount }}</p>
            <p class="user-stat-text">成员</p>
          </div>
          <div class="user-stat big">
            <p class="user-stat-title">{{ infoChannel.essenceCount }}</p>
            <p class="user-stat-text">精华</p>
          </div>
          <div class="user-stat big" style="display:flex;">
            <div class="action-request accept forum-member" style="width: 64px;height: 44px;"><svg class="action-request-icon icon-add-friend" style="fill: #fff;opacity: 1;">
              <use xlink:href="#svg-join-group"></use>
            </svg></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
const props = defineProps({
  infoChannel: {
    type: Object,
  }
})
</script>

<style scoped>

@media screen and (max-width: 768px)  {
  .xm-header{
    width: 100px !important;
    height: 100px!important;
  }
  .xm-avatar{
    width: 80px!important;
    height: 80px!important;
  }
}

.profile-header {
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
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

.profile-header .profile-header-cover  {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 300px;
}
@media screen and (orientation: portrait) {
  .profile-header .profile-header-cover{
    height: 200px;
  }
}
:selection {
  background-color: #337fff;
}

.profile-header .profile-header-info  {
  height: 126px;
  position: relative;
}

img {
  vertical-align: middle;
}

img {
  border-style: none;
  vertical-align: middle;
}

figure > img  {
  width: 100%;
  height: 100%;
}

.user-short-description {
  padding-top: 84px;
  position: relative;
}

.user-short-description.big {
  padding-top: 52px;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.user-short-description .user-short-description-avatar  {
  position: absolute;
  top: -54px;
  left: 50%;
  margin-left: -60px;
}

.xm-header {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

.user-short-description.big .user-short-description-avatar  {
  top: -116px;
  margin-left: -74px;
}

:selection {
  background-color: #337fff;
}

.forum-box{
  left: 220px;
  max-width: calc(100% - 840px);
  position: absolute;
  top: 30px;
}

.user-stats {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.user-stats{
  left: auto!important;
  right: 33px!important;
}

.profile-header .profile-header-info .user-stats  {
  position: absolute;
  top: 54px;
  left: 40px;
}

.xm-avatar {
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
}

p {
  margin: 0;
}

p {
  color: #3e3f5e;
  font-family: PuHui;
  line-height: 1em;
}

p {
  margin-bottom: 0 !important;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1em;
  margin-top: 0;
}

.text-long-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-short-description .user-short-description-title  {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-title  {
  font-size: 1.125rem;
}

.text-long-ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-short-description-title{
  line-height: 33px;
}

.forum-box > p {
  max-width: 100%;
  text-align: left;
}

.user-short-description.big .user-short-description-title  {
  font-size: 1.5rem;
}

.user-short-description .user-short-description-text  {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-text  {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
}

.user-short-description-text{
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  height: 32px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
}

.user-short-description.big .user-short-description-text  {
  font-size: 0.75rem;
}

.user-stat {
  padding: 0 24px;
}

.user-stats .user-stat  {
  position: relative;
}

.user-stat.big {
  padding: 0 30px;
}

.user-stat{
  min-width: 88px;
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

.user-stats .user-stat.big::after {
  top: 8px;
}

.user-stats .user-stat:last-child::after {
  display: none;
}

:selection {
  background-color: #337fff;
}

.xm-avatar img {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.user-stat .user-stat-title  {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-title  {
  font-size: 0.875rem;
}

.user-stat.big .user-stat-title  {
  font-size: 1.375rem;
}

.user-stat .user-stat-text  {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-text  {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
}

.user-stat.big .user-stat-text  {
  font-size: 0.75rem;
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

.action-request.accept {
  background-color: #337fff;
}

.action-request.accept.forum-member{
  background-color: #337fff;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-public {
  fill: #3e3f5e;
  width: 20px;
  height: 20px;
}

svg:not(:root) {
  overflow: hidden;
}

.icon-add-friend {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.action-request .action-request-icon  {
  fill: #adafca;
  opacity: .6;
  transition: fill .2s ease-in-out, opacity .2s ease-in-out;
}

.action-request.accept .action-request-icon  {
  fill: #fff;
  opacity: 1;
}
@media screen and (orientation: portrait) {
  .profile-header .profile-header-info .user-stats{
    top: 75px;
    width: 100%;
  }
  .forum-box {
    left: 150px;
    max-width: calc(100% - 0px);
    position: absolute;
    top: 0;
  }
  .user-stats{
    left: 0!important;
    right:0!important;
  }
  .user-stat{
    min-width: 25px;
  }
  .grid{
    display: inline;
  }
}



</style>