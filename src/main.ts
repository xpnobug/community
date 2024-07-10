import { createApp } from 'vue'
import './style.css'
// 引入全局 CSS 文件
import '@/assets/pink/css/banner.css';
// import '@/assets/pink/css/bar.css';
// import '@/assets/pink/css/bar.dialog.css';
import '@/assets/pink/css/comment.form.css';
import '@/assets/pink/css/misc.css';
import '@/assets/pink/css/navigation.css';
import '@/assets/pink/css/player.css';
import '@/assets/pink/css/post.content.css';
import '@/assets/pink/css/posts.css';
import '@/assets/pink/css/root.css';
import '@/assets/pink/css/sticker.css';
import '@/assets/pink/css/viewer.css';


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue';
import mitt from "mitt"
import App from './App.vue'
import route from "./router"
import { Button, message } from 'ant-design-vue';
import store from './store/store.js';
import showBool from '@/hooks/post.js';
//
import UndrawUi from 'undraw-ui'

const app = createApp(App)
const Mitt = mitt()
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus: typeof Mitt
    }
}

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.config.globalProperties.$message = message;
app.config.globalProperties.$Bus = Mitt

// 使用路由
app.use(route);
app.provide('store', store);
app.provide('showBool', showBool);
app.use(ElementPlus);
app.use(Antd);
app.use(UndrawUi)
app.mount('#app')
