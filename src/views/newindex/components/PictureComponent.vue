<script setup lang="ts">
import {computed} from "vue";
import {useRouter} from "vue-router";

const props = defineProps(['posts'])

const router = useRouter();
const toPostInfo = (item: any) => {
  router.push({path: '/post', query: {articleId: item.articleId}})
}
</script>
<template>
  <div class="box" style="margin-bottom: 17px;">
    <div v-for="item in posts.slice(0,1)" :key="item.id" class="top">
      <!--      <a-skeleton-image active :shape="avatarShape" />-->
      <div class="banner" @click="toPostInfo(item)"
           :style="{background: 'url('+item.coverImage+') center center / cover no-repeat rgb(255, 255, 255)'}">
        <div class="content">
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div v-for="item in props.posts.slice(1,2)" :key="item.id" class="identification">
        <div class="bg-picture" @click="toPostInfo(item)"
             :style="{background: 'url('+item.coverImage+') center center / cover no-repeat rgb(255, 255, 255)'}">

          <div class="content"><span>{{ item.title }}</span>
          </div>
        </div>
        <div class="bg-picture" @click="toPostInfo(item)"  v-for="item in props.posts.slice(2,3)" :key="item.id"
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
  height: 360px;
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
  width: 345px;
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
  height: 170px;
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
@media screen and (orientation: portrait) {
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