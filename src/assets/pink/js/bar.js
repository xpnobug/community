document.ready(function() {
    const componentBar = new Vue({
        el: '#bar',
        data: {
            barParam: {
                backgroundToggleHeight: $('#banner').offsetHeight + $('#banner').offsetTop - $('#bar').offsetHeight
            },
            barBackgroundBool: false,
            hubParam: {
                isLogin: siteParams.userLoggedIn,
                cookieSuffix: siteParams.userUid,
                showCounter: 0
            },
            hubNewBool: $('#bar-item-hub') && Number($('#bar-item-hub').getAttribute('data-unread')) > 0 ? true : false,
            dialogParam: {
                elements: {
                    root: $('html'),
                    wrapper: $('#bar-dialog-wrapper'),
                    dialog: $('#bar-dialog'),
                    dialogFooter: $('#bar-dialog-footer')
                }
            },
            bgmParam: {
                exist: $('#bgm') ? true : false,
                documentTitle: document.title,
                beginAutoPlayBool: siteParams.bgmAutoPlay,
                finishAutoNextBool: siteParams.bgmAutoNext,
                finishAutoNextDelay: siteParams.ajaxDelay,
                songDuration: 0,
                songTimer: undefined,
                temp: {
                    bgmChangeAutoplayTimer: undefined
                },
                audio: $('#bgm') ? new Audio() : undefined,
                songUrl: '',
                songName: '',
                songApi: $('#bgm') ? $('#bgm').getAttribute('data-api') : '',
                prepareChar: $('#bgm') ? $('#bgm').getAttribute('data-preparechar') : '',
                playChar: $('#bgm') ? $('#bgm').getAttribute('data-playchar') : '',
                pauseChar: $('#bgm') ? $('#bgm').getAttribute('data-pausechar') : '',
                startBool: false,
                playBool: false,
                canplayBool: false,
                progressValue: 0,
                ajaxLock: false
            }
        },
        methods: {
            handleScroll: function() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.barBackgroundBool = scrollTop > this.barParam.backgroundToggleHeight;
            },
            barItemSeparatePreProcessing: function(name, object, button) {
                switch (name) {
                    case 'hub':
                        this.hubParam.showCounter++;
                        if (this.hubParam.showCounter == 1) {
                            if (button.classList.contains('new')) button.classList.remove('new');
                            if (this.hubParam.isLogin) {
                                axios.get(object.getAttribute('data-commentlastreadapi').tplRender({
                                    id: object.getAttribute('data-lastid')
                                }));
                            } else {
                                cookieSet('last_read_comment_id_' + this.hubParam.cookieSuffix, object.getAttribute('data-lastid'));
                            }
                        }
                        if (this.hubParam.showCounter == 2 && $('#bar-item-' + name + '-mark1')) {
                            let itemMark1 = $('#bar-item-' + name + '-mark1');
                            for (let child of itemMark1.children) {
                                if (child.classList.contains('unread')) {
                                    child.classList.remove('unread');
                                    child.classList.add('read');
                                }
                            }
                            if ($('#bar-item-' + name + '-mark2')) {
                                let itemMark2 = $('#bar-item-' + name + '-mark2');
                                if (itemMark2 != itemMark1.firstElementChild) itemMark1.insertBefore(itemMark2, itemMark1.firstElementChild);
                            }
                        }
                        break;
                }
            },
            barDialogShow: function(dom) {
                if (dom.hasAttribute('data-index')) {
                    let itemName = dom.getAttribute('data-index');
                    let itemDialogSize = dom.getAttribute('data-dialogsize');
                    if (!dom.classList.contains('current')) {
                        for (let child_1 of this.$el.children) {
                            if (child_1.tagName.toLowerCase() == 'ul') {
                                for (let child_2 of child_1.children) {
                                    child_2.classList.remove('current');
                                }
                            }
                        }
                        dom.classList.add('current');
                    }
                    if ($('#bar-item-' + itemName)) {
                        let itemObject = $('#bar-item-' + itemName);
                        this.barItemSeparatePreProcessing(itemName, itemObject, dom);
                        let itemBriefInfo = itemObject.hasAttribute('data-briefinfo') ? itemObject.getAttribute('data-briefinfo') : '';
                        this.dialogParam.elements.dialogFooter.innerHTML = htmlSpecialChars(itemBriefInfo, false);
                    } else {
                        this.dialogParam.elements.dialogFooter.innerHTML = '';
                    }
                    this.dialogParam.elements.dialog.className = itemDialogSize;
                    this.dialogParam.elements.root.classList.add(itemDialogSize);
                    this.dialogParam.elements.wrapper.setAttribute('data-current', itemName);
                    this.dialogParam.elements.wrapper.classList.add('show');
                }
            },
            bgmFunDocumentTitle: function(s) {
                switch (s) {
                    case 'prepare':
                        document.title = this.bgmParam.prepareChar + ' ' + this.bgmParam.songName;
                        break;
                    case 'play':
                        document.title = this.bgmParam.playChar + ' ' + this.bgmParam.songName;
                        break;
                    case 'pause':
                        document.title = this.bgmParam.pauseChar + ' ' + this.bgmParam.songName;
                        break;
                    case 'end':
                        document.title = this.bgmParam.documentTitle;
                        break;
                }
            },
            bgmFunAutoNext: function() {
                setTimeout(() => {
                    this.bgmAjaxRequest(true, false);
                }, this.bgmParam.finishAutoNextDelay);
            },
            bgmFunReplay: function(title) {
                clearInterval(this.bgmParam.songTimer);
                this.bgmParam.playBool = false;
                this.bgmParam.progressValue = 0;
                this.bgmFunDocumentTitle(title);
            },
            bgmFunProgress: function() {
                if (this.bgmParam.audio.ended == true) {
                    this.bgmFunReplay('end');
                    if (this.bgmParam.finishAutoNextBool) this.bgmFunAutoNext();
                } else {
                    let curTime = this.bgmParam.audio.currentTime;
                    this.bgmParam.progressValue = (curTime / this.bgmParam.songDuration) * 100;
                }
            },
            bgmFunPlay: function() {
                this.bgmParam.playBool = true;
                this.bgmParam.audio.play();
                this.bgmParam.songTimer = setInterval(this.bgmFunProgress, 500);
                this.bgmFunDocumentTitle('play');
            },
            bgmFunPause: function() {
                clearInterval(this.bgmParam.songTimer);
                this.bgmParam.audio.pause();
                this.bgmParam.playBool = false;
                this.bgmFunDocumentTitle('pause');
            },
            bgmFunReady: function(autoplay) {
                this.bgmParam.audio.src = this.bgmParam.songUrl;
                this.bgmParam.audio.load();
                this.bgmParam.audio.addEventListener('loadedmetadata', () => {
                    this.bgmParam.songDuration = this.bgmParam.audio.duration;
                });
                this.bgmParam.audio.addEventListener('canplay', () => {
                    this.bgmParam.canplayBool = true;
                });
                this.bgmParam.audio.addEventListener('error', () => {
                    log('bgm error code: ' + this.bgmParam.audio.error.code);
                });
                if (autoplay) {
                    this.bgmParam.temp.bgmChangeAutoplayTimer = setInterval(() => {
                        if (this.bgmParam.canplayBool) {
                            clearInterval(this.bgmParam.temp.bgmChangeAutoplayTimer);
                            this.bgmFunPlay();
                        }
                    }, 200);
                }
            },
            bgmAjaxRequest: function(autoplay, init) {
                if (!this.bgmParam.ajaxLock) {
                    this.bgmParam.ajaxLock = true;
                    axios.get(this.bgmParam.songApi).then(res => {
                        log('bgm song: ' + res.data.song_name + ' ' + res.data.song_url);
                        this.bgmParam.songUrl = res.data.song_url;
                        this.bgmParam.songName = res.data.song_name;
                        if (!init) {
                            this.bgmFunReplay('prepare');
                            this.bgmParam.canplayBool = false;
                        }
                        this.bgmFunReady(autoplay);
                        this.bgmParam.ajaxLock = false;
                    });
                }
            },
            bgmPlayButton: function() {
                if (this.bgmParam.startBool && this.bgmParam.canplayBool) {
                    if (!this.bgmParam.playBool) {
                        if (typeof window.componentPlayer_audioButtonIndirectPause === 'function') window.componentPlayer_audioButtonIndirectPause();
                        this.bgmFunPlay();
                    } else {
                        this.bgmFunPause();
                    }
                }
            },
            bgmPlayButtonIndirectPause: function() {
                if (this.bgmParam.startBool && this.bgmParam.canplayBool && this.bgmParam.playBool) this.bgmFunPause();
            },
            bgmChangeButton: function() {
                if (this.bgmParam.startBool) this.bgmAjaxRequest(this.bgmParam.playBool, false);
            }
        },
        mounted: function() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('load', () => {
                if (this.bgmParam.exist) {
                    this.bgmParam.startBool = true;
                    this.bgmAjaxRequest(this.bgmParam.beginAutoPlayBool, true);
                }
            });
            window.componentBar_bgmPlayButtonIndirectPause = this.bgmPlayButtonIndirectPause;
        }
    });
});