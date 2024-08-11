export const NODE_ENV = import.meta.env.VITE_APP_NODE_ENV;
export const PROJECT_ENV = NODE_ENV;
export enum PROJECT_ENV_ENUM {
  development = 'development',
  prod = 'prod',
  beta = 'beta',
}
// 服务器ip地址，腾讯云：**********；阿里云：**********
export const IP_URL = {
  tencent: {
    localIp: 'localhost',
    serverIp: '**********',
  },
  ali: {
    localIp: 'srs-pull.reaicc.com',
    serverIp: 'srs-pull.reaicc.com',
  },
};
console.log(NODE_ENV, "import.meta.env.VITE_APP_NODE_ENV");

export const SERVER_LIVE = {
  PushDomain:
      PROJECT_ENV === PROJECT_ENV_ENUM.development
          ? `rtmp://${IP_URL.ali.localIp}`
          : `${IP_URL.ali.serverIp}`, // 推流域名
  PullDomain:
      PROJECT_ENV === PROJECT_ENV_ENUM.development
          ? `https://${IP_URL.ali.localIp}`
          : `${IP_URL.ali.serverIp}`, // 拉流域名
  AppName: 'live/livestream',
};