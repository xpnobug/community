import { IPaging, IWalletRecord } from './interface';
import axios from "@/request/axios";

export function fetchWalletRecordMyList(params : any) {
  return axios.get<IPaging<IWalletRecord>>('/wallet_record/my_list', {
    params,
  });
}
