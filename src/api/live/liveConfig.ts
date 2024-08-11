import {ILiveConfig} from './interface';
import axios from "@/request/axios";

export function fetchFrontendList(params: any) {
  return axios.get('/live_config/list', {params});
}

export function fetchFindFrontend(id: number) {
  return axios.get(`/live_config/find/${id}`);
}

export function fetchFindLiveConfigByKey(key: string) {
  return axios.get(`/live_config/find_by_key/${key}`);
}

export function fetchCreateFrontend(data: ILiveConfig) {
  return axios.post(`/live_config/create`, data);
}

export function fetchUpdateFrontend(data: ILiveConfig) {
  return axios.put(`/live_config/update/${data.id!}`, data);
}

export function fetchDeleteFrontend(id: number) {
  return axios.delete(`/live_config/delete/${id}`);
}
