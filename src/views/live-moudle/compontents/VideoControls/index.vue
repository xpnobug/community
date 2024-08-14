<template>
  <div class="video-controls-wrap">
    <div class="left">
      <div
        class="play"
        @click="appStore.playing = !appStore.playing"
      >
        <n-icon size="25">
          <Pause v-if="appStore.playing"></Pause>
          <Play v-else></Play>
        </n-icon>
      </div>
      <div
        class="refresh"
        @click="debounceRefresh"
      >
        <n-icon size="25">
          <RefreshSharp></RefreshSharp>
        </n-icon>
      </div>
      <div
        class="muted"
        @click="cacheStore.setMuted(!cacheStore.muted)"
      >
        <n-popover
          placement="top"
          trigger="hover"
          :flip="false"
          :style="{ padding: '4px 4px 24px 4px' }"
          :show-arrow="false"
        >
          <template #trigger>
            <n-icon size="25">
              <VolumeMuteOutline v-if="cacheStore.muted"></VolumeMuteOutline>
              <VolumeHighOutline v-else></VolumeHighOutline>
            </n-icon>
          </template>
          <div class="slider">
            <div class="txt">{{ cacheStore.volume }}</div>
            <n-slider
              :value="cacheStore.volume"
              :step="1"
              vertical
              :tooltip="false"
              @update-value="(v) => cacheStore.setVolume(v)"
            />
          </div>
        </n-popover>
      </div>
    </div>

    <div class="right">
      <div
        class="item fps"
        v-if="props.control?.fps && appStore.videoControlsValue.fps"
      >
        {{ appStore.videoControlsValue.fps }}帧
      </div>
      <div
        class="item kbs"
        v-if="props.control?.kbs && appStore.videoControlsValue.kbs"
      >
        {{ appStore.videoControlsValue.kbs }}KB/s
      </div>
      <div
        class="item resolution"
        v-if="props.control?.resolution && resolution"
      >
        {{ resolution }}
      </div>
      <div
        class="item line"
        v-if="props.control?.line"
      >
        <Dropdown
          :positon="'center'"
          :is-top="true"
        >
          <template #btn>
            <div class="btn">线路</div>
          </template>
          <template #list>
            <div class="list">
              <div
                class="iten"
                :class="{ active: appStore.liveLine === item }"
                v-for="item in LiveLineEnum"
                :key="item"
                @click="changeLiveLine(item)"
              >
                {{ item }}
              </div>
            </div>
          </template>
        </Dropdown>
      </div>
      <div
        class="item speed"
        v-if="props.control?.speed"
      >
        <Dropdown
          :positon="'center'"
          :is-top="true"
        >
          <template #btn>
            <div class="btn">倍速</div>
          </template>
          <template #list>
            <div
              class="list"
              @click="handleTip"
            >
              <div class="iten">2.0x</div>
              <div class="iten">1.5x</div>
              <div class="iten active">1.0x</div>
              <div class="iten">0.5x</div>
            </div>
          </template>
        </Dropdown>
      </div>
      <div
        class="item render"
        v-if="props.control?.renderMode"
      >
        <Dropdown
          :positon="'center'"
          :is-top="true"
        >
          <template #btn>
            <div class="btn">渲染模式</div>
          </template>
          <template #list>
            <div class="list">
              <div
                class="iten"
                :class="{ active: appStore.videoControls?.renderMode === item }"
                v-for="item in LiveRenderEnum"
                :key="item"
                @click="appStore.videoControls.renderMode = item"
              >
                {{ item }}
              </div>
            </div>
          </template>
        </Dropdown>
      </div>
      <div
        class="item"
        v-if="props.control?.pipMode"
      >
        <span
          class="txt"
          @click="handlePip"
        >
          {{
            !appStore.videoControlsValue.pipMode ? '开启画中画' : '退出画中画'
          }}
        </span>
      </div>
      <div
        class="item"
        v-if="props.control?.pageFullMode"
      >
        <span
          class="txt"
          @click="handlePageFull"
        >
          {{
            !appStore.videoControlsValue.pageFullMode
              ? '开启网页全屏'
              : '退出网页全屏'
          }}
        </span>
      </div>
      <div
        class="item"
        v-if="props.control?.fullMode"
      >
        <span
          class="txt"
          @click="emits('fullScreen')"
        >
          全屏
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Pause, // 引入暂停图标
  Play, // 引入播放图标
  RefreshSharp, // 引入刷新图标
  VolumeHighOutline, // 引入高音量图标
  VolumeMuteOutline, // 引入静音图标
} from '@vicons/ionicons5';
import { debounce, isSafari } from 'billd-utils'; // 引入防抖和判断 Safari 浏览器的方法
import { onMounted, onUnmounted } from 'vue'; // 引入生命周期方法
import Dropdown from "@/views/live-moudle/compontents/Dropdown/index.vue"; // 引入下拉菜单组件

import { handleTip } from '@/hooks/live/use-common'; // 引入通用方法
import { LiveLineEnum, LiveRenderEnum } from '@/api/live/interface'; // 引入直播接口中的枚举
import { AppRootState, useAppStore } from '@/store/app'; // 引入应用状态管理
import { usePiniaCacheStore } from '@/store/cache'; // 引入缓存状态管理
import { LiveRoomTypeEnum } from '@/api/live/types/ILiveRoom'; // 引入直播房间类型枚举
import { message } from "ant-design-vue"; // 引入消息提示

// 定义组件的 props 和 emits
const props = withDefaults(
    defineProps<{
      resolution?: string; // 分辨率
      control?: AppRootState['videoControls']; // 视频控制
    }>(),
    {}
);

const emits = defineEmits([
  'refresh', // 刷新事件
  'fullScreen', // 全屏事件
  'pageFullScreen', // 网页全屏事件
  'pictureInPicture', // 画中画事件
]);

const cacheStore = usePiniaCacheStore(); // 缓存状态管理实例
const appStore = useAppStore(); // 应用状态管理实例

// 防抖处理的刷新方法
const debounceRefresh = debounce(() => {
  emits('refresh');
}, 500);

// 组件挂载时添加键盘事件监听
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

// 组件卸载时移除键盘事件监听
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

// 处理键盘事件
function handleKeydown(e) {
  if (e.key === 'Escape') { // 按下 Esc 键时
    if (appStore.videoControlsValue.pageFullMode) { // 如果处于网页全屏模式
      message.info('已退出网页全屏'); // 显示消息提示
      appStore.videoControlsValue.pageFullMode = false; // 退出网页全屏模式
    }
  }
}

// 处理画中画模式
function handlePip() {
  if (
      isSafari() && // 如果是 Safari 浏览器
      appStore.videoControls.renderMode === LiveRenderEnum.canvas // 且渲染模式为 canvas
  ) {
    message.info('请先切换渲染模式为video'); // 显示消息提示
    return;
  }
  emits('pictureInPicture'); // 触发画中画事件
  appStore.videoControlsValue.pipMode = !appStore.videoControlsValue.pipMode; // 切换画中画模式状态
}

// 处理网页全屏模式
function handlePageFull() {
  emits('pageFullScreen'); // 触发网页全屏事件
  if (!appStore.videoControlsValue.pageFullMode) { // 如果当前不处于网页全屏模式
    message.info('按esc可快速退出网页全屏'); // 显示消息提示
  }
  appStore.videoControlsValue.pageFullMode =
      !appStore.videoControlsValue.pageFullMode; // 切换网页全屏模式状态
}

// 切换直播线路
function changeLiveLine(item: LiveLineEnum) {
  if (
      [
        LiveRoomTypeEnum.wertc_live, // webrtc 直播
        LiveRoomTypeEnum.wertc_meeting_one, // webrtc 会议类型一
        LiveRoomTypeEnum.wertc_meeting_two, // webrtc 会议类型二
      ].includes(appStore.liveRoomInfo?.type!) &&
      item !== LiveLineEnum.rtc // 如果当前房间类型是 webrtc 类型但选中的线路不是 rtc
  ) {
    message.info('不支持该线路！'); // 显示消息提示
    return;
  } else if (
      ![
        LiveRoomTypeEnum.wertc_live, // webrtc 直播
        LiveRoomTypeEnum.wertc_meeting_one, // webrtc 会议类型一
        LiveRoomTypeEnum.wertc_meeting_two, // webrtc 会议类型二
      ].includes(appStore.liveRoomInfo?.type!) &&
      item === LiveLineEnum.rtc // 如果当前房间类型不是 webrtc 类型但选中的线路是 rtc
  ) {
    message.info('不支持该线路！'); // 显示消息提示
    return;
  }
  appStore.setLiveLine(item); // 设置选中的直播线路
}
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 24px;
  height: 80px;
  text-align: center;
  .txt {
    font-size: 12px;
  }
}
.video-controls-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px 0 10px;
  width: 100%;
  height: 40px;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  );
  color: white;
  text-align: initial;

  user-select: none;
  .left {
    display: flex;
    align-items: center;
    .muted,
    .refresh,
    .play {
      display: flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .item {
      position: relative;
      margin-right: 15px;
      cursor: pointer;
      &.fps,
      &.kbs,
      &.resolution {
        cursor: no-drop;
      }
    }

    .render,
    .resolution,
    .line,
    .speed,
    .full {
      &:hover {
        .list {
          display: block;
        }
      }
      :deep(.wrap) {
        border-radius: 0px;
        background-color: rgba($color: #000000, $alpha: 0.5);
        color: white;
      }
      .list {
        text-align: center;
        .iten {
          padding: 6px 10px;
          &.active {
            color: var(--reaicc-nav-bg);
          }
          &:not(:last-child) {
            margin-bottom: 4px;
          }
          &:hover {
            background-color: rgba($color: #ffffff, $alpha: 0.1);
            cursor: pointer;
          }
        }
      }
    }

    & > :last-child {
      margin-right: 0px;
    }
  }
}
</style>
