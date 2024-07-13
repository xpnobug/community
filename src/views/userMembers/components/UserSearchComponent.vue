<script setup lang="ts">
import {ref, getCurrentInstance} from "vue";

const viewList = ref([
  {id: "1", viewAction: '普通视图', icon: ''},
  {id: "2", viewAction: '小网格', icon: ''},
  {id: "3", viewAction: '列表', icon: ''},
]);
const instance = getCurrentInstance()
const viewId = ref('1');
const handleViewAction = (value:any) => {
  viewId.value = value.id;
  const emit = () => {
    instance?.proxy?.$Bus.emit("viewId", viewId.value)
  }
  emit();
}

const tagList = ref([
  {id: "1", filter: '最近活跃'},
  {id: "2", filter: '最近加入'},
  {id: "3", filter: '字母排序'},
]);
const tagId = ref("1");
const handleTag = (value:any) => {
  tagId.value = value.id
  const emit = () => {
    instance?.proxy?.$Bus.emit("tagId", tagId.value)
  }
  emit();
}

</script>

<template>
  <div class="section-filters-bar v1">
    <div class="section-filters-bar-actions">
      <form class="form" onsubmit="return false">
        <div class="form-input with-button small">
          <div class="labels"><!---->
            <span>搜索</span>
          </div>
          <input maxlength="" name="" placeholder="" type="text">
          <button class="button primary">
            <svg class="icon-magnifying-glass">
              <use xlink:href="#svg-magnifying-glass"></use>
            </svg>
          </button>
        </div>
      </form>
      <div class="filter-tabs">
        <div class="filter-tab"
             v-for="tag in tagList"
             :class="[{ 'active': tagId === tag.id}]"
             @click="handleTag(tag)">
          <p class="filter-tab-text">{{ tag.filter }}</p>
        </div>
      </div>
    </div>
    <div class="section-filters-bar-actions">
      <div class="view-actions">
        <div class="view-action" v-for="item in viewList"
             :class="[{ 'active': viewId === item.id}]">
          <div :data-title="item.viewAction"
               style="position: relative;" @click="handleViewAction(item)">
<!--            <svg class="view-action-icon icon-big-grid-view">-->
<!--              <use xlink:href="#svg-big-grid-view"></use>-->
<!--            </svg>-->
            <p style="color: #00c7d9">{{item.viewAction}}</p>
            <div class="xm-tooltip"
                 style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -36px; opacity: 0; visibility: hidden; transform: translate(0px, -10px); transition: all 0.3s ease-in-out 0s;">
              <p class="xm-tooltip-text">{{ item.viewAction }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/*.content-grid .section-banner + .section-filters-bar {*/
/*  margin-top: 64px;*/
/*}*/

.content-grid .section-filters-bar {
  margin-top: 30px;
}

.section-filters-bar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 96px;
  padding: 0 28px;
  border-radius: 12px;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  background-color: #fff;
}


.form {
  width: 100%;
}

.section-filters-bar .form-input.with-button {
  width: 240px;
}

.small, small {
  font-size: 80%;
  font-weight: 400;
}

.form-input {
  position: relative;
}

.form-input.small .labels {
  top: 16px;
}

.form-input.small .labels, .form-input.small input, .form-input.small textarea {
  font-size: 0.875rem;
}

.form-input .labels {
  color: #adafca;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all .3s ease-in-out;
  pointer-events: none;
}

[role=button], a, area, button, input:not([type=range]), .labels, select, summary, textarea {
  touch-action: manipulation;
}

.labels {
  display: inline-block;
  margin-bottom: .5rem;
}

.labels {
  margin: 0 !important;
}

.labels {
  display: block;
  margin: 0;
  color: #3e3f5e;
  line-height: 1em;
}

.labels, input[type="text"], input[type="password"], textarea, select, button {
  font-family: "Rajdhani", sans-serif;
}

.section-filters-bar .form-input.with-button input {
  /*padding-right: 82px;*/
  width: 200px;
}

.form-input.small input {
  height: 48px;
}

.form-input.small label, .form-input.small input, .form-input.small textarea {
  font-size: 0.875rem;
}

input[type=number], input[type=password], input[type=text], textarea {
  -webkit-appearance: none;
}

input[type="text"], input[type="password"] {
  height: 54px;
  padding: 0 18px;
}

input[type="text"], input[type="password"], textarea, select {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

button, input {
  overflow: visible;
}

input, select, textarea {
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
  height: 54px;
  padding: 0 18px;
}

.button.primary {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
}

.button.primary, .button.secondary {
  background-color: #337fff;
}

.form-input.small button {
  width: 64px;
  position: absolute;
  top: 0;
  right: 0;
}

.button.primary {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
}

.button.primary, .button.secondary {
  background-color: #337fff;
}

.section-filters-bar .button {
  width: 180px;
}

.button.primary {
  background-color: #23d2e2;
  box-shadow: 4px 7px 12px 0 rgba(35, 210, 226, 0.2);
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
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

[type=reset], [type=submit], button, html [type=button] {
  -webkit-appearance: button;
}

button, select {
  text-transform: none;
}

button, input {
  overflow: visible;
}

button, input, optgroup, select, textarea {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

[type=button], [type=reset], [type=submit], button {
  -webkit-appearance: button;
}

button {
  border-radius: 0;
}

svg:not(:root) {
  overflow: hidden;
}

.icon-grid, .icon-magnifying-glass, .icon-messages, .icon-shopping-bag, .icon-notification, .icon-join-group, .icon-leave-group, .icon-plus, .icon-login {
  fill: #fff;
  width: 20px;
  height: 20px;
}

.section-filters-bar.v1 .form .form-select {
  display: none;
}

.form-select {
  width: 100%;
  height: 48px;
  position: relative;
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

[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
  touch-action: manipulation;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

label {
  margin: 0 !important;
}

label {
  display: block;
  margin: 0;
  color: #3e3f5e;
  line-height: 1em;
}

.form-select select {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 0.875rem;
  cursor: pointer;
}

button, select {
  text-transform: none;
}

button, input, optgroup, select, textarea {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
  touch-action: manipulation;
}

select {
  word-wrap: normal;
}

input, select, textarea {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input[type="text"], input[type="password"], textarea, select {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input textarea, select {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.section-filters-bar .section-filters-bar-actions .form + .filter-tabs {
  margin-left: 80px;
}

.section-filters-bar .filter-tabs {
  height: 96px;
}

.filter-tabs {
  display: -ms-flexbox;
  display: flex;
}

.filter-tab.active {
  border-bottom-color: #337fff;
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

.filter-tab.active .filter-tab-text {
  color: #3e3f5e;
}

.filter-tab .filter-tab-text {
  padding: 4px 0;
  color: #adafca;
  font-size: 0.875rem;
  font-weight: 700;
  transition: color .2s ease-in-out;
}

.section-filters-bar .section-filters-bar-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.view-actions {
  display: -ms-flexbox;
  display: flex;
}

.view-actions .view-action {
  margin-right: 26px;
}

.view-action {
  cursor: pointer;
}

.view-action.active .view-action-icon, .view-action:hover .view-action-icon {
  fill: #3e3f5e;
  opacity: 1;
}

.view-action .view-action-icon {
  fill: #adafca;
  opacity: .4;
  transition: opacity .2s ease-in-out, fill .2s ease-in-out;
}

.icon-comment, .icon-thumbs-up, .icon-friend, .icon-info, .icon-group, .icon-marketplace, .icon-add-friend, .icon-remove-friend, .icon-delete, .icon-send-message, .icon-settings, .icon-cross-thin, .icon-newsfeed, .icon-overview, .icon-members, .icon-badges, .icon-quests, .icon-streams, .icon-events, .icon-events-monthly, .icon-events-weekly, .icon-events-daily, .icon-pin, .icon-ticket, .icon-forums, .icon-profile, .icon-timeline, .icon-photos, .icon-videos, .icon-blog-posts, .icon-forum, .icon-store, .icon-share, .icon-pinned, .icon-status, .icon-big-grid-view, .icon-small-grid-view, .icon-list-grid-view, .icon-poll, .icon-camera, .icon-gif, .icon-tags, .icon-trophy, .icon-return, .icon-clock, .icon-earnings, .icon-wallet, .icon-item, .icon-revenue {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

svg {
  overflow: hidden;
}

img, svg {
  vertical-align: middle;
}

@media screen and (orientation: portrait) {
  .section-filters-bar .section-filters-bar-actions {
    flex-direction: column;
  }

  .section-filters-bar .section-filters-bar-actions .form + .filter-tabs {
    margin-left: 0;
  }

  .section-filters-bar .section-filters-bar-actions {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    /* align-items: center; */
  }

  .section-filters-bar {
    height: 100%;
    flex-direction: column;
  }

  .filter-tab {
    width: 80px;
  }

  .view-actions {
    /* flex-direction: column; */
    margin: 25px;
  }

  .user-preview[data-v-a2cc93aa] {
    margin-bottom: 16px;
  }
}
</style>