
<script lang="ts" setup>
import UserSearchComponent from "@/views/userMembers/components/UserSearchComponent.vue";
import UserListComponent from "@/views/userMembers/components/UserListComponent.vue";
import {pageList} from "@/api/user";
import {reactive, ref} from "vue";
interface Page {
  pageSize: number;
  currentPage: number;
  count: number;
  maxPage: number;
  minPage: number;
  // firstResult: number;
  // recount: boolean;
}

const page = reactive<Page>({
  pageSize: 10,
  currentPage: 1,
  count: 10,
  maxPage: 10,
  minPage: 1,
});
const userList = ref([]);
pageList(page).then(res => {
  userList.value = res.data.data;
})
</script>

<template>
  <div class="content-grid"
       style="width: 100%; padding-top: 84px;  transition: transform 0.4s ease-in-out 0s;">
    <div data-v-a0c93e92="" style="margin: 10px;">
      <div class="section-banner" data-v-a0c93e92=""
           style="background: url(https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/aedadfd944b6b44687f68d45eca091af.png?imageMogr2/crop/2368x320/gravity/center) center center / cover no-repeat; cursor: default;">
        <p class="section-banner-title"></p>
        <p class="section-banner-text"></p>
      </div>
      <UserSearchComponent :userList="userList"/>
      <UserListComponent :userList="userList"/>
<!--      <div class="section-pager-bar" data-v-a0c93e92="">-->
<!--        <ul aria-disabled="false" aria-label="Pagination" class="pagination b-pagination" data-v-418cb67c="" data-v-a0c93e92=""-->
<!--            role="menubar" style="margin-bottom: 0px;">-->
<!--          <li aria-hidden="true" class="page-item disabled" role="presentation"><span aria-disabled="true"-->
<!--                                                                                      aria-label="Go to first page"-->
<!--                                                                                      class="page-link"-->
<!--                                                                                      role="menuitem">«</span></li>-->
<!--          <li aria-hidden="true" class="page-item disabled" role="presentation"><span aria-disabled="true"-->
<!--                                                                                      aria-label="Go to previous page"-->
<!--                                                                                      class="page-link"-->
<!--                                                                                      role="menuitem">‹</span></li>-->
<!--          &lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
<!--          <li class="page-item active" role="presentation">-->
<!--            <button aria-checked="true" aria-label="Go to page 1" aria-posinset="1" aria-setsize="985" class="page-link"-->
<!--                    role="menuitemradio" tabindex="0" type="button">1-->
<!--            </button>-->
<!--          </li>-->
<!--          <li class="page-item" role="presentation">-->
<!--            <button aria-checked="false" aria-label="Go to page 2" aria-posinset="2" aria-setsize="985" class="page-link"-->
<!--                    role="menuitemradio" tabindex="-1" type="button">2-->
<!--            </button>-->
<!--          </li>-->
<!--          <li class="page-item" role="presentation">-->
<!--            <button aria-checked="false" aria-label="Go to page 3" aria-posinset="3" aria-setsize="985" class="page-link"-->
<!--                    role="menuitemradio" tabindex="-1" type="button">3-->
<!--            </button>-->
<!--          </li>-->
<!--          <li class="page-item bv-d-xs-down-none" role="presentation">-->
<!--            <button aria-checked="false" aria-label="Go to page 4" aria-posinset="4" aria-setsize="985" class="page-link"-->
<!--                    role="menuitemradio" tabindex="-1" type="button">4-->
<!--            </button>-->
<!--          </li>-->
<!--          <li class="page-item disabled bv-d-xs-down-none" role="separator"><span class="page-link">…</span></li>&lt;!&ndash;&ndash;&gt;-->
<!--          <li class="page-item" role="presentation">-->
<!--            <button aria-label="Go to next page" class="page-link" role="menuitem" tabindex="-1" type="button">›-->
<!--            </button>-->
<!--          </li>-->
<!--          <li class="page-item" role="presentation">-->
<!--            <button aria-label="Go to last page" class="page-link" role="menuitem" tabindex="-1" type="button">»-->
<!--            </button>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
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
    /*margin: 10px;*/
    padding-top: 128px !important;
  }

  .grid {
    display: block !important;
  }
}


.content-grid {
  max-width: 1184px;
  padding: 54px 0 32px;
}
.section-banner {
  min-height: 160px;
  /*padding: 52px 60px 0 200px;*/
  border-radius: 12px;
  position: relative;
  cursor: pointer;
}
.section-banner .section-banner-title {
  font-size: 2.25rem;
  font-weight: 700;
}
.section-banner .section-banner-title, .section-banner .section-banner-text {
  color: #fff;
}
.section-banner .section-banner-text {
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
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

.content-grid .section-banner + .section-filters-bar {
  margin-top: 64px;
}
.content-grid .section-filters-bar {
  margin-top: 30px;
}

</style>