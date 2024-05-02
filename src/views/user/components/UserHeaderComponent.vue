<template>
  <div class="profile-header reaicss0-0-0-1 reaicss-38ILl">
    <div style="position: relative;" class="reaicss0-1-1-2">
      <div class="reaicss0-2-2-3">
        <div class="header-more-set reaicss0-3-3-4"><svg class="post-settings-icon icon-more-dots reaicss0-4-4-5">
          <use xlink:href="#svg-more-dots" class="reaicss0-5-5-6"></use>
        </svg></div>
      </div>
      <div style="position: absolute; z-index: 9999; top: 44px; right: -6px; opacity: 0; visibility: hidden; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;" class="reaicss0-2-2-7">
        <div class="simple-dropdown widget-box-post-settings-dropdown user-more-set reaicss0-3-7-8">
          <p class="simple-dropdown-link reaicss0-4-8-9">举报</p>
        </div>
      </div>
    </div>
    <figure class="profile-header-cover reaicss0-1-1-10" style="background: url(&quot;https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_130251625737050?imageMogr2/crop/2368x600/gravity/center&quot;) center center / cover no-repeat rgb(255, 255, 255);"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_130251625737050?imageMogr2/crop/2368x600/gravity/center" alt="图片" style="display: none;" class="reaicss0-2-10-11"> </figure>
    <div class="profile-header-info reaicss0-1-1-12">
      <div class="user-short-description big reaicss0-2-12-13">
        <div class="xm-header user-avatar user-short-description-avatar reaicss0-3-13-14" style="width:140px;height:140px;border:14px solid #fff;cursor:default;border-radius:50%;">
          <div class="xm-avatar reaicss0-4-14-15" style="width:140px;height:140px;padding:16px;"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_668781628835603?imageMogr2/crop/240x240/gravity/center" alt="头像" style="border-radius:50%;display:;" class="reaicss0-5-15-16"></div> <svg viewBox="0 0 100 100" style="width:140px;height:140px;" class="reaicss0-4-14-17">
          <defs class="reaicss0-5-17-18">
            <linearGradient id="svgb837c561-b662-49e3-a6b3-20d24f6ab460" x1="0%" y1="0%" x2="100%" y2="0%" class="reaicss0-6-18-19">
              <stop offset="0%" class="reaicss0-7-19-20"></stop>
              <stop offset="100%" class="reaicss0-7-19-21"></stop>
            </linearGradient>
          </defs>
          <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke="#e9e9f0" stroke-width="8" fill-opacity="0"></path>
          <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" stroke="url(#svgb837c561-b662-49e3-a6b3-20d24f6ab460)" stroke-width="8" fill-opacity="0" style="stroke-dasharray:160.72,287;"></path>
        </svg>
          <div class="xm-level reaicss0-4-14-22" style="background:transparent;"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E9%BB%84v1605690523?upload_type/Tencent_COS" style="width:35px;height:35px;" class="reaicss0-5-22-23"></div>
        </div>
        <div class="reaicss0-3-13-24">
          <p class="user-short-description-title reaicss0-4-24-25">DS-REAI软件小蘑菇</p>
          <p class="user-short-description-text reaicss0-4-24-26">
          </p>
        </div>
      </div>
      <div class="user-stats reaicss0-2-12-27">
        <div class="user-stat big reaicss0-3-27-28">
          <p class="user-stat-title reaicss0-4-28-29">267</p>
          <p class="user-stat-text reaicss0-4-28-30">发布</p>
        </div>
        <div class="user-stat big reaicss0-3-27-31">
          <p class="user-stat-title reaicss0-4-31-32">37</p>
          <p class="user-stat-text reaicss0-4-31-33">关注</p>
        </div>
        <div class="user-stat big reaicss0-3-27-34">
          <p class="user-stat-title reaicss0-4-34-35">107</p>
          <p class="user-stat-text reaicss0-4-34-36">粉丝</p>
        </div>
      </div>
      <div class="profile-header-info-actions reaicss0-2-12-37">
        <p class="profile-header-info-action button secondary reaicss0-3-37-38"><span class="hide-text-mobile reaicss0-4-38-39">+ 点击关注</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHeaderComponent"
}
</script>

<style scoped>

@media screen and (max-width: 768px) {
  .profile-header .profile-header-cover[data-v-883ac611] {
    height: 150px;
  }
  .profile-header{
    margin: 10px;
  }
  figure[data-v-883ac611] {
    margin: 0px 0px 1em !important;
  }
  .profile-header .profile-header-info[data-v-883ac611] {
    height: 205px;
    width: 100%;
    position: relative;
  }
  .profile-header .profile-header-info .user-stats[data-v-883ac611] {
    position: static;
    width: 100%;
    margin-top: 15px;
  }
  .profile-header .profile-header-info .profile-header-info-actions[data-v-883ac611] {
    position: static;
    margin-top: 15px;
  }
}

.profile-header {
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(94, 92, 154, 0.06) 0px 0px 40px 0px;
}

.profile-header {
  position: relative;
}

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

.profile-header .profile-header-cover  {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 300px;
}

:selection {
  background-color: rgb(51, 127, 255);
}

.profile-header .profile-header-info  {
  height: 126px;
  position: relative;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
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

.user-stats {
  display: flex;
  justify-content: center;
}

.profile-header .profile-header-info .user-stats  {
  position: absolute;
  top: 54px;
  left: 40px;
}

.profile-header .profile-header-info .profile-header-info-actions  {
  display: flex;
  justify-content: center;
  position: absolute;
  top: -24px;
  right: 32px;
}

.header-more-set {
  position: absolute;
  right: 20px;
  top: 20px;
  display: inline-block;
  padding: 5px;
  border-radius: 10px;
  background: rgba(0,0,0,.4);
}

.header-more-set:hover {
  cursor: pointer;
}

.simple-dropdown {
  width: 140px;
  padding: 10px 0px;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(94, 92, 154, 0.12) 0px 0px 40px 0px;
}

.user-more-set {
  margin: 22px 22px 0 0;
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
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-sizing: content-box;
}

.user-short-description.big .user-short-description-avatar  {
  top: -116px;
  margin-left: -74px;
}

.user-short-description .user-short-description-avatar  {
  top: -120px;
  margin-left: 0;
  left: 50%;
  transform: translate(-50%);
  cursor: default;
}

:selection {
  background-color: rgb(51, 127, 255);
}

.user-stat {
  padding: 0px 24px;
}

.user-stats .user-stat  {
  position: relative;
}

.user-stat.big {
  padding: 0px 30px;
}

.user-stats .user-stat::after {
  content: "";
  width: 1px;
  height: 20px;
  background-color: rgb(234, 234, 245);
  position: absolute;
  top: 6px;
  right: 0px;
}

.user-stats .user-stat.big::after {
  top: 8px;
}

.user-stats .user-stat:last-child::after {
  display: none;
}

p {
  margin: 0px;
}

p {
  color: rgb(62, 63, 94);
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

.button {
  display: inline-block;
  height: 48px;
  border-radius: 10px;
  background-color: rgb(62, 63, 94);
  color: rgb(255, 255, 255);
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  box-shadow: rgba(62, 63, 94, 0.2) 3px 5px 10px 0px;
}

.button.secondary {
  background-color: rgb(97, 93, 250);
  box-shadow: rgba(97, 93, 250, 0.2) 4px 7px 12px 0px;
}

.button.secondary {
  background-color: rgb(51, 127, 255);
}

.button.secondary {
  background-color: #337fff;
}

.profile-header .profile-header-info .profile-header-info-actions .profile-header-info-action  {
  margin-right: 16px;
}

.profile-header .profile-header-info .profile-header-info-actions .profile-header-info-action.button  {
  width: 180px;
}

.profile-header .profile-header-info .profile-header-info-actions .profile-header-info-action:last-child  {
  margin-right: 0px;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-more-dots {
  fill: rgb(255, 255, 255);
  width: 22px;
  height: 6px;
}

svg:not(:root) {
  overflow: hidden;
}

.post-settings-icon {
  height: 10px;
}

.simple-dropdown .simple-dropdown-link  {
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s ease-in-out 0s, padding-left 0.2s ease-in-out 0s;
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

.user-short-description .user-short-description-title  {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-title  {
  font-size: 1.125rem;
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
  color: rgb(173, 175, 202);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
}

.user-short-description.big .user-short-description-text  {
  font-size: 0.75rem;
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
  color: rgb(173, 175, 202);
  font-size: 0.6875rem;
}

.user-stat.big .user-stat-text  {
  font-size: 0.75rem;
}

.xm-avatar img  {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

stop:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop:nth-child(2) {
  stop-color: rgb(51, 127, 255);
}



</style>