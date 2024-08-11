import { IGoods, IList, IPaging } from './interface';
import axios from "@/request/axios";


export function fetchGoodsList(params: IList<IGoods>) {
  return axios.get<IPaging<IGoods>>('/goods/list', { params });
}

export function fetchFindByTypeGoods(type) {
  return axios.get<IGoods>('/goods/find_by_type', {
    params: { type },
  });
}
