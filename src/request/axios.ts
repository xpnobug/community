
import axios from 'axios';
import { message } from 'ant-design-vue';

const service = axios.create({
  // baseURL: import.meta.env.VITE_GLOB_API_URL,
  baseURL: "/api",
})

service.interceptors.request.use(
    (config) => {
        // 尝试从localStorage中获取token
        const token = localStorage.getItem('satoken');
        // console.log('token:', token)
        // 如果token存在，则将其添加到请求头中
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // 返回修改后的配置对象
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        // 这里可以根据需要添加额外的错误处理逻辑
        // 例如，显示一个网络错误的消息，或者记录日志
        console.error('Request Error:', error); // 示例：在控制台打印错误信息

        // 返回一个被拒绝的Promise
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        // 如果响应状态码是200，则直接返回响应
        if (response.status === 200) {
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
        const errorMessage = error.message || 'An unknown error occurred';
        message.error(errorMessage);

        // 拒绝Promise并返回错误
        return Promise.reject(error);
    }
);

export default service
