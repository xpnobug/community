<template>
  <button @click="changeFavicon('favicon1.ico')">Set Favicon 1</button>
</template>

<script lang="ts" setup>
function changeFavicon(iconURL: string) {
  const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
  if (favicon) {
    favicon.href = iconURL;
  }
}
</script>

<style scoped>

</style>