document.ready(function() {

    const componentBarDialogHeader = new Vue({
        el: '#bar-dialog-header',
        data: {
            dialogParam: {
                elements: {
                    root: $('html'),
                    bar: $('#bar'),
                    wrapper: $('#bar-dialog-wrapper'),
                    dialog: $('#bar-dialog')
                }
            },
            barDialogFullScreenBool: $('#bar-dialog').classList.contains('fullscreen'),
            editorAntiDialogCloseBool: siteParams.editorAntiDialogClose
        },
        methods: {
            targetSelf: function(target) {
                link(target, 'self');
            },
            targetBlank: function(target) {
                link(target, 'blank');
            },
            barCurrentStatusReset: function() {
                for (let child_1 of this.dialogParam.elements.bar.children) {
                    if (child_1.tagName.toLowerCase() == 'ul') {
                        for (let child_2 of child_1.children) {
                            child_2.classList.remove('current');
                        }
                    }
                }
            },
            barDialogFullScreen: function(bool) {
                if (bool) {
                    this.dialogParam.elements.root.classList.add('fullscreen');
                    this.dialogParam.elements.dialog.classList.add('fullscreen');
                    this.barDialogFullScreenBool = true;
                } else {
                    this.dialogParam.elements.root.classList.remove('fullscreen');
                    this.dialogParam.elements.dialog.classList.remove('fullscreen');
                    this.barDialogFullScreenBool = false;
                }
            },
            barDialogFullScreenButton: function() {
                this.barDialogFullScreen(!this.dialogParam.elements.dialog.classList.contains('fullscreen'));
            },
            barDialogCloseButton: function() {
                this.barCurrentStatusReset();
                this.dialogParam.elements.wrapper.classList.remove('show');
                this.dialogParam.elements.wrapper.setAttribute('data-current', '');
                this.dialogParam.elements.root.classList.remove('normaldialog', 'smalldialog');
                this.barDialogFullScreen(false);
            },
            barDialogCloseButtonIndirect: function() {
                if (this.dialogParam.elements.wrapper.getAttribute('data-current') != 'editor' || !this.editorAntiDialogCloseBool) this.barDialogCloseButton();
            }
        },
        mounted: function() {
            window.componentBarDialogHeader_barDialogCloseButtonIndirect = this.barDialogCloseButtonIndirect;
        }
    });

    if ($('#bar-item-login')) {
        const componentBarItemLogin = new Vue({
            el: '#bar-item-login',
            data: {
                passShowBool: false
            }
        });
    }

    if ($('#bar-item-profile')) {
        const componentBarItemProfile = new Vue({
            el: '#bar-item-profile',
            data: {
                api: {
                    avatarRefresh: $('#bar-item-profile').getAttribute('data-avatarrefreshapi'),
                    userProfile: $('#bar-item-profile').getAttribute('data-userprofileapi')
                },
                ajaxLock: {
                    avatarRefresh: false,
                    userProfile: false
                },
                profileData: {
                    avatar: $('#bar-item-profile').getAttribute('data-defaultavatar'),
                    avatarWaitBool: false,
                    avatarRefreshErrorBool: false,
                    email: $('#bar-item-profile').getAttribute('data-defaultemail'),
                    emailEditAllowBool: false,
                    emailErrorBool: false,
                    name: $('#bar-item-profile').getAttribute('data-defaultname'),
                    nameErrorBool: false,
                    gender: $('#bar-item-profile').getAttribute('data-defaultgender'),
                    birthday: $('#bar-item-profile').getAttribute('data-defaultbirthday'),
                    url: $('#bar-item-profile').getAttribute('data-defaulturl'),
                    urlErrorBool: false,
                    formSubmittingBool: false,
                    tipShowBool: false
                }
            },
            methods: {
                avatarRefreshButton: function() {
                    if (!this.ajaxLock.avatarRefresh) {
                        this.ajaxLock.avatarRefresh = true;
                        this.profileData.avatarWaitBool = true;
                        axios.get(this.api.avatarRefresh.tplRender({
                            email: this.profileData.email
                        })).then(res => {
                            if (res.data[0] == 'avatar') {
                                this.profileData.avatar = res.data[1];
                            } else if (res.data[0] == 'error') {
                                this.profileData.avatarRefreshErrorBool = true;
                            }
                            this.profileData.avatarWaitBool = false;
                            this.ajaxLock.avatarRefresh = false;
                        });
                    }
                },
                formSubmitButton: function() {
                    if (!this.ajaxLock.userProfile) {
                        this.ajaxLock.userProfile = true;
                        this.profileData.formSubmittingBool = true;
                        let data = new FormData();
                        data.append('email', this.profileData.email);
                        data.append('nickname', this.profileData.name);
                        data.append('gender', this.profileData.gender);
                        data.append('birthday', this.profileData.birthday);
                        data.append('url', this.profileData.url);
                        axios.post(this.api.userProfile, data, {
                            headers: {
                                'Content-Type': 'application/x-www-urlencoded'
                            }
                        }).then(res => {
                            if (res.data[0] == 'update') {
                                let profile = res.data[1];
                                this.profileData.email = profile['email'];
                                this.profileData.avatar = profile['avatar'];
                                this.profileData.name = profile['name'];
                                this.profileData.gender = profile['gender'];
                                this.profileData.birthday = profile['birthday'];
                                this.profileData.url = profile['url'];
                            } else if (res.data[0] == 'error') {
                                let error = res.data[1];
                                switch (error) {
                                    case 'url':
                                        this.profileData.urlErrorBool = true;
                                        break;
                                    case 'name':
                                        this.profileData.nameErrorBool = true;
                                        break;
                                    case 'email':
                                        this.profileData.emailErrorBool = true;
                                        break;
                                    default:
                                        log('profileform error: ' + error);
                                }
                            }
                            this.profileData.formSubmittingBool = false;
                            this.ajaxLock.userProfile = false;
                            if (res.data[0] == 'update') this.profileData.tipShowBool = true;
                        });
                    }
                }
            }
        });
    }

    if ($('#bar-item-contacts')) {
        const componentBarItemContacts = new Vue({
            el: '#bar-item-contacts',
            methods: {
                contactsCategoryUnfold: function(dom) {
                    if (dom.classList.contains('link-category-btn')) dom.parentNode.parentNode.classList.toggle('open');
                }
            }
        });
    }

    if ($('#bar-item-editor')) {
        const componentBarItemEditor = new Vue({
            el: '#bar-item-editor',
            data: {
                api: {
                    post: $('#bar-item-editor').getAttribute('data-postapi'),
                    location: $('#bar-item-editor').getAttribute('data-locationapi'),
                    mediaUpload: $('#bar-item-editor').getAttribute('data-mediauploadapi'),
                    mediaLibrary: $('#bar-item-editor').getAttribute('data-medialibraryapi')
                },
                template: {
                    separator: $('#bar-item-editor').getAttribute('data-separator'),
                    selected: {
                        image: htmlSpecialChars($('#bar-item-editor').getAttribute('data-selecteditemtemplateimage'), false),
                        video: htmlSpecialChars($('#bar-item-editor').getAttribute('data-selecteditemtemplatevideo'), false),
                        audio: htmlSpecialChars($('#bar-item-editor').getAttribute('data-selecteditemtemplateaudio'), false)
                    },
                    library: {
                        image: htmlSpecialChars($('#bar-item-editor').getAttribute('data-libraryitemtemplateimage'), false),
                        video: htmlSpecialChars($('#bar-item-editor').getAttribute('data-libraryitemtemplatevideo'), false),
                        audio: htmlSpecialChars($('#bar-item-editor').getAttribute('data-libraryitemtemplateaudio'), false)
                    },
                    postContent: {
                        image: {
                            item: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplateimage'), false),
                            wrapper: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplateimagewrapper'), false)
                        },
                        video: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplatevideo'), false),
                        audio: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplateaudio'), false),
                        externallink: {
                            normal: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplateexternallink'), false),
                            image: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplateexternallinkimage'), false),
                            wrapper: htmlSpecialChars($('#bar-item-editor').getAttribute('data-postcontenthtmltemplateexternallinkwrapper'), false)
                        }
                    }
                },
                ajaxLock: {
                    post: false,
                    location: false,
                    mediaUpload: false,
                    mediaLibrary: false
                },
                postformData: {
                    successTip: htmlSpecialChars($('#bar-item-editor').getAttribute('data-successtip'), false),
                    failTip: $('#bar-item-editor').getAttribute('data-failtip'),
                    formSubmittingBool: false,
                    tipShowBool: false,
                    tip: '',
                    title: '',
                    content: '',
                    password: '',
                    privateBool: false,
                    stickBool: false,
                    foldBool: false,
                    commentBool: $('#bar-item-editor').getAttribute('data-commentstatusdefault') == 'open' ? true : false,
                    commentBoolDefault: $('#bar-item-editor').getAttribute('data-commentstatusdefault') == 'open' ? true : false,
                    random: randomString()
                },
                locationData: {
                    userIP: siteParams.userIP,
                    openBool: false,
                    initBool: true,
                    searchResultErrorBool: false,
                    searchResultErrorText: '',
                    searchResult: [],
                    currentCity: '',
                    searchKey: '',
                    searchKeyPrevious: '',
                    searchWaitBool: false,
                    text: ''
                },
                mediaData: {
                    typeSwitchTip: $('#bar-item-editor').getAttribute('data-mediatypeswitchtip'),
                    uploadAccept: {
                        image: $('#bar-item-editor').getAttribute('data-mediauploadacceptimage'),
                        video: $('#bar-item-editor').getAttribute('data-mediauploadacceptvideo'),
                        audio: $('#bar-item-editor').getAttribute('data-mediauploadacceptaudio')
                    },
                    URLAccept: {
                        image: $('#bar-item-editor').getAttribute('data-mediaurlacceptimage'),
                        video: $('#bar-item-editor').getAttribute('data-mediaurlacceptvideo'),
                        audio: $('#bar-item-editor').getAttribute('data-mediaurlacceptaudio')
                    },
                    uploadSizeMax: Number($('#bar-item-editor').getAttribute('data-mediauploadsizemax')),
                    uploadSizeTotal: 0,
                    uploadEventBool: false,
                    uploadWaitBool: false,
                    uploadProgress: 0,
                    libraryQueryNums: Number($('#bar-item-editor').getAttribute('data-mediaquerynums')),
                    libraryCurrentPage: 1,
                    libraryResultCount: 0,
                    manualTitle: '',
                    manualTitleErrorBool: false,
                    manualArtist: '',
                    manualArtistErrorBool: false,
                    manualFile: '',
                    manualFileErrorBool: false,
                    manualAspectratio: '',
                    manualScreenMode: $('#bar-item-editor').getAttribute('data-mediascreenmodedefault'),
                    manualScreenModeDefault: $('#bar-item-editor').getAttribute('data-mediascreenmodedefault'),
                    manualCover: '',
                    manualCoverErrorBool: false,
                    manualCoverDefault: {
                        audio: $('#bar-item-editor').getAttribute('data-mediacoverdefaultaudio')
                    },
                    optionReeditBool: false,
                    selectedLength: 0,
                    type: $('#bar-item-editor').getAttribute('data-mediatypedefault')
                },
                advertisementData: {
                    isCurrent: false,
                    clientImage: '',
                    clientImageInputTip: $('#bar-item-editor').getAttribute('data-advertisementclientimageinputtip'),
                    clientImageInputProtocol: 'http' + (siteParams.SSL ? 's' : '') + '://',
                    clientImageRequiredTip: false,
                    clientName: '',
                    clientSelected: '',
                    linkTitle: '',
                    linkURL: '',
                    linkOption: {
                        imageBool: false
                    }
                },
                stickerMoreBool: false
            },
            watch: {
                'postformData.content': function(val) {
                    if (this.postformData.tipShowBool && val != '') this.postformData.tipShowBool = false;
                },
                'advertisementData.clientSelected': function(val) {
                    val.replace(/\[(.*)\]\((.*)\)/gi, (arg0, arg1, arg2) => {
                        this.advertisementData.clientName = arg1.trim().length > 0 ? arg1 : '';
                        this.advertisementData.clientImage = arg2.trim().length > 0 ? arg2 : '';
                    });
                }
            },
            computed: {
                mediaSelectedLimit: function() {
                    switch (this.mediaData.type) {
                        case 'image':
                            return 9;
                        default:
                            return 1;
                    }
                },
                mediaUploadAcceptImage: function() {
                    return this.mediaData.uploadAccept.image;
                },
                mediaUploadAccept: function() {
                    switch (this.mediaData.type) {
                        case 'image':
                            return this.mediaUploadAcceptImage;
                        case 'video':
                            return this.mediaData.uploadAccept.video;
                        case 'audio':
                            return this.mediaData.uploadAccept.audio;
                    }
                },
                mediaURLAcceptImage: function() {
                    return this.mediaData.URLAccept.image.removeSpaces().replace(/\,/g, '|').replace(/\./g, '');
                },
                mediaURLAccept: function() {
                    switch (this.mediaData.type) {
                        case 'image':
                            return this.mediaURLAcceptImage;
                        case 'video':
                            return this.mediaData.URLAccept.video.removeSpaces().replace(/\,/g, '|').replace(/\./g, '');
                        case 'audio':
                            return this.mediaData.URLAccept.audio.removeSpaces().replace(/\,/g, '|').replace(/\./g, '');
                    }
                },
                mediaURLAcceptTipImage: function() {
                    let imageTip = this.mediaData.URLAccept.image.removeSpaces().replace(/\,/g, ' ').replace(/\./g, '').toUpperCase();
                    if (imageTip.includes('JPG') && imageTip.includes('JPEG')) imageTip = imageTip.replace(/JPG/g, '');
                    return imageTip.removeSpaces(' ');
                },
                mediaURLAcceptTip: function() {
                    switch (this.mediaData.type) {
                        case 'image':
                            return this.mediaURLAcceptTipImage;
                        case 'video':
                            return this.mediaData.URLAccept.video.removeSpaces().replace(/\,/g, ' ').replace(/\./g, '').toUpperCase();
                        case 'audio':
                            return this.mediaData.URLAccept.audio.removeSpaces().replace(/\,/g, ' ').replace(/\./g, '').toUpperCase();
                    }
                },
                mediaInfo: function() {
                    return function(dom) {
                        let info = [];
                        switch (this.mediaData.type) {
                            case 'image':
                                info['square'] = dom.getAttribute('data-square');
                                info['thumbnail'] = dom.getAttribute('data-thumbnail');
                                info['src'] = dom.getAttribute('data-src');
                                info['aspectratio'] = dom.getAttribute('data-aspectratio');
                                break;
                            case 'video':
                                info['src'] = dom.getAttribute('data-src');
                                info['aspectratio'] = dom.getAttribute('data-aspectratio');
                                info['screen'] = dom.getAttribute('data-screen');
                                info['cover'] = dom.getAttribute('data-cover');
                                break;
                            case 'audio':
                                info['title'] = dom.getAttribute('data-title');
                                info['artist'] = dom.getAttribute('data-artist');
                                info['src'] = dom.getAttribute('data-src');
                                info['cover'] = dom.getAttribute('data-cover');
                                break;
                        }
                        return info;
                    }
                },
                mediaImageThumbCompute: function() {
                    switch (this.mediaData.selectedLength) {
                        case 1:
                            return 'thumbnail';
                        default:
                            return 'square';
                    }
                },
                mediaGridClass: function() {
                    switch (this.mediaData.selectedLength) {
                        case 1:
                            return 'grid-1';
                        case 2:
                        case 4:
                            return 'grid-2';
                        default:
                            return 'grid-3';
                    }
                },
                mediaSubmitHTML: function() {
                    /* prevent caching start */
                    log('prevent caching code: ' + this.postformData.random);
                    /* prevent caching end */
                    let html = '';
                    for (let child of this.$refs.postformMediaList.children) {
                        if (child.classList.contains('selected')) {
                            let media = this.mediaInfo(child);
                            switch (this.mediaData.type) {
                                case 'image':
                                    html += this.template.postContent.image.item.tplRender({
                                        thumb_compute: media[this.mediaImageThumbCompute],
                                        src: media['src'],
                                        aspectratio: media['aspectratio'],
                                        aspectratio_class: media['aspectratio'] != 'auto' ? ' aspectratio' : ''
                                    });
                                    break;
                                case 'video':
                                    html += this.template.postContent.video.tplRender({
                                        src: media['src'],
                                        aspectratio: media['aspectratio'],
                                        aspectratio_class: media['aspectratio'] != 'auto' ? ' aspectratio' : '',
                                        screen: media['screen'],
                                        cover: media['cover']
                                    });
                                    break;
                                case 'audio':
                                    let random = randomString();
                                    html += this.template.postContent.audio.tplRender({
                                        title: media['title'],
                                        artist: media['artist'],
                                        src: media['src'],
                                        cover: media['cover'],
                                        id: random
                                    });
                                    break;
                            }
                        }
                    }
                    if (html != '') {
                        switch (this.mediaData.type) {
                            case 'image':
                                html = this.template.postContent.image.wrapper.tplRender({
                                    grid_class: this.mediaGridClass,
                                    items_html: html
                                });
                                break;
                        }
                    }
                    return html;
                },
                advertisementSubmitHTML: function() {
                    return this.template.postContent.externallink.wrapper.tplRender({
                        externallink_html: (this.advertisementData.linkOption.imageBool ? this.template.postContent.externallink.image : this.template.postContent.externallink.normal).tplRender({
                            title: this.advertisementData.linkTitle,
                            url: this.advertisementData.linkURL
                        })
                    });
                }
            },
            methods: {
                shortcodeInputButton: function(dom) {
                    if (!this.postformData.formSubmittingBool && dom.hasAttribute('data-insertcode')) {
                        let insertCode = dom.getAttribute('data-insertcode');
                        let closedCode = dom.getAttribute('data-closedcode');
                        if (dom.hasAttribute('data-prompttip')) {
                            let promptValue = prompt(dom.getAttribute('data-prompttip'));
                            if (insertCode != '') insertCode = insertCode.tplRender({
                                prompt_value: promptValue
                            });
                            if (closedCode != '') closedCode = closedCode.tplRender({
                                prompt_value: promptValue
                            });
                        }
                        textareaInsert(this.$refs.postformTextarea, insertCode, closedCode);
                        this.postformData.content = this.$refs.postformTextarea.value;
                    }
                },
                stickerInputButton: function(dom) {
                    if (!this.postformData.formSubmittingBool && dom.hasAttribute('data-shortcode')) {
                        textareaInsert(this.$refs.postformTextarea, dom.getAttribute('data-shortcode'));
                        this.postformData.content = this.$refs.postformTextarea.value;
                    }
                },
                locationSearch: function() {
                    if (!this.ajaxLock.location) {
                        this.locationData.searchKeyPrevious = this.locationData.searchKey;
                        this.ajaxLock.location = true;
                        this.locationData.searchWaitBool = true;
                        let data = new FormData();
                        data.append('ip', this.locationData.userIP);
                        data.append('city', this.locationData.currentCity);
                        data.append('keywords', this.locationData.searchKeyPrevious);
                        axios.post(this.api.location, data, {
                            headers: {
                                'Content-Type': 'application/x-www-urlencoded'
                            }
                        }).then(res => {
                            switch (res.data[0]) {
                                case 'ip':
                                    this.locationData.currentCity = res.data[1]['city'];
                                    if (this.locationData.searchResultErrorBool) this.locationData.searchResultErrorBool = false;
                                    this.locationData.searchResult = [];
                                    if (this.locationData.initBool) this.locationData.initBool = false;
                                    break;
                                case 'search':
                                    let array = [];
                                    for (let item of res.data[1]) array.push({
                                        venue: item['venue'],
                                        address: item['address'],
                                        city: item['city']
                                    });
                                    if (this.locationData.searchResultErrorBool) this.locationData.searchResultErrorBool = false;
                                    this.locationData.searchResult = array;
                                    break;
                                case 'error':
                                    this.locationData.searchResultErrorText = res.data[1];
                                    if (!this.locationData.searchResultErrorBool) this.locationData.searchResultErrorBool = true;
                                    this.locationData.searchResult = [];
                                    break;
                            }
                            this.locationData.searchWaitBool = false;
                            this.ajaxLock.location = false;
                            if (this.locationData.searchKeyPrevious != this.locationData.searchKey) this.locationSearch();
                        });
                    }
                },
                locationReset: function(keys) {
                    for (let key of keys.split(',')) {
                        switch (key.trim()) {
                            case 'search':
                                this.locationData.searchResultErrorBool = false;
                                this.locationData.searchResultErrorText = '';
                                this.locationData.searchResult = [];
                                this.locationData.currentCity = '';
                                this.locationData.searchKey = '';
                                this.locationData.initBool = true;
                                break;
                            case 'text':
                                this.locationData.text = '';
                                break;
                        }
                    }
                },
                locationToggleButton: function(open) {
                    if (open) {
                        if (!this.locationData.openBool) this.locationData.openBool = true;
                        this.locationSearch();
                    } else {
                        if (this.locationData.openBool) this.locationData.openBool = false;
                        this.locationReset('search');
                    }
                },
                locationSelectedInsert: function(item) {
                    let city = item.hasAttribute('data-city') ? item.getAttribute('data-city') : '';
                    let venue = item.hasAttribute('data-venue') ? item.getAttribute('data-venue') : '';
                    venue = venue.trim().length > 0 && venue != city ? venue : '';
                    let separator = city.trim().length > 0 && venue.trim().length > 0 ? this.template.separator : '';
                    let text = city + separator + venue;
                    if (text.trim().length > 0) {
                        this.locationData.text = text;
                        this.locationToggleButton(false);
                    }
                },
                locationActionProcessing: function(dom) {
                    if (dom.hasAttribute('data-action')) {
                        switch (dom.getAttribute('data-action')) {
                            case 'selected':
                                this.locationSelectedInsert(dom);
                                break;
                            case 'cancel':
                                this.locationToggleButton(false);
                                break;
                            case 'remove':
                                this.locationReset('text');
                                this.locationToggleButton(false);
                                break;
                        }
                    }
                },
                mediaSelectedCount: function() {
                    let length = 0;
                    for (let child of this.$refs.postformMediaList.children) {
                        if (child.classList.contains('selected')) length++;
                    }
                    this.mediaData.selectedLength = length;
                },
                mediaSelectedInsert: function(media) {
                    if (this.mediaData.selectedLength < this.mediaSelectedLimit) {
                        switch (this.mediaData.type) {
                            case 'image':
                                this.$refs.postformMediaUpload.insertAdjacentHTML('beforebegin', this.template.selected.image.tplRender({
                                    square: media.hasOwnProperty('square') ? media['square'] : media['src'],
                                    thumbnail: media.hasOwnProperty('thumbnail') ? media['thumbnail'] : media['src'],
                                    src: media['src'],
                                    aspectratio: media['aspectratio'].length > 0 ? media['aspectratio'] : 'auto'
                                }));
                                break;
                            case 'video':
                                this.$refs.postformMediaUpload.insertAdjacentHTML('beforebegin', this.template.selected.video.tplRender({
                                    src: media['src'],
                                    aspectratio: media['aspectratio'].length > 0 ? media['aspectratio'] : 'auto',
                                    screen: media['screen'],
                                    cover: media['cover']
                                }));
                                break;
                            case 'audio':
                                this.$refs.postformMediaUpload.insertAdjacentHTML('beforebegin', this.template.selected.audio.tplRender({
                                    title: media['title'],
                                    artist: media['artist'],
                                    src: media['src'],
                                    cover: media['cover']
                                }));
                                break;
                        }
                        this.mediaSelectedCount();
                    }
                },
                mediaSelectedReedit(media) {
                    if (!this.$refs.postformMediaManual.open) this.$refs.postformMediaManual.open = true;
                    switch (this.mediaData.type) {
                        case 'image':
                            this.mediaData.manualFile = media['src'];
                            this.mediaData.manualAspectratio = media['aspectratio'];
                            break;
                        case 'video':
                            this.mediaData.manualFile = media['src'];
                            this.mediaData.manualAspectratio = media['aspectratio'];
                            this.mediaData.manualScreenMode = media['screen'];
                            this.mediaData.manualCover = media['cover'];
                            break;
                        case 'audio':
                            this.mediaData.manualTitle = media['title'];
                            this.mediaData.manualArtist = media['artist'];
                            this.mediaData.manualFile = media['src'];
                            this.mediaData.manualCover = media['cover'];
                            break;
                    }
                },
                mediaSelectedRemove: function(dom) {
                    dom.remove();
                    this.mediaSelectedCount();
                },
                mediaUploadButton: function() {
                    this.$refs.postformMediaUploadButton.click();
                },
                mediaUploadEvent: function(input) {
                    let files = input.files;
                    if (files.length > 0 && !this.ajaxLock.mediaUpload) {
                        this.mediaData.uploadEventBool = true;
                        this.ajaxLock.mediaUpload = true;
                        let sizes = 0;
                        let data = new FormData();
                        for (let file of files) {
                            sizes += file.size;
                            data.append('files[]', file);
                        }
                        this.mediaData.uploadSizeTotal = sizes;
                        if (this.mediaData.uploadSizeTotal > this.mediaData.uploadSizeMax) {
                            this.ajaxLock.mediaUpload = false;
                            this.mediaData.uploadEventBool = false;
                        } else {
                            this.mediaData.uploadWaitBool = true;
                            data.append('type', this.mediaData.type);
                            axios.post(this.api.mediaUpload, data, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                                onUploadProgress: progressEvent => {
                                    this.mediaData.uploadProgress = ((progressEvent.loaded / progressEvent.total) * 100).toFixed(0);
                                }
                            }).then(res => {
                                if (res.data[0] == 'add') {
                                    for (let media of res.data[1]) this.mediaSelectedInsert(media);
                                } else if (res.data[0] == 'error') {
                                    log('media upload error');
                                }
                                /* initialization start */
                                this.mediaData.uploadProgress = 0;
                                this.mediaData.uploadSizeTotal = 0;
                                this.mediaData.uploadWaitBool = false;
                                this.ajaxLock.mediaUpload = false;
                                this.mediaData.uploadEventBool = false;
                                /* initialization end */
                            });
                        }
                    }
                },
                mediaLibraryLoad: function(direction = '') {
                    if (!this.ajaxLock.mediaLibrary) {
                        this.ajaxLock.mediaLibrary = true;
                        if (this.$refs.postformMediaLibraryList.classList.contains('empty')) this.$refs.postformMediaLibraryList.classList.remove('empty');
                        this.$refs.postformMediaLibraryList.classList.add('wait');
                        switch (direction) {
                            case 'prev':
                                this.mediaData.libraryCurrentPage--;
                                break;
                            case 'next':
                                this.mediaData.libraryCurrentPage++;
                                break;
                        }
                        let data = new FormData();
                        data.append('type', this.mediaData.type);
                        data.append('page', this.mediaData.libraryCurrentPage);
                        data.append('nums', this.mediaData.libraryQueryNums);
                        axios.post(this.api.mediaLibrary, data, {
                            headers: {
                                'Content-Type': 'application/x-www-urlencoded'
                            }
                        }).then(res => {
                            let output = '';
                            switch (res.data[0]) {
                                case 'image':
                                    for (let media of res.data[1]) output += this.template.library.image.tplRender({
                                        square: media['square'],
                                        thumbnail: media['thumbnail'],
                                        src: media['src'],
                                        aspectratio: media['aspectratio']
                                    });
                                    break;
                                case 'video':
                                    for (let media of res.data[1]) output += this.template.library.video.tplRender({
                                        title: media['title'],
                                        src: media['src'],
                                        aspectratio: media['aspectratio'],
                                        screen: media['screen'],
                                        cover: media['cover']
                                    });
                                    break;
                                case 'audio':
                                    for (let media of res.data[1]) output += this.template.library.audio.tplRender({
                                        title: media['title'],
                                        artist: media['artist'],
                                        src: media['src'],
                                        cover: media['cover']
                                    });
                                    break;
                            }
                            this.$refs.postformMediaLibraryList.innerHTML = output;
                            this.$refs.postformMediaLibraryList.classList.remove('wait');
                            if (res.data[1].length == 0) this.$refs.postformMediaLibraryList.classList.add('empty');
                            this.mediaData.libraryResultCount = res.data[1].length;
                            this.ajaxLock.mediaLibrary = false;
                        });
                    }
                },
                mediaManualSubmitButton: function() {
                    let file = [];
                    let bool = true;
                    if (this.mediaData.type == 'audio') {
                        if (this.mediaData.manualTitle.length > 0) {
                            file['title'] = this.mediaData.manualTitle;
                        } else {
                            this.mediaData.manualTitleErrorBool = true;
                            bool = false;
                        }
                        if (this.mediaData.manualArtist.length > 0) {
                            file['artist'] = this.mediaData.manualArtist;
                        } else {
                            this.mediaData.manualArtistErrorBool = true;
                            bool = false;
                        }
                    }
                    if (new RegExp('.(' + this.mediaURLAccept + ')$', 'i').test(this.mediaData.manualFile.trim())) {
                        file['src'] = this.mediaData.manualFile;
                    } else {
                        this.mediaData.manualFileErrorBool = true;
                        bool = false;
                    }
                    if (this.mediaData.type == 'image' || this.mediaData.type == 'video') file['aspectratio'] = this.mediaData.manualAspectratio;
                    if (this.mediaData.type == 'video') file['screen'] = this.mediaData.manualScreenMode;
                    if (this.mediaData.type == 'video' || this.mediaData.type == 'audio') {
                        if (this.mediaData.manualCover.length == 0 || new RegExp('.(' + this.mediaURLAcceptImage + ')$', 'i').test(this.mediaData.manualCover)) {
                            file['cover'] = this.mediaData.type == 'audio' && this.mediaData.manualCover.length == 0 ? this.mediaData.manualCoverDefault.audio : this.mediaData.manualCover;
                        } else {
                            this.mediaData.manualCoverErrorBool = true;
                            bool = false;
                        }
                    }
                    if (bool) {
                        /* initialization start */
                        if (this.mediaData.type == 'audio') {
                            this.mediaData.manualTitle = '';
                            this.mediaData.manualArtist = '';
                        }
                        this.mediaData.manualFile = '';
                        if (this.mediaData.type == 'image' || this.mediaData.type == 'video') this.mediaData.manualAspectratio = '';
                        if (this.mediaData.type == 'video') this.mediaData.manualScreenMode = this.mediaData.manualScreenModeDefault;
                        if (this.mediaData.type == 'video' || this.mediaData.type == 'audio') this.mediaData.manualCover = '';
                        /* initialization end */
                        this.mediaSelectedInsert(file);
                    }
                },
                mediaReset: function(keys) {
                    for (let key of keys.split(',')) {
                        switch (key.trim()) {
                            case 'list':
                                if (!this.ajaxLock.mediaUpload) {
                                    let children = this.$refs.postformMediaList.children;
                                    for (let i = this.mediaData.selectedLength - 1; i >= 0; i--) {
                                        if (children[i].classList.contains('selected')) this.mediaSelectedRemove(children[i]);
                                    }
                                    this.mediaData.uploadSizeTotal = 0;
                                }
                                break;
                            case 'library':
                                if (!this.ajaxLock.mediaLibrary) {
                                    if (this.$refs.postformMediaLibrary.open) this.$refs.postformMediaLibrary.open = false;
                                    if (this.$refs.postformMediaLibraryList.classList.contains('empty')) this.$refs.postformMediaLibraryList.classList.remove('empty');
                                    this.$refs.postformMediaLibraryList.innerHTML = '';
                                    this.mediaData.libraryCurrentPage = 1;
                                    this.mediaData.libraryResultCount = 0;
                                }
                                break;
                            case 'manual':
                                if (this.$refs.postformMediaManual.open) this.$refs.postformMediaManual.open = false;
                                this.mediaData.manualTitle = '';
                                this.mediaData.manualTitleErrorBool = false;
                                this.mediaData.manualArtist = '';
                                this.mediaData.manualArtistErrorBool = false;
                                this.mediaData.manualFile = '';
                                this.mediaData.manualFileErrorBool = false;
                                this.mediaData.manualAspectratio = '';
                                this.mediaData.manualScreenMode = this.mediaData.manualScreenModeDefault;
                                this.mediaData.manualCover = '';
                                this.mediaData.manualCoverErrorBool = false;
                                break;
                        }
                    }
                },
                mediaActionProcessing: function(dom) {
                    if (dom.hasAttribute('data-action')) {
                        switch (dom.getAttribute('data-action')) {
                            case 'upload':
                                this.mediaUploadButton();
                                break;
                            case 'insert':
                                this.mediaSelectedInsert(this.mediaInfo(dom));
                                break;
                            case 'remove':
                                if (this.mediaData.optionReeditBool) this.mediaSelectedReedit(this.mediaInfo(dom.parentNode));
                                this.mediaSelectedRemove(dom.parentNode);
                                break;
                            case 'switch':
                                if (dom.getAttribute('data-index') != this.mediaData.type && (this.mediaData.selectedLength == 0 || confirm(this.mediaData.typeSwitchTip))) {
                                    this.mediaReset('list, library, manual');
                                    this.mediaData.type = dom.getAttribute('data-index');
                                }
                                break;
                        }
                    }
                },
                advertisementClientImageButton: function() {
                    let url = prompt(this.advertisementData.clientImageInputTip, this.advertisementData.clientImageInputProtocol);
                    url = String(url).trim();
                    if (new RegExp(/^(https?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\+\.\/~!@#%&_=|;:,?]*[\w\-\+\/~@#%&_=|])?$/, 'i').test(url)) {
                        if (this.advertisementData.clientImageRequiredTip) this.advertisementData.clientImageRequiredTip = false;
                        this.advertisementData.clientImage = url;
                    }
                },
                advertisementReset: function() {
                    this.advertisementData.clientImage = '';
                    this.advertisementData.clientName = '';
                    this.advertisementData.linkTitle = '';
                    this.advertisementData.linkURL = '';
                },
                postformSubmitButton: function() {
                    if (!this.ajaxLock.post) {
                        this.ajaxLock.post = true;
                        this.postformData.formSubmittingBool = true;
                        let data = new FormData();
                        data.append('avatar', this.advertisementData.isCurrent ? this.advertisementData.clientImage : '');
                        data.append('title', this.advertisementData.isCurrent ? this.advertisementData.clientName : this.postformData.title);
                        data.append('content', this.postformData.content);
                        data.append('password', this.postformData.password);
                        data.append('media', this.mediaSubmitHTML);
                        data.append('externallink', this.advertisementData.isCurrent ? this.advertisementSubmitHTML : '');
                        data.append('location', this.locationData.text);
                        data.append('private', this.advertisementData.isCurrent ? 0 : (this.postformData.privateBool ? 1 : 0));
                        data.append('comment', this.postformData.commentBool ? 1 : 0);
                        data.append('stick', this.postformData.stickBool ? 1 : 0);
                        data.append('fold', this.advertisementData.isCurrent ? 0 : (this.postformData.foldBool ? 1 : 0));
                        axios.post(this.api.post, data, {
                            headers: {
                                'Content-Type': 'application/x-www-urlencoded'
                            }
                        }).then(res => {
                            if (res.data[0] == 'add') {
                                this.postformData.tip = this.postformData.successTip.tplRender({
                                    id: res.data[1]['id'],
                                    url: res.data[1]['url']
                                });
                                /* initialization start */
                                this.postformData.title = '';
                                this.postformData.content = '';
                                this.postformData.password = '';
                                this.postformData.privateBool = false;
                                this.postformData.commentBool = this.postformData.commentBoolDefault;
                                this.postformData.stickBool = false;
                                this.postformData.foldBool = false;
                                this.mediaReset('list');
                                if (this.advertisementData.isCurrent) this.advertisementReset();
                                this.locationReset('text');
                                /* initialization end */
                            } else if (res.data[0] == 'error') {
                                this.postformData.tip = this.postformData.failTip;
                            }
                            /* reset prevent caching code start */
                            this.postformData.random = randomString();
                            /* reset prevent caching code end */
                            this.postformData.formSubmittingBool = false;
                            this.ajaxLock.post = false;
                            this.postformData.tipShowBool = true;
                        });
                    }
                },
                __postform_submit: function() {
                    this.$refs.postformSubmit.click();
                }
            },
            mounted: function() {
                this.$refs.postformMediaLibrary.addEventListener('toggle', () => {
                    if (this.$refs.postformMediaLibrary.open) {
                        if (isElementEmpty(this.$refs.postformMediaLibraryList)) this.mediaLibraryLoad();
                    } else {
                        this.mediaReset('library');
                    }
                });
            }
        });
    }

});