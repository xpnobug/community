import axios from "@/request/axios";
import {UnwrapNestedRefs} from "vue";


const BASE_URL = '/recommend';
interface Follow  {
    id: number;
    userId: string;
    username: string;
}

export function recommendList() {
    return axios.get(`${BASE_URL}/recommendList`);
}
