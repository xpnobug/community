<template>
  <a-button type="text" danger style="margin-right: 8px;" @click="showDrawer('default')">发布音乐</a-button>

  <a-drawer title="发布"     :width="430"
            :size="size" :open="open" @close="onClose">
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </template>
    <AddOrUpdate/>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';
import AddOrUpdate from "@/views/userPyq/component/form/addOrUpdate.vue";

const open = ref<boolean>(false);
const size = ref<DrawerProps['size']>('default');
const width = ref<number | string>(520); // 默认宽度

const showDrawer = (val: DrawerProps['size']) => {
  size.value = val;
  open.value = true;
  width.value = val === 'large' ? 720 : 520; // 根据需要调整宽度
};

const onClose = () => {
  open.value = false;
};
</script>


