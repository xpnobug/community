import { IPaging, IWallet } from './interface';
import axios from "@/request/axios";
export function fetchWalletList(params : any) {
  return axios.get<IPaging<IWallet>>('/wallet/list', {
    params,
  });
}

export function fetchMyWallet() {
  return axios.get<IWallet>('/wallet/my_wallet');
}
