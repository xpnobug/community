import axios from "@/request/axios";



const BASE_URL = '/statistics';

export function getStatisticsById(userId: string) {
    return axios.get(`${BASE_URL}/getStatisticsById`+`?userId=${userId}`);
}
