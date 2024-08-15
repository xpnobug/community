<template>
  <div class="content-grid">
    <n-config-provider :theme-overrides="themeOverrides">
      <n-dialog-provider>
        <HeadCpt />
        <HomeModal
            :show="showModal"
            :content="modalContent"
        ></HomeModal>
        <HomeIndex />
        <!--      <SidebarCpt />-->
      </n-dialog-provider>
    </n-config-provider>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainApp',
};
</script>

<script lang="ts" setup>
import { isMobile } from 'billd-utils';
import { GlobalThemeOverrides, NConfigProvider } from 'naive-ui';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import HomeModal from '@/views/live-moudle/compontents/HomeModal/index.vue';
import SidebarCpt from '@/views/live-moudle/compontents/sidebar/index.vue';
import HomeIndex from '@/views/live-moudle/home/index.vue';
import HeadCpt from '@/views/live-moudle/compontents/head/index.vue';

import { fetchSettingsList } from '@/api/live/settings';
import {appBuildInfo, THEME_COLOR} from '@/constant';
import { useCheckUpdate } from '@/hooks/live/use-common';
import { usePiniaCacheStore } from '@/store/cache';
import { useUserStore } from '@/store/modules/user';
import { getHostnameUrl } from '@/utils';
import { getLastBuildDate, setLastBuildDate } from '@/utils/localStorage/app';
import { getToken } from '@/utils/localStorage/user';

const { checkUpdate } = useCheckUpdate();
const cacheStore = usePiniaCacheStore();
const userStore = useUserStore();
const route = useRoute();

const showModal = ref(false);
const modalContent = ref('');

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: THEME_COLOR,
    primaryColorHover: THEME_COLOR,
  },
};

onMounted(() => {
  // initSettings();
  checkUpdate({
    htmlUrl: getHostnameUrl(),
  });
  handleUpdate();
  cacheStore.setMuted(true);
  cacheStore.setVolume(0);
  const token = getToken();
  if (token) {
    userStore.userInfo;
    console.log('token', userStore.userInfo)
  }

  // 启用vconsole
  // import('vconsole')
  //   .then((VConsole) => {
  //     // eslint-disable-next-line
  //     new VConsole.default();
  //   })
  //   .catch(() => {});
  if (isMobile()) {
    const metaEl = document.querySelector('meta[name="viewport"]');
    metaEl?.setAttribute(
        'content',
        'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
    );
  }
});

function initSettings() {
  setTimeout(async () => {
    if (route.path !== '/live') {
      return;
    }
    // showModal.value = true;
    // modalContent.value = "homeModalContent.value";
    const res = await fetchSettingsList({});
    if (res.data.code === 200) {
      const allowHomeModal = res.data.data.rows.find(
          (v) => v.key === 'allow_home_modal'
      );
      const homeModalContent = res.data.data.rows.find(
          (v) => v.key === 'home_modal_content'
      );
      if (allowHomeModal?.value === '1' && homeModalContent?.value) {
        showModal.value = true;
        modalContent.value = homeModalContent.value;
      }
    }
  }, 500);
}

function handleUpdate() {
  const old = getLastBuildDate();
  if (appBuildInfo.lastBuildDate !== old) {
    localStorage.clear();
  }
  setLastBuildDate(appBuildInfo.lastBuildDate);
}
</script>

<style lang="scss">
body {
  font-size: 16px;
  // naive的message会影响全局line-height
  line-height: initial;
}
</style>
<style lang="scss" scoped></style>
