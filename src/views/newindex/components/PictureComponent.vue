<template>
  <div class="box" style="margin-bottom: 17px;">
    <div class="top">
      <div class="banner"
           style="background-image: url(https://alist.reaicc.com/nas/image/jpeg/2024-04/1/50ef8c69-f823-4414-be5d-25e581867902.jpg); background-size: cover; background-position: center center;">
        <div class="content"><span>2023年短说团队年终总结</span></div>
      </div>
      <div class="identification">
        <div class="bg-picture"
             style="background-image: url(https://alist.reaicc.com/nas/image/jpeg/2024-04/1/f5cb6c26-f3bf-47f4-a6d0-c35c771f2c7a.jpg); background-size: cover; background-position: center center;">
          <div class="content"><span>短说PC端功能『门户DIY』重磅更新，暨2.5.0测试版更新通告</span>
          </div>
        </div>
        <div class="bg-picture"
             style="background-image: url(https://alist.reaicc.com/nas/image/jpeg/2024-04/1/e1d93718-3f0c-4994-984c-4359fa342cb5.jpg); background-size: cover; background-position: center center;">
          <div class="content"><span
          >重要通知，需在2024年3月底前完成！附上微信小程序和APP的完整备案流程！</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureComponent"
}
</script>
<style scoped>
.box .top {
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-content: space-between;
  height: 416px;
  margin-bottom: 16px;
  position: relative;
}

.box .top .banner {
  width: 848px;
  box-shadow: rgba(94, 92, 154, .06);
  overflow: hidden;
}

.box .top .banner {
  position: relative;
  background-size: 100% 100%;
  border-radius: 12px;
  background-color: rgba(207, 208, 218, .2);
  cursor: pointer;
}

.box .top .banner .content {
  transition: .5s;
  position: absolute;
  /*height: 56px;*/
  padding: 10px 22px;
  bottom: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  background: rgba(21, 21, 31, .6);
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.box .top .banner .content, .box .top .banner {
  width: 848px;
  box-shadow: rgba(94, 92, 154, .06);
  overflow: hidden;
}

/*右边图片*/
.box .top .identification {
  width: 320px;
  opacity: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.box .top .identification .bg-picture {
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  background-color: rgba(207, 208, 218, .2);
  overflow: hidden;
}

.box .top .identification .bg-picture .content {
  transition: .5s;
  position: absolute;
  display: block;
  width: 320px;
  /*height: 56px;*/
  padding: 10px 22px;
  bottom: 0;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  line-height: 36px;
  background: rgba(21, 21, 31, .6);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*设置手机端样式*/
@media screen and (max-width: 768px) {
  .box .top{
    margin: 12px;
    flex-direction: column;
    height: 300px;
  }
  .box .top .banner {
    /*margin: 5px;*/
    width: 100%;
    height: 50%;
  }
  .box .top .identification {
    width: 100%;
    flex-direction: row;
  }
  .box .top .identification .bg-picture{
    width: 49%;
    height: 140px;
  }
  .box .top .banner .content{
    font-size: 12px;
    line-height: 20px;
  }
  .box .top .identification .bg-picture .content{
    font-size: 12px;
    line-height: 20px;
  }
}
</style>