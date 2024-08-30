<template>
<div class="content-grid">
  <div class="content-view">
    <!--    头部信息-->
    <InfoHeader :infoChannel="infoChannel"/>
    <div class="grid grid-3-6-3 mobile-prefer-content">
      <InfoLeft :summary="infoChannel.summary" :createTime="infoChannel.createTime"/>
      <InfoMain/>
      <InfoRight :userList="infoChannel.userList"/>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import InfoHeader from "./InfoHeader.vue";
import InfoLeft from "./infoLeft.vue";
import InfoMain from "./infoMain.vue";
import InfoRight from "./infoRight.vue";
import {channelDetail} from "@/api/channels";
import {useRoute} from "vue-router";

//获取地址栏中id
const route = useRoute();
const infoChannel = ref([]);
const channelId = route.query.channelId;
channelDetail(channelId).then(res => {
  infoChannel.value = res.data.data;
})
</script>

<style scoped>

</style>