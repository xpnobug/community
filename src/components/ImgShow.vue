<script lang="ts" setup>
import {getCurrentInstance, ref, toRefs, watch} from 'vue';
import PostInfoComponent from "@/views/user/components/PostInfoComponent.vue";

const open = ref<boolean>(false);
const instance = getCurrentInstance()
//这里为什么接收了6条数据？
//我只想接收一条
instance?.proxy?.$Bus.on("openValue", (param: any) => {
  open.value = param;
})
const handleOk = (e: MouseEvent) => {
  open.value = false;
};

</script>

<template>
  <div>
    <a-modal
        v-model:open="open"
        width="100%"
        wrap-class-name="full-modal"
        @ok="handleOk"
    >
      <PostInfoComponent/>
    </a-modal>
  </div>
</template>

<style lang="less">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }

  .ant-modal-body {
    flex: 1;
  }
}
</style>
