// TIP: ctrl+cmd+t,生成函数注释
import { computeBox, getRangeRandom } from 'billd-utils';
import sparkMD5 from 'spark-md5';
import { browse } from 'xe-utils'
import { Message } from '@arco-design/web-vue'


/**
 * music，该曲目应被视为包含音乐。设置该值时 MediaStreamTrack.kind的值必须为"audio"。
 * speech，该轨道应被视为包含语音数据。设置该值时 MediaStreamTrack.kind的值必须为"audio"。
 * speech-recognition，该轨道应被视为包含用于机器语音识别的数据。设置该值时 MediaStreamTrack.kind的值必须为"audio"。
 * detail，应将曲目视为视频细节格外重要。例如，带有文本内容、绘画或线条艺术的演示文稿或网页。设置该值时 MediaStreamTrack.kind的值必须为"video"。
 * text，轨道应该被视为视频细节特别重要，并且明显的锐利边缘和颜色一致的区域可能经常出现。例如，带有文本内容的演示文稿或网页。设置该值时 MediaStreamTrack.kind的值必须为"video"。
 * motion，应将轨道视为包含运动很重要的视频。例如，网络摄像头视频、电影或视频游戏。设置该值时 MediaStreamTrack.kind的值必须为"video"。
 */
export function setVideoTrackContentHints(
  stream: MediaStream,
  hint: 'detail' | 'text' | 'motion'
) {
  const tracks = stream.getVideoTracks();
  tracks.forEach((track) => {
    track.contentHint = hint;
    console.log('setVideoTrackContentHints', track.id, hint);
  });
}
/**
 * music，该曲目应被视为包含音乐。设置该值时 MediaStreamTrack.kind的值必须为"audio"。
 * speech，该轨道应被视为包含语音数据。设置该值时 MediaStreamTrack.kind的值必须为"audio"。
 * speech-recognition，该轨道应被视为包含用于机器语音识别的数据。设置该值时 MediaStreamTrack.kind的值必须为"audio"。
 * detail，应将曲目视为视频细节格外重要。例如，带有文本内容、绘画或线条艺术的演示文稿或网页。设置该值时 MediaStreamTrack.kind的值必须为"video"。
 * text，轨道应该被视为视频细节特别重要，并且明显的锐利边缘和颜色一致的区域可能经常出现。例如，带有文本内容的演示文稿或网页。设置该值时 MediaStreamTrack.kind的值必须为"video"。
 * motion，应将轨道视为包含运动很重要的视频。例如，网络摄像头视频、电影或视频游戏。设置该值时 MediaStreamTrack.kind的值必须为"video"。
 */
export function setAudioTrackContentHints(
  stream: MediaStream,
  hint: 'music' | 'speech' | 'speech-recognition'
) {
  const tracks = stream.getAudioTracks();
  tracks.forEach((track) => {
    track.contentHint = hint;
    console.log('setAudioTrackContentHints', track.id, hint);
  });
}

/**
 * 将base64转换为file
 */
export function base64ToFile(base64: string, fileName: string) {
  // 解析Base64编码的字符串，分离数据头和编码数据
  const splitDataURI = base64.split(',');
  const byteString = atob(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

  // 构建Uint8Array类型的数组，用数组来创建Blob对象
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i += 1) {
    intArray[i] = byteString.charCodeAt(i);
  }
  const imageBlob = new Blob([intArray], { type: mimeString });
  const file = new File([imageBlob], fileName, { type: mimeString });
  return file;
}

export function stringToArrayBuffer(str: string) {
  const encoder = new TextEncoder(); // 默认是'utf-8'编码
  const uint8Array = encoder.encode(str);
  return uint8Array.buffer;
}

export function createNullVideo() {
  const videoEl = document.createElement('video');
  videoEl.autoplay = true;
  videoEl.muted = true;
  videoEl.playsInline = true;
  videoEl.loop = true;
  videoEl.setAttribute('webkit-playsinline', 'true');
  videoEl.setAttribute('x5-video-player-type', 'h5');
  videoEl.setAttribute('x5-video-player-fullscreen', 'true');
  videoEl.setAttribute('x5-video-orientation', 'portraint');
  videoEl.oncontextmenu = (e) => {
    e.preventDefault();
  };
  return videoEl;
}

export async function handleUserMedia({ video, audio }) {
  try {
    const event = await navigator.mediaDevices.getUserMedia({
      video,
      audio,
    });
    return event;
  } catch (error) {
    console.log(error);
  }
}

export function formatMoney(money?: number) {
  if (!money) {
    return '0.00';
  }
  return (money / 100).toFixed(2);
}

export const formatTimeHour = (timestamp: number) => {
  function addZero(num: number) {
    return num < 10 ? `0${num}` : num;
  }
  const date = new Date(timestamp);

  // 获取小时
  const hours = date.getHours();

  // 获取分钟
  const minutes = date.getMinutes();

  // 打印结果
  return `${addZero(hours)}:${addZero(minutes)}`;
};

export const formatTime = (timestamp: number) => {
  function addZero(num: number) {
    return num < 10 ? `0${num}` : num;
  }
  const date = new Date(timestamp);

  // 获取年份
  const year = date.getFullYear();

  // 获取月份（注意月份是从0开始的，所以要加1）
  const month = date.getMonth() + 1;

  // 获取日期
  const day = date.getDate();

  // 获取小时
  const hours = date.getHours();

  // 获取分钟
  const minutes = date.getMinutes();

  // 获取秒数
  const seconds = date.getSeconds();

  // 打印结果
  return `${year}-${addZero(month)}-${addZero(day)} ${addZero(hours)}:${addZero(
    minutes
  )}:${addZero(seconds)}`;
};

export const getLiveRoomPageUrl = (liveRoomId: number) => {
  return `${getHostnameUrl()}/pull/${liveRoomId}`;
};

/**
 * 例子：当前地址栏：https://live.hsslive.cn，结果：https://live.hsslive.cn
 * 例子：当前地址栏：https://live.hsslive.cn/push?liveType=1&roomId=101，结果：https://live.hsslive.cn
 */
export const getHostnameUrl = () => {
  // window.location.host，包含了域名的一个DOMString，可能在该串最后带有一个":"并跟上 URL 的端口号。
  // window.location.hostname，包含了域名的一个DOMString
  const { protocol, host } = window.location;
  const res = `${protocol}//${host}`;
  return res;
};

/**
 * 根据文件内容获取hash，同一个文件不管重命名还是改文件名后缀，hash都一样
 * @param file
 * @returns
 */
export const getHash = (file: File) => {
  return new Promise<{
    hash: string;
    ext: string;
    buffer: ArrayBuffer;
  }>((resolve) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      const spark = new sparkMD5.ArrayBuffer();
      const buffer = e.target!.result as ArrayBuffer;
      spark.append(buffer);
      const hash = spark.end();
      const arr = file.name.split('.');
      const ext = arr[arr.length - 1];
      resolve({ hash, ext, buffer });
    };
  });
};

// 文件切片
export const splitFile = (file: File) => {
  const chunkList: { chunk: Blob; chunkName: string }[] = [];
  // 先以固定的切片大小1024*100
  let max = 50 * 100;
  let count = Math.ceil(file.size / max);
  let index = 0;
  // 限定最多100个切片
  if (count > 100) {
    max = Math.ceil(file.size / 100);
    count = 100;
  }
  /**
   * 0：0,max
   * 1：max,2max
   * 2：2max,3max
   */
  while (index < count) {
    chunkList.push({
      chunkName: `${index}`,
      chunk: new File([file.slice(index * max, (index + 1) * max)], file.name),
    });
    index += 1;
  }
  return chunkList;
};

/**
 * 格式化倒计时
 * @param endTime
 * @param startTime
 */
export function formatDownTime(data: {
  endTime: number;
  startTime: number;
  showMs?: boolean;
}) {
  const times = (data.endTime - data.startTime) / 1000;
  // js获取剩余天数
  const d = parseInt(String(times / 60 / 60 / 24));
  // js获取剩余小时
  let h = parseInt(String((times / 60 / 60) % 24));
  // js获取剩余分钟
  let m = parseInt(String((times / 60) % 60));
  // js获取剩余秒
  let s = parseInt(String(times % 60));
  let ms = new Date(data.endTime).getMilliseconds();

  if (h < 10) {
    // @ts-ignore
    h = `0${h}`;
  }
  if (m < 10) {
    // @ts-ignore
    m = `0${m}`;
  }
  if (s < 10) {
    // @ts-ignore
    s = `0${s}`;
  }
  if (Number(ms) < 100) {
    if (ms < 10) {
      // @ts-ignore
      ms = `00${ms}`;
    } else {
      // @ts-ignore
      ms = `0${ms}`;
    }
  }
  const msRes = data.showMs ? `${ms}毫秒` : '';
  if (d > 0) {
    return `${d}天${h}时${m}分${s}秒${msRes}`;
  } else if (h > 0) {
    return `${h}时${m}分${s}秒${msRes}`;
  } else {
    return `${m}分${s}秒${msRes}`;
  }
}
/**
 * 格式化倒计时
 * @param endTime
 * @param startTime
 */
export function formatDownTime2(data: {
  endTime: number;
  startTime: number;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
  millisecond?: string;
  showMillisecond?: boolean;
  addZero?: boolean;
}) {
  const times = (data.endTime - data.startTime) / 1000;
  // js获取剩余天数
  const d = parseInt(String(times / 60 / 60 / 24));
  // js获取剩余小时
  let h = parseInt(String((times / 60 / 60) % 24));
  // js获取剩余分钟
  let m = parseInt(String((times / 60) % 60));
  // js获取剩余秒
  let s = parseInt(String(times % 60));
  let ms = new Date(data.endTime).getMilliseconds();

  function addZero(num: number, flag: boolean) {
    if (flag) {
      return num < 10 ? `0${num}` : `${num}`;
    } else {
      return `${num}`;
    }
  }

  // @ts-ignore
  h = addZero(h, data.addZero);
  // @ts-ignore
  m = addZero(m, data.addZero);
  // @ts-ignore
  s = addZero(s, data.addZero);
  if (Number(ms) < 100) {
    if (ms < 10) {
      // @ts-ignore
      ms = `00${ms}`;
    } else {
      // @ts-ignore
      ms = `0${ms}`;
    }
  }
  return {
    d,
    h,
    m,
    s,
    ms,
  };
}

/**
 * requestFileSystem保存文件，成功返回code:1，失败返回code:2
 * @param data
 */
export function saveFile(data: { file: File; fileName: string }) {
  return new Promise<{ code: number }>((resolve) => {
    const { file, fileName } = data;
    const requestFileSystem =
      // @ts-ignore
      window.requestFileSystem || window.webkitRequestFileSystem;
    if (!requestFileSystem) {
      console.error('不支持requestFileSystem');
      resolve({ code: 2 });
      return;
    }
    function onError(error) {
      console.error('saveFile错误', data.fileName);
      console.log(error);
      resolve({ code: 2 });
    }
    function onFs(fs) {
      // 创建文件
      fs.root.getFile(
        fileName,
        { create: true },
        (fileEntry) => {
          // 创建文件写入流
          fileEntry.createWriter(function (fileWriter) {
            fileWriter.onwriteend = () => {
              // 完成后关闭文件
              fileWriter.abort();
              resolve({ code: 1 });
            };
            // 写入文件内容
            fileWriter.write(file);
          });
        },
        onError
      );
    }
    // Opening a file system with temporary storage
    requestFileSystem(
      // @ts-ignore
      window.PERSISTENT,
      0,
      onFs,
      onError
    );
  });
}

/**
 * requestFileSystem读取文件，成功返回code:1，失败返回code:2
 * @param data
 */
export function readFile(fileName: string) {
  return new Promise<{ code: number; file?: File }>((resolve) => {
    const requestFileSystem =
      // @ts-ignore
      window.requestFileSystem || window.webkitRequestFileSystem;
    if (!requestFileSystem) {
      console.error('不支持requestFileSystem');
      resolve({ code: 2 });
      return;
    }
    function onError(error) {
      console.error('readFile错误', fileName);
      console.log(error);
      resolve({ code: 2 });
    }
    function onFs(fs) {
      fs.root.getFile(
        fileName,
        {},
        (fileEntry) => {
          fileEntry.file(function (file) {
            resolve({ code: 1, file });
          }, onError);
        },
        onError
      );
    }
    // Opening a file system with temporary storage
    requestFileSystem(
      // @ts-ignore
      window.PERSISTENT,
      0,
      onFs,
      onError
    );
  });
}

export function generateBase64(dom: CanvasImageSource) {
  const canvas = document.createElement('canvas');
  // @ts-ignore
  const res = dom.getBoundingClientRect();
  let width = res.width;
  let height = res.height;
  if (dom instanceof HTMLVideoElement) {
    if (dom.videoWidth) {
      width = dom.videoWidth;
    }
    if (dom.videoHeight) {
      height = dom.videoHeight;
    }
  }
  if (dom instanceof HTMLCanvasElement) {
    if (dom.width) {
      width = dom.width;
    }
    if (dom.height) {
      height = dom.height;
    }
  }
  const rate = width / height;
  const ratio = 1;
  function geturl() {
    const coverWidth = width * ratio;
    const coverHeight = coverWidth / rate;
    canvas.width = coverWidth;
    canvas.height = coverHeight;
    canvas.getContext('2d')!.drawImage(dom, 0, 0, coverWidth, coverHeight);
    // webp比png的体积小非常多！因此coverWidth就可以不用压缩太夸张
    return canvas.toDataURL('image/webp', 1);
  }
  const dataURL = geturl();
  return dataURL;
}

/**
 * @description 获取随机字符串(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)
 * @example: getRandomString(4) ===> abd3
 * @param {number} length
 * @return {*}
 */
export const getRandomEnglishString = (length: number): string => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let res = '';
  for (let i = 0; i < length; i += 1) {
    res += str.charAt(getRangeRandom(0, str.length - 1));
  }
  return res;
};

export const createVideo = ({
  muted = true,
  autoplay = true,
  appendChild = false,
  show = false,
  controls = false,
  size = 100,
}) => {
  const videoEl = document.createElement('video');
  videoEl.autoplay = autoplay;
  videoEl.muted = muted;
  videoEl.playsInline = true;
  videoEl.loop = true;
  videoEl.controls = controls;
  videoEl.setAttribute('webkit-playsinline', 'true');
  videoEl.setAttribute('x5-video-player-type', 'h5');
  videoEl.setAttribute('x5-video-player-fullscreen', 'true');
  videoEl.setAttribute('x5-video-orientation', 'portraint');
  videoEl.oncontextmenu = (e) => {
    e.preventDefault();
  };
  console.log("videoEl",videoEl)
  setTimeout(() => {
    if (autoplay) {
      try {
        videoEl.play();
      } catch (error) {
        console.log('play失败', error);
      }
    }
  }, 0);
  if (appendChild) {
    if (!show) {
      videoEl.style.width = `1px`;
      videoEl.style.height = `1px`;
      videoEl.style.opacity = '0';
      videoEl.style.pointerEvents = 'none';
    } else {
      videoEl.style.width = `${size}px`;
      videoEl.style.height = `${size}px`;
    }
    videoEl.style.position = 'fixed';
    videoEl.style.bottom = '0';
    videoEl.style.right = '0';

    document.body.appendChild(videoEl);
  }
  return videoEl;
};

export function videoFullBox(data: {
  wrapSize: { width: number; height: number };
  videoEl: HTMLVideoElement;
  videoResize?: (data: { w: number; h: number }) => void;
}) {
  const { videoEl } = data;
  let wrapSize = data.wrapSize;

  if (!videoEl) {
    throw new Error('videoEl不能为空！');
  }

  let w = videoEl.videoWidth;
  let h = videoEl.videoHeight;
  function handleResize() {
    w = videoEl.videoWidth;
    h = videoEl.videoHeight;
    data.videoResize?.({ w, h });
    setVideoSize({ width: w, height: h });
  }
  function setVideoSize({ width, height }) {
    const res = computeBox({
      width,
      height,
      maxHeight: wrapSize.height,
      minHeight: wrapSize.height,
      maxWidth: wrapSize.width,
      minWidth: wrapSize.width,
    });
    videoEl.style.width = `${res.width as number}px`;
    videoEl.style.height = `${res.height as number}px`;
    videoEl.setAttribute('resolution-width', width);
    videoEl.setAttribute('resolution-height', height);
  }
  setVideoSize({ width: w, height: h });
  data.videoResize?.({ w, h });
  videoEl.addEventListener('resize', handleResize);
  function changeWrapSize(data: { width; height }) {
    wrapSize = data;
    setVideoSize({ width: videoEl.videoWidth, height: videoEl.videoHeight });
  }
  return { changeWrapSize };
}

export function videoToCanvas(data: {
  wrapSize: { width: number; height: number };
  videoEl: HTMLVideoElement;
  videoResize?: (data: { w: number; h: number }) => void;
}) {
  const { videoEl } = data;
  let wrapSize = data.wrapSize;
  if (!videoEl) {
    throw new Error('videoEl不能为空！');
  }
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  let timer;
  let w = videoEl.videoWidth;
  let h = videoEl.videoHeight;
  function handleResize() {
    w = videoEl.videoWidth;
    h = videoEl.videoHeight;
    data.videoResize?.({ w, h });
    setVideoSize({ width: w, height: h });
  }
  function setVideoSize({ width, height }) {
    const res = computeBox({
      width,
      height,
      maxHeight: wrapSize.height,
      minHeight: wrapSize.height,
      maxWidth: wrapSize.width,
      minWidth: wrapSize.width,
    });
    canvas.style.width = `${res.width as number}px`;
    canvas.style.height = `${res.height as number}px`;
  }
  setVideoSize({ width: w, height: h });
  data.videoResize?.({ w, h });
  videoEl.addEventListener('resize', handleResize);
  // const defaultRatio = 16 / 9;
  function drawCanvas() {
    canvas.width = w;
    canvas.height = h;
    // const videoRatio = w / h;
    // if (w > h) {
    //   // 视频宽大于高
    //   // 比率的值越大，说明高的值越小
    //   // 如果视频的比率比默认dom的比率大，则说明同等宽度的情况下，视频的高度会比默认dom的高度值低
    //   if (videoRatio > defaultRatio) {
    //     // 视频的比率比dom比率大
    //     canvas.style.minWidth = '100%';
    //     canvas.style.maxHeight = '100%';
    //   } else {
    //     canvas.style.minHeight = '100%';
    //     canvas.style.maxWidth = '100%';
    //   }
    // } else {
    //   // 视频宽小于高
    //   // 比率的值越大，说明高的值越小
    //   // 如果视频的比率比默认dom的比率大，则说明同等宽度的情况下，视频的高度会比默认dom的高度值低

    //   if (videoRatio > defaultRatio) {
    //     // 视频的比率比dom比率大
    //     canvas.style.minHeight = '100%';
    //     canvas.style.maxWidth = '100%';
    //   } else {
    //     canvas.style.minWidth = '100%';
    //     canvas.style.maxHeight = '100%';
    //   }
    // }
    ctx.drawImage(videoEl, 0, 0, w, h);
    timer = requestAnimationFrame(drawCanvas);
  }

  function stopDrawing() {
    videoEl.removeEventListener('resize', handleResize);
    cancelAnimationFrame(timer);
  }

  function changeWrapSize(data: { width; height }) {
    wrapSize = data;
    setVideoSize({ width: videoEl.videoWidth, height: videoEl.videoHeight });
  }

  drawCanvas();

  return { drawCanvas, stopDrawing, changeWrapSize, canvas };
}


//----------------\

/**
 * @desc 去除空格
 * @param {string} str - 字符串
 * @param {string} pos - 去除空格的位置
 * pos="both": 去除两边空格
 * pos="left": 去除左边空格
 * pos="right": 去除右边空格
 * pos="all": 去除所有空格
 */
type Pos = 'both' | 'left' | 'right' | 'all'
export function trim(str: string, pos: Pos = 'both'): string {
  if (pos === 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  } else if (pos === 'left') {
    return str.replace(/^\s*/, '')
  } else if (pos === 'right') {
    return str.replace(/(\s*$)/g, '')
  } else if (pos === 'all') {
    return str.replace(/\s+/g, '')
  } else {
    return str
  }
}

/**
 * 根据数字获取对应的汉字
 * @param {number} num - 数字(0-10)
 */
export function getHanByNumber(num: number): string {
  const str = '零一二三四五六七八九十'
  return str.charAt(num)
}

/**
 * 获取指定整数范围内的随机整数
 * @param {number} start - 开始范围
 * @param {number} end - 结束范围
 */
export function getRandomInterger(start = 0, end: number): number {
  const range = end - start
  return Math.floor(Math.random() * range + start)
}


/** @desc 数据类型检测方法 */
export function getTypeOf(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

/**
 * @desc 格式化电话号码
 @demo 183-7983-6654 */
export function formatPhone(mobile: string, formatStr = '-') {
  return mobile.replace(/(?=(\d{4})+$)/g, formatStr)
}

/**
 * @desc 手机号脱敏
 @demo 155****8810  */
export function hidePhone(phone: string) {
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

/** @desc 检测数据是否为空数据 */
export function isEmpty(data: unknown) {
  if (data === '' || data === 'undefined' || data === undefined || data == null || data === 'null') {
    return true
  }
  return JSON.stringify(data) === '{}' || JSON.stringify(data) === '[]' || JSON.stringify(data) === '[{}]'
}

/**
 * @desc 大小写转换
 * @param {string} str 待转换的字符串
 * @param {number} type 1:全大写 2:全小写 3:首字母大写
 */
export function toCase(str: string, type: number) {
  switch (type) {
    case 1:
      return str.toUpperCase()
    case 2:
      return str.toLowerCase()
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
    default:
      return str
  }
}

/**
 * @desc 获取随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 */
export const randomNum = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

/**
 @desc 获取最大值 */
export const max = (arr: number[]) => {
  return Math.max.apply(null, arr)
}

/**
 @desc 获取最小值 */
export const min = (arr: number[]) => {
  return Math.min.apply(null, arr)
}

/**
 @desc 求和 */
export const sum = (arr: number[]) => {
  return arr.reduce((pre, cur) => pre + cur)
}

/**
 @desc 获取平均值 */
export const average = (arr: number[]) => {
  return sum(arr) / arr.length
}

/**
 @desc 深拷贝 */
export const deepClone = (data: any) => {
  if (typeof data !== 'object' || data == null) return '不是对象'
  const newData: any = Array.isArray(data) ? [] : {}
  for (const key in data) {
    newData[key] = typeof data[key] === 'object' ? deepClone(data[key]) : data[key]
  }
  return newData
}

/**
 * @desc 判断是否是闰年
 * @param {number} year 年份
 */
export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * @desc 判断是否是奇数
 * @param {number} num 数字
 */
export const isOdd = (num: number) => {
  return num % 2 !== 0
}

/**
 * @desc 判断是否是偶数
 * @param {number} num 数字
 */
export const isEven = (num: number) => {
  return !isOdd(num)
}

/**
 @desc 将RGB转化为十六机制 */
export const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

/**
 @desc 获取随机十六进制颜色 */
export const randomHex = () => {
  return `#${Math.floor(Math.random() * 0xFFFFFF)
  .toString(16)
  .padEnd(6, '0')}`
}



/** @desc 是否是h5环境 */
export const isMobile = () => {
  return browse().isMobile
}

/** @desc 问候 */
export function goodTimeText() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour <= 18 ? '下午好' : '晚上好'
}

/** @desc 格式化文件大小 */
export const formatFileSize = (fileSize: number) => {
  if (fileSize == null || fileSize === 0) {
    return '0 Bytes'
  }
  const unitArr = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  const srcSize = Number.parseFloat(fileSize.toString())
  index = Math.floor(Math.log(srcSize) / Math.log(1024))
  const size = srcSize / 1024 ** index
  return `${size.toFixed(2)} ${unitArr[index]}`
}

/** @desc 复制文本 */
export const copyText = (text: any) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  Message.success('复制成功')
}
