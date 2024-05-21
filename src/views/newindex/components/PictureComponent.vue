<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps(['posts'])
import type { SkeletonButtonProps, SkeletonAvatarProps } from 'ant-design-vue';
import {useRouter} from "vue-router";

const bannerList = ref([
  {
    id: "1",
    image1: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/50ef8c69-f823-4414-be5d-25e581867902.jpg',
    image2: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/f5cb6c26-f3bf-47f4-a6d0-c35c771f2c7a.jpg',
    image3: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/e1d93718-3f0c-4994-984c-4359fa342cb5.jpg',
    content1: '2023年LT-REAI团队年终总结',
    content2: 'LT-REAIPC端功能『门户DIY』重磅更新，暨2.5.0测试版更新通告',
    content3: '重要通知，需在2024年3月底前完成！附上微信小程序和APP的完整备案流程！',
    state: true
  }, {
    id: "1",
    image1: 'https://alist.reaicc.com/nas/image/jpeg/2024-04/1/50ef8c69-f823-4414-be5d-25e581867902.jpg',
    image2: '',
    image3: '',
    content1: '',
    content2: '',
    content3: '',
    state: 'true'
  }
]);
const router = useRouter();
const toUserInfo = (item: any) => {
  router.push({path: '/post/' + item.articleId})
}
</script>
<template>
  <div class="box" style="margin-bottom: 17px;">
    <div class="top" v-for="item in props.posts.slice(0,1)" :key="item.id">
<!--      <a-skeleton-image active :shape="avatarShape" />-->
      <div class="banner" @click="toUserInfo(item)"
           :style="{background: 'url('+item.coverImage+') center center / cover no-repeat rgb(255, 255, 255)'}">
        <div class="content">
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="identification"  v-for="item in props.posts.slice(1,2)" :key="item.id">
        <div class="bg-picture" @click="toUserInfo(item)"
             :style="{background: 'url('+item.coverImage+') center center / cover no-repeat rgb(255, 255, 255)'}">

          <div class="content"><span>{{ item.title }}</span>
          </div>
        </div>
        <div class="bg-picture" @click="toUserInfo(item)"  v-for="item in props.posts.slice(2,3)" :key="item.id"
             :style="{background: 'url('+item.coverImage+') center center / cover no-repeat rgb(255, 255, 255)'}">
          <div class="content"><span>{{ item.title }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box .top {
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-content: space-between;
  height: 416px;
  margin-bottom: 16px;
  position: relative;
}

.box .top .banner {
  width: 848px;
  box-shadow: rgba(94, 92, 154, .06);
  overflow: hidden;
}

.box .top .banner {
  position: relative;
  background-size: 100% 100%;
  border-radius: 12px;
  background-color: rgba(207, 208, 218, .2);
  cursor: pointer;
}

.box .top .banner .content {
  transition: .5s;
  position: absolute;
  /*height: 56px;*/
  padding: 10px 22px;
  bottom: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  background: rgba(21, 21, 31, .6);
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.box .top .banner .content, .box .top .banner {
  width: 848px;
  box-shadow: rgba(94, 92, 154, .06);
  overflow: hidden;
}

/*右边图片*/
.box .top .identification {
  width: 320px;
  opacity: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.box .top .identification .bg-picture {
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  background-color: rgba(207, 208, 218, .2);
  overflow: hidden;
}

.box .top .identification .bg-picture .content {
  transition: .5s;
  position: absolute;
  display: block;
  width: 320px;
  /*height: 56px;*/
  padding: 10px 22px;
  bottom: 0;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  line-height: 36px;
  background: rgba(21, 21, 31, .6);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content-hover {
  display: block !important;
  height: 72px !important;
  line-height: 28px !important;
  text-overflow: clip !important;
  white-space: normal !important;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .box .top {
    margin: 12px;
    flex-direction: column;
    height: 300px;
  }

  .box .top .banner {
    /*margin: 5px;*/
    width: 100%;
    height: 50%;
  }

  .box .top .identification {
    width: 100%;
    flex-direction: row;
  }

  .box .top .identification .bg-picture {
    width: 49%;
    height: 140px;
  }

  .box .top .banner .content {
    font-size: 12px;
    line-height: 20px;
  }

  .box .top .identification .bg-picture .content {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>