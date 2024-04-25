<template>
  <div class="section-filters-bar v1" data-v-a0c93e92="">
    <div class="section-filters-bar-actions" data-v-a0c93e92="">
      <form class="form" data-v-a0c93e92="" onsubmit="return false">
        <div class="form-input with-button small" data-v-a0c93e92=""><label for="groups-search"><!---->
          <span>搜索</span></label> <input maxlength="" name="" placeholder="" type="text">
          <button class="button primary" data-v-a0c93e92="">
            <svg class="icon-magnifying-glass" data-v-a0c93e92="">
              <use data-v-a0c93e92="" xlink:href="#svg-magnifying-glass"></use>
            </svg>
          </button>
        </div>
        <div class="form-select" data-v-a0c93e92=""><label data-v-a0c93e92=""
                                                           for="groups-filter-category">排序</label> <select
            id="groups-filter-category" data-v-a0c93e92="" name="groups_filter_category">
          <option data-v-a0c93e92="" value="0">最近活跃</option>
          <option data-v-a0c93e92="" value="1">最近加入</option>
          <option data-v-a0c93e92="" value="2">字母排序</option>
        </select>
          <svg class="form-select-icon icon-small-arrow" data-v-a0c93e92="">
            <use data-v-a0c93e92="" xlink:href="#svg-small-arrow"></use>
          </svg>
        </div>
      </form>
      <div class="filter-tabs" data-v-a0c93e92="">
        <div class="filter-tab active" data-v-a0c93e92=""><p class="filter-tab-text" data-v-a0c93e92="">最近活跃</p>
        </div>
        <div class="filter-tab" data-v-a0c93e92=""><p class="filter-tab-text" data-v-a0c93e92="">最近加入</p></div>
        <div class="filter-tab" data-v-a0c93e92=""><p class="filter-tab-text" data-v-a0c93e92="">字母排序</p></div>
      </div>
    </div>
    <div class="section-filters-bar-actions" data-v-a0c93e92="">
      <div class="view-actions" data-v-a0c93e92="">
        <div class="view-action active" data-v-a0c93e92="">
          <div id="tooltip0b0a3ea0-bf2f-45ae-b8ba-3ad401d7cce7" data-title="普通视图" data-v-4a9425e5=""
               data-v-a0c93e92="" style="position: relative;">
            <svg class="view-action-icon icon-big-grid-view" data-v-4a9425e5="" data-v-a0c93e92="">
              <use data-v-4a9425e5="" data-v-a0c93e92="" xlink:href="#svg-big-grid-view"></use>
            </svg>
            <div class="xm-tooltip"
                 style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -36px; opacity: 0; visibility: hidden; transform: translate(0px, -10px); transition: all 0.3s ease-in-out 0s;">
              <p class="xm-tooltip-text">普通视图</p></div>
          </div>
        </div>
        <div class="view-action" data-v-a0c93e92="">
          <div id="tooltip48cf0da5-810f-4df4-a44d-da3c67fcddcb" class="view-action" data-title="小网格"
               data-v-4a9425e5="" data-v-a0c93e92="" style="position: relative;">
            <svg class="view-action-icon icon-small-grid-view" data-v-4a9425e5="" data-v-a0c93e92="">
              <use data-v-4a9425e5="" data-v-a0c93e92="" xlink:href="#svg-small-grid-view"></use>
            </svg>
            <div class="xm-tooltip"
                 style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -30px; opacity: 0; visibility: hidden; transform: translate(0px, -10px); transition: all 0.3s ease-in-out 0s;">
              <p class="xm-tooltip-text">小网格</p></div>
          </div>
        </div>
        <div class="view-action" data-v-a0c93e92="">
          <div id="tooltipd77abdc5-46c0-42b8-8a9f-bd8374e25523" data-title="列表" data-v-4a9425e5=""
               data-v-a0c93e92="" style="position: relative;">
            <svg class="view-action-icon icon-list-grid-view" data-v-4a9425e5="" data-v-a0c93e92="">
              <use data-v-4a9425e5="" data-v-a0c93e92="" xlink:href="#svg-list-grid-view"></use>
            </svg>
            <div class="xm-tooltip"
                 style="white-space: nowrap; position: absolute; z-index: 99999; top: -32px; left: 50%; margin-left: -24px; opacity: 0; visibility: hidden; transform: translate(0px, -10px); transition: all 0.3s ease-in-out 0s;">
              <p class="xm-tooltip-text">列表</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSearchComponent"
}
</script>

<style scoped>

.content-grid .section-banner + .section-filters-bar {
  margin-top: 64px;
}
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
.section-filters-bar .section-filters-bar-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
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
.form-input.small label {
  top: 16px;
}
.form-input.small label, .form-input.small input, .form-input.small textarea {
  font-size: 0.875rem;
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
label, input[type="text"], input[type="password"], textarea, select, button {
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
.button.primary[data-v-a0c93e92] {
  box-shadow: 4px 7px 12px 0 rgba(51, 127, 255, .2);
}
.button.primary[data-v-a0c93e92], .button.secondary[data-v-a0c93e92] {
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

.filter-tab.active[data-v-a0c93e92] {
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

</style>