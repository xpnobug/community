import {DEFAULT_AUTH_INFO} from '@/constant';
import {useAppStore} from '@/store/app';
import {useUserStore} from '@/store/modules/user';
import {getToken} from '@/utils/localStorage/user';
import {message} from "ant-design-vue";

export function loginTip(show = false) {
  const token = getToken();
  const appStore = useAppStore();
  if (!token) {
    message.warning('请先登录！');
    // instance.show = true;
    appStore.showLoginModal = true;
    return false;
  }
  return true;
}

export function commentAuthTip() {
  const userStore = useUserStore();
  if (
      !userStore.auths?.find(
          (v) => v.auth_value === DEFAULT_AUTH_INFO.MESSAGE_SEND.auth_value
      )
  ) {
    message.error(
        `没有${DEFAULT_AUTH_INFO.MESSAGE_SEND.auth_value}权限！`
    );
    return false;
  }
  return true;
}

export function isLogin(show = false) {
  const token = getToken();
  if (!token) {
    return false;
  }
  return true;
}
