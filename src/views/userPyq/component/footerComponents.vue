<template>
  <footer id="navigation">
    <div id="autoload" :class="{wait: autoWaitBool}" class="g-inline-center" data-api="https://qexo.reaicc.com/pub/talks/?page={index}" data-indexdefault="1"
         data-lasttxt="没有更多了" data-normaltxt="加载更多" data-totalpages="21"
         data-waittxt="正在加载‥" v-text="autoStatusText.output"
         @click.stop="autoHandleClick"></div>
  </footer>
</template>

<script>
import {friendCircleList} from "@/api/article.ts";

const siteParams = {
  userIP: "111.205.14.9",
  userUid: "MTExMjA1MTQ5",
  userLoggedIn: false,
  bgmAutoPlay: true,
  bgmAutoNext: true,
  ajaxDelay: 500,
  editorAntiDialogClose: true,
  SSL: true
};
export default {
  name: "footerComponents",
  data() {
    return {
      page: {
        pageSize: 10,
        currentPage: 1,
        count: 10,
        maxPage: 1, // 注意：你可能需要根据 count 动态计算 maxPage
        minPage: 1,
      },
      autoParam: {
        exist: false,
        index: 0,
        indexDef: 0,
        indexMax: 0,
        navApi: '',
        isLast: undefined,
        ajaxLock: false,
        ajaxDelay: siteParams.ajaxDelay,
        scrollTopBefore: 0,
        elements: {
          posts: null
        }
      },
      autoStatusText: {
        normaltxt: '',
        waittxt: '',
        lasttxt: '',
        output: ''
      },
      autoWaitBool: false
    }
  },
  methods: {
    targetSelf: function(target) {
      link(target, 'self');
    },
    autoStatus: function(s) {
      switch (s) {
        case 'last':
          this.autoParam.isLast = true;
          this.autoWaitBool = false;
          this.autoStatusText.output = this.autoStatusText.lasttxt;
          // cocoMessage.info(this.autoStatusText.lasttxt);
          break;
        case 'wait':
          this.autoWaitBool = true;
          this.autoStatusText.output = this.autoStatusText.waittxt;
          break;
        case 'normal':
          this.autoParam.isLast = false;
          this.autoWaitBool = false;
          this.autoStatusText.output = this.autoStatusText.normaltxt;
          break;
      }
    },
    autoHandleClick: function() {
      if (!this.autoParam.isLast) this.autoAjaxRequest();
    },
    autoHandleScroll: function() {
      if (!this.autoParam.isLast) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let windowHeight = document.documentElement.clientHeight;
        if (scrollTop > this.autoParam.scrollTopBefore && scrollTop + windowHeight > this.$el.offsetTop) this.autoAjaxRequest();
        this.autoParam.scrollTopBefore = scrollTop;
      }
    },
    autoAjaxRequest: function() {
      if (!this.autoParam.ajaxLock) {
        this.autoParam.ajaxLock = true;
        this.autoStatus('wait');
        let html = "";
        setTimeout(() => {
          this.autoParam.index++;
          let url = this.autoParam.navApi.tplRender({
            index: this.autoParam.index
          });
          let data = new FormData();
          data.append('nav', 'auto');
          friendCircleList(this.page,"null").then(res => {
            let friends = res.data.data;
            qexo_talks = qexo_talks.concat(friends);
            let author = "";
            let title = "REAI";
            let avatar = "https://q1.qlogo.cn/g?b=qq&nk=2877406366&s=640";
            let html = "";
            let count = document.getElementsByTagName('article').length;
            for (let i = 0; i < friends.length; i++) {
              let pid = friends[i].id;
              let time = plugin.convertTime(timeUtil(friends[i].time));
              let article = document.createElement("article");
              article.id = `post-${i+count}-mxLp`;
              article.dataset.author = friends[i].author;
              article.dataset.title = friends[i].title;
              article.dataset.url = friends[i].url;
              article.dataset.date = friends[i].date;
              article.className = "g-clear-both";
              let postAvatar = document.createElement("div");
              postAvatar.className = "post-avatar g-left";
              let img = document.createElement("img");
              img.src = avatar;
              img.loading = "lazy";
              img.draggable = "false";
              img.alt = "";
              img.className = "g-alias-imgblock entered loading";
              img.dataset.llStatus = "loading";
              postAvatar.appendChild(img);
              let postMain = document.createElement("div");
              postMain.className = "post-main g-right";
              let header = document.createElement("header");
              header.className = "post-header g-clear-both";
              let postTitle = document.createElement("div");
              postTitle.className = "post-title g-left g-txt-ellipsis g-user-select";
              postTitle.textContent = title;
              header.appendChild(postTitle);
              let section = document.createElement("section");
              section.className = "post-content g-inline-justify g-user-select";
              let p = document.createElement("p");
              p.textContent = friends[i].content;
              //ip地址
              let citySection = document.createElement("section");
              if (friends[i].values != null){
                // Check if "city" property exists in friends[i].values
                if (friends[i].values.hasOwnProperty("city")) {
                  let city = friends[i].values.city;
                  citySection.className =  "post-attachcontent g-txt-ellipsis g-user-select";
                  let span = document.createElement("span");
                  span.className = "attachcontent-text";
                  span.textContent = city;
                  citySection.innerHTML = span.textContent;
                }
              }
              let images = [];
              let content = friends[i].content;
              let regex = /<img.*?src="(.*?)"/g;
              let match;
              // let text = content.substring(0, content.indexOf("<img"));
              // p.innerHTML = text;
              while (match = regex.exec(content)) {
                images.push(match[1]);
              }

              if (images.length > 0) {
                let gallery = document.createElement('div');
                if (images.length === 1) {
                  gallery.className = 'post-content-gallery grid-1';
                } else if (images.length === 4) {
                  gallery.className = 'post-content-gallery grid-2';
                } else if (images.length <= 9) {
                  gallery.className = 'post-content-gallery grid-3';
                }
                images.forEach((image) => {
                  let figure = document.createElement('figure');
                  figure.className = 'gallery-thumbnail';
                  figure.style = '--aspectratio: auto;';
                  let img = document.createElement('img');
                  img.className = 'thumbnail-image g-alias-imgblock';
                  img.src = image;
                  img.loading = 'lazy';
                  img.draggable = 'false';
                  img.alt = '';
                  img.dataset.action = 'viewimage';
                  img.dataset.index = image;
                  figure.appendChild(img);
                  gallery.appendChild(figure);
                });
                //显示文字
                p.textContent = content.replace(/<img.*?>/g, '');
                section.innerHTML = p.textContent;
                section.appendChild(gallery);
              }else {
                section.innerHTML = friends[i].content;
              }

              //音乐
              let figure = document.createElement("figure");
              let songName = friends[i].values.songName;
              let singer = friends[i].values.singer;
              let url = friends[i].values.songUrl;
              let songImg = friends[i].values.songImg;
              let songUrl;
              if (url !== undefined && url.includes("https://")) {
                songUrl = friends[i].values.songUrl;
              } else if (url !== undefined){
                songUrl = "https://music.163.com/song/media/outer/url?id=" + friends[i].values.songUrl + ".mp3";
              }
              figure.className = "post-content-audio";
              figure.style = "--background_image: url("+ songImg +");";

              let div1 = document.createElement("div");
              div1.className = "audio-meta";

              let span1 = document.createElement("span");
              span1.className = "meta-image";

              let audioImg = document.createElement("img");
              audioImg.src = songImg;
              audioImg.loading = "lazy";
              audioImg.draggable = "false";
              audioImg.alt = "";
              audioImg.className = "cover g-alias-imgblock";
              span1.appendChild(audioImg);

              let span2 = document.createElement("span");
              span2.className = "meta-text";

              let span3 = document.createElement("span");
              span3.className = "title g-txt-ellipsis";
              span3.textContent = songName;

              let span4 = document.createElement("span");
              span4.className = "artist g-txt-ellipsis";
              span4.textContent = singer;

              span2.appendChild(span3);
              span2.appendChild(span4);

              div1.appendChild(span1);
              div1.appendChild(span2);

              let div2 = document.createElement("div");
              div2.id = "asveh6y4c3lf"+pid;
              div2.dataset.action = "audioplay";
              div2.dataset.index = "asveh6y4c3lf"+pid;
              div2.dataset.attachment1 = songUrl;
              div2.dataset.attachment2 = songImg;
              div2.className = "audio-btn canplay";

              figure.appendChild(div1);
              figure.appendChild(div2);
              let isAudio = div2.dataset.attachment1.includes(".mp3");
              if (isAudio) {
                section.appendChild(figure);
              }

              let footer = document.createElement("footer");
              footer.className = "post-footer g-clear-both";
              let postInfo = document.createElement("div");
              postInfo.className = "post-info g-left g-txt-ellipsis";
              let postDate = document.createElement("span");
              postDate.className = "post-date";
              postDate.textContent = time;
              postInfo.appendChild(postDate);
              let postFun = document.createElement("div");
              postFun.className = "post-fun g-right";
              let funIco = document.createElement("div");
              funIco.dataset.action = "fun";
              funIco.dataset.index = `${i+count}-mxLp`;
              funIco.className = "fun-ico g-txt-hide";
              funIco.textContent = "互动";
              let funBox = document.createElement("div");
              funBox.className = "fun-box";
              funBox.id = "dz" + pid
              let funBtnLike = document.createElement("div");
              funBtnLike.dataset.action = "like";
              funBtnLike.dataset.index = pid;
              funBtnLike.dataset.liketext = "赞";
              funBtnLike.dataset.likedtext = "取消";
              funBtnLike.className = "fun-btn like allow";
              funBtnLike.textContent = "赞";
              let funBtnComment = document.createElement("div");
              funBtnComment.dataset.action = "comment";
              funBtnComment.dataset.index = `${i+count}-mxLp`;
              funBtnComment.dataset.people = "0";
              funBtnComment.dataset.count = "0";
              funBtnComment.className = "fun-btn comment allow";
              funBtnComment.textContent = "评论";
              funBox.appendChild(funBtnLike);
              funBox.appendChild(funBtnComment);
              postFun.appendChild(funIco);
              postFun.appendChild(funBox);
              footer.appendChild(postInfo);
              footer.appendChild(postFun);
              let aside = document.createElement("aside");
              aside.id = "likes" + pid;
              aside.className = "post-aside";

              if (friends[i].like !== 0) {
                aside.className = "post-aside show";
                let postLike = document.createElement("div");
                postLike.id = `post-${pid}-mxLp-like`;
                postLike.className = "fun-area post-like g-clear-both show";
                let ulLikeUsersList = document.createElement("ul");
                ulLikeUsersList.className = "like-userslist g-right-flex";
                let li = document.createElement("li");
                li.dataset.separator = ",";
                li.className = "like-name more";
                li.textContent = `${friends[i].like}位喜欢`;
                ulLikeUsersList.appendChild(li);
                postLike.appendChild(ulLikeUsersList);
                let postComment = document.createElement("div");
                postComment.id = `post-${i}-mxLp-comment`;
                postComment.className = "fun-area post-comment g-clear-both index";
                let ulPostCommentList = document.createElement("ul");
                ulPostCommentList.id = `post-${i}-mxLp-comment-list`;
                ulPostCommentList.dataset.hash1 = `${i}-pinglun`;
                ulPostCommentList.className = "comment-itemslist";

                for (let j = 0; j < commentss.length; j++) {
                  if (friends[i].id === commentss[j].ua){
                    postComment.className = "fun-area post-comment g-clear-both index show";
                    let commentMark = document.createElement("li");
                    commentMark.id = "comment-mark1-"+commentss[j].ua;
                    commentMark.dataset.hash1 = commentss[j].ua +"AtDaBd";
                    let commentDiv = document.createElement("div");
                    commentDiv.id = "comment-139";
                    commentDiv.className = "comment-item g-inline-justify";
                    let commentName = document.createElement("span");
                    commentName.className = "comment-name g-user-select";
                    commentName.textContent =  commentss[j].nick;
                    let commentText = document.createElement("span");
                    commentText.dataset.action = "commentreply";
                    commentText.dataset.index = "139";
                    commentText.dataset.author = commentss[j].nick;
                    commentText.dataset.post = "182";
                    commentText.dataset.mark1 = commentss[j].ua;
                    commentText.dataset.hash2 = commentss[j].ua + "pinglun";
                    commentText.dataset.separator = ":";
                    commentText.className = "comment-text allow g-user-select";
                    commentText.textContent = commentss[j].content;
                    commentDiv.appendChild(commentName);
                    commentDiv.appendChild(commentText);
                    commentMark.appendChild(commentDiv);
                    ulPostCommentList.appendChild(commentMark);
                  }
                }
                postComment.appendChild(ulPostCommentList);
                aside.appendChild(postLike);
                aside.appendChild(postComment);
              } else {
                let postLike = document.createElement("div");
                postLike.id = `post-${pid}-mxLp-like`;
                postLike.className = "fun-area post-like g-clear-both";
                let ulLikeUsersList = document.createElement("ul");
                ulLikeUsersList.className = "like-userslist g-right-flex";
                postLike.appendChild(ulLikeUsersList);
                let postComment = document.createElement("div");
                postComment.id = `post-${i}-mxLp-comment`;
                postComment.className = "fun-area post-comment g-clear-both index";
                let ulPostCommentList = document.createElement("ul");
                ulPostCommentList.id = `post-${i}-mxLp-comment-list`;
                ulPostCommentList.dataset.hash1 = "ziMNoe";
                ulPostCommentList.className = "comment-itemslist";

                for (let j = 0; j < commentss.length; j++) {
                  if (friends[i].id === commentss[j].ua){
                    postComment.className = "fun-area post-comment g-clear-both index show";
                    let commentMark = document.createElement("li");
                    commentMark.id = "comment-mark1-"+commentss[j].ua;
                    commentMark.dataset.hash1 = commentss[j].ua +"AtDaBd";
                    let commentDiv = document.createElement("div");
                    commentDiv.id = "comment-139";
                    commentDiv.className = "comment-item g-inline-justify";
                    let commentName = document.createElement("span");
                    commentName.className = "comment-name g-user-select";
                    commentName.textContent =  commentss[j].nick;
                    let commentText = document.createElement("span");
                    commentText.dataset.action = "commentreply";
                    commentText.dataset.index = "139";
                    commentText.dataset.author = commentss[j].nick;
                    commentText.dataset.post = "182";
                    commentText.dataset.mark1 = commentss[j].ua;
                    commentText.dataset.hash2 = commentss[j].ua + "pinglun";
                    commentText.dataset.separator = ":";
                    commentText.className = "comment-text allow g-user-select";
                    commentText.textContent = commentss[j].content;
                    commentDiv.appendChild(commentName);
                    commentDiv.appendChild(commentText);
                    commentMark.appendChild(commentDiv);
                    ulPostCommentList.appendChild(commentMark);
                  }
                }
                postComment.appendChild(ulPostCommentList);
                aside.appendChild(postLike);
                aside.appendChild(postComment);
              }
              postMain.appendChild(header);
              postMain.appendChild(section);
              postMain.appendChild(citySection);
              postMain.appendChild(footer);
              postMain.appendChild(aside);
              article.appendChild(postAvatar);
              article.appendChild(postMain);
              let postHtml = article.outerHTML;
              html += postHtml;
            }
            this.autoParam.elements.posts.insertAdjacentHTML('beforeend', html);
            this.autoStatus(this.autoParam.index < friends.length ? 'normal' : 'last');
            this.autoParam.ajaxLock = false;
          }).catch(err => {
            log('nav error: ' + err.message);
            this.autoParam.ajaxLock = false;
          });
        }, this.autoParam.ajaxDelay);
      }
    }
  },
  mounted: function() {
    this.autoParam.elements.posts = document.getElementById('posts');

    this.autoParam.exist = document.getElementById('autoload') ? true : false;
    this.autoParam.indexDef = document.getElementById('autoload') ? Number(document.getElementById('autoload').getAttribute('data-indexdefault')) : 0;
    this.autoParam.indexMax = document.getElementById('autoload') ? Number(document.getElementById('autoload').getAttribute('data-totalpages')) : 0;
    this.autoParam.navApi = document.getElementById('autoload') ? document.getElementById('autoload').getAttribute('data-api') : '';

    this.autoStatusText.normaltxt = document.getElementById('autoload') ? document.getElementById('autoload').getAttribute('data-normaltxt') : '';
    this.autoStatusText.waittxt = document.getElementById('autoload') ? document.getElementById('autoload').getAttribute('data-waittxt') : '';
    this.autoStatusText.lasttxt = document.getElementById('autoload') ? document.getElementById('autoload').getAttribute('data-lasttxt') : '';

    if (this.autoParam.exist) {
      if (this.autoParam.indexDef < this.autoParam.indexMax) {
        this.autoParam.index = this.autoParam.indexDef;
        window.addEventListener('scroll', this.autoHandleScroll);
        this.autoStatus('normal');
      } else {
        this.autoStatus('last');
      }
    }
  }
}
</script>

<style scoped>

</style>