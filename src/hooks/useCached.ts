import type {ComputedRef} from 'vue'
import {computed, type Ref, ref, getCurrentInstance} from 'vue'
import {isLogin, tokenInfo, userInfo} from "@/api/user";


/**
 * 统一获取用户信息 hook
 * @param uid 用户 ID
 * @description 引入该Hook后，可响应式获取用户信息
 */
export const useUserInfo = (uid?: number | ComputedRef<number | undefined> | Ref<number>) => {
    const userGetInfo = ref([]);
    const instance = getCurrentInstance()
    tokenInfo().then(res => {
        if (res.status === 200) {
            userInfo(res.data.data.loginId).then(user => {
                console.log(user.data.data)
                //存储用户信息 user.data.data转字符串
                localStorage.setItem('userInfo', JSON.stringify(user.data.data));
                localStorage.setItem('userId', user.data.data === null ? 'null' : user.data.data.userId.toString());
                userGetInfo.value = user.data.data;
                const emit = () => {
                    instance?.proxy?.$Bus.emit("userInfo", userGetInfo.value)
                }
                emit();
            })
        }
    })
    return userGetInfo
}


