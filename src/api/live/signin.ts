import {IList, IPaging, ISigninStatistics} from './interface';
import axios from "@/request/axios";

export function fetchSigninList(params: IList<ISigninStatistics>) {
  return axios.get<IPaging<ISigninStatistics>>('/signin_statistics/list', {
    params,
  });
}

export function fetchCreateSignin(data: ISigninStatistics) {
  return axios.post('/signin_record/create', data);
}

export function fetchTodayIsSignin({liveRoomId}) {
  return axios.get('/signin_record/today_is_signin', {
    params: {
      live_room_id: liveRoomId,
    },
  });
}
