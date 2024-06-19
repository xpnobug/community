document.ready(function() {

    const componentMisc = new Vue({
        el: '#misc',
        data: {
            miscShowBool: false,
            appearanceParam: {
                elements: {
                    root: $('html')
                }
            },
            likeitParam: {
                linkApi: $('#likeit').getAttribute('data-api'),
                cookieLimit: $('#likeit').getAttribute('data-cookielimit'),
                cookieSuffix: siteParams.userUid,
                ajaxDelay: Number(siteParams.ajaxDelay) / 2,
                ajaxLock: false
            },
            likeitWaitBool: false,
            likeitLikedBool: false,
            linkitCounter: 0
        },
        methods: {
            handleScroll: function() {
                let windowHeight = document.documentElement.clientHeight;
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.miscShowBool = scrollTop > windowHeight / 2;
            },
            appearanceToggleButton: function() {
                let darkStatus = this.appearanceParam.elements.root.classList.contains('darkmode');
                if (darkStatus) {
                    this.appearanceParam.elements.root.classList.remove('darkmode');
                } else {
                    this.appearanceParam.elements.root.classList.add('darkmode');
                }
            },
            likeitAjaxRequest: function() {
                if (!this.likeitLikedBool && !this.likeitParam.ajaxLock) {
                    this.likeitParam.ajaxLock = true;
                    this.likeitWaitBool = true;
                    setTimeout(() => {
                        axios.get(this.likeitParam.linkApi).then(res => {
                            log('likes total: ' + res.data.likes);
                            this.linkitCounter = res.data.likes;
                            this.likeitWaitBool = false;
                            this.likeitLikedBool = true;
                            this.likeitParam.ajaxLock = false;
                            cookieSet('likeit_' + this.likeitParam.cookieSuffix, 'liked', this.likeitParam.cookieLimit);
                        });
                    }, this.likeitParam.ajaxDelay);
                }
            },
            likeitDittoButton: function() {
                this.likeitAjaxRequest();
            },
            toTopButton: function() {
                if (!window.requestAnimationFrame) window.requestAnimationFrame = function(fun) {
                    return setTimeout(fun, 1000 / 60);
                };
                if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
                let timer;
                let easingStart = 0;
                let easingBegin = 0;
                let easingEnd = document.documentElement.scrollTop || document.body.scrollTop;
                let easingDuring = 50;
                let easingCalc = (s, b, e, d) => {
                    if (s == 0) return b;
                    if (s == d) return b + e;
                    if ((s /= d / 2) < 1) return e / 2 * Math.pow(2, 10 * (s - 1)) + b;
                    return e / 2 * (-Math.pow(2, -10 * --s) + 2) + b;
                };
                let smoothUp = () => {
                    let stepMove = easingEnd - easingCalc(easingStart, easingBegin, easingEnd, easingDuring);
                    easingStart++;
                    if (stepMove > 0) {
                        document.body.scrollTop = stepMove;
                        document.documentElement.scrollTop = stepMove;
                        timer = window.requestAnimationFrame(smoothUp);
                    } else {
                        window.cancelAnimationFrame(timer);
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                    }
                };
                timer = window.requestAnimationFrame(smoothUp);
            }
        },
        mounted: function() {
            window.addEventListener('scroll', this.handleScroll);
        }
    });

    const componentOther = new Vue({
        el: '#other',
        data: {
            otherParam: {
                width: $('#other').offsetWidth,
                height: $('#other').offsetHeight,
                top: $('#other').offsetTop,
                left: $('#other').offsetLeft,
                zIndex: {
                    mouseout: $('#other').style.zIndex,
                    mouseover: 1
                },
                windowWidth: document.documentElement.clientWidth,
                containerMaxWidth: Number($('#other').getAttribute('data-containermaxwidth')),
                loadingShowBool: true
            },
            errorlogParam: {
                exist: $('#errorlog') ? true : false,
                deleteApi: $('#errorlog') ? $('#errorlog').getAttribute('data-deleteapi') : '',
                ajaxLock: false,
                waitBool: false,
                errorBool: false,
                deleteTimer: undefined,
                deletedBool: false
            }
        },
        methods: {
            targetBlank: function(target) {
                link(target, 'blank');
            },
            blockToFront: function(e) {
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                if ((this.otherParam.windowWidth - this.otherParam.containerMaxWidth) / 2 > this.otherParam.left + this.otherParam.width && mouseX > this.otherParam.left && mouseX < this.otherParam.left + this.otherParam.width && mouseY > this.otherParam.top && mouseY < this.otherParam.top + this.otherParam.height) {
                    if (this.$el.style.zIndex != this.otherParam.zIndex.mouseover) this.$el.style.zIndex = this.otherParam.zIndex.mouseover;
                } else {
                    if (this.$el.style.zIndex != this.otherParam.zIndex.mouseout) this.$el.style.zIndex = this.otherParam.zIndex.mouseout;
                }
            },
            errorlogDelete: function() {
                if (!this.errorlogParam.ajaxLock && !this.errorlogParam.deleteTimer) {
                    this.errorlogParam.ajaxLock = true;
                    this.errorlogParam.waitBool = true;
                    axios.get(this.errorlogParam.deleteApi).then(res => {
                        if (res.data[0] == 'delete') {
                            this.errorlogParam.deletedBool = true;
                        } else if (res.data[0] == 'error') {
                            this.errorlogParam.errorBool = true;
                            this.errorlogParam.deleteTimer = setTimeout(() => {
                                /* timer reset start */
                                clearTimeout(this.errorlogParam.deleteTimer);
                                this.errorlogParam.deleteTimer = undefined;
                                /* timer reset end */
                                this.errorlogParam.errorBool = false;
                            }, 1000);
                        }
                        this.errorlogParam.waitBool = false;
                        this.errorlogParam.ajaxLock = false;
                    });
                }
            }
        },
        mounted: function() {
            window.addEventListener('mousemove', e => {
                this.blockToFront(e);
            });
            window.addEventListener('resize', () => {
                this.otherParam.windowWidth = document.documentElement.clientWidth;
                this.otherParam.left = this.$el.offsetLeft;
                this.otherParam.top = this.$el.offsetTop;
            });
            window.addEventListener('load', () => {
                this.otherParam.loadingShowBool = false;
            });
        }
    });

});