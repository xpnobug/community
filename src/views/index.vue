<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue'
import LeftMenu from "../components/LeftMenu.vue";
import FooterView from "@/views/footer/FooterView.vue";
import LeftMenuItem from "@/components/LeftMenuItem.vue";
</script>

<template>
  <TopMenu msg="Vite + Vue" />
<!--  <LeftMenu/>-->
  <LeftMenuItem/>
  <FooterView/>
</template>

<style scoped>
*{
  background-color: #f8f8f8;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
