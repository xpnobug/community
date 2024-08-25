import type * as Monitor from './type'
import http from "@/request/axios";

const BASE_URL = '/monitor/online'

/** @desc 查询在线用户列表 */
export function listOnlineUser(query: Monitor.OnlineUserPageQuery) {
  return http.get<PageRes<Monitor.OnlineUserResp[]>>(`${BASE_URL}`, query)
}

/** @desc 强退在线用户 */
export function kickout(token: string) {
  return http.delete(`${BASE_URL}/${token}`)
}
