<template>
  <div class="content-grid">
    <div class="content-view">
      <div class="section-banner"
           style="background: url(https://alist.reaicc.com/nas/image/jpeg/2024-04/1/084059cc-5f23-45eb-b1b8-789c74d6a908.jpg) center center / cover no-repeat; cursor: pointer;">
        <p class="section-banner-title"></p>
        <p class="section-banner-text"></p>
      </div>
      <div class="grid grid-3-6-3 mobile-prefer-content">
        <LeftComponent/>
        <MainCompontent/>
        <RightCompontent/>
      </div>
    </div>
  </div>
</template>

<script>
import LeftComponent from "@/views/dynamic/components/LeftComponent.vue";
import MainCompontent from "@/views/dynamic/components/MainCompontent.vue";
import RightCompontent from "@/views/dynamic/components/RightCompontent.vue";

export default {
  name: "index",
  components: {RightCompontent, MainCompontent, LeftComponent}
}
</script>

<style scoped>
@media screen and (min-width: 1366px) {
  .content-grid {
    margin: auto;
    transform: none !important;
  }
}

@media screen and (orientation: portrait) {
  /*.content-grid {*/
  /*  margin: 10px;*/
  /*  padding-top: 128px !important;*/
  /*}*/

  .grid {
    display: block !important;
  }
}

.content-grid {
  /*max-width: 1184px;*/
  /*padding: 54px 0 32px;*/
  /*padding-top: 84px;*/
  transition: transform 0.4s ease-in-out 0s;
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