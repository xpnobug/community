
import axios from 'axios';
import { message } from 'ant-design-vue';

const service = axios.create({
  // baseURL: import.meta.env.VITE_GLOB_API_URL,
  baseURL: "/api",
})

service.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('satoken')
    //   console.log(token)
    // if (token)
    //   config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
    (response) => {
    if (response.status === 200)
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
