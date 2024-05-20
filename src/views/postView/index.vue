<script lang="ts" setup>
import {selectOne} from "@/api/article";
import {useRoute} from 'vue-router';
import {getCurrentInstance, ref} from "vue";
import {MdCatalog, MdPreview} from 'md-editor-v3';
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';

const id = 'preview-only';
const text = ref('# Hello Editor');
const scrollElement = document.documentElement;

//获取登录人信息
const instance = getCurrentInstance()
const userInfo = ref({});
instance?.proxy?.$Bus.on("userInfo", (param: any) => {
  userInfo.value = param;
})

//获取地址栏中id
const route = useRoute();
const ids = route.params.id;
const postInfo = ref([]);
selectOne(ids).then(res => {
  postInfo.value = res.data.data
  console.log(postInfo.value)
})
</script>


<template>
  <div class="content-grid snipcss-tMNNJ" style="  padding-top: 84px;   transition: transform 0.4s ease-in-out 0s;">
    <div class="post-content post-container" data-v-6b6dbdf2="">
      <div class="breadcrumb" data-v-6b6dbdf2="">
        <div class="breadcrumb-container" data-v-186a823a="" data-v-6b6dbdf2="">
          <div class="ant-breadcrumb" data-v-186a823a=""><span class="" data-v-186a823a=""><span
              class="ant-breadcrumb-link"><a class="link nuxt-link-active" data-v-186a823a=""
                                             href="/">社区</a></span><span
              class="ant-breadcrumb-separator">/</span></span><span class="" data-v-186a823a=""><span
              class="ant-breadcrumb-link"><a class="link" data-v-186a823a="" href="/forum?id=7"> 运营干货 </a></span><span
              class="ant-breadcrumb-separator">/</span></span><span class="" data-v-186a823a=""><span
              class="ant-breadcrumb-link">正文</span><span class="ant-breadcrumb-separator">/</span></span></div>
        </div>
      </div>
      <div class="oprate" data-v-6b6dbdf2="">
        <div class="oprate-container" data-v-6b6dbdf2="" data-v-91ba2966="">
          <div class="oprate-container-thumbs" data-v-91ba2966="">
            <svg class="oprate-container-thumbs-icon" data-v-91ba2966="">
              <use data-v-91ba2966="" xlink:href="#svg-thumbs-up"></use>
            </svg>
            <div class="oprate-container-thumbs-count" data-v-91ba2966="">1</div>
          </div>
          <div class="oprate-container-commons" data-v-91ba2966="">
            <svg class="oprate-container-commons-icon" data-v-91ba2966="">
              <use data-v-91ba2966="" xlink:href="#svg-comment"></use>
            </svg>
            <div class="oprate-container-commons-count" data-v-91ba2966=""> 1</div>
          </div>
          <div class="oprate-container-collections" data-v-91ba2966="">
            <svg class="oprate-container-collections-icon" data-v-91ba2966="">
              <use data-v-91ba2966="" xlink:href="#svg-collection"></use>
            </svg>
            <div class="oprate-container-collections-count" data-v-91ba2966="">1</div>
          </div>
          <div class="oprate-container-share" data-v-91ba2966="">
            <svg class="oprate-container-share-icon" data-v-91ba2966="">
              <use data-v-91ba2966="" xlink:href="#svg-share"></use>
            </svg>
          </div>
        </div>
      </div>
      <a data-v-6b6dbdf2="" href="#comment" style="display: none;"></a>
      <div class="about" data-v-6b6dbdf2="">
        <div class="about-container" data-v-05b26ca4="" data-v-6b6dbdf2="">
          <div class="forum-container about-container-box" data-v-05b26ca4="" data-v-e27424ca="" style="height: 315px;">
            <figure class="forum-container-background user-preview-cover" data-v-62854a42="" data-v-e27424ca=""
                    style="background: url(&quot;https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/5d5771c92ac3d1625714373?imageMogr2/crop/568x140/gravity/center&quot;) center center / cover no-repeat rgb(255, 255, 255);">
              <img alt="图片"
                   data-v-62854a42=""
                   src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/5d5771c92ac3d1625714373?imageMogr2/crop/568x140/gravity/center"
                   style="display: none;"></figure>
            <a class="" data-v-e27424ca="" href="/forum?id=7">
              <div class="xm-header user-avatar forum-container-head user-short-description-avatar" data-v-2fadc57c=""
                   data-v-e27424ca=""
                   style="width: 90px; height: 90px; border: 9px solid rgb(255, 255, 255); cursor: pointer; border-radius: 12px;">
                <div class="xm-avatar" data-v-2fadc57c="" style="padding: 11px;"><img alt="头像"
                                                                                      class="img-full"
                                                                                      data-v-2fadc57c=""
                                                                                      src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/5e058460bc75d1625714318?imageMogr2/crop/196x196/gravity/center"
                                                                                      style="border-radius: 12px;">
                </div>
              </div>
            </a> <a class="" data-v-e27424ca="" href="/forum?id=7">
            <div class="forum-container-title" data-v-e27424ca="" style="cursor: pointer;"><span
                data-v-e27424ca="">运营干货</span></div>
          </a>
            <div class="forum-container-describe" data-v-e27424ca=""> 社群运营经验交流</div>
            <a class="" data-v-e27424ca="" href="/forum?id=7">
              <div class="forum-container-msg user-stats" data-v-e27424ca="">
                <div class="user-stat" data-v-e27424ca="">
                  <p class="user-stat-title" data-v-e27424ca="">506</p>
                  <p class="user-stat-text" data-v-e27424ca="">内容</p>
                </div>
                <div class="user-stat" data-v-e27424ca="">
                  <p class="user-stat-title" data-v-e27424ca="">397</p>
                  <p class="user-stat-text" data-v-e27424ca="">成员</p>
                </div>
                <div class="user-stat" data-v-e27424ca="">
                  <p class="user-stat-title" data-v-e27424ca="">7</p>
                  <p class="user-stat-text" data-v-e27424ca="">精华</p>
                </div>
              </div>
            </a>
            <hr data-v-e27424ca="" style="margin-bottom: 12px;">
            <div class="forum-container-button user-preview-actions" data-v-e27424ca="">
              <p class="button btn" data-v-e27424ca="">
                <svg class="icon button-icon icon-join-group" data-v-e27424ca="">
                  <use data-v-e27424ca="" xlink:href="#svg-join-group"></use>
                </svg>
                <span class="text" data-v-e27424ca=""> &nbsp;加入版块 </span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="postStyle" data-v-6b6dbdf2="">
        <img :src="postInfo.coverImage"
             class="post-bg"
             data-v-6b6dbdf2="" style="height: 450px;">
        <div class="content-container" data-v-6b6dbdf2="">
          <div class="container-head" data-v-6b6dbdf2="">
            <div class="heads" data-v-6b6dbdf2="">
              <div class="text" data-v-6b6dbdf2="">{{ postInfo.publishDate }} · 未知</div>
              <div class="widget-box-settings" data-v-6b6dbdf2="" style="display: flex; flex-flow: row;">
                <div data-v-6b6dbdf2="" style="position: relative;">
                  <div>
                    <div class="post-settings widget-box-post-settings-dropdown-trigger" data-v-6b6dbdf2="">
                      <svg class="post-settings-icon icon-more-dots" data-v-6b6dbdf2="">
                        <use data-v-6b6dbdf2="" xlink:href="#svg-more-dots"></use>
                      </svg>
                    </div>
                  </div>
                  <div
                      style="position: absolute; z-index: 9999; top: 44px; right: -6px; opacity: 0; visibility: hidden; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">
                    <div class="simple-dropdown" data-v-6b6dbdf2="">
                      <p class="simple-dropdown-link" data-v-6b6dbdf2="">收藏</p>
                      <p class="simple-dropdown-link" data-v-6b6dbdf2="">举报</p>
                      <div data-v-6b6dbdf2=""></div>
                      <div data-v-6b6dbdf2=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="title" data-v-6b6dbdf2="">{{ postInfo.title }}</div>
            <div class="user-status" data-v-6b6dbdf2="">
              <div class="xm-header user-avatar" data-v-2fadc57c="" data-v-6b6dbdf2=""
                   style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%; margin-right: 8px;">
                <div class="xm-avatar" data-v-2fadc57c="" style="padding: 6.4px;"><img :src="userInfo.avatar"
                                                                                       alt="头像"
                                                                                       class=""
                                                                                       data-v-2fadc57c=""
                                                                                       style="border-radius: 50%;">
                </div>
                <svg data-v-2fadc57c="" style="width: 44px; height: 44px;" viewBox="0 0 100 100">
                  <defs data-v-2fadc57c="">
                    <linearGradient id="svg79e8c30f-eae2-45fa-a496-08d0df0d3878" data-v-2fadc57c="" x1="0%" x2="100%"
                                    y1="0%" y2="0%">
                      <stop data-v-2fadc57c="" offset="0%"></stop>
                      <stop data-v-2fadc57c="" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" data-v-2fadc57c="" fill-opacity="0"
                        stroke="#e9e9f0" stroke-width="8"></path>
                  <path :style="[{strokeDasharray: userInfo.exp + ',287'}]"
                        d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                        data-v-2fadc57c="" fill-opacity="0" stroke="url(#svg79e8c30f-eae2-45fa-a496-08d0df0d3878)"
                        stroke-width="8"></path>
                </svg>
                <div class="xm-level" data-v-2fadc57c="" style="background: transparent;">
                  <img data-v-2fadc57c=""
                       src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/%E7%BA%A2V1605690514?upload_type/Tencent_COS"
                       style="width: 18px; height: 18px;">
                </div>
              </div>
              <div data-v-6b6dbdf2="" style="display: flex; flex-direction: column; justify-content: center;">
                <p class="user-status-title medium" data-v-6b6dbdf2="" style="width: 100%;">
                  <span class="bold"
                        data-v-6b6dbdf2=""
                        href="profile-timeline.html"
                        style="cursor: pointer; color: rgb(251, 91, 90);"> {{ userInfo.username }} </span>
                </p>
                <p class="user-status-text small" data-v-6b6dbdf2="">售后产品经理</p>
              </div>
              <div class="action-request-list" data-v-6b6dbdf2="">
                <div class="action-request accept" data-v-6b6dbdf2="">
                  <svg class="action-request-icon icon-add-friend" data-v-6b6dbdf2="">
                    <use data-v-6b6dbdf2="" xlink:href="#svg-add-friend"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="container-text w-e-text" data-v-6b6dbdf2="">
              <MdPreview :editorId="id" :modelValue="postInfo.content" :codeFoldable="false"/>
              <MdCatalog :editorId="id" :scrollElement="scrollElement"/>
            </div>
            <div class="tag-list" data-v-6b6dbdf2=""><a class="tag-item secondary" data-v-6b6dbdf2="">运营干货</a></div>
          </div>
        </div>
        <div id="comment" data-v-6b6dbdf2="" style="transform: translateY(-80px);"></div>
        <div class="post-comment-list" data-v-6b6dbdf2="">
          <div class="post-comment-form" data-v-6b6dbdf2="">
            <div class="xm-header user-avatar" data-v-2fadc57c="" data-v-6b6dbdf2=""
                 style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%;">
              <div class="xm-avatar" data-v-2fadc57c="" style=" padding: 6.4px;"><img alt="头像"
                                                                                      class=""
                                                                                      data-v-2fadc57c=""
                                                                                      src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_746181715702761?imageMogr2/crop/128x128/gravity/center"
                                                                                      style="border-radius: 50%;"></div>
              <svg data-v-2fadc57c="" style="width: 44px; height: 44px;" viewBox="0 0 100 100">
                <defs data-v-2fadc57c="">
                  <linearGradient id="svge2877b9c-016c-4fa1-953a-d106adec913b" data-v-2fadc57c="" x1="0%" x2="100%"
                                  y1="0%" y2="0%">
                    <stop data-v-2fadc57c="" offset="0%"></stop>
                    <stop data-v-2fadc57c="" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" data-v-2fadc57c="" fill-opacity="0"
                      stroke="#e9e9f0" stroke-width="8"></path>
                <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" data-v-2fadc57c=""
                      fill-opacity="0" stroke="url(#svge2877b9c-016c-4fa1-953a-d106adec913b)" stroke-width="8"
                      style="stroke-dasharray: 74.62, 287;"></path>
              </svg>
              <div class="xm-level" data-v-2fadc57c=""
                   style="box-sizing: content-box; font-size: 10.8px; width: 18px; height: 18px; border: 1px solid rgb(255, 255, 255);">
                <span data-v-2fadc57c="" style="display: block;">2</span></div>
            </div>
            <form class="form" data-v-6b6dbdf2="" onsubmit="return false">
              <div class="loginComment" data-v-6b6dbdf2="" style="padding: 1px 54px 1px 0px;">
              </div>
              <div data-v-6b6dbdf2="">
                <div class="form-row" data-v-6b6dbdf2="">
                  <div class="form-item" data-v-6b6dbdf2="">
                    <div class="form-input with-button small" data-v-28de1f87="" data-v-6b6dbdf2=""><label
                        data-v-28de1f87="" for="groups-search"> <span data-v-28de1f87="">我的评论</span></label> <textarea
                        data-v-28de1f87="" maxlength="256" placeholder="" style="height: 49px;" type="text"></textarea>
                    </div>
                  </div>
                </div>
                <input id="post-input" accept="image/png,image/jpeg,image/gif,image/jpg" alt="" class="post-pload"
                       data-v-6b6dbdf2=""
                       name="input" style="display: none;" type="file">
                <div class="alltextInfo" data-v-6b6dbdf2="">
                  <p data-v-6b6dbdf2="" style="display: flex; align-items: center; line-height: 30px;">
                    <svg class="section-menu-item-icon icon-#svg-photos" data-v-6b6dbdf2="" style="cursor: pointer;">
                      <use data-v-6b6dbdf2="" xlink:href="#svg-photos"></use>
                    </svg>
                    <svg class="section-menu-item-icon icon-#svg-friend" data-v-6b6dbdf2=""
                         style="margin-left: 24px; cursor: pointer;">
                      <use data-v-6b6dbdf2="" xlink:href="#svg-friend"></use>
                    </svg>
                  </p>
                  <div class="dialog" data-v-6b6dbdf2=""
                       style="z-index: 10; position: absolute; margin-top: 146px; margin-left: 62px;"></div>
                  <div class="alltextInfo-textInfo" data-v-6b6dbdf2=""><span class="textInfo"
                                                                             data-v-6b6dbdf2=""> 0/256 </span>
                    <div class="quick-post-footer-actions" data-v-6b6dbdf2="">
                      <p class="button small secondary" data-v-6b6dbdf2="" style="width: 100%; height: 100%;">评论</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div data-v-6b6dbdf2="">
            <div class="post-comment" data-v-6b6dbdf2="">
              <div class="xm-header user-avatar" data-v-2fadc57c="" data-v-6b6dbdf2=""
                   style="width: 44px; height: 44px; border: none; cursor: pointer; border-radius: 50%;">
                <div class="xm-avatar" data-v-2fadc57c="" style="padding: 6.4px;"><img alt="头像"
                                                                                       class=""
                                                                                       data-v-2fadc57c=""
                                                                                       src="https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/base64_upload_359541709740168?imageMogr2/crop/80x80/gravity/center"
                                                                                       style="border-radius: 50%;">
                </div>
                <svg data-v-2fadc57c="" style="width: 44px; height: 44px;" viewBox="0 0 100 100">
                  <defs data-v-2fadc57c="">
                    <linearGradient id="svg4f04d0ef-4884-415a-bb8c-be51ce1799d1" data-v-2fadc57c="" x1="0%" x2="100%"
                                    y1="0%" y2="0%">
                      <stop data-v-2fadc57c="" offset="0%"></stop>
                      <stop data-v-2fadc57c="" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" data-v-2fadc57c="" fill-opacity="0"
                        stroke="#e9e9f0" stroke-width="8"></path>
                  <path d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" data-v-2fadc57c=""
                        fill-opacity="0" stroke="url(#svg4f04d0ef-4884-415a-bb8c-be51ce1799d1)" stroke-width="8"
                        style="stroke-dasharray: 80.36, 287;"></path>
                </svg>
                <div class="xm-level" data-v-2fadc57c=""
                     style="box-sizing: content-box; font-size: 10.8px; width: 18px; height: 18px; border: 1px solid rgb(255, 255, 255);">
                  <span data-v-2fadc57c="" style="display: block;">3</span></div>
              </div>
              <div class="post-comment-top" data-v-6b6dbdf2="">
                <div class="post-comment-author" data-v-6b6dbdf2="">
                  <p class="post-comment-text" data-v-6b6dbdf2=""><a class="post-comment-text-author"
                                                                     data-v-6b6dbdf2="">jimxu</a></p>
                  <p class="post-comment-text text-long-ellipsis" data-v-6b6dbdf2=""
                     style="font-size: 12px; color: rgb(153, 153, 153);">03-07 00:11<span> · 安徽</span></p>
                </div>
              </div>
              <div class="post-comment-emoji" data-v-6b6dbdf2="" style="word-break: break-all;">欢迎提供技术咨询</div>
              <div class="post-comment-img" data-v-6b6dbdf2=""></div>
              <div class="content-actions" data-v-6b6dbdf2="">
                <div class="content-action" data-v-6b6dbdf2="">
                  <div class="meta-line" data-v-6b6dbdf2="">
                    <div class="meta-line-list reaction-item-list" data-v-6b6dbdf2="">
                      <div class="reaction-item" data-v-6b6dbdf2="" style="position: relative;"><img
                          alt="reaction-happy"
                          class="reaction-image"
                          data-v-6b6dbdf2=""
                          src="https://pc.opensns.cn/img/reaction/like.png">
                      </div>
                    </div>
                    <p class="meta-line-text" data-v-6b6dbdf2="">0</p>
                  </div>
                  <div class="meta-line" data-v-6b6dbdf2="">
                    <p class="meta-line-link light" data-v-6b6dbdf2="">点赞</p>
                  </div>
                  <div class="meta-line" data-v-6b6dbdf2="">
                    <p class="meta-line-link light" data-v-6b6dbdf2="">回复</p>
                  </div>
                  <div class="meta-line" data-v-6b6dbdf2="">
                    <div data-v-6b6dbdf2="" style="position: relative;">
                      <div>
                        <div class="post-settings" data-v-6b6dbdf2="">
                          <svg class="post-settings-icon icon-more-dots" data-v-6b6dbdf2="">
                            <use data-v-6b6dbdf2="" xlink:href="#svg-more-dots"></use>
                          </svg>
                        </div>
                      </div>
                      <div
                          style="position: absolute; z-index: 9999; top: 44px; right: -6px; opacity: 0; visibility: hidden; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;">
                        <div class="simple-dropdown" data-v-6b6dbdf2="">
                          <p class="simple-dropdown-link" data-v-6b6dbdf2="">举报</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:selection {
  color: #fff;
  background-color: #23d2e2;
}

:selection {
  color: #fff;
  background: #1890ff;
}

:selection {
  background-color: #337fff;
}

.post-content[data-v-6b6dbdf2] {
  margin: 50px 60px 0;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, .06);
  border-radius: 12px;
  background: #fff;
  color: #3e3f5e;
}

.post-container[data-v-6b6dbdf2] {
  width: 80%;
  position: relative;
  margin-top: 45px;
  margin-left: 15%;
}

@media screen and (min-width: 1366px) {
  .post-container[data-v-6b6dbdf2] {
    width: 800px;
    margin-right: 280px;
    margin-left: 100px;
    position: relative;
  }
}

[data-v-6b6dbdf2]:selection {
  background-color: #337fff;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.breadcrumb[data-v-6b6dbdf2] {
  position: absolute;
  top: -48px;
  left: -16px;
  background-color: transparent;
}

.oprate[data-v-6b6dbdf2] {
  position: absolute;
  top: 0;
  left: -65px;
  width: 40px;
  height: 100%;
  padding-top: 40px;
}

a {
  text-decoration: none;
}

a {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

a {
  text-decoration: none !important;
  background-color: transparent;
}

a {
  color: #007bff;
}

a {
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .3s;
  -webkit-text-decoration-skip: objects;
}

a {
  touch-action: manipulation;
}

a:hover {
  color: #00c7d9;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

a:hover {
  color: #40a9ff;
}

a:active, a:hover {
  text-decoration: none;
  outline: 0;
}

.about[data-v-6b6dbdf2] {
  display: none;
}

@media screen and (min-width: 1366px) {
  .about[data-v-6b6dbdf2] {
    display: inline-block;
    position: absolute;
    top: 0;
    right: -298px;
    height: 100%;
  }
}

.breadcrumb-container[data-v-186a823a] {
  background-color: transparent;
}

[data-v-186a823a]:selection {
  background-color: #337fff;
}

.oprate-container[data-v-91ba2966] {
  position: sticky;
  top: 152px;
}

[data-v-91ba2966]:selection {
  background-color: #337fff;
}

@media screen and (min-width: 1366px) {
  .about-container[data-v-05b26ca4] {
    position: sticky;
    top: 112px;
    mix-blend-mode: normal;
    color: rgba(0, 0, 0, .85);
    font-size: 16px;
  }
}

[data-v-05b26ca4]:selection {
  background-color: #337fff;
}

img {
  vertical-align: middle;
}

img {
  vertical-align: middle;
  border-style: none;
}

.post-content .post-bg[data-v-6b6dbdf2] {
  width: 100%;
  border-radius: 12px 12px 0 0;
  -o-object-fit: cover;
  object-fit: cover;
}

.post-content .content-container[data-v-6b6dbdf2] {
  /*width: 100%;*/
  padding: 30px 30px;
}

.post-comment-list[data-v-6b6dbdf2] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.ant-breadcrumb {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .45);
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  font-size: 14px;
}

.oprate-container-thumbs[data-v-91ba2966] {
  width: 48px;
  height: 48px;
  background: #fff;
  background-blend-mode: normal;
  box-shadow: 0 0 40px rgba(94, 92, 154, .06);
  border-radius: 32px;
  mix-blend-mode: normal;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
}

.oprate-container-commons[data-v-91ba2966] {
  width: 48px;
  height: 48px;
  background: #fff;
  background-blend-mode: normal;
  box-shadow: 0 0 40px rgba(94, 92, 154, .06);
  border-radius: 32px;
  mix-blend-mode: normal;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
}

.oprate-container-collections[data-v-91ba2966] {
  width: 48px;
  height: 48px;
  background: #fff;
  background-blend-mode: normal;
  box-shadow: 0 0 40px rgba(94, 92, 154, .06);
  border-radius: 32px;
  mix-blend-mode: normal;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
}

.oprate-container-share[data-v-91ba2966] {
  width: 48px;
  height: 48px;
  background: #fff;
  background-blend-mode: normal;
  box-shadow: 0 0 40px rgba(94, 92, 154, .06);
  border-radius: 32px;
  mix-blend-mode: normal;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
}

.forum-container[data-v-e27424ca] {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

@media screen and (min-width: 1366px) {
  .about-container-box[data-v-05b26ca4] {
    width: 284px;
    margin-bottom: 18px;
    padding-bottom: 12px;
  }

  .about-container-box[data-v-05b26ca4]:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}

[data-v-e27424ca]:selection {
  background-color: #337fff;
}

.post-comment-form {
  padding: 26px 28px 26px 80px;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
}

.post-comment-list > .post-comment-form {
  border-top: 1px solid #eaeaf5;
}

.ant-breadcrumb > span:last-child {
  color: rgba(0, 0, 0, .65);
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

svg:not(:root) {
  overflow: hidden;
}

.oprate-container-thumbs-icon[data-v-91ba2966] {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #afb0c0;
}

.oprate-container-thumbs-count[data-v-91ba2966] {
  color: #999;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: default;
}

.oprate-container-commons-icon[data-v-91ba2966] {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #afb0c0;
}

.oprate-container-commons-count[data-v-91ba2966] {
  color: #999;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: default;
}

.oprate-container-collections-icon[data-v-91ba2966] {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #afb0c0;
}

.oprate-container-collections-count[data-v-91ba2966] {
  color: #999;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: default;
}

.oprate-container-share-icon[data-v-91ba2966] {
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #afb0c0;
}

figure {
  margin: 0;
}

figure {
  margin: inherit !important;
}

figure {
  display: block;
}

figure {
  margin: 0 0 1rem;
}

figure {
  margin: 0 0 1em;
}

.forum-container-background[data-v-e27424ca] {
  height: 72px;
}

[data-v-62854a42]:selection {
  background-color: #337fff;
}

.forum-container-describe[data-v-e27424ca] {
  mix-blend-mode: normal;
  color: rgba(0, 0, 0, .85);
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 5px;
}

.forum-container-describe[data-v-e27424ca] {
  position: absolute;
  top: 115px;
  left: 148px;
  font-size: 12px;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, .1);
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

.forum-container-button[data-v-e27424ca] {
  width: 228px;
  margin: auto;
}

.post-content .content-container .heads[data-v-6b6dbdf2] {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
}

.post-content .content-container .title[data-v-6b6dbdf2] {
  display: inline-block;
  width: 100%;
  height: auto;
  font-size: 32px;
  font-weight: 500;
  color: #333;
  margin-bottom: 22px;
  word-break: break-all;
}

.user-status {
  min-height: 44px;
  padding: 2px 0 0 52px;
  position: relative;
}

.user-status[data-v-6b6dbdf2] {
  display: flex;
  align-items: inherit;
  padding-left: 0;
}

.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}

.post-content .content-container .container-text[data-v-6b6dbdf2] {
  margin-top: 16px;
  word-break: break-all;
}

.post-content .content-container .w-e-text[data-v-6b6dbdf2] {
  padding: 0;
}

.tag-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -12px;
}

.post-content .content-container .tag-list[data-v-6b6dbdf2] {
  align-items: center;
  margin-top: 0;
}

.user-avatar {
  display: block;
  width: 100px;
  height: 110px;
  position: relative;
}

.post-comment-form .user-avatar {
  position: absolute;
  top: 28px;
  left: 28px;
}

.xm-header[data-v-2fadc57c] {
  background: #fff;
  border-radius: 50%;
  box-sizing: content-box;
}

[data-v-2fadc57c]:selection {
  background-color: #337fff;
}

.form {
  width: 100%;
}

.post-comment {
  padding: 26px 28px 28px 80px;
  background-color: #fff;
  position: relative;
}

.post-content .post-comment[data-v-6b6dbdf2] {
  border-top: 1px solid #eee;
  border-radius: 0 0 12px 12px;
}

[data-v-186a823a] .ant-breadcrumb-link {
  color: #afb0c0;
  font-size: 18px;
}

.ant-breadcrumb-separator {
  margin: 0 8px;
  color: rgba(0, 0, 0, .45);
}

[data-v-186a823a] .ant-breadcrumb-separator {
  margin: 0 8px;
  color: #afb0c0;
}

.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {
  display: none;
}

figure > img {
  width: 100%;
  height: 100%;
}

.forum-container-head[data-v-e27424ca] {
  position: absolute;
  top: 50px;
  left: 20px;
}

.forum-container-title[data-v-e27424ca] {
  mix-blend-mode: normal;
  color: rgba(0, 0, 0, .85);
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 5px;
}

.forum-container-title[data-v-e27424ca] {
  position: absolute;
  top: 86px;
  left: 148px;
  font-size: 18px;
}

.user-stats {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.forum-container-msg[data-v-e27424ca] {
  margin-top: 100px;
  margin-bottom: 28px;
}

p {
  margin: 0;
}

p {
  color: #3e3f5e;
  font-family: "Rajdhani", sans-serif;
  line-height: 1em;
}

p {
  margin-bottom: 0 !important;
}

p {
  margin-bottom: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1em;
}

.button {
  display: inline-block;
  height: 48px;
  border-radius: 10px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  transition: background-color .2s ease-in-out, color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
  box-shadow: 3px 5px 10px 0 rgba(62, 63, 94, 0.2);
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.forum-container-button p[data-v-e27424ca] {
  width: 100%;
  background: #337fff;
  height: 48px;
  position: relative;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.forum-container-button .btn[data-v-e27424ca] {
  background-color: #337fff;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
}

.post-content .content-container .heads .text[data-v-6b6dbdf2] {
  font-size: 12px;
  color: #999;
}

.action-request-list {
  display: -ms-flexbox;
  display: flex;
}

.user-status .action-request-list {
  position: absolute;
  top: 2px;
  right: 0;
}

.user-status .action-request-list[data-v-6b6dbdf2] {
  position: relative;
  left: 24px;
}

.w-e-text p {
  margin: 10px 0;
  line-height: 1.5;
}

.tag-item {
  display: block;
  height: 24px;
  padding: 0 12px;
  border-radius: 200px;
  background-color: #3e3f5e;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 24px;
}

.tag-list .tag-item {
  margin: 12px 12px 0 0;
}

.tag-item.secondary {
  background-color: #615dfa;
  transition: background-color .2s ease-in-out;
}

.tag-item.secondary {
  background-color: #337fff;
}

.tag-item.secondary[data-v-6b6dbdf2] {
  background-color: #337fff;
}

.post-content .content-container .tag-list a[data-v-6b6dbdf2] {
  cursor: pointer;
}

.tag-item.secondary:hover {
  color: #fff;
  background-color: #23d2e2;
}

.post-content .tag-item.secondary[data-v-6b6dbdf2]:hover {
  background-color: #337fff;
}

.xm-avatar[data-v-2fadc57c] {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.xm-level[data-v-2fadc57c] {
  position: absolute;
  right: 0;
  bottom: 0;
  background: #0051d4;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  overflow: hidden;
}

.loginComment[data-v-6b6dbdf2] {
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: #afb0c0;
}

.post-comment .user-avatar {
  position: absolute;
  top: 28px;
  left: 28px;
}

.post-content .post-comment-img[data-v-6b6dbdf2] {
  display: flex;
  flex-wrap: wrap;
  width: 33%;
}

.content-actions {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 52px;
}

.post-comment .content-actions {
  height: 20px;
  margin-top: 14px;
}

.post-content .content-actions[data-v-6b6dbdf2] {
  padding: 0;
}

.ant-breadcrumb a {
  color: rgba(0, 0, 0, .45);
  transition: color .3s;
}

.breadcrumb-container .link[data-v-186a823a] {
  color: #afb0c0;
  cursor: pointer;
}

.ant-breadcrumb a:hover {
  color: #40a9ff;
}

.breadcrumb-container .link[data-v-186a823a]:hover {
  color: #337fff;
}

.user-stat {
  padding: 0 24px;
}

.user-stats .user-stat {
  position: relative;
}

.user-stats .user-stat::after {
  content: '';
  width: 1px;
  height: 20px;
  background-color: #eaeaf5;
  position: absolute;
  top: 6px;
  right: 0;
}

.user-stats .user-stat:last-child::after {
  display: none;
}

.icon-join-group {
  fill: #fff;
  width: 20px;
  height: 20px;
}

.button .button-icon {
  fill: #fff;
  transition: fill .2s ease-in-out;
}

.forum-container-button .icon[data-v-e27424ca] {
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
}

.forum-container-button .text[data-v-e27424ca] {
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
}

.user-status .user-status-title {
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4285714286em;
}

.user-status .user-status-title.medium {
  font-size: 1rem;
}

.small {
  font-size: 80%;
  font-weight: 400;
}

.user-status .user-status-text {
  margin-top: 4px;
  color: #3e3f5e;
  font-size: 0.875rem;
  font-weight: 500;
}

.user-status .user-status-text {
  font-size: 12px;
}

.user-status .user-status-text.small {
  font-size: 0.75rem;
}

.user-status .user-status-title.medium + .user-status-text {
  margin-top: 2px;
}

.action-request {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #dedeea;
  border-radius: 10px;
  color: #adafca;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: border-color .2s ease-in-out, background-color .2s ease-in-out, color .2s ease-in-out;
}

.action-request-list .action-request {
  margin-right: 12px;
}

.action-request.accept {
  background-color: #337fff;
}

.action-request-list .action-request:last-child {
  margin-right: 0;
}

strong {
  font-weight: bolder;
}

.w-e-text img {
  cursor: pointer;
}

.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}

.xm-avatar img[data-v-2fadc57c] {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.form-row {
  margin: 0;
}

.form-row {
  width: 100%;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row[data-v-6b6dbdf2] {
  margin: 0;
}

input {
  height: 54px;
  padding: 0 18px;
}

input {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

input {
  overflow: visible;
}

input:not([type="range"]) {
  touch-action: manipulation;
}

.alltextInfo[data-v-6b6dbdf2] {
  margin-top: 5px;
  justify-content: space-between;
}

.alltextInfo[data-v-6b6dbdf2] {
  display: flex;
  align-items: center;
}

.content-actions .content-action {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.xm-avatar .img-full[data-v-2fadc57c] {
  width: 130%;
  height: 130%;
  border-radius: 50%;
}

.user-stat .user-stat-title {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-title {
  font-size: 0.875rem;
}

.user-stat .user-stat-text {
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.user-stat .user-stat-text {
  margin-top: 10px;
  color: #adafca;
  font-size: 0.6875rem;
}

.user-status .user-status-title .bold {
  color: #3e3f5e;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.user-status-title .bold[data-v-6b6dbdf2] {
  cursor: pointer;
}

.icon-add-friend {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.action-request .action-request-icon {
  fill: #adafca;
  opacity: .6;
  transition: fill .2s ease-in-out, opacity .2s ease-in-out;
}

.action-request.accept .action-request-icon {
  fill: #fff;
  opacity: 1;
}

.form-item {
  width: 100%;
}

.alltextInfo-textInfo[data-v-6b6dbdf2] {
  display: flex;
  align-items: center;
}

.post-comment .post-comment-text {
  font-size: 0.875rem;
  line-height: 1.7142857143em;
  font-weight: 500;
}

.text-long-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-long-ellipsis[data-v-6b6dbdf2] {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.meta-line {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.meta-line + .meta-line {
  margin-left: 22px;
}

.post-settings {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 40px;
  height: 30px;
  cursor: pointer;
}

.simple-dropdown {
  width: 140px;
  padding: 10px 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.12);
}

stop[data-v-2fadc57c]:first-child {
  stop-color: rgba(51, 127, 255, 0);
}

stop[data-v-2fadc57c]:nth-child(2) {
  stop-color: #337fff;
}

.form-input {
  position: relative;
}

[data-v-28de1f87]:selection {
  background-color: #337fff;
}

.section-menu-item-icon[data-v-6b6dbdf2] {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.alltextInfo-textInfo .textInfo[data-v-6b6dbdf2] {
  font-size: 12px;
  color: #999;
  margin-right: 8px;
}

.post-content .textInfo[data-v-6b6dbdf2] {
  font-size: 12px;
  color: #999;
  text-align: right;
  margin-top: 5px;
}

.quick-post-footer-actions[data-v-6b6dbdf2] {
  width: 88px;
  height: 40px;
}

p a {
  color: #00c7d9;
  font-weight: 600;
}

.post-comment .post-comment-text .post-comment-text-author {
  margin-right: 6px;
  color: #3e3f5e;
  font-weight: 700;
}

.reaction-item-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.meta-line .meta-line-text {
  font-size: 0.75rem;
  font-weight: 700;
}

.meta-line .meta-line-list + .meta-line-text {
  margin-left: 10px;
}

.meta-line .meta-line-link {
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: color .2s ease-in-out;
}

.meta-line .meta-line-link.light {
  color: #adafca;
}

.icon-more-dots {
  fill: #fff;
  width: 22px;
  height: 6px;
}

.post-settings .post-settings-icon {
  fill: #adafca;
  opacity: .4;
  transition: opacity .2s ease-in-out, fill .2s ease-in-out;
}

.simple-dropdown .simple-dropdown-link {
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: color .2s ease-in-out, padding-left .2s ease-in-out;
}

label {
  font-family: "Rajdhani", sans-serif;
}

label {
  display: block;
  margin: 0;
  color: #3e3f5e;
  line-height: 1em;
}

label {
  margin: 0 !important;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

label {
  touch-action: manipulation;
}

.form-input label {
  color: #adafca;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all .3s ease-in-out;
  pointer-events: none;
}

.form-input.small label {
  font-size: 0.875rem;
}

.form-input.small label {
  top: 16px;
}

textarea {
  font-family: "Rajdhani", sans-serif;
}

textarea {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

textarea {
  padding: 14px 18px;
  resize: none;
}

textarea {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

textarea {
  -webkit-appearance: none;
}

textarea {
  touch-action: manipulation;
}

textarea {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

textarea {
  overflow: auto;
  resize: vertical;
}

textarea[data-v-28de1f87] {
  resize: none;
  word-break: break-all;
  overflow: hidden;
  padding: 14px 18px;
  line-height: normal;
}

.form-input.small textarea {
  font-size: 0.875rem;
}

.form-input.small textarea {
  height: 100px;
}

.button.small {
  height: 40px;
  font-size: 0.75rem;
  line-height: 40px;
}

.button.secondary {
  background-color: #615dfa;
  box-shadow: 4px 7px 12px 0 rgba(97, 93, 250, 0.2);
}

.button.secondary {
  background-color: #337fff;
}

.button.secondary[data-v-6b6dbdf2] {
  background-color: #337fff;
}

.reaction-item-list .reaction-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -6px;
}

.reaction-item-list .reaction-item:last-child {
  margin-left: 0;
}

.reaction-image {
  width: 20px;
  height: 20px;
}

.reaction-item-list .reaction-item > .reaction-image {
  cursor: pointer;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .post-container {
     width: 100% !important;
     margin-left: 0 !important;
     margin-top: 80px !important;
  }
  .post-content {
    margin: 0;
  }
  .oprate{
   display: none !important;
  }
  .post-bg{
    height: 200px !important;
  }
  .breadcrumb{
    left: 0 !important;
  }
  .postStyle{
    margin: 15px;
  }
  .post-content .content-container {
    padding: 15px !important;
  }
  :deep(.md-editor-preview-wrapper) {
    padding: 0 !important;
  }
}


</style>