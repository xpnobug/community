<template>
  <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
  >
    <a-form-item ref="name" label="版块名称" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>

    <a-form-item ref="title" label="版块标题" name="title">
      <a-input v-model:value="formState.title" />
    </a-form-item>

    <a-form-item ref="summary" label="版块简介" name="summary">
      <a-textarea v-model:value="formState.summary" />
    </a-form-item>

    <a-form-item ref="logo" label="版块logo" name="logo">
      <Upload :handleClick="logoClick"/>
    </a-form-item>

    <a-form-item ref="background" label="版块背景" name="background">
      <Upload :handleClick="bgClick"/>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref, toRaw, onMounted } from 'vue';
import type { UnwrapRef } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import Upload from "@/views/Edit/compontents/upload.vue";

interface FormState {
  name: string;
  title: string | undefined;
  summary: string | undefined;
  logo: string | undefined;
  background: string;
}
const formRef = ref();
const labelCol = { span: 5 };
const wrapperCol = { span: 13 };
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  title:'',
  summary:'',
  logo:'',
  background:''
});
const rules: Record<string, Rule[]> = {
  name: [
    { required: true, message: '请输入版块名称', trigger: 'change' },
    { min: 3, max: 5, message: '长度 3 to 5', trigger: 'blur' },
  ],
  summary: [{ required: true, message: '请输入版块简介', trigger: 'blur' }],
};

const emit = defineEmits(['submit', 'reset', 'submit-method', 'reset-method']);
const onSubmit = () => {
  formRef.value
      .validate()
      .then(() => {
        emit('submit', formState, toRaw(formState));
      })
      .catch(error => {
        console.log('error', error);
      });
};

//接收子组件传递的数据
const logoClick = (value) => {
  formState.logo = value;
  console.log(formState.logo)
}
const bgClick = (value) => {
  formState.background = value;
  console.log(formState.background)
}

const resetForm = () => {
  formRef.value.resetFields();
  emit('reset');
};

onMounted(() => {
  emit('submit-method', onSubmit);
  emit('reset-method', resetForm);
});

</script>

