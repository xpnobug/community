<script setup lang="ts">
import TopMenu from '../components/TopMenu.vue'
import {useDefer} from "@/hooks/useDefer.js";
import getMenuData from "@/router/menuUtil";
import NavComponent from "@/components/navComponent/index.vue";
import FooterView from "@/views/footer/FooterView.vue";
import H5Index from "@/components/navComponent/NavMobileMenu.vue";
import {isMobile} from "@/utils";
import {useUserStore} from "@/store";
const defer = useDefer();
const menu = getMenuData();
console.log('menu', menu)
const userStore = useUserStore();
userStore.getInfo(); // 获取用户信息
</script>

<template>
  <H5Index v-if="isMobile()"/>
  <div class="yIDCqA">
    <div class="ra8xgQ ZbSf_A dr1mMg u0gqxQ _1tk2_Q">
      <div class="wGVWaQ">
        <TopMenu/>
        <!--  <LeftMenu/>-->
        <!--  <LeftMenuItem v-if="defer"/>-->
        <NavComponent />
      </div>
    </div>
  </div>



  <!--  <DtCaiDan v-if="defer"/>-->
  <!--  <ChatComponents/>-->
  <!--  <LunBoCompentes/>-->
</template>

<style scoped>
@media screen and (orientation: portrait) {
  .ra8xgQ {
    min-height: 100vh;
  }
}
.yIDCqA {
  /*height: 100%;*/
  position: relative;
  width: 100%;
}

/*.ra8xgQ._1tk2_Q {*/
/*  height: 100%;*/
/*}*/

.ra8xgQ.ZbSf_A {
  transition: background-color .15s ease-in-out;
}


.ra8xgQ {
  color: var(--VNXpSw);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: 0fr 0fr 1fr 0fr;
  margin: 0 auto;
  min-height: 95vh;
}

.dr1mMg .wGVWaQ {
/*  padding-top: var(--safe-area-inset-top);*/
}
.ZbSf_A .wGVWaQ {
  transition: background-color .15s ease-in-out;
}
.wGVWaQ {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 5;
}
</style>
