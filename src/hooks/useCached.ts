import type {ComputedRef} from 'vue'
import {computed, type Ref, ref, toValue} from 'vue'
import {isLogin, tokenInfo, userInfo} from "@/api/userLogin";

/**
 * 统一获取用户信息 hook
 * @param uid 用户 ID
 * @description 引入该Hook后，可响应式获取用户信息
 */
export const useUserInfo = (uid?: number | ComputedRef<number | undefined> | Ref<number>) => {
    const userGetInfo = ref({});
    tokenInfo().then(res => {
        if (res.status === 200) {
            userInfo(res.data.data.loginId).then(user => {
                userGetInfo.value = user.data.data;
                console.log(user)
            })
        }
    })
    return userGetInfo
}
