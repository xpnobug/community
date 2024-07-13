<template>
  <div class="content-grid"
       style="transform: translate(0px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="box-s">
      <PictureComponent :posts="banner"/>
      <keep-alive>
        <ZskComponent :posts="postList" :loadings="loadings"/>
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
const banner = ref([]);
const ztList = ref([]);
const liveList = ref([]);
const loadings = ref(false);

const store = inject('store');
store.setLoading(true);
pageList().then(res => {
  //是否还在加载中
  if (res.status === 200){
    loadings.value = true;
    // store.setLoading(false);
  }
  postList.value = res.data.data;
  //循环输出
  postList.value.forEach((item: any) => {
    if (item.typeName === 'banner') {
      banner.value = item.articleList;
    }
    if (item.typeName === 'LT-REAI专题' || item.typeName === '功能前瞻') {
      ztList.value = item.articleList;
    }
    if (item.typeName === '七彩生活' || item.typeName === '新鲜事') {
      liveList.value = item.articleList;
    }
  })
  store.setLoading(false);
});


</script>

<style scoped>
.box-s {
  width: 1184px;
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