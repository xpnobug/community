<template>
  <a-avatar-group :max-count="3" >
    <a-avatar v-for="item in userList" :src="item.avatar" />
  </a-avatar-group>
</template>
<script lang="ts" setup>
const props = defineProps(['userList']);
console.log(props.userList);
</script>

