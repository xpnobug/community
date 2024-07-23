import type * as System from '@/api/type'
import axios from "@/request/axios";

const BASE_URL = '/message'

/** @desc 查询消息列表 */
export function listMessage(isRead: boolean, userId: string) {
  return axios.get<System.MessageResp>(`${BASE_URL}`, {
    params: {isRead,userId}
  })
}

/** @desc 删除消息 */
export function deleteMessage(ids: string | Array<string>) {
  return axios.delete(`${BASE_URL}/${ids}`)
}

/** @desc 标记已读 */
export function readMessage(ids?: string | Array<string>) {
  return axios.patch(`${BASE_URL}/read`, ids)
}

/** @desc 查询未读消息数量 */
export function getUnreadMessageCount() {
  return axios.get(`${BASE_URL}/unread`)
}
