<template>
  <div class="content-grid"
       style="transform: translate(0px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="box-s">
      <PictureComponent :posts="banner"/>
      <ZskComponent :posts="postList" :loadings="loadings"/>
      <ZtComponent :posts="postList"/>
      <LiveComponent :posts="postList"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {watch, reactive, ref} from "vue";
import PictureComponent from "./components/PictureComponent.vue";
import ZskComponent from "./components/ZskComponent.vue";
import ZtComponent from "@/views/newindex/components/ZtComponent.vue";
import LiveComponent from "@/views/newindex/components/LiveComponent.vue";

import {pageList} from "@/api/article";

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
const loadings = ref(false);
pageList(page).then(res => {
  //是否还在加载中
  if (res.status === 200){
    loadings.value = true;
  }
  postList.value = res.data.data;
  //循环输出
  postList.value.forEach((item: any) => {
    if (item.typeName === 'banner') {
      // console.log(item.articleList)
      banner.value = item.articleList;
    }
  })
});


</script>

<style scoped>
.box-s {
  width: 1184px;
  transition: .5s;
}

.content-grid {
  padding-top: 84px;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .box-s {
    width: 100%;
  }

  .content-grid {
    padding-top: 113px;
  }
}
</style>