<template>
<div class="lunbo">
  <div class="container">
    <div class="card" style="--d:0;">
      <div class="content">
        <div class="img">
          <img src="https://alist.reaicc.com/nas/image/jpeg/2024-06/1/0e6a4966-e5f7-4d8b-8bdc-4bba21148e4a.jpg" alt="">
        </div>
        <div class="detail">
          <span>若冰儿（RuoBing）</span>
          <p>寻找真爱的微笑使者。</p>
        </div>
      </div>
      <a href="#">关注</a>
    </div>
    <div class="card" style="--d:1;">
      <div class="content">
        <div class="img">
          <img src="https://alist.reaicc.com/nas/image/jpeg/2024-06/1/75f92c87-3def-49f5-8cbe-fe59ab021823.jpg" alt="">
        </div>
        <div class="detail">
          <span>李晓雪（Lixiaoxue）</span>
          <p>用心灵构建美好的婚姻。</p>
        </div>
      </div>
      <a href="#">关注</a>
    </div>
    <div class="card" style="--d:2;">
      <div class="content">
        <div class="img">
          <img src="https://alist.reaicc.com/nas/image/jpeg/2024-06/1/5097e682-9c63-41cb-b66f-97dd7181d36d.jpg" alt="">
        </div>
        <div class="detail">
          <span>何璐（Helu）</span>
          <p>相信缘分，等待幸福的到来。</p>
        </div>
      </div>
      <a href="#">关注</a>
    </div>
    <div class="card" style="--d:3;">
      <div class="content">
        <div class="img">
          <img src="https://alist.reaicc.com/nas/image/jpeg/2024-06/1/c2fd62cc-2b7c-4c09-85fe-92da6b9ed398.jpg" alt="">
        </div>
        <div class="detail">
          <span>谷亚楠（Guyanan）</span>
          <p>热情洋溢，寻找属于我的爱情。</p>
        </div>
      </div>
      <a href="#">关注</a>
    </div>
    <div class="card" style="--d:4;">
      <div class="content">
        <div class="img">
          <img src="https://alist.reaicc.com/nas/image/jpeg/2024-06/1/c5858cbb-85e0-4198-ab78-7e5372152ffb.jpg" alt="">
        </div>
        <div class="detail">
          <span>何瑞（Herui）</span>
          <p>勇敢追求幸福，不断向前。</p>
        </div>
      </div>
      <a href="#">关注</a>
    </div>
  </div>
  <div class="register">
    <p>60秒完成注册，幸福一辈子!</p>
    <div class="btn">免费注册</div>
  </div>
</div>
</template>

<script>
export default {
  name: "LunBoCompentes"
}
</script>

<style scoped>


.lunbo {
  height: 100vh; /* 设置.lunbo元素的高度为视口高度 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background: linear-gradient(200deg, #fda09b, #918ef9); /* 设置背景为200度的线性渐变色 */
}

.container {
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative; /* 相对定位 */
  width: 500px; /* 宽度为500px */
  height: 300px; /* 高度为300px */
}

.card {
  width: 430px; /* 宽度为430px */
  height: 100px; /* 高度为100px */
  background-color: #fff; /* 背景颜色为白色 */
  border-radius: 100px 20px 20px 100px; /* 圆角设置 */
  position: absolute; /* 绝对定位 */
  padding: 0 20px; /* 内边距 */
  display: flex; /* 使用flex布局 */
  justify-content: space-between; /* 项目之间均匀分布 */
  align-items: center; /* 垂直居中 */
  opacity: 0; /* 初始透明度为0 */
  animation: animate 10s linear infinite; /* 应用名为animate的动画，持续10秒，线性变化，无限循环 */
  animation-delay: calc(2s * var(--d)); /* 动画延迟时间根据变量--d计算 */
}

/* 鼠标移入,动画暂停 */
.container:hover .card {
  animation-play-state: paused; /* 鼠标悬停时，卡片动画暂停 */
}

.card .img {
  width: 90px; /* 宽度为90px */
  height: 90px; /* 高度为90px */
  position: absolute; /* 绝对定位 */
  left: 0; /* 左边距为0 */
  top: 0; /* 上边距为0 */
  background-color: #fff; /* 背景颜色为白色 */
  padding: 5px; /* 内边距 */
  border-radius: 50%; /* 圆角设置 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* 设置阴影 */
}

.card .img img {
  width: 100%; /* 图片宽度100% */
  height: 100%; /* 图片高度100% */
  object-fit: cover; /* 图片填充父容器，保持比例 */
  border-radius: 50%; /* 圆角设置 */
}

.card .content {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中 */
}

.card .detail {
  margin-left: 100px; /* 左边距为100px */
}

.card .detail span {
  display: block; /* 设置为块级元素 */
  font-size: 18px; /* 字体大小为18px */
  font-weight: 600; /* 字体加粗 */
  margin-bottom: 8px; /* 底部外边距为8px */
}

.card a {
  font-size: 14px; /* 字体大小为14px */
  text-decoration: none; /* 文本装饰为无 */
  background: linear-gradient(to bottom, #fbc5ed, #a6c1ee); /* 背景为垂直渐变色 */
  padding: 7px 18px; /* 内边距 */
  color: #fff; /* 文本颜色为白色 */
  border-radius: 25px; /* 圆角设置 */
}

/* 定义动画 */
@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(100%) scale(0.5);
  }
  /* 省略部分关键帧动画定义 */
}

.register {
  width: 400px; /* 宽度为400px */
  height: 200px; /* 高度为200px */
  background-color: rgba(0, 0, 0, 0.65); /* 背景颜色为带透明度的黑色 */
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.5); /* 设置阴影 */
  padding: 0 30px; /* 内边距 */
  border-radius: 5px; /* 圆角设置 */
  margin-left: 30px; /* 左边距为30px */
}

.register p {
  color: #fff; /* 文本颜色为白色 */
  font-size: 24px; /* 字体大小为24px */
  line-height: 86px; /* 行高为86px */
  text-align: center; /* 文本居中对齐 */
  height: 80px; /* 高度为80px */
  border-bottom: 1px solid #eee; /* 底部边框为1px实线，颜色为浅灰色 */
}

.register .btn {
  height: 60px; /* 高度为60px */
  line-height: 60px; /* 行高为60px */
  font-size: 24px; /* 字体大小为24px */
  border-radius: 4px; /* 圆角设置 */
  padding: 0 20px; /* 内边距 */
  margin-top: 20px; /* 上边距为20px */
  text-align: center; /* 文本居中对齐 */
  color: #fff; /* 文本颜色为白色 */
  background: linear-gradient(-135deg, #856df1, #a468ef); /* 背景为从左上到右下的渐变色 */
  cursor: pointer; /* 鼠标指针样式为手型 */
}
</style>