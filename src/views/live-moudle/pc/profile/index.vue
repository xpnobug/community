<template>
  <div
    class="profile-wrap"
    v-loading="getUserLoading"
  >
    <div class="uid">用户id：{{ userInfo?.id }}</div>
    <div class="avatar">
      <span class="txt">用户头像：</span>
      <Avatar
        :avatar="userInfo?.avatar"
        :size="30"
      ></Avatar>
    </div>
    <div class="username">用户昵称：{{ userInfo?.username }}</div>
    <div
      class="username"
      v-if="userStore.userInfo"
    >
      用户角色：{{ userInfo?.roles?.map((item) => item.role_name).join(',') }}
    </div>
    <br />
    <div class="pull-url">
      <span
        v-if="
          !userInfo?.live_rooms?.length &&
          userStore.userInfo?.id === userInfo?.id
        "
        class="link"
        @click="openLiveRoom"
      >
        未开通
      </span>
      <span v-else-if="!userInfo?.live_rooms?.length">
        该用户未开通直播间
      </span>
      <div v-else>
        <div>
          直播间地址：
          <a
            :href="getLiveRoomPageUrl(userInfo?.live_rooms?.[0]?.id!)"
            class="link"
            target="_blank"
          >
            {{ getLiveRoomPageUrl(userInfo?.live_rooms?.[0]?.id!) }}
          </a>
        </div>
        <div>直播间名称：{{ userInfo?.live_rooms?.[0]?.name }}</div>
        <div>
          直播间简介：{{ userInfo?.live_rooms?.[0]?.desc || '暂无简介' }}
        </div>
        <div>
          直播间分区：{{
            userInfo.live_rooms[0]?.areas?.[0]?.name || '暂无分区'
          }}
        </div>
        <div
          v-if="
            userStore.userInfo?.id === userInfo.id &&
            userStore.auths?.find(
              (v) => v.auth_value === DEFAULT_AUTH_INFO.LIVE_PUSH.auth_value
            )
          "
          class="url-wrap"
          v-loading="updateKeyLoading"
        >
          <div
            class="link"
            @click="handleUpdateKey"
          >
            更新地址
          </div>
          <div
            class="cdn"
            v-if="
              userStore.userInfo?.auths?.find(
                (v) =>
                  v.auth_value === DEFAULT_AUTH_INFO.LIVE_PULL_SVIP.auth_value
              )
            "
          >
            <div>
              <span>
                RTMP推流地址（CDN）：{{ liveRoomInfo?.cdn_push_rtmp_url! }}，
              </span>
              <span
                class="link"
                @click="handleCopy(liveRoomInfo?.cdn_push_rtmp_url!)"
              >
                复制
              </span>
            </div>
            <div>
              <span>
                OBS服务器（CDN）：{{ liveRoomInfo?.cdn_push_obs_server! }}，
              </span>
              <span
                class="link"
                @click="handleCopy(liveRoomInfo?.cdn_push_obs_server!)"
              >
                复制
              </span>
            </div>
            <div>
              <span>
                OBS推流码（CDN）：{{ liveRoomInfo?.cdn_push_obs_stream_key! }}，
              </span>
              <span
                class="link"
                @click="handleCopy(liveRoomInfo?.cdn_push_obs_stream_key!)"
              >
                复制
              </span>
            </div>
          </div>

          <div class="srs">
            <div>
              <span> RTMP推流地址：{{ liveRoomInfo?.push_rtmp_url! }}， </span>
              <span
                class="link"
                @click="handleCopy(liveRoomInfo?.push_rtmp_url!)"
              >
                复制
              </span>
            </div>
            <div>
              <span>OBS服务器：{{ liveRoomInfo?.push_obs_server! }}，</span>
              <span
                class="link"
                @click="handleCopy(liveRoomInfo?.push_obs_server!)"
              >
                复制
              </span>
            </div>
            <div>
              <span>OBS推流码：{{ liveRoomInfo?.push_obs_stream_key! }}，</span>
              <span
                class="link"
                @click="handleCopy(liveRoomInfo?.push_obs_stream_key!)"
              >
                复制
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { copyToClipBoard, openToTarget } from 'billd-utils';
import { ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Avatar from '@/views/live-moudle/compontents/Avatar/index.vue';

import { fetchUpdateLiveRoomKey } from '@/api/live/liveRoom';
import { fetchFindUser } from '@/api/live/user';
import { DEFAULT_AUTH_INFO } from '@/constant';
import { loginTip } from '@/hooks/live/use-login';
import { routerName } from '@/router';
import { useUserStore } from '@/store/modules/user';
import { ILiveRoom, LiveRoomTypeEnum } from '@/api/live/types/ILiveRoom';
import { IUser } from '@/api/live/types/IUser';
import { getLiveRoomPageUrl } from '@/utils';
import {message} from "ant-design-vue";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const liveRoomInfo = ref<ILiveRoom>();
const userId = ref(-1);
const userInfo = ref<IUser>();
const getUserLoading = ref(false);
const updateKeyLoading = ref(false);

watchEffect(() => {
  if (route.params.userId) {
    userId.value = Number(route.params.userId as string);
    handleUserInfo();
  }
});

watch(
  () => userStore.userInfo,
  (newval) => {
    if (newval) {
      liveRoomInfo.value = newval.live_rooms?.[0];
    }
  },
  { immediate: true }
);

function handleReplaceCDNUrl(url: string) {
  const reg = /pushtype=([0-9]+)/g;
  console.log(url.replace(reg, 'pushtype=3'));
  return url.replace(reg, `pushtype=${LiveRoomTypeEnum.tencent_css}`);
}

function handleReplaceRtmpUrl(url: string) {
  const reg = /pushtype=([0-9]+)/g;
  console.log(url.replace(reg, 'pushtype=3'));
  return url.replace(reg, `pushtype=${LiveRoomTypeEnum.obs}`);
}

async function handleUserInfo() {
  try {
    getUserLoading.value = true;
    const res = await fetchFindUser(userId.value);
    if (res.data.code === 200) {
      userInfo.value = res.data.data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    getUserLoading.value = false;
  }
}

function handleCopy(url: string) {
  copyToClipBoard(url);
  message.success('复制成功！');
}

function openLiveRoom() {
  if (!loginTip()) {
    return;
  }
  const url = router.resolve({
    name: routerName.push,
    query: { liveType: LiveRoomTypeEnum.srs },
  });
  openToTarget(url.href);
}

async function handleUpdateKey() {
  try {
    updateKeyLoading.value = true;
    const res = await fetchUpdateLiveRoomKey();
    if (res.data.code === 200) {
      if (liveRoomInfo.value) {
        liveRoomInfo.value.push_obs_server =
          res.data.srsPushRes.push_obs_server;
        liveRoomInfo.value.push_obs_stream_key =
          res.data.srsPushRes.push_obs_stream_key;
        liveRoomInfo.value.push_rtmp_url = res.data.srsPushRes.push_rtmp_url;
        liveRoomInfo.value.push_srt_url = res.data.srsPushRes.push_srt_url;
        liveRoomInfo.value.push_webrtc_url =
          res.data.srsPushRes.push_webrtc_url;
        liveRoomInfo.value.cdn_push_obs_server =
          res.data.srsPushRes.push_obs_server;
        liveRoomInfo.value.cdn_push_obs_stream_key =
          res.data.cdnPushRes.push_obs_stream_key;
        liveRoomInfo.value.cdn_push_rtmp_url =
          res.data.cdnPushRes.push_rtmp_url;
        liveRoomInfo.value.cdn_push_srt_url = res.data.cdnPushRes.push_srt_url;
        liveRoomInfo.value.cdn_push_webrtc_url =
          res.data.cdnPushRes.push_webrtc_url;
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    updateKeyLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.profile-wrap {
  position: relative;
  padding: 10px;
  .link {
    color: var(--reaicc-nav-bg);
    text-decoration: none;
    cursor: pointer;
  }
  .avatar {
    display: flex;
    align-items: center;
    .txt {
      margin-right: 10px;
    }
  }
  .url-wrap {
    position: relative;
    margin-top: 10px;
    .cdn {
      margin-bottom: 10px;
    }
  }
}
</style>
