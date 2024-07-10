<template>
  <a-list :data-source="props.musicList.songs" item-layout="horizontal" @click="postActionProcessing($event.target)">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
            :description="item.alias[0] + '  ' + item.artists[0].name">
          <template #title>
            {{ item.name }}
            <div :id="item.id" class="audio-btn canplay" @click="audioStageNode('canplay')"
                 data-action="audioplay"
                 :data-attachment1="`https://music.163.com/song/media/outer/url?id=${item.id}.mp3`"
                 data-attachment2="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
                 :data-index="item.id"></div>
          </template>
          <template #avatar>
            <a-avatar :src="item.album.artist.img1v1Url"/>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import {postActionProcessing} from "@/hooks/post.ts";
import {ref} from "vue";
const props = defineProps(['musicList']);
console.log(props.musicList);

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

// 重新播放音频
// function audioReplay() {
//   clearInterval(timer.value.progress);
//   playBool.value = false;
//   meta.value.progress = 0;
//   audioStageNode('replay');
// }

// 更新音频播放进度
// function audioProgress() {
//   if (meta.value.audio.ended === true) {
//     audioReplay();
//   } else {
//     meta.value.progress = (meta.value.audio.currentTime / meta.value.duration) * 100;
//   }
// }
// 播放音频
// function audioPlay() {
//   playBool.value = true;
//   meta.value.audio.play();
//   timer.value.progress = setInterval(audioProgress, 500);
// }

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

// 当前播放的音频ID
const postAudio = ref({
  id: ''
});
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
</script>

