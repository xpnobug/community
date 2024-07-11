import axios from "@/request/axios";
const BASE_URL = '/music';
interface musicFormState {
    userId: string;
    articleId: string;
    songName: string;
    singer: string;
    songUrl: string;
    songImg: string;
    songId: string;
}
export function addMusic(music: musicFormState) {
    return axios.post(`${BASE_URL}/addMusic`, music);
}