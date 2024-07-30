<template>
  <div class="grid centered grid-1-1-1-1" style="margin-top: 32px; grid-gap: 0 !important">
    <div class="table-body-content" type="0" hover-forum="true" style="width: 100%;">
      <div class="table table-forum-category">
        <div class="table-header">
          <div class="table-header-column">
            <p class="table-header-title">版块</p>
          </div>
          <div class="table-header-column centered padded-medium">
            <p class="table-header-title">内容</p>
          </div>
          <div class="table-header-column centered padded-medium">
            <p class="table-header-title">成员</p>
          </div>
          <div class="table-header-column padded-big-left">
            <p class="table-header-title">最后发表</p>
          </div>
        </div>
        <div v-for="item in officalList"  class="table-body">
          <div class="table-row big">
            <div class="table-column">
              <div class="forum-category cursor">
                <a>
                  <img :src="item.logo" alt="" class="circle-image">
                </a>
                <div class="forum-category-info">
                  <p class="circle-name text-long-ellipsis"><span>{{ item.name }}</span></p>
                  <p class="circle-summary circle-title">{{ item.title }}</p>
                </div>
              </div>
            </div>
            <div class="table-column centered padded-medium">
              <p class="table-title">1148</p>
            </div>
            <div class="table-column centered padded-medium">
              <p class="table-title">513</p>
            </div>
            <div class="table-column padded-big-left cursor">
              <div class="table-link-reply">回复至:不忘初心</div>
              <div class="table-link-all text-long-ellipsis"><img src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_232841721669294?imageMogr2/crop/64x64/gravity/center">
                <p class="name text-long-ellipsis"><span style=""> 22.7.小測測 </span> <span> · 15小时前 </span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['officalList'])

</script>

<style scoped>


body {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-variant: tabular-nums;
  line-height: 1.5;
  background-color: #fff;
  font-feature-settings: "tnum","tnum";
}


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

.grid {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  -ms-flex-align: start;
  align-items: start;
}

.grid  {
  margin-top: 32px;
}

.grid.centered {
  -ms-flex-pack: center;
  justify-content: center;
}

.grid.centered {
  justify-content: flex-start;
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

.table {
  margin: 0;
}

.table {
  /*width: 100%;*/
  display: table;
}

.table {
  /*width: 100%;*/
  margin-bottom: 1rem;
  color: #212529;
}

.table  {
  margin-top: 16px;
}

.table  {
  margin-top: 0;
  margin-bottom: 0;
}

.table .table-header  {
  display: table-header-group;
}

.table .table-body  {
  display: table-row-group;
  border-radius: 12px;
}

.table-body {
  border-radius: 0;
}

.table .table-header-column  {
  display: table-cell;
  vertical-align: middle;
  height: 40px;
}

.table .table-header-column:first-child  {
  padding-left: 28px;
}

.padded-medium {
  width: 11%;
  /*padding: 0 29px;*/
}

.table .table-header-column.centered  {
  text-align: center;
}

.table .table-header-column.padded-medium  {
  /*padding: 0 46px;*/
}

.padded-big-left {
  width: 260px;
}

.table .table-header-column.padded-big-left  {
  padding-left: 60px;
}

.table .table-header-column:last-child  {
  padding-right: 28px;
}

.table .table-row  {
  display: table-row;
  background-color: var(--reaicc-meta-theme-post-color);
  height: 100px;
}

.table-row {
  border-radius: 0;
}

.table .table-row.big  {
  height: 160px;
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

.table-header-title {
  font-size: 16px!important;
}

.table .table-header-column .table-header-title  {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.table .table-column  {
  display: table-cell;
  vertical-align: middle;
}

.table-column {
  border-radius: 0;
}

.table-column {
  /*width: 44%;*/
}

.table .table-column:first-child  {
  padding-left: 28px;
}

.table-body-content:first-child .table-forum-category .table-body .table-column:first-child  {
  border-top-left-radius: 12px;
}

.table .table-column.centered  {
  text-align: center;
}

.table .table-column.padded-medium  {
  /*padding: 0 46px;*/
}

.cursor {
  cursor: pointer;
}

.table .table-column.padded-big-left  {
  padding-left: 60px;
}

.table .table-column:last-child  {
  padding-right: 28px;
}

.table-body-content:first-child .table-forum-category .table-body .table-column:last-child  {
  border-top-right-radius: 12px;
}

.table-body-content:last-child .table-forum-category .table-body .table-column:first-child  {
  border-bottom-left-radius: 12px;
}

.table-body-content:last-child .table-forum-category .table-body .table-column:last-child  {
  border-bottom-right-radius: 12px;
}

.forum-category {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.table.table-forum-category .forum-category  {
  width: 384px;
}

.table .table-column .table-title  {
  font-size: 0.875rem;
  font-weight: 700;
}

.table-link-reply {
  font-size: 14px;
  color: rgba(0,0,0,.85);
  line-height: 20px;
}

.table-link-reply {
  font-weight: 600;
}

.table-link-reply {
  max-width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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

.table-link-all {
  max-width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.table-link-all {
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  color: rgba(0,0,0,.85);
  font-weight: 400;
  line-height: 20px;
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

.forum-category .forum-category-info  {
  margin-left: 28px;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

.table-link-all img  {
  width: 24px;
  height: 24px;
  border-radius: 12px;
}

.table-link-all .name  {
  margin-left: 8px;
  line-height: normal;
}

.circle-image {
  width: 72px;
  height: 72px;
  border-radius: 12px;
}

.circle-name {
  max-width: 150px;
  font-size: 18px;
  font-weight: 600;
  color: var(--reaicc-fontcolor);
  line-height: 25px;
}

.circle-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.circle-summary {
  max-width: 320px;
  font-weight: 400;
  margin-top: 12px;
}

.circle-summary {
  font-size: 14px;
  color: var(--reaicc-fontcolor);
  line-height: 20px;
}



</style>