<template>
  <arco-drawer v-model:visible="visible" title="日志详情" :width="720" :footer="false">
    <arco-descriptions title="基本信息" :column="2" size="large" class="general-description">
      <arco-descriptions-item label="日志 ID">{{ dataDetail?.id }}</arco-descriptions-item>
      <arco-descriptions-item label="Trace ID"><arco-typography-paragraph :copyable="!!dataDetail?.traceId">{{ dataDetail?.traceId }}</arco-typography-paragraph></arco-descriptions-item>
      <arco-descriptions-item label="操作人">{{ dataDetail?.createUserString }}</arco-descriptions-item>
      <arco-descriptions-item label="操作时间">{{ dataDetail?.createTime }}</arco-descriptions-item>
      <arco-descriptions-item label="操作内容">{{ dataDetail?.description }}</arco-descriptions-item>
      <arco-descriptions-item label="所属模块">{{ dataDetail?.module }}</arco-descriptions-item>
      <arco-descriptions-item label="操作 IP"><arco-typography-paragraph :copyable="!!dataDetail?.ip">{{ dataDetail?.ip }}</arco-typography-paragraph></arco-descriptions-item>
      <arco-descriptions-item label="操作地点">{{ dataDetail?.address }}</arco-descriptions-item>
      <arco-descriptions-item label="浏览器">{{ dataDetail?.browser }}</arco-descriptions-item>
      <arco-descriptions-item label="终端系统">{{ dataDetail?.os }}</arco-descriptions-item>
      <arco-descriptions-item label="状态">
        <arco-tag v-if="dataDetail?.status === 1" color="green">成功</arco-tag>
        <arco-tag v-else color="red">失败</arco-tag>
      </arco-descriptions-item>
      <arco-descriptions-item label="耗时">
        <arco-tag v-if="dataDetail?.timeTaken > 500" color="red"> {{ dataDetail?.timeTaken }}ms </arco-tag>
        <arco-tag v-else-if="dataDetail?.timeTaken > 200" color="orange"> {{ dataDetail?.timeTaken }}ms </arco-tag>
        <arco-tag v-else color="green">{{ dataDetail?.timeTaken }} ms</arco-tag>
      </arco-descriptions-item>
      <arco-descriptions-item label="请求 URI" :span="2">
        <arco-typography-paragraph :copyable="!!dataDetail?.requestUrl">{{ dataDetail?.requestUrl }}</arco-typography-paragraph>
      </arco-descriptions-item>
    </arco-descriptions>
    <arco-descriptions
      title="响应信息"
      :column="2"
      size="large"
      class="general-description http"
      style="margin-top: 20px; position: relative"
    >
      <arco-descriptions-item :span="2">
        <arco-tabs type="card">
          <arco-tab-pane key="1" title="响应头">
            <JsonPretty v-if="dataDetail?.responseHeaders" :json="dataDetail?.responseHeaders" />
            <span v-else>无</span>
          </arco-tab-pane>
          <arco-tab-pane key="2" title="响应体">
            <JsonPretty v-if="dataDetail?.responseBody" :json="dataDetail?.responseBody" />
            <span v-else>无</span>
          </arco-tab-pane>
        </arco-tabs>
      </arco-descriptions-item>
    </arco-descriptions>
    <arco-descriptions
      title="请求信息"
      :column="2"
      size="large"
      class="general-description http"
      style="margin-top: 20px; position: relative"
    >
      <arco-descriptions-item :span="2">
        <arco-tabs type="card">
          <arco-tab-pane key="1" title="请求头">
            <JsonPretty v-if="dataDetail?.requestHeaders" :json="dataDetail?.requestHeaders" />
            <span v-else>无</span>
          </arco-tab-pane>
          <arco-tab-pane key="2" title="请求体">
            <JsonPretty v-if="dataDetail?.requestBody" :json="dataDetail?.requestBody" />
            <span v-else>无</span>
          </arco-tab-pane>
        </arco-tabs>
      </arco-descriptions-item>
    </arco-descriptions>
  </arco-drawer>
</template>

<script lang="ts" setup>
import { type LogDetailResp, getLog } from '@/api'
import JsonPretty from "@/views/system/compontents/JsonPretty/index.vue";

const dataId = ref('')
const dataDetail = ref<LogDetailResp>()

// 查询详情
const getDataDetail = async () => {
  console.log("点击了")
  const res = await getLog(dataId.value)
  dataDetail.value = res.data
}

const visible = ref(false)
// 详情
const onDetail = async (id: string) => {
  dataId.value = id
  await getDataDetail()
  visible.value = true
}

defineExpose({ onDetail })
</script>

<style lang="scss" scoped>
.http :deep(.arco-descriptions-item-label-block) {
  padding-right: 0;
}

:deep(.arco-tabs-content) {
  padding-top: 5px;
  padding-left: 15px;
}
</style>
