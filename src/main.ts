import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
// import './styles/dark/css-vars.css'
import mitt from "mitt"
import App from './App.vue'
import route from "./router"
import { Button, message } from 'ant-design-vue';

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
app.use(ElementPlus);
app.use(Antd);
app.mount('#app')
