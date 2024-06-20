<template>
  <footer id="navigation">
    <div id="autoload" :class="{wait: autoWaitBool}" class="g-inline-center" data-indexdefault="1"
         data-lasttxt="没有更多了" data-normaltxt="加载更多" data-totalpages="21"
         data-waittxt="正在加载‥" v-text="autoStatusText.output"
         @click.stop="autoHandleClick"></div>
  </footer>
</template>

<script>
import {friendCircleList} from "@/api/article.ts";
import {getCurrentInstance, ref, inject} from "vue";
const userId = localStorage.getItem('userId');
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
        index: 1,
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
        setTimeout(() => {
          this.autoParam.index++;
          this.page.currentPage = this.autoParam.index;
          friendCircleList(this.page,userId ? userId : 'null').then(res => {
            this.$emit('send', res.data.data);
            // this.autoParam.elements.posts.insertAdjacentHTML('beforeend',html);
            this.autoStatus(this.autoParam.index < res.data.maxPage ? 'normal' : 'last');
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