<template>
  <a-form :model="formState">
    <a-form-item>
      <a-radio-group v-model:value="formState.resource">
        <a-radio value="1">图文</a-radio>
        <a-radio value="2">音乐</a-radio>
      </a-radio-group>
    </a-form-item>

    <div v-if="formState.resource === '1'">
      <a-form-item>
        <a-textarea v-model:value="formState.desc" placeholder="这一刻的想法..."/>
      </a-form-item>
      <Upload/>
    </div>

    <div v-if="formState.resource === '2'">
      <SearchMusicComponents/>
    </div>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import type {UnwrapRef} from 'vue';
import {reactive, toRaw} from 'vue';
import Upload from "@/views/Edit/compontents/upload.vue";
import SearchMusicComponents from "@/views/userPyq/component/searchMusicComponents.vue";

// const radioValue = ref('1');
interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

const formState: UnwrapRef<FormState> = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '1',
  desc: '',
});
const onSubmit = () => {
  console.log('submit!', toRaw(formState));
};
const labelCol = {style: {width: '150px'}};
const wrapperCol = {span: 14};
</script>

