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

<script>
export default {
  name: "audioComponents",
  data() {
    return {
      showBool: false,
      playBool: false,
      canplayBool: false,
      meta: {
        audio: new Audio(),
        src: '',
        cover: '',
        duration: 0,
        progress: 0
      },
      timer: {
        progress: undefined,
        canplay: undefined
      },
      block: {
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
      },
      postAudio: {
        id: ''
      }
    }
  },
  watch: {
    'showBool': function (val) {
      if (val && this.block.width === 0) {
        setTimeout(() => {
          this.block.width = this.$el.offsetWidth;
          this.block.height = this.$el.offsetHeight;
          this.blockPosition();
        }, 0);
      }
    }
  },
  computed: {
    blockMoveDistanceX: function () {
      let max = this.block.windowWidth - this.block.width - (this.block.margin * 2);
      if (this.block.left < 0) {
        this.block.left = 0;
      } else if (this.block.left > max) {
        this.block.left = max;
      }
      return this.block.left;
    },
    blockMoveDistanceY: function () {
      let max = this.block.windowHeight - this.block.height - (this.block.margin * 2);
      if (this.block.top < 0) {
        this.block.top = 0;
      } else if (this.block.top > max) {
        this.block.top = max;
      }
      return this.block.top;
    }
  },
  methods: {
    documentSelectDisabledEvent: function (e) {
      e.preventDefault();
    },
    documentSelectDisabled: function (bool) {
      if (bool) {
        document.addEventListener('selectstart', this.documentSelectDisabledEvent, true);
      } else {
        document.removeEventListener('selectstart', this.documentSelectDisabledEvent, true);
      }
    },
    blockPosition: function () {
      this.$el.style.transform = 'translate3d(' + this.blockMoveDistanceX + 'px, ' + this.blockMoveDistanceY + 'px, 0)';
      localStorage.setItem('player-left', this.blockMoveDistanceX);
      localStorage.setItem('player-top', this.blockMoveDistanceY);
    },
    playerMouseDown: function (e) {
      e.preventDefault();
      this.block.inset.X = e.clientX - this.$el.getBoundingClientRect().left;
      this.block.inset.Y = e.clientY - this.$el.getBoundingClientRect().top;
      this.documentSelectDisabled(true);
      window.addEventListener('mousemove', this.playerMouseMove);
      window.addEventListener('mouseup', this.playerMouseUp);
    },
    playerMouseMove: function (e) {
      e.preventDefault();
      this.block.left = e.clientX - this.block.inset.X - this.block.margin;
      this.block.top = e.clientY - this.block.inset.Y - this.block.margin;
      this.blockPosition();
    },
    playerMouseUp: function () {
      window.removeEventListener('mousemove', this.playerMouseMove);
      window.removeEventListener('mouseup', this.playerMouseUp);
      this.documentSelectDisabled(false);
    },
    playerTouchStart: function (e) {
      e.preventDefault();
      this.block.inset.X = e.targetTouches[0].clientX - this.$el.getBoundingClientRect().left;
      this.block.inset.Y = e.targetTouches[0].clientY - this.$el.getBoundingClientRect().top;
      this.documentSelectDisabled(true);
      window.addEventListener('touchmove', this.playerTouchMove, {
        passive: false
      });
      window.addEventListener('touchend', this.playerTouchEnd);
    },
    playerTouchMove: function (e) {
      e.preventDefault();
      this.block.left = e.targetTouches[0].clientX - this.block.inset.X - this.block.margin;
      this.block.top = e.targetTouches[0].clientY - this.block.inset.Y - this.block.margin;
      this.blockPosition();
    },
    playerTouchEnd: function () {
      window.removeEventListener('touchmove', this.playerTouchMove);
      window.removeEventListener('touchend', this.playerTouchEnd);
      this.documentSelectDisabled(false);
    },
    audioReplay: function () {
      clearInterval(this.timer.progress);
      this.playBool = false;
      this.meta.progress = 0;
      this.audioStageNode('replay');
    },
    audioProgress: function () {
      if (this.meta.audio.ended === true) {
        this.audioReplay();
      } else {
        this.meta.progress = (this.meta.audio.currentTime / this.meta.duration) * 100;
      }
    },
    audioPlay: function () {
      this.playBool = true;
      this.meta.audio.play()
      this.timer.progress = setInterval(this.audioProgress, 500);
    },
    audioPause: function () {
      clearInterval(this.timer.progress);
      this.meta.audio.pause();
      this.playBool = false;
    },
    audioReady: function () {
      this.meta.audio.src = this.meta.src;
      this.meta.audio.load();
      this.meta.audio.addEventListener('loadedmetadata', () => {
        this.meta.duration = this.meta.audio.duration;
      });
      this.meta.audio.addEventListener('canplay', () => {
        this.canplayBool = true;
      });
      this.meta.audio.addEventListener('error', () => {
        console.log('player error code: ' + this.meta.audio.error.code);
      });
      this.timer.canplay = setInterval(() => {
        if (this.canplayBool) {
          clearInterval(this.timer.canplay);
          this.audioStageNode('canplay');
          this.audioPlay();
        }
      }, 200);
    },
    postAudioButtonStatusPassive: function (status) {
      if (this.postAudio.id.length > 0) {
        let dom = document.getElementById(this.postAudio.id);
        switch (status) {
          case 'canplay':
            dom.classList.add('canplay');
            break;
          case 'cannotplay':
            dom.classList.remove('canplay');
            break;
          case 'play':
            dom.classList.add('play');
            break;
          case 'pause':
            dom.classList.remove('play');
            break;
        }
      }
    },
    audioStageNode: function (name) {
      switch (name) {
        case 'canplay':
          this.postAudioButtonStatusPassive('canplay');
          break;
        case 'replay':
          this.postAudioButtonStatusPassive('pause');
          break;
      }
    },
    audioButton: function (name) {
      switch (name) {
        case 'switch':
          if (this.canplayBool) {
            if (this.playBool) {
              this.audioPause();
              this.postAudioButtonStatusPassive('pause');
            } else {
              if (typeof window.componentBar_bgmPlayButtonIndirectPause === 'function') window.componentBar_bgmPlayButtonIndirectPause();
              this.audioPlay();
              this.postAudioButtonStatusPassive('play');
            }
          }
          break;
        case 'close':
          if (this.canplayBool) {
            if (this.playBool) {
              this.audioPause();
              this.postAudioButtonStatusPassive('pause');
            }
            this.postAudioButtonStatusPassive('cannotplay');
            this.showBool = false;
            this.postAudio.id = '';
            this.meta.audio.currentTime = 0;
            this.meta.progress = 0;
          }
          break;
      }
    },
    audioButtonIndirectPause: function () {
      if (this.canplayBool && this.playBool) {
        this.audioPause();
        /* post audio button synchronization status */
        this.postAudioButtonStatusPassive('pause');
      }
    },
    postAudioButtonStatusInitiativeToPrevButton: function () {
      this.postAudioButtonStatusPassive('pause');
      this.postAudioButtonStatusPassive('cannotplay');
    },
    postAudioButtonStatusInitiative: function (status, dom, arg = undefined) {
      switch (status) {
        case 'play':
          if (typeof window.componentBar_bgmPlayButtonIndirectPause === 'function') window.componentBar_bgmPlayButtonIndirectPause();
          dom.classList.add('play');
          if (arg) {
            this.canplayBool = false;
            this.audioReady();
          } else {
            this.audioPlay();
          }
          break;
        case 'pause':
          dom.classList.remove('play');
          this.audioPause();
          break;
      }
    },
    postAudioButton: function (id, src, cover) {
      if (id.length > 0) {
        if (id === this.postAudio.id) {
          let dom = document.getElementById(this.postAudio.id);
          dom.classList.contains('play') ? this.postAudioButtonStatusInitiative('pause', dom) : this.postAudioButtonStatusInitiative('play', dom, false);
        } else {
          this.postAudioButtonStatusInitiativeToPrevButton();
          this.meta.src = src;
          this.meta.cover = cover;
          this.postAudioButtonStatusInitiative('play', document.getElementById(id), true);
          if (this.postAudio.id.length === 0) this.showBool = true;
          /* recode start */
          this.postAudio.id = id;
          /* recode end */
        }
      }
    }
  },
  mounted: function () {
    this.meta.cover = document.getElementById('player').getAttribute('data-coverdefault');
    this.$refs.moveBlock.addEventListener('mousedown', this.playerMouseDown);
    this.$refs.moveBlock.addEventListener('touchstart', this.playerTouchStart, {
      passive: false
    });
    window.addEventListener('resize', () => {
      this.block.windowWidth = document.documentElement.clientWidth;
      this.block.windowHeight = document.documentElement.clientHeight;
      if (this.showBool) this.blockPosition();
    });
    window.componentPlayer_postAudioButton = this.postAudioButton;
    window.componentPlayer_audioButtonIndirectPause = this.audioButtonIndirectPause;
  }
}
</script>

<style scoped>

</style>