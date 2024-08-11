import {IList, IPaging, ISettings} from './interface';
import axios from "@/request/axios";


const BASE_URL = '/settings';

export function fetchSettingsList(params: IList<ISettings>) {
  return axios.get<IPaging<ISettings>>(`${BASE_URL}/list`, {params});
}
