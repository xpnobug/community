<script lang="ts" setup>
import {computed, reactive, ref} from 'vue'
import {login, register} from "@/api/user";
import { message } from 'ant-design-vue';

const isLogin = ref(true);
const signupForm = ref<HTMLElement | null>(null);
const loginForm = ref<HTMLElement | null>(null);

const toggleForm = (form: string) => {
  if (form === 'login') {
    signupForm.value?.classList.add('slide-up');
    loginForm.value?.classList.remove('slide-up');
    isLogin.value = true;
  } else {
    signupForm.value?.classList.remove('slide-up');
    loginForm.value?.classList.add('slide-up');
    isLogin.value = false;
  }
};

interface FormState {
  username: string;
  password: string;
  email: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  email: '',
  remember: true,
});
const upOnFinish = async (values: any) => {
  // 注册逻辑
  const res = await register(formState);
  if (res.status === 200){
    message.success("注册成功，请登录！")
  }
};
// const upOnFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };

const loginOnFinish = async (values: any) => {
  // 登录逻辑
  const key = 'updatable';
  const res = await login(formState);
  if (res.status === 200){
    message.loading({ content: '登录中...', key });
    setTimeout(() => {
      message.success({ content: '登录成功!', key, duration: 2 });
      // 登录成功后跳转到首页
      window.location.href = '/';
    }, 1000);
  }
};

const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<template>
  <div class="body">
    <div class="form-structor">
      <div ref="signupForm" :class="{ 'slide-up': isLogin }" class="signup">
        <h2 class="form-title" @click="toggleForm('signup')">注册</h2>
        <!--        <div class="form-holder">-->
        <!--          <input type="text" class="input" placeholder="Name" />-->
        <!--          <input type="email" class="input" placeholder="Email" />-->
        <!--          <input type="password" class="input" placeholder="Password" />-->
        <!--        </div>-->
        <!--        <button class="submit-btn">注册</button>-->
        <a-form
            :label-col="{ span: 8 }"
            :model="formState"
            class="form-holder"
            @finish="upOnFinish"
        >
          <a-form-item
              :rules="[{ required: true, message: '请输入您的账号!' }]"
              label="账号"
              name="username"
          >
            <a-input v-model:value="formState.username"></a-input>
          </a-form-item>

          <a-form-item
              :rules="[{ required: true, message: '请输入您的邮箱!' }]"
              label="邮箱"
              name="email"
          >
            <a-input v-model:value="formState.email"></a-input>
          </a-form-item>

          <a-form-item
              :rules="[{ required: true, message: '请输入您的密码!' }]"
              label="密码"
              name="password"
          >
            <a-input-password v-model:value="formState.password">
            </a-input-password>
          </a-form-item>


          <a-form-item>
            <a-button class="submit-btn" html-type="submit" type="primary">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div ref="loginForm" class="login">
        <div class="center">
          <h2 class="form-title" @click="toggleForm('login')">登录</h2>
          <!--          <div class="form-holder">-->
          <!--            <input type="email" class="input" placeholder="Email" />-->
          <!--            <input type="password" class="input" placeholder="Password" />-->
          <!--          </div>-->
          <a-form
              :label-col="{ span: 8 }"
              :model="formState"
              class="form-holder"
              name="normal_login"
              @finish="loginOnFinish"
          >
            <a-form-item
                :rules="[{ required: true, message: '请输入您的账号!' }]"
                label="账号"
                name="username"
            >
              <a-input v-model:value="formState.username">
              </a-input>
            </a-form-item>

            <a-form-item
                :rules="[{ required: true, message: '请输入您的密码!' }]"
                label="密码"
                name="password"
            >
              <a-input-password v-model:value="formState.password"></a-input-password>
            </a-form-item>

            <a-form-item>
              <a-form-item name="remember" no-style>
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
              </a-form-item>
              <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>

            <a-form-item>
              <a-button class="submit-btn" html-type="submit" type="primary">
                登录
              </a-button>
            </a-form-item>
          </a-form>

          <!--          <button class="submit-btn">登录</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.body {
  position: relative;
  min-height: 100vh;
  background-color: #E1E8EE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.form-structor {
  background-color: #222;
  border-radius: 15px;
  height: 550px;
  width: 350px;
  position: relative;
  overflow: hidden;
}

.form-structor::after {
  content: "";
  opacity: 0.8;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 500px;
  background-image: url("https://alist.reaicc.com/nas/image/jpeg/2024-04/1/4c8e78af-38cd-4efc-9738-98a6967096d7.jpg");
}

.form-structor .signup {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}

.form-structor .signup.slide-up {
  top: 5%;
  -webkit-transform: translate(-50%, 0%);
  -webkit-transition: all 0.3s ease;
}

.form-structor .signup.slide-up .form-holder, .form-structor .signup.slide-up .submit-btn {
  opacity: 0;
  visibility: hidden;
}

.form-structor .signup.slide-up .form-title {
  font-size: 1em;
  cursor: pointer;
}

.form-structor .signup.slide-up .form-title span {
  margin-right: 5px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}

.form-structor .signup .form-title {
  color: #fff;
  font-size: 1.7em;
  text-align: center;
}

.form-structor .signup .form-title span {
  color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
}

.form-structor .signup .form-holder {
  border-radius: 15px;
  /*background-color: #fff;*/
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}

.form-structor .signup .form-holder .input {
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;
}

.form-structor .signup .form-holder .input:last-child {
  border-bottom: 0;
}

.form-structor .signup .form-holder .input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.form-structor .signup .submit-btn {
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.7);
  border: 0;
  border-radius: 15px;
  display: block;
  /*margin: 15px auto;*/
  /*padding: 15px 45px;*/
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}

.form-structor .signup .submit-btn:hover {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}

.form-structor .login {
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -20px;
  -webkit-transform: translate(-50%, 0);
  background-color: #fff;
  width: 200%;
  height: 250px;
  border-radius: 50%;
  z-index: 4;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login .center {
  position: absolute;
  top: calc(50% - 10%);
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  width: 65%;
  z-index: 5;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .form-title {
  color: #000;
  font-size: 1.7em;
  text-align: center;
}

.form-structor .login .center .form-title span {
  color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .form-holder {
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #eee;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .form-holder .input {
  border: 0;
  outline: none;
  box-shadow: none;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-size: 12px;
}

.form-structor .login .center .form-holder .input:last-child {
  border-bottom: 0;
}

.form-structor .login .center .form-holder .input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.form-structor .login .center .submit-btn {
  background-color: #6B92A4;
  color: rgba(255, 255, 255, 0.7);
  border: 0;
  border-radius: 15px;
  display: block;
  /*margin: 15px auto;*/
  /*padding: 15px 45px;*/
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login .center .submit-btn:hover {
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
}

.form-structor .login.slide-up {
  top: 90%;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .center {
  top: 10%;
  -webkit-transform: translate(-50%, 0%);
  -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .form-holder, .form-structor .login.slide-up .submit-btn {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .form-title {
  font-size: 1em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
}

.form-structor .login.slide-up .form-title span {
  margin-right: 5px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: all 0.3s ease;
}
</style>