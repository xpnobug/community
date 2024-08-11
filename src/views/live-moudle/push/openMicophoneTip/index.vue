<template>
  <div class="openMicophoneTip-wrap">
    <Modal
        v-if="showModal"
        title="提示"
        :mask-closable="false"
        @close="handleClose"
    >
      <div class="container">
        <p>采集麦克风声音失败，请确认是否授权!</p>
      </div>
      <template #footer></template>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Modal from "@/views/live-moudle/compontents/tipModal/index.vue";

const emits = defineEmits(['close']);
const showModal = ref(true); // 控制模态框显示

function handleClose() {
  showModal.value = false; // 关闭模态框
  emits('close');
}

onMounted(() => {
  // 如果你需要在组件加载后立即显示模态框，可以在这里处理逻辑
  showModal.value = true;
});
</script>


<style lang="scss" scoped>
.openMicophoneTip-wrap {
  text-align: initial;

  .container {
    padding-top: 10px;
  }
}
</style>
