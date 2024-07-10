import {getCurrentInstance, onMounted, ref} from "vue";

export function postActionProcessing(dom) {
    // console.log('postActionProcessing', dom)
    if (dom.hasAttribute('data-action')) {
        let action = dom.getAttribute('data-action');
        let index = dom.getAttribute('data-index');
        switch (action) {
            case 'edit':
                window.open(index);
                break;
            case 'delete':
                this.postDelete(index, dom);
                break;
            case 'fun':
                postFun(index);
                break;
            case 'like':
                postLike(index, dom);
                break;
            case 'comment':
                break;
            case 'commentreply':
                this.postCommentReply(index, dom);
                break;
            case 'commentdelete':
                this.postCommentDelete(index, dom);
                break;
            case 'viewimage':
                if (typeof window.componentViewer_postGalleryButton === 'function') window.componentViewer_postGalleryButton(index, dom);
                // console.log('postActionProcessing',window.componentViewer_postGalleryButton === 'function');
                break;
            case 'audioplay':
                if (typeof window.componentPlayer_postAudioButton === 'function') window.componentPlayer_postAudioButton(index, dom.getAttribute('data-attachment1'), dom.getAttribute('data-attachment2'));
                console.log('audioplay', dom.getAttribute('data-attachment1'));
                break;
            case 'morecontent':
                moreContent(index, dom);
                break;
            case 'morecomment':
                window.location.href = index;
                break;
        }
    }
}

const gallery = ref({
    index: 0,
    list: []
})

const postsParam = ({
    api: {
        like: '',
        comment: '',
        delete: '',
        commentDelete: ''
    },
    ajaxLock: {
        like: false,
        comment: false,
        delete: false,
        commentDelete: false
    },
    currentFunBoxPost: undefined
})



const image = ref({
    initBool: true,
    loadBool: false
})

const touch = ref({
    start: 0,
    move: 0,
    moveMax: 50,
    moveOpacityScale: 1.5
})


const commentformData = ({
    elements: {
        targetCommentArea: undefined
    },
    api: {
        guestAvatar: '',
    },
    ajaxLock: {
        guestAvatar: false
    },
    formFocusholderBool: false,
    formSubmittingBool: false,
    text: '',
    textPlaceholder: '',
    textCommentTip: '',
    textReplyTip: '',
    textFocusTimer: undefined,
    stickerShowBool: false,
    metaSummaryBool: false,
    avatar: '',
    avatarError: '',
    name: '',
    nameErrorBool: false,
    email: '',
    emailErrorBool: false,
    code: '',
    codeErrorBool: false,
    url: '',
    urlErrorBool: false,
    post: 0,
    parentComment: 0,
    toComment: 0,
    hash2: null
})
const stickerMoreBool = ref(false);


// 直接返回计算值，而不是使用 computed 函数（对于简单的计算）
const isMac = /mac/i.test(window.navigator.platform);

// 使用 ref 来包装可能变化的引用，但在这个例子中我们不需要因为它是一个常量
// 如果它是一个可能变化的值，我们应该使用 ref 和 watchEffect 或 watch 来响应式地更新它
// const isMac = ref(false); // 如果你需要在某个地方更新它

// 对于可能变化的计算属性，使用 computed
// 但在这个例子中，我们不需要 computed，因为 'ontouchstart' 在 window 上是静态的
const isTouchDevice = ref('ontouchstart' in window);

// 如果你真的需要计算属性（例如，基于其他响应式引用的计算）
// const someComputedProp = computed(() => {
//     // ... 基于其他 ref 或 reactive 的计算逻辑
// });

export function postFun(index) {
    console.log('postFun', index)
    let post = document.getElementById('post-' + index);
    let classname = 'funboxshow';
    if (post.classList.contains(classname)) {
        postsParam.currentFunBoxPost = undefined;
        post.classList.remove(classname);
    } else {
        let parent = post.parentNode;
        for (let child of parent.children) {
            if (child.tagName.toLowerCase() === 'article') child.classList.remove(classname);
        }
        post.classList.add(classname);
        postsParam.currentFunBoxPost = post;
    }
}

export function postFunIndirectClose(post = postsParam.currentFunBoxPost) {
    let classname = 'funboxshow';
    if (post && post.classList.contains(classname)) post.classList.remove(classname);
}

export function postLike(index, button) {
    // console.log('postLike', index, button)
}

export function postidProcessing(index) {
    let sepPos = index.indexOf('-');
    return index.slice(0, sepPos);
}



export function viewerButton(dom) {
    console.log('viewerButton', dom)
    console.log(dom.hasAttribute('data-action'))
    if (dom.hasAttribute('data-action')) {
        switch (dom.getAttribute('data-action')) {
            case 'prev':
                if (!image.value.loadBool) {
                    gallery.value.index = gallery.value.index === 0 ? gallery.value.list.length - 1 : gallery.index - 1;
                    imageSwitch(gallery.value.list[gallery.value.index]);
                }
                break;
            case 'next':
                if (!image.value.loadBool) {
                    gallery.value.index = gallery.value.index === gallery.value.list.length - 1 ? 0 : gallery.value.index + 1;
                    imageSwitch(gallery.value.list[gallery.value.index]);
                }
                break;
            case 'download':
                if (!image.value.loadBool) imageDownload(gallery.value.list[gallery.value.index]);
                break;
            case 'close':
                imageClose();
                break;
        }
    }
}

export function keyFunction(e) {
    let keyMap = (isMac && e.metaKey) || (!isMac && e.ctrlKey) ? {
        s: 'download'
    } : {
        Escape: 'close',
        ArrowUp: 'count__',
        ArrowRight: 'next',
        ArrowDown: 'tips__',
        ArrowLeft: 'prev'
    };
    if (keyMap[e.key]) {
        let keyButton = this.$el.querySelector('.viewer-key-' + keyMap[e.key]);
        keyButton.classList.add('on');
        setTimeout(() => {
            keyButton.classList.remove('on');
            if (!/__/.test(keyMap[e.key])) setTimeout(() => keyButton.click(), 200);
        }, 300);
        e.preventDefault();
    }
}

export function imageLoad(url, callback) {
    let img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = () => {
            callback(img.width, img.height);
            img.onload = null;
        }
    }
    // console.log(callback)
}

export function imageDownload(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = url.substring(url.lastIndexOf('/') + 1);
        a.click();
    };
    xhr.send();
}

export function imageClose() {
    if (!isTouchDevice) window.removeEventListener('keydown', keyFunction, true);
    showBool.value = false;
    image.value.initBool = true;
}

export function imageTouchStart(e) {
    e.preventDefault();
    touch.value.start = e.targetTouches[0].clientX;
    window.addEventListener('touchmove', imageTouchMove, {
        passive: false
    });
    window.addEventListener('touchend', imageTouchEnd);
    viewerImage.removeAttribute('style');
}

export function imageTouchMove(e) {
    e.preventDefault();
    touch.value.move = e.targetTouches[0].clientX - touch.value.start;
    viewerImage.style.transform = 'translate3d(calc(-50% + ' + this.touch.move + 'px), -50%, 0)';
    if (Math.abs(touch.value.move) > touch.value.moveMax) viewerImage.style.opacity = Math.abs(touch.value.move) - touch.value.moveMax > touch.value.moveOpacityScale * 100 ? 0 : 1 - ((Math.abs(touch.value.move) - touch.value.moveMax) / (touch.value.moveOpacityScale * 100)).toFixed(2);
}

export function imageTouchEnd(e) {
    window.removeEventListener('touchmove', imageTouchMove);
    window.removeEventListener('touchend', imageTouchEnd);
    if (touch.value.move !== 0) {
        if (Math.abs(touch.value.move) > touch.value.moveMax) {
            this.$el.querySelector('.viewer-touch-' + (touch.value.move > 0 ? 'next' : 'prev')).click();
            viewerImage.removeAttribute('style');
        } else {
            viewerImage.style.transform = 'translate3d(-50%, -50%, 0)';
            viewerImage.style.transition = 'transform 0.3s linear';
        }
        touch.value.move = 0;
    }
    touch.value.start = 0;
}

const showBool = ref(false);
const viewerImage = ref(HTMLElement);
const figure = ref(null);
const instance = getCurrentInstance()

export function imageSwitch(url) {
    console.log('imageSwitch', url)
    if (!showBool.value) showBool.value = true;
    if (image.value.initBool && !isTouchDevice) window.addEventListener('keydown', keyFunction, true);
    image.value.loadBool = true;
    setTimeout(() => {
        imageLoad(url, () => {
            viewerImage.value.innerHTML = '<img src="' + url + '" draggable="false" alt="" />';
            figure.value = url;
            if (image.value.initBool) image.value.initBool = false;
            image.value.loadBool = false;
        });
    }, 500);
}

export function postGalleryButton(url, dom) {
    // console.log('postGalleryButton',url,dom)
    gallery.value.list = [];
    if (dom.tagName.toLowerCase() === 'img') {
        /*
        gallery
        ..figure
          ..thumbnail
        */
        for (let child of dom.parentNode.parentNode.children) gallery.value.list.push(child.firstElementChild.getAttribute('data-index'));
        gallery.value.index = [].indexOf.call(gallery.value.list, url);
    } else {
        gallery.value.list.push(url);
        gallery.value.index = 0;
    }
    console.log('postGalleryButton', gallery.value.list)
    imageSwitch(gallery.value.list[gallery.value.index]);
}


// export default readonly({
//     showBool, gallery, isTouchDevice, viewerImage, image, figure
// });

export default {
    setup() {
        onMounted(() => {
            this.postsParam.api.like = document.getElementById('posts').getAttribute('data-likeapi');
            this.postsParam.api.comment = document.getElementById('posts').getAttribute('data-commentapi');
            this.postsParam.api.delete = document.getElementById('posts').getAttribute('data-deleteapi');
            this.postsParam.api.commentDelete = document.getElementById('posts').getAttribute('data-commentdeleteapi');

            this.commentformData.api.guestAvatar = document.getElementById('#comment-form').getAttribute('data-guestavatarapi');
            this.commentformData.textPlaceholder = document.getElementById('#comment-form').getAttribute('data-textplaceholder');
            this.commentformData.textCommentTip = document.getElementById('#comment-form').getAttribute('data-commenttip');
            this.commentformData.textReplyTip = document.getElementById('#comment-form').getAttribute('data-replytip');

            this.commentformData.metaSummaryBool = document.getElementById('#comment-form').hasAttribute('data-metasummary') ? true : false;
            this.commentformData.avatar = document.getElementById('#comment-form').getAttribute('data-defaultavatar');
            this.commentformData.avatarError = document.getElementById('#comment-form').getAttribute('data-noavatar');
            this.commentformData.name = document.getElementById('#comment-form').getAttribute('data-defaultname');
            this.commentformData.email = document.getElementById('#comment-form').getAttribute('data-defaultemail');
            this.commentformData.code = document.getElementById('#comment-form').getAttribute('data-defaultcode');
            this.commentformData.url = document.getElementById('#comment-form').getAttribute('data-defaulturl');

            window.componentPosts_postFunIndirectClose = postFunIndirectClose;
        })

        // ...
    }
};