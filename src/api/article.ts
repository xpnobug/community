import axios from "@/request/axios";
import {userInfo} from "@/api/user";
import {reactive} from "vue";
import {Page} from "@/api/base";
import {s} from "vite/dist/node/types.d-aGj9QkWt";

const BASE_URL = '/article';

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

export function list(page: Page) {
    return axios.get(`${BASE_URL}/list`,{
        params: {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    });
}
export function pageList() {
    return axios.get(`${BASE_URL}/pageList`);
}
export function listByUserId(page: Page,id: string) {
    return axios.get(`${BASE_URL}/listByUserId`,{
        params: {
            userId: id,
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    });
}
export function add(article: Article) {
    return axios.post(`${BASE_URL}/add`, article);
}

export function selectOne(id: string) {
    return axios.get(`${BASE_URL}/`+ id);
}

export function update(article: Article) {
    return axios.put(`${BASE_URL}/update`, article);
}
// public JsonObject delete(@RequestBody List<Long> idList)
interface idList  {
    idList: number[];
}

export function deleteById(idList: idList) {
    return axios.delete(`${BASE_URL}/delete`, {
        data: idList,
        headers: {
            'Content-Type': 'application/json' // 明确指定内容类型为 JSON
        }
    })
}
