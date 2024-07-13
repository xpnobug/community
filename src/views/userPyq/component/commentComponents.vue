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
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from '@/assets/emoji'
import {reactive, watch} from 'vue'
import {CommentApi, ConfigApi, isArray, isObject, SubmitParamApi, UToast} from 'undraw-ui'
// 相对时间
import {dayjs} from '@/plugins/day'

defineOptions({
  name: 'comment'
})

const prop = defineProps(["isClick"]);

function convertComment(comments: any, callback: (v: CommentApi) => void) {
  if (isArray(comments)) {
    comments.forEach((t: any) => {
      convertComment(t, callback)
    })
    return comments
  } else if (isObject(comments)) {
    if (comments.reply) {
      let replys = comments.reply.list
      if (replys && replys.length > 0) {
        convertComment(replys, callback)
      }
    }
    callback(comments)
    return comments
  }
}

const comments = []

const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: false,
  showLikes: false,
  showForm: prop.isClick,
  showContent: false
})

// 使用 watch 来监听 prop.isClick 的变化
watch(
    () => prop.isClick,
    (newVal) => {
      config.showForm = newVal;
    }
);

function commentCall(v: CommentApi) {
  v.createTime = dayjs(v.createTime).fromNow()
}

// 评论数据
setTimeout(() => {
  // 当前登录用户数据
  config.user = {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100'
  }
  config.comments = convertComment(comments, v => commentCall(v))
  config.showContent = true
}, 500)

if (comments.length > 0 || config.comments.length > 0) {
  config.showContent = true
}

// 评论提交事件
let temp_id = 100
// 提交评论事件
const submit = ({content, parentId, files, finish}: SubmitParamApi) => {
  console.log('提交评论: ' + content, parentId, files)

  const comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    content: content,
    createTime: new Date().toString(),
    user: {
      username: config.user.username,
      avatar: config.user.avatar
    },
    reply: null
  }
  setTimeout(() => {
    finish(convertComment(comment, v => commentCall(v)))
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}
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

::v-deep(.comment-primary) {
  margin-left: 0;
}

::v-deep(.comment-list-wrapper) {
  padding: 0 !important;
}

::v-deep(.comment-sub) {
  display: none;
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