<template>
  <div class="content-grid"
       style="transform: translate(0px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="box-s">
      <PictureComponent :posts="banner"/>
      <keep-alive>
        <ZskComponent :dict="dictMapList" :loadings="loadings" :posts="zskList"/>
      </keep-alive>
      <ZtComponent :dict="dictMapList" :loadings="loadings" :posts="ztList"/>
      <LiveComponent :dict="dictMapList" :loadings="loadings" :posts="liveList"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {inject, reactive, ref} from "vue";
import PictureComponent from "./components/PictureComponent.vue";
import ZskComponent from "./components/ZskComponent.vue";
import ZtComponent from "@/views/newindex/components/ZtComponent.vue";
import LiveComponent from "@/views/newindex/components/LiveComponent.vue";
import {pageList} from "@/api/article";
import {useDefer} from "@/hooks/useDefer.js";
import {dictList} from "@/api/dict";

const defer = useDefer();

interface Page {
  pageSize: number;
  currentPage: number;
  count: number;
  maxPage: number;
  minPage: number;
  // firstResult: number;
  // recount: boolean;
}

const page = reactive<Page>({
  pageSize: 10,
  currentPage: 1,
  count: 10,
  maxPage: 10,
  minPage: 1,
});
const postList = ref([]);
const zskList = ref([]);
const banner = ref([]);
const ztList = ref([]);
const liveList = ref([]);
const loadings = ref(false);

const store = inject('store');
// store.setLoading(true);

const dictMapList = ref([]);
dictList('home').then((res) => {
  if (res.status === 200) {
    dictMapList.value = res.data.data;
  }
})


pageList().then((res) => {
  if (res.status === 200) {
    loadings.value = true;
  }

  postList.value = res.data.data;

  // 创建一个字典映射，将 typeName 映射到相应的数组
  const typeNameMap = {
    'banner': banner.value,
    'home-yyzsk': zskList.value,
    'home-product': zskList.value,
    'home-preview': ztList.value,
    'home-ltzt': ztList.value,
    'home-colorlife': liveList.value,
    'home-news': liveList.value
  };

  // 遍历 postList，将 articleList 推入对应的数组中
  postList.value.forEach((item: any) => {
    const targetArray = typeNameMap[item.typeName];
    if (targetArray) {
      targetArray.push(...item.articleList);
    }
  });
});




</script>

<style scoped>
.box-s {
  width: 1210px;
  transition: .5s;
}

/*.content-grid {*/
/*  padding-top: 84px;*/
/*}*/

/*设置手机端样式*/
@media screen and (orientation: portrait) {
  .box-s {
    width: 100%;
  }

  /*.content-grid {*/
  /*  padding-top: 113px;*/
  /*}*/
}
</style>