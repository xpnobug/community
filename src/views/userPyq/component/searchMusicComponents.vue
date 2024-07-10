<template>
  <u-search :config="config" @submit="submit"></u-search>

  <ListMusicComponents :musicList="musicList"/>
</template>
<script setup lang="ts">
import {reactive, ref} from 'vue'
import { SearchConfig } from 'undraw-ui'
import {searchHotMusic, searchMusic} from "@/api/music";
import ListMusicComponents from "@/views/userPyq/component/music/listMusicComponents.vue";
interface Music {
  limit: number,
  offset: number,
  keywords: string
}

const formState = reactive<Music>({
  limit: 10,
  offset: 0,
  keywords: ''
});

const config = ref<SearchConfig>({
  search: '', //可选输入框默认值
  keywords: ['斗罗大陆', '斗破苍穹', '吞噬星空', '凡人修仙传', '一念永恒'], // 搜索框关键字滚动
  hotSearchList: [
    '斗罗大陆',
    '斗破苍穹',
    '吞噬星空',
    '凡人修仙传',
    '一念永恒',
    '完美世界',
    '鬼灭之刃',
    '间谍过家家',
    '武动乾坤',
    '神印王座'
  ] // top10 热门搜索 最多显示10条数据
})
searchHotMusic().then(res => {
// 只提取每个对象的 first 属性
  config.value.keywords = res.data.result.hots.map(item => item.first);
  config.value.hotSearchList = res.data.result.hots.map(item => item.first);
});
const musicList = ref([]);
const submit = (val: string) => {
// 搜索音乐
  formState.keywords = val;
  searchMusic(formState).then(res => {
    musicList.value = res.data.result;
  })

}
</script>

<style lang="scss" scoped></style>
