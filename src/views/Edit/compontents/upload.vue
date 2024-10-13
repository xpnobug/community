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
      <div v-if="fileList.length < 9">  <!-- 文件列表小于 9 时显示上传按钮 -->
        <plus-outlined/>  <!-- 上传图标 -->
        <div> 上传图片</div>  <!-- 上传提示文字 -->
      </div>
    </a-upload>
    <a-modal :footer="null" :open="previewVisible" :title="previewTitle" @cancel="handleCancel">  <!-- 图片预览的模态框 -->
      <img :src="previewImage" alt="example" style="width: 100%"/>  <!-- 显示预览的图片 -->
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {inject, ref, watch} from 'vue'; // 导入 Vue 的响应式 API
import type {UploadProps} from 'ant-design-vue'; // 导入 ant-design-vue 的类型
import {useRoute} from "vue-router"; // 导入路由相关的 API
import { PlusOutlined } from '@ant-design/icons-vue';
// 将文件转换为 Base64 格式的函数
function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();  // 创建文件读取器
    reader.readAsDataURL(file);  // 读取文件为 Data URL 格式
    reader.onload = () => resolve(reader.result as string);  // 读取成功，返回结果
    reader.onerror = reject;  // 读取失败，返回错误
  });
}

// 设置请求头，包含认证 token
const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`};

// 定义响应式变量
const previewVisible = ref(false);  // 控制预览模态框的显示状态
const previewImage = ref('');  // 存储预览图片的地址
const previewTitle = ref('');  // 存储预览图片的标题
const fileList = ref<UploadProps['fileList']>([]);  // 存储上传的文件列表

// 关闭预览模态框的处理函数
const handleCancel = () => {
  previewVisible.value = false;  // 隐藏模态框
  previewTitle.value = '';  // 清空标题
};

// 处理图片预览的函数
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {  // 检查文件是否已有预览
    file.preview = await getBase64(file.originFileObj);  // 生成预览图
  }
  previewImage.value = file.url ?? file.preview;  // 设置预览图的地址
  previewVisible.value = true;  // 显示模态框
  previewTitle.value = file.name ?? file.url.split('/').pop();  // 设置标题
};

// 定义组件的 props
const props = defineProps({
  handleClick: { type: Function },  // 上传成功后的回调函数
  imgLists: { type: Function },  // 更新图片列表的回调函数
  removeImgList: { type: Function }  // 删除图片的回调函数
});


// 删除文件处理
const removeChange = (file: UploadProps['fileList'][number]) => {
  props.removeImgList(file.url);  // 调用传入的删除函数
};

// 定义存储上传文件的列表
const list = ref<UploadProps['fileList']>([]);

// 上传状态变化处理的函数
const uploadChange = ({file}: { event?: ProgressEvent }) => {
  const res = (file as XMLHttpRequest).response;  // 获取上传响应
  if (res) {
    list.value.push({url: res.url, fileId: res.fileId});  // 添加新文件到列表
    props.handleClick?.(res.fileId);  // 调用上传成功的回调函数
    props.imgLists?.(list.value);  // 更新图片列表
  } else {
    // TODO: 可以添加上传失败的处理逻辑
  }
};

// 使用路由获取类型参数
const route = useRoute();
const type = ref(route.query.type);  // 获取路由参数类型
if (type.value != null) {
  // 根据类型参数初始化文件列表
  const imgListData = inject(type.value === 'dt' ? 'imgFileList' : 'imgFile');  // 根据类型注入相应数据

// 监听 imgListData 的变化
  watch(
      () => imgListData.value,  // 监听注入数据的值
      (newList) => {
        if (Array.isArray(newList)) {
          fileList.value = newList.map(img => ({url: img}));  // 更新 fileList
        } else if (newList) {
          fileList.value = [{url: newList}];  // 更新 fileList
        }
      },
      {immediate: true}  // 立即执行一次回调
  );
}
</script>

<style scoped>
/* 上传按钮和样式定义 */
.ant-upload-select-picture-card i {
  font-size: 32px; /* 图标大小 */
  color: #999; /* 图标颜色 */
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px; /* 文字与图标之间的间距 */
  color: #666; /* 文字颜色 */
}
</style>
