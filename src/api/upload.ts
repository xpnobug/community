import axios from "@/request/axios";

const BASE_URL = '/upload';

export const uploadFile = (file: File) => axios.post(`${BASE_URL}/uploadImg`, file);