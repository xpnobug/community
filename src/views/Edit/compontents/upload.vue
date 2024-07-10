<template>
  <div class="clearfix">
    <a-upload
        v-model:file-list="fileList"
        action="/api/upload/uploadImg"
        name="imgfile"
        list-type="picture-card"
        @preview="handlePreview"
        @change="uploadChange"
    >
      <div v-if="fileList.length < 9">
<!--        <plus-outlined />-->
        <div style=" font-size: 50px;"> + </div>
      </div>
    </a-upload>

  </div>
</template>
<script lang="ts" setup>
import { ref,defineProps } from 'vue';
import type { UploadProps } from 'ant-design-vue';
import {message} from "ant-design-vue";

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file)
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

const fileList = ref<UploadProps['fileList']>([]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};


const props = defineProps({
  handleClick: {
    type: Function
  },
  imgLists: {
    type: Function
  }
})
const list = ref<UploadProps['fileList']>([])
function uploadChange({file}: { event?: ProgressEvent }) {
  const res = (file as XMLHttpRequest).response
  if (res){
    list.value = [...list.value, res.data.downloadUrl]
    if (props.handleClick != undefined) {
      props.handleClick(res.data.downloadUrl)
    }
    if (props.imgLists != undefined) {
      props.imgLists(list.value)
    }
    message.success("上传成功")
  }
  return file
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
