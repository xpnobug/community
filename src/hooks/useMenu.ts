import {computed} from "vue";

// 假设 isAdmin 是一个布尔值，用于标识当前用户是否为管理员
// 判断是否为管理员，假设 userId 为 -1 时为管理员
const isAdmin = computed(() => localStorage.getItem("userId") === "001");
export const menuItems = computed(() => {
  const items = [
    {id: "1", label: '首页', url: '/index', icon: 'icon-shouyexian', expanded: false},
    {id: "2", label: '社区', url: '/dynamic', icon: 'icon-shequ', expanded: false},
    {
      id: "3",
      label: '用户版块',
      url: '/members',
      icon: 'icon-yonghuguanli',
      expanded: false
    },
    {
      id: "4",
      label: '朋友圈',
      url: '/friends',
      icon: 'icon-a-pengyouquan1',
      expanded: false
    },
    {id: "5", label: '频道', url: '/channels', icon: 'icon-pindao', expanded: false},
    {id: "6", label: 'chat', url: '/chat', icon: 'icon-IMliaotian-duihua', expanded: false},
    {id: "7", label: '直播', url: '/live', icon: 'icon-zhibo', expanded: false},
  ];

  // 只有管理员可以看到 general 菜单项
  if (isAdmin.value) {
    items.push({
      id: "8",
      label: 'general',
      url: '/tool/generator',
      icon: 'iconfont icon-liebiao',
      expanded: false
    });
  }

  return items;
});
