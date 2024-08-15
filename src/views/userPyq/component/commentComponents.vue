<template>
  <u-comment :config="config" @submit="submit">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
import {reactive, watch, ref} from 'vue';
import emoji from '@/assets/emoji';
import { CommentApi, ConfigApi, isArray, isObject, SubmitParamApi, UToast } from 'undraw-ui';
import { dayjs } from '@/plugins/day';
import { addComment } from "@/api/comment";
import { message } from "ant-design-vue";

// 定义组件名称
defineOptions({
  name: 'Comment'
});

// 获取父组件传递的 props
const props = defineProps<{ isClick: boolean, articleId,
  isShowCom , comArticleId , pyqCommentList
}>();

// 评论转换函数
function convertComment(comments: any, callback: (v: CommentApi) => void) {
  if (isArray(comments)) {
    comments.forEach((t: any) => {
      convertComment(t, callback);
    });
  } else if (isObject(comments)) {
    if (comments.reply) {
      const replies = comments.reply.list;
      if (replies && replies.length > 0) {
        convertComment(replies, callback);
      }
    }
    callback(comments);
  }
  return comments;
}

// 配置对象
const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: false,
  showLikes: false,
  showForm: props.isClick,
  showContent: false
});

// 监听 props.isClick 的变化
watch(() => props.isClick, (newVal) => {
  config.showForm = newVal;
});

// 评论时间格式化回调
function commentCall(v: CommentApi) {
  v.createTime = dayjs(v.createTime).fromNow();
}

// 初始化评论数据
// const comments: CommentApi[] = [];
// commentList(page).then(res => {
//   const fetchedComments = res.data.data;
//   fetchedComments.forEach((commentData: any) => {
//     const comment: CommentApi = {
//       id: commentData.id,
//       articleId: commentData.articleId,
//       parentId: commentData.parentId,
//       uid: commentData.uid,
//       content: commentData.content,
//       createTime: commentData.createTime,
//       user: {
//         username: commentData.user.username,
//         avatar: commentData.user.avatar
//       },
//       reply: commentData.reply
//     };
//     if (props.articleId === commentData.articleId){
//       props.comArticleId(commentData.articleId);
//       comments.push(comment);
//     }
//   });
//
//   setTimeout(() => {
//     config.comments = convertComment(comments, commentCall);
//     config.showContent = true;
//     props.isShowCom(config.showContent)
//   }, 200);
// });
const comments = ref<CommentApi[]>([]);
// 监听 props 中 pyqCommentList 的变化
watch(
    () => props.pyqCommentList,
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

        // 检查是否与当前文章 ID 匹配
        if (props.articleId === commentData.articleId) {
          // 更新文章 ID
          props.comArticleId(commentData.articleId);
          // 添加评论到 comments 数组
          comments.value.push(comment);
        }
      });

      // 等待一段时间后执行的逻辑
      setTimeout(() => {
        // 将 comments 数组传递给 convertComment 函数处理
        config.comments = convertComment(comments.value, commentCall);
        config.showContent = true;
        props.isShowCom(config.showContent);
      }, 200);
    },
    { immediate: true } // 立即执行一次，以便初始数据也能处理
);



// 获取当前登录用户ID
const userId = localStorage.getItem('userId') ?? '';
const userInfo =  JSON.parse(localStorage.getItem('userInfo')) ?? '';
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: userInfo.userId,
    username: userInfo.username,
    avatar: userInfo.avatar
  };
  config.showContent = true;
}, 500);

// 提交评论事件
// let tempId = 100;
const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
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
        finish(convertComment(comment, commentCall));
      }
    });
    // UToast({ message: '评论成功!', type: 'info' });
  }, 200);
};
</script>

<style scoped>
.u-comment {
  /*透明色*/
  color: var(--text_color_secondary);
  background-color: rgba(255, 255, 255, 0);
  padding: 0 !important;
  margin-top: 0 !important;
}

::v-deep(.comment-form) {
  padding-top: 0 !important;
}

::v-deep(.header) {
  display: none;
}

::v-deep(.title) {
  display: none !important;
}

::v-deep(.comment) {
  padding: 0;
}

/*::v-deep(.comment-primary) {*/
/*  margin-left: 0;*/
/*}*/

::v-deep(.comment-list-wrapper) {
  padding: 10px !important;
}

/*::v-deep(.comment-sub) {*/
/*  display: none;*/
/*}*/
::v-deep(.el-avatar--circle){
  border-radius: 5px;
}

::v-deep(.reply) {
  margin-top: 0 !important;
}

::v-deep(.reply-box) {
  margin-top: 0 !important;
  background: var(--post_aside_background_color);
}

::v-deep(.comment-main .user-info .username .name) {
  color: var(--text_color_primary);
  opacity: 0.6;
}

::v-deep(.txt-box over-hidden) {
  color: var(--text_color_secondary);
}
</style>