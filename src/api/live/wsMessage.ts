import { IList, IPaging, IWsMessage } from  './interface';
import axios from "@/request/axios";

export function fetchGetWsMessageList(params: IList<IWsMessage>) {
  return axios.get<IPaging<IWsMessage>>('/ws_message/list', {
    params,
  });
}
