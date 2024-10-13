<template>
  <div class="clearfix">
    <a-upload
        v-model:file-list="fileList"
        action="/api/common/file"
        name="file"
        list-type="picture-card"
        @preview="handlePreview"
        @change="uploadChange"
        @remove="removeChange"
        :headers="headers"
    >
      <div v-if="fileList.length < 9">
        <plus-outlined />
        <div> 上传图片 </div>
      </div>
    </a-upload>
    <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue';
import type { UploadProps } from 'ant-design-vue';
import {message} from "ant-design-vue";
import { PlusOutlined } from '@ant-design/icons-vue';
import {useRoute} from "vue-router";
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file)
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`}

const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

const props = defineProps({
  handleClick: {
    type: Function
  },
  imgLists: {
    type: Function
  },
  removeImgList:{
    type: Function
  }
});
// 初始化 fileList
const fileList = ref<UploadProps['fileList']>([]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  console.log(file)
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};

function removeChange(file) {
  props.removeImgList(file.url)
}

const list = ref<UploadProps['fileList']>([])
function uploadChange({file}: { event?: ProgressEvent }) {
  const res = (file as XMLHttpRequest).response
  if (res){
    list.value = [...list.value, {url: res.url,fileId: res.fileId}]
    if (props.handleClick != undefined) {
      props.handleClick(res.fileId)
    }
    if (props.imgLists != undefined) {
      props.imgLists(list.value)
    }
  }
  return file
}

const route = useRoute();
const type = ref();
type.value = route.query.type; // 获取路由参数

if (type.value == 'dt') {
  const imgListData = inject('imgFileList');
// 监听 imgListData 的变化
  watch(() => imgListData.value, // 监听 imgListData 的值
      (newList) => {
        if (Array.isArray(newList)) {
          fileList.value = newList.map(img => ({
            url: img
          }));
        }
      },
      { immediate: true }
  );
}else {
  const imgData = inject('imgFile');
  watch(() => imgData.value, // 监听 imgListData 的值
      (newList) => {
        fileList.value = [{url: newList}]
      },
      { immediate: true }
  );
}



</script>
<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
