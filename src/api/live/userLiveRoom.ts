import { IUserLiveRoom } from './interface';
import axios from "@/request/axios";
import {ILiveRoom} from "@/api/live/types/ILiveRoom";

export function fetchUserHasLiveRoom(userId: string) {
  return axios.get<IUserLiveRoom>(`/user_live_room/find_by_userId/`+userId);
}

export function fetchCreateUserLiveRoom(liveRoom: ILiveRoom) {
  return axios.post(`/user_live_room/create`, liveRoom);
}
