<script lang="ts" setup>
import type {UnwrapRef} from 'vue';
import {reactive, ref, toRaw} from "vue";
import {account, emailAccount, phoneAccount, register, socialAuth} from "@/api/user";
import {message} from "ant-design-vue";
import type {Rule} from 'ant-design-vue/es/form';
import {createFromIconfontCN} from "@ant-design/icons-vue";
import {capImage, emailCode, smsCode} from "@/api/captcha";
import Verify from "@/components/verifition/Verify.vue";
import BgColorChange02 from "@/components/bgColor/BgColorChange02.vue";

// SVG 图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_yweqmtyzqoa.js',
});

// 表单状态接口
interface FormState {
  username?: string;
  password?: string;
  captcha?: string;
  uuid?: string;
}

// 使用 reactive 创建响应式表单状态
const formState: UnwrapRef<FormState> = reactive({
  username: '',
  password: '',
  captcha: '',
  uuid: '',
});

// 手机表单状态接口
interface PhoneFormState {
  phone?: string;
  captcha?: string;
}

// 使用 reactive 创建响应式手机表单状态
const phoneForm: UnwrapRef<PhoneFormState> = reactive({
  phone: '',
  captcha: ''
});

// 邮箱表单状态接口
interface EmailFormState {
  email?: string;
  captcha?: string;
}

// 使用 reactive 创建响应式邮箱表单状态
const emailForm: UnwrapRef<EmailFormState> = reactive({
  email: '',
  captcha: ''
});
// 表单验证规则
const rules: Record<string, Rule[]> = {
  username: [
    {required: true, message: '请输入您的用户名', trigger: 'change'},
    {min: 3, max: 5, message: '长度应为3到5个字符', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入您的密码', trigger: 'change'},
  ],
  captcha: [
    {required: true, message: '请输入验证码', trigger: 'change'},
  ],
};


// 表单引用
const formRef = ref();

const verifyRef = ref(null);

// 验证码图片
const captcha = ref([]);

// 更换验证码图片
const changeImg = () => {
  capImage().then(res => {
    captcha.value = res.data.data;
    formState.uuid = res.data.data.uuid;
  });
};
changeImg(); // 初始化加载验证码

// 验证码倒计时
const messageCodeVis = ref(false);
let countdown = ref(0);

const startCountdown = () => {
  const intervalId = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(intervalId);
      messageCodeVis.value = false;
    }
  }, 1000);
};

// 发送验证码处理
// 发送验证码处理
const sendCode = (type) => {
  let value, reg, errorMsg;

  // 根据类型设置不同的值、正则表达式和错误消息
  if (type === 'phone') {
    // 如果类型是手机
    value = phoneForm.phone;
    reg = /^1[3456789]\d{9}$/; // 手机号码的正则表达式
    errorMsg = '请输入正确的手机号码';
  } else if (type === 'email') {
    // 如果类型是邮箱
    value = emailForm.email;
    reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 邮箱的正则表达式
    errorMsg = '请输入正确的邮箱';
  } else {
    // 如果类型未知，显示错误消息
    return message.error('未知的类型');
  }

  // 检查值是否为空
  if (!value) {
    return message.error(type === 'phone' ? '请输入手机号码' : '请输入邮箱');
  }

  // 验证格式是否正确
  if (!reg.test(value)) {
    return message.error(errorMsg);
  }

  // 如果是邮箱且格式正确，调用 emailSend 函数发送验证码
  if (type === 'email') {
    emailSend();
  } else {
    // 显示验证码组件
    if (verifyRef.value) {
      verifyRef.value.show();
    }
  }
  // 开始倒计时
  countdown.value = 60;
};


// 验证码成功处理
const success = (v) => {
  smsCode(phoneForm.phone, v.captchaVerification).then(res => {
    if (res.status === 200) {
      message.success('验证码发送成功');
      messageCodeVis.value = true;
      startCountdown();
    }
  });
};
const emailSend = () => {
  emailCode(emailForm.email).then(res => {
    if (res.status === 200) {
      message.success('验证码发送成功');
      messageCodeVis.value = true;
      startCountdown();
    }
  })
}


// 通用登录处理函数
const handleLogin = async (loginData: any, loginType: string) => {
  let res;
  if (loginType === 'account') {
    res = await account(loginData);
  } else if (loginType === 'phone') {
    res = await phoneAccount(loginData); // 使用实际的 API 调用替换
  } else if (loginType === 'email') {
    res = await emailAccount(loginData); // 使用实际的 API 调用替换
  }

  if (res.status === 200) {
    const key = 'updatable';
    message.loading({content: '登录中...', key});
    setTimeout(() => {
      localStorage.setItem('token', res.data.data.tokenValue);
      localStorage.setItem('userId', res.data.data.loginId);
      message.success({content: '登录成功!', key, duration: 2});
      window.location.href = '/';
    }, 1000);
  }
};

// 提交表单
const onSubmit = async () => {
  try {
    // 验证表单
    await formRef.value.validate();

    // 检查用户名是否为空
    if (!formState.username) {
      return message.error('用户名不能为空');
    }

    // 检查密码是否为空
    if (!formState.password) {
      return message.error('密码不能为空');
    }

    // 检查验证码是否为空
    if (!formState.captcha) {
      return message.error('验证码不能为空');
    }

    // 检查UUID是否为空
    if (!formState.uuid) {
      return message.error('UUID不能为空');
    }

    // 构建登录数据
    const loginData = {
      username: formState.username, // 用户名
      password: formState.password, // 密码
      captcha: formState.captcha,   // 验证码
      uuid: formState.uuid          // UUID
    };

    // 调用登录处理函数
    await handleLogin(loginData, 'account');
  } catch (error) {
    // 如果表单验证失败，刷新验证码图片
    changeImg();
  }
};


// 提交手机表单
const onSubmitPhone = async () => {
  try {
    if (!phoneForm.phone) {
      return message.error('请输入手机号码');
    }
    const reg = /^1[3456789]\d{9}$/;
    if (!reg.test(phoneForm.phone)) {
      return message.error('请输入正确的手机号码');
    }
    if (!phoneForm.phone || !phoneForm.captcha) {
      return message.error('手机号码和验证码不能为空');
    }
    const loginData = {
      phone: phoneForm.phone,
      captcha: phoneForm.captcha
    };
    await handleLogin(loginData, 'phone');
  } catch (error) {
    console.error('验证错误', error);
  }
};
// 提交邮箱表单
const onSubmitEmail = async () => {
  // 检查邮箱是否为空
  if (!emailForm.email) {
    return message.error('请输入邮箱');
  }
  // 定义邮箱的正则表达式
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // 验证邮箱格式是否正确
  if (!emailReg.test(emailForm.email)) {
    return message.error('请输入正确的邮箱');
  }
  // 检查邮箱和验证码是否为空
  if (!emailForm.captcha) {
    return message.error('验证码不能为空');
  }
  // 构建登录数据
  const loginData = {
    email: emailForm.email,
    captcha: emailForm.captcha
  };
  // 调用登录处理函数
  await handleLogin(loginData, 'email');
};


// 提交注册表单
const upOnFinish = async (values: any) => {
  try {
    const res = await register(toRaw(formState));
    if (res.status === 200) {
      message.success("注册成功，请登录！");
    } else {
      message.error("注册失败，请检查账号和密码！");
    }
  } catch (error) {
    message.error("注册失败，请检查账号和密码！");
  }
};

//第三方认证登录
const thirdLogin = (type: string) => {
  socialAuth(type).then(res => window.location.href = res.data.data.authorizeUrl)
}

// 页面元素状态
const activeKey = ref('1');
const loading = ref<boolean>(false);

// 响应式状态，用于控制显示登录还是注册内容
const isSignUpMode = ref(false);
const showSignInContent = ref(true);
// 切换到注册模式
const switchToSignUp = () => {
  isSignUpMode.value = true;
};

// 切换到登录模式
const switchToSignIn = () => {
  isSignUpMode.value = false;
};

</script>
<template>
  <div :class="['container', { 'sign-up-mode': isSignUpMode }]">
    <BgColorChange02/>
    <div>
      <Verify ref="verifyRef" :captcha-type="'blockPuzzle'" :mode="'pop'" @success="success"/>
      <div class="forms-container">
        <transition name="fade">
          <!--  登录    -->
          <div v-if="!isSignUpMode" class="signin-signup">
            <a-tabs v-model:activeKey="activeKey" centered>
              <a-tab-pane key="1" tab="账号登录">
                <a-form
                    ref="formRef"
                    :model="formState"
                    :rules="rules"
                    action="#"
                    class="sign-in-form"
                    @finish="onSubmit">
                  <!--              <h2 class="title">登录</h2>-->
                  <div class="input-field">
                    <icon-font class="icon svg" type="icon-yonghu"/>
                    <a-input v-model:value="formState.username" placeholder="用户名" type="text"></a-input>
                  </div>
                  <div class="input-field">
                    <icon-font class="icon svg" type="icon-mima"/>
                    <a-input-password v-model:value="formState.password" placeholder="密码"></a-input-password>
                  </div>
                  <div class="input-field" style="display: flex;justify-content: space-evenly;align-items: center;">
                    <icon-font class="icon svg" style=" margin: 20px;" type="icon-zhucedenglu-yanzhengma"/>
                    <a-input v-model:value="formState.captcha" placeholder="验证码" type="text"></a-input>
                    <div>
                      <img :src="captcha.img" @click="changeImg">
                    </div>
                  </div>
                  <!--              <a-form-item :name="formName"></a-form-item>-->
                  <input class="btn solid" type="submit" value="立即登录"/>
                </a-form>
              </a-tab-pane>
              <a-tab-pane key="2" force-render tab="手机登录">
                <a-form
                    :model="phoneForm"
                    action="#"
                    class="sign-in-form"
                    @finish="onSubmitPhone">
                  <!--              <h2 class="title">登录</h2>-->
                  <div class="input-field">
                    <icon-font class="icon svg" type="icon-yonghu"/>
                    <a-input v-model:value="phoneForm.phone" placeholder="请输入手机号" type="text"></a-input>
                  </div>

                  <div class="input-field" style="display: flex;justify-content: space-evenly;align-items: center;">
                    <icon-font class="icon svg" style=" margin: 20px;" type="icon-zhucedenglu-yanzhengma"/>
                    <a-input v-model:value="phoneForm.captcha" placeholder="验证码" type="text"></a-input>
                    <a-space direction="vertical">
                      <a-space>
                        <div v-if="messageCodeVis" class="second-text">{{ countdown }}秒后重新获取</div>
                        <a-button v-else :loading="loading" type="text" @click="() => sendCode('phone')">获取验证码</a-button>
                      </a-space>
                    </a-space>
                  </div>
                  <!--              <a-form-item :name="formName"></a-form-item>-->
                  <input class="btn solid" type="submit" value="立即登录"/>
                </a-form>
              </a-tab-pane>
              <a-tab-pane key="3" force-render tab="邮箱登录">
                <a-form
                    :model="emailForm"
                    action="#"
                    class="sign-in-form"
                    @finish="onSubmitEmail">
                  <!--              <h2 class="title">登录</h2>-->
                  <div class="input-field">
                    <icon-font class="icon svg" type="icon-youxiang"/>
                    <a-input v-model:value="emailForm.email" placeholder="请输入邮箱" type="text"></a-input>
                  </div>

                  <div class="input-field" style="display: flex;justify-content: space-evenly;align-items: center;">
                    <icon-font class="icon svg" style=" margin: 20px;" type="icon-zhucedenglu-yanzhengma"/>
                    <a-input v-model:value="emailForm.captcha" placeholder="验证码" type="text"></a-input>
                    <a-space direction="vertical">
                      <a-space>
                        <div v-if="messageCodeVis" class="second-text">{{ countdown }}秒后重新获取</div>
                        <a-button v-else :loading="loading" type="text" @click="() => sendCode('email')">获取验证码</a-button>
                      </a-space>
                    </a-space>
                  </div>
                  <!--              <a-form-item :name="formName"></a-form-item>-->
                  <input class="btn solid" type="submit" value="立即登录"/>
                </a-form>
              </a-tab-pane>
            </a-tabs>
            <p class="social-text" style="text-align: center">其他登录方式</p>
            <div class="social-media">
              <a id="sign-in-wx" class="social-icon" href="#" @click="thirdLogin('github')">
                <icon-font class="icon svg" type="icon-github"/>
              </a>
              <a class="social-icon" href="#" @click="thirdLogin('gitee')">
                <icon-font class="icon svg" type="icon-gitee"/>
              </a>
              <a class="social-icon" href="#" @click="thirdLogin('weixin')">
                <icon-font class="icon svg" type="icon-a-weixin2"/>
              </a>
              <a class="social-icon" href="#" @click="thirdLogin('qq')">
                <icon-font class="icon svg" type="icon-a-QQ1"/>
              </a>
            </div>
          </div>
          <!--  注册   -->
          <div v-else class="signin-signup">
            <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                action="#" class="sign-up-form" @finish="upOnFinish">
              <h2 class="title">注册</h2>
              <div class="input-field">
                <icon-font class="icon svg" type="icon-yonghu"/>
                <a-input v-model:value="formState.username" placeholder="用户名" type="text"></a-input>
              </div>
              <div class="input-field">
                <icon-font class="icon svg" type="icon-youxiang"/>
                <a-input v-model:value="formState.email" placeholder="邮箱"></a-input>
              </div>
              <div class="input-field">
                <icon-font class="icon svg" type="icon-mima"/>
                <a-input-password v-model:value="formState.password" placeholder="密码"></a-input-password>
              </div>
              <!--          <a-form-item :name="formName"></a-form-item>-->
              <input class="btn" type="submit" value="注 册"/>
            </a-form>
          </div>
        </transition>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            没有账号？
            <button class="btn transparent" @click="switchToSignUp">注册</button>
          </div>
          <img alt="" class="image" src="@assets/img/log.svg"/>
        </div>
        <div class="panel right-panel">
          <div class="content">
            已有帐号？ 点此登录
            <button class="btn transparent" @click="switchToSignIn">登 录</button>
          </div>
          <img alt="" class="image" src="@assets/img/register.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* 过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.second-text {
  color: #e60707;
  font-size: 12px;
  width: max-content;
}

:deep(.ant-input) {
  background-color: #f0f0f0;
  box-shadow: none;
}

:deep(.ant-input-affix-wrapper) {
  background-color: transparent;
  border-style: none;
}

:deep(.ant-input-affix-wrapper-focused) {
  box-shadow: none;
}

:deep(.ant-form-item .ant-form-item-control-input) {
  min-height: 0;
}

.input-field input {
  font-size: small !important;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  /*left: 50%;*/
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}

.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  /*background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);*/
  background-color: var(--reaicc-nav-bg);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  /*display: none;*/
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }

  .signin-signup {
    width: 100%;
    top: 80%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 20%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }

  .panel .content {
    padding: 0.5rem 1rem;
  }

  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}

</style>