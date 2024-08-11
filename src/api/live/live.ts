import { ILive, IPaging } from './interface';
import axios from "@/request/axios";

export function fetchLiveList(params : any) {
  return axios.get<IPaging<ILive>>('/live/list', {
    params,
  });
}
export function fetchLiveRoomOnlineUser(params : any) {
  return axios.get('/live/live_room_online_user', {
    params,
  });
}
