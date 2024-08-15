<template>
  <a-table
      :columns="columns"
      :data-source="postList"
      @resizeColumn="handleResizeColumn"
      :pagination="false"
       >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'title'">
        <p class="showStyle">{{ record.title }}</p>
      </template>
      <template v-if="column.key === 'content'">
        <p class="showStyle">{{ record.content }}</p>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <a-button type="primary" size="small" style="margin-right:10px" @click="upd(record.articleId)">修改</a-button>
        <a-button type="primary" danger size="small" @click="del(record.articleId)">删除</a-button>
      </template>
    </template>
  </a-table>
  <a-pagination v-model:current="current" @change="onChange" :total="page.count" />
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue';
import type { TableColumnsType } from 'ant-design-vue';
import {deleteById, listByUserId} from "@/api/article";
import {message} from "ant-design-vue";
const current = ref(1);

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
  count: 0,
  maxPage: 10,
  minPage: 1,
});
const postList = ref([]);
const initLoading = ref(true);
const userId = localStorage.getItem('userId');
const showList = () => {
  listByUserId(page, userId).then(res => {
    page.count = res.data.count;
    page.maxPage = res.data.maxPage;
    page.minPage = res.data.minPage;
    page.pageSize = res.data.pageSize;
    //.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)
    postList.value = res.data.data;
    initLoading.value = false;
  })
}
showList();
const onChange = () => {
  page.currentPage = current.value;
  showList();
  console.log('change', current.value);
}

const columns = ref<TableColumnsType>([
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '内容',
    key: 'content',
    dataIndex: 'content',
    resizable: true,
    width: 150,
  },
  {
    title: '状态',
    dataIndex: 'articleStatus',
    key: 'articleStatus',
    resizable: true,
    width: 100,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    title: '发布时间',
    dataIndex: 'publishDate',
    key: 'publishDate',
    resizable: true,
    width: 200,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 150,
  },
]);
function handleResizeColumn(w, col) {
  col.width = w;
}

const upd = (val) => {
  console.log('upd',val)
}
const del = (val) => {
  deleteById(val).then(res => {
    if (res.status === 200) {
      message.success("删除成功");
      showList();
    }
  })
}
</script>
<style scoped>
.showStyle{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
