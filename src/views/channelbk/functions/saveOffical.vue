<template>
  <div>
    <!-- 按钮：显示模态框 -->
    <a-button type="primary" @click="showModal">创建官方版块</a-button>

    <!-- 模态框 -->
    <a-modal ref="modalRef"
             v-model:open="open"
             :wrap-style="{ overflow: 'hidden' }"
             @ok="handleOk"
             :maskClosable="false"
             :keyboard="false"
    >
      <!-- 表单组件 -->
      <ChannelForm
          @submit-method="setSubmitMethod"
          @reset-method="setResetMethod"
          @submit="handleSubmit"
          @reset="handleReset"
      />
      <!-- 模态框标题 -->
      <template #title>
        <div ref="modalTitleRef" style="width: 100%; cursor: move">创建官方版块</div>
      </template>
      <!-- 模态框自定义渲染 -->
      <template #modalRender="{ originVNode }">
        <div :style="transformStyle">
          <component :is="originVNode" />
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, CSSProperties, watch, watchEffect } from 'vue';
import { useDraggable } from '@vueuse/core';
import ChannelForm from "@/views/channelbk/functions/channelForm.vue";
import {message} from "ant-design-vue";
import {addChannel} from "@/api/channels";

const props = defineProps<{
  getOfficaData: () => Promise<void>;
}>();

const open = ref<boolean>(false); // 控制模态框是否显示
const modalTitleRef = ref<HTMLElement>(null); // 模态框标题元素引用

// 显示模态框函数
const showModal = () => {
  open.value = true;
};

// 使用拖拽功能
const { x, y, isDragging } = useDraggable(modalTitleRef);

// 拖拽相关状态
const startX = ref<number>(0);
const startY = ref<number>(0);
const startedDrag = ref(false);
const transformX = ref(0);
const transformY = ref(0);
const preTransformX = ref(0);
const preTransformY = ref(0);
const dragRect = ref({ left: 0, right: 0, top: 0, bottom: 0 });

// 监听拖拽位置变化
watch([x, y], () => {
  if (!startedDrag.value) {
    startX.value = x.value;
    startY.value = y.value;
    const bodyRect = document.body.getBoundingClientRect();
    const titleRect = modalTitleRef.value.getBoundingClientRect();
    dragRect.value.right = bodyRect.width - titleRect.width;
    dragRect.value.bottom = bodyRect.height - titleRect.height;
    preTransformX.value = transformX.value;
    preTransformY.value = transformY.value;
  }
  startedDrag.value = true;
});

// 监听拖拽结束
watch(isDragging, () => {
  if (!isDragging.value) {
    startedDrag.value = false;
  }
});

// 计算拖拽偏移
watchEffect(() => {
  if (startedDrag.value) {
    transformX.value =
        preTransformX.value +
        Math.min(Math.max(dragRect.value.left, x.value), dragRect.value.right) -
        startX.value;
    transformY.value =
        preTransformY.value +
        Math.min(Math.max(dragRect.value.top, y.value), dragRect.value.bottom) -
        startY.value;
  }
});

// 拖拽样式
const transformStyle = computed<CSSProperties>(() => {
  return {
    transform: `translate(${transformX.value}px, ${transformY.value}px)`,
  };
});



// 提交和重置方法的引用
const submitMethod = ref<() => void>();
const resetMethod = ref<() => void>();

// 设置提交方法
const setSubmitMethod = (method: () => void) => {
  submitMethod.value = method;
};

// 设置重置方法
const setResetMethod = (method: () => void) => {
  resetMethod.value = method;
};

// 触发重置
const triggerReset = () => {
  resetMethod.value && resetMethod.value();
};
// 处理重置事件
const handleReset = () => {
  console.log('Parent received reset');
};


// 处理模态框确认
const handleOk = () => {
  submitMethod.value && submitMethod.value()
};
// 处理提交事件
const handleSubmit = (formState: any, rawFormState: any) => {
  formState.creator = localStorage.getItem("userId");
  formState.isOfficial = 1
  addChannel(formState).then(async res => {
    if (res.status == 200) {
      message.success("保存成功");
      await props.getOfficaData();
    }
  })
  open.value = false;
};

</script>
