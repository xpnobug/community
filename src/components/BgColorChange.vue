<template>
  <div>
    <el-button type="primary"  circle @click="handleChange"> 切换 </el-button>
  </div>
</template>

<script lang="ts" setup>

const handleChange = () => {
  const willChangeMode = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  if (willChangeMode === "dark"){
    document.documentElement.setAttribute("data-theme", willChangeMode);
  }else{
    document.documentElement.setAttribute("data-theme", willChangeMode);
  }
}
</script>

<style scoped>

</style>