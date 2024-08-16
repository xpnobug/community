import {createApp} from 'vue'
import 'webrtc-adapter';
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

import IconFont from "@/components/icon/IconFont.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Antd from 'ant-design-vue';
import mitt from "mitt"
import App from './App.vue'
import route from "./router"
import {Button, message} from 'ant-design-vue';
import store from './store/store.js';
import showBool from '@/hooks/post.js';
//
import UndrawUi from 'undraw-ui'
import pinia from '@/store'
import {i18n} from '@/hooks/live/use-i18n';
import ArcoVue, { Card, Modal } from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import {
  // component
  NButton,
  NDialogProvider,
  NModal,
  NIcon,
  NSlider,
  NPopover,
  NInputGroupLabel,
  NInputNumber,
  NInputGroup,
  NSpace,
  NInput,
  NSelect,
  NCheckbox,
  NCheckboxGroup,
  NDatePicker,
  NUpload,
  NUploadDragger,
  NCard,
  NColorPicker, NDropdown,NTabs, NTabPane,
  create,
} from 'naive-ui'

const naive = create({
  components: [NButton, NDialogProvider, NModal, NIcon, NSlider, NPopover, NInputGroupLabel, NInputNumber, NInputGroup, NSpace, NInput,
    NSelect,
    NCheckbox,
    NCheckboxGroup,
    NDatePicker,
    NUpload,
    NUploadDragger,
    NCard,
    NColorPicker,NDropdown,NTabs, NTabPane]
})
const app = createApp(App)
const Mitt = mitt()
declare module 'vue' {
  export interface ComponentCustomProperties {
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
app.use(naive)
app.use(pinia)
app.use(i18n)

app.use(ArcoVueIcon);
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: 'arco'
});
app.component('IconFont', IconFont);
app.mount('#app')
