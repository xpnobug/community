<template>
  <div id="viewer" :class="{show: showBool}" data-action="close" @click="viewerButton($event.target)">
    <div :class="{touchdevice: isTouchDevice, load: image.loadBool}" class="back">
      <div class="loading g-txt-hide">正在加载‥</div>
      <figure v-show="!image.initBool" ref="viewerImage" class="image"></figure>
    </div>
    <div v-show="!isTouchDevice" class="front">
      <div v-show="gallery.list.length &gt; 1" class="count viewer-key-count__"
           v-text="(gallery.index + 1) + '/' + gallery.list.length"></div>
      <ul class="tools">
        <li :class="{allow: !image.loadBool}" class="viewer-btn download g-txt-hide viewer-key-download"
            data-action="download">下载图片
        </li>
        <li class="viewer-btn close g-txt-hide viewer-key-close allow" data-action="close">关闭窗口</li>
      </ul>
      <nav v-show="gallery.list.length > 1" class="navigation">
        <div :class="{allow: !image.loadBool}" class="viewer-btn prev g-txt-hide viewer-key-prev viewer-touch-prev"
             data-action="prev">上一张
        </div>
        <div :class="{allow: !image.loadBool}" class="viewer-btn next g-txt-hide viewer-key-next viewer-touch-next"
             data-action="next">下一张
        </div>
      </nav>
      <div class="tips viewer-key-tips__">
        <span v-show="gallery.list.length &gt; 1" class="viewer-tip">
          <mark>←</mark><abbr>上一张</abbr>
        </span>
        <span
          v-show="gallery.list.length > 1" class="viewer-tip">
          <mark>→</mark><abbr>下一张</abbr>
        </span>
        <span class="viewer-tip"><mark>Esc</mark><abbr>关闭窗口</abbr></span>
        <span class="viewer-tip"><mark><template v-if="isMac">Ctrl</template>Ctrl </mark>+<mark>S</mark><abbr>下载图片</abbr></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// 定义响应式变量，用于控制显示和管理图库
const showBool = ref(false);
const gallery = ref({
  index: 0,
  list: [] as string[]
});
const image = ref({
  initBool: true,
  loadBool: false
});
const touch = ref({
  start: 0,
  move: 0,
  moveMax: 50,
  moveOpacityScale: 1.5
});

// 定义对DOM元素的引用
const viewerImage = ref<HTMLElement | null>(null);

// 计算属性：判断是否为Mac设备
const isMac = computed(() => /mac/i.test(window.navigator.platform));

// 计算属性：判断是否为触摸设备
const isTouchDevice = computed(() => 'ontouchstart' in window);

// 图片加载函数
function imageLoad(url: string, callback: (width: number, height: number) => void) {
  let img = new Image();
  img.src = url;
  // 如果图片已经加载完成，直接执行回调
  if (img.complete) {
    callback(img.width, img.height);
  } else {
    // 如果图片未加载完成，设置onload事件
    img.onload = () => {
      callback(img.width, img.height);
      img.onload = null; // 清除onload事件
    };
  }
}

// 图片下载函数
function imageDownload(url: string) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  //设置跨域
  xhr.setRequestHeader('Referer', '*');
  xhr.withCredentials = true;
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
  xhr.setRequestHeader('Access-Control-Allow-Methods', '*');
  //Referer
  xhr.responseType = 'blob'; // 设置响应类型为blob
  xhr.onload = () => {
    let a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = url.substring(url.lastIndexOf('/') + 1); // 设置下载文件名
    a.click();
  };
  xhr.send();
}

// 键盘事件处理函数
function keyFunction(e: KeyboardEvent) {
  const keyMap = (isMac.value && e.metaKey) || (!isMac.value && e.ctrlKey) ? {
    s: 'download' // Mac设备使用meta键，其他设备使用ctrl键
  } : {
    Escape: 'close',
    ArrowUp: 'count__',
    ArrowRight: 'next',
    ArrowDown: 'tips__',
    ArrowLeft: 'prev'
  };

  if (keyMap[e.key]) {
    const keyButton = document.querySelector('.viewer-key-' + keyMap[e.key]) as HTMLElement;
    if (keyButton) {
      keyButton.classList.add('on'); // 添加CSS类
      setTimeout(() => {
        keyButton.classList.remove('on'); // 移除CSS类
        if (!/__/.test(keyMap[e.key])) setTimeout(() => keyButton.click(), 200); // 模拟按钮点击
      }, 300);
      e.preventDefault(); // 阻止默认事件
    }
  }
}

// 切换图片函数
function imageSwitch(url: string) {
  if (!showBool.value) showBool.value = true;
  if (image.value.initBool && !isTouchDevice.value) window.addEventListener('keydown', keyFunction, true); // 添加键盘事件监听器
  image.value.loadBool = true;
  setTimeout(() => {
    imageLoad(url, () => {
      if (viewerImage.value) {
        viewerImage.value.innerHTML = '<img src="' + url + '" draggable="false" alt="" />';
      }
      if (image.value.initBool) image.value.initBool = false;
      image.value.loadBool = false;
    });
  }, 500);
}

// 关闭图片查看器
function imageClose() {
  if (!isTouchDevice.value) window.removeEventListener('keydown', keyFunction, true); // 移除键盘事件监听器
  showBool.value = false;
  image.value.initBool = true;
}

// 处理按钮点击事件
function viewerButton(dom: HTMLElement) {
  if (dom.hasAttribute('data-action')) {
    switch (dom.getAttribute('data-action')) {
      case 'prev': // 上一张图片
        if (!image.value.loadBool) {
          gallery.value.index = gallery.value.index === 0 ? gallery.value.list.length - 1 : gallery.value.index - 1;
          imageSwitch(gallery.value.list[gallery.value.index]);
        }
        break;
      case 'next': // 下一张图片
        if (!image.value.loadBool) {
          gallery.value.index = gallery.value.index === gallery.value.list.length - 1 ? 0 : gallery.value.index + 1;
          imageSwitch(gallery.value.list[gallery.value.index]);
        }
        break;
      case 'download': // 下载图片
        if (!image.value.loadBool) imageDownload(gallery.value.list[gallery.value.index]);
        break;
      case 'close': // 关闭图片查看器
        imageClose();
        break;
    }
  }
}

// 处理画廊按钮点击事件
function postGalleryButton(url: string, dom: HTMLElement) {
  gallery.value.list = [];
  if (dom.tagName.toLowerCase() === 'img') {
    // 遍历同一父节点下的所有兄弟节点，获取data-index属性
    for (let child of (dom.parentNode?.parentNode?.children || [])) {
      gallery.value.list.push((child.firstElementChild as HTMLElement).getAttribute('data-index') || '');
    }
    gallery.value.index = gallery.value.list.indexOf(url);
  } else {
    gallery.value.list.push(url);
    gallery.value.index = 0;
  }
  imageSwitch(gallery.value.list[gallery.value.index]);
}

// 处理触摸开始事件
function imageTouchStart(e: TouchEvent) {
  e.preventDefault(); // 阻止默认事件
  touch.value.start = e.targetTouches[0].clientX; // 记录触摸开始位置
  window.addEventListener('touchmove', imageTouchMove, {
    passive: false
  });
  window.addEventListener('touchend', imageTouchEnd);
  if (viewerImage.value) {
    viewerImage.value.removeAttribute('style'); // 移除样式
  }
}

// 处理触摸移动事件
function imageTouchMove(e: TouchEvent) {
  e.preventDefault(); // 阻止默认事件
  touch.value.move = e.targetTouches[0].clientX - touch.value.start; // 计算移动距离
  if (viewerImage.value) {
    viewerImage.value.style.transform = `translate3d(calc(-50% + ${touch.value.move}px), -50%, 0)`; // 设置移动样式
    if (Math.abs(touch.value.move) > touch.value.moveMax) {
      viewerImage.value.style.opacity = Math.abs(touch.value.move) - touch.value.moveMax > touch.value.moveOpacityScale * 100 ? '0' : (1 - ((Math.abs(touch.value.move) - touch.value.moveMax) / (touch.value.moveOpacityScale * 100)).toFixed(2)).toString(); // 设置透明度
    }
  }
}

// 处理触摸结束事件
function imageTouchEnd() {
  window.removeEventListener('touchmove', imageTouchMove);
  window.removeEventListener('touchend', imageTouchEnd);
  if (viewerImage.value) {
    if (touch.value.move !== 0) {
      if (Math.abs(touch.value.move) > touch.value.moveMax) {
        const direction = touch.value.move > 0 ? 'next' : 'prev'; // 判断滑动方向
        const touchButton = document.querySelector('.viewer-touch-' + direction) as HTMLElement;
        if (touchButton) {
          touchButton.click(); // 模拟点击事件
        }
        viewerImage.value.removeAttribute('style'); // 移除样式
      } else {
        viewerImage.value.style.transform = 'translate3d(-50%, -50%, 0)';
        viewerImage.value.style.transition = 'transform 0.3s linear'; // 设置回弹效果
      }
      touch.value.move = 0;
    }
    touch.value.start = 0;
  }
}

// 组件挂载时执行的操作
onMounted(() => {
  // 全局函数，供外部调用
  window.componentViewer_postGalleryButton = postGalleryButton;
  if (isTouchDevice.value && viewerImage.value) {
    viewerImage.value.addEventListener('touchstart', imageTouchStart, {
      passive: false
    });
  }
});

// 组件卸载时移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('keydown', keyFunction, true);
  window.removeEventListener('touchmove', imageTouchMove);
  window.removeEventListener('touchend', imageTouchEnd);
});
</script>

<style scoped>

</style>