<template>
  <a-form :model="formState">
    <a-form-item>
      <a-radio-group v-model:value="formState.resource" @change="handleChange(formState.resource)">
        <a-radio value="1">图文</a-radio>
        <a-radio value="2">音乐</a-radio>
      </a-radio-group>
    </a-form-item>

    <div v-if="formState.resource === '1'">
      <a-form-item>
        <a-textarea v-model:value="formState.content" placeholder="这一刻的想法..."/>
      </a-form-item>
      <Upload :imgLists="imgLists"/>
    </div>

    <div v-if="formState.resource === '2'">
      <a-form-item>
        <a-textarea v-model:value="formState.content" placeholder="这一刻的想法..."/>
      </a-form-item>
      <u-search :config="config" @submit="submit"></u-search>
      <ListMusicComponents :musicInfo="musicInfo" :musicList="musicList"/>
    </div>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import {inject, provide, reactive, ref} from 'vue';
import Upload from "@/views/Edit/compontents/upload.vue";
import {add} from "@/api/article";
import {message} from "ant-design-vue";
import {SearchConfig} from "undraw-ui";
import {getMusicDetail, searchHotMusic, searchMusic} from "@/api/music";
import ListMusicComponents from "@/views/userPyq/component/listMusicComponents.vue";
import {addMusic} from "@/api/handleMusic";

// const onSubmit = () => {
//   console.log('submit!', toRaw(formState));
// };


interface Music {
  limit: number,
  offset: number,
  keywords: string
}

const musicForm = reactive<Music>({
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
  musicForm.keywords = val;
  searchMusic(musicForm).then(res => {
    const map = res.data.result.songs.map(item => item.id);
    getMusicDetail(map).then(res => {
      musicList.value = res.data.songs.map(item => {
        return {
          songName: item.name,
          singer: item.ar[0].name,
          songImg: item.al.picUrl,
          songId: item.id
        }
      });
      console.log(musicList.value);
    })
  })
}

interface FormState {
  resource: string;
  articleId: string;
  title: string;
  content: string;
  author: string;
  tag: string;
  coverImage: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  collectCount: number;
  summary: string;
  articleStatus: string;
  source: string;
  url: string;
  recommendations: number;
  wordCount: number;
  readingTime: number;
  isFeatured: boolean;
  relatedArticles: string;
  editorialSuggestions: string;
  seoInformation: string;
  copyright: string;
  publishPlatform: string;
  userId: string;
  avatar: string;
  imgList: string[];
}

interface musicFormState {
  userId: string;
  articleId: string;
  songName: string;
  singer: string;
  songUrl: string;
  songImg: string;
  songId: string;
}

const musicFormState = reactive<musicFormState>({
  userId: "",
  articleId: "",
  songName: "",
  singer: "",
  songUrl: "",
  songImg: "",
  songId: "",
});

//时间
const date = new Date();
//时间戳
const timestamp = Date.now();
//日期
const year = date.getFullYear();
const formState = reactive<FormState>({
  resource: '1',
  articleId: "",
  title: "",
  content: "",
  author: "",
  tag: "",
  coverImage: "",
  readCount: 0,
  likeCount: 0,
  commentCount: 0,
  shareCount: 0,
  collectCount: 0,
  summary: "",
  articleStatus: "已发布",
  source: "",
  url: "",
  recommendations: 0,
  wordCount: 0,
  readingTime: 0,
  isFeatured: false,
  relatedArticles: "",
  editorialSuggestions: "",
  seoInformation: "",
  copyright: "",
  publishPlatform: "friendCircle",
  userId: "",
  avatar: "",
  imgList: [],
});

const imgLists = (value) => {
  formState.imgList = value;
}
provide('imgFile',null);

const musicInfo = (value) => {
  musicFormState.songImg = value.songImg;
  musicFormState.userId = userId;
  musicFormState.songName = value.songName;
  musicFormState.singer = value.singer;
  musicFormState.songId = value.songId;
}


const handleChange = (v) => {
  formState.resource = v;
}
//接收传递过来的方法
const initList = inject('initList');
const onClose = inject('onClose');
const userId = localStorage.getItem("userId");
const onSubmit = () => {
  formState.userId = userId;
  formState.tag = "pyq";
  add(formState).then(res => {
    if (formState.resource === '2'){
      musicFormState.articleId = res.data.data
      addMusic(musicFormState)
    }
    if (res.status === 200) {
      message.success("发布成功");
      //关闭抽屉
      onClose();
      //刷新列表
      initList();
    }
  })
}
</script>

