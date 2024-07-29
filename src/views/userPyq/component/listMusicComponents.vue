<template>
  <a-list :data-source="props.musicList" item-layout="horizontal" @click="postActionProcessing($event.target)">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-radio-group v-model:value="value" name="radioGroup">
          <a-radio :value="item.songId" @change="handleChange(item)">
            <a-list-item-meta
                :description="item.singer">
              <template #title>
                {{ item.songName }}
                <div :id="item.songId" class="audio-btn canplay" @click="audioStageNode('canplay')"
                     data-action="audioplay"
                     :data-attachment1="`https://music.163.com/song/media/outer/url?id=${item.songId}.mp3`"
                     :data-attachment2="item.songImg"
                     :data-index="item.songId"></div>
              </template>
              <template #avatar>
                <a-avatar :src="item.songImg"/>
              </template>
            </a-list-item-meta>
          </a-radio>
        </a-radio-group>

      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import {postActionProcessing} from "@/hooks/post.ts";
import {ref, defineProps} from "vue";
// 使用 defineProps 一次定义所有的 props
// 定义 props 并指定 musicList 的类型为 Array
const props = defineProps({
  musicList: {
    required: true
  },
  musicInfo: {
    type: Function,
    required: true
  }
});

const value = ref<string>('1');
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

const handleChange = (v) => {
  if (props.musicInfo != undefined) {
    props.musicInfo(v)
  }
}

</script>

<style scoped>
::v-deep(.ant-list-item-meta-content){
  width: 100% !important;
}
::v-deep(.ant-radio-wrapper){
  position: static;
}
</style>

