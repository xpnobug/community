<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue'
import FooterView from "@/views/footer/FooterView.vue";
import LeftMenuItem from "@/components/LeftMenuItem.vue";
import DtCaiDan from "@/components/csszujian/DtCaiDan.vue";
import { useDefer } from "@/hooks/useDefer.js";
import getMenuData from "@/router/menuUtil";
const defer = useDefer();
const menu = getMenuData();
console.log('menu', menu)

</script>

<template>
  <keep-alive>
    <TopMenu v-if="defer"/>
  </keep-alive>

<!--  <LeftMenu/>-->
  <LeftMenuItem v-if="defer"/>
  <FooterView v-if="defer"/>
  <DtCaiDan v-if="defer"/>
<!--  <LunBoCompentes/>-->

</template>

<style scoped>

</style>
