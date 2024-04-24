<template>
  <div class="content-grid">
    <div>
      <div class="section-banner"
           style="background: url(https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/c6b949128885afaa4afe6140df0ae59b.png?imageMogr2/crop/2368x320/gravity/center) center center / cover no-repeat; cursor: pointer;">
        <p class="section-banner-title"></p>
        <p class="section-banner-text"></p>
      </div>
      <div class="grid grid-3-6-3 mobile-prefer-content">
        <LeftComponent/>
        <MainCompontent/>
        <LeftComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import LeftComponent from "@/views/dynamic/components/LeftComponent.vue";
import MainCompontent from "@/views/dynamic/components/MainCompontent.vue";

export default {
  name: "index",
  components: {MainCompontent, LeftComponent}
}
</script>

<style scoped>
@media screen and (min-width: 1366px) {
  .content-grid {
    margin: auto;
    transform: none !important;
  }
}
@media screen and (max-width: 768px) {
  .content-grid {
    margin: 10px;
    padding-top: 128px!important;
  }
  .grid {
    display: block!important;
  }
}
.content-grid {
  max-width: 1184px;
  padding: 54px 0 32px;
  padding-top: 84px;
  transition: transform 0.4s ease-in-out 0s;
}
.grid {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  -ms-flex-align: start;
  align-items: start;
}
.grid.grid-3-6-3 {
  grid-template-areas: 'sidebar1 content sidebar2';
  grid-template-columns: 24.986486% 47.324324% 24.986486%;
}

.content-grid .grid {
  margin-top: 32px;
}

.section-banner {
  min-height: 160px;
  padding: 52px 60px 0 200px;
  border-radius: 12px;
  /* background: url(/img/banner/banner-bg.png) no-repeat center; */
  position: relative;
  cursor: pointer;
}
</style>