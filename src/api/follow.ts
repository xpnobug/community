import axios from "@/request/axios";
import {UnwrapNestedRefs} from "vue";


const BASE_URL = '/follow';
interface Follow  {
    id: number;
    userId: string;
    username: string;
}

export function addFollow(follow: UnwrapNestedRefs<Follow>) {
    return axios.post(`${BASE_URL}/followUser`, follow);
}

export function delFollow(ids: string) {
    return axios.delete(`${BASE_URL}/clearFollow`+`?id=${ids}`);
}