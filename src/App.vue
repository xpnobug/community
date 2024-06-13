<script setup lang="ts">
import LoveHeartLoading from "@/components/csszujian/LoveHeartLoading.vue";
import YtLoadingComponents from "@/components/csszujian/YtLoadingComponents.vue";
</script>

<template>
<!--  <LoveHeartLoading/>-->
<!--  页面数据渲染之后再加载-->
  <YtLoadingComponents/>
  <RouterView />
</template>

<style scoped>

</style>
