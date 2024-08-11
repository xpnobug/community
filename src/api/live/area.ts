import {IPaging} from './interface';
import {ILiveRoom} from '@/api/live/types/ILiveRoom';
import axios from "@/request/axios";

export function fetchAreaList() {
  return axios.get('/area/list');
}

export function fetchAreaLiveRoomList(params: any) {
  return axios.get('/area/area_live_room_list', {
    params,
  });
}

export function fetchLiveRoomList(params: any) {
  return axios.get<IPaging<ILiveRoom>>('/area/live_room_list', {
    params,
  });
}
