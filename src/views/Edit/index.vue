<script lang="ts" setup>
import Upload from "./compontents/upload.vue";
import {getCurrentInstance, reactive} from "vue";
import {add} from "@/api/article";
import {message} from "ant-design-vue";
import CascaderCom from "@/views/Edit/compontents/CascaderCom.vue";

import {MdEditor} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const state = reactive({
  text: '',
  theme: ''
});
const instance = getCurrentInstance()

interface FormState {
  articleId: string;
  title: string;
  content: string;
  author: string;
  publishDate: Date;
  tag: string;
  coverImage: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  collectCount: number;
  summary: string;
  articleStatus: string;
  source: string;
  url: string;
  recommendations: number;
  wordCount: number;
  readingTime: number;
  isFeatured: boolean;
  relatedArticles: string;
  editorialSuggestions: string;
  seoInformation: string;
  copyright: string;
  publishPlatform: string;
  userId: string;
  avatar: string;
}

//时间
const date = new Date();
//时间戳
const timestamp = Date.now();
//日期
const year = date.getFullYear();
const formState = reactive<FormState>({
  articleId: "",
  title: "",
  content: "",
  author: "",
  publishDate: date.getDate(),
  tag: "帖子",
  coverImage: "",
  readCount: 0,
  likeCount: 0,
  commentCount: 0,
  shareCount: 0,
  collectCount: 0,
  summary: "",
  articleStatus: "已发布",
  source: "",
  url: "",
  recommendations: 0,
  wordCount: 0,
  readingTime: 0,
  isFeatured: false,
  relatedArticles: "",
  editorialSuggestions: "",
  seoInformation: "",
  copyright: "",
  publishPlatform: "LT-REAI专题",
  userId: "",
  avatar: "",
});

//接收子组件传递的数据
const parentClick = (value) => {
  formState.coverImage = value;
}
const cascaderChange = (value) => {
  formState.publishPlatform = value;
}
instance?.proxy?.$Bus.on("userInfo", (param: any) => {
  formState.userId = param.userId;
})

const onFinish = (values: any) => {
  add(formState).then(res => {
    if (res.status === 200) {
      message.success("发布成功");
    }
  })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<template>
  <div class="contenter snipcss-QZvbw">
    <div id="release-box" class="contenter-box">
      <div>
        <div class="contenter">
          <div class="ant-spin-nested-loading">
            <div class="ant-spin-container">
              <div class="content">
                <a-form
                    :model="formState"
                    autocomplete="off"
                    name="basic"
                    @finish="onFinish"
                    @finishFailed="onFinishFailed"
                >
                  <div class="content-item thread" style="">
                    <div class="form-row form-post-title">
                      <a-form-item
                          :rules="[{ required: true, message: '标题不能为空!' }]"
                          name="title">
                        <a-input v-model:value="formState.title" :maxlength="40" class="video-title"
                                 placeholder="请输入标题"/>
                      </a-form-item>
                    </div>
                  </div>

                  <MdEditor v-model="formState.content" :theme="state.theme" height="600px"/>

                  <div class="set-up">
                    <div class="more-set-box" style="padding-bottom: 0px;">
                      <div class="more-item new-release">
                        <div class="title">
                          <div class="set-icon">
                            <svg class="section-menu-item-icon icon-group choose-icon" style="fill: rgb(51, 127, 255);">
                              <use xlink:href="#svg-photos"></use>
                            </svg>
                          </div>
                          <div> 封面 <p class="explain">推荐尺寸大于等于785*440，jpeg格式，支持大图封面形式</p>
                          </div>
                        </div>
                        <div class="select-forum-btn ant-select ant-select-enabled" tabindex="0">
                          <div aria-autocomplete="list" aria-controls="46b3fb0d-c021-4f3d-a6da-2288b4614049"
                               aria-haspopup="true"
                               class="ant-select-selection ant-select-selection--single"
                               role="combobox">
                            <div class="ant-select-selection__rendered">
                              <div class="ant-select-selection-selected-value" style="display: block; opacity: 1;"
                                   title="大封面">大封面
                              </div>
                            </div>
                            <span class="ant-select-arrow" style="user-select: none;" unselectable="on"><i
                                aria-label="icon: down" class="anticon anticon-down ant-select-arrow-icon"><svg
                                aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"
                                height="1em" viewBox="64 64 896 896" width="1em">
                                                            <path
                                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                        </svg></i></span>
                          </div>
                        </div>
                      </div>
                      <upload :handleClick="parentClick"/>
                    </div>
                    <div class="more-set-box" style="padding-bottom: 0px;">
                      <div class="more-item new-release">
                        <div class="title">
                          <div class="set-icon">
                            <svg class="section-menu-item-icon icon-group choose-icon" style="fill: rgb(51, 127, 255);">
                              <use xlink:href="#svg-group"></use>
                            </svg>
                          </div>
                          <div> 发布版块 <p class="explain">选择内容发布的目标版块，支持选择版块和分类</p>
                          </div>
                        </div>
                        <CascaderCom :handleClick="cascaderChange"/>
                        <!--                        <button class="select-forum-btn ant-btn" type="button"><span>请选择</span></button>-->
                      </div>
                    </div>
                    <div class="more-set-box" style="padding-bottom: 0px;">
                      <div class="more-item new-release">
                        <div class="title">
                          <div class="set-icon">
                            <svg class="quick-post-footer-action-icon icon-tags" style="fill: rgb(51, 127, 255);">
                              <use xlink:href="#svg-tags"></use>
                            </svg>
                          </div>
                          <div> 话题 <p class="explain">选择或创建一个话题</p>
                          </div>
                        </div>
                        <button class="select-forum-btn ant-btn" type="button"><span>请选择</span></button>
                        <!--                        <CascaderCom/>-->
                      </div>
                    </div>
                    <div class="more-set-box" style="padding-bottom: 0px;">
                      <div class="more-item new-release">
                        <div class="title">
                          <div class="set-icon"><span class="iconfont icon-mention at-btn"
                                                      style="color: rgb(51, 127, 255);"></span></div>
                          <div> @好友 <p class="explain">选择你关注的好友</p>
                          </div>
                        </div>
                        <button class="select-forum-btn ant-btn" type="button"><span>请选择联系人</span></button>
                      </div>
                    </div>
                    <div class="more-set-box" style="padding-bottom: 0px;">
                      <div class="more-item new-release">
                        <div class="title">
                          <div class="set-icon">
                            <svg class="quick-post-footer-action-icon icon-tags" style="fill: rgb(51, 127, 255);">
                              <use xlink:href="#svg-paperclip"></use>
                            </svg>
                          </div>
                          <div> 附件 <p class="explain">请选择一个附件</p>
                          </div>
                        </div>
                        <button class="select-forum-btn ant-btn" type="button"><span>上传附件</span></button>
                        <input id="file" alt="" class="upload" name="input" style="display: none;" type="file">
                      </div>
                      <div class="explain-box">
                        <div class="attachments" style="display: none;"></div>
                        <div class="attachments" style="display: none;"></div>
                        <div class="attachments" style="display: none;"></div>
                      </div>
                    </div>
                    <div class="more-set-box" is-forum="0">
                      <div class="more-item">
                        <div class="title">
                          <div class="set-icon"><i aria-label="icon: security-scan"
                                                   class="icon anticon anticon-security-scan">
                            <svg aria-hidden="true" class="" data-icon="security-scan" fill="currentColor"
                                 focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
                              <path
                                  d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM402.9 528.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.7 35.1 130.1 28.4 178.6-20.1 56.3-56.3 56.3-147.5 0-203.8-56.3-56.3-147.5-56.3-203.8 0-48.5 48.5-55.2 123-20.1 178.6zm65.4-133.3c31.3-31.3 82-31.3 113.2 0 31.3 31.3 31.3 82 0 113.2-31.3 31.3-82 31.3-113.2 0s-31.3-81.9 0-113.2z"></path>
                            </svg>
                          </i></div>
                          <div> 访问权限 <p class="explain">仅有权限的用户可以浏览该内容</p>
                          </div>
                        </div>
                        <div class="text ant-dropdown-trigger">
                          <button class="ant-btn" style="margin-left: 8px;" type="button"><span>所有人可见</span><i
                              aria-label="icon: down" class="anticon anticon-down">
                            <svg aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"
                                 height="1em" viewBox="64 64 896 896" width="1em">
                              <path
                                  d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                            </svg>
                          </i></button>
                        </div>
                      </div>
                      <div class="more-item">
                        <div style="display: flex;">
                          <div class="title">
                            <div class="set-icon"><i aria-label="icon: bell" class="icon anticon anticon-bell">
                              <svg aria-hidden="true" class="" data-icon="bell" fill="currentColor" focusable="false"
                                   height="1em" viewBox="64 64 896 896" width="1em">
                                <path
                                    d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
                              </svg>
                            </i></div>
                            <div> 消息推送 <p class="explain">有访问权限的用户将会收到该内容的推送消息</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <a-switch v-model:checked="formState.delivery" />
                        </div>
                      </div>
                      <div class="more-item">
                        <div class="title">
                          <div class="set-icon"><i aria-label="icon: stop" class="icon anticon anticon-stop">
                            <svg aria-hidden="true" class="" data-icon="stop" fill="currentColor" focusable="false"
                                 height="1em" viewBox="64 64 896 896" width="1em">
                              <path
                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"></path>
                            </svg>
                          </i></div>
                          <div> 关闭评论 <p class="explain">关闭评论区，支持后续手动重新开启</p>
                          </div>
                        </div>
                        <div>
                          <a-switch v-model:checked="formState.delivery" />
                        </div>
                      </div>
                      <div class="more-item">
                        <div class="title">
                          <div class="set-icon"><i aria-label="icon: eye-invisible"
                                                   class="icon anticon anticon-eye-invisible">
                            <svg aria-hidden="true" class="" data-icon="eye-invisible" fill="currentColor"
                                 focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
                              <path
                                  d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path>
                              <path
                                  d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path>
                            </svg>
                          </i></div>
                          <div> 匿名设置 <p class="explain">设置匿名评论</p>
                          </div>
                        </div>
                        <div style="color: rgb(51, 127, 255); cursor: pointer;"> 设置</div>
                      </div>
                      <div class="more-item">
                        <div class="title">
                          <div class="set-icon"><i aria-label="icon: transaction"
                                                   class="icon anticon anticon-transaction">
                            <svg aria-hidden="true" class="" data-icon="transaction" fill="currentColor"
                                 focusable="false" height="1em" viewBox="64 64 896 896" width="1em">
                              <path
                                  d="M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4 352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z"></path>
                            </svg>
                          </i></div>
                          <div> 付费设置 <p class="explain">设置内容的付费形式以赚取创作收益</p>
                          </div>
                        </div>
                        <div style="color: rgb(51, 127, 255); cursor: pointer;"> 设置</div>
                      </div>
                      <div class="more-item">
                        <div class="title">
                          <div class="set-icon"><i aria-label="icon: dollar" class="icon anticon anticon-dollar">
                            <svg aria-hidden="true" class="" data-icon="dollar" fill="currentColor" focusable="false"
                                 height="1em" viewBox="64 64 896 896" width="1em">
                              <path
                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
                            </svg>
                          </i></div>
                          <div> 接受打赏 <p class="explain">其他用户可以打赏你发布的内容</p>
                          </div>
                        </div>
                        <div>
                          <button class="ant-switch" role="switch" type="button"><span class="ant-switch-inner"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="header-contenter-footer">
                    <div class="header-contenter">
                      <div class="header-contenter-left">
                        <!--                        <div class="number-words-box"><i aria-label="icon: check-circle"-->
                        <!--                                                         class="icons anticon anticon-check-circle">-->
                        <!--                          <svg aria-hidden="true" class="" data-icon="check-circle" fill="currentColor"-->
                        <!--                               focusable="false" height="1em" viewBox="64 64 896 896" width="1em">-->
                        <!--                            <path-->
                        <!--                                d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>-->
                        <!--                            <path-->
                        <!--                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>-->
                        <!--                          </svg>-->
                        <!--                        </i> <span class="sum"><span><span>0</span> / 12000</span> 字</span></div>-->
                        <!--                        <div class="more-settings"><span class="set">更多设置</span> <i aria-label="icon: down"-->
                        <!--                                                                                    class="icons anticon anticon-down"-->
                        <!--                                                                                    style="transform: rotate(0deg);">-->
                        <!--                          <svg aria-hidden="true" class="" data-icon="down" fill="currentColor" focusable="false"-->
                        <!--                               height="1em" viewBox="64 64 896 896" width="1em">-->
                        <!--                            <path-->
                        <!--                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>-->
                        <!--                          </svg>-->
                        <!--                        </i></div>-->
                      </div>
                      <div class="header-contenter-right">
                        <div class="cancellation">
                          <button class="ant-btn" type="button"><span>取 消</span></button>
                        </div>
                        <div class="cancellation">
                          <button class="ant-btn" type="button"><span>保存草稿</span></button>
                        </div>
                        <div class="preview">
                          <button class="ant-btn" type="button"><span>预 览</span></button>
                        </div>
                        <div class="release">
                          <a-button class="ant-btn ant-btn-primary" html-type="submit" type="button">发 布</a-button>
                          <!--                        <button @click="push"><span></span></button>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </a-form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recent-drafts-box"></div>
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

:selection {
  background-color: #337fff;
}

:selection {
  background-color: #337fff;
}

.page-loader {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #F8F8FB;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999999;
  transition: opacity .4s ease-in-out, visibility .4s ease-in-out;
}

.contenter-box {
  background-color: #f8f8f8;
}

.contenter-box {
  width: 100%;
  margin: 0 auto;
  overflow: visible;
  position: relative;
}

.loader-bars {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  height: 40px;
}

.loader-bars {
  margin-top: 30px !important;
}

.page-loader .page-loader-indicator {
  margin-top: 36px;
}

.contenter-box .recent-drafts-box {
  position: absolute;
  top: 0;
  right: -260px;
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

.page-loader .page-loader-info .page-loader-info-text {
  color: #000;
  text-transform: uppercase;
  text-align: center;
}

.page-loader .page-loader-info .page-loader-info-text {
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
}

.loader-bars .loader-bar {
  width: 4px;
  height: 100%;
  margin-right: 4px;
  border-radius: 200px;
  -webkit-transform: scaleY(0.2);
  transform: scaleY(0.2);
  -webkit-animation: loader-bars .5s infinite alternate ease-in;
  animation: loader-bars .5s infinite alternate ease-in;
}

.loader-bars .loader-bar:nth-child(1) {
  background-color: #347FFF;
}

.loader-bars .loader-bar:nth-child(2) {
  background-color: #4288FF;
  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}

.loader-bars .loader-bar:nth-child(3) {
  background-color: #5393FF;
  -webkit-animation-delay: .2s;
  animation-delay: .2s;
}

.loader-bars .loader-bar:nth-child(4) {
  background-color: #629CFF;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}

.loader-bars .loader-bar:nth-child(5) {
  background-color: #71A6FF;
  -webkit-animation-delay: .4s;
  animation-delay: .4s;
}

.loader-bars .loader-bar:nth-child(6) {
  background-color: #81B0FF;
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
}

.loader-bars .loader-bar:nth-child(7) {
  background-color: #8CB7FF;
  -webkit-animation-delay: .6s;
  animation-delay: .6s;
}

.loader-bars .loader-bar:last-child {
  margin-right: 0;
}

.loader-bars .loader-bar:nth-child(8) {
  background-color: #9CC1FF;
  -webkit-animation-delay: .7s;
  animation-delay: .7s;
}

.contenter {
  background-color: #f8f8f8;
  overflow: hidden;
  position: relative;
}

:selection {
  background-color: #337fff;
}

.ant-spin-nested-loading {
  position: relative;
}

.ant-spin-container {
  position: relative;
  transition: opacity .3s;
}

.ant-spin-container:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: none \9;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0;
  transition: all .3s;
  content: "";
  pointer-events: none;
}

.contenter .content {
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 40px rgba(94, 92, 154, .04);
  margin: 25px auto 0;
  padding-top: 30px;
  padding-bottom: 56px;
  position: relative;
}

.contenter .content .content-item {
  padding: 32px 64px;
}

.contenter .content .content-item.thread {
  margin-top: 67px;
}

.header-contenter-footer {
  height: 56px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  padding: 0;
  background: #fff;
  box-shadow: 0 0 40px rgba(94, 92, 154, .06);
  display: flex;
  justify-content: center;
}

.contenter .content .dynamic {
  display: flex;
  flex-wrap: wrap;
}

.more-set-box {
  border-radius: 12px;
  background: #fff;
}

.more-set-box {
  padding: 0 30px 30px;
}

.more-set-box {
  border-radius: 12px;
  background: #fff;
  padding: 30px;
}

:selection {
  background-color: #337fff;
}

.header-contenter-footer .header-contenter {
  width: 800px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form {
  width: 100%;
}

.ant-upload-picture-card-wrapper {
  zoom: 1;
  display: inline-block;
  width: 100%;
}

.ant-upload-picture-card-wrapper:after, .ant-upload-picture-card-wrapper:before {
  display: table;
  content: "";
}

.ant-upload-picture-card-wrapper:after {
  clear: both;
}

.form-row {
  margin: 0;
}

.form-row {
  width: 100%;
}

.form-row {
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  margin-right: -5px;
  margin-left: -5px;
}

.contenter .content .content-item.thread .form-post-title {
  margin: 0;
  border-bottom: 1px solid #e6e6e6;
}

.contenter .content .content-item.video .video-cover {
  width: 672px;
}

.contenter .content .content-item.video .form-post-title {
  margin: 0;
  border-bottom: 1px solid #e6e6e6;
}

.contenter .content .content-item.video .quick-post-body {
  margin-top: 24px;
}

.more-set-box .more-item {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.more-set-box .explain-box {
  position: relative;
  margin-left: 64px;
}

.more-set-box .explain-box::after {
  content: "";
  position: absolute;
  display: block;
  height: 100%;
  width: 1px;
  background: #e6e6e6;
  top: 0;
  left: -45px;
}

.more-set-box .more-item {
  height: 72px;
  justify-content: space-between;
}

.more-set-box .more-item {
  display: flex;
  align-items: center;
}

.header-contenter-footer .header-contenter .header-contenter-left {
  display: flex;
}

.header-contenter-footer .header-contenter .header-contenter-right {
  display: flex;
}

.ant-upload-list {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  zoom: 1;
}

.ant-upload-list:after, .ant-upload-list:before {
  display: table;
  content: "";
}

.ant-upload-list:after {
  clear: both;
}

.ant-upload-list-picture-card.ant-upload-list:after {
  display: none;
}

.ant-upload {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  outline: 0;
}

.ant-upload.ant-upload-select {
  display: inline-block;
}

.ant-upload.ant-upload-select-picture-card {
  display: table;
  float: left;
  width: 104px;
  height: 104px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color .3s ease;
}

.contenter .content .dynamic .ant-upload.ant-upload-select-picture-card {
  width: 120px;
  height: 120px;
}

.ant-upload.ant-upload-select-picture-card:hover {
  border-color: #1890ff;
}

.form-item {
  width: 100%;
}

.contenter .content .content-item.thread .form-post-title .form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.w-e-toolbar {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
}

.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
}

.w-e-toolbar {
  position: fixed;
  top: 56px;
  width: 100%;
  left: 0;
  justify-content: center;
  z-index: 10 !important;
  border: none !important;
  border-bottom: 1px solid #e6e6e6 !important;
  background: #f8f8f8 !important;
}

.w-e-text-container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
}

.w-e-text-container {
  position: relative;
  height: 100%;
}

.w-e-text-container {
  overflow: hidden;
}

.w-e-text-container {
  min-height: calc(100vh - 265px) !important;
  z-index: 9 !important;
}

.w-e-text-container {
  border: none !important;
  z-index: 0 !important;
  overflow: visible;
}

.contenter .content .content-item.video .form-post-title .form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.more-set-box .more-item .title {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #3e3f5e;
  line-height: 22px;
}

.ant-select {
  box-sizing: border-box;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  display: inline-block;
  outline: 0;
}

.ant-select {
  margin: 0;
  padding: 0;
  list-style: none;
}

.more-set-box .more-item .select-forum-btn {
  min-width: 100px;
}

button {
  font-family: "Rajdhani", sans-serif;
}

button {
  border-radius: 0;
}

button {
  touch-action: manipulation;
}

button {
  margin: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

button {
  overflow: visible;
}

button {
  text-transform: none;
}

[type="button"], button {
  -webkit-appearance: button;
}

.ant-btn {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, .65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
}

.ant-btn {
  outline: 0;
}

button, [type="button"] {
  -webkit-appearance: button;
}

[type="button"]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}

.ant-btn:before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  z-index: 1;
  display: none;
  background: #fff;
  border-radius: inherit;
  opacity: .35;
  transition: opacity .2s;
  content: "";
  pointer-events: none;
}

.ant-btn:hover {
  color: #40a9ff;
  background-color: #fff;
  border-color: #40a9ff;
}

.ant-btn:active, .ant-btn:hover {
  text-decoration: none;
  background: #fff;
}

.ant-btn:not([disabled]):hover {
  text-decoration: none;
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

.attachments {
  padding: 16px 0 0;
}

:selection {
  background-color: #337fff;
}

.more-set-box .title {
  font-size: 16px;
  font-weight: 400;
  color: #3e3f5e;
  line-height: 22px;
  margin-right: 10px;
}

.more-set-box .more-item .title {
  display: flex;
  align-items: center;
}

.more-set-box .text {
  font-size: 14px;
  font-weight: 400;
  color: #afb0c0;
  line-height: 20px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header-contenter-footer .header-contenter .header-contenter-left > div {
  display: flex;
  align-items: center;
}

.header-contenter-footer .header-contenter .header-contenter-left .number-words-box {
  margin-right: 24px;
}

.header-contenter-footer .header-contenter .header-contenter-left .more-settings {
  cursor: pointer;
}

.header-contenter-footer .header-contenter .header-contenter-right > div {
  color: rgba(0, 0, 0, .88);
  margin-left: 12px;
}

.header-contenter-footer .header-contenter .header-contenter-right .release {
  color: #fff;
}

[role="button"] {
  cursor: pointer;
}

[role="button"] {
  touch-action: manipulation;
}

.ant-upload.ant-upload-select-picture-card > .ant-upload {
  display: table-cell;
  width: 100%;
  height: 100%;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
}

input[type="text"] {
  font-family: "Rajdhani", sans-serif;
}

input[type="text"] {
  background-color: #fff;
  border: 1px solid #dedeea;
  color: #3e3f5e;
  transition: border-color .2s ease-in-out;
}

input[type="text"] {
  height: 54px;
  padding: 0 18px;
}

input[type="text"] {
  -webkit-appearance: none;
}

.contenter .content .content-item.thread .form-post-title .form-item .video-title {
  padding: 0;
  border: none;
  font-size: 22px;
  flex-grow: 1;
  margin-right: 5px;
  outline: none;
}

.w-e-toolbar * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}

.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}

.w-e-menu-tooltip-up:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}

.w-e-text-container * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}

.w-e-text-container .w-e-text {
  padding: 0;
}

.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
}

.w-e-text-container .placeholder {
  left: 0;
}

.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

ul {
  margin: 0;
}

ul {
  margin-bottom: 1rem;
}

ul {
  margin-top: 0;
  margin-bottom: 1em;
}

.el-upload-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.el-upload-list--picture-card {
  margin: 0;
  display: inline;
  vertical-align: top;
}

.el-upload--picture-card {
  -webkit-box-sizing: border-box;
  cursor: pointer;
}

.el-upload {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  outline: 0;
}

.el-upload--picture-card {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  line-height: 146px;
  vertical-align: top;
}

.contenter .content .content-item.video .video-cover .el-upload--picture-card {
  width: 672px;
  height: 240px;
}

.el-upload--picture-card:hover {
  border-color: #409eff;
  color: #409eff;
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}

.contenter .content .content-item.video .form-post-title .form-item .video-title {
  padding: 0;
  border: none;
  font-size: 22px;
  flex-grow: 1;
  margin-right: 5px;
}

.more-set-box .more-item .title .set-icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgba(80, 139, 254, .08);
  margin-right: 24px;
}

.more-set-box .new-release .title .set-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-select-selection {
  display: block;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1.02px solid #d9d9d9;
  border-radius: 4px;
  outline: none;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ant-select-selection--single {
  position: relative;
  height: 32px;
  cursor: pointer;
}

.ant-select-selection:hover {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}

.more-set-box .unsplash {
  cursor: pointer;
}

.ant-btn > span {
  display: inline-block;
  transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);
  pointer-events: none;
}

.more-set-box .more-item .title .set-icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgba(80, 139, 254, .08);
  margin-right: 24px;
}

.ant-switch {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 20px;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: 44px;
  height: 22px;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, .25);
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
  transition: all .36s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ant-switch-loading-icon, .ant-switch:after {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 18px;
  cursor: pointer;
  transition: all .36s cubic-bezier(.78, .14, .15, .86);
  content: " ";
}

.ant-switch:after {
  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, .2);
}

.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header-contenter-footer .header-contenter .header-contenter-left > div .icons {
  font-size: 16px;
}

.anticon:before {
  display: none;
}

.header-contenter-footer .header-contenter .header-contenter-left .number-words-box > .sum {
  font-size: 14px;
  color: rgba(0, 0, 0, .45);
  margin-left: 9px;
}

.header-contenter-footer .header-contenter .header-contenter-left .more-settings > .set {
  font-size: 14px;
  color: rgba(0, 0, 0, .85);
  margin-right: 9px;
}

.header-contenter-footer .header-contenter .header-contenter-left .more-settings .icons {
  color: rgba(0, 0, 0, .85);
}

.ant-btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, .045);
}

.ant-btn-primary:hover {
  color: #fff;
  background-color: #40a9ff;
  border-color: #40a9ff;
}

.form-textarea {
  position: relative;
}

.ant-upload input[type="file"] {
  cursor: pointer;
}

[class^="w-e-icon-"] {
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.w-e-toolbar .w-e-menu i {
  color: #999;
}

.w-e-icon-header:before {
  content: "\f1dc";
}

.w-e-icon-bold:before {
  content: "\ea62";
}

.w-e-icon-text-heigh:before {
  content: "\ea5f";
}

.w-e-icon-font:before {
  content: "\ea5c";
}

.w-e-icon-italic:before {
  content: "\ea64";
}

.w-e-icon-underline:before {
  content: "\ea63";
}

.w-e-icon-strikethrough:before {
  content: "\ea65";
}

.w-e-icon-indent-increase:before {
  content: "\ea7b";
}

.w-e-icon-row-height:before {
  content: "\e9be";
}

.w-e-icon-pencil2:before {
  content: "\e906";
}

.w-e-icon-paint-brush:before {
  content: "\f1fc";
}

.w-e-icon-link:before {
  content: "\e9cb";
}

.w-e-icon-list2:before {
  content: "\e9bb";
}

.w-e-icon-paragraph-left:before {
  content: "\ea77";
}

.w-e-icon-quotes-left:before {
  content: "\e977";
}

.w-e-icon-happy:before {
  content: "\e9df";
}

.w-e-icon-table2:before {
  content: "\ea71";
}

.w-e-icon-terminal:before {
  content: "\f120";
}

.w-e-icon-split-line:before {
  content: "\ea0b";
}

.w-e-icon-undo:before {
  content: "\e965";
}

.w-e-icon-redo:before {
  content: "\e966";
}

.w-e-icon-fullscreen:before {
  content: "\e901";
}

.w-e-text-container p {
  font-size: 16px !important;
}

.w-e-text p {
  margin: 10px 0;
  line-height: 1.5;
}

.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  border-radius: 2px;
  padding: 0 5px;
}

.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}

.el-upload-dragger {
  -webkit-box-sizing: border-box;
  cursor: pointer;
}

.el-upload-dragger {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  width: 360px;
  height: 180px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contenter .content .content-item.video .video-cover .el-upload-dragger {
  width: 672px;
  height: 240px;
}

.el-upload-dragger:hover {
  border-color: #409eff;
}

.el-upload__input {
  display: none;
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate .illustrate-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  vertical-align: middle;
}

svg {
  overflow: hidden;
}

.icon-group {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

svg:not(:root) {
  overflow: hidden;
}

.more-set-box .more-item .explain {
  margin-top: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, .45);
}

.ant-select-selection__rendered {
  position: relative;
  display: block;
  margin-right: 11px;
  margin-left: 11px;
  line-height: 30px;
}

.ant-select-selection--single .ant-select-selection__rendered {
  margin-right: 24px;
}

.ant-select-selection__rendered:after {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: ".";
  pointer-events: none;
}

.ant-select-arrow {
  display: inline-block;
  color: rgba(0, 0, 0, .25);
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  vertical-align: -.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  margin-top: -6px;
  font-size: 12px;
  transform-origin: 50% 50%;
}

.ant-select-arrow:before {
  display: none;
}

.more-set-box .explain-box .ant-upload-select-picture-card {
  width: 200px;
  height: 120px;
}

.more-set-box .upload-dragger-cover .ant-upload-select-picture-card {
  margin-bottom: 0;
}

.icon-camera {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.icon-tags {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-mention:before {
  content: "\e605";
}

.more-set-box .more-item .title .set-icon .icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #337fff;
}

.more-set-box .more-item .explain {
  margin-top: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, .45);
}

.ant-btn > i {
  display: inline-block;
  transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);
  pointer-events: none;
}

.ant-btn > .anticon {
  line-height: 1;
}

.ant-btn .anticon {
  transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);
}

.ant-btn > span + .anticon {
  margin-left: 8px;
}

.ant-switch-inner {
  display: block;
  margin-right: 6px;
  margin-left: 24px;
  color: #fff;
  font-size: 12px;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
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

.form-textarea textarea {
  font-size: 0.875rem;
  padding: 26px 28px 0;
}

.contenter .content .content-item #quick-post-text {
  padding: 0 0 0 2px;
  border: none;
  resize: none;
  height: 240px !important;
  font-size: 18px;
  line-height: 1.5;
}

.w-e-icon-image:before {
  content: "\e90d";
}

[class^="el-icon-"] {
  font-family: element-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-upload--picture-card i {
  font-size: 28px;
  color: #8c939d;
}

.el-upload-dragger .el-icon-upload {
  font-size: 67px;
  color: #c0c4cc;
  margin: 40px 0 16px;
  line-height: 50px;
}

.el-icon-upload:before {
  content: "\e7c3";
}

.el-upload-dragger .el-upload__text {
  color: #606266;
  font-size: 14px;
  text-align: center;
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate .illustrate-item .illustrate-item-left {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: rgba(0, 0, 0, .04);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate .illustrate-item-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ant-select-selection-selected-value {
  float: left;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ant-select-arrow > * {
  line-height: 1;
}

.ant-select-arrow .ant-select-arrow-icon {
  display: block;
}

.el-upload-dragger .el-upload__text em {
  color: #409eff;
  font-style: normal;
}

.icon-photos {
  fill: #adafca;
  width: 20px;
  height: 20px;
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate .illustrate-item .illustrate-item-left > svg {
  width: 21px;
  fill: rgba(0, 0, 0, .45);
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate .illustrate-item-right > p {
  color: rgba(0, 0, 0, .88);
  font-size: 14px;
  line-height: 1.5;
}

.contenter .content .content-item.video .video-cover .void-describe .illustrate .illustrate-item-right > span {
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
  line-height: 1.5;
}

.contenter .content .content-item.video .quick-post-body #quick-post-text {
  height: calc(100vh - 540px) !important;
}

.ant-select-arrow svg {
  display: inline-block;
}

.ant-select-arrow .ant-select-arrow-icon svg {
  transition: transform .3s;
}


@keyframes loader-bars {
  0% {
    -webkit-transform: scaleY(0.2);
    transform: scaleY(0.2);
    transform: scaleY(0.2);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    transform: scaleY(1);
  }

}

</style>