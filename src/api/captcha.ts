import axios from "@/request/axios";


const BASE_URL = '/captcha';


//行为验证码:手机发短信使用
export function reqGet(captchaType: string) {
    return axios.get(`${BASE_URL}/behavior`);
}

//行为验证码校验
export function reqCheck(data: any) {
    return axios.post(`${BASE_URL}/behavior`, data);
}

//图片验证码
export function capImage() {
    return axios.get(`${BASE_URL}/image`);
}

//获取手机短信验证码
export function smsCode(phone: string, captchaVerification: string) {
    return axios.get(`${BASE_URL}/sms`, {
        params: {
            phone: phone,
            captchaVerification: captchaVerification
        }
    });
}

//获取邮箱验证码
export function emailCode(email: string) {
    return axios.get(`${BASE_URL}/mail`, {
        params: {email: email}
    });
}