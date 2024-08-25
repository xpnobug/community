import type * as System from './type'
import http,{get} from  "@/request/axios";

const BASE_URL = '/system/storage'

/** @desc 查询存储列表 */
export function listStorage(query: System.StoragePageQuery) {
  return get<PageRes<System.StorageResp[]>>(`${BASE_URL}`, query)
}

/** @desc 查询存储详情 */
export function getStorage(id: string) {
  return get<System.StorageResp>(`${BASE_URL}/${id}`)
}

/** @desc 新增存储 */
export function addStorage(data: any) {
  return http.post(`${BASE_URL}`, data)
}

/** @desc 修改存储 */
export function updateStorage(data: any, id: string) {
  return http.put(`${BASE_URL}/${id}`, data)
}

/** @desc 删除存储 */
export function deleteStorage(id: string) {
  return http.delete(`${BASE_URL}/${id}`)
}
