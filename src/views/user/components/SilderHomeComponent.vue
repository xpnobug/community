<script lang="ts" setup>
import {getCurrentInstance, ref} from "vue";

const sectionMenu = ref([
  {id: "1", itemName: '时间线', icon: ''},
  {id: "2", itemName: '关注', icon: ''},
  {id: "3", itemName: '粉丝', icon: ''},
  {id: "4", itemName: '版块', icon: ''},
  {id: "5", itemName: '照片', icon: ''},
  {id: "6", itemName: '视频', icon: ''},
]);
const instance = getCurrentInstance()
const menuId = ref("1");
const handleMenu = (value: any) => {
  menuId.value = value.id
  const emit = () => {
    instance?.proxy?.$Bus.emit("menuId", menuId.value)
  }
  emit();
}
</script>

<template>
  <div id="slider_home" class="home-slider section-menu reaicss-dskXk" style="height:80px;"
      >
    <div class="slider-list">
      <div style="display:block;overflow:hidden;width:854px;transform:translateX(0px);"
          >
        <a class="section-menu-item" style="min-width:122px;cursor:pointer;"

           v-for="item in sectionMenu"
           :class="[{ 'active': menuId === item.id}]"
           @click="handleMenu(item)">
          <svg class="section-menu-item-icon icon-timeline">
            <use xlink:href="#svg-timeline"></use>
          </svg>
          <p class="section-menu-item-text">{{ item.itemName }}</p>
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
*, :before, :after {
  margin: 0px;
  padding: 0px;
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

.header-more-set:hover {
  cursor: pointer;
}

.slider-list {
  font-size: 0.875rem;
  display: flex;
  flex-wrap: nowrap;
  transition-duration: 0.3s;
}

.section-menu {
  height: 80px;
  overflow: hidden;
}

.home-slider {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  border-radius: 12px;
  background: var(--reaicc-meta-theme-post-color);
  box-shadow: rgba(94, 92, 154, 0.06) 0px 0px 40px 0px;
  padding: 0px 40px;
  position: relative;
  overflow: hidden;
}

.section-menu {
  margin-top: 16px;
}

a {
  text-decoration: none;
}

a {
  color: rgb(62, 63, 94);
  font-family: Rajdhani, sans-serif;
  line-height: 1em;
}

a {
  background-color: transparent;
  text-decoration: none !important;
}

a {
  color: rgb(0, 123, 255);
}

a {
  color: rgb(24, 144, 255);
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease 0s;
}

a {
  touch-action: manipulation;
}

.section-menu .section-menu-item {
  float: left;
  width: 122px;
  height: 80px;
  position: relative;
}

.section-menu .section-menu-item::after {
  content: "";
  width: 1px;
  height: 20px;
  background-color: rgb(234, 234, 245);
  position: absolute;
  top: 30px;
  right: 0px;
}

:selection {
  background-color: rgb(51, 127, 255);
}

a:hover {
  color: rgb(0, 199, 217);
  text-decoration: none;
}

a:hover {
  color: rgb(0, 86, 179);
  text-decoration: underline;
}

a:hover {
  color: rgb(64, 169, 255);
}

a:active, a:hover {
  text-decoration: none;
  outline: 0px;
}

.section-menu .section-menu-item:hover {
  border-bottom: 4px solid rgb(35, 210, 226);
}

.section-menu .section-menu-item:hover {
  border-bottom: 4px solid #337fff;
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

.section-menu .section-menu-item.active {
  border-bottom: 4px solid rgb(35, 210, 226);
}

.active {
  color: rgb(33, 37, 41);
  border-bottom: 4px solid rgb(51, 127, 255);
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

.section-menu .section-menu-item .section-menu-item-text {
  width: 100%;
  color: rgb(62, 63, 94);
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  position: absolute;
  top: 34px;
  transform: translate(0px, 20px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease-in-out 0s, visibility 0.25s ease-in-out 0s, transform 0.25s ease-in-out 0s, -webkit-transform 0.25s ease-in-out 0s;
}

.section-menu .section-menu-item .section-menu-item-text {
  position: relative;
  top: 28px;
  color: rgb(173, 175, 202);
  transform: none;
  transition: none 0s ease 0s;
  opacity: 1;
  visibility: visible;
}

.section-menu .section-menu-item.active .section-menu-item-text {
  color: rgb(62, 63, 94);
}

.section-menu .section-menu-item .section-menu-item-text {
  position: relative;
  top: 28px;
  color: rgb(173, 175, 202);
  transform: none;
  transition: none 0s ease 0s;
  opacity: 1;
  visibility: visible;
}

.section-menu .section-menu-item .section-menu-item-text {
  position: relative;
  top: 28px;
  color: #adafca;
  transform: none;
  transition: none;
  opacity: 1;
  visibility: visible;
}

.section-menu .section-menu-item.active .section-menu-item-text {
  color: rgb(62, 63, 94);
}

.section-menu .section-menu-item.active .section-menu-item-text {
  color: #3e3f5e;
}

.icon-friend {
  fill: rgb(173, 175, 202);
  width: 20px;
  height: 20px;
}

.section-menu .section-menu-item .section-menu-item-icon {
  fill: rgb(173, 175, 202);
  opacity: 0.6;
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -10px;
  transition: opacity 0.25s ease-in-out 0s, visibility 0.25s ease-in-out 0s, transform 0.25s ease-in-out 0s, -webkit-transform 0.25s ease-in-out 0s;
}

.section-menu .section-menu-item .section-menu-item-icon {
  position: relative;
  top: 20px;
  transform: none;
  transition: none 0s ease 0s;
}

.section-menu .section-menu-item .section-menu-item-icon {
  position: relative;
  top: 20px;
  transform: none;
  transition: none 0s ease 0s;
}

.section-menu .section-menu-item .section-menu-item-icon {
  position: relative;
  top: 20px;
  transform: none;
  transition: none;
}

.icon-group {
  fill: rgb(173, 175, 202);
  width: 20px;
  height: 20px;
}

.icon-photos {
  fill: rgb(173, 175, 202);
  width: 20px;
  height: 20px;
}

.icon-profile {
  fill: rgb(173, 175, 202);
  width: 20px;
  height: 20px;
}

:selection {
  background-color: rgb(51, 127, 255);
}

.icon-videos {
  fill: rgb(173, 175, 202);
  width: 20px;
  height: 20px;
}


</style>