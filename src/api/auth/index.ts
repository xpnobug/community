import type * as Auth from './type'
import axios from "@/request/axios";

const BASE_URL = '/auth'

/** @desc 账号登录 */
export function accountLogin(req: Auth.AccountLoginReq) {
  return axios.post<Auth.LoginResp>(`${BASE_URL}/account`, req)
}

/** @desc 手机号登录 */
export function phoneLogin(req: Auth.PhoneLoginReq) {
  return axios.post<Auth.LoginResp>(`${BASE_URL}/phone`, req)
}

/** @desc 邮箱登录 */
export function emailLogin(req: Auth.EmailLoginReq) {
  return axios.post<Auth.LoginResp>(`${BASE_URL}/email`, req)
}

/** @desc 三方账号登录 */
export function socialLogin(source: string, req: any) {
  return axios.post<Auth.LoginResp>(`/oauth/${source}`, req)
}

/** @desc 三方账号登录授权 */
export function socialAuth(source: string) {
  return axios.get<Auth.SocialAuthAuthorizeResp>(`/oauth/${source}`)
}

/** @desc 退出登录 */
export function logout() {
  return axios.post(`${BASE_URL}/logout`)
}

/** @desc 获取用户信息 */
export const getUserInfo = () => {
  return axios.get<Auth.UserInfo>(`${BASE_URL}/user/info`)
}

/** @desc 获取路由信息 */
export const getUserRoute = () => {
  return axios.get<Auth.RouteItem[]>(`${BASE_URL}/route`)
}
