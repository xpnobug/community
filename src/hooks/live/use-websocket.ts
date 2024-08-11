import { copyToClipBoard, getRandomString } from 'billd-utils';
import { NButton } from 'naive-ui';
import { computed, h, onUnmounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { fetchVerifyPkKey } from '@/api/live/liveRoom';
import { THEME_COLOR, WEBSOCKET_URL } from '@/constant';
import { useRTCParams } from '@/hooks/live/use-rtcParams';
import { useTip } from '@/hooks/live/use-tip';
import { useWebRtcLive } from '@/hooks/live/webrtc/live';
import { useWebRtcMeetingOne } from '@/hooks/live/webrtc/meetingOne';
import { useWebRtcMeetingPk } from '@/hooks/live/webrtc/meetingPk';
import { useWebRtcSrs } from '@/hooks/live/webrtc/srs';
import { useWebRtcTencentcloudCss } from '@/hooks/live/webrtc/tencentcloudCss';
import {
  DanmuMsgTypeEnum,
  ILiveUser,
  WsMessageMsgIsFileEnum,
} from '@/api/live/interface';
import router, { routerName } from '@/router';
import { useAppStore } from '@/store/app';
import { useNetworkStore } from '@/store/network';
import { useUserStore } from '@/store/modules/user';
import { LiveRoomTypeEnum } from '@/api/live/types/ILiveRoom';
import { IUser } from '@/api/live/types/IUser';
import {
  IDanmu,
  WSGetRoomAllUserType,
  WSLivePkKeyType,
  WsAnswerType,
  WsBatchSendOffer,
  WsCandidateType,
  WsConnectStatusEnum,
  WsDisableSpeakingType,
  WsHeartbeatType,
  WsJoinType,
  WsLeavedType,
  WsMessageType,
  WsMsgTypeEnum,
  WsOfferType,
  WsOtherJoinType,
  WsRemoteDeskBehaviorType,
  WsRoomLivingType,
  WsStartLiveType,
  WsStartRemoteDesk,
  WsUpdateJoinInfoType,
} from '@/api/live/types/websocket';
import {
  createNullVideo,
  handleUserMedia,
  setAudioTrackContentHints,
  setVideoTrackContentHints,
} from '@/utils';
import {
  WebSocketClass,
  prettierReceiveWsMsg,
} from '@/utils/network/webSocket';

import { useForwardAll } from './webrtc/forwardAll';
import { useForwardBilibili } from './webrtc/forwardBilibili';
import { useForwardHuya } from './webrtc/forwardHuya';
import { useWebRtcRemoteDesk } from './webrtc/remoteDesk';
import {message} from "ant-design-vue";

export const useWebsocket = () => {
  const route = useRoute();
  const appStore = useAppStore();
  const userStore = useUserStore();
  const networkStore = useNetworkStore();

  const {
    maxBitrate,
    maxFramerate,
    resolutionRatio,
    videoContentHint,
    audioContentHint,
  } = useRTCParams();
  const { updateWebRtcRemoteDeskConfig, webRtcRemoteDesk } =
    useWebRtcRemoteDesk();
  const { updateWebRtcMeetingPkConfig, webRtcMeetingPk } = useWebRtcMeetingPk();
  const { updateWebRtcSrsConfig, webRtcSrs } = useWebRtcSrs();
  const { updateForwardBilibiliConfig, forwardBilibili } = useForwardBilibili();
  const { updateForwardAllConfig, forwardAll } = useForwardAll();
  const { updateForwardHuyaConfig, forwardHuya } = useForwardHuya();
  const { updateWebRtcTencentcloudCssConfig, webRtcTencentcloudCss } =
    useWebRtcTencentcloudCss();
  const { updateWebRtcLiveConfig, webRtcLive } = useWebRtcLive();
  const { updateWebRtcMeetingOneConfig, webRtcMeetingOne } =
    useWebRtcMeetingOne();

  const connectStatus = ref<WsConnectStatusEnum>();
  const loopHeartbeatTimer = ref();
  const loopGetLiveUserTimer = ref();
  const liveUserList = ref<ILiveUser[]>([]);
  const roomId = ref('');
  const roomLiving = ref(false);
  const isAnchor = ref(false);
  const isRemoteDesk = ref(false);
  const anchorInfo = ref<IUser>();
  const anchorSocketId = ref('');
  const canvasVideoStream = ref<MediaStream>();
  const userStream = ref<MediaStream>();
  const lastCoverImg = ref('');
  const currentMaxBitrate = ref(maxBitrate.value[3].value);
  const currentMaxFramerate = ref(maxFramerate.value[2].value);
  const currentResolutionRatio = ref(resolutionRatio.value[3].value);
  const currentVideoContentHint = ref(videoContentHint.value[3].value);
  const currentAudioContentHint = ref(audioContentHint.value[0].value);
  const timerObj = ref({});
  const damuList = ref<IDanmu[]>([]);

  onUnmounted(() => {
    clearInterval(loopHeartbeatTimer.value);
    clearInterval(loopGetLiveUserTimer.value);
  });

  watch(
    [() => userStore.userInfo?.userId, () => connectStatus.value],
    ([userInfo, status]) => {
      if (userInfo && status === WsConnectStatusEnum.connect) {
        const ws = networkStore.wsMap.get(roomId.value);
        // console.log("connect",ws)
        if (!ws) return;
        ws.send<WsUpdateJoinInfoType['data']>({
          requestId: getRandomString(8),
          msgType: WsMsgTypeEnum.updateJoinInfo,
          data: {
            liveRoomId: Number(roomId.value),
          },
        });
      }
    },
    { immediate: true }
  );

  const mySocketId = computed(() => {
    return networkStore.wsMap.get(roomId.value)?.socketIo?.id || '-1';
  });

  /**
   * 处理心跳连接的函数
   * @param socketId WebSocket 的唯一标识符
   */
  function handleHeartbeat(socketId: string) {
    // 设置循环心跳定时器，每隔5秒执行一次
    loopHeartbeatTimer.value = setInterval(() => {
      // 从 networkStore 的 wsMap 中获取对应 roomId 的 WebSocket 实例
      const ws = networkStore.wsMap.get(roomId.value);
      // 如果 WebSocket 实例不存在，则直接返回
      if (!ws) return;
      // 发送心跳消息
      ws.send<WsHeartbeatType['data']>({
        requestId: getRandomString(8), // 生成随机的请求 ID
        msgType: WsMsgTypeEnum.heartbeat, // 设置消息类型为心跳
        data: {
          socket_id: socketId, // 设置 WebSocket 的唯一标识符
          liveRoomId: roomId.value, // 设置直播间 ID
          roomLiving: isAnchor.value && roomLiving.value, // 设置房间是否正在直播
        },
      });
    }, 1000 * 5); // 每隔5秒发送一次心跳消息
  }


  function handleStartLive({
    name,
    type,
    msrDelay,
    msrMaxDelay,
  }: {
    name?: string;
    type: LiveRoomTypeEnum;
    videoEl?: HTMLVideoElement;
    msrDelay: number;
    msrMaxDelay: number;
  }) {
    if (appStore.liveRoomInfo) {
      appStore.liveRoomInfo.type = type;
    }
    networkStore.wsMap.get(roomId.value)?.send<WsStartLiveType['data']>({
      requestId: getRandomString(8),
      msgType: WsMsgTypeEnum.startLive,
      data: {
        name: name!,
        type,
        msrDelay,
        msrMaxDelay,
      },
    });
    if (canvasVideoStream.value) {
      setVideoTrackContentHints(
        canvasVideoStream.value,
        // @ts-ignore
        currentVideoContentHint.value
      );
      setAudioTrackContentHints(
        canvasVideoStream.value,
        // @ts-ignore
        currentAudioContentHint.value
      );
    }

    if (type === LiveRoomTypeEnum.srs) {
      console.log("使用srs 推流")
      updateWebRtcSrsConfig({
        isPk: false,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      webRtcSrs.newWebRtc({
        sender: mySocketId.value,
        receiver: 'srs',
        videoEl: createNullVideo(),
      });
      webRtcSrs.sendOffer({
        sender: mySocketId.value,
        receiver: 'srs',
      });
    } else if (type === LiveRoomTypeEnum.forward_bilibili) {
      updateForwardBilibiliConfig({
        isPk: false,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      forwardBilibili.newWebRtc({
        sender: mySocketId.value,
        receiver: 'srs',
        videoEl: createNullVideo(),
      });
      forwardBilibili.sendOffer({
        sender: mySocketId.value,
        receiver: 'srs',
      });
    } else if (type === LiveRoomTypeEnum.forward_huya) {
      updateForwardHuyaConfig({
        isPk: false,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      forwardHuya.newWebRtc({
        sender: mySocketId.value,
        receiver: 'srs',
        videoEl: createNullVideo(),
      });
      forwardHuya.sendOffer({
        sender: mySocketId.value,
        receiver: 'srs',
      });
    } else if (type === LiveRoomTypeEnum.forward_all) {
      updateForwardAllConfig({
        isPk: false,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      forwardAll.newWebRtc({
        sender: mySocketId.value,
        receiver: 'srs',
        videoEl: createNullVideo(),
      });
      forwardAll.sendOffer({
        sender: mySocketId.value,
        receiver: 'srs',
      });
    } else if (type === LiveRoomTypeEnum.tencent_css) {
      updateWebRtcTencentcloudCssConfig({
        isPk: false,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      webRtcTencentcloudCss.newWebRtc({
        sender: mySocketId.value,
        receiver: 'tencentcloud_css',
        videoEl: createNullVideo(),
      });
      webRtcTencentcloudCss.sendOffer({
        sender: mySocketId.value,
        receiver: 'tencentcloud_css',
      });
    } else if (type === LiveRoomTypeEnum.pk) {
      updateWebRtcSrsConfig({
        isPk: true,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      webRtcSrs.newWebRtc({
        sender: mySocketId.value,
        receiver: 'srs',
        videoEl: createNullVideo(),
      });
      webRtcSrs.sendOffer({
        sender: mySocketId.value,
        receiver: 'srs',
      });
    } else if (type === LiveRoomTypeEnum.tencent_css_pk) {
      updateWebRtcTencentcloudCssConfig({
        isPk: true,
        roomId: roomId.value,
        canvasVideoStream: canvasVideoStream.value,
      });
      webRtcTencentcloudCss.newWebRtc({
        sender: mySocketId.value,
        receiver: 'tencentcloud_css',
        videoEl: createNullVideo(),
      });
      webRtcTencentcloudCss.sendOffer({
        sender: mySocketId.value,
        receiver: 'tencentcloud_css',
      });
    }
  }

  /**
   * 发送加入房间的消息
   */
  function sendJoin() {
    // 从 networkStore 的 wsMap 中获取当前 roomId 的 WebSocket 实例
    const instance = networkStore.wsMap.get(roomId.value);
    // 如果 WebSocket 实例不存在，则直接返回
    if (!instance) return;
    // 发送加入房间的消息
    instance.send<WsJoinType['data']>({
      // 生成一个随机的请求 ID
      requestId: getRandomString(8),
      // 消息类型为加入房间
      msgType: WsMsgTypeEnum.join,
      // 消息的数据部分
      data: {
        // 是否为远程桌面
        isRemoteDesk: isRemoteDesk.value,
        // 当前用户的 socket ID
        socketId: mySocketId.value,
        // 当前房间的 ID
        liveRoomId: roomId.value,
        // 当前用户的信息
        user_info: userStore.getInfo,
      },
    });
  }

  /**
   * 初始化接收 WebSocket 消息的函数
   */
  function initReceive() {
    // 从 networkStore 的 wsMap 中获取对应 roomId 的 WebSocket 实例
    const ws = networkStore.wsMap.get(roomId.value);
    // 如果 WebSocket 实例或其 socketIo 属性不存在，则直接返回
    if (!ws?.socketIo) return;
    // WebSocket 连接成功时的处理逻辑
    ws.socketIo.on(WsConnectStatusEnum.connect, () => {
      // 调用 prettierReceiveWsMsg 方法处理连接成功消息
      prettierReceiveWsMsg(WsConnectStatusEnum.connect, ws.socketIo);
      // 处理心跳连接
      handleHeartbeat(ws.socketIo!.id!);
      // 如果 WebSocket 实例不存在，则直接返回
      if (!ws) return;
      // 更新连接状态为已连接
      connectStatus.value = WsConnectStatusEnum.connect;
      // 更新 WebSocket 实例的状态为已连接
      ws.status = WsConnectStatusEnum.connect;
      // 调用 ws.update() 方法更新 WebSocket 实例
      ws.update();
      // 发送加入房间消息
      sendJoin();
    });

    // websocket连接断开
    ws.socketIo.on(WsConnectStatusEnum.disconnect, (err) => {
      prettierReceiveWsMsg(WsConnectStatusEnum.disconnect, ws);
      console.log('websocket连接断开', err);
      if (!ws) return;
      ws.status = WsConnectStatusEnum.disconnect;
      ws.update();
    });

    // 收到livePkKey
    ws.socketIo.on(WsMsgTypeEnum.livePkKey, (data: WSLivePkKeyType['data']) => {
      console.log('收到livePkKey', data);
      const url = router.resolve({
        name: routerName.pull,
        params: { roomId: data.liveRoomId },
        query: {
          pkKey: data.key,
        },
      });
      const pkurl = `${window.location.origin}${url.href}`;
      useTip({
        title: '邀请主播加入PK',
        width: '360px',
        hiddenCancel: true,
        content: h('div', [
          h('div', { style: { marginBottom: '5px' } }, `${pkurl}`),
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              color: THEME_COLOR,
              onClick: () => {
                copyToClipBoard(pkurl);
                message.success('复制成功！');
              },
            },
            () => '复制链接' // 用箭头函数返回性能更好。
          ),
          h('div', { style: { marginTop: '5px' } }, '注意，有效期：5分钟'),
        ]),
      }).catch(() => {});
    });

    // 收到startRemoteDesk
    ws.socketIo.on(WsMsgTypeEnum.startRemoteDesk, (data: WsStartRemoteDesk) => {
      console.log('收到startRemoteDesk', data.data.receiver);
      if (data.data.receiver === mySocketId.value) {
        appStore.remoteDesk.startRemoteDesk = true;
        appStore.remoteDesk.sender = data.data.sender;
      }
    });

    // 收到srsOffer
    ws.socketIo.on(WsMsgTypeEnum.srsOffer, (data: WsOfferType['data']) => {
      console.log('收到srsOffer', data);
    });

    // 收到srsAnswer
    ws.socketIo.on(WsMsgTypeEnum.srsAnswer, (data: WsAnswerType['data']) => {
      console.log('收到srsAnswer', data);
    });

    // 收到srsCandidate
    ws.socketIo.on(
      WsMsgTypeEnum.srsCandidate,
      (data: WsCandidateType['data']) => {
        console.log('收到srsCandidate', data);
        if (data.receiver === mySocketId.value) {
          console.warn('是发给我的srsCandidate');
          const rtc = networkStore.rtcMap.get(data.sender);
          rtc?.addIceCandidate(data.candidate);
        } else {
          console.error('不是发给我的srsCandidate');
        }
      }
    );

    // 收到nativeWebRtcOffer
    ws.socketIo.on(
      WsMsgTypeEnum.nativeWebRtcOffer,
      async (data: WsOfferType['data']) => {
        console.log('收到nativeWebRtcOffer', data);
        if (data.isRemoteDesk) {
          if (data.receiver === mySocketId.value) {
            console.warn('是发给我的nativeWebRtcOffer-isRemoteDesk');
            if (networkStore.rtcMap.get(data.sender)) {
              return;
            }
            updateWebRtcRemoteDeskConfig({
              roomId: roomId.value,
              userStream: userStream.value,
              anchorStream: canvasVideoStream.value,
            });
            webRtcRemoteDesk.newWebRtc({
              // 因为这里是收到offer，而offer是房主发的，所以此时的data.data.sender是房主；data.data.receiver是接收者；
              // 但是这里的nativeWebRtc的sender，得是自己，不能是data.data.sender，不要混淆
              sender: mySocketId.value,
              receiver: data.sender,
              videoEl: createNullVideo(),
            });
            await webRtcRemoteDesk.sendAnswer({
              sender: mySocketId.value,
              // data.data.receiver是接收者；我们现在new pc，发送者是自己，接收者肯定是房主，不能是data.data.receiver，因为data.data.receiver是自己
              receiver: data.sender,
              sdp: data.sdp,
            });
          } else {
            console.error('不是发给我的nativeWebRtcOffer-isRemoteDesk');
          }
          return;
        }
        if (
          data.live_room.type === LiveRoomTypeEnum.pk ||
          data.live_room.type === LiveRoomTypeEnum.tencent_css_pk
        ) {
          if (!route.query.pkKey) {
            return;
          }
          if (data.receiver === mySocketId.value) {
            console.warn('是发给我的nativeWebRtcOffer-pk-tencent_css_pk');
            updateWebRtcMeetingPkConfig({
              roomId: roomId.value,
              anchorStream: canvasVideoStream.value,
              // userStream: userStream.value,
            });
            webRtcMeetingPk.newWebRtc({
              // 因为这里是收到offer，而offer是房主发的，所以此时的data.data.sender是房主；data.data.receiver是接收者；
              // 但是这里的nativeWebRtc的sender，得是自己，不能是data.data.sender，不要混淆
              sender: mySocketId.value,
              receiver: data.sender,
              videoEl: createNullVideo(),
            });
            webRtcMeetingPk.addTrack({
              stream: userStream.value,
              receiver: data.sender,
            });
            await webRtcMeetingPk.sendAnswer({
              sender: mySocketId.value,
              // data.data.receiver是接收者；我们现在new pc，发送者是自己，接收者肯定是房主，不能是data.data.receiver，因为data.data.receiver是自己
              receiver: data.sender,
              sdp: data.sdp,
            });
          } else {
            console.error('不是发给我的nativeWebRtcOffer');
          }
        } else if (data.live_room.type === LiveRoomTypeEnum.wertc_live) {
          if (data.receiver === mySocketId.value) {
            console.warn('是发给我的nativeWebRtcOffer-wertc_live');
            if (networkStore.rtcMap.get(data.sender)) {
              return;
            }
            updateWebRtcLiveConfig({
              roomId: roomId.value,
              canvasVideoStream: canvasVideoStream.value,
            });
            webRtcLive.newWebRtc({
              // 因为这里是收到offer，而offer是房主发的，所以此时的data.data.sender是房主；data.data.receiver是接收者；
              // 但是这里的nativeWebRtc的sender，得是自己，不能是data.data.sender，不要混淆
              sender: mySocketId.value,
              receiver: data.sender,
              videoEl: createNullVideo(),
            });
            await webRtcLive.sendAnswer({
              sender: mySocketId.value,
              // data.data.receiver是接收者；我们现在new pc，发送者是自己，接收者肯定是房主，不能是data.data.receiver，因为data.data.receiver是自己
              receiver: data.sender,
              sdp: data.sdp,
            });
          } else {
            console.error('不是发给我的nativeWebRtcOffer');
          }
        } else if (data.live_room.type === LiveRoomTypeEnum.wertc_meeting_one) {
          if (data.receiver === mySocketId.value) {
            console.warn('是发给我的nativeWebRtcOffer-wertc_meeting_one');
            updateWebRtcMeetingOneConfig({
              roomId: roomId.value,
              // userStream: userStream.value,
              anchorStream: canvasVideoStream.value,
            });
            if (networkStore.rtcMap.get(data.sender)) {
              return;
            }
            webRtcMeetingOne.newWebRtc({
              // 因为这里是收到offer，而offer是房主发的，所以此时的data.data.sender是房主；data.data.receiver是接收者；
              // 但是这里的nativeWebRtc的sender，得是自己，不能是data.data.sender，不要混淆
              sender: mySocketId.value,
              receiver: data.sender,
              videoEl: createNullVideo(),
            });
            webRtcMeetingOne.addTrack({
              stream: userStream.value,
              receiver: data.sender,
            });
            await webRtcMeetingOne.sendAnswer({
              sender: mySocketId.value,
              // data.data.receiver是接收者；我们现在new pc，发送者是自己，接收者肯定是房主，不能是data.data.receiver，因为data.data.receiver是自己
              receiver: data.sender,
              sdp: data.sdp,
            });
          } else {
            console.error('不是发给我的nativeWebRtcOffer');
          }
        }
      }
    );

    // 收到nativeWebRtcAnswer
    ws.socketIo.on(
      WsMsgTypeEnum.nativeWebRtcAnswer,
      async (data: WsAnswerType['data']) => {
        console.log('收到nativeWebRtcAnswer', data);
        if (data.receiver === mySocketId.value) {
          console.warn('是发给我的nativeWebRtcAnswer');
          const rtc = networkStore.rtcMap.get(data.sender);
          if (rtc) {
            await rtc.setRemoteDescription(data.sdp);
          }
        } else {
          console.error('不是发给我的nativeWebRtcAnswer');
        }
      }
    );

    // 收到nativeWebRtcCandidate
    ws.socketIo.on(
      WsMsgTypeEnum.nativeWebRtcCandidate,
      (data: WsCandidateType['data']) => {
        console.log('收到nativeWebRtcCandidate', data);
        if (data.receiver === mySocketId.value) {
          console.warn('是发给我的nativeWebRtcCandidate');
          const rtc = networkStore.rtcMap.get(data.sender);
          rtc?.addIceCandidate(data.candidate);
        } else {
          console.error('不是发给我的nativeWebRtcCandidate');
        }
      }
    );

    // 收到remoteDeskBehavior
    ws.socketIo.on(
      WsMsgTypeEnum.remoteDeskBehavior,
      (data: WsRemoteDeskBehaviorType['data']) => {
        console.log('收到remoteDeskBehavior', data);
      }
    );

    // 主播正在直播
    ws.socketIo.on(
      WsMsgTypeEnum.roomLiving,
      async (data: WsRoomLivingType['data']) => {
        prettierReceiveWsMsg(WsMsgTypeEnum.roomLiving, data);
        roomLiving.value = true;
        if (data.anchor_socket_id) {
          anchorSocketId.value = data.anchor_socket_id;
        }
        if (
          route.name === routerName.pull ||
          route.name === routerName.h5Room
        ) {
          // 当前是拉流页面
          if (data.live_room?.type === LiveRoomTypeEnum.wertc_meeting_one) {
            await handleMeeting();
          } else if (data.live_room?.type === LiveRoomTypeEnum.pk) {
            await handlePk();
          }
        } else if (route.name === routerName.push) {
          // 当前是推流页面
          console.log('当前是推流页面');
        }
      }
    );

    // 主播不在直播
    ws.socketIo.on(WsMsgTypeEnum.roomNoLive, (data) => {
      prettierReceiveWsMsg(WsMsgTypeEnum.roomNoLive, data);
      roomLiving.value = false;
    });

    // 当前所有在线用户
    ws.socketIo.on(
      WsMsgTypeEnum.liveUser,
      (data: WSGetRoomAllUserType['data']) => {
        prettierReceiveWsMsg(WsMsgTypeEnum.liveUser, data);
        liveUserList.value = data.liveUser;
      }
    );

    // 收到用户发送消息
    ws.socketIo.on(WsMsgTypeEnum.message, (data: WsMessageType) => {
      prettierReceiveWsMsg(WsMsgTypeEnum.message, data);
      damuList.value.push({
        user_agent: data.data.user_agent,
        liveRoomId: data.data.liveRoomId,
        request_id: data.request_id,
        socket_id: data.socket_id,
        msgType: data.data.msgType,
        msg: data.data.msg,
        userInfo: data.user_info,
        msgIsFile: data.data.msgIsFile,
        send_msg_time: data.data.send_msg_time,
      });
    });

    // 收到disableSpeaking
    ws.socketIo.on(
      WsMsgTypeEnum.disableSpeaking,
      (data: WsDisableSpeakingType['data']) => {
        prettierReceiveWsMsg(WsMsgTypeEnum.disableSpeaking, data);
        // if (data.is_disable_speaking) {
        //   message.error('你已被禁言！');
        //   appStore.disableSpeaking.set(data.liveRoomId, {
        //     exp: data.disable_expired_at,
        //     label: formatDownTime({
        //       startTime: +new Date(),
        //       endTime: data.disable_expired_at,
        //     }),
        //   });
        //   clearTimeout(timerObj.value[data.liveRoomId]);
        //   timerObj.value[data.liveRoomId] = setInterval(() => {
        //     if (
        //       data.disable_expired_at &&
        //       +new Date() > data.disable_expired_at
        //     ) {
        //       clearTimeout(timerObj.value[data.liveRoomId]);
        //     }
        //     appStore.disableSpeaking.set(data.liveRoomId, {
        //       exp: data.disable_expired_at!,
        //       label: formatDownTime({
        //         startTime: +new Date(),
        //         endTime: data.disable_expired_at!,
        //       }),
        //     });
        //   }, 1000);
        //   damuList.value = damuList.value.filter(
        //     (v) => v.request_id !== data.request_id
        //   );
        // }
        if (data.user_id !== userStore.userInfo?.id && data.disable_ok) {
          message.success('禁言成功！');
        }
        if (
          data.user_id !== userStore.userInfo?.id &&
          data.restore_disable_ok
        ) {
          message.success('解除禁言成功！');
        }
        if (
          data.user_id === userStore.userInfo?.id &&
          data.restore_disable_ok
        ) {
          message.success('禁言接触了！');
          clearTimeout(timerObj.value[data.liveRoomId]);
          appStore.disableSpeaking.delete(data.liveRoomId);
        }
      }
    );

    async function handleMeeting() {
      await useTip({
        content: '是否加入会议？',
      });
      const stream = await handleUserMedia({
        video: true,
        audio: true,
      });
      console.log(stream?.getAudioTracks());
      console.log(stream?.getVideoTracks(), 1111);
      userStream.value = stream;
      networkStore.wsMap.get(roomId.value)?.send<WsBatchSendOffer['data']>({
        requestId: getRandomString(8),
        msgType: WsMsgTypeEnum.batchSendOffer,
        data: {
          roomId: roomId.value,
        },
      });
    }
    async function handlePk() {
      if (!route.query.pkKey) {
        return;
      }
      const res = await fetchVerifyPkKey({
        liveRoomId: Number(roomId.value),
        key: route.query.pkKey,
      });
      if (res.data.code === 200 && res.data.data === true) {
        await useTip({
          content: '是否加入PK？',
        });
        const stream = await handleUserMedia({
          video: true,
          audio: true,
        });
        userStream.value = stream;
        networkStore.wsMap.get(roomId.value)?.send<WsBatchSendOffer['data']>({
          requestId: getRandomString(8),
          msgType: WsMsgTypeEnum.batchSendOffer,
          data: {
            roomId: roomId.value,
          },
        });
      } else {
        await useTip({
          content: '加入PK失败，验证pkKey错误！',
          hiddenCancel: true,
          hiddenClose: true,
        });
      }
    }

    // 用户加入房间完成
    ws.socketIo.on(WsMsgTypeEnum.joined, async (data: WsJoinType['data']) => {
      console.log(data, 'joined');
      prettierReceiveWsMsg(WsMsgTypeEnum.joined, data);
      appStore.setLiveRoomInfo(data.live_room);
      anchorInfo.value = data.anchor_info;
      if (route.name === routerName.pull || route.name === routerName.h5Room) {
        // 当前是拉流页面
        if (
          roomLiving.value &&
          data.live_room?.type === LiveRoomTypeEnum.wertc_meeting_one
        ) {
          await handleMeeting();
        } else if (
          roomLiving.value &&
          data.live_room?.type === LiveRoomTypeEnum.pk
        ) {
          await handlePk();
        }
      }
    });

    // batchSendOffer
    ws.socketIo.on(
      WsMsgTypeEnum.batchSendOffer,
      (data: WsBatchSendOffer['data']) => {
        if (
          appStore.liveRoomInfo?.type === LiveRoomTypeEnum.wertc_meeting_one
        ) {
          data.socket_list?.forEach((item) => {
            if (item !== mySocketId.value) {
              if (networkStore.rtcMap.get(item)) {
                return;
              }
              webRtcMeetingOne.newWebRtc({
                sender: mySocketId.value,
                receiver: item,
                videoEl: createNullVideo(),
              });
              webRtcMeetingOne.sendOffer({
                sender: mySocketId.value,
                receiver: item,
              });
            }
          });
        } else if (appStore.liveRoomInfo?.type === LiveRoomTypeEnum.pk) {
          data.socket_list?.forEach((item) => {
            if (item !== mySocketId.value) {
              if (networkStore.rtcMap.get(item)) {
                return;
              }
              webRtcMeetingPk.newWebRtc({
                sender: mySocketId.value,
                receiver: item,
                videoEl: createNullVideo(),
              });
              webRtcMeetingPk.sendOffer({
                sender: mySocketId.value,
                receiver: item,
              });
            }
          });
        }
      }
    );

    // 其他用户加入房间
    ws.socketIo.on(WsMsgTypeEnum.otherJoin, (data: WsOtherJoinType['data']) => {
      prettierReceiveWsMsg(WsMsgTypeEnum.otherJoin, data);
      const requestId = getRandomString(8);
      const danmu: IDanmu = {
        liveRoomId: data.live_room.id!,
        request_id: requestId,
        msgType: DanmuMsgTypeEnum.otherJoin,
        socket_id: data.join_socket_id,
        userInfo: data.join_user_info,
        msgIsFile: WsMessageMsgIsFileEnum.no,
        msg: '',
        send_msg_time: +new Date(),
      };
      damuList.value.push(danmu);
      if (route.name === routerName.push) {
        // 当前是推流页面
        if (!isAnchor.value) {
          console.error('不是主播');
          return;
        }
        if (!roomLiving.value) {
          console.error('主播没点开始直播');
          return;
        }
        if (userStore.userInfo?.id === data.join_user_info?.id) {
          console.error('自己进入直播间，退出');
          return;
        }
        if (
          [
            LiveRoomTypeEnum.system,
            LiveRoomTypeEnum.srs,
            LiveRoomTypeEnum.obs,
          ].includes(data.live_room.type!)
        ) {
          return;
        }
        if (data.live_room.type === LiveRoomTypeEnum.wertc_live) {
          updateWebRtcLiveConfig({
            roomId: roomId.value,
            canvasVideoStream: canvasVideoStream.value,
          });
          data.socket_list.forEach((item) => {
            if (item !== mySocketId.value) {
              if (networkStore.rtcMap.get(item)) {
                return;
              }
              webRtcLive.newWebRtc({
                sender: mySocketId.value,
                receiver: item,
                videoEl: createNullVideo(),
              });
              webRtcLive.sendOffer({
                sender: mySocketId.value,
                receiver: item,
              });
            }
          });
        } else if (data.live_room.type === LiveRoomTypeEnum.wertc_meeting_one) {
          updateWebRtcMeetingOneConfig({
            roomId: roomId.value,
            anchorStream: canvasVideoStream.value,
          });
          // data.socket_list?.forEach((item) => {
          //   if (item !== mySocketId.value) {
          //     if (networkStore.rtcMap.get(item)) {
          //       return;
          //     }
          //     webRtcMeetingOne.newWebRtc({
          //       sender: mySocketId.value,
          //       receiver: item,
          //       videoEl: createNullVideo(),
          //     });
          //     webRtcMeetingOne.sendOffer({
          //       sender: mySocketId.value,
          //       receiver: item,
          //     });
          //   }
          // });
        } else if (data.live_room.type === LiveRoomTypeEnum.pk) {
          updateWebRtcMeetingPkConfig({
            roomId: roomId.value,
            anchorStream: canvasVideoStream.value,
          });
          // data.socket_list?.forEach((item) => {
          //   if (item !== mySocketId.value) {
          //     if (networkStore.rtcMap.get(item)) {
          //       return;
          //     }
          //     webRtcMeetingPk.newWebRtc({
          //       sender: mySocketId.value,
          //       receiver: item,
          //       videoEl: createNullVideo(),
          //     });
          //     webRtcMeetingPk.sendOffer({
          //       sender: mySocketId.value,
          //       receiver: item,
          //     });
          //   }
          // });
        } else if (data.live_room.type === LiveRoomTypeEnum.tencent_css_pk) {
          updateWebRtcMeetingPkConfig({
            roomId: roomId.value,
            anchorStream: canvasVideoStream.value,
          });
          data.socket_list?.forEach((item) => {
            if (item !== mySocketId.value) {
              if (networkStore.rtcMap.get(item)) {
                return;
              }
              webRtcMeetingPk.newWebRtc({
                sender: mySocketId.value,
                receiver: item,
                videoEl: createNullVideo(),
              });
              webRtcMeetingPk.sendOffer({
                sender: mySocketId.value,
                receiver: item,
              });
            }
          });
        }
      } else {
        // 当前不是推流页面
      }
    });

    // 用户离开房间
    ws.socketIo.on(WsMsgTypeEnum.leave, (data) => {
      prettierReceiveWsMsg(WsMsgTypeEnum.leave, data);
    });

    // 用户离开房间完成
    ws.socketIo.on(WsMsgTypeEnum.leaved, (data: WsLeavedType['data']) => {
      prettierReceiveWsMsg(WsMsgTypeEnum.leaved, data);
      if (anchorSocketId.value === data.socket_id) {
        roomLiving.value = false;
      }
      networkStore.removeRtc(data.socket_id);
      damuList.value.push({
        liveRoomId: Number(roomId.value),
        socket_id: data.socket_id,
        msgType: DanmuMsgTypeEnum.userLeaved,
        msgIsFile: WsMessageMsgIsFileEnum.no,
        userInfo: data.user_info,
        msg: '',
        send_msg_time: +new Date(),
      });
    });
  }

  function initWs(data: {
    isAnchor: boolean;
    roomId: string;
    isRemoteDesk?: boolean;
    currentResolutionRatio?: number;
    currentMaxFramerate?: number;
    currentMaxBitrate?: number;
  }) {
    roomId.value = data.roomId;
    isAnchor.value = data.isAnchor;
    if (data.isRemoteDesk) {
      isRemoteDesk.value = data.isRemoteDesk;
    }
    if (data.currentMaxBitrate) {
      currentMaxBitrate.value = data.currentMaxBitrate;
    }
    if (data.currentMaxFramerate) {
      currentMaxFramerate.value = data.currentMaxFramerate;
    }
    if (data.currentResolutionRatio) {
      currentResolutionRatio.value = data.currentResolutionRatio;
    }
    console.log('initWs', data)
    new WebSocketClass({
      roomId: roomId.value,
      url: WEBSOCKET_URL,
      isAnchor: data.isAnchor,
    });
    initReceive();
  }

  return {
    initWs,
    handleStartLive,
    connectStatus,
    mySocketId,
    canvasVideoStream,
    lastCoverImg,
    roomLiving,
    anchorInfo,
    liveUserList,
    damuList,
    currentMaxFramerate,
    currentMaxBitrate,
    currentResolutionRatio,
    currentAudioContentHint,
    currentVideoContentHint,
  };
};
