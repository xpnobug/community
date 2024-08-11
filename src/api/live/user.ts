import {IPaging} from './interface';
import {IUser} from './types/IUser';
import axios from "@/request/axios";

export function fetchUserRegister({username, password}) {
  return axios.post('/user/register', {
    username,
    password,
  });
}

export function fetchQrcodeLogin({platform, exp}) {
  return axios.post<{
    login_id: string;
    exp: any;
    platform: any;
    isLogin: boolean;
    token: string;
  }>('/user/qrcode_login', {
    platform,
    exp,
  });
}

// eslint-disable-next-line
export function fetchQrcodeLoginStatus({platform, login_id}) {
  return axios.get<{
    login_id: string;
    exp: any;
    platform: any;
    isLogin: boolean;
    token: string;
  }>('/user/qrcode_login_status', {
    // eslint-disable-next-line
    params: {platform, login_id},
  });
}

export function fetchUsernameLogin({username, password}) {
  return axios.post('/user/username_login', {
    username,
    password,
  });
}

export function fetchIdLogin({id, password}) {
  return axios.post('/user/login', {
    id,
    password,
  });
}

export function fetchUserInfo() {
  return axios.get<IUser>('/user/get_user_info');
}

export function fetchFindUser(userId: number) {
  return axios.get(`/user/find/${userId}`);
}

export function fetchUserList(params: { orderName: string; orderBy: string }) {
  return axios.get<IPaging<IUser>>('/user/list', {params});
}
