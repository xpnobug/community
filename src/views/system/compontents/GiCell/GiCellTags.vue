<template>
  <arco-overflow-list v-if="data.length">
    <arco-tag v-for="(item, index) in data" :key="index" size="small">
      {{ item }}
    </arco-tag>
    <template #overflow="{ number }">
      <arco-popover :content-style="{ maxWidth: '300px', padding: '8px 12px' }">
        <arco-tag color="arcoblue" size="small">+{{ number }}</arco-tag>
        <template #content>
          <arco-space wrap>
            <arco-tag v-for="tag in data.filter((i, n) => n >= data.length - number)" :key="tag" size="small">
              {{ tag }}
            </arco-tag>
          </arco-space>
        </template>
      </arco-popover>
    </template>
  </arco-overflow-list>
</template>

<script lang="ts" setup>
defineOptions({ name: 'GiCellTags' })

withDefaults(defineProps<Props>(), {
  data: () => []
})

interface Props {
  data: string[]
}
</script>

<style lang="scss" scoped></style>
