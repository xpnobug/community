import axios from "@/request/axios";

const BASE_URL = '/article';


//    private int pageSize = DEFAULT_PAGE_SIZE;
//     private int currentPage = 1;
//     private long count;
//     private int maxPage;
//     private int minPage = 1;
//     private int firstResult = 0;
//
//     private boolean recount;
// 设置分页
export interface Page {
    pageSize: number;
    currentPage: number;
    count: number;
    maxPage: number;
    minPage: number;
    firstResult: number;
    recount: boolean;
}

// 文章列表
//异步加载

export function pageList(page: Page) {
    return axios.get(`${BASE_URL}/pageList`,{
        params: {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    });
}