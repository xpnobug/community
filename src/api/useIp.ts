import axios from "@/request/axios";


const BASE_URL = '/ip';

export function fetchIpAddress() {
    return axios.get(`${BASE_URL}/getIp`);
}

export default fetchIpAddress;