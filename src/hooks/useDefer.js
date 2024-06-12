// 从vue库中导入onUnmounted函数，它用于在Vue组件卸载时执行一些清理操作
import { onUnmounted,ref } from "vue";

// 导出一个名为useDefer的自定义钩子函数，它接受一个可选参数maxCount，默认值为100
export function useDefer(maxCount = 100) {
  // 创建一个响应式的引用（ref）变量count，初始值为0
  const count = ref(0);

  // 声明一个变量reqId来存储requestAnimationFrame的ID
  let reqId = null;

  // 定义一个函数updateFrame，用于更新count的值，并在count未达到maxCount时继续请求新的动画帧
  function updateFrame() {
    count.value++; // 增加count的值
    if (count.value >= maxCount) {
      return; // 如果count达到或超过maxCount，则停止请求新的动画帧
    }
    // 否则，使用requestAnimationFrame来异步调用updateFrame函数，并将返回的ID存储在reqId中
    reqId = requestAnimationFrame(updateFrame);
  }

  // 初始调用updateFrame函数，开始动画帧请求循环
  updateFrame();

  // 在Vue组件卸载时，取消动画帧请求，以避免内存泄漏
  onUnmounted(() => {
    cancelAnimationFrame(reqId);
  })

  // 返回一个函数，该函数接受一个参数n，并返回一个布尔值，表示count是否已达到或超过n
  return function (n) {
    // console.log('count:', n)
    return count.value >= n;
  }
}