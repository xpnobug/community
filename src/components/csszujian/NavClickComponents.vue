<template>
  <div class="main">
    <div class="navbar">
      <input type="checkbox">
      <span></span>
      <span></span>
      <ul>
        <li><a href="#">点赞</a></li>
        <li><a href="#">关注</a></li>
        <li><a href="#">收藏</a></li>
        <li><a href="#">评论</a></li>
        <li><a href="#">分享</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavClickComponents"
}
</script>

<style scoped>
/* 设置所有元素的外边距和内边距为0 */
* {
  margin: 0;
  padding: 0;
}

/* 设置.main元素的高度为100%视口高度，设置背景为从#888到#888的线性渐变 */
/*.main {*/
/*  height: 100vh;*/
/*  background: linear-gradient(200deg, #888, #888);*/
/*}*/

/* 将.main元素、navbar元素和navbar ul元素都设置为flex布局，并且居中对齐 */
.main,
.navbar,
.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 设置navbar元素的位置为相对定位，设置内边距为20px，背景颜色为白色，边框半径为50px */
.navbar {
  position: relative;
  padding: 20px;
  /*background-color: #fff;*/
  /*border-radius: 50px;*/
}

/* 设置navbar元素中的input元素的宽度和高度为40px，透明度为0，鼠标指针为手型 */
.navbar input {
  width: 40px;
  height: 40px;
  opacity: 0;
  cursor: pointer;
}

/* 设置navbar元素中的ul元素的宽度为0，溢出隐藏，过渡效果为0.5s，设置white-space属性为nowrap */
.navbar ul {
  width: 0;
  overflow: hidden;
  transition: all 0.5s;
  white-space: nowrap;
}

/* 设置navbar元素中的ul元素中的li元素的列表样式为无，设置左右外边距为0px和15px */
.navbar ul li {
  list-style: none;
  margin: 0px 15px;
}

/* 设置navbar元素中的ul元素中的li元素中的a元素的文本装饰为无，字体大小为20px，字体粗细为700，颜色为#333 */
.navbar ul li a {
  text-decoration: none;
  /*font-size: 20px;*/
  font-weight: 700;
  color: var(--reaicc-fontcolor);
}

/* 设置navbar元素中的ul元素中的li元素中的a元素的鼠标悬停颜色为#fb7299 */
.navbar ul li a:hover {
  color: #fb7299;
}

/* 设置navbar元素中的span元素的位置为绝对定位，左侧距离为25px，宽度为30px，高度为4px，上侧距离为50%减去10px，边框半径为15px，背景颜色为#999，设置pointer-events属性为none，过渡效果为0.3s */
.navbar span {
  position: absolute;
  left: 25px;
  width: 30px;
  height: 4px;
  top: calc(50% - 10px);
  border-radius: 15px;
  background-color: #999;
  pointer-events: none;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}

/* 设置navbar元素中的第三个span元素的上侧距离为50%加上6px */
.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}

/* 当input元素被选中时，将ul元素的宽度设置为350px */
.navbar input:checked~ul {
  width: 350px;
}

/* 当input元素被选中时，将第二个span元素的上侧距离设置为50%减去2px，将其旋转-45度，背景颜色设置为#fb7299，过渡效果为0.3s */
.navbar input:checked~span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}

/* 当input元素被选中时，将第三个span元素的上侧距离设置为50%减去2px，将其旋转45度，背景颜色设置为#fb7299，过渡效果为0.3s */
.navbar input:checked~span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
</style>