<script lang="ts" setup>
import type {UnwrapRef} from 'vue';
import {onMounted, reactive, ref, toRaw} from "vue";
import {login, register} from "@/api/user";
import {message} from "ant-design-vue";
import type {Rule} from 'ant-design-vue/es/form';
import {createFromIconfontCN} from "@ant-design/icons-vue";
//svg图标
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_1898478_4559alb1b0i.js',
});

interface FormState {
  username: string;
  password: string;
  email: string;
  remember: boolean;
}

const formState: UnwrapRef<FormState> = reactive({
  username: '',
  password: '',
  email: '',
  remember: true
});


const rules: Record<string, Rule[]> = {
  username: [
    {required: true, message: '请输入您的用户名', trigger: 'change'},
    {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入您的密码', trigger: 'change'},
  ],
  email: [
    {required: true,message: '请输入您的邮箱', trigger: 'change'},
    {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
  ],
};
const upOnFinish = async (values: any) => {
  // 注册逻辑
  const res = await register(formState);
  if (res.status === 200) {
    message.success("注册成功，请登录！")
  } else {
    message.error("注册失败，请检查账号和密码！")
  }
};
const formRef = ref();

const loginOnFinish = async (values: any) => {
  const res = await login(formState);
  // 登录逻辑
  const key = 'updatable';
  console.log(res)
  if (res.status === 200) {
    message.loading({content: '登录中...', key});
    setTimeout(() => {
      // 将用户主键保存到localStorage
      console.log(res.data.data)
      localStorage.setItem('token', res.data.data.tokenValue);
      // 将用户主键保存到localStorage
      localStorage.setItem('userId', res.data.data.loginId);
      message.success({content: '登录成功!', key, duration: 2});
      // 登录成功后跳转到首页
      window.location.href = '/';
    }, 1000);
  }
};

const formName = ref('username');
const onSubmit = (val) => {
  console.log(val)
  formRef.value
      .validate()
      .then(() => {
        if (formState.username === '') {
          formName.value = 'username';
        }
        if (formState.password === '') {
          formName.value = "password";
        }
        console.log('values', formState, toRaw(formState));
      })
      .catch(error => {
        console.log('error', error);
      });
};
const onSubmitZc = (val) => {
  console.log(val)
  formRef.value
      .validate()
      .then(() => {
        if (formState.username === '') {
          formName.value = 'username';
        }
        if (formState.password === '') {
          formName.value = "password";
        }
        if (formState.email === '') {
          formName.value = "email";
        }
        console.log('values', formState, toRaw(formState));
      })
      .catch(error => {
        console.log('error', error);
      });
};

onMounted(() => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
})

</script>
<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <a-form
            ref="formRef"
            :model="formState"
            :rules="rules"
            action="#"
            class="sign-in-form" @finish="loginOnFinish">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <icon-font class="icon svg" type="icon-yonghu"/>
            <a-input v-model:value="formState.username" placeholder="用户名" type="text"></a-input>
          </div>
          <div class="input-field">
            <icon-font class="icon svg" type="icon-mima"/>
            <a-input-password v-model:value="formState.password" placeholder="密码"></a-input-password>
          </div>
          <a-form-item :name="formName"></a-form-item>
          <input class="btn solid" type="submit" value="登 录" @click="onSubmit"/>
          <!--          <p class="social-text">或者通过以下平台登录</p>-->
          <!--          <div class="social-media">-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-weixin"></i>-->
          <!--            </a>-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-qq"></i>-->
          <!--            </a>-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-alipay"></i>-->
          <!--            </a>-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-github"></i>-->
          <!--            </a>-->
          <!--          </div>-->
        </a-form>
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
          <a-form-item :name="formName"></a-form-item>
          <input class="btn" type="submit" value="注 册" @click="onSubmitZc"/>
          <!--          <p class="social-text">或者通过以下平台注册</p>-->
          <!--          <div class="social-media">-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-weixin"></i>-->
          <!--            </a>-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-qq"></i>-->
          <!--            </a>-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-alipay"></i>-->
          <!--            </a>-->
          <!--            <a class="social-icon" href="#">-->
          <!--              <i class="fab fa-github"></i>-->
          <!--            </a>-->
          <!--          </div>-->
        </a-form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <!--          <h3>新用户?</h3>-->
          <p>

          </p>
          没有账号？
          <button id="sign-up-btn" class="btn transparent">
            注册
          </button>
        </div>
        <img alt="" class="image" src="@assets/img/log.svg"/>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <!--          <h3>已经是我们自己人了吗?</h3>-->
          <p>

          </p>
          已有帐号？ 点此登录
          <button id="sign-in-btn" class="btn transparent">
            登 录
          </button>
        </div>
        <img alt="" class="image" src="@assets/img/register.svg"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
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
  /*width: 100%;*/
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
  border-radius: 55px;
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
  border-radius: 49px;
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
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
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
    top: 95%;
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
    top: 5%;
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