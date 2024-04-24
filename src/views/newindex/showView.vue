<template>
  <div class="content-grid"
       style="transform: translate(0px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="box-s">
      <PictureComponent/>
      <ZskComponent/>
    </div>
  </div>
</template>
<script>
import PictureComponent from "./components/PictureComponent.vue";
import ZskComponent from "./components/ZskComponent.vue";
export default {
  name: "new_index",
  components: {ZskComponent, PictureComponent}
}
</script>

<style scoped>
.box-s {
  width: 1184px;
  transition: .5s;
}
.content-grid{
  padding-top: 84px;
}
/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .box-s {
    width: 100%;
  }
  .content-grid{
    padding-top: 113px;
  }
}
</style>