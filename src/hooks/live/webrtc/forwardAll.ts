import { getRandomString } from 'billd-utils';
import { ref } from 'vue';

import { fetchRtcV1Publish } from '@/api/live/srs';
import { SRS_CB_URL_PARAMS } from '@/constant';
import { useRTCParams } from '@/hooks/live/use-rtcParams';
import { useNetworkStore } from '@/store/network';
import { useUserStore } from '@/store/modules/user';
import { LiveRoomTypeEnum } from '@/api/live/types/ILiveRoom';
import { WebRTCClass } from '@/utils/network/webRTC';
import {message} from "ant-design-vue";
import {fetchUserHasLiveRoom} from "@/api/live/userLiveRoom";

export const useForwardAll = () => {
  const userStore = useUserStore();
  const networkStore = useNetworkStore();

  const { maxBitrate, maxFramerate, resolutionRatio } = useRTCParams();
  const currentMaxBitrate = ref(maxBitrate.value[3].value);
  const currentMaxFramerate = ref(maxFramerate.value[2].value);
  const currentResolutionRatio = ref(resolutionRatio.value[3].value);
  const isPk = ref(false);
  const roomId = ref('');
  const canvasVideoStream = ref<MediaStream>();

  function updateForwardAllConfig(data: { isPk; roomId; canvasVideoStream }) {
    isPk.value = data.isPk;
    roomId.value = data.roomId;
    canvasVideoStream.value = data.canvasVideoStream;
  }

  const forwardAll = {
    newWebRtc: (data: {
      sender: string;
      receiver: string;
      videoEl: HTMLVideoElement;
    }) => {
      return new WebRTCClass({
        maxBitrate: currentMaxBitrate.value,
        maxFramerate: currentMaxFramerate.value,
        resolutionRatio: currentResolutionRatio.value,
        isSRS: true,
        roomId: roomId.value,
        videoEl: data.videoEl,
        sender: data.sender,
        receiver: data.receiver,
      });
    },
    /**
     * 主播发offer给观众
     */
    sendOffer: async ({
      sender,
      receiver,
    }: {
      sender: string;
      receiver: string;
    }) => {
      console.log('开始ForwardAll的sendOffer', {
        sender,
        receiver,
      });
      try {
        const ws = networkStore.wsMap.get(roomId.value);
        if (!ws) return;
        const rtc = networkStore.rtcMap.get(receiver);
        if (rtc) {
          canvasVideoStream.value?.getTracks().forEach((track) => {
            if (canvasVideoStream.value) {
              console.log(
                'ForwardAll的canvasVideoStream插入track',
                track.kind,
                track
              );
              rtc.peerConnection?.addTrack(track, canvasVideoStream.value);
            }
          });
          const offerSdp = await rtc.createOffer();
          if (!offerSdp) {
            console.error('ForwardAll的offerSdp为空');
            message.error('ForwardAll的offerSdp为空');
            return;
          }
          await rtc.setLocalDescription(offerSdp!);
          const userId = userStore.userInfo?.userId;
          const liveRooms = await fetchUserHasLiveRoom(userId);
          const myLiveRoom = liveRooms.data.data.live_room?.[0];
          if (!myLiveRoom) {
            message.error('你没有开通直播间');
            return;
          }
          const answerRes = await fetchRtcV1Publish({
            api: `/rtc/v1/publish/`,
            clientip: null,
            sdp: offerSdp.sdp!,
            streamurl: `${myLiveRoom.rtmp_url!}?${
              SRS_CB_URL_PARAMS.publishKey
            }=${myLiveRoom.key!}&${SRS_CB_URL_PARAMS.publishType}=${
              isPk.value ? LiveRoomTypeEnum.pk : LiveRoomTypeEnum.forward_all
            }`,
            tid: getRandomString(10),
          });
          if (answerRes.data.code !== 0) {
            console.error('/rtc/v1/publish/拿不到sdp');
            message.error('/rtc/v1/publish/拿不到sdp');
            return;
          }
          await rtc.setRemoteDescription(
            new RTCSessionDescription({
              type: 'answer',
              sdp: answerRes.data.sdp,
            })
          );
        } else {
          console.error('rtc不存在');
        }
      } catch (error) {
        console.error('ForwardAll的sendOffer错误');
      }
    },
  };

  return { updateForwardAllConfig, forwardAll };
};
