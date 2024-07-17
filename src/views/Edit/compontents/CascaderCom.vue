<template>
  <a-cascader v-model:value="value" :change="handleChange(value)" :options="options" placeholder="请选择"/>
</template>
<script lang="ts" setup>
import {ref,defineProps} from 'vue';
import type {CascaderProps} from 'ant-design-vue';

const props = defineProps({
  handleClick: {
    type: Function
  }
})
const options: CascaderProps['options'] = [
  {
    value: '首页',
    label: '首页',
    children: [
      {
        value: 'banner',
        label: 'banner',
      },
      {
        value: 'home-yyzsk',
        label: '运营知识库',
      }, {
        value: '产品共创',
        label: '产品共创',
      }, {
        value: 'LT-REAI专题',
        label: 'LT-REAI专题',
      }, {
        value: '功能前瞻',
        label: '功能前瞻',
      }, {
        value: '七彩生活',
        label: '七彩生活',
      }, {
        value: '新鲜事',
        label: '新鲜事',
      },
    ],
  },
  // {
  //   value: 'jiangsu',
  //   label: 'Jiangsu',
  //   children: [
  //     {
  //       value: 'nanjing',
  //       label: 'Nanjing',
  //       children: [
  //         {
  //           value: 'zhonghuamen',
  //           label: 'Zhong Hua Men',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
const value = ref<string[]>([]);
const handleChange = (value: string[]) => {
  props.handleClick(value[1])
}

</script>

