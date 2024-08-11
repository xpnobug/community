import { Socket, io } from 'socket.io-client';

import { useNetworkStore } from '@/store/network';
import { useUserStore } from '@/store/modules/user';
import {
  IWsFormat,
  WsConnectStatusEnum,
  WsMsgTypeEnum,
} from '@/api/live/types/websocket';

// 格式化接收到的WebSocket消息
export function prettierReceiveWsMsg(...args: any[]) {
  console.warn('【websocket】收到消息', ...args);
}

// 格式化发送的WebSocket消息
export function prettierSendWsMsg(data: {
  requestId: string; // 请求ID
  msgType: string; // 消息类型
  data: any; // 消息内容
}) {
  console.warn(
      `【websocket】发送消息 msgType:${data.msgType}, requestId:${data.requestId}`,
      data
  );
}

// WebSocket类
export class WebSocketClass {
  socketIo: Socket | null = null; // Socket.IO实例
  status: WsConnectStatusEnum = WsConnectStatusEnum.disconnect; // WebSocket连接状态
  url: string = ''; // 连接的URL
  roomId: string = '-1'; // 房间ID
  isAnchor: boolean = false; // 是否是主播

  // 构造函数
  constructor(data: { roomId: string; url: string; isAnchor: boolean }) {
    // 检查当前环境是否支持WebSocket
    if (!window.WebSocket) {
      alert('当前环境不支持WebSocket！');
      return;
    }

    console.warn('开始初始化 WebSocketClass', data);
    this.roomId = data.roomId; // 设置房间ID
    this.isAnchor = data.isAnchor; // 设置是否是主播
    this.url = data.url; // 设置连接的URL

    // 创建Socket.IO实例
    this.socketIo = io(data.url, {
      transports: ['websocket'],
      path: '/websocket',
    });

    this.update(); // 更新网络状态
  }

  // 发送WebSocket消息
  send = <T>({
               msgType, // 消息类型
               requestId, // 请求ID
               data, // 消息内容
             }: {
    msgType: WsMsgTypeEnum;
    requestId: string;
    data?: T;
  }) => {
    // 如果WebSocket未连接，打印错误并返回
    if (!this.socketIo?.connected) {
      console.error(
          '【websocket】未连接成功，不发送websocket消息！',
          msgType,
          data
      );
      return;
    }

    prettierSendWsMsg({ requestId, msgType, data }); // 格式化发送的消息

    const userStore = useUserStore(); // 获取用户信息

    // 获取浏览器地址栏的完整 URL
    const browserUrl = window.location.href;

    // 构建发送的数据
    const sendData: IWsFormat<any> = {
      request_id: requestId,
      socket_id: this.socketIo.id,
      user_info: userStore.userInfo,
      user_id: userStore.userInfo?.userId || undefined,
      user_token: userStore.token || undefined,
      data: data || {},
      browser_url: browserUrl,
    };

    // 发送消息
    this.socketIo?.emit(msgType, sendData);
  };

  // 更新store中的WebSocket状态
  update = () => {
    const networkStore = useNetworkStore(); // 获取网络状态
    networkStore.wsMap.set(this.roomId, { ...this }); // 更新房间的WebSocket实例
  };

  // 手动关闭WebSocket连接
  close = () => {
    console.warn('手动关闭WebSocket连接', this.socketIo?.id);
    this.socketIo?.close(); // 关闭连接
  };
}
