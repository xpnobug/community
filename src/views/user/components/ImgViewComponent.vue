<script setup lang="ts">
import {getCurrentInstance, ref} from 'vue';
import {useRouter} from "vue-router";
import ImgShow from "@/components/ImgShow.vue";

const visible = ref(false);
const router = useRouter();

const open = ref<boolean>(false);
const instance = getCurrentInstance()
const imgInfoList = ref([])
const handleMenu = (item:any) => {
  //传入图片信息
  imgInfoList.value = item;
  open.value = true;
  const emit = () => {
    instance?.proxy?.$Bus.emit("openValue", open.value)
    instance?.proxy?.$Bus.emit("imgInfoList", imgInfoList.value)
  }
  emit();
}

const imgList = ref([
  {
    id: "1",
    image: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/6321e3f77e4ab768e18e8dc77ed072fb.jpg?imageMogr2/crop/368x368/gravity/center',
    likeCount: '',
    commonCount: ''
  },
  {
    id: "2",
    image: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/d54f6a75135a08a9251d491314b7c243.png?imageMogr2/crop/368x368/gravity/center',
    likeCount: '',
    commonCount: ''
  },
  {
    id: "3",
    image: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/03760edda2363d345ff587eac271850c.jpg?imageMogr2/crop/368x368/gravity/center',
    likeCount: '',
    commonCount: ''
  },
  {
    id: "4",
    image: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/c8b0e9e0416a056a0db6090a0af625f6.jpg?imageMogr2/crop/368x368/gravity/center',
    likeCount: '',
    commonCount: ''
  },
  {
    id: "5",
    image: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/a5093972fac6100e5b5c47464d7c5f69.jpg?imageMogr2/crop/368x368/gravity/center',
    likeCount: '',
    commonCount: ''
  },
  {
    id: "6",
    image: 'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/1c5da0656a2d7e170a8151885ec4e729.jpg?imageMogr2/crop/368x368/gravity/center',
    likeCount: '',
    commonCount: ''
  },
]);
</script>

<template>
  <section class="section snipcss-QSY36">
    <div class="section-header">
      <div class="section-header-info">
        <p class="section-pretitle">纯烬</p>
        <h2 class="section-title">最新照片 <span class="highlighted">{{
            imgList.length
          }}</span></h2>
      </div>
    </div>
    <ImgShow />
    <div class="grid grid-2-2-2-2-2-2 centered">
      <div class="photo-preview small"  v-for="item in imgList" @click="handleMenu(item)">
        <figure class="photo-preview-image"
                :style="{background: 'url('+item.image+') center center / cover no-repeat rgb(255, 255, 255)'}">
          <img :src="item.image" alt="图片" style="display: none;"></figure>
        <div class="photo-preview-info">
          <div class="reaction-count-list">
            <div class="reaction-count negative">
              <svg class="reaction-count-icon icon-thumbs-up">
                <use xlink:href="#svg-thumbs-up"></use>
              </svg>
              <p class="reaction-count-text">1</p>
            </div>
            <div class="reaction-count negative">
              <svg class="reaction-count-icon icon-comment">
                <use xlink:href="#svg-comment"></use>
              </svg>
              <p class="reaction-count-text">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

section {
  display: block;
}

.section {
  margin-top: 60px;
}

*, :before, :after {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

:before, :after {
  display: block;
}

*, :after, :before {
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

.grid.grid-2-2-2-2-2-2 {
  grid-template-columns: repeat(auto-fit, 184px);
}

.photo-preview {
  display: block;
  border-radius: 12px;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
  cursor: pointer;
  position: relative;
}

.small {
  font-size: 80%;
  font-weight: 400;
}

.photo-preview.small {
  height: 184px;
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

.section-header-info .section-pretitle {
  color: #8f91ac;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
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
  color: rgba(0, 0, 0, .85);
  font-weight: 500;
}

.section-header-info .section-title {
  margin-top: 8px;
  font-size: 1.625rem;
  font-weight: 700;
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

.photo-preview .photo-preview-image {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

:selection {
  background-color: #337fff;
}

.photo-preview .photo-preview-info {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: rgba(21, 21, 31, 0.96);
  position: relative;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: opacity .2s ease-in-out, visibility .2s ease-in-out;
}

.photo-preview:hover .photo-preview-info {
  opacity: 1;
  visibility: visible;
}

.highlighted {
  color: #337fff !important;
}

.section-header-info .section-title .highlighted {
  color: #00c7d9;
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

.reaction-count-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}

.reaction-count {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.reaction-count-list .reaction-count {
  margin-bottom: 22px;
}

.photo-preview .photo-preview-info .reaction-count-list .reaction-count {
  -webkit-transform: scale(0);
  transform: scale(0);
  transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
}

.photo-preview .photo-preview-info .reaction-count-list .reaction-count:first-child {
  transition-delay: .1s;
}

.photo-preview:hover .photo-preview-info .reaction-count-list .reaction-count {
  -webkit-transform: scale(1);
  transform: scale(1);
}

.reaction-count-list .reaction-count:last-child {
  margin-bottom: 0;
}

.photo-preview .photo-preview-info .reaction-count-list .reaction-count:last-child {
  transition-delay: .2s;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-thumbs-up {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

svg:not(:root) {
  overflow: hidden;
}

.reaction-count .reaction-count-icon {
  fill: #23d2e2;
}

.reaction-count.negative .reaction-count-icon {
  fill: #41efff;
}

.reaction-count.negative .reaction-count-icon {
  fill: #337fff;
}

.reaction-count.negative .reaction-count-icon {
  fill: #337fff;
}

.reaction-count .reaction-count-text {
  margin-left: 16px;
  font-size: 0.75rem;
  font-weight: 700;
  position: relative;
  top: 1px;
}

.reaction-count.negative .reaction-count-text {
  color: #fff;
}

.icon-comment {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

@media screen and (orientation: portrait) {
  .grid.centered{
    justify-content: center !important;
  }
}

</style>