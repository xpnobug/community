<template>
  <a-cascader
      v-model:value="value"
      @change="handleChange"
      :options="options"
      placeholder="请选择"
  /></template>
<script lang="ts" setup>
import {ref, inject, watch} from 'vue';
import type {CascaderProps} from 'ant-design-vue';
import {channelList} from "@/api/channels";
import {Page} from "@/api/base";

const props = defineProps({
  handleClick: {
    type: Function
  }
})
const page = reactive<Page>({
  pageSize: 10,
  currentPage: 1,
  count: 0,
  maxPage: 10,
  minPage: 1,
  firstResult: 0,
  recount: true
});

// 确保 options 初始化时包含一个有 children 的对象
const options = ref<CascaderProps['options']>([
  {
    value: '首页',
    label: '首页',
    children: [],
  }
]);
const getOfficaData = async () => {
  const {data} = await channelList(page, 1)
  page.pageSize = data.pageSize;
  page.currentPage = data.currentPage;
  page.count = data.count;
  options.value[0].children = data.data.map((item: any) => ({
    value: item.channelId,
    label: item.name,
  }));

  // 触发响应式更新
  options.value = [...options.value];
}
getOfficaData();

const value = ref<string[]>([]);
const handleChange = (value: string[]) => {
  props.handleClick(value[1])
}
const option = inject('optionForm');
// 监听 option 的变化
watch(option, (newValue) => {
  if (newValue) {
    value.value = ['首页', newValue];
  }
}, { immediate: true });
</script>

