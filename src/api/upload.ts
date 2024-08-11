import axios from "@/request/axios";

const BASE_URL = '/upload';

export const uploadF = (file: File) => axios.post(`${BASE_URL}/uploadImg`, file);
export function upload(file: File) {
    return axios.post(`${BASE_URL}/upload`, file);
}