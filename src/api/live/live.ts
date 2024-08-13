import { ILive, IPaging } from './interface';
import axios from "@/request/axios";

export function fetchLiveList(params : any) {
  return axios.get<IPaging<ILive>>('/live/list', {
    params,
  });
}
export function fetchLiveRoomOnlineUser(liveRoomId : any) {
  return axios.get('/live/liveRoomOnlineUser',{
    params: {
      liveRoomId: liveRoomId
    }
  });
}
