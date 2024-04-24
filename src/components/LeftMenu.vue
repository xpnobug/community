<template>
  <div class="left-menu-style">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="djValueSet"
        @open="handleOpen"
        @close="handleClose"
        :mode="menuPmView === false ? 'horizontal' : 'vertical'"
    >

      <el-card style="max-width: 480px" v-if="isLogin === true">
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      </el-card>
      <el-card shadow="never" style="max-height: 480px; border: none; background: none" v-else></el-card>

      <el-menu-item v-for="item in menuItems" :index="item.id" :key="item.id"  @click="handleMenuItemClick(item)">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>{{ item.label }}</template>
      </el-menu-item>
    </el-menu>
    <div class="right-content-style">
      <RouterView/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue'
import { Menu as IconMenu} from '@element-plus/icons-vue'
import {RouterView, useRouter} from 'vue-router';
//定义变量
const isLogin = ref(false);
const menuPmView = ref();
const djValueSet = ref();
const instance = getCurrentInstance()
const router = useRouter();
//导航菜单动态加载
const menuItems = ref([
  { id: "1", label: '首页', url: 'new_index', expanded: false },
  { id: "2", label: 'Shop', url: '/collections', expanded: false},
  { id: "3", label: 'Media & Event', url: '/pages/aboutus', expanded: false },
  { id: "4", label: 'Museum', url: '/pages/aboutus', expanded: false },
  { id: "5", label: 'Be Our Member', url: '/pages/aboutus', expanded: false },

  // Add more menu items as needed
]);
//点击按钮监听事件
instance?.proxy?.$Bus.on("djValue", (param) => {
  djValueSet.value = param;
})
//屏幕大小钮监听事件 true :pc false:mobile
instance?.proxy?.$Bus.on("pmView", (param) => {
  menuPmView.value = param;
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleMenuItemClick = (item:any) => {
  const routeName = item.label; // 使用菜单项的name属性作为路由名称
  router.push({ path: item.url })
  console.log(routeName, item.url)
};

</script>

<style>
:root {
  --menu-bg-color: #337fff;
}

.left-menu-style {
  display: flex;
  width: 100%;
  height: 100%;
}
.right-content-style{
  width: 100%;
  /*height: 100%;*/
  background-color:#f8f8f8 ;
  display: flex;
  justify-content: center;
}
.el-menu-vertical-demo {
  position: fixed;
  height: 100%;
  border: none;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(94, 92, 154, 0.06);
  /*transition-delay: .25s;*/
  padding-top: 50px;
  overflow-y: visible;
}

.el-menu-vertical-demo .el-menu-item {
  color: #1a1a1a;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .left-menu-style {
    display: block;
  }
  .el-menu-item .el-menu-tooltip__trigger {
    top: 5px;
    left: -11px;
  }

  .el-menu-vertical-demo {
    height: 12% !important;
    width: 100% !important;
    z-index: 1;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 0;
    height: 0;
  }
  .right-content-style{
    display: block;
    /*width: 83%;*/
  }
}

</style>
