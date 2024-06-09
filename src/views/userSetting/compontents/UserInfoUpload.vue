<template>

  <a-upload id="avatar"
            v-model:file-list="fileList"
            :maxCount=1
            action="/api/upload/uploadImg"
            name="imgfile"
            :before-upload="beforeUpload"
            @change="uploadChange">
    <div v-if="fileList.length < 1">
      <div>Upload</div>
    </div>
  </a-upload>
</template>
<script lang="ts" setup>
import {ref,defineProps} from 'vue';
import type {UploadProps} from 'ant-design-vue';
import {message} from "ant-design-vue";
const fileList = ref<UploadProps['fileList']>([]);

const props = defineProps({
  handleUp: {type: Function},
  handleCover: {type: Function},
  imgType: {type: String}
})
const beforeUpload: UploadProps['beforeUpload'] = file => {
  if(props.imgType === "tx"){
  }
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img: HTMLImageElement = document.createElement('img');
      img.src = reader.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = 'red';
        ctx.textBaseline = 'middle';
        ctx.font = '33px Arial';
        ctx.fillText('Ant Design Vue', 20, 20);
        canvas.toBlob(resolve);
      };
    };
  });
};

function uploadChange({file}: { event?: ProgressEvent }) {
  const res = (file as XMLHttpRequest).response
  if (res) {
    if (props.handleUp != undefined) {
      props.handleUp(res.data.downloadUrl)
    }
    if (props.handleCover != undefined) {
      props.handleCover(res.data.downloadUrl)
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

:deep(.ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select) {
  height: 0;
  /* vertical-align: top; */
  /* background-color: rgba(0, 0, 0, 0.02); */
  border: 0;
  /* border-radius: 8px; */
  /* cursor: pointer; */
  transition: border-color 0.3s;
}
</style>
