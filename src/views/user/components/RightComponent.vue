<template>
  <div class="grid-column fixed snipcss-UvfyE tether-target tether-enabled tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
    <div class="widget-box">
      <p class="widget-box-title">照片 <span class="highlighted pointer">999</span></p>
      <div class="widget-box-content">
        <div class="picture-item-list small">
          <div class="picture-item">
            <figure class="picture round" style="background: url(&quot;https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/59caad9fc524e9433da9bb7b9fd910f4.png?imageMogr2/crop/104x104/gravity/center&quot;) center center / cover no-repeat rgb(255, 255, 255);"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/59caad9fc524e9433da9bb7b9fd910f4.png?imageMogr2/crop/104x104/gravity/center" alt="图片" style="display: none;"> </figure>
          </div>
          <div class="picture-item">
            <div class="picture-item-overlay round">
              <p class="picture-item-overlay-text">+999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="widget-box">
      <p class="widget-box-title">版块 <span class="highlighted" style="cursor:pointer;">999</span></p>
      <div class="widget-box-content">
        <div class="user-status-list">
          <div class="user-status request-small">
            <div class="xm-header user-avatar" style="width: 52px; height: 52px; border: none; cursor: pointer; border-radius: 8px; position: absolute; top: 0px; left: 0px;">
              <div class="xm-avatar" style="width: 52px; height: 52px; padding: 7.2px;"><img src="https://h5a.opensns.cn/public/uploads/attach/2019/08/06/5d497c3d4de72.jpg_160x160m1" alt="头像" class="" style="border-radius: 8px;"></div>
            </div>
            <p class="user-status-title text-long-ellipsis"><a href="/forum?id=27" class="bold">闲聊灌水</a></p>
            <p class="user-status-text small">491位成员</p>
            <div class="action-request-list">
              <div class="action-request accept"><svg class="action-request-icon icon-join-group">
                <use xlink:href="#svg-join-group"></use>
              </svg></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightComponent"
}
</script>

<style scoped>

html {
  width: 100%;
  height: 100%;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.grid-column  {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  min-width: 0;
}

.grid-column:nth-child(2)  {
  grid-area: content;
}

*,:before,:after {
  margin: 0;
  padding: 0;
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

:selection {
  background-color: #337fff;
}

.fixed {
  position: sticky;
  top: 54px;
}

.grid.grid-3-6-3 > .grid-column:nth-child(3) {
  grid-area: sidebar2;
}

.widget-box {
  padding: 32px 28px;
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
}

.widget-box .widget-box-content  {
  margin-top: 36px;
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

.widget-box .widget-box-title  {
  font-size: 1rem;
  font-weight: 700;
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

.picture-item-list {
  display: grid;
  -ms-flex-pack: center;
  justify-content: center;
}

.small {
  font-size: 80%;
  font-weight: 400;
}

.picture-item-list.small {
  grid-template-columns: repeat(auto-fit, 52px);
  grid-gap: 6px;
}

.picture-item-list {
  justify-content: flex-start;
  grid-gap: 3px;
}

.highlighted {
  color: #337fff!important;
}

.widget-box .widget-box-title .highlighted  {
  color: #00c7d9;
}

.picture-item {
  cursor: pointer;
  position: relative;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.user-status-list .user-status  {
  margin-bottom: 22px;
}

.user-status.request-small {
  padding-right: 48px;
}

.user-status-list .user-status:last-child  {
  margin-bottom: 0;
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

.picture {
  width: 52px;
  height: 52px;
}

.picture.round {
  border-radius: 12px;
}

:selection {
  background-color: #337fff;
}

.user-status  {
  font-family: "Rajdhani", sans-serif;
  padding-right: 70px;
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

:selection {
  background-color: #337fff;
}

.picture-item .picture-item-overlay  {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #337FFF;
}

.picture-item .picture-item-overlay.round  {
  border-radius: 12px;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-status .user-status-title  {
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

.user-status-title {
  cursor: pointer;
}

.user-status.request-small .user-status-title  {
  margin-top: 2px;
  line-height: 1.1428571429em;
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
  display: -ms-flexbox;
  display: flex;
}

.user-status .action-request-list  {
  position: absolute;
  top: 2px;
  right: 0;
}

.tag-list:first-child  {
  margin-top: 18px;
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

.xm-avatar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.picture-item .picture-item-overlay .picture-item-overlay-text  {
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
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

.action-request-list .action-request  {
  margin-right: 12px;
}

.action-request.accept {
  background-color: #337fff;
}

.action-request-list .action-request:last-child  {
  margin-right: 0;
}

.attachment:last-child  {
  margin-bottom: 0;
}

:selection {
  background-color: #337fff;
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

p a  {
  color: #00c7d9;
  font-weight: 600;
}

.user-status .user-status-title .bold  {
  color: #3e3f5e;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
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

a:active,a:hover {
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

.xm-avatar img  {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.icon-join-group {
  fill: #fff;
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
@media screen and (max-width: 1366px) {
  .fixed {
    display: none;
  }
}


</style>