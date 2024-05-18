import axios from "@/request/axios";
import {userInfo} from "@/api/userLogin";
import {reactive} from "vue";

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
interface Article  {
    articleId: string;
    title: string;
    content: string;
    author: string;
    publishDate: Date;
    tag: string;
    coverImage: string;
    readCount: number;
    likeCount: number;
    commentCount: number;
    shareCount: number;
    collectCount: number;
    summary: string;
    articleStatus: string;
    source: string;
    url: string;
    recommendations: number;
    wordCount: number;
    readingTime: number;
    isFeatured: boolean;
    relatedArticles: string;
    editorialSuggestions: string;
    seoInformation: string;
    copyright: string;
    publishPlatform: string;
    userId: string;
    avatar: string;
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
export function add(article: Article) {
    return axios.post(`${BASE_URL}/add`, article);
}