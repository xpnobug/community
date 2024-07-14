<template>
  <footer class="post-footer g-clear-both">
    <div class="post-info g-left g-txt-ellipsis">
      <span class="post-date">{{ timeUtils.convertTime(prop.postInfo.publishDate, true) }}</span>
    </div>
    <div class="post-fun g-right">
      <div :data-index="prop.index + '-mxLp'" class="fun-ico g-txt-hide" data-action="fun">互动</div>
      <div :id="prop.postInfo.articleId" class="fun-box">
        <div :class="isLikedByUserOrGuest ? 'fun-btn like allow liked':'fun-btn like allow'" :data-index="prop.index"
             data-action="like"
             data-likedtext="取消" data-liketext="赞" @click="postLike(prop.postInfo, $event.target)">
          {{ isLikedByUserOrGuest ? '取消' : '赞' }}
        </div>
        <div :data-index="prop.index + '-mxLp'" class="fun-btn comment allow" data-action="comment" data-count="0"
             data-people="0" @click="handleComment">评论
        </div>
        <div v-if="userId != null && userId === prop.postInfo.userId" :data-index="prop.index + '-mxLp'"
             class="fun-btn del allow">
          <a-popconfirm
              cancel-text="No"
              ok-text="Yes"
              title="确定删除?"
              @confirm="deleteInfo(prop.postInfo.articleId)"
          >
            <a>删除</a>
          </a-popconfirm>

        </div>
      </div>
    </div>
  </footer>
  <aside :id="'like-'+prop.postInfo.articleId" class="post-aside show">
    <!-- 显示点赞区域，如果 isLike 为 true -->
    <div v-show="isLike" :id="'post-'+prop.postInfo.articleId+'-mxLp-like'"
         class="fun-area post-like g-clear-both show">
      <ul class="like-userslist g-right-flex">
        <!-- 遍历格式化的点赞列表显示每个登录用户和访客统计 -->
        <li v-for="name in displayNames" :key="name" class="like-name g-user-select" data-separator=",">
          {{ name }}
        </li>
        <!-- 如果有访客点赞，显示访客统计 -->
        <li v-if="guestCount > 0" class="like-name more">
          {{ guestCount + '位访客' }}
        </li>
      </ul>
    </div>
    <div :id="'post-'+prop.postInfo.articleId+'-mxLp-comment'"
         :class="['fun-area post-comment g-clear-both index', { show: isClick || isShowComment && commentArticleId === prop.postInfo.articleId  }]">
      <CommentComponents :articleId="prop.postInfo.articleId" :comArticleId="comArticleId" :isClick="isClick"
                         :isShowCom="isShowCom" :pyqCommentList="prop.pyqCommentList"/>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import {computed, inject, nextTick, onMounted, reactive, ref} from 'vue';
import {timeUtils} from "@/store/TimeUtil";
import {giveALike} from "@/api/likes";
import useUniqueId from "@/hooks/useUniqueId";
import CommentComponents from "@/views/userPyq/component/commentComponents.vue";
import {deleteById} from "@/api/article";
import {message} from "ant-design-vue";

// 定义组件属性
const prop = defineProps(['postInfo', 'index', 'likeList', 'initLikesList', 'ipAddress','pyqCommentList']);
 // watch(() => prop.likeList, (newVal) => {
//   // 监听likeList的变化，更新点赞状态
//   console.log('likeList变化了', newVal);
// })

// 从 localStorage 中获取用户ID
const userId = localStorage.getItem('userId');

// 计算属性，判断是否有点赞
const isLike = computed(() => {
  return prop.likeList.some(item => item.articleId === prop.postInfo.articleId);
});

// 计算登录用户的用户名列表
const displayNames = computed(() => {
  return prop.likeList
      .filter(item => item.articleId === prop.postInfo.articleId && item.userId !== null)
      .map(item => item.userName);
});

// 计算点赞的访客数量
const guestCount = computed(() => {
  return prop.likeList
      .filter(item => item.articleId === prop.postInfo.articleId && item.userId === null)
      .length;
});

const userAgent = navigator.userAgent;
const guestId = useUniqueId(prop.ipAddress, userAgent);
// 计算属性，判断当前用户是否已点赞
const isLikedByUserOrGuest = computed(() => {
  return prop.likeList.some(item => {
    // 判断当前用户是否已点赞或访客是否已点赞
    if (item.guestId != null) {
      return item.guestId === guestId.uniqueId.value && item.articleId === prop.postInfo.articleId;
    } else {
      return item.userId === userId && item.articleId === prop.postInfo.articleId;
    }
  });
});


// 点赞参数
const likes = reactive({
  likeId: '',
  articleId: '',
  userId: '',
  guestId: '',
});

// 帖子参数
const postsParam = reactive({
  ajaxLock: {
    like: false,
    comment: false,
    delete: false,
    commentDelete: false
  },
  currentFunBoxPost: undefined
});

// 分页参数
const page = reactive({
  pageSize: 10,
  currentPage: 1,
  count: 10,
  maxPage: 10,
  minPage: 1,
});

// 点赞功能
const postLike = (info, button) => {
  if (!postsParam.ajaxLock.like) {
    postsParam.ajaxLock.like = true; // 锁定点赞操作
    button.classList.add('wait'); // 添加等待样式

    likes.articleId = info.articleId;
    likes.userId = userId;
    likes.guestId = guestId.uniqueId.value;
    // 发送点赞请求
    giveALike(likes).then(res => {
      nextTick(() => {
        // if (isLikedByUser.value) {
        //   // 如果当前用户已点赞，则取消点赞
        //   prop.likeList = prop.likeList.filter(item => !(item.userId === userId && item.articleId === info.articleId));
        // } else {
        //   // 如果当前用户未点赞，则添加点赞
        //   prop.likeList.push({
        //     likeId: res.data.likeId,
        //     articleId: info.articleId,
        //     userId: userId,
        //     userName: localStorage.getItem('userName')
        //   });
        // }

        prop.initLikesList(); // 初始化点赞列表

        postsParam.ajaxLock.like = false; // 解锁点赞操作
        button.classList.remove('wait'); // 移除等待样式
      });
    }).catch(err => {
      console.error(err);
      postsParam.ajaxLock.like = false; // 解锁点赞操作
      button.classList.remove('wait'); // 移除等待样式
    });
  }
};
const isClick = ref(false);
const handleComment = () => {
  console.log(isClick)
  isClick.value = !isClick.value;
}
//接收传递过来的方法
const initList = inject('initList');
const deleteInfo = (v) => {
  deleteById(v).then(res => {
    if (res.status === 200) {
      message.success("删除成功");
      initList();
    }
  })
}

const isShowComment = ref(false);
const isShowCom = (value) => {
  isShowComment.value = value;
}
const commentArticleId = ref(false);
const comArticleId = (value) => {
  commentArticleId.value = value;
}

</script>

<style scoped>

</style>
