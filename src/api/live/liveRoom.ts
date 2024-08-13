import {ILiveRoom} from '@/api/live/types/ILiveRoom';
import {IList, IPaging} from './interface';
import axios from "@/request/axios";

export function fetchLiveRoomList(params: IList<ILiveRoom>) {
  return axios.get<IPaging<ILiveRoom>>('/live_room/list', {
    params,
  });
}

export function fetchVerifyPkKey(data: { liveRoomId: number; key }) {
  return axios.get(`/live_room/verify_pk_key/${data.liveRoomId}`, {
    params: {key: data.key},
  });
}

export function fetchUpdateLiveRoomKey() {
  return axios.put(`/live_room/update_key`);
}

export function fetchFindLiveRoom(roomId: string) {
  return axios.get<ILiveRoom>(`/live/findLiveRoom/${roomId}`);
}
