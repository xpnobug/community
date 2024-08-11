<template>
  <div class="media-wrap">
    <Modal
      :title="`${isEdit ? '编辑' : '添加'}直播素材`"
      :mask-closable="false"
      @close="emits('close')"
    >
      <div class="container">
        <div
          v-if="inputOptions.length"
          class="item"
        >
          <div class="label">设备选择</div>
          <div class="value">
            <n-select
              v-model:value="currentInput.deviceId"
              :options="inputOptions"
              :disabled="isEdit"
            />
          </div>
        </div>

        <div class="item">
          <div class="label">名称</div>
          <div class="value">
            <n-input v-model:value="mediaName" />
          </div>
        </div>
        <template v-if="props.mediaType === MediaTypeEnum.txt && txtInfo">
          <div class="item">
            <div class="label">内容</div>
            <div class="value">
              <n-input
                type="textarea"
                ref="inputInstRef"
                v-model:value="txtInfo.txt"
              />
            </div>
          </div>
          <div class="item">
            <div class="label">颜色</div>
            <div class="value">
              <n-color-picker v-model:value="txtInfo.color" />
            </div>
          </div>
        </template>
        <template v-if="props.mediaType === MediaTypeEnum.time && timeInfo">
          <div class="item">
            <div class="label">颜色</div>
            <div class="value">
              <n-color-picker v-model:value="timeInfo.color" />
            </div>
          </div>
        </template>
        <template
          v-if="props.mediaType === MediaTypeEnum.stopwatch && stopwatchInfo"
        >
          <div class="item">
            <div class="label">颜色</div>
            <div class="value">
              <n-color-picker v-model:value="stopwatchInfo.color" />
            </div>
          </div>
        </template>
        <template v-if="props.mediaType === MediaTypeEnum.img">
          <div class="item">
            <div class="label">图片</div>
            <div class="value">
              <n-upload
                :max="1"
                :accept="'image/png, image/jpeg, image/webp'"
                :on-update:file-list="changImg"
              >
                <n-button :disabled="isEdit">选择文件</n-button>
              </n-upload>
            </div>
          </div>
        </template>
        <template v-if="props.mediaType === MediaTypeEnum.media">
          <div class="item">
            <div class="label">视频</div>
            <div class="value">
              <n-upload
                :max="1"
                :accept="'video/mp4, video/quicktime'"
                :on-update:file-list="changMedia"
              >
                <n-button :disabled="isEdit">选择文件</n-button>
              </n-upload>
            </div>
          </div>
        </template>
      </div>

      <template #footer>
        <div class="margin-right">
          <n-button
            type="primary"
            @click="handleOk"
          >
            确定
          </n-button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { InputInst, UploadFileInfo } from 'naive-ui'; // 引入 Naive UI 中的输入实例和上传文件信息类型
import { onMounted, ref } from 'vue'; // 引入 Vue 的生命周期钩子和 ref 函数

import { MediaTypeEnum } from '@/api/live/interface'; // 引入媒体类型枚举
import { AppRootState, useAppStore } from '@/store/app'; // 引入应用状态和状态管理方法
import Modal from "@/views/live-moudle/compontents/Modal/index.vue"; // 引入自定义 Modal 组件
import { message } from "ant-design-vue"; // 引入 Ant Design Vue 的消息提示

// 定义组件的 props 和 emits
const props = withDefaults(
    defineProps<{
      mediaType?: MediaTypeEnum; // 媒体类型
      isEdit: boolean; // 是否编辑模式
      initData?: AppRootState['allTrack'][0]; // 初始数据
    }>(),
    {
      mediaType: MediaTypeEnum.camera, // 默认媒体类型为摄像头
      isEdit: false, // 默认不处于编辑模式
      initData: undefined, // 默认没有初始数据
    }
);

const emits = defineEmits(['close', 'addOk', 'editOk']); // 定义事件

// 定义各类 ref 变量
const inputInstRef = ref<InputInst | null>(null); // 输入实例
const mediaName = ref(''); // 媒体名称
const appStore = useAppStore(); // 应用状态管理实例

const inputOptions = ref<{ label: string; value: string }[]>([]); // 输入选项
const txtInfo = ref<{ txt: string; color: string }>(); // 文本信息
const timeInfo = ref<{ color: string }>(); // 时间信息
const stopwatchInfo = ref<{ color: string }>(); // 秒表信息
const imgInfo = ref<UploadFileInfo[]>(); // 图片信息
const mediaInfo = ref<UploadFileInfo[]>(); // 媒体信息
const currentInput = ref<{
  type: MediaTypeEnum;
  deviceId: string;
}>({
  type: MediaTypeEnum.camera, // 默认类型为摄像头
  deviceId: '', // 默认设备 ID 为空
});

// 组件挂载时初始化
onMounted(() => {
  init();
});

// 更新图片信息
function changImg(list: UploadFileInfo[]) {
  imgInfo.value = list;
}

// 更新媒体信息
function changMedia(list: UploadFileInfo[]) {
  mediaInfo.value = list;
}

// 处理确认操作
function handleOk() {
  // 校验名称长度
  if (mediaName.value.length < 4 || mediaName.value.length > 10) {
    message.info('名称要求4-10个字符！');
    return;
  }
  // 文本类型时校验内容长度
  if (props.mediaType === MediaTypeEnum.txt) {
    if (txtInfo.value?.txt?.length! < 3 || txtInfo.value?.txt?.length! > 100) {
      message.info('内容要求3-100个字符！');
      return;
    }
  }
  // 非编辑模式下的校验
  if (!props.isEdit) {
    if (props.mediaType === MediaTypeEnum.img) {
      if (imgInfo.value?.length! !== 1) {
        message.info('请选择图片！');
        return;
      }
    }
    if (props.mediaType === MediaTypeEnum.media) {
      if (mediaInfo.value?.length! !== 1) {
        message.info('请选择视频！');
        return;
      }
    }
  }
  // 根据是否编辑模式触发相应的事件
  if (props.isEdit) {
    emits('editOk', {
      ...props.initData,
      ...currentInput.value,
      mediaName: mediaName.value,
      txtInfo: txtInfo.value,
      imgInfo: imgInfo.value,
      mediaInfo: mediaInfo.value,
      timeInfo: timeInfo.value,
      stopwatchInfo: stopwatchInfo.value,
    });
  } else {
    emits('addOk', {
      ...currentInput.value,
      mediaName: mediaName.value,
      txtInfo: txtInfo.value,
      imgInfo: imgInfo.value,
      mediaInfo: mediaInfo.value,
      timeInfo: timeInfo.value,
      stopwatchInfo: stopwatchInfo.value,
    });
  }
}

// 初始化方法
async function init() {
  const res = await navigator.mediaDevices.enumerateDevices(); // 获取媒体设备列表
  if (props.mediaType === MediaTypeEnum.microphone) { // 处理麦克风类型
    res.forEach((item) => {
      if (item.kind === 'audioinput' && item.deviceId !== 'default') {
        inputOptions.value.push({
          label: item.label,
          value: item.deviceId,
        });
      }
    });
    currentInput.value = {
      ...currentInput.value,
      deviceId: inputOptions.value[0].value,
      type: MediaTypeEnum.microphone,
    };
    mediaName.value = `麦克风-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.microphone)
        .filter((item) => !item.hidden).length + 1
    }`;
  } else if (props.mediaType === MediaTypeEnum.camera) { // 处理摄像头类型
    res.forEach((item) => {
      if (item.kind === 'videoinput' && item.deviceId !== 'default') {
        inputOptions.value.push({
          label: item.label,
          value: item.deviceId,
        });
      }
    });
    currentInput.value = {
      ...currentInput.value,
      deviceId: inputOptions.value[0].value,
      type: MediaTypeEnum.camera,
    };
    mediaName.value = `摄像头-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.camera)
        .filter((item) => !item.hidden).length + 1
    }`;
  } else if (props.mediaType === MediaTypeEnum.screen) { // 处理屏幕共享类型
    currentInput.value = {
      ...currentInput.value,
      type: MediaTypeEnum.screen,
    };
    mediaName.value = `窗口-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.screen)
        .filter((item) => !item.hidden).length + 1
    }`;
  } else if (props.mediaType === MediaTypeEnum.txt) { // 处理文本类型
    currentInput.value = {
      ...currentInput.value,
      type: MediaTypeEnum.txt,
    };
    txtInfo.value = { txt: '', color: 'rgba(255,215,0,1)' };
    mediaName.value = `文字-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.txt)
        .filter((item) => !item.hidden).length + 1
    }`;
    setTimeout(() => {
      inputInstRef.value?.focus();
    }, 100);
  } else if (props.mediaType === MediaTypeEnum.time) { // 处理时间类型
    currentInput.value = {
      ...currentInput.value,
      type: MediaTypeEnum.time,
    };
    timeInfo.value = { color: 'rgba(255,215,0,1)' };
    mediaName.value = `时间-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.time)
        .filter((item) => !item.hidden).length + 1
    }`;
  } else if (props.mediaType === MediaTypeEnum.stopwatch) { // 处理秒表类型
    currentInput.value = {
      ...currentInput.value,
      type: MediaTypeEnum.stopwatch,
    };
    stopwatchInfo.value = { color: 'rgba(255,215,0,1)' };
    mediaName.value = `秒表-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.stopwatch)
        .filter((item) => !item.hidden).length + 1
    }`;
  } else if (props.mediaType === MediaTypeEnum.img) { // 处理图片类型
    currentInput.value = {
      ...currentInput.value,
      type: MediaTypeEnum.img,
    };
    imgInfo.value = [];
    mediaName.value = `图片-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.img)
        .filter((item) => !item.hidden).length + 1
    }`;
  } else if (props.mediaType === MediaTypeEnum.media) { // 处理媒体类型
    currentInput.value = {
      ...currentInput.value,
      type: MediaTypeEnum.media,
    };
    mediaInfo.value = [];
    mediaName.value = `视频-${
        appStore.allTrack
        .filter((item) => item.type === MediaTypeEnum.media)
        .filter((item) => !item.hidden).length + 1
    }`;
  }
  if (props.initData) { // 如果存在初始数据
    if (
        [MediaTypeEnum.camera, MediaTypeEnum.microphone].includes(
            props.initData.type
        )
    ) {
      currentInput.value = {
        deviceId: props.initData.deviceId!,
        type: props.initData.type,
      };
    }
    mediaName.value = props.initData.mediaName;
    timeInfo.value = props.initData.timeInfo;
    txtInfo.value = props.initData.txtInfo;
    stopwatchInfo.value = props.initData.stopwatchInfo;
  }
}
</script>

<style lang="scss" scoped>
.media-wrap {
  text-align: initial;

  .container {
    .item {
      .label {
        margin: 6px 0;
      }
    }
    .margin-right {
      text-align: right;
    }
  }
}
</style>
