import { ComponentPublicInstance, VNode, createApp } from 'vue';
import ModalCpt from '@/views/live-moudle/compontents/tipModal/index.vue'; // 引入自定义的模态框组件

// 创建一个新的 Vue 应用实例，并将其挂载到一个新创建的 div 容器中
const app = createApp(ModalCpt);
const container = document.createElement('div');
const instance: ComponentPublicInstance<InstanceType<typeof ModalCpt>> = app.mount(container);

// 将模态框的容器添加到 document.body 中
document.body.appendChild(container);

// 自定义的模态框调用函数，接受配置数据并返回一个 Promise
export function useTip(data: {
  title?: string; // 可选：模态框的标题
  width?: string; // 可选：模态框的宽度
  content: string | VNode; // 必填：模态框的内容，可以是字符串或 VNode
  hiddenCancel?: boolean; // 可选：是否隐藏取消按钮
  hiddenConfirm?: boolean; // 可选：是否隐藏确认按钮
  hiddenClose?: boolean; // 可选：是否隐藏关闭按钮
  maskClosable?: boolean; // 可选：点击遮罩层是否可以关闭模态框
  confirmButtonText?: string; // 可选：确认按钮的文本
  cancelButtonText?: string; // 可选：取消按钮的文本
}) {
  // 设置模态框实例的相关属性
  instance.show = true;
  instance.title = data.title || '提示';
  instance.width = data.width || '320px';
  instance.maskClosable = !!data.maskClosable;
  instance.content = data.content;
  instance.hiddenCancel = !!data.hiddenCancel;
  instance.hiddenClose = !!data.hiddenClose;
  instance.hiddenConfirm = !!data.hiddenConfirm;
  instance.confirmButtonText = data.confirmButtonText || '确认';
  instance.cancelButtonText = data.cancelButtonText || '取消';

  // 返回一个 Promise，当用户点击确认或取消时，分别 resolve 或 reject
  return new Promise((resolve, reject) => {
    instance.handleOk = () => {
      instance.show = false; // 隐藏模态框
      resolve('ok'); // Promise 成功回调
    };
    instance.handleCancel = () => {
      instance.show = false; // 隐藏模态框
      reject('cancel'); // Promise 拒绝回调
    };
  });
}
