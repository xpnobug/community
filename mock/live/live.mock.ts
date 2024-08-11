// mock/index.ts
import { MockMethod } from 'vite-plugin-mock';

const mock: MockMethod[] = [
  {
    url: '/api/mock/live/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 9,
          "hasMore": false,
          "total": 9,
          "rows": [
            {
              "id": 1509,
              "socket_id": "-1",
              "live_room_id": 4,
              "user_id": 4,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "h441625y",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-pull.reaicc.com/live",
              "srs_stream": "roomId___4",
              "srs_param": "?roomid=4&pushtype=0&pushkey=0a97198c5ea5aad3a041ff73501b32c8",
              "srs_stream_url": "/livestream",
              "srs_stream_id": "vid-8f4692j",
              "is_tencentcloud_css": 2,
              "flag_id": "h441625y",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 20,
              "live_room_is_fake": 2,
              "user": {
                "id": 4,
                "username": "MoonTIT",
                "status": 0,
                "avatar": "https://resource.hsslive.cn/billd-live/image/2b045c7f02febd23893244e923115535.webp",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2024-01-28 18:46:18",
                "deleted_at": null
              },
              "live_room": {
                "id": 4,
                "name": "日落",
                "desc": "日落",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 20,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-pull.reaicc.com/live/livestream",
                "flv_url": "https://srs-pull.reaicc.com/live/livestream/room1.flv",
                "hls_url": "https://srs-pull.reaicc.com/live/livestream/room1.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___4",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___4.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___4.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___4",
                "is_fake": 2,
                "created_at": "2023-07-01 20:25:13",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1510,
              "socket_id": "-1",
              "live_room_id": 2,
              "user_id": 2,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "",
              "srs_service_id": "",
              "srs_action": "",
              "srs_client_id": "",
              "srs_ip": "",
              "srs_vhost": "",
              "srs_app": "",
              "srs_tcUrl": "",
              "srs_stream": "",
              "srs_param": "",
              "srs_stream_url": "",
              "srs_stream_id": "",
              "is_tencentcloud_css": 1,
              "flag_id": "2175523530405723913",
              "created_at": "2024-07-29 19:13:29",
              "updated_at": "2024-07-29 19:13:29",
              "deleted_at": null,
              "live_room_weight": 10,
              "live_room_is_fake": 2,
              "user": {
                "id": 2,
                "username": "CoCo",
                "status": 0,
                "avatar": "https://resource.hsslive.cn/billd-live/image/15a116a978cadb34e9fbf0061a4145bc.webp",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-12-15 23:26:03",
                "deleted_at": null
              },
              "live_room": {
                "id": 2,
                "name": "成龙历险记",
                "desc": "成龙历险记",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 0,
                "weight": 10,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-pull.reaicc.com/live/livestream",
                "flv_url": "https://srs-pull.reaicc.com/live/livestream/room2.flv",
                "hls_url": "https://srs-pull.reaicc.com/live/livestream/room2.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___2",
                "cdn_flv_url": "https://srs-pull.reaicc.com/live/livestream/room2.flv",
                "cdn_hls_url": "https://srs-pull.reaicc.com/live/livestream/room2.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___2",
                "is_fake": 2,
                "created_at": "2023-07-01 20:25:13",
                "updated_at": "2024-07-29 19:13:29",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1507,
              "socket_id": "-1",
              "live_room_id": 12,
              "user_id": 12,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "b85288v5",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___12",
              "srs_param": "?roomid=12&pushtype=0&pushkey=c2d9a7d2cbed65752193551709b18af6",
              "srs_stream_url": "/livestream/roomId___12",
              "srs_stream_id": "vid-h2677p7",
              "is_tencentcloud_css": 2,
              "flag_id": "b85288v5",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 10,
              "live_room_is_fake": 2,
              "user": {
                "id": 12,
                "username": "user-12",
                "status": 0,
                "avatar": "",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-15 01:39:13",
                "updated_at": "2023-07-15 01:39:13",
                "deleted_at": null
              },
              "live_room": {
                "id": 12,
                "name": "光遇~",
                "desc": "光遇~",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 10,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-pull.reaicc.com/live/livestream",
                "flv_url": "https://srs-pull.reaicc.com/live/livestream/room3.flv",
                "hls_url": "https://srs-pull.reaicc.com/live/livestream/room3.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___12",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___12.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___12.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___12",
                "is_fake": 2,
                "created_at": "2023-07-15 01:39:13",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 2,
                    "name": "知识",
                    "weight": 9,
                    "remark": "知识分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1506,
              "socket_id": "-1",
              "live_room_id": 3,
              "user_id": 3,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "739h5919",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___3",
              "srs_param": "?roomid=3&pushtype=0&pushkey=64caf64938acbb19b41ef7752a590086",
              "srs_stream_url": "/livestream/roomId___3",
              "srs_stream_id": "vid-46wr65n",
              "is_tencentcloud_css": 2,
              "flag_id": "739h5919",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 3,
              "live_room_is_fake": 2,
              "user": {
                "id": 3,
                "username": "Dukoo",
                "status": 0,
                "avatar": "https://resource.hsslive.cn/billd-live/image/752a40d44811c99278961410da656464.webp",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-12-15 23:28:15",
                "deleted_at": null
              },
              "live_room": {
                "id": 3,
                "name": "房东的猫-和宇宙的温柔关联",
                "desc": "房东的猫livehouse合集",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 0,
                "cdn": 1,
                "weight": 3,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___3",
                "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___3.flv",
                "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___3.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___3",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___3.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___3.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___3",
                "is_fake": 2,
                "created_at": "2023-07-01 20:25:13",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1502,
              "socket_id": "-1",
              "live_room_id": 5,
              "user_id": 5,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "32cma281",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___5",
              "srs_param": "?roomid=5&pushtype=0&pushkey=1c30fa0ac12762f544528e5a0279a199",
              "srs_stream_url": "/livestream/roomId___5",
              "srs_stream_id": "vid-0526c30",
              "is_tencentcloud_css": 2,
              "flag_id": "32cma281",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 2,
              "live_room_is_fake": 2,
              "user": {
                "id": 5,
                "username": "Nill",
                "status": 0,
                "avatar": "https://resource.hsslive.cn/billd-live/image/2142b19fe33e1fd7ed848104f64c4fd4.webp",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-07-07 14:09:36",
                "deleted_at": null
              },
              "live_room": {
                "id": 5,
                "name": "房东的猫-下一站茶山刘",
                "desc": "房东的猫livehouse合集",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 2,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___5",
                "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___5.flv",
                "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___5.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___5",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___5.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___5.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___5",
                "is_fake": 2,
                "created_at": "2023-07-01 20:25:13",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1503,
              "socket_id": "-1",
              "live_room_id": 7,
              "user_id": 7,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "v1l34228",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___7",
              "srs_param": "?roomid=7&pushtype=0&pushkey=12c051470b608f35e2a426df8c18ef2c",
              "srs_stream_url": "/livestream/roomId___7",
              "srs_stream_id": "vid-8394i36",
              "is_tencentcloud_css": 2,
              "flag_id": "v1l34228",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 2,
              "live_room_is_fake": 2,
              "user": {
                "id": 7,
                "username": "user-7",
                "status": 0,
                "avatar": "",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-07-07 14:09:36",
                "deleted_at": null
              },
              "live_room": {
                "id": 7,
                "name": "周杰伦-不能说的秘密",
                "desc": "周杰伦演唱会合集",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 2,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___7",
                "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___7.flv",
                "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___7.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___7",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___7.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___7.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___7",
                "is_fake": 2,
                "created_at": "2023-07-01 20:25:13",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1504,
              "socket_id": "-1",
              "live_room_id": 9,
              "user_id": 9,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "85k3d3sr",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___9",
              "srs_param": "?roomid=9&pushtype=0&pushkey=9b68d679212bf46c21652e059ce875a5",
              "srs_stream_url": "/livestream/roomId___9",
              "srs_stream_id": "vid-52s8366",
              "is_tencentcloud_css": 2,
              "flag_id": "85k3d3sr",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 2,
              "live_room_is_fake": 2,
              "user": {
                "id": 9,
                "username": "user-9",
                "status": 0,
                "avatar": "",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-07-07 14:09:36",
                "deleted_at": null
              },
              "live_room": {
                "id": 9,
                "name": "房东的猫-一次就好",
                "desc": "房东的猫livehouse合集",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 2,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___9",
                "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___9.flv",
                "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___9.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___9",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___9.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___9.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___9",
                "is_fake": 2,
                "created_at": "2023-07-02 20:01:44",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1505,
              "socket_id": "-1",
              "live_room_id": 10,
              "user_id": 10,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "4251082f",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___10",
              "srs_param": "?roomid=10&pushtype=0&pushkey=abef43bafccb0ba9de8a9ae99b2a8f32",
              "srs_stream_url": "/livestream/roomId___10",
              "srs_stream_id": "vid-8a83794",
              "is_tencentcloud_css": 2,
              "flag_id": "4251082f",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 2,
              "live_room_is_fake": 2,
              "user": {
                "id": 10,
                "username": "user-10",
                "status": 0,
                "avatar": "",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-07-07 14:09:36",
                "deleted_at": null
              },
              "live_room": {
                "id": 10,
                "name": "七龙珠-渐渐被你吸引",
                "desc": "龙珠系列合集",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 2,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___10",
                "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___10.flv",
                "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___10.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___10",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___10.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___10.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___10",
                "is_fake": 2,
                "created_at": "2023-07-02 20:01:44",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            },
            {
              "id": 1508,
              "socket_id": "-1",
              "live_room_id": 6,
              "user_id": 6,
              "track_video": 1,
              "track_audio": 1,
              "srs_server_id": "vid-9986p5k",
              "srs_service_id": "67l814uy",
              "srs_action": "on_publish",
              "srs_client_id": "v3u11044",
              "srs_ip": "8.218.5.78",
              "srs_vhost": "__defaultVhost__",
              "srs_app": "livestream",
              "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
              "srs_stream": "roomId___6",
              "srs_param": "?roomid=6&pushtype=0&pushkey=c0875570176bc0fdd8788767346c9f43",
              "srs_stream_url": "/livestream/roomId___6",
              "srs_stream_id": "vid-87yq1xs",
              "is_tencentcloud_css": 2,
              "flag_id": "v3u11044",
              "created_at": "2024-07-29 19:13:28",
              "updated_at": "2024-07-29 19:13:28",
              "deleted_at": null,
              "live_room_weight": 2,
              "live_room_is_fake": 2,
              "user": {
                "id": 6,
                "username": "Ojin",
                "status": 0,
                "avatar": "https://resource.hsslive.cn/billd-live/image/7e048083bb5dccde76018625b644c84b.webp",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2023-07-07 14:09:36",
                "updated_at": "2023-07-07 14:09:36",
                "deleted_at": null
              },
              "live_room": {
                "id": 6,
                "name": "房东的猫-你是我为数不多的骄傲",
                "desc": "房东的猫livehouse合集",
                "status": 0,
                "is_show": 0,
                "remark": null,
                "type": 0,
                "pull_is_should_auth": 1,
                "cdn": 1,
                "weight": 2,
                "cover_img": null,
                "bg_img": null,
                "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___6",
                "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___6.flv",
                "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___6.m3u8",
                "webrtc_url": "",
                "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___6",
                "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___6.flv",
                "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___6.m3u8",
                "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___6",
                "is_fake": 2,
                "created_at": "2023-07-01 20:25:13",
                "updated_at": "2024-07-29 19:13:28",
                "deleted_at": null,
                "areas": [
                  {
                    "id": 1,
                    "name": "音乐",
                    "weight": 10,
                    "remark": "音乐分区",
                    "created_at": "2023-07-01 20:25:13",
                    "updated_at": "2023-07-01 20:25:13",
                    "deleted_at": null
                  }
                ]
              }
            }
          ]
        },
      };
    },
  },
  {
    url: '/api/goods/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 4,
          "hasMore": false,
          "total": 4,
          "rows": [
            {
              "id": 1,
              "name": "鲜花",
              "type": "gift",
              "desc": "一朵鲜花",
              "short_desc": "鲜花",
              "cover": "https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp",
              "price": 1,
              "original_price": 1,
              "nums": 1,
              "badge": "",
              "badge_bg": "pink",
              "remark": null,
              "created_at": "2024-01-28 18:25:24",
              "updated_at": "2024-01-28 18:25:24",
              "deleted_at": null
            },
            {
              "id": 2,
              "name": "可乐",
              "type": "gift",
              "desc": "肥宅快乐水",
              "short_desc": "可乐",
              "cover": "https://resource.hsslive.cn/billd-live/image/3f56506ae5f536864dbc92b52c355bfe.webp",
              "price": 200,
              "original_price": 200,
              "nums": 1,
              "badge": "新品",
              "badge_bg": "#e60c0d",
              "remark": null,
              "created_at": "2024-01-28 18:25:24",
              "updated_at": "2024-01-28 18:25:24",
              "deleted_at": null
            },
            {
              "id": 3,
              "name": "大鸡腿",
              "type": "gift",
              "desc": "美味的大鸡腿，谁顶得住？",
              "short_desc": "大鸡腿",
              "cover": "https://resource.hsslive.cn/billd-live/image/3f4e7debdc978741f90515ace48aee22.webp",
              "price": 500,
              "original_price": 500,
              "nums": 1,
              "badge": "",
              "badge_bg": "",
              "remark": null,
              "created_at": "2024-01-28 18:25:24",
              "updated_at": "2024-01-28 18:25:24",
              "deleted_at": null
            },
            {
              "id": 4,
              "name": "一杯咖啡",
              "type": "gift",
              "desc": "给阿姨倒一杯卡布奇诺",
              "short_desc": "一杯咖啡",
              "cover": "https://resource.hsslive.cn/billd-live/image/d9770d31ac7350556103c0b1ed09e01d.webp",
              "price": 1000,
              "original_price": 1000,
              "nums": 1,
              "badge": "肝！",
              "badge_bg": "#cda8a1",
              "remark": null,
              "created_at": "2024-01-28 18:25:24",
              "updated_at": "2024-01-28 18:25:24",
              "deleted_at": null
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/ws_message/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 10,
          "hasMore": true,
          "total": 39,
          "rows": [
            {
              "id": 241,
              "live_room_id": 4,
              "user_id": 371,
              "redbag_send_id": null,
              "ip": "223.104.84.95",
              "content": "🥰",
              "origin_content": "🥰",
              "username": "118.2",
              "origin_username": "118.2",
              "msg_is_file": 1,
              "msg_type": 0,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
              "send_msg_time": "1722461791591",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-08-01 05:36:31",
              "updated_at": "2024-08-01 05:36:31",
              "deleted_at": null,
              "user": {
                "id": 371,
                "username": "118.2",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQCs22sVfVGynuyqzAykvk4n0gXGcbOVdWRNxlicvh8JzAaWreMypRsiaMaBwUD5AAqxGnHlT5/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-08-01 05:36:19",
                "updated_at": "2024-08-01 05:36:20",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 285,
                      "user_id": 371,
                      "role_id": 6,
                      "created_at": "2024-08-01 05:36:19",
                      "updated_at": "2024-08-01 05:36:19",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 238,
              "live_room_id": 4,
              "user_id": 369,
              "redbag_send_id": null,
              "ip": "13.231.214.236",
              "content": "帆帆帆帆",
              "origin_content": "帆帆帆帆",
              "username": "⩘⩗",
              "origin_username": "⩘⩗",
              "msg_is_file": 1,
              "msg_type": 0,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              "send_msg_time": "1721571359846",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-07-21 22:15:59",
              "updated_at": "2024-07-21 22:15:59",
              "deleted_at": null,
              "user": {
                "id": 369,
                "username": "⩘⩗",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQIWcc66Y44jsKDG65UFp0xs23Wr8W0vPicurpqQfxQsNFHel17eXZAoj2zJBW8XkEq6gWl9z/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-07-21 22:15:55",
                "updated_at": "2024-07-21 22:15:55",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 283,
                      "user_id": 369,
                      "role_id": 6,
                      "created_at": "2024-07-21 22:15:55",
                      "updated_at": "2024-07-21 22:15:55",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 237,
              "live_room_id": 4,
              "user_id": 345,
              "redbag_send_id": null,
              "ip": "42.70.78.130",
              "content": "sdf",
              "origin_content": "sdf",
              "username": "Irene Chen",
              "origin_username": "Irene Chen",
              "msg_is_file": 1,
              "msg_type": 0,
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              "send_msg_time": "1721396962453",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-07-19 21:49:22",
              "updated_at": "2024-07-19 21:49:22",
              "deleted_at": null,
              "user": {
                "id": 345,
                "username": "Irene Chen",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQOn1mWdVyDOpOyhJiaFd8o1BQa38XUicIhBtmh8TH9s6McmuKSdMuwfG5QaVMQ9XU5J7DwFV2/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-05-29 23:47:46",
                "updated_at": "2024-07-19 21:49:16",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 259,
                      "user_id": 345,
                      "role_id": 6,
                      "created_at": "2024-05-29 23:47:46",
                      "updated_at": "2024-05-29 23:47:46",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 236,
              "live_room_id": 4,
              "user_id": 345,
              "redbag_send_id": null,
              "ip": "42.70.78.130",
              "content": "sdf",
              "origin_content": "sdf",
              "username": "Irene Chen",
              "origin_username": "Irene Chen",
              "msg_is_file": 1,
              "msg_type": 0,
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              "send_msg_time": "1721396961329",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-07-19 21:49:21",
              "updated_at": "2024-07-19 21:49:21",
              "deleted_at": null,
              "user": {
                "id": 345,
                "username": "Irene Chen",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQOn1mWdVyDOpOyhJiaFd8o1BQa38XUicIhBtmh8TH9s6McmuKSdMuwfG5QaVMQ9XU5J7DwFV2/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-05-29 23:47:46",
                "updated_at": "2024-07-19 21:49:16",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 259,
                      "user_id": 345,
                      "role_id": 6,
                      "created_at": "2024-05-29 23:47:46",
                      "updated_at": "2024-05-29 23:47:46",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 235,
              "live_room_id": 4,
              "user_id": 345,
              "redbag_send_id": null,
              "ip": "42.70.78.130",
              "content": "123123",
              "origin_content": "123123",
              "username": "Irene Chen",
              "origin_username": "Irene Chen",
              "msg_is_file": 1,
              "msg_type": 0,
              "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              "send_msg_time": "1721396959628",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-07-19 21:49:19",
              "updated_at": "2024-07-19 21:49:19",
              "deleted_at": null,
              "user": {
                "id": 345,
                "username": "Irene Chen",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQOn1mWdVyDOpOyhJiaFd8o1BQa38XUicIhBtmh8TH9s6McmuKSdMuwfG5QaVMQ9XU5J7DwFV2/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-05-29 23:47:46",
                "updated_at": "2024-07-19 21:49:16",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 259,
                      "user_id": 345,
                      "role_id": 6,
                      "created_at": "2024-05-29 23:47:46",
                      "updated_at": "2024-05-29 23:47:46",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 233,
              "live_room_id": 4,
              "user_id": 366,
              "redbag_send_id": null,
              "ip": "211.22.29.95",
              "content": "😂",
              "origin_content": "😂",
              "username": "我必不弃。",
              "origin_username": "我必不弃。",
              "msg_is_file": 1,
              "msg_type": 0,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
              "send_msg_time": "1720761567817",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-07-12 13:19:30",
              "updated_at": "2024-07-12 13:19:30",
              "deleted_at": null,
              "user": {
                "id": 366,
                "username": "我必不弃。",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQGVkD6fGHpkK1YDyRJ15Sf7pOlfAmXhjEfAfwHuiaF7ibE3Mufwe7voHrM4ic6ajSaaPaYibpEo/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-07-12 13:19:26",
                "updated_at": "2024-07-12 13:19:26",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 280,
                      "user_id": 366,
                      "role_id": 6,
                      "created_at": "2024-07-12 13:19:26",
                      "updated_at": "2024-07-12 13:19:26",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 206,
              "live_room_id": 4,
              "user_id": 351,
              "redbag_send_id": null,
              "ip": "113.66.230.229",
              "content": "鲜花",
              "origin_content": "鲜花",
              "username": "海馬瀬人",
              "origin_username": "海馬瀬人",
              "msg_is_file": 1,
              "msg_type": 5,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
              "send_msg_time": "1718182194149",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-06-12 16:49:54",
              "updated_at": "2024-06-12 16:49:54",
              "deleted_at": null,
              "user": {
                "id": 351,
                "username": "海馬瀬人",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQCst0FpIT9SWb4wvuIuTYJFGDibTgSwN5IWry8ywr2zRpHniaYypKgufydT9nFvLtoNic7rY63/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-06-12 16:48:10",
                "updated_at": "2024-06-12 16:48:40",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 265,
                      "user_id": 351,
                      "role_id": 6,
                      "created_at": "2024-06-12 16:48:10",
                      "updated_at": "2024-06-12 16:48:10",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 205,
              "live_room_id": 4,
              "user_id": 351,
              "redbag_send_id": null,
              "ip": "113.66.230.229",
              "content": "鲜花",
              "origin_content": "鲜花",
              "username": "海馬瀬人",
              "origin_username": "海馬瀬人",
              "msg_is_file": 1,
              "msg_type": 5,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
              "send_msg_time": "1718182192721",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-06-12 16:49:52",
              "updated_at": "2024-06-12 16:49:52",
              "deleted_at": null,
              "user": {
                "id": 351,
                "username": "海馬瀬人",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQCst0FpIT9SWb4wvuIuTYJFGDibTgSwN5IWry8ywr2zRpHniaYypKgufydT9nFvLtoNic7rY63/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-06-12 16:48:10",
                "updated_at": "2024-06-12 16:48:40",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 265,
                      "user_id": 351,
                      "role_id": 6,
                      "created_at": "2024-06-12 16:48:10",
                      "updated_at": "2024-06-12 16:48:10",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 204,
              "live_room_id": 4,
              "user_id": 351,
              "redbag_send_id": null,
              "ip": "113.66.230.229",
              "content": "鲜花",
              "origin_content": "鲜花",
              "username": "海馬瀬人",
              "origin_username": "海馬瀬人",
              "msg_is_file": 1,
              "msg_type": 5,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
              "send_msg_time": "1718182191901",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-06-12 16:49:52",
              "updated_at": "2024-06-12 16:49:52",
              "deleted_at": null,
              "user": {
                "id": 351,
                "username": "海馬瀬人",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQCst0FpIT9SWb4wvuIuTYJFGDibTgSwN5IWry8ywr2zRpHniaYypKgufydT9nFvLtoNic7rY63/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-06-12 16:48:10",
                "updated_at": "2024-06-12 16:48:40",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 265,
                      "user_id": 351,
                      "role_id": 6,
                      "created_at": "2024-06-12 16:48:10",
                      "updated_at": "2024-06-12 16:48:10",
                      "deleted_at": null
                    }
                  }
                ]
              }
            },
            {
              "id": 203,
              "live_room_id": 4,
              "user_id": 351,
              "redbag_send_id": null,
              "ip": "113.66.230.229",
              "content": "鲜花",
              "origin_content": "鲜花",
              "username": "海馬瀬人",
              "origin_username": "海馬瀬人",
              "msg_is_file": 1,
              "msg_type": 5,
              "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
              "send_msg_time": "1718182173582",
              "is_show": "0",
              "is_verify": "0",
              "created_at": "2024-06-12 16:49:33",
              "updated_at": "2024-06-12 16:49:33",
              "deleted_at": null,
              "user": {
                "id": 351,
                "username": "海馬瀬人",
                "status": 0,
                "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQCst0FpIT9SWb4wvuIuTYJFGDibTgSwN5IWry8ywr2zRpHniaYypKgufydT9nFvLtoNic7rY63/100",
                "desc": "这个人很懒，什么也没有留下",
                "created_at": "2024-06-12 16:48:10",
                "updated_at": "2024-06-12 16:48:40",
                "deleted_at": null,
                "roles": [
                  {
                    "id": 6,
                    "role_name": "VIP用户",
                    "role_value": "VIP_USER",
                    "type": 1,
                    "priority": 99,
                    "p_id": 5,
                    "created_at": "2023-12-04 14:01:20",
                    "updated_at": "2023-12-04 14:01:20",
                    "deleted_at": null,
                    "user_role": {
                      "id": 265,
                      "user_id": 351,
                      "role_id": 6,
                      "created_at": "2024-06-12 16:48:10",
                      "updated_at": "2024-06-12 16:48:10",
                      "deleted_at": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/gift_record/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 10,
          "hasMore": false,
          "total": 10,
          "rows": [
            {
              "id": 1,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 101,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-01-28 18:31:10",
              "updated_at": "2024-01-28 18:31:10",
              "deleted_at": null
            },
            {
              "id": 2,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 101,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-01-28 18:38:52",
              "updated_at": "2024-01-28 18:38:52",
              "deleted_at": null
            },
            {
              "id": 3,
              "is_recv": 1,
              "goods_id": 2,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":2,\"name\":\"可乐\",\"type\":\"gift\",\"desc\":\"肥宅快乐水\",\"short_desc\":\"可乐\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/3f56506ae5f536864dbc92b52c355bfe.webp\",\"price\":200,\"original_price\":200,\"nums\":1,\"badge\":\"新品\",\"badge_bg\":\"#e60c0d\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 101,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-01-28 18:39:04",
              "updated_at": "2024-01-28 18:39:04",
              "deleted_at": null
            },
            {
              "id": 4,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 101,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-01-28 18:39:20",
              "updated_at": "2024-01-28 18:39:20",
              "deleted_at": null
            },
            {
              "id": 5,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 1,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-01-28 18:43:36",
              "updated_at": "2024-01-28 18:43:36",
              "deleted_at": null
            },
            {
              "id": 6,
              "is_recv": 1,
              "goods_id": 4,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":4,\"name\":\"一杯咖啡\",\"type\":\"gift\",\"desc\":\"给阿姨倒一杯卡布奇诺\",\"short_desc\":\"一杯咖啡\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/d9770d31ac7350556103c0b1ed09e01d.webp\",\"price\":1000,\"original_price\":1000,\"nums\":1,\"badge\":\"肝！\",\"badge_bg\":\"#cda8a1\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 4,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-01-28 18:52:09",
              "updated_at": "2024-01-28 18:52:09",
              "deleted_at": null
            },
            {
              "id": 17,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 351,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-06-12 16:49:33",
              "updated_at": "2024-06-12 16:49:33",
              "deleted_at": null
            },
            {
              "id": 18,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 351,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-06-12 16:49:51",
              "updated_at": "2024-06-12 16:49:51",
              "deleted_at": null
            },
            {
              "id": 19,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 351,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-06-12 16:49:52",
              "updated_at": "2024-06-12 16:49:52",
              "deleted_at": null
            },
            {
              "id": 20,
              "is_recv": 1,
              "goods_id": 1,
              "goods_nums": 1,
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}",
              "order_id": null,
              "live_room_id": 4,
              "send_user_id": 351,
              "recv_user_id": 4,
              "status": 0,
              "remark": null,
              "created_at": "2024-06-12 16:49:54",
              "updated_at": "2024-06-12 16:49:54",
              "deleted_at": null
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/gift_record/gift_group_list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 3,
          "hasMore": false,
          "total": 3,
          "rows": [
            {
              "live_room_id": 4,
              "nums": 8,
              "goods_id": "1",
              "goods_snapshot": "{\"id\":1,\"name\":\"鲜花\",\"type\":\"gift\",\"desc\":\"一朵鲜花\",\"short_desc\":\"鲜花\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/c5258ebf3a79c7d67ef8ae95062c8fe4.webp\",\"price\":1,\"original_price\":1,\"nums\":1,\"badge\":\"\",\"badge_bg\":\"pink\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}"
            },
            {
              "live_room_id": 4,
              "nums": 1,
              "goods_id": "2",
              "goods_snapshot": "{\"id\":2,\"name\":\"可乐\",\"type\":\"gift\",\"desc\":\"肥宅快乐水\",\"short_desc\":\"可乐\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/3f56506ae5f536864dbc92b52c355bfe.webp\",\"price\":200,\"original_price\":200,\"nums\":1,\"badge\":\"新品\",\"badge_bg\":\"#e60c0d\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}"
            },
            {
              "live_room_id": 4,
              "nums": 1,
              "goods_id": "4",
              "goods_snapshot": "{\"id\":4,\"name\":\"一杯咖啡\",\"type\":\"gift\",\"desc\":\"给阿姨倒一杯卡布奇诺\",\"short_desc\":\"一杯咖啡\",\"cover\":\"https://resource.hsslive.cn/billd-live/image/d9770d31ac7350556103c0b1ed09e01d.webp\",\"price\":1000,\"original_price\":1000,\"nums\":1,\"badge\":\"肝！\",\"badge_bg\":\"#cda8a1\",\"remark\":null,\"created_at\":\"2024-01-28 18:25:24\",\"updated_at\":\"2024-01-28 18:25:24\",\"deleted_at\":null}"
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/mock/live/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {}
      }
    }
  },
  {
    url: '/api/live/live_room_online_user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {}
      }
    }
  },
  {
    url: '/api/live_config/find_by_key/frontend_live_home_bg',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "id": 1,
          "key": "frontend_live_home_bg",
          "value": "",
          "desc": "直播间前台首页的背景图",
          "type": "upload",
          "created_at": "2023-12-09 20:05:50",
          "updated_at": "2023-12-15 23:20:27",
          "deleted_at": null
        }
      }
    }
  },
  {
    url: '/api/settings/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 2,
          "hasMore": false,
          "total": 2,
          "rows": [
            {
              "id": 1,
              "key": "allow_home_modal",
              "value": "2",
              "desc": "是否开启首页弹窗（'1'开启；'2'关闭）",
              "type": "switch",
              "created_at": "2024-07-16 13:35:15",
              "updated_at": "2024-07-16 13:35:15",
              "deleted_at": null
            },
            {
              "id": 2,
              "key": "home_modal_content",
              "value": "持续更新中...",
              "desc": "首页弹窗内容",
              "type": "markdown",
              "created_at": "2024-07-16 13:35:15",
              "updated_at": "2024-07-16 13:35:15",
              "deleted_at": null
            }
          ]
        }
      }
    }
  },
  // {
  //   url: '/api/user_live_room/find_by_userId/',
  //   method: 'get',
  //   response: () => {
  //     return {
  //       code: 200,
  //       data: {
  //         "id": 230,
  //         "user_id": 371,
  //         "live_room_id": 317,
  //         "created_at": "2024-08-01 10:19:56",
  //         "updated_at": "2024-08-01 10:19:56",
  //         "deleted_at": null,
  //         "user": {
  //           "id": 371,
  //           "username": "118.2",
  //           "status": 0,
  //           "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQCs22sVfVGynuyqzAykvk4n0gXGcbOVdWRNxlicvh8JzAaWreMypRsiaMaBwUD5AAqxGnHlT5/100",
  //           "desc": "这个人很懒，什么也没有留下",
  //           "created_at": "2024-08-01 05:36:19",
  //           "updated_at": "2024-08-03 00:00:09",
  //           "deleted_at": null
  //         },
  //         "live_room": {
  //           "id": 317,
  //           "name": "118.2的直播间",
  //           "desc": null,
  //           "status": 0,
  //           "is_show": 0,
  //           "remark": null,
  //           "type": 1,
  //           "pull_is_should_auth": 1,
  //           "cdn": 1,
  //           "weight": 21,
  //           "cover_img": "https://resource.hsslive.cn/billd-live/live-preview/7f9939b5336ea1894a448e224e16480b.webp",
  //           "bg_img": null,
  //           "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___317",
  //           "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___317.flv",
  //           "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___317.m3u8",
  //           "webrtc_url": null,
  //           "cdn_rtmp_url": null,
  //           "cdn_flv_url": null,
  //           "cdn_hls_url": null,
  //           "cdn_webrtc_url": null,
  //           "is_fake": 2,
  //           "created_at": "2024-08-01 10:19:56",
  //           "updated_at": "2024-08-01 10:20:26",
  //           "deleted_at": null,
  //           "areas": [
  //             {
  //               "id": 1,
  //               "name": "音乐",
  //               "weight": 10,
  //               "remark": "音乐分区",
  //               "created_at": "2023-07-01 20:25:13",
  //               "updated_at": "2023-07-01 20:25:13",
  //               "deleted_at": null
  //             }
  //           ]
  //         }
  //       }
  //     }
  //   }
  // },
  {
    url: '/api/qiniu_data/get_token',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "code": 200,
          "data": "**********:NmKNYBeDGvjMSOJ70SkgWZq2PXU=:eyJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIixcImhhc2hcIjpcIiQoZXRhZylcIixcImZzaXplXCI6JChmc2l6ZSksXCJidWNrZXRcIjpcIiQoYnVja2V0KVwiLFwibWltZVR5cGVcIjpcIiQobWltZVR5cGUpXCJ9Iiwic2NvcGUiOiJoc3NibG9nOmJpbGxkLWxpdmUvbGl2ZS1wcmV2aWV3LzBjNjZmMDAzZWJkNTgxYTU5OTVhMzFlMDBmMTQ0N2FhLndlYnAiLCJkZWFkbGluZSI6MTcyMjY2NTY2OH0=",
          "message": "获取七牛云token成功，有效期10分钟"
        }
      }
    }
  },
  {
    url: '/api/area/area_live_room_list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "nowPage": 1,
          "pageSize": 4,
          "hasMore": false,
          "total": 4,
          "rows": [
            {
              "id": 1,
              "name": "音乐",
              "weight": 10,
              "remark": "音乐分区",
              "created_at": "2023-07-01 20:25:13",
              "updated_at": "2023-07-01 20:25:13",
              "deleted_at": null,
              "area_live_rooms": [
                {
                  "id": 155,
                  "area_id": 1,
                  "live_room_id": 242,
                  "created_at": "2024-01-16 17:23:18",
                  "updated_at": "2024-01-16 17:23:18",
                  "deleted_at": null,
                  "live_room_weight": 21,
                  "live_room": {
                    "id": 242,
                    "name": "′　一路向北。的直播间",
                    "desc": null,
                    "status": 0,
                    "is_show": 0,
                    "remark": null,
                    "type": 3,
                    "pull_is_should_auth": 1,
                    "cdn": 1,
                    "weight": 21,
                    "cover_img": null,
                    "bg_img": null,
                    "rtmp_url": "rtmp://srs-pull.reaicc.com/live/livestream",
                    "flv_url": "https://srs-pull.reaicc.com/live/livestream/room1.flv",
                    "hls_url": "https://srs-pull.reaicc.com/live/livestream/room1.m3u8",
                    "webrtc_url": "",
                    "cdn_rtmp_url": "rtmp://push.hsslive.cn/livestream/roomId___242?txSecret=a7952421ae7d94aa8e0af73d044ff0a1&txTime=668CE49C&roomid=242&pushtype=3&pushkey=54ceddb92dfd7f90fb3d3109fd003ee4",
                    "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___242.flv",
                    "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___242.m3u8",
                    "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___242",
                    "is_fake": 2,
                    "created_at": "2024-01-16 17:23:18",
                    "updated_at": "2024-07-09 14:19:56",
                    "deleted_at": null,
                    "live": null,
                    "users": [
                      {
                        "id": 265,
                        "username": "′　一路向北。",
                        "status": 0,
                        "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQAia7ZiaiadlWphhPiaCQvxrePlB5mey08jrJbZojX7dOPTDiaIbz4aUD6W9jtSFCpOt3RRmyraJ/100",
                        "desc": "这个人很懒，什么也没有留下",
                        "created_at": "2024-01-16 17:23:12",
                        "updated_at": "2024-01-16 17:23:12",
                        "deleted_at": null
                      }
                    ]
                  }
                },
                {
                  "id": 156,
                  "area_id": 1,
                  "live_room_id": 243,
                  "created_at": "2024-01-17 13:41:35",
                  "updated_at": "2024-01-17 13:41:35",
                  "deleted_at": null,
                  "live_room_weight": 21,
                  "live_room": {
                    "id": 243,
                    "name": "Kage的直播间",
                    "desc": null,
                    "status": 0,
                    "is_show": 0,
                    "remark": null,
                    "type": 1,
                    "pull_is_should_auth": 1,
                    "cdn": 1,
                    "weight": 21,
                    "cover_img": null,
                    "bg_img": null,
                    "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___243",
                    "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___243.flv",
                    "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___243.m3u8",
                    "webrtc_url": "",
                    "cdn_rtmp_url": "rtmp://push.hsslive.cn/livestream/roomId___243?txSecret=c2afe081446c8288a38d9a162e74f6d0&txTime=668CE49C&roomid=243&pushtype=1&pushkey=51c15538a9ac5feab63f871235557ae1",
                    "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___243.flv",
                    "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___243.m3u8",
                    "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___243",
                    "is_fake": 2,
                    "created_at": "2024-01-17 13:41:35",
                    "updated_at": "2024-07-09 14:19:56",
                    "deleted_at": null,
                    "live": null,
                    "users": [
                      {
                        "id": 266,
                        "username": "Kage",
                        "status": 0,
                        "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQPBKGPTlVM1h8yNKebOkY0uicic3qdRGV7BObHjj6LDt6cLqTagmpyDic4A9XiaFDiaeSLdZFbl7/100",
                        "desc": "这个人很懒，什么也没有留下",
                        "created_at": "2024-01-17 13:41:20",
                        "updated_at": "2024-01-17 13:41:20",
                        "deleted_at": null
                      }
                    ]
                  }
                },
                {
                  "id": 157,
                  "area_id": 1,
                  "live_room_id": 244,
                  "created_at": "2024-01-19 15:28:48",
                  "updated_at": "2024-01-19 15:28:48",
                  "deleted_at": null,
                  "live_room_weight": 21,
                  "live_room": {
                    "id": 244,
                    "name": "南咕~的直播间",
                    "desc": null,
                    "status": 0,
                    "is_show": 0,
                    "remark": null,
                    "type": 3,
                    "pull_is_should_auth": 1,
                    "cdn": 1,
                    "weight": 21,
                    "cover_img": null,
                    "bg_img": null,
                    "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___244",
                    "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___244.flv",
                    "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___244.m3u8",
                    "webrtc_url": "",
                    "cdn_rtmp_url": "rtmp://push.hsslive.cn/livestream/roomId___244?txSecret=066ff24c2ff0b168657da30ee36ac870&txTime=668CE49C&roomid=244&pushtype=3&pushkey=d570933ef71f71d3dddc0d8d4bafa621",
                    "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___244.flv",
                    "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___244.m3u8",
                    "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___244",
                    "is_fake": 2,
                    "created_at": "2024-01-19 15:28:48",
                    "updated_at": "2024-07-09 14:19:56",
                    "deleted_at": null,
                    "live": null,
                    "users": [
                      {
                        "id": 267,
                        "username": "南咕~",
                        "status": 0,
                        "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQIwneicUXDdiaFTU7zCkxaZaghtWrKbKibCCWdHNwcEIsdIVjD29PxuK2acJQ07shNSHsnoG16/100",
                        "desc": "这个人很懒，什么也没有留下",
                        "created_at": "2024-01-17 20:56:26",
                        "updated_at": "2024-03-06 23:08:24",
                        "deleted_at": null
                      }
                    ]
                  }
                },
                {
                  "id": 154,
                  "area_id": 1,
                  "live_room_id": 241,
                  "created_at": "2024-01-16 15:00:13",
                  "updated_at": "2024-01-16 15:00:13",
                  "deleted_at": null,
                  "live_room_weight": 21,
                  "live_room": {
                    "id": 241,
                    "name": "鄒的直播间",
                    "desc": null,
                    "status": 0,
                    "is_show": 0,
                    "remark": null,
                    "type": 1,
                    "pull_is_should_auth": 1,
                    "cdn": 1,
                    "weight": 21,
                    "cover_img": null,
                    "bg_img": null,
                    "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___241",
                    "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___241.flv",
                    "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___241.m3u8",
                    "webrtc_url": "",
                    "cdn_rtmp_url": "rtmp://push.hsslive.cn/livestream/roomId___241?txSecret=9417f3012702c5742159f6dd99559970&txTime=668CE49C&roomid=241&pushtype=1&pushkey=90c70f550993abd2ea57a56852fbc435",
                    "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___241.flv",
                    "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___241.m3u8",
                    "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___241",
                    "is_fake": 2,
                    "created_at": "2024-01-16 15:00:13",
                    "updated_at": "2024-07-09 14:19:56",
                    "deleted_at": null,
                    "live": null,
                    "users": [
                      {
                        "id": 264,
                        "username": "鄒",
                        "status": 0,
                        "avatar": "http://thirdqq.qlogo.cn/ek_qqapp/AQAeibDrGDOGV9hiaQM3w7X86qwicxb3JVMgJzib8picq0icqCDv9XwqvJAySSYmlvWPX95598vlWh/100",
                        "desc": "这个人很懒，什么也没有留下",
                        "created_at": "2024-01-16 15:00:00",
                        "updated_at": "2024-01-16 15:00:00",
                        "deleted_at": null
                      }
                    ]
                  }
                }
              ]
            },
            {
              "id": 2,
              "name": "知识",
              "weight": 9,
              "remark": "知识分区",
              "created_at": "2023-07-01 20:25:13",
              "updated_at": "2023-07-01 20:25:13",
              "deleted_at": null,
              "area_live_rooms": [
                {
                  "id": 30,
                  "area_id": 2,
                  "live_room_id": 12,
                  "created_at": "2023-07-15 01:39:13",
                  "updated_at": "2023-07-15 01:39:13",
                  "deleted_at": null,
                  "live_room_weight": 10,
                  "live_room": {
                    "id": 12,
                    "name": "billd-live付费课",
                    "desc": "从零搭建一个开源直播间系列",
                    "status": 0,
                    "is_show": 0,
                    "remark": null,
                    "type": 0,
                    "pull_is_should_auth": 1,
                    "cdn": 1,
                    "weight": 10,
                    "cover_img": null,
                    "bg_img": null,
                    "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___12",
                    "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___12.flv",
                    "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___12.m3u8",
                    "webrtc_url": "",
                    "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___12",
                    "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___12.flv",
                    "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___12.m3u8",
                    "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___12",
                    "is_fake": 2,
                    "created_at": "2023-07-15 01:39:13",
                    "updated_at": "2024-08-04 17:31:22",
                    "deleted_at": null,
                    "live": {
                      "id": 1539,
                      "socket_id": "-1",
                      "live_room_id": 12,
                      "user_id": 12,
                      "track_video": 1,
                      "track_audio": 1,
                      "srs_server_id": "vid-9986p5k",
                      "srs_service_id": "67l814uy",
                      "srs_action": "on_publish",
                      "srs_client_id": "4z84z056",
                      "srs_ip": "8.218.5.78",
                      "srs_vhost": "__defaultVhost__",
                      "srs_app": "livestream",
                      "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
                      "srs_stream": "roomId___12",
                      "srs_param": "?roomid=12&pushtype=0&pushkey=c2d9a7d2cbed65752193551709b18af6",
                      "srs_stream_url": "/livestream/roomId___12",
                      "srs_stream_id": "vid-z4u6g5y",
                      "is_tencentcloud_css": 2,
                      "flag_id": "4z84z056",
                      "created_at": "2024-08-04 17:31:22",
                      "updated_at": "2024-08-04 17:31:22",
                      "deleted_at": null
                    },
                    "users": [
                      {
                        "id": 12,
                        "username": "user-12",
                        "status": 0,
                        "avatar": "",
                        "desc": "这个人很懒，什么也没有留下",
                        "created_at": "2023-07-15 01:39:13",
                        "updated_at": "2023-07-15 01:39:13",
                        "deleted_at": null
                      }
                    ]
                  }
                }
              ]
            },
            {
              "id": 3,
              "name": "手游",
              "weight": 9,
              "remark": "和平精英、王者荣耀",
              "created_at": "2023-07-01 20:25:13",
              "updated_at": "2023-07-01 20:25:13",
              "deleted_at": null,
              "area_live_rooms": []
            },
            {
              "id": 4,
              "name": "网游",
              "weight": 9,
              "remark": "英雄联盟、CS:GO、DOTA2",
              "created_at": "2023-07-01 20:25:13",
              "updated_at": "2023-07-01 20:25:13",
              "deleted_at": null,
              "area_live_rooms": [
                {
                  "id": 19,
                  "area_id": 4,
                  "live_room_id": 107,
                  "created_at": "2023-07-07 22:49:25",
                  "updated_at": "2023-07-07 22:49:25",
                  "deleted_at": null,
                  "live_room_weight": 21,
                  "live_room": {
                    "id": 107,
                    "name": "〆华哥√的直播间",
                    "desc": null,
                    "status": 0,
                    "is_show": 0,
                    "remark": null,
                    "type": 3,
                    "pull_is_should_auth": 1,
                    "cdn": 1,
                    "weight": 21,
                    "cover_img": null,
                    "bg_img": null,
                    "rtmp_url": "rtmp://srs-push.hsslive.cn/livestream/roomId___107",
                    "flv_url": "https://srs-pull.hsslive.cn/livestream/roomId___107.flv",
                    "hls_url": "https://srs-pull.hsslive.cn/livestream/roomId___107.m3u8",
                    "webrtc_url": "",
                    "cdn_rtmp_url": "rtmp://push.hsslive.cn/livestream/roomId___107?txSecret=be0c88fa437a03bc18ba2c9e53ca0adc&txTime=668CE49C&roomid=107&pushtype=3&pushkey=2a9ce4e98cd15db97f44a674bdc2ac63",
                    "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___107.flv",
                    "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___107.m3u8",
                    "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___107",
                    "is_fake": 2,
                    "created_at": "2023-07-07 22:49:25",
                    "updated_at": "2024-07-09 14:19:56",
                    "deleted_at": null,
                    "live": null,
                    "users": [
                      {
                        "id": 108,
                        "username": "〆华哥√",
                        "status": 0,
                        "avatar": "http://qzapp.qlogo.cn/qzapp/101958191/316DECA1B648151B04EF4A03DE0507D5/100",
                        "desc": "这个人很懒，什么也没有留下",
                        "created_at": "2023-07-07 22:49:16",
                        "updated_at": "2024-05-01 13:41:02",
                        "deleted_at": null
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/live_room/find/12',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "id": 12,
          "name": "billd-live付费课",
          "desc": "从零搭建一个开源直播间系列",
          "status": 0,
          "is_show": 0,
          "remark": null,
          "type": 0,
          "pull_is_should_auth": 1,
          "cdn": 1,
          "weight": 10,
          "cover_img": null,
          "bg_img": null,
          "rtmp_url": "rtmp://srs-pull.reaicc.com/live/livestream",
          "flv_url": "https://srs-pull.reaicc.com/live/livestream/room1.flv",
          "hls_url": "https://srs-pull.reaicc.com/live/livestream/room1.m3u8",
          "webrtc_url": "",
          "cdn_rtmp_url": "rtmp://pull.hsslive.cn/livestream/roomId___12",
          "cdn_flv_url": "https://pull.hsslive.cn/livestream/roomId___12.flv",
          "cdn_hls_url": "https://pull.hsslive.cn/livestream/roomId___12.m3u8",
          "cdn_webrtc_url": "webrtc://pull.hsslive.cn/livestream/roomId___12",
          "is_fake": 2,
          "created_at": "2023-07-15 01:39:13",
          "updated_at": "2024-08-04 17:31:22",
          "deleted_at": null,
          "user_live_room": {
            "id": 30,
            "user_id": 12,
            "live_room_id": 12,
            "created_at": "2023-07-15 01:39:13",
            "updated_at": "2023-07-15 01:39:13",
            "deleted_at": null,
            "user": {
              "id": 12,
              "username": "user-12",
              "status": 0,
              "avatar": "",
              "desc": "这个人很懒，什么也没有留下",
              "created_at": "2023-07-15 01:39:13",
              "updated_at": "2023-07-15 01:39:13",
              "deleted_at": null
            }
          },
          "live": {
            "id": 1539,
            "socket_id": "-1",
            "live_room_id": 12,
            "user_id": 12,
            "track_video": 1,
            "track_audio": 1,
            "srs_server_id": "vid-9986p5k",
            "srs_service_id": "67l814uy",
            "srs_action": "on_publish",
            "srs_client_id": "4z84z056",
            "srs_ip": "8.218.5.78",
            "srs_vhost": "__defaultVhost__",
            "srs_app": "livestream",
            "srs_tcUrl": "rtmp://srs-push.hsslive.cn:1935/livestream",
            "srs_stream": "roomId___12",
            "srs_param": "?roomid=12&pushtype=0&pushkey=c2d9a7d2cbed65752193551709b18af6",
            "srs_stream_url": "/livestream/roomId___12",
            "srs_stream_id": "vid-z4u6g5y",
            "is_tencentcloud_css": 2,
            "flag_id": "4z84z056",
            "created_at": "2024-08-04 17:31:22",
            "updated_at": "2024-08-04 17:31:22",
            "deleted_at": null
          },
          "areas": [
            {
              "id": 2,
              "name": "知识",
              "weight": 9,
              "remark": "知识分区",
              "created_at": "2023-07-01 20:25:13",
              "updated_at": "2023-07-01 20:25:13",
              "deleted_at": null
            }
          ]
        }
      }
    }
  },
  // 其他接口
];

export default mock;
