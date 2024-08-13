<template>
  <div class="home-wrap">
    <!-- <SystemModal></SystemModal> -->
    <div class="play-container">
      <div
          v-if="configBg && configBg !== ''"
          class="bg-img"
          :style="{ backgroundImage: `url(${configBg})` }"
      ></div>
      <video
          v-if="configVideo && configVideo !== ''"
          class="bg-video"
          :src="configVideo"
          muted
          autoplay
          loop
      ></video>
      <!--      <div class="slider-wrap" style="width: 170vh;">-->
      <!--        <div-->
      <!--          v-for="(item, index) in interactionList"-->
      <!--          :key="index"-->
      <!--        >-->
      <!--          <Slider-->
      <!--            v-if="item.length"-->
      <!--            :list="item"-->
      <!--            :width="docW"-->
      <!--            :speed="60"-->
      <!--            :direction="index % 2 === 0 ? 'l-r' : 'r-l'"-->
      <!--            :customStyle="{ margin: '0 auto' }"-->
      <!--          ></Slider>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="container">
        <div
            v-loading="videoLoading"
            class="left"
            ref="videoWrapTmpRef"
            @click="showJoinBtn = !showJoinBtn"
        >
          <div
              v-if="
              currentLiveRoom?.cdn === LiveRoomUseCDNEnum.yes ||
              [
                LiveRoomTypeEnum.tencent_css,
                LiveRoomTypeEnum.tencent_css_pk,
              ].includes(currentLiveRoom?.liveRoom?.type!)
            "
              class="cdn-ico"
          >
            <div class="txt">CDN</div>
          </div>
          <div
              class="cover"
              :style="{
              backgroundImage: `url(${
                currentLiveRoom?.liveRoom?.coverImg ||
                currentLiveRoom?.user?.avatar
              })`,
            }"
          ></div>
          <div
              v-if="currentLiveRoom?.liveRoom?.flvUrl"
              ref="remoteVideoRef"
          ></div>
          <template v-if="currentLiveRoom">
            <VideoControls
                @click.stop
                :resolution="videoResolution"
                @refresh="handleRefresh"
                :control="{
                line: true,
              }"
            ></VideoControls>
            <div
                class="join-btn"
                :class="{
                show: showJoinBtn,
              }"
            >
              <div
                  class="btn"
                  @click="joinRoom({ roomId: currentLiveRoom.liveRoom?.id! })"
              >
                进入直播
              </div>
            </div>
          </template>
        </div>
        <div class="right">
          <div
              v-if="topLiveRoomList.length"
              class="list"
          >
            <div
                v-for="(item, index) in topLiveRoomList"
                :key="index"
                :class="{
                item: 1,
                active: item.liveRoomId === currentLiveRoom?.liveRoomId,
              }"
                :style="{
                backgroundImage: `url(${
                  item.liveRoom?.coverImg || item?.user?.avatar
                })`,
              }"
                @click="changeLiveRoom(item)"
            >
              <PullAuthTip
                  v-if="
                  item.liveRoom?.pullIsShouldAuth ===
                  LiveRoomPullIsShouldAuthEnum.yes
                "
              ></PullAuthTip>
              <div class="hidden">
                <div
                    class="cdn-ico"
                    v-if="
                    item?.liveRoom?.cdn === LiveRoomUseCDNEnum.yes ||
                    [
                      LiveRoomTypeEnum.tencent_css,
                      LiveRoomTypeEnum.tencent_css_pk,
                    ].includes(item.liveRoom?.type!)
                  "
                >
                  <div class="txt">CDN</div>
                </div>
              </div>
              <div
                  class="border"
                  :style="{
                  opacity:
                    item.liveRoomId === currentLiveRoom?.liveRoomId ? 1 : 0,
                }"
              ></div>
              <div
                  v-if="item.liveRoomId === currentLiveRoom?.liveRoomId"
                  class="triangle"
              ></div>
              <div class="txt">{{ item.liveRoom?.name }}</div>
            </div>
          </div>
          <div
              v-else
              class="none"
          >
            {{ t('home.noliveRoomTip') }}
          </div>
        </div>
      </div>
    </div>
    <div class="area-container">
      <div class="area-item">
        <div class="title">{{ t('home.recommendLive') }}</div>
        <div class="live-room-list">
          <div
              v-for="(iten, indey) in otherLiveRoomList"
              :key="indey"
              class="live-room"
              @click="
              joinRoom({
                roomId: iten.liveRoom?.id!,
              })
            "
          >
            <div
                class="cover"
                :style="{
                backgroundImage: `url('${
                  iten?.liveRoom?.coverImg || iten?.user?.avatar
                }')`,
              }"
            >
              <PullAuthTip
                  v-if="
                  iten.liveRoom?.pullIsShouldAuth ===
                  LiveRoomPullIsShouldAuthEnum.yes
                "
              ></PullAuthTip>
              <div
                  v-if="
                  iten?.liveRoom?.cdn === LiveRoomUseCDNEnum.yes ||
                  [
                    LiveRoomTypeEnum.tencent_css,
                    LiveRoomTypeEnum.tencent_css_pk,
                  ].includes(iten.liveRoom?.type!)
                "
                  class="cdn-ico"
              >
                <div class="txt">CDN</div>
              </div>
              <div class="txt">{{ iten?.user?.username }}</div>
            </div>
            <div class="desc">{{ iten?.liveRoom?.name }}</div>
          </div>
          <div
              v-if="!otherLiveRoomList.length"
              class="null"
          >
            {{ t('common.nonedata') }}
          </div>
        </div>
      </div>
    </div>

    <div class="foot">*{{ t('home.copyrightTip') }}~</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'; // 引入 Vue 的 onMounted 和 ref 方法
import { useI18n } from 'vue-i18n'; // 引入 vue-i18n 用于国际化
import { useRoute, useRouter } from 'vue-router'; // 引入 Vue Router 的相关方法
import Slider from "@/views/live-moudle/compontents/Slider/index.vue"; // 引入滑动组件
import VideoControls from "@/views/live-moudle/compontents/VideoControls/index.vue"; // 引入视频控制组件
import PullAuthTip from '@/views/live-moudle/compontents/PullAuthTip/index.vue'; // 引入权限提示组件

import { fetchLiveList } from '@/api/live/live'; // 引入获取直播列表的 API 方法
import { fetchFindLiveConfigByKey } from '@/api/live/liveConfig'; // 引入获取直播配置的 API 方法
import { sliderList } from '@/constant'; // 引入常量中的滑动列表
import { usePull } from '@/hooks/live/use-pull'; // 引入自定义的 hook 方法
import { ILive, LiveLineEnum } from '@/api/live/interface'; // 引入直播相关的接口和枚举
import { routerName } from '@/router'; // 引入路由名称
import { useAppStore } from '@/store/app'; // 引入应用状态管理
import {
  LiveRoomIsShowEnum,
  LiveRoomPullIsShouldAuthEnum,
  LiveRoomTypeEnum,
  LiveRoomUseCDNEnum,
} from '@/api/live/types/ILiveRoom'; // 引入直播房间的相关枚举

// 获取当前路由、路由器和应用商店
const route = useRoute();
const router = useRouter();
const appStore = useAppStore();

// 定义各种 ref 变量，使用 ref 可以使这些变量具有响应性
const canvasRef = ref<Element>(); // 用于画布引用
const showJoinBtn = ref(false); // 控制是否显示加入按钮
const topNums = ref(6); // 顶部显示的直播数量
const configBg = ref(''); // 配置背景图片
const configVideo = ref(); // 配置视频
// const configVideo = ref(
//   'https://www.xdyun.com/resldmnqcom/ldq_website/all_ldy/cloudphone_xdyun_ldy_mobile/mobile/assets/xd-video-6c9bcd.mp4'
// ); // 示例视频配置
const topLiveRoomList = ref<ILive[]>([]); // 顶部直播房间列表
const otherLiveRoomList = ref<ILive[]>([]); // 其他直播房间列表
const currentLiveRoom = ref<ILive>(); // 当前直播房间
const interactionList = ref<any[]>([]); // 交互列表
const videoWrapTmpRef = ref<HTMLDivElement>(); // 视频包装临时引用
const remoteVideoRef = ref<HTMLDivElement>(); // 远程视频引用
const docW = document.documentElement.clientWidth; // 文档宽度

// 国际化
const { t } = useI18n();
// 获取视频相关的 ref 和方法
const {
  videoWrapRef, // 视频包装引用
  videoLoading, // 视频加载状态
  roomLiving, // 房间直播状态
  videoResolution, // 视频分辨率
  handleStopDrawing, // 停止绘制方法
  handlePlay, // 播放方法
} = usePull(route.params.roomId as string); // 使用自定义 hook 获取相关参数

// 在组件挂载时执行的逻辑
onMounted(() => {
  handleSlideList(); // 处理滑动列表
  getLiveRoomList(); // 获取直播房间列表
  // getBg(); // 获取背景
  videoWrapRef.value = videoWrapTmpRef.value; // 设置视频包装引用
});

// 处理滑动列表
function handleSlideList() {
  const row = 2; // 每行显示的项数
  const res: any[] = []; // 临时存放结果的数组
  const count = Math.ceil(sliderList.length / row); // 计算每组的项数
  for (let i = 0, len = sliderList.length; i < len; i += count) {
    const item = sliderList.slice(i, i + count); // 按组切分滑动列表
    res.push([...item]); // 将每组添加到结果数组
  }
  interactionList.value = res; // 更新交互列表
}

// 获取背景
async function getBg() {
  try {
    const res = await fetchFindLiveConfigByKey('frontend_live_home_bg'); // 获取前端直播首页背景配置
    if (res.status === 200) {
      const reg = /.+\.mp4$/g; // 正则匹配视频文件
      const url = res.data.value as string; // 获取配置的 URL
      if (reg.exec(url)) {
        configVideo.value = res.data.value; // 如果是视频文件，设置视频配置
      } else {
        configBg.value = res.data.value; // 如果是图片文件，设置背景配置
      }
    }
  } catch (error) {
    console.log(error); // 捕获并打印错误
  }
}

// 刷新当前直播
function handleRefresh() {
  playLive(currentLiveRoom.value!); // 重新播放当前直播
}

// 播放指定直播
function playLive(item: ILive) {
  handleStopDrawing(); // 停止绘制
  currentLiveRoom.value = item; // 设置当前直播房间
  canvasRef.value?.childNodes?.forEach((item) => {
    item.remove(); // 移除画布中的所有子节点
  });
  appStore.setLiveRoomInfo(item.liveRoom!); // 更新应用状态中的直播房间信息
  roomLiving.value = true; // 设置房间为直播状态
  handlePlay(item.liveRoom!); // 播放直播
}

// 切换直播房间
function changeLiveRoom(item: ILive) {
  if (item.id === currentLiveRoom.value?.id) return; // 如果选中的房间是当前房间，则不进行切换
  if (
      ![
        LiveRoomTypeEnum.wertc_live,
        LiveRoomTypeEnum.wertc_meeting_one,
        LiveRoomTypeEnum.wertc_meeting_two,
      ].includes(item.liveRoom?.type!)
  ) {
    appStore.setLiveLine(LiveLineEnum.hls); // 如果房间类型不在指定类型内，设置直播线路为 HLS
  }
  playLive(item); // 播放选中的直播房间
}

// 获取直播房间列表
async function getLiveRoomList() {
  try {
    const res = await fetchLiveList({
      liveRoomIsShow: LiveRoomIsShowEnum.yes, // 仅获取显示中的直播房间
      orderName: 'created_at', // 按创建时间排序
      orderBy: 'desc', // 降序排列
    });
    if (res.status === 200) {
      topLiveRoomList.value = res.data.data.slice(0, topNums.value); // 获取顶部直播房间列表
      otherLiveRoomList.value = res.data.data.slice(topNums.value); // 获取其他直播房间列表
      if (res.data.count) {
        currentLiveRoom.value = topLiveRoomList.value[0]; // 设置当前直播房间为第一个顶部直播房间
        appStore.setLiveRoomInfo(currentLiveRoom.value.liveRoom!); // 更新应用状态中的直播房间信息
        roomLiving.value = true; // 设置房间为直播状态
      }
    }
  } catch (error) {
    console.log(error); // 捕获并打印错误
  }
}

// 加入房间
function joinRoom(data: { roomId: number }) {
  router.push({
    name: routerName.pull, // 路由名称
    params: { roomId: data.roomId }, // 路由参数
  });
}
</script>


<style lang="scss" scoped>
.home-wrap {
  .play-container {
    position: relative;
    z-index: 1;
    padding-bottom: 50px;

    .bg-img {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .bg-video {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;

      // object-fit: fill;
    }

    .slider-wrap {
      padding: 4px 0;
    }

    .container {
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      margin: 0 auto;
      height: calc($w-1100 / $video-ratio);

      .left {
        position: relative;
        display: inline-block;
        overflow: hidden;
        flex-shrink: 0;
        box-sizing: border-box;
        margin-right: 20px;
        width: $w-1100;
        height: 100%;
        border-radius: 4px;
        background-color: rgba($color: #000000, $alpha: 0.3);

        @extend %coverBg;

        .cdn-ico {
          position: absolute;
          top: -9px;
          right: -10px;
          z-index: 2;
          width: 70px;
          height: 32px;
          background-color: #f87c48;
          color: white;
          transform: rotate(45deg);
          transform-origin: bottom;

          .txt {
            margin-top: 11px;
            margin-left: 20px;
            background-image: initial !important;
            font-size: 14px;
          }
        }

        .cover {
          position: absolute;
          background-position: center center;
          background-size: cover;
          filter: blur(10px);

          inset: 0;
        }

        :deep(canvas) {
          position: absolute;
          top: 50%;
          left: 50%;
          // min-width: 100%;
          // min-height: 100%;
          max-width: $w-1100;
          max-height: calc($w-1100 / $video-ratio);
          transform: translate(-50%, -50%);

          user-select: none;
        }

        :deep(video) {
          position: absolute;
          top: 50%;
          left: 50%;
          // min-width: 100%;
          // min-height: 100%;
          max-width: $w-1100;
          max-height: calc($w-1100 / $video-ratio);
          transform: translate(-50%, -50%);

          user-select: none;
        }

        &:hover {
          .join-btn {
            display: inline-flex !important;
          }
        }

        .join-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 20;
          display: none;
          align-items: center;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          // width: 80%;
          transform: translate(-50%, -50%);

          &.show {
            display: inline-flex !important;
          }

          .btn {
            padding: 14px 26px;
            border: 2px solid rgba($color: $theme-color-gold, $alpha: 0.5);
            border-radius: 6px;
            background-color: rgba(0, 0, 0, 0.3);
            color: $theme-color-gold;
            font-size: 16px;
            cursor: pointer;

            &:hover {
              background-color: $theme-color-gold;
              color: white;
            }
          }
        }
      }

      .right {
        display: inline-block;
        overflow: scroll;
        flex-shrink: 0;
        box-sizing: border-box;
        padding: 12px 10px;
        height: 100%;
        border-radius: 4px;
        background-color: rgba($color: #000000, $alpha: 0.3);

        @extend %hideScrollbar;

        .list {
          .item {
            position: relative;
            box-sizing: border-box;
            margin-bottom: 10px;
            width: 200px;
            height: 110px;
            border-radius: 4px;
            background-color: rgba($color: #000000, $alpha: 0.3);
            cursor: pointer;

            @extend %coverBg;

            &:last-child {
              margin-bottom: 0;
            }

            .hidden {
              position: relative;
              overflow: hidden;
              width: 200px;
              height: 110px;

              .cdn-ico {
                position: absolute;
                top: -9px;
                right: -9px;
                z-index: 2;
                width: 60px;
                height: 28px;
                background-color: #f87c48;
                color: white;
                transform: rotate(45deg);
                transform-origin: bottom;

                .txt {
                  margin-left: 10px;
                  background-image: initial !important;
                  font-size: 12px;
                  line-height: 0.8;
                }
              }
            }

            .border {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 3;
              border: 2px solid $theme-color-gold;
              border-radius: 4px;
            }

            .triangle {
              position: absolute;
              top: 50%;
              left: 0;
              display: inline-block;
              border: 5px solid transparent;
              border-right-color: $theme-color-gold;
              transform: translate(-100%, -50%);
            }

            &.active {
              &::before {
                background-color: transparent;
              }
            }

            &:hover {
              &::before {
                background-color: transparent;
              }
            }

            &::before {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 4px;
              background-color: rgba(0, 0, 0, 0.4);
              content: '';
              transition: all cubic-bezier(0.22, 0.58, 0.12, 0.98) 0.4s;
            }

            .txt {
              position: absolute;
              bottom: 0;
              left: 0;
              box-sizing: border-box;
              padding: 4px 8px;
              width: 100%;
              border-radius: 0 0 4px 4px;
              background-image: linear-gradient(
                      -180deg,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 0.6)
              );
              color: white;
              text-align: initial;
              font-size: 13px;

              @extend %singleEllipsis;
            }
          }
        }

        .none {
          width: 200px;
          color: white;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }

  .area-container {
    box-sizing: border-box;
    margin: 10px auto;
    width: $w-1350;

    .area-item {
      .title {
        padding: 10px 0;
        font-size: 26px;
      }

      .live-room {
        display: inline-block;
        margin-right: 32px;
        margin-bottom: 10px;
        width: 300px;
        cursor: pointer;

        .cover {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 150px;
          border-radius: 8px;
          background-position: center center;
          background-size: cover;

          .cdn-ico {
            position: absolute;
            top: -10px;
            right: -10px;
            z-index: 2;
            width: 70px;
            height: 28px;
            background-color: #f87c48;
            color: white;
            transform: rotate(45deg);
            transform-origin: bottom;

            .txt {
              margin-left: 18px;
              background-image: initial !important;
              font-size: 13px;
            }
          }

          .txt {
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            padding: 4px 8px;
            width: 100%;
            border-radius: 0 0 4px 4px;
            background-image: linear-gradient(
                    -180deg,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.6)
            );
            color: white;
            text-align: initial;
            font-size: 13px;

            @extend %singleEllipsis;
          }
        }

        .desc {
          margin-top: 4px;
          font-size: 14px;

          @extend %singleEllipsis;
        }
      }
    }
  }

  .foot {
    margin-top: 10px;
    text-align: center;
  }
}

// 屏幕宽度小于1330的时候
@media screen and (max-width: 1330px) {
  .home-wrap {
    .play-container {
      .container {
        height: calc($w-900 / $video-ratio);

        .left {
          width: $w-900;

          :deep(canvas) {
            max-width: $w-900;
            max-height: calc($w-900 / $video-ratio);
          }

          :deep(video) {
            max-width: $w-900;
            max-height: calc($w-900 / $video-ratio);
          }
        }

        .right {
        }
      }
    }

    .area-container {
      width: $w-1150;
    }
  }
}
</style>
