<template>
  <div data-v-4d901bbe="" class="class-fication class-fications snipcss-kwgzs" style="opacity: 1; transition: all 0.5s ease 0s; margin: 10px;">
    <div data-v-4d901bbe="" class="class-fication-title snipcss0-1-1-2">
      <div data-v-4d901bbe="" class="class-fication-type snipcss0-2-2-3">选择发布类型</div>
      <div data-v-4d901bbe="" class="class-fication-drafts snipcss0-2-2-4">草稿箱（<span data-v-4d901bbe="" class="snipcss0-3-4-5">0</span>）</div>
    </div>
    <ul data-v-4d901bbe="" class="class-fication-box snipcss0-1-1-6">
      <li data-v-4d901bbe="" class="snipcss0-2-6-7">
        <div data-v-4d901bbe="" class="top snipcss0-3-7-8"><svg data-v-4d901bbe="" class="option-item-icon icon-status snipcss0-4-8-9">
          <use data-v-4d901bbe="" xlink:href="#svg-status" class="snipcss0-5-9-10"></use>
        </svg></div>
        <div data-v-4d901bbe="" class="bottom snipcss0-3-7-11">动态</div>
      </li>
      <li data-v-4d901bbe="" class="snipcss0-2-6-12">
        <div data-v-4d901bbe="" class="top snipcss0-3-12-13"><svg data-v-4d901bbe="" class="option-item-icon icon-blog-posts snipcss0-4-13-14">
          <use data-v-4d901bbe="" xlink:href="#svg-blog-posts" class="snipcss0-5-14-15"></use>
        </svg></div>
        <div data-v-4d901bbe="" class="bottom snipcss0-3-12-16"><a href="/release">帖子</a></div>
      </li>
      <li data-v-4d901bbe="" class="snipcss0-2-6-17">
        <div data-v-4d901bbe="" class="top snipcss0-3-17-18"><svg data-v-4d901bbe="" class="option-item-icon icon-videos snipcss0-4-18-19">
          <use data-v-4d901bbe="" xlink:href="#svg-videos" class="snipcss0-5-19-20"></use>
        </svg></div>
        <div data-v-4d901bbe="" class="bottom snipcss0-3-17-21">视频</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EditArticle"
}
</script>

<style scoped>
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

[data-v-4d901bbe]:selection {
  background-color: #337fff;
}

.class-fication-title[data-v-4d901bbe]  {
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
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

.class-fication-box[data-v-4d901bbe]  {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.class-fication-title .class-fication-type[data-v-4d901bbe]  {
  color: #d4d4d4;
}

.class-fication-title .class-fication-drafts[data-v-4d901bbe]  {
  color: #3e3f5e;
  cursor: pointer;
}

.class-fication-box li[data-v-4d901bbe]  {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-right: 24px;
}

.class-fication-box li[data-v-4d901bbe]:last-child  {
  margin-right: 0;
}

.class-fication-box li .top[data-v-4d901bbe]  {
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  opacity: .85;
}

.class-fication-box li:first-child .top[data-v-4d901bbe]  {
  background: rgba(80,139,254,.1);
}

.class-fication-box li .bottom[data-v-4d901bbe]  {
  white-space: nowrap;
  margin-top: 18px;
  font-size: 14px;
  color: rgba(0,0,0,.88);
  text-align: center;
  line-height: 1;
}

.class-fication-box li:nth-child(2) .top[data-v-4d901bbe]  {
  background: rgba(250,173,20,.1);
}

.class-fication-box li:nth-child(3) .top[data-v-4d901bbe]  {
  background: rgba(255,77,79,.1);
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-status {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

svg:not(:root) {
  overflow: hidden;
}

.class-fication-box li .top .option-item-icon[data-v-4d901bbe]  {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.class-fication-box li:first-child .top .option-item-icon[data-v-4d901bbe]  {
  fill: #31a0ff;
}

.icon-blog-posts {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.class-fication-box li:nth-child(2) .top .option-item-icon[data-v-4d901bbe]  {
  fill: #ff9a02;
}

.icon-videos {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.class-fication-box li:nth-child(3) .top .option-item-icon[data-v-4d901bbe]  {
  fill: #fd434f;
}
</style>