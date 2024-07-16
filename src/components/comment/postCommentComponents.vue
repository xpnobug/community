<template>
  <u-comment :config="config" @submit="submit" @before-data="beforeData">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
    <a-empty v-if="comments.length === 0" description="没有数据"/>
  </u-comment>

</template>

<script lang="ts" setup>
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/assets/emoji';
import {CommentApi, ConfigApi, SubmitParamApi} from 'undraw-ui';
import {dayjs} from '@/plugins/day';
import {addComment, commentList} from "@/api/comment";
import {reactive, ref, watch} from "vue";
import page from "@/api/base";
import {message} from "ant-design-vue";
import {defineProps} from "vue/dist/vue";

defineOptions({
  name: 'comment'
})

// 获取父组件传递的 props
const props = defineProps<{ articleId }>();

const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: false,
  showLikes: false
})

// 评论数据
const pyqCommentList = ref([]); // 用于存储评论列表
const getCommentList = () => {
  commentList(page, props.articleId).then(res => {
    pyqCommentList.value = res.data.data; // 更新评论列表
  });
};
watch(() => props.articleId,
    (newVal) => {
      getCommentList();
    })

const comments = ref<CommentApi[]>([]);
// 监听 props 中 pyqCommentList 的变化
watch(
    () => pyqCommentList.value,
    (newVal) => {
      // 清空 comments 数组
      comments.value = [];

      // 遍历新的评论数据
      newVal.forEach((commentData: any) => {
        const comment: CommentApi = {
          id: commentData.id,
          articleId: commentData.articleId,
          parentId: commentData.parentId,
          uid: commentData.uid,
          content: commentData.content,
          createTime: commentData.createTime,
          user: {
            username: commentData.user.username,
            avatar: commentData.user.avatar
          },
          reply: commentData.reply
        };
        // 添加评论到 comments 数组
        comments.value.push(comment);
      });

      // 等待一段时间后执行的逻辑
      setTimeout(() => {
        // 将 comments 数组传递给 convertComment 函数处理
        config.comments = comments.value;
        config.showContent = true;
      }, 200);
    },
    {immediate: true} // 立即执行一次，以便初始数据也能处理
);


// 评论数据
// 获取当前登录用户ID
const userId = localStorage.getItem('userId') ?? '';
const userInfo = JSON.parse(localStorage.getItem('userInfo')) ?? '';
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: userInfo.userId,
    username: userInfo.username,
    avatar: userInfo.avatar
  };
}, 500);

// 评论提交事件
const submit = ({content, parentId, files, finish}: SubmitParamApi) => {
  console.log('提交评论: ' + content, parentId, files);
  const comment: CommentApi = {
    id: null,
    articleId: props.articleId,
    parentId: parentId,
    uid: config.user.id,
    content: content,
    createTime: new Date().toISOString(),
    user: {
      username: config.user.username,
      avatar: config.user.avatar
    },
    reply: null
  };
  setTimeout(() => {
    addComment(comment).then(res => {
      if (res.status === 200) {
        message.success(res.data.message);
        finish(comment);
      }
    });
    // UToast({ message: '评论成功!', type: 'info' });
  }, 200);
};

// 加载前评论数据处理
function beforeData(val: any) {
  val.createTime = dayjs(val.createTime).fromNow()
}
</script>
