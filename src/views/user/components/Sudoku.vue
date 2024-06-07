<template>
  <div class="tl-photos">
    <img
        v-for="item in props.imgList"
        :src="item" :width="200"
        @click="visible = true"
    />
  </div>
  <div style="display: none">
    <a-image-preview-group
        :preview="{ visible, onVisibleChange: vis => (visible = vis) }">
      <a-image
          v-for="item in props.imgList" :src="item"
      />
    </a-image-preview-group>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue';

const props = defineProps(['imgList'])
const visible = ref(false);
</script>

<style scoped>
.tl-photos{
  display: flex;
  width: 400px;
  flex-wrap: wrap;
}
.tl-photos img{
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  height: 130px;
}
/*只有一张图片*/
.tl-photos>img:only-child{
  width: 50%;
  height: 50%;
}
/*两张图片*/
.tl-photos>img:first-child:nth-last-child(2),
.tl-photos>img:nth-child(2):nth-last-child(1){
  width: 198px;
}
.tl-photos>img:nth-child(2):nth-last-child(1){
  margin-left: 5px;
}
/*三张图片*/
.tl-photos>img:first-child:nth-last-child(3),
.tl-photos>img:nth-child(2):nth-last-child(2),
.tl-photos>img:nth-child(3):nth-last-child(1){
  width: 130px;
}
.tl-photos>img:nth-child(2):nth-last-child(2),
.tl-photos>img:nth-child(3):nth-last-child(1){
  margin-left: 5px;
}
/*四张图片*/
.tl-photos>img:first-child:nth-last-child(4),
.tl-photos>img:first-child:nth-last-child(4) ~ img{
  width: 198px;
}
.tl-photos>img:nth-child(2):nth-last-child(3),
.tl-photos>img:nth-child(4):nth-last-child(1){
  margin-left: 5px;
}
.tl-photos>img:nth-child(2):nth-last-child(3) ~ img{
  margin-top: 5px;
}
/*五张图片*/
.tl-photos>img:first-child:nth-last-child(n + 5),
.tl-photos>img:first-child:nth-last-child(n + 5) ~ img{
  width: 130px;
}
.tl-photos>img:nth-child(3n -1),
.tl-photos>img:nth-child(3n){
  margin-left: 5px;
}
/*解决margin-left 只有4张照片的特殊情况*/
.tl-photos>img:nth-child(3):nth-last-child(2){
  margin-left: 0;
}
.tl-photos>img:nth-child(3) ~ img{
  margin-top: 5px;
}
</style>
