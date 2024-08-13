import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import axios from 'axios';
import {message} from 'ant-design-vue';
import {setToken} from "@/utils/localStorage/user";
import {getToken} from '@/utils/auth'

interface ICodeMessage {
  [propName: number]: string
}

const StatusCodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功',
  400: '请求错误(400)',
  401: '未授权，请重新登录(401)',
  403: '拒绝访问(403)',
  404: '请求出错(404)',
  408: '请求超时(408)',
  500: '服务器错误(500)',
  501: '服务未实现(501)',
  502: '网络错误(502)',
  503: '服务不可用(503)',
  504: '网络超时(504)'
}

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_PREFIX ?? import.meta.env.VITE_API_BASE_URL,
  timeout: 30 * 1000
})

// 请求拦截器
http.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // NProgress.start() // 进度条
      const token = getToken()
      if (token) {
        if (!config.headers) {
          config.headers = {}
        }
        setToken(token);
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
)

http.interceptors.response.use(
    (response) => {
      // 如果响应状态码是200，则直接返回响应
      if (response.status === 200) {
        if (response.data.code === 401) {
          // message.error(response.data.message);
          localStorage.removeItem('token');
          localStorage.removeItem('userInfo');
          localStorage.removeItem('live_token');
          localStorage.setItem("userId", 'null');
        } else if (response.data.code === 403) {
          message.error('没有权限');
        }
        return response;
      }


      // 如果不是200，则创建一个错误对象
      const error = new Error(response.statusText);
      // 附加响应数据到错误对象上（如果响应体存在）
      error.response = response;

      // 显示错误消息（假设message.error是一个可以显示UI消息的函数）
      if (response.data && response.data.message) {
        message.error(response.data.message);
      } else {
        // 如果响应体中没有message字段，则显示默认的错误消息
        message.error('An error occurred: ' + response.statusText);
      }

      // 抛出带有附加信息的错误
      throw error;
    },
    (error) => {
      // 如果请求失败，则也抛出一个错误
      // const errorMessage = error.message || 'An unknown error occurred';
      // message.error(errorMessage);
      if (error.response.data && error.response.data.message) {
        message.error(error.response.data.message);
      } else {
        // 如果响应体中没有message字段，则显示默认的错误消息
        message.error('An error occurred: ' + error.response.statusText);
      }
      // 拒绝Promise并返回错误
      return Promise.reject(error);
    }
);

const request = <T = unknown>(config: AxiosRequestConfig): Promise<ApiRes<T>> => {
  return new Promise((resolve, reject) => {
    http
    .request<T>(config)
    .then((res: AxiosResponse) => resolve(res.data))
    .catch((err: { msg: string }) => reject(err))
  })
}
const requestNative = <T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    http
    .request<T>(config)
    .then((res: AxiosResponse) => resolve(res))
    .catch((err: { msg: string }) => reject(err))
  })
}

export default http;
export { request, requestNative};


