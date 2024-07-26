<template>
  <div class="menu-main">
    <div class="menu-list">
      <nav style="flex-grow: 1;">
        <ul class="menu-ul">
          <!--      logo-->
          <div class="logo">
            <img src="https://alist.reaicc.com/nas/image/png/2024-05/1/b0e02980-01dd-4700-b2aa-b16b4d8491a3.png" alt="">
          </div>
          <li @click="updateMenuDJ">
<!--            <el-icon>-->
<!--              <icon-menu/>-->
<!--            </el-icon>-->
          </li>
          <li v-for="item in menuItems" :index="item.id" :key="item.id"  @click="handleMenuItemClick(item)" v-show="pmView" ><a href="#">{{ item.label }}</a></li>
        </ul>
      </nav>
    </div>
    <div class="btn-list">
      <div class="right-btn">
        <!--        <el-button type="primary">搜索框</el-button>-->
        <SearchComponents/>
        <el-button v-if="sfLogin === false" style="margin-right:10px;" type="primary" @click="login">登录</el-button>
        <div v-else style="display: flex; ">
          <a-popover
              v-model:open="postpush"
              :getPopupContainer="(triggerNode) => triggerNode.parentNode" trigger="click">
            <a-badge style="margin-right:10px;">
              <a-avatar shape="square" size="large" style="font-size: 12px">
                发布
              </a-avatar>
            </a-badge>
            <template #content>
              <EditArticle/>
            </template>
          </a-popover>


          <a-popover v-model:open="visible" :getPopupContainer="(triggerNode) => triggerNode.parentNode"
                     trigger="click">
            <a-badge style="margin-right:10px;">
              <a-avatar shape="square" size="large" style="font-size: 12px">
                设置
              </a-avatar>
            </a-badge>
            <template #content>
              <UserCaozuo :user="userInfo"/>
            </template>
          </a-popover>


          <a-popover v-model:open="message"
                     :getPopupContainer="(triggerNode) => triggerNode.parentNode" trigger="click">
            <a-badge :dot="show" style="margin-right:10px;">
              <a-avatar shape="square" size="large">
                <icon-font class="icon svg" type="icon-xiaoxi"/>
              </a-avatar>
            </a-badge>
            <template #content>
              <MessageIndex @readall-success="getMessageCount"/>
            </template>
          </a-popover>
        </div>
        <BgColorChange02/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onBeforeUnmount, onMounted, reactive, ref, watchEffect} from 'vue'
import {useRouter} from "vue-router";
import {isLogin} from "@/api/user";
import UserCaozuo from "@/components/Setting/UserCaozuo.vue";
import {useUserInfo} from "@/hooks/useCached";
import EditArticle from "@/components/Setting/EditArticle.vue";
import BgColorChange02 from "@/components/bgColor/BgColorChange02.vue";
import SearchComponents from "@/components/search/searchComponents.vue";
import MessageIndex from "@/views/message/messageIndex.vue";
import {getToken} from "@/utils/auth";
import {getUnreadMessageCount} from "@/api";
import {createFromIconfontCN} from "@ant-design/icons-vue";
// SVG 图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_6kwgvtuqt0b.js',
});
const postpush = ref<boolean>(false);
const message = ref<boolean>(false);
const visible = ref<boolean>(false);
const show = ref<boolean>(false);
//导航菜单动态加载
const menuItems = ref([
  {id: "1", label: '首页', url: '/index', expanded: false},
  {id: "2", label: '社区', url: '/dynamic', expanded: false},
  {id: "3", label: '版块', url: '/pages/aboutus', expanded: false},
  // { id: "5", label: '频道', url: '/pages/aboutus', expanded: false },
]);
const router = useRouter();
const handleMenuItemClick = (item:any) => {
  const routeName = item.label; // 使用菜单项的name属性作为路由名称
  router.push({ path: item.url })
  console.log(routeName, item.url)
};
// 定义一个响应式的数据
const djValue = ref(false);
const pmView = ref(false);
const instance = getCurrentInstance()

//获取token
const sfLogin = ref(false);
isLogin().then(async res => {
  sfLogin.value = res.data.data;
  const emit = async () => {
    instance?.proxy?.$Bus.emit("isLogins", res.data.data)
  }
  await emit();
});

//获取登录人信息
const userInfo = useUserInfo();


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

const login = () => {
  //跳转页面
  router.push({path: '/login'})
}

let socket: WebSocket
onBeforeUnmount(() => {
  if (socket) {
    socket.close()
  }
})

const unreadMessageCount = ref(0)
// 初始化 WebSocket
const initWebSocket = (token: string) => {
  socket = new WebSocket(`wss://api.reaicc.com/websocket?token=${token}`)
  socket.onopen = () => {
    console.log('WebSocket connection opened')
  }

  socket.onmessage = (event) => {
    unreadMessageCount.value = Number.parseInt(event.data)
  }

  socket.onerror = () => {
    // console.error('WebSocket error:', error)
  }

  socket.onclose = () => {
    // console.log('WebSocket connection closed')
  }
}

// 查询未读消息数量
const getMessageCount = async () => {
  const {data} = await getUnreadMessageCount()
  unreadMessageCount.value = data.data.total
  if (data.data.total > 0) {
    show.value = true;
  }else {
    show.value = false;
  }
  const token = getToken()
  if (token) {
    initWebSocket(token)
  }
}

//页面渲染前
onMounted(() => {
      getMessageCount()
      updatePMView() // 初始化
      // 增加window监听
      window.addEventListener('resize', () => {
        screenWidth.screenWidth = window?.innerWidth
      })
    }
)
</script>

<style scoped>
.u-search{
  width: 100%;
  margin-right: 10px;
}
::v-deep(.u-search .search){
  background: none;
  border: none;
}
::v-deep(.card-box){
  margin-top: 10px;
  background-color: var(--reaicc-meta-theme-post-color);
}

.menu-main {
position: fixed;
/*overflow: hidden;*/
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
  background-color: var(--reaicc-nav-bg);
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
  width: 100px;
}
/*设置手机端样式*/
@media screen and (orientation: portrait) {
  .logo>img{
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
