
<script setup lang="ts">
import { ref } from 'vue'
const tagList = ref([
  {id: "1", label: '全部'},
  {id: "2", label: '帖子'},
  {id: "3", label: '动态'},
  {id: "4", label: '视频'},
  {id: "5", label: '问题'},
  {id: "6", label: '草稿箱'},
]);
const stateList = ref([
  {id: "1", label: '全部'},
  {id: "2", label: '已发布'},
  {id: "3", label: '审核中'},
  {id: "4", label: '未通过'},
  {id: "5", label: '仅自己可见'},
]);
const tagId = ref("1");
const handleTag = (value: any) => {
  tagId.value = value.id
}
const stateId = ref("1");
const handleState = (value: any) => {
  stateId.value = value.id
}
</script>

<template>
  <div class="account-hub-content snipcss-ivnB7">
    <div class="section-header">
      <div class="section-header-info">
        <p class="section-pretitle">个人</p>
        <h2 class="section-title">我的发布</h2>
      </div>
    </div>
    <div class="head-box">
      <div class="slider-box">
        <div></div>
        <div :class="item.id === tagId ? 'slider active':'slider'"
             v-for="item in tagList" :key="item.id"
             @click="handleTag(item) ">
          <p class="slider-title" >{{item.id === '6' ? item.label+'(999)': item.label}}</p>
        </div>
      </div>
      <div class="state" v-if="tagId !== '6'">
        <div class="state-item" style="color: rgba(0, 0, 0, 0.45);cursor: default;"> 状态 </div>
        <div :class="item.id === stateId ? 'state-item state-item-active':'state-item'"
             v-for="item in stateList"
             @click="handleState(item) "> {{ item.label }} </div>
      </div>
    </div>
    <a-empty style="color: black" description="暂无数据" />
  </div>
</template>


<style scoped>

.section-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.section-header  {
  margin-top: 60px;
}

.section-header  {
  margin-bottom: 28px;
}

.section-header:first-child  {
  margin-top: 0;
}

.head-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  padding: 22px 24px;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(94,92,154,.06);
}

.head-box .slider-box  {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 0;
  margin-bottom: 25px;
}

.head-box .state  {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
}

.empty-box {
  height: 100%;
}

.loader-bars {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 40px;
}

.loader-bars {
  margin-top: 30px!important;
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

.section-header-info .section-pretitle  {
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
  color: rgba(0,0,0,.85);
  font-weight: 500;
}

.section-header-info .section-title  {
  margin-top: 8px;
  font-size: 1.625rem;
  font-weight: 700;
}

.head-box .active  {
  border-bottom: 2px solid #337fff;
}

.head-box .slider-box .slider  {
  min-width: 48px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 14px;
  color: #999;
  text-align: center;
  padding-bottom: 18px;
  cursor: pointer;
  margin-right: 16px;
}

.head-box .slider-box .slider:hover {
  color: #333;
}

.head-box .slider-box .draft  {
  position: relative;
}

.head-box .slider-box .slider:last-child  {
  margin-right: 0;
}

.head-box .slider-box .draft::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 20px;
  background-color: #999;
  left: -20px;
  top: -2px;
}

.head-box .state .state-item  {
  margin-right: 32px;
  color: rgba(0,0,0,.65);
  cursor: pointer;
  font-size: 14px;
}

.head-box .state .state-item-active  {
  color: #337fff;
}

.ant-empty {
  margin: 0 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}

.loader-bars .loader-bar  {
  width: 4px;
  height: 100%;
  margin-right: 4px;
  border-radius: 200px;
  -webkit-transform: scaleY(0.2);
  transform: scaleY(0.2);
  -webkit-animation: loader-bars .5s infinite alternate ease-in;
  animation: loader-bars .5s infinite alternate ease-in;
}

.loader-bars .loader-bar:nth-child(1)  {
  background-color: #347FFF;
}

.loader-bars .loader-bar:nth-child(2)  {
  background-color: #4288FF;
  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}

.loader-bars .loader-bar:nth-child(3)  {
  background-color: #5393FF;
  -webkit-animation-delay: .2s;
  animation-delay: .2s;
}

.loader-bars .loader-bar:nth-child(4)  {
  background-color: #629CFF;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}

.loader-bars .loader-bar:nth-child(5)  {
  background-color: #71A6FF;
  -webkit-animation-delay: .4s;
  animation-delay: .4s;
}

.loader-bars .loader-bar:nth-child(6)  {
  background-color: #81B0FF;
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
}

.loader-bars .loader-bar:nth-child(7)  {
  background-color: #8CB7FF;
  -webkit-animation-delay: .6s;
  animation-delay: .6s;
}

.loader-bars .loader-bar:last-child  {
  margin-right: 0;
}

.loader-bars .loader-bar:nth-child(8)  {
  background-color: #9CC1FF;
  -webkit-animation-delay: .7s;
  animation-delay: .7s;
}

.head-box .slider-title  {
  color: rgba(0,0,0,.65);
}

.head-box .active > .slider-title  {
  font-weight: 500;
  color: rgba(0,0,0,.85);
}

.head-box .slider-box > .slider:last-child .slider-title  {
  max-width: 110px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}

.ant-empty-image {
  height: 100px;
  margin-bottom: 8px;
}

.ant-empty-description {
  margin: 0;
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

.ant-empty-image svg  {
  height: 100%;
  margin: auto;
}


@keyframes loader-bars {
  0% {
    -webkit-transform: scaleY(0.2);
    transform: scaleY(0.2);
    transform: scaleY(0.2);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transform: scaleY(1);
  }

}

</style>