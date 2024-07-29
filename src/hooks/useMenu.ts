import {ref} from "vue";

export const menuItems = ref([
    {id: "1", label: '首页', url: '/index',icon:'iconfont icon-liebiao', expanded: false},
    {id: "2", label: '社区', url: '/dynamic',icon:'iconfont icon-cangku', expanded: false},
    {id: "3", label: '用户版块', url: '/members',icon:'iconfont icon-zhuti_tiaosepan', expanded: false},
    {id: "4", label: '朋友圈', url: '/friends',icon:'iconfont icon-a-pengyouquan1', expanded: false},
    {id: "5", label: '频道', url: '/channels',icon:'iconfont icon-liebiao', expanded: false},
    {id: "6", label: 'chat', url: '/chat',icon:'iconfont icon-liebiao', expanded: false},
]);