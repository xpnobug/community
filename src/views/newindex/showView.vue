<template>
  <div class="content-grid"
       style="transform: translate(0px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="box-s">
      <PictureComponent :posts="banner"/>
      <keep-alive>
        <ZskComponent :posts="zskList" :loadings="loadings"/>
      </keep-alive>
      <ZtComponent :posts="ztList" :loadings="loadings"/>
      <LiveComponent v-if="defer" :posts="liveList" :loadings="loadings"/>
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
import { useDefer } from "@/hooks/useDefer.js";
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
store.setLoading(true);

pageList().then((res) => {
  if (res.status === 200) {
    loadings.value = true;
  }

  postList.value = res.data.data;

  // 创建一个统一的结果列表
  const categorizedArticles = {
    zskList: [],
    banner: [],
    ztList: [],
    liveList: []
  };

  // 创建一个映射对象，将 typeName 映射到相应的列表
  const typeNameToListMap: { [key: string]: string } = {
    'home-yyzsk': 'zskList',
    '产品共创': 'zskList',
    'banner': 'banner',
    'LT-REAI专题': 'ztList',
    '功能前瞻': 'ztList',
    '七彩生活': 'liveList',
    '新鲜事': 'liveList'
  };

  // 处理每个 item，将 articleList 归类到统一结果列表中
  postList.value.forEach((item: any) => {
    const listName = typeNameToListMap[item.typeName];
    if (listName) {
      categorizedArticles[listName].push(...item.articleList);
    }
  });

  // 将结果列表中的数据赋值到相应的 ref 中
  zskList.value = categorizedArticles.zskList;
  banner.value = categorizedArticles.banner;
  ztList.value = categorizedArticles.ztList;
  liveList.value = categorizedArticles.liveList;

  store.setLoading(false);
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