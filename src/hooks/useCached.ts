import type {ComputedRef} from 'vue'
import {computed, type Ref, ref, getCurrentInstance} from 'vue'
import {isLogin, tokenInfo, userInfo} from "@/api/user";


/**
 * 统一获取用户信息 hook
 * @param uid 用户 ID
 * @description 引入该Hook后，可响应式获取用户信息
 */
export const useUserInfo = (uid?: number | ComputedRef<number | undefined> | Ref<number>) => {
    const userGetInfo = ref({});
    const instance = getCurrentInstance()
    tokenInfo().then(res => {
        if (res.status === 200) {
            userInfo(res.data.data.loginId).then(user => {
                userGetInfo.value = user.data.data;
                const emit = () => {
                    instance?.proxy?.$Bus.emit("userInfo", user.data.data)
                }
                emit();
            })
        }
    })
    return userGetInfo
}

export const userInfoUse = () => {
    //获取登录人信息
    const instance = getCurrentInstance()
    const userInfos = ref([]);
    instance?.proxy?.$Bus.on("userInfo", (param: any) => {
        userInfos.value = param;
        console.log(param)
    });
    // 返回用户信息 ref
    return userInfos
}

