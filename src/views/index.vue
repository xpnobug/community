<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue'
import FooterView from "@/views/footer/FooterView.vue";
import LeftMenuItem from "@/components/LeftMenuItem.vue";
import DtCaiDan from "@/components/csszujian/DtCaiDan.vue";

</script>

<template>
  <TopMenu msg="Vite + Vue" />
<!--  <LeftMenu/>-->
  <LeftMenuItem/>
  <FooterView/>
  <DtCaiDan/>

</template>

<style scoped>

</style>
