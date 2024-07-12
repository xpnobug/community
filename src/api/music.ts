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

//https://api-mu.reaicc.com/song/detail?ids=430685732
export function getMusicDetail(id: number) {
    return axios.get(`/song/detail?ids=${id}`);
}