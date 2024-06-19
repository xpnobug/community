var qexo_talks = [];
var commentss = [];

getPosts("posts", "https://qexo.reaicc.com")
function getPosts(id, url) {
  // getComment().then(r => {
  //   commentss = r
  //   console.log(commentss);
  // })
  var uri = url + "/pub/talks/";
  // var loadStyle = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">友链加载中...</p></div>';
  // document.getElementById(id).className = "flexcard-flink-list";
  // document.getElementById(id).innerHTML = loadStyle;
  var ajax;
  try {
    // Firefox, Opera 8.0+, Safari
    ajax = new XMLHttpRequest();
  } catch (e) {
    // Internet Explorer
    try {
      ajax = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        alert("糟糕,你的浏览器不能上传文件!");
        return false;
      }
    }
  }
  let list = [];
  ajax.open("get", uri, true);
  ajax.setRequestHeader("Content-Type", "text/plain");

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
      if (ajax.status === 200) {
        var res = JSON.parse(ajax.response);
        if (res["status"]) {
          var friends = res["data"];
          qexo_talks = qexo_talks.concat(friends);
          // 遍历文章列表
          let author = "";
          let title = "REAI";
          let avatar = "https://q1.qlogo.cn/g?b=qq&nk=2877406366&s=640";
          let html = "";

          for (let i = 0; i < friends.length; i++) {
            let pid = friends[i].id;
            let time = plugin.convertTime(timeUtil(friends[i].time));
            let article = document.createElement("article");
            article.id = `post-${i}-mxLp`;
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
            if (friends[i].values != null) {
              // Check if "city" property exists in friends[i].values
              if (friends[i].values.hasOwnProperty("city")) {
                let city = friends[i].values.city;
                citySection.className = "post-attachcontent g-txt-ellipsis g-user-select";
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
            } else {
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
            figure.style = "--background_image: url(" + songImg + ");";

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
            div2.id = "asveh6y4c3lf" + pid;
            div2.dataset.action = "audioplay";
            div2.dataset.index = "asveh6y4c3lf" + pid;
            div2.dataset.attachment1 = songUrl;
            div2.dataset.attachment2 = songImg;
            div2.className = "audio-btn canplay";

            figure.appendChild(div1);
            figure.appendChild(div2);

            let isAudio = div2.dataset.attachment1.includes(".mp3");
            if (isAudio && songName !== "") {
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
            funIco.dataset.index = `${i}-mxLp`;
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
            funBtnComment.dataset.index = `${i}-mxLp`;
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
            aside.className = "post-aside show";
            if (friends[i].like !== 0) {
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
              ulPostCommentList.dataset.hash1 = "5xVU5S";
              ulPostCommentList.className = "comment-itemslist";

              for (let j = 0; j < commentss.length; j++) {
                if (friends[i].id === commentss[j].ua){
                  postComment.className = "fun-area post-comment g-clear-both index show";
                  let commentMark = document.createElement("li");
                  commentMark.id = "comment-mark1-"+commentss[j].ua
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
              ulPostCommentList.dataset.hash1 = `${i}-pinglun`;
              ulPostCommentList.className = "comment-itemslist";

              //评论
              for (let j = 0; j < commentss.length; j++) {
                if (friends[i].id === commentss[j].ua){
                  postComment.className = "fun-area post-comment g-clear-both index show";
                  let commentMark = document.createElement("li");
                  commentMark.id = "comment-mark1-"+commentss[j].ua ;
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
            //主要内容
            postMain.appendChild(section);
            //追加所在城市地址
            postMain.appendChild(citySection);
            postMain.appendChild(footer);
            postMain.appendChild(aside);
            article.appendChild(postAvatar);
            article.appendChild(postMain);

            let postHtml = article.outerHTML;
            html += postHtml;
          }
          document.getElementById(id).innerHTML = html;
        } else {
          console.log(res["data"]["msg"]);
        }
      } else {
        console.log("网络错误");
      }
    }
  };

  // ajax.onreadystatechange = function () {
  //   if (ajax.readyState === 4) { // 检查Ajax请求状态
  //     if (ajax.status === 200) { // 检查HTTP状态码
  //       var res = JSON.parse(ajax.response); // 解析JSON响应
  //       if (res["status"]) { // 检查响应中的状态字段
  //         var friends = res["data"]; // 获取数据数组
  //
  //         // 遍历文章列表
  //         let html = "";
  //         for (let i = 0; i < friends.length; i++) {
  //           let friend = friends[i];
  //           let pid = friend.id;
  //           let time = plugin.convertTime(timeUtil(friend.time));
  //
  //           // 创建文章元素
  //           let article = createArticleElement(friend, pid, time, i);
  //
  //           let postHtml = article.outerHTML;
  //           html += postHtml;
  //         }
  //
  //         // 将生成的HTML插入到指定的DOM元素中
  //         document.getElementById(id).innerHTML = html;
  //       } else {
  //         console.log(res["data"]["msg"]); // 处理响应中的错误信息
  //       }
  //     } else {
  //       console.log("网络错误"); // 处理HTTP请求错误
  //     }
  //   }
  // };

  ajax.send(null);
};

// 创建文章元素的函数
function createArticleElement(friend, pid, time, i) {
  let title = "REAI";
  let avatar = "https://q1.qlogo.cn/g?b=qq&nk=2877406366&s=640";
  let article = document.createElement("article");
  article.id = `post-${i}-mxLp`;
  article.dataset.author = friend.author;
  article.dataset.title = friend.title;
  article.dataset.url = friend.url;
  article.dataset.date = friend.date;
  article.className = "g-clear-both";

  // 创建文章内容
  let postAvatar = createAvatarElement(avatar);
  let postMain = createPostMainElement(friend, pid, time, i,title);

  // 组装文章元素
  article.appendChild(postAvatar);
  article.appendChild(postMain);

  return article;
}

// 创建头像元素的函数
function createAvatarElement(avatarUrl) {
  let postAvatar = document.createElement("div");
  postAvatar.className = "post-avatar g-left";
  let img = document.createElement("img");
  img.src = avatarUrl;
  img.loading = "lazy";
  img.draggable = "false";
  img.alt = "";
  img.className = "g-alias-imgblock entered loading";
  img.dataset.llStatus = "loading";
  postAvatar.appendChild(img);
  return postAvatar;
}

// 创建文章主体元素的函数
function createPostMainElement(friend, pid, time, i,title) {
  let postMain = document.createElement("div");
  postMain.className = "post-main g-right";

  // 创建文章头部
  let header = createPostHeaderElement(title);

  // 创建文章内容
  let section = createPostContentElement(friend.content, friend.values, pid);

  // 创建文章底部
  let footer = createPostFooterElement(time, i, pid);

  // 创建侧边栏
  let aside = createPostAsideElement(friend.like, pid, i);

  // 将各个部分添加到文章主体
  postMain.appendChild(header);
  postMain.appendChild(section);
  postMain.appendChild(footer);
  postMain.appendChild(aside);

  return postMain;
}

// 创建文章头部元素的函数
function createPostHeaderElement(title) {
  let header = document.createElement("header");
  header.className = "post-header g-clear-both";
  let postTitle = document.createElement("div");
  postTitle.className = "post-title g-left g-txt-ellipsis g-user-select";
  postTitle.textContent = title;
  header.appendChild(postTitle);
  return header;
}

// 创建文章内容元素的函数
function createPostContentElement(content, values, pid) {
  let section = document.createElement("section");
  section.className = "post-content g-inline-justify g-user-select";
  let p = document.createElement("p");
  p.textContent = content;

  // 如果有图片，创建图片展示部分
  let images = extractImageUrls(content);
  if (images.length > 0) {
    let gallery = createImageGallery(images);
    p.textContent = content.replace(/<img.*?>/g, '');
    section.innerHTML = p.textContent;
    section.appendChild(gallery);
  } else {
    section.innerHTML = content;
  }

  // 如果有音乐，创建音乐播放部分
  if (values && values.songName) {
    let figure = createAudioElement(values, pid);
    section.appendChild(figure);
  }

  return section;
}

// 提取文章内容中的图片URL
function extractImageUrls(content) {
  let images = [];
  let regex = /<img.*?src="(.*?)"/g;
  let match;
  while (match = regex.exec(content)) {
    images.push(match[1]);
  }
  return images;
}

// 创建图片展示部分的函数
function createImageGallery(images) {
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
  return gallery;
}

// 创建音乐播放部分的函数
function createAudioElement(values, pid) {
  let figure = document.createElement("figure");
  let songName = values.songName;
  let singer = values.singer;
  let songUrl = values.songUrl;
  let songImg = values.songImg;

  // 处理音乐URL
  if (!songUrl || !songUrl.includes("https://")) {
    songUrl = "https://music.163.com/song/media/outer/url?id=" + values.songUrl + ".mp3";
  }

  figure.className = "post-content-audio";
  figure.style = "--background_image: url(" + songImg + ");";

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
  div2.id = "asveh6y4c3lf" + pid;
  div2.dataset.action = "audioplay";
  div2.dataset.index = "asveh6y4c3lf" + pid;
  div2.dataset.attachment1 = songUrl;
  div2.dataset.attachment2 = songImg;
  div2.className = "audio-btn canplay";

  figure.appendChild(div1);
  figure.appendChild(div2);

  return figure;
}

// 创建文章底部元素的函数
function createPostFooterElement(time, i, pid) {
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
  funIco.dataset.index = `${i}-mxLp`;
  funIco.className = "fun-ico g-txt-hide";
  funIco.textContent = "互动";
  let funBox = document.createElement("div");
  funBox.className = "fun-box";
  funBox.id = "dz" + pid;
  let funBtnLike = document.createElement("div");
  funBtnLike.dataset.action = "like";
  funBtnLike.dataset.index = pid;
  funBtnLike.dataset.liketext = "赞";
  funBtnLike.dataset.likedtext = "取消";
  funBtnLike.className = "fun-btn like allow";
  funBtnLike.textContent = "赞";
  let funBtnComment = document.createElement("div");
  funBtnComment.dataset.action = "comment";
  funBtnComment.dataset.index = `${i}-mxLp`;
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
  return footer;
}

// 创建侧边栏元素的函数
function createPostAsideElement(likeCount, pid, i) {
  let aside = document.createElement("aside");
  aside.id = "likes" + pid;

  if (likeCount !== 0) {
    aside.className = "post-aside show";
    let postLike = createPostLikeElement(likeCount, pid, i);
    let postComment = createPostCommentElement(pid, i);
    aside.appendChild(postLike);
    aside.appendChild(postComment);
  } else {
    aside.className = "post-aside";
    let postLike = createPostLikeElement(0, pid, i);
    let postComment = createPostCommentElement(pid, i);
    aside.appendChild(postLike);
    aside.appendChild(postComment);
  }

  return aside;
}

// 创建喜欢部分的函数
function createPostLikeElement(likeCount, pid, i) {
  let postLike = document.createElement("div");
  postLike.id = `post-${pid}-mxLp-like`;
  postLike.className = "fun-area post-like g-clear-both";

  let ulLikeUsersList = document.createElement("ul");
  ulLikeUsersList.className = "like-userslist g-right-flex";

  let li = document.createElement("li");
  li.dataset.separator = ",";
  li.className = "like-name more";
  li.textContent = `${likeCount}位喜欢`;

  ulLikeUsersList.appendChild(li);
  postLike.appendChild(ulLikeUsersList);

  return postLike;
}

// 创建评论部分的函数
function createPostCommentElement(pid, i) {
  let postComment = document.createElement("div");
  postComment.id = `post-${i}-mxLp-comment`;
  postComment.className = "fun-area post-comment g-clear-both index";

  let ulPostCommentList = document.createElement("ul");
  ulPostCommentList.id = `post-${i}-mxLp-comment-list`;
  ulPostCommentList.dataset.hash1 = "ziMNoe";
  ulPostCommentList.className = "comment-itemslist";

  // 添加评论

  postComment.appendChild(ulPostCommentList);

  return postComment;
}


/**
 * 时间戳转换
 * @param time
 * @returns {string}
 */
function timeUtil(time) {
  // 此处时间戳以毫秒为单位
  let date = new Date(parseInt(time) * 1000);
  let Year = date.getFullYear();
  let Moth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
  let Hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
  let Minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  let Sechond = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Year + '-' + Moth + '-' + Day + '   ' + Hour + ':' + Minute + ':' + Sechond;
}

/**
 * @Memo 时间工具类
 *
 * @Author songyf
 * @Date Aug 22,2019
 *
 * @Readme 调用方式：eg: $("#id").html(plugin.convertTime("2019-08-23 15:00:00"));
 $("#id").html(plugin.convertTime(new Date()));
 $("#id").html(plugin.convertTime(new Date("2019-08-21")));
 ......
 */
;(function (win, undefined) {
  "use strict"
  var _win;
  var plugin = {
    /**
     * 功能一：转换某个时间距离当前时间的间隔 【刚刚、1分钟前、半个小时前...】
     * @param e
     * @param t
     * @returns
     */
    convertTime: function (e, t) {
      var i = this,
          o = [[], []],
          a = (new Date).getTime() - new Date(e).getTime();
      return a > 6912e5 ? (a = new Date(e), o[0][0] = i.digit(a.getFullYear(), 4), o[0][1] = i.digit(a.getMonth() + 1), o[0][2] = i.digit(a.getDate()), t || (o[1][0] = i.digit(a.getHours()), o[1][1] = i.digit(a.getMinutes()), o[1][2] = i.digit(a.getSeconds())), o[0].join("-") + " " + o[1].join(":")) : a >= 864e5 ? (a / 1e3 / 60 / 60 / 24 | 0) + "天前" : a >= 36e5 ? (a / 1e3 / 60 / 60 | 0) + "小时前" : a >= 12e4 ? (a / 1e3 / 60 | 0) + "分钟前" : a < 0 ? "未来" : "刚刚"
    },
    digit: function (e, t) {
      var i = "";
      e = String(e),
          t = t || 2;
      for (var o = e.length; o < t; o++) i += "0";
      return e < Math.pow(10, t) ? i + (0 | e) : e
    },
  }
  //将插件对象暴露给全局对象
  _win = (function () {
    return this || (0, eval)('this');
  }());
  !('plugin' in _win) && (_win.plugin = plugin);
}());

var divs = document.querySelectorAll('time');
var dates;
[].forEach.call(divs, function (div) {
  // do whatever
  dates = div.dateTime;
  // console.log(dates);

});
var a = $(".time");
for (let i = 0; i < divs.length; i++) {
  $(a[i]).html(plugin.convertTime(a[i].dateTime));
  // console.log(a[i]);
  // console.log(dates[i]);
}
let upLikes = document.querySelectorAll('.up_like');
upLikes.forEach((upLike) => {
  upLike.addEventListener('click', function () {
    $(this).addClass('done');
    var pid = $(this).data("id");
    var like_action = $(this).data('action'),
        rateHolder = $(this).children('span');
    iconHolder = $(this).children('i');
    $(iconHolder).removeAttr('class');
    $(iconHolder).toggleClass('ri-heart-2-fill');
    // $(rateHolder).html(data);
    var uri = url + "/pub/like_talk/"
    var ajax;
    try {
      ajax = new XMLHttpRequest();
    } catch (e) {
      try {
        ajax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          alert("糟糕,你的浏览器不能上传文件!");
          return false;
        }
      }
    }
    ajax.open("post", uri, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          var res = JSON.parse(ajax.response);
          if (res["status"]) {
            for (var i = 0; i < qexo_talks.length; i++) {
              $('.up_like ' + pid).remove();
              if (qexo_talks[i]["id"] === pid) {
                if (res["action"]) {
                  qexo_talks[i]["like"]++;
                  qexo_talks[i]["liked"] = true;
                  break;
                } else {
                  qexo_talks[i]["like"]--;
                  qexo_talks[i]["liked"] = false;
                  break;
                }
              }
            }
            cocoMessage.success(res["msg"]);
          } else {
            cocoMessage.fail(res["msg"]);
          }
        } else {
          console.log("点赞失败! 网络错误");
        }
      }
    };
    ajax.send("id=" + pid);
  });
});

const getComment = async () => {
  try {
    var formData = new FormData();
    formData.append("site_name", "blog.reaicc.com");
    formData.append("page_key", "/friends/");

    const response = await fetch('https://artalk.reaicc.com/api/get', {
      method: "POST",
      headers: {
        "Origin": "https://blog.reaicc.com"
      },
      dataType: 'json',
      contentType: 'application/json',
      body: formData
    });

    const data = await response.json();
    return data.data.comments

  } catch (error) {
    console.error(error);
  }
}