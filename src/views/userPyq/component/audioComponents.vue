<template>
  <div id="player" :class="{show: showBool}"
       :style="'--margin: ' + block.margin + 'px;--background_image: url(' + meta.cover + ');'"
       data-coverdefault="/pink/img/nocover.audio.jpg">
    <div ref="moveBlock" class="meta"><img :src="meta.cover" alt="alt" class="cover g-alias-imgblock"
                                           draggable="false" loading="lazy"/></div>
    <div :class="{canplay: canplayBool}" class="button g-clear-both">
      <div :class="{play: playBool}" class="player-btn status g-left g-txt-hide" v-text="playBool ? '暂停' : '播放'"
           @click="audioButton('switch')"></div>
      <div :style="'--width: ' + (meta.progress).toFixed(2) + '%;'" class="player-progress g-txt-hide"
           v-text="(meta.progress).toFixed(1) + '%'"></div>
      <div class="player-btn close g-right g-txt-hide" @click="audioButton('close')">关闭</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref, watch} from 'vue';

// 响应式变量，用于控制播放器显示状态和音频播放状态
const showBool = ref(false);
const playBool = ref(false);
const canplayBool = ref(false);

// 音频元数据和相关计时器
const meta = ref({
  audio: new Audio(),
  src: '',
  cover: '',
  duration: 0,
  progress: 0
});
const timer = ref({
  progress: undefined as any,
  canplay: undefined as any
});

// 用于播放器窗口位置和大小的变量
const block = ref({
  windowWidth: document.documentElement.clientWidth,
  windowHeight: document.documentElement.clientHeight,
  left: window.localStorage.getItem('player-left') != null ? window.localStorage.getItem('player-left') : 0,
  top: window.localStorage.getItem('player-top') != null ? window.localStorage.getItem('player-top') : 0,
  width: 0,
  height: 0,
  margin: 10,
  inset: {
    X: 0,
    Y: 0
  }
});

// 当前播放的音频ID
const postAudio = ref({
  id: ''
});

// 监听showBool变量，当播放器显示时设置播放器的宽度和高度
watch(showBool, (val) => {
  if (val && block.value.width === 0) {
    setTimeout(() => {
      block.value.width = (document.getElementById('player') as HTMLElement).offsetWidth;
      block.value.height = (document.getElementById('player') as HTMLElement).offsetHeight;
      blockPosition();
    }, 0);
  }
});

// 计算属性：计算播放器在X轴上的移动距离，确保播放器不会超出窗口边界
const blockMoveDistanceX = computed(() => {
  let max = block.value.windowWidth - block.value.width - (block.value.margin * 2);
  if (block.value.left < 0) {
    block.value.left = 0;
  } else if (block.value.left > max) {
    block.value.left = max;
  }
  return block.value.left;
});

// 计算属性：计算播放器在Y轴上的移动距离，确保播放器不会超出窗口边界
const blockMoveDistanceY = computed(() => {
  let max = block.value.windowHeight - block.value.height - (block.value.margin * 2);
  if (block.value.top < 0) {
    block.value.top = 0;
  } else if (block.value.top > max) {
    block.value.top = max;
  }
  return block.value.top;
});

// 禁用文本选择事件
function documentSelectDisabledEvent(e: Event) {
  e.preventDefault();
}

// 启用或禁用文本选择
function documentSelectDisabled(bool: boolean) {
  if (bool) {
    document.addEventListener('selectstart', documentSelectDisabledEvent, true);
  } else {
    document.removeEventListener('selectstart', documentSelectDisabledEvent, true);
  }
}

// 更新播放器位置
function blockPosition() {
  const playerElement = document.getElementById('player') as HTMLElement;
  playerElement.style.transform = `translate3d(${blockMoveDistanceX.value}px, ${blockMoveDistanceY.value}px, 0)`;
  localStorage.setItem('player-left', blockMoveDistanceX.value.toString());
  localStorage.setItem('player-top', blockMoveDistanceY.value.toString());
}

// 鼠标按下事件处理，开始拖动播放器
function playerMouseDown(e: MouseEvent) {
  e.preventDefault();
  const playerElement = document.getElementById('player') as HTMLElement;
  block.value.inset.X = e.clientX - playerElement.getBoundingClientRect().left;
  block.value.inset.Y = e.clientY - playerElement.getBoundingClientRect().top;
  documentSelectDisabled(true);
  window.addEventListener('mousemove', playerMouseMove);
  window.addEventListener('mouseup', playerMouseUp);
}

// 鼠标移动事件处理，更新播放器位置
function playerMouseMove(e: MouseEvent) {
  e.preventDefault();
  block.value.left = e.clientX - block.value.inset.X - block.value.margin;
  block.value.top = e.clientY - block.value.inset.Y - block.value.margin;
  blockPosition();
}

// 鼠标释放事件处理，停止拖动播放器
function playerMouseUp() {
  window.removeEventListener('mousemove', playerMouseMove);
  window.removeEventListener('mouseup', playerMouseUp);
  documentSelectDisabled(false);
}

// 触摸开始事件处理，开始拖动播放器
function playerTouchStart(e: TouchEvent) {
  e.preventDefault();
  const playerElement = document.getElementById('player') as HTMLElement;
  block.value.inset.X = e.targetTouches[0].clientX - playerElement.getBoundingClientRect().left;
  block.value.inset.Y = e.targetTouches[0].clientY - playerElement.getBoundingClientRect().top;
  documentSelectDisabled(true);
  window.addEventListener('touchmove', playerTouchMove, {passive: false});
  window.addEventListener('touchend', playerTouchEnd);
}

// 触摸移动事件处理，更新播放器位置
function playerTouchMove(e: TouchEvent) {
  e.preventDefault();
  block.value.left = e.targetTouches[0].clientX - block.value.inset.X - block.value.margin;
  block.value.top = e.targetTouches[0].clientY - block.value.inset.Y - block.value.margin;
  blockPosition();
}

// 触摸结束事件处理，停止拖动播放器
function playerTouchEnd() {
  window.removeEventListener('touchmove', playerTouchMove);
  window.removeEventListener('touchend', playerTouchEnd);
  documentSelectDisabled(false);
}

// 重新播放音频
function audioReplay() {
  clearInterval(timer.value.progress);
  playBool.value = false;
  meta.value.progress = 0;
  audioStageNode('replay');
}

// 更新音频播放进度
function audioProgress() {
  if (meta.value.audio.ended === true) {
    audioReplay();
  } else {
    meta.value.progress = (meta.value.audio.currentTime / meta.value.duration) * 100;
  }
}

// 播放音频
function audioPlay() {
  playBool.value = true;
  meta.value.audio.play();
  timer.value.progress = setInterval(audioProgress, 500);
}

// 暂停音频
function audioPause() {
  clearInterval(timer.value.progress);
  meta.value.audio.pause();
  playBool.value = false;
}

// 准备音频播放
function audioReady() {
  meta.value.audio.src = meta.value.src;
  meta.value.audio.load();
  meta.value.audio.addEventListener('loadedmetadata', () => {
    meta.value.duration = meta.value.audio.duration;
  });
  meta.value.audio.addEventListener('canplay', () => {
    canplayBool.value = true;
  });
  meta.value.audio.addEventListener('error', () => {
    console.log('player error code: ' + meta.value.audio.error?.code);
  });
  timer.value.canplay = setInterval(() => {
    if (canplayBool.value) {
      clearInterval(timer.value.canplay);
      audioStageNode('canplay');
      audioPlay();
    }
  }, 200);
}

// 更新音频按钮状态
function postAudioButtonStatusPassive(status: string) {
  if (postAudio.value.id.length > 0) {
    let dom = document.getElementById(postAudio.value.id);
    switch (status) {
      case 'canplay':
        dom?.classList.add('canplay');
        break;
      case 'cannotplay':
        dom?.classList.remove('canplay');
        break;
      case 'play':
        dom?.classList.add('play');
        break;
      case 'pause':
        dom?.classList.remove('play');
        break;
    }
  }
}

// 更新音频播放节点状态
function audioStageNode(name: string) {
  switch (name) {
    case 'canplay':
      postAudioButtonStatusPassive('canplay');
      break;
    case 'replay':
      postAudioButtonStatusPassive('pause');
      break;
  }
}

// 音频控制按钮
function audioButton(name: string) {
  console.log('audioButton', name)
  switch (name) {
    case 'switch':
      if (canplayBool.value) {
        if (playBool.value) {
          audioPause();
          postAudioButtonStatusPassive('pause');
        } else {
          if (typeof (window as any).componentBar_bgmPlayButtonIndirectPause === 'function') (window as any).componentBar_bgmPlayButtonIndirectPause();
          audioPlay();
          postAudioButtonStatusPassive('play');
        }
      }
      break;
    case 'close':
      if (canplayBool.value) {
        if (playBool.value) {
          audioPause();
          postAudioButtonStatusPassive('pause');
        }
        postAudioButtonStatusPassive('cannotplay');
        showBool.value = false;
        postAudio.value.id = '';
        meta.value.audio.currentTime = 0;
        meta.value.progress = 0;
      }
      break;
  }
}

// 间接暂停音频
function audioButtonIndirectPause() {
  if (canplayBool.value && playBool.value) {
    audioPause();
    postAudioButtonStatusPassive('pause');
  }
}

// 更新上一个音频按钮状态
function postAudioButtonStatusInitiativeToPrevButton() {
  postAudioButtonStatusPassive('pause');
  postAudioButtonStatusPassive('cannotplay');
}

// 主动更新音频按钮状态
function postAudioButtonStatusInitiative(status: string, dom: HTMLElement, arg = undefined) {
  switch (status) {
    case 'play':
      if (typeof (window as any).componentBar_bgmPlayButtonIndirectPause === 'function') (window as any).componentBar_bgmPlayButtonIndirectPause();
      dom.classList.add('play');
      if (arg) {
        canplayBool.value = false;
        audioReady();
      } else {
        audioPlay();
      }
      break;
    case 'pause':
      dom.classList.remove('play');
      audioPause();
      break;
  }
}

// 处理音频按钮点击事件
function postAudioButton(id: string, src: string, cover: string) {
  if (id.length > 0) {
    if (id === postAudio.value.id) {
      let dom = document.getElementById(postAudio.value.id);
      if (dom?.classList.contains('play')) {
        postAudioButtonStatusInitiative('pause', dom);
      } else {
        postAudioButtonStatusInitiative('play', dom, false);
      }
    } else {
      postAudioButtonStatusInitiativeToPrevButton();
      meta.value.src = src;
      meta.value.cover = cover;
      postAudioButtonStatusInitiative('play', document.getElementById(id)!, true);
      if (postAudio.value.id.length === 0) showBool.value = true;
      postAudio.value.id = id;
    }
  }
}

// 组件挂载时执行的操作
onMounted(() => {
  const playerElement = document.getElementById('player') as HTMLElement;
  meta.value.cover = playerElement.getAttribute('data-coverdefault')!;
  playerElement.addEventListener('mousedown', playerMouseDown);
  playerElement.addEventListener('touchstart', playerTouchStart, {passive: false});
  window.addEventListener('resize', () => {
    block.value.windowWidth = document.documentElement.clientWidth;
    block.value.windowHeight = document.documentElement.clientHeight;
    if (showBool.value) blockPosition();
  });
  (window as any).componentPlayer_postAudioButton = postAudioButton;
  (window as any).componentPlayer_audioButtonIndirectPause = audioButtonIndirectPause;
});
</script>


<style scoped>

</style>