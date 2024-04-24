<template>
  <div class="menu-main">
    <div class="menu-list">
      <nav style="flex-grow: 1;">
        <ul class="menu-ul">
          <!--      logo-->
          <div class="logo">
            <img src="https://q1.qlogo.cn/g?b=qq&nk=2877406366&s=640" alt="">
          </div>
          <li @click="updateMenuDJ">
            <el-icon>
              <icon-menu/>
            </el-icon>
          </li>
          <li v-show="pmView"><a href="#">首页</a></li>
          <li v-show="pmView"><a href="#">产品</a></li>
          <li v-show="pmView"><a href="#">社区</a></li>
          <li v-show="pmView"><a href="#">版块</a></li>
        </ul>
      </nav>
    </div>
    <div class="btn-list">
      <div class="right-btn">
        <!--        <el-button type="primary">搜索框</el-button>-->
        <div class="search-btn">
          <input data-v-4d901bbe="" id="search-main" type="text" autocomplete="off" name="search_main"
                 placeholder="搜索用户或内容" style="padding-right: 60px;">
        </div>
        <el-button type="primary">登录</el-button>
        <div style="margin: 5px"><BgColorChange/></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted, reactive, ref, watchEffect} from 'vue'
import {Menu as IconMenu,} from '@element-plus/icons-vue'
import BgColorChange from "@/components/BgColorChange.vue";

// 定义一个响应式的数据
const djValue = ref(false);
const pmView = ref(false);
const instance = getCurrentInstance()

//监听如果屏幕小于max-width: 768px，设置pmView
//获取屏幕大小
// 使用响应式
const screenWidth = reactive({
  screenWidth: window?.innerWidth,
})
//监听屏幕大小
const updatePMView = () => {
  pmView.value = window?.innerWidth > 768;
  console.log(window?.innerWidth)
  const emit = () => {
    instance?.proxy?.$Bus.emit("pmView", pmView.value)
  }
  emit();
}
//页面渲染前
onMounted(() => {
      updatePMView() // 初始化
      // 增加window监听
      window.addEventListener('resize', () => {
        screenWidth.screenWidth = window?.innerWidth
      })
    }
)
watchEffect(() => {
  if (screenWidth.screenWidth >= 768) {
    if (pmView.value)
      return
    pmView.value = true
    // updatePMView()
  }else {
    if (!pmView.value)
      return
    pmView.value = false
    updatePMView()
  }
})

//第一次点击为true，第二次点击为false
const updateMenuDJ = () => {
  // 更新数据
  djValue.value = !djValue.value;
  const emit = () => {
    instance?.proxy?.$Bus.emit("djValue", djValue.value)
  }
  emit();
  console.log(djValue.value);
}

</script>

<style scoped>
.menu-main {
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 10;
}

.menu-main {
  display: flex;
  height: 54px;
  /*background-color: #337fff;*/
  background-color: var(--reaicc-nav-bg);
  justify-content: space-around;
  align-items: center;
  /*padding: 0 40px;*/
}

.menu-ul {
  display: flex;
  position: relative;
  /*width: 100vh;*/
  margin-right: 0;
  list-style: none;
  /*justify-content: space-between;*/
  align-items: center;
}

.menu-ul li {
  padding: 0 30px;
}

.menu-ul li a {
  color: white;
  font-size: 14px;
  text-decoration: none;
}

.right-btn {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: end;
}

.search-btn {
  width: 100%;
  height: 35px;
  position: relative;
}

.search-btn input {
  position: relative;
  outline: none;
  height: 100%;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  background-color: #0051d4;
}

input[type="text"], input[type="password"] {
  height: 35px;
  padding: 0 18px;
  color: #fff;
}

::-webkit-input-placeholder { /* WebKit browsers */
  color: #99b9ee;
}
.logo>img{
  width: 30px;
}
/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .logo{
    width: 30px;
  }
  .menu-main {
    display: flex;
    height: 54px;
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*padding: 0 20px;*/
  }

  .menu-ul {
    display: flex;
    position: relative;
    width: 0;
    margin-right: 0;
    list-style: none;
  }
}

</style>
