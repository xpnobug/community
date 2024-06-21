import axios from "@/request/axios";
import {Page} from "@/api/base";


const BASE_URL = '/likes';

interface Likes {

    /**点赞的id*/
    likeId?: string;

    /**关联 reai_article 表的外键*/
    articleId?: string;

    /**关联 Users 表的外键*/
    userId?: string;

    /**点赞的时间戳*/
    likedAt?: number;

    /**游客id*/
    guestId?: string;

}

export function giveALike(likes: Likes) {
    return axios.post(`${BASE_URL}/giveALike`, likes);
}
export function getLikesList() {
    return axios.get(`${BASE_URL}/getLikesList`);
}