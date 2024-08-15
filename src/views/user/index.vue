
<script setup lang="ts">
import UserHeaderComponent from "@/views/user/components/UserHeaderComponent.vue";
import SilderHomeComponent from "@/views/user/components/SilderHomeComponent.vue";
import LeftComponent from "@/views/user/components/LeftComponent.vue";
import UserMainComponent from "@/views/user/components/UserMainComponent.vue";
import RightComponent from "@/views/user/components/RightComponent.vue";
import {getCurrentInstance, reactive, ref} from "vue";
import UserListComponent from "@/views/userMembers/components/UserListComponent.vue";
import UserSearchComponent from "@/views/userMembers/components/UserSearchComponent.vue";
import ImgViewComponent from "@/views/user/components/ImgViewComponent.vue";
import VideViewComponent from "@/views/user/components/VideViewComponent.vue";


const menuIdValueSet = ref('1');
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on("menuId", (param: any) => {
  menuIdValueSet.value = param;
})

</script>

<template>
  <div class="content-grid"
       style=" transform: translate(261.5px, 0px); transition: transform 0.4s ease-in-out 0s;">
    <div class="content-view">
      <div class="loading" style="display: none;">
        <div class="page-loader">
          <div class="page-loader-info"><p class="page-loader-info-text">加载中...</p></div>
          <div class="page-loader-indicator loader-bars">
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
            <div class="loader-bar"></div>
          </div>
        </div>
      </div> <!---->
      <UserHeaderComponent />
      <SilderHomeComponent/>

      <!--  时间线    -->
      <div class="grid grid-3-6-3 mobile-prefer-content" v-if="menuIdValueSet === '1'">
        <LeftComponent/>
        <UserMainComponent/>
        <RightComponent/>
      </div>
      <!--  关注    -->
      <div v-if="menuIdValueSet === '2'">
        <UserSearchComponent/>
        <UserListComponent/>
      </div>
      <!-- 粉丝 -->
      <div v-if="menuIdValueSet === '3'">
        <UserSearchComponent/>
        <UserListComponent/>
      </div>
      <!--  照片 -->
      <div v-if="menuIdValueSet === '5'">
        <ImgViewComponent/>
      </div>
      <!--  视频 -->
      <div v-if="menuIdValueSet === '6'">
        <VideViewComponent/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1366px) {
  .content-grid {
    margin: auto;
    transform: none !important;
  }
}
@media screen and (orientation: portrait) {
  .content-grid {
    /*padding-top: 115px !important;*/
    margin: auto;
    transform: none !important;
  }
  .grid.grid-3-6-3 {
    grid-template-areas: 'sidebar1 content sidebar2' !important;
    grid-template-columns: 0 92% 0 !important;
  }
}


.grid.grid-3-6-3 {
  grid-template-areas: 'sidebar1 content sidebar2';
  grid-template-columns: 23.9864864865% 49.3243243243% 23.9864864865%;
}

.content-grid .grid {
  margin-top: 32px;
}

.grid {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
  -ms-flex-align: start;
  align-items: start;
}

.loading {
  width: 100%;
  height: calc(100vh - 54px) !important;
  transform: translate(-2%, -32px);
  background: #f8f8f8;
  z-index: 999999;
}

.loading {
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-loader {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #F8F8FB;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999999;
  transition: opacity .4s ease-in-out, visibility .4s ease-in-out;
}

.page-loader .page-loader-info .page-loader-info-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
}

.page-loader .page-loader-info .page-loader-info-title, .page-loader .page-loader-info .page-loader-info-text {
  color: #000;
  text-transform: uppercase;
  text-align: center;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0 !important;
}

h1, h2, h3, h4, h5, h6, a, p {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

h1, h2, h3, h4, h5, h6, p, ol, ul, figure, .table, .form-row {
  margin: 0;
}

.page-loader .page-loader-indicator {
  margin-top: 36px;
}

.loader-bars {
  margin-top: 30px !important;
}

.loader-bars {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 40px;
}
</style>