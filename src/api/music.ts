import axios from "@/request/music-axios";

interface Music {
    limit: number,
    offset: number,
    keywords: string
}

export function searchMusic(music: Music) {
    return axios.get(`/search`, {
        params: {
            limit: music.limit,
            offset: music.offset,
            keywords: music.keywords
        }
    });
}
///search/hot
export function searchHotMusic() {
    return axios.get(`/search/hot`);
}
