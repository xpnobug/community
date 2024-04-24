import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
// import './styles/dark/css-vars.css'
import mitt from "mitt"
import App from './App.vue'
import router from './router';

const app = createApp(App)
const Mitt = mitt()
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus: typeof Mitt
    }
}
app.config.globalProperties.$Bus = Mitt
// 使用路由
app.use(router);
app.use(ElementPlus)
app.mount('#app')
