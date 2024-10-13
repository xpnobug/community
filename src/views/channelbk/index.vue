<template>
  <div class="content-grid">
    <div class="content-view">
      <div class="home-slider">
        <UserSearchComponent/>
        <div class="section-header">
          <div class="section-header-info">
            <h2 class="section-title">官方版块</h2>
          </div>
          <a-space wrap>
            <SaveChannelCompontents :get-offica-data="getOfficaData"/>
          </a-space>
        </div>
        <UserChannelsIndex
            :getUserChannelData="getUserChannelData"
            v-if="officalList.length > 0"
            :userChannelList="officalList"/>
        <!--        <OfficalChannelIndex v-if="officalList.length > 0" :officalList="officalList"/>-->
        <a-empty v-else/>
        <div style="margin-top: 10px">
          <a-pagination
              @change="pageChange(page.currentPage)"
              v-model:current="page.currentPage"
              v-model:page-size="page.pageSize"
              :total="page.count" show-less-items/>
        </div>

        <div class="section-header">
          <div class="section-header-info">
            <h2 class="section-title">用户版块</h2>
          </div>
          <a-space wrap>
            <SaveUserChannel :getUserChannelData="getUserChannelData"/>
          </a-space>
        </div>
        <UserChannelsIndex
            :getUserChannelData="getUserChannelData"
            v-if="userChannelList.length > 0"
            :userChannelList="userChannelList"/>
        <a-empty v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserSearchComponent from "@/views/userMembers/components/UserSearchComponent.vue";
import UserChannelsIndex from "@/views/channelbk/userChannel/userChannelsIndex.vue";
import OfficalChannelIndex from "@/views/channelbk/officialChannel/officalChannelIndex.vue";
import SaveChannelCompontents from "@/views/channelbk/functions/saveOffical.vue";
import {channelList} from "@/api/channels";
import {Page} from "@/api/base";
import {ref, onMounted, reactive} from "vue";
import SaveUserChannel from "@/views/channelbk/functions/saveUserChannel.vue";

// 获取官方版块数据
const officalList = ref([]);
const userChannelList = ref([]);

const page = reactive<Page>({
  pageSize: 4,
  currentPage: 1,
  count: 0,
  maxPage: 10,
  minPage: 1,
  firstResult: 0,
  recount: true
});
const getOfficaData = async () => {
  const {data} = await channelList(page, 1)
  page.pageSize = data.pageSize;
  page.currentPage = data.currentPage;
  page.count = data.count;
  officalList.value = data.data;
}
const pageChange = (val) => {
  page.currentPage = val;
  getOfficaData()
}

const getUserChannelData = async () => {
  const {data} = await channelList(page, 2)
  userChannelList.value = data.data;
}
// const emit = defineEmits(['getUserChannelData']);

onMounted(() => {
  getOfficaData();
  getUserChannelData();
})
</script>

<style scoped>
.section-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.section-header {
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  font-feature-settings: "tnum", "tnum";
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

.section-filters-bar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 28px;
  border-radius: 12px;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  background-color: var(--reaicc-meta-theme-post-color);
}

.section-filters-bar {
  margin-top: 30px;
}

.section-filters-bar {
  border-radius: 12px 12px 0 0;
  background-color: var(--reaicc-meta-theme-post-color);
}

.home-slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  /*background: var(--reaicc-meta-theme-post-color);*/
  /*box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);*/
  padding: 0 40px;
  position: relative;
  overflow: hidden;
}

.home-slider {
  border-radius: 0 0 12px 12px;
}

:selection {
  background-color: #337fff;
}

.section-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.section-header {
  margin-top: 60px;
}

.grid {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  -ms-flex-align: start;
  align-items: start;
}

.grid {
  margin-top: 32px;
}

.grid.centered {
  -ms-flex-pack: center;
  justify-content: center;
}

.grid.grid-4-4-4 {
  grid-template-columns: repeat(auto-fit, 384px);
}

.section-pager-bar {
  width: 494px;
  height: 60px;
  margin: 32px auto 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  position: relative;
  overflow: hidden;
}

.section-pager-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.section-pager-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

.section-filters-bar .section-filters-bar-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
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

.section-header-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-preview {
  border-radius: 12px;
  background-color: var(--reaicc-meta-theme-post-color);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
}

:selection {
  background-color: #337fff;
}

ul {
  list-style: none;
}

ul {
  margin: 0;
}

ul {
  margin-bottom: 1rem;
}

ul {
  margin-top: 0;
  margin-bottom: 1em;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
}

:selection {
  background-color: #337fff;
}

.form {
  width: 100%;
}

.filter-tabs {
  display: -ms-flexbox;
  display: flex;
}

.section-filters-bar .filter-tabs {
  height: 96px;
}

.section-filters-bar .section-filters-bar-actions .form + .filter-tabs {
  margin-left: 80px;
}

.view-actions {
  display: -ms-flexbox;
  display: flex;
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
  border-bottom: 4px solid #fff;
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

h2 {
  margin: 0;
}

h2 {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

h2 {
  font-weight: 700;
}

h2 {
  margin-bottom: .5rem;
}

h2 {
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

h2 {
  font-size: 2rem;
}

h2 {
  margin-top: 0;
  margin-bottom: .5em;
  color: var(--reaicc-fontcolor);
  font-weight: 500;
}

.section-header-info .section-title {
  margin-top: 8px;
  font-size: 1.625rem;
  font-weight: 700;
}

.page-item {
  height: 24px;
  padding: 0 8px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 3px 10px 0 rgba(94, 92, 154, 0.12);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 24px;
}

.page-item {
  box-shadow: none;
  padding: 0 8px;
  width: 65px;
  height: 46px;
  border-radius: 0;
  position: relative;
}

.page-item::before {
  content: "";
  width: 1px;
  height: 20px;
  background-color: #eaeaf5;
  position: absolute;
  top: 12px;
  left: 0;
}

.page-item:nth-child(-n+2)::before {
  display: none;
}

.page-item:nth-last-of-type(-n+2)::before {
  display: none;
}

.form-input {
  position: relative;
}

.small {
  font-size: 80%;
  font-weight: 400;
}

.section-filters-bar .form-input.with-button {
  width: 240px;
}

.form-select {
  width: 100%;
  height: 48px;
  position: relative;
}

.section-filters-bar.v1 .form .form-select {
  display: none;
}

.filter-tab {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 162px;
  height: 100%;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  position: relative;
  transition: border-color .2s ease-in-out;
}

.filter-tab.active {
  border-bottom-color: #23d2e2;
}

.filter-tab.active {
  border-bottom-color: #337fff;
}

.filter-tab.active {
  border-bottom-color: #337fff;
}

.filter-tabs .filter-tab::before {
  content: '';
  width: 1px;
  height: 20px;
  background-color: #eaeaf5;
  position: absolute;
  top: 38px;
  left: 0;
}

.filter-tabs .filter-tab:last-child::after {
  content: '';
  width: 1px;
  height: 20px;
  background-color: #eaeaf5;
  position: absolute;
  top: 38px;
  right: 0;
}

.view-action {
  cursor: pointer;
}

.view-actions .view-action {
  margin-right: 26px;
}

.view-actions .view-action:last-child {
  margin-right: 0;
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

.user-preview .user-preview-cover {
  height: 96px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
}

:selection {
  background-color: #337fff;
}


.page-link {
  position: relative;
  display: block;
  padding: .5rem .75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-item .page-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0;
  margin: 0;
  color: #3e3f5e;
  font-family: Rajdhani, sans-serif;
}

.page-item .page-link {
  height: 100%;
  font-size: .875rem;
  font-weight: 700;
  transition: color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

.page-item.disabled .page-link {
  color: #adafca;
  opacity: .6;
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-item .page-link, .page-item .page-link:hover {
  height: 100%;
  font-size: .875rem;
  font-weight: 700;
  transition: color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

.page-item .page-link:hover {
  color: #337fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, .12);
  background: none;
  border-color: transparent;
  border-radius: 12px;
}

.page-item .page-link, .page-item .page-link:hover {
  height: 100%;
  font-size: .875rem;
  font-weight: 700;
  transition: color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

button {
  font-family: "Rajdhani", sans-serif;
}

button {
  border-radius: 0;
}

button {
  touch-action: manipulation;
}

button {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

button {
  overflow: visible;
}

button {
  text-transform: none;
}

[type="button"], button {
  -webkit-appearance: button;
}

button, [type="button"] {
  -webkit-appearance: button;
}

[type="button"]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.active .page-link {
  height: 100%;
  text-align: center;
  color: #337fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, .12);
  background: none;
  border-color: transparent;
  border-radius: 12px;
  transition: color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .2s ease-in-out;
}

.page-item:last-child .page-link {
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}


label {
  display: block;
  margin: 0;
  color: #3e3f5e;
  line-height: 1em;
}

label {
  margin: 0 !important;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

label {
  touch-action: manipulation;
}

.form-input label {
  color: #adafca;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all .3s ease-in-out;
  pointer-events: none;
}

.form-input.small label {
  font-size: 0.875rem;
}

.form-input.small label {
  top: 16px;
}

input {
  height: 54px;
  padding: 0 18px;
}

input {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

input {
  overflow: visible;
}

input[type="text"] {
  font-family: "Rajdhani", sans-serif;
}

input[type="text"] {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input[type="text"] {
  height: 54px;
  padding: 0 18px;
}

input[type="text"] {
  -webkit-appearance: none;
}

input:not([type="range"]) {
  touch-action: manipulation;
}

.form-input.small input {
  font-size: 0.875rem;
}

.form-input.small input {
  height: 48px;
}

.section-filters-bar .form-input.with-button input {
  padding-right: 82px;
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

.button.primary {
  background-color: #23d2e2;
  box-shadow: 4px 7px 12px 0 rgba(35, 210, 226, 0.2);
}

.section-filters-bar .button {
  width: 180px;
}

.button.primary {
  background-color: #337fff;
}

.button.primary {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
}

.button {
  width: 64px;
  top: 0;
  right: 0;
}

.button.primary {
  background-color: #337fff;
}

.button.primary {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
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

.button:hover {
  color: #fff;
  background-color: #2e2e47;
}

.button.primary:hover {
  background-color: #337FFF;
}

.form-select label {
  padding: 0 6px;
  background-color: #fff;
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 600;
  position: absolute;
  top: -8px;
  left: 12px;
  pointer-events: none;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select {
  font-family: "Rajdhani", sans-serif;
}

select {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
}

select {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

select {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

select {
  word-wrap: normal;
}

select {
  touch-action: manipulation;
}

select {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

select {
  text-transform: none;
}

.form-select select {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 0.875rem;
  cursor: pointer;
}

.form-select .form-select-icon {
  fill: #3e3f5e;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  top: 20px;
  right: 20px;
  pointer-events: none;
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

.filter-tab .filter-tab-text {
  padding: 4px 0;
  color: #adafca;
  font-size: 0.875rem;
  font-weight: 700;
  transition: color .2s ease-in-out;
}

.filter-tab.active .filter-tab-text {
  color: #3e3f5e;
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

.tag-sticker {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 3px 5px 20px 0 rgba(94, 92, 154, 0.1);
}

.user-preview .user-preview-info .tag-sticker {
  position: absolute;
  top: -12px;
  right: 28px;
}

.user-short-description {
  padding-top: 84px;
  position: relative;
}

.user-stats {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.user-preview .user-preview-info .user-short-description + .user-stats {
  margin-top: 30px;
}

.user-avatar-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.user-avatar-list.reverse {
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.user-avatar-list.centered {
  -ms-flex-pack: center;
  justify-content: center;
}

.user-avatar-list {
  height: 40px;
}

.user-preview .user-preview-info .user-avatar-list {
  margin-top: 34px;
}

.user-preview .user-preview-info .user-preview-actions {
  display: -ms-flexbox;
  display: flex;
  margin-top: 40px;
}

.user-preview .user-preview-info .user-avatar-list + .user-preview-actions {
  margin-top: 10px;
}

.icon-magnifying-glass {
  fill: #fff;
  width: 20px;
  height: 20px;
}

.icon-big-grid-view {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.view-action .view-action-icon {
  fill: #adafca;
  opacity: .4;
  transition: opacity .2s ease-in-out, fill .2s ease-in-out;
}

.view-action.active .view-action-icon {
  fill: #3e3f5e;
  opacity: 1;
}

.icon-small-grid-view {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-list-grid-view {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-public {
  fill: #3e3f5e;
  width: 20px;
  height: 20px;
}

.tag-sticker .tag-sticker-icon {
  fill: #3e3f5e;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.user-short-description .user-short-description-avatar {
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

.user-short-description-avatar {
  transform: translate(-50%);
  margin-left: 0 !important;
}

:selection {
  background-color: #337fff;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-short-description .user-short-description-title {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-title {
  font-size: 1.125rem;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.user-short-description-title {
  line-height: normal;
}

.user-preview .user-preview-info .user-short-description .user-short-description-title {
  font-size: 1.25rem;
}

.user-short-description .user-short-description-text {
  font-weight: 700;
  text-align: center;
}

.user-short-description .user-short-description-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
}

.user-short-description-text {
  height: 32px;
  color: #3e3f5e;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-line;
}

.user-preview .user-preview-info .user-short-description .user-short-description-text {
  font-size: 0.75rem;
}

.user-stat {
  padding: 0 24px;
}

.user-stats .user-stat {
  position: relative;
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

.user-stats .user-stat:last-child::after {
  display: none;
}

.smaller {
  position: relative;
}

.smaller-mask-box {
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -10px;
  z-index: 999;
}

.button.secondary {
  background-color: #615dfa;
  box-shadow: 4px 7px 12px 0 rgba(97, 93, 250, 0.2);
}

.button.secondary {
  background-color: #337fff;
}

.button.secondary {
  background-color: #337fff;
}

.user-preview .user-preview-info .user-preview-actions .button {
  width: 100%;
  margin-right: 16px;
}

.user-preview .user-preview-info .user-preview-actions .button:last-child {
  margin-right: 0;
}

.xm-tooltip-text {
  padding: 0 12px;
  border-radius: 200px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 24px;
}

.xm-avatar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

p a {
  color: #00c7d9;
  font-weight: 600;
}

.user-short-description .user-short-description-title a {
  color: #3e3f5e;
  font-weight: 700;
}

.user-short-description .user-short-description-text a {
  color: #adafca;
  font-weight: 700;
}

.user-short-description .user-short-description-text a:hover {
  color: #00c7d9;
}

.user-stat .user-stat-title {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-title {
  font-size: 0.875rem;
}

.user-stat .user-stat-text {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
}

.user-avatar-list .user-avatar {
  margin-left: -8px;
}

.user-avatar-list.medium .user-avatar {
  margin-left: -10px;
}

.user-avatar-list .user-avatar:last-child {
  margin-left: 0;
}

.user-avatar-list.medium .user-avatar:last-child {
  margin-left: 0;
}

.user-avatar-list.reverse.medium .user-avatar:first-child {
  margin-left: 0;
}

.user-avatar-list.reverse.medium .user-avatar:last-child {
  margin-left: -10px;
}

.smaller-mask-box .smaller-mask {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  background-color: #337fff;
}

.icon-join-group {
  fill: #fff;
  width: 20px;
  height: 20px;
}

.button .button-icon {
  fill: #fff;
  transition: fill .2s ease-in-out;
}

.user-preview .user-preview-info .user-preview-actions .button .button-icon {
  fill: #fff;
}

.xm-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

</style>