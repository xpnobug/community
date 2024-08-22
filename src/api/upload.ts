import axios from "@/request/axios";

const BASE_URL = '/common';

export function upload(file: File) {
    return axios.post(`${BASE_URL}/file`, file);
}