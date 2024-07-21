import axios from "@/request/axios";
import {Page} from "@/api/base";


const BASE_URL = '/users';

export interface userInfo {
    username?: string;
    password?: string;
    captcha?: string;
    uuid?: string;
}
export interface phoneInfo {
    phone?: string;
    captcha?: string;
}
export interface emailInfo {
    email?: string;
    captcha?: string;
}
//账号登录
export function account(user: userInfo)  {
    return axios.post(`/auth/account`,user)
}
//手机登录
export function phoneAccount(phone: phoneInfo)  {
    return axios.post(`/auth/phone`,phone)
}
//邮箱登录
export function emailAccount(email: emailInfo)  {
    return axios.post(`/auth/email`,email)
}
export function pageList(page: Page) {
    return axios.get(`${BASE_URL}/pageList`,{
        params: {
            pageSize: page.pageSize,
            currentPage: page.currentPage,
        }
    });
}
export function register(user: userInfo) {
    return axios.post(`${BASE_URL}/register`, user);
}
export function login(user: userInfo) {
    return axios.post(`${BASE_URL}/login`, user);
}

export function isLogin() {
    return axios.get(`${BASE_URL}/isLogin`);
}
export function tokenInfo() {
    return axios.get(`${BASE_URL}/tokenInfo`);
}
export function userInfo(id: string) {
    return axios.get(`${BASE_URL}/`+ id);
}

export function logout() {
    return axios.get(`${BASE_URL}/logout`);
}

export function updateUser(user: userInfo) {
    return axios.put(`${BASE_URL}/upd`, user);
}

export function getFollowListById(id: string) {
    return axios.get(`${BASE_URL}/getFollowListById`,{
        params: {
            id: id
        }
    });
}