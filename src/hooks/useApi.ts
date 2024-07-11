// 获取文章列表
import {friendCircleList} from "@/api/article";
import {defineProps, reactive, ref, watch} from "vue";

export const pyqFriendCircleList = (page,userId) => {
    const list = ref([]);
    friendCircleList(page, userId ? userId : 'null').then(res => {
        list.value = res.data.data;
    })
    return list;
}
