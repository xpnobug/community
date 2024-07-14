// 设置分页
import {reactive} from "vue";

export interface Page {
    pageSize: number;
    currentPage: number;
    count: number;
    maxPage: number;
    minPage: number;
    firstResult: number;
    recount: boolean;
}
const page = reactive<Page>({
    pageSize: 10,
    currentPage: 1,
    count: 10,
    maxPage: 10,
    minPage: 1,
    firstResult: 0,
    recount: true
});
export default page;