import {Page} from "@/api/base";
import axios from "@/request/axios";

const BASE_URL = '/friend/article';

export function friendCircleList(page: Page, id: string) {
    return axios.get(`${BASE_URL}/friendCircleList`, {
        params: {
            userId: id,
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    });
}

export function deleteById(idList: string) {
    return axios.delete(`${BASE_URL}/delete`, {
        params: {
            idList: idList,
        }
    });
}
