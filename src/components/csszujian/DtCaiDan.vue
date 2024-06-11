<template>
  <div class="menu-box">
    <div class="menu-button">
      <div class="line-box">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <ul id="menu-one" class="menu-list">
      <li><i class="fa fa-sliders"></i><span>设置</span></li>
      <li><i class="fa fa-clone"></i><span>复制</span></li>
      <li><i class="fa fa-share-square-o"></i><span>分享</span></li>
      <li><i class="fa fa-trash-o"></i><span>删除</span></li>
    </ul>
    <ul id="menu-two" class="menu-list">
      <li v-for="item in menuItems" @click="handleMenuItemClick(item)"><i
          :class="item.icon"></i><span> {{ item.label }} </span></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
//定义变量
const instance = getCurrentInstance()
const router = useRouter();
//导航菜单动态加载
const menuItems = ref([
  {id: "1", label: '首页', url: '/index', icon: 'iconfont icon-liebiao', expanded: false},
  {id: "2", label: '社区', url: '/dynamic', icon: 'iconfont icon-cangku', expanded: false},
  {id: "3", label: '用户版块', url: '/members', icon: 'iconfont icon-zhuti_tiaosepan', expanded: false},
  {id: "5", label: '频道', url: '/pages/aboutus', icon: 'iconfont icon-liebiao', expanded: false},
]);

const handleMenuItemClick = (item: any) => {
  router.push({path: item.url})
  // console.log(routeName, item.url)
};

const toUserInfo = (item: any) => {
  router.push({path: '/user/' + item.userId})
}


onMounted(() => {
  const menu_box = document.querySelector('.menu-box');
  const menu_button = document.querySelector('.menu-button');

  menu_button.addEventListener('click', function () {
    menu_box.classList.toggle('active');
  })
})
</script>

<style scoped>
/*设置手机端样式*/
@media screen and (max-width: 768px) {
  #menu-one {
    display: none;
  }

  #menu-two {
    display: block !important;
  }
}

* {
  margin: 0;
  padding: 0;
}

#menu-two {
  display: none;
}

.menu-box {
  position: fixed;
  bottom: 40px;
  right: 40px;
}

.menu-button {
  width: 50px;
  height: 50px;
  background-color: #5c67ff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(92, 103, 255, 0.3);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s ease-in;
}

.menu-button:hover {
  background-color: #4854ff;
  box-shadow: 0 0 0 8px rgba(92, 103, 255, 0.3);
}

.menu-button .line-box {
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.menu-button .line {
  background-color: #fff;
  width: 100%;
  height: 2px;
  border-radius: 2px;
}

.menu-button .line:first-child {
  width: 50%;
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

.menu-button .line:last-child {
  width: 50%;
  align-self: flex-end;
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.menu-list {
  width: 140px;
  height: 160px;
  background-color: #fff;
  border-radius: 8px;
  list-style: none;
  padding: 6px;
  box-shadow: 0 0 4px 4px rgba(92, 103, 255, 0.15);
  position: absolute;
  right: 15px;
  bottom: 15px;
  opacity: 0;
  transform: scale(0);
  transform-origin: bottom right;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}

.menu-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #1c3991;
  cursor: pointer;
  position: relative;
  opacity: 0;
  transform: translateX(-10px);
  transition: 0.2s ease-in;
}

.menu-list li:hover {
  color: #5c67ff;
}

.menu-list li::before {
  content: "";
  width: calc(100% - 24px);
  height: 1px;
  background-color: rgba(92, 103, 255, 0.1);
  position: absolute;
  bottom: 0;
  left: 12px;
}

.menu-list li:last-child::before {
  display: none;
}

.menu-list .fa {
  font-size: 18px;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-list span {
  font-size: 14px;
  margin-left: 8px;
}

.active .line-box {
  transform: rotate(-45deg);
}

.active .line-box .line:first-child {
  transform: rotate(-90deg) translateX(1px);
}

.active .line-box .line:last-child {
  transform: rotate(-90deg) translateX(-1px);
}

.active .menu-list {
  opacity: 1;
  transform: scale(1);
}

.active .menu-list li {
  animation: fade-in-item 0.4s linear forwards;
}

.active .menu-list li:nth-child(1) {
  animation-delay: 0.1s;
}

.active .menu-list li:nth-child(2) {
  animation-delay: 0.2s;
}

.active .menu-list li:nth-child(3) {
  animation-delay: 0.3s;
}

.active .menu-list li:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes fade-in-item {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>