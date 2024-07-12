<template>
  <div class="main-newchat"  >
    <div class="app-container">
      <button class="mode-switch" >
        <svg class="sun" fill="none" stroke="#fbb046" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs/><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg class="moon" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24"><defs/><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      </button>
      <div class="left-side">
        <div class="navigation">
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call" viewBox="0 0 24 24">
              <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hard-drive">
              <line x1="22" y1="12" x2="2" y2="12"/>
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
              <line x1="6" y1="16" x2="6.01" y2="16"/>
              <line x1="10" y1="16" x2="10.01" y2="16"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" viewBox="0 0 24 24">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
            </svg>
          </a>
        </div>
      </div>
<!--      <div class="app-main">-->
<!--        <div class="video-call-wrapper">-->
<!--          <div class="video-participant">-->
<!--            <div class="participant-actions">-->
<!--              <button class="btn-mute"></button>-->
<!--              <button class="btn-camera"></button>-->
<!--            </div>-->
<!--            <a href="#" class="name-tag">Andy Will</a>-->
<!--            <img src="https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant">-->
<!--          </div>-->
<!--          <div class="video-participant">-->
<!--            <div class="participant-actions">-->
<!--              <button class="btn-mute"></button>-->
<!--              <button class="btn-camera"></button>-->
<!--            </div>-->
<!--            <a href="#" class="name-tag">Emmy Lou</a>-->
<!--            <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="participant">-->
<!--          </div>-->
<!--          <div class="video-participant">-->
<!--            <div class="participant-actions">-->
<!--              <button class="btn-mute"></button>-->
<!--              <button class="btn-camera"></button>-->
<!--            </div>-->
<!--            <a href="#" class="name-tag">Tim Russel</a>-->
<!--            <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="participant">-->
<!--          </div>-->
<!--          <div class="video-participant">-->
<!--            <div class="participant-actions">-->
<!--              <button class="btn-mute"></button>-->
<!--              <button class="btn-camera"></button>-->
<!--            </div>-->
<!--            <a href="#" class="name-tag">Jessica Bell</a>-->
<!--            <img src="https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="participant">-->
<!--          </div>-->
<!--          <div class="video-participant">-->
<!--            <div class="participant-actions">-->
<!--              <button class="btn-mute"></button>-->
<!--              <button class="btn-camera"></button>-->
<!--            </div>-->
<!--            <a href="#" class="name-tag">Ryan Patrick</a>-->
<!--            <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="participant">-->
<!--          </div>-->
<!--          <div class="video-participant">-->
<!--            <div class="participant-actions">-->
<!--              <button class="btn-mute"></button>-->
<!--              <button class="btn-camera"></button>-->
<!--            </div>-->
<!--            <a href="#" class="name-tag">Tina Cate</a>-->
<!--            <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="participant">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="video-call-actions ">-->
<!--          <button class="video-action-button mic"></button>-->
<!--          <button class="video-action-button camera"></button>-->
<!--          <button class="video-action-button maximize"></button>-->
<!--          <button class="video-action-button endcall">Leave</button>-->
<!--          <button class="video-action-button magnifier">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" viewBox="0 0 24 24">-->
<!--              <circle cx="11" cy="11" r="8"/>-->
<!--              <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>-->
<!--            </svg>-->
<!--            <span>100%</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-out">-->
<!--              <circle cx="11" cy="11" r="8"/>-->
<!--              <line x1="21" y1="21" x2="16.65" y2="16.65"/>-->
<!--              <line x1="8" y1="11" x2="14" y2="11"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
      <div class="right-side" :class="{ show: isRightSideExpanded }">
        <button class="btn-close-right" @click="toggleRightSide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x-circle" viewBox="0 0 24 24">
            <defs></defs>
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9l-6 6M9 9l6 6"></path>
          </svg>
        </button>
        <div class="chat-container">
          <div class="chat-header">
            <button class="chat-header-button">
              Live Chat
            </button>
<!--            <h3>new Chat</h3>-->
          </div>

          <div class="chat-area" ref="messagesContainer">
            <div class="message-wrapper reverse">
              <div class="profile-picture">
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="pp">
              </div>
              <div class="message-content">
                <p class="name">Emmy Lou</p>
                <div class="message">Good morning!🌈</div>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="profile-picture">
                <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="pp">
              </div>
              <div class="message-content">
                <p class="name">Tim Russel</p>
                <div class="message">New design document⬇️</div>
                <div class="message-file">
                  <div class="icon sketch">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#ffd54f" d="M96 191.02v-144l160-30.04 160 30.04v144z"/>
                      <path fill="#ffecb3" d="M96 191.02L256 16.98l160 174.04z"/>
                      <path fill="#ffa000" d="M0 191.02l256 304 256-304z"/>
                      <path fill="#ffca28" d="M96 191.02l160 304 160-304z"/>
                      <g fill="#ffc107">
                        <path d="M0 191.02l96-144v144zM416 47.02v144h96z"/>
                      </g>
                    </svg>
                  </div>
                  <div class="file-info">
                    <div class="file-name">NewYear.sketch</div>
                    <div class="file-size">120 MB</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="profile-picture">
                <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp">
              </div>
              <div class="message-content">
                <p class="name">Ryan Patrick</p>
                <div class="message">Hi team!❤️</div>
                <div class="message">I downloaded the file <a class="mention">@timrussel</a></div>
              </div>
            </div>
            <div :class="msg.type === 'sent' ? ' message-wrapper reverse':' message-wrapper'" v-for="(msg, index) in messages" :key="index">
              <div class="profile-picture">
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="pp">
              </div>
              <div class="message-content">
                <p class="name">{{ msg.name }}</p>
                <template v-if="msg.type === 'sent'">
                  <div class="message">{{ msg.content }}</div>
                </template>
                <template v-else>
                  <div class="message">{{ msg.content }}</div>
                </template>
              </div>
            </div>
          </div>
          <div class="chat-typing-area-wrapper">
            <div class="chat-typing-area">
              <input v-model="messageMe" @keyup.enter="sendMessage" placeholder="Type your meesage..." class="chat-input">
              <button class="send-button" @click="sendMessage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send" viewBox="0 0 24 24">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="participants">
          <div class="participant profile-picture">
            <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="pp">
          </div>
          <div class="participant profile-picture">
            <img src="https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="pp">
          </div>
          <div class="participant profile-picture">
            <img src="https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="pp">
          </div>
          <div class="participant profile-picture">
            <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp">
          </div>
          <div class="participant-more">2+</div>
        </div>
      </div>
      <button class="expand-btn"  @click="toggleRightSide">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      </button>
    </div>
  </div>

</template>


<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import {message} from "ant-design-vue"; // 导入 Vue 3 的组合式 API

const isRightSideExpanded = ref(true); // 定义一个响应式变量，表示右侧栏是否展开
const toggleRightSide = () => {
  isRightSideExpanded.value = !isRightSideExpanded.value; // 切换右侧栏状态
};

// WebSocket 逻辑
const messages = ref<{ type: string; name:string, content: string }[]>([]); // 定义一个响应式变量，用于存储消息列表
const messageMe = ref(''); // 定义一个响应式变量，用于绑定输入框的内容
let socket: WebSocket | null = null; // 定义一个变量用于存储 WebSocket 实例
const messagesContainer = ref<HTMLElement | null>(null); // 定义一个变量用于存储消息容器的引用

// 定义发送消息的方法
const sendMessage = () => {
  console.log("发送的消息内容: ", messageMe.value); // 打印发送的消息内容
  //判断输入的内容不能为空
  if (messageMe.value === '') {
    message.warn("内容不能为空")
    return; // 如果输入的内容为空，则不发送消息
  }
  // 添加我发送的消息到列表
  messages.value.push({ type: 'sent', name:'user', content: messageMe.value });
  // 检查 WebSocket 连接是否打开
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(messageMe.value); // 通过 WebSocket 发送消息
    messageMe.value = ''; // 清空输入框
  }
  scrollToBottom(); // 滚动到消息列表底部
};

// 滚动到消息列表底部的方法
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

// 组件挂载时执行的逻辑
onMounted(() => {
  socket = new WebSocket('ws://localhost:8070/websocket'); // 替换为你的 WebSocket URL

  // WebSocket 连接打开时的回调
  socket.onopen = () => {
    console.log('WebSocket 连接成功');
  };

  // 收到 WebSocket 消息时的回调
  socket.onmessage = (event) => {
    console.log('收到消息:', event.data);
    messages.value.push({ type: 'ai', name:'ChatGpt', content: event.data });
    console.log('消息:', messages.value);
    scrollToBottom(); // 滚动到消息列表底部
  };

  // WebSocket 连接关闭时的回调
  socket.onclose = () => {
    console.log('WebSocket 连接关闭');
  };

  // WebSocket 发生错误时的回调
  socket.onerror = (error) => {
    console.error('WebSocket 错误:', error);
  };
});

// 组件卸载时执行的逻辑
onUnmounted(() => {
  if (socket) {
    socket.close(); // 关闭 WebSocket 连接
  }
});
</script>

<style scoped>
/** {*/
/*  box-sizing: border-box;*/
/*}*/

/*html, .main-newchat {*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  overflow: hidden;*/
/*}*/
.main-newchat{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

button {
  outline: none;
  transition: 0.2s;
  cursor: pointer;
}
button:hover {
  opacity: 0.7;
}

.main-newchat.dark .mic {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mic-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/%3E%3Cpath d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8'/%3E%3C/svg%3E%0A");
}
.main-newchat.dark .camera {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-camera-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56'/%3E%3C/svg%3E%0A");
}
.main-newchat.dark .maximize {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-maximize' viewBox='0 0 24 24'%3E%3Cpath d='M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'/%3E%3C/svg%3E%0A");
}
.main-newchat.dark .magnifier {
  color: #fff;
}
.main-newchat.dark .chat-header {
  border-color: var(--message-bg);
}
.main-newchat.dark .btn-close-right {
  color: #fff;
}

a {
  text-decoration: none;
}

.app-container {
  background-color: var(--app-background);
  width: 100%;
  height: 100%;
  font-family: "DM Sans", sans-serif;
  display: flex;
  justify-content: center;
  transition: 0.2s;
}

.left-side {
  position: relative;
  padding: 16px;
  flex-basis: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.navigation {
  display: flex;
  flex-direction: column;
  background-color: var(--navigation-bg);
  padding: 24px;
  border-radius: 10px;
  box-shadow: var(--navigation-box-shadow);
}

.nav-link + .nav-link {
  margin-top: 32px;
}

.nav-link:hover svg {
  color: #3d42df;
}

.icon svg {
  width: 24px;
  height: 24px;
  color: var(--link-color);
  transition: 0.2s ease-in;
}

.right-side {
  /*margin-left: auto;*/
  flex-basis: 630px;
  /*height: 100%;*/
  padding: 16px;
  position: relative;
  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
}
.right-side.show {
  display: block;
  transform: translateX(0);
  padding-top: 84px;
}

.chat-container {
  background-color: var(--chat-background);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 72px);
}

.chat-header {
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
}

.chat-header-button {
  background-color: var(--main-color);
  padding: 12px 16px 12px 40px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M479.9 187.52l-90.19 68.53v-52.6a20 20 0 00-20-20H20a20 20 0 00-20 20V492a20 20 0 0020 20h349.71a20 20 0 0020-20v-52.6l90.18 68.52c13.05 9.91 32.1.67 32.1-15.92V203.45c0-16.5-18.94-25.92-32.1-15.93zM349.7 472H40V223.45h309.71zM472 451.68l-82.29-62.53V306.3L472 243.77zM87.96 79.24C129.62 28.88 190.86 0 256 0c65.13 0 126.37 28.88 168.03 79.24a20 20 0 01-30.82 25.5A177.6 177.6 0 00256 40a177.6 177.6 0 00-137.21 64.73 20 20 0 11-30.83-25.5zm240.36 32.21a20 20 0 11-21.02 34.03 97.57 97.57 0 00-51.3-14.53 97.6 97.6 0 00-51.31 14.53 20 20 0 11-21.02-34.03A137.53 137.53 0 01256 90.95c25.59 0 50.6 7.09 72.32 20.5zm0 0'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center left 12px;
  background-size: 16px;
  font-size: 14px;
}

.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.profile-picture {
  border-radius: 8px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;
}
.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-wrapper {
  display: flex;
}

.name {
  margin: 0;
  line-height: 16px;
  font-size: 12px;
  font-weight: 700;
  color: var(--message-text);
}

.message {
  margin-top: 8px;
  background-color: var(--message-bg);
  padding: 8px 16px;
  border-radius: 0 12px 12px 12px;
  font-size: 12px;
  line-height: 16px;
  max-width: calc(100% - 32px);
  color: var(--message-text);
}

.message-wrapper {
  padding: 16px 0;
}
.message-wrapper.reverse {
  flex-direction: row-reverse;
}
.message-wrapper.reverse .message {
  background-color: var(--message-bg-2);
  color: #fff;
  margin-left: auto;
  border-radius: 16px 0px 16px 16px;
}
.message-wrapper.reverse .profile-picture {
  margin-right: 0px;
  margin-left: 12px;
}
.message-wrapper.reverse .name {
  text-align: right;
}

.message-file {
  border: 1px solid var(--message-bg);
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
}
.message-file .sketch {
  border-radius: 4px;
  padding: 2px;
  background-color: #fdeee2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}
.message-file .sketch svg {
  width: 20px;
  height: 20px;
}

.file-info {
  flex: 1;
  padding: 0 40px 0 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23b8b8b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-download' viewBox='0 0 24 24'%3E%3Cpath d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3'/%3E%3C/svg%3E%0A");
  background-position: center right 12px;
  background-size: 20px;
  background-repeat: no-repeat;
  font-size: 12px;
}

.file-name {
  color: var(--message-text);
}

.file-size {
  color: #b8b8b8;
}

.mention {
  color: #7c80fd;
}

.chat-typing-area-wrapper {
  padding: 16px;
}

.chat-typing-area {
  display: flex;
  border-radius: 10px;
  padding: 8px;
  box-shadow: var(--navigation-box-shadow);
  background-color: var(--message-bg);
}
.dark .chat-typing-area {
  box-shadow: none;
}

.chat-input {
  border: none;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  color: var(--message-text);
  flex: 1;
  background-color: transparent;
}
.chat-input:placeholder {
  color: var(--placeholder-text);
}

.send-button {
  color: #fff;
  background-color: var(--main-color);
  border-radius: 8px;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.send-button svg {
  width: 20px;
  height: 20px;
}

.app-main {
  flex: 1;
  width: 100%;
  padding: 72px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-call-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}

.video-participant {
  width: 33.3%;
  height: 50%;
  position: relative;
}
.video-participant img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name-tag {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 15, 47, 0.5);
  border-radius: 4px;
  padding: 4px 12px;
}

.participant-actions {
  position: absolute;
  display: flex;
  left: 12px;
  top: 12px;
}

.btn-mute, .btn-camera {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(0, 15, 47, 0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  border: none;
}

.btn-mute {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mic-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/%3E%3Cpath d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8'/%3E%3C/svg%3E%0A");
  margin-right: 4px;
}

.btn-camera {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-camera-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56'/%3E%3C/svg%3E%0A");
}

.video-call-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 64px;
  max-width: 500px;
}

.video-action-button {
  background-repeat: no-repeat;
  background-size: 24px;
  border: none;
  height: 48px;
  margin: 0 8px;
  box-shadow: var(--navigation-box-shadow);
  border-radius: 8px;
  width: 48px;
  cursor: pointer;
  outline: none;
  background-color: var(--button-bg);
}
.video-action-button.mic {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%232c303a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mic-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/%3E%3Cpath d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8'/%3E%3C/svg%3E%0A");
  background-position: center;
}
.video-action-button.camera {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%232c303a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-camera-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56'/%3E%3C/svg%3E%0A");
  background-position: center;
}
.video-action-button.maximize {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%232c303a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-maximize' viewBox='0 0 24 24'%3E%3Cpath d='M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3'/%3E%3C/svg%3E%0A");
  background-position: center;
}
.video-action-button.endcall {
  color: #ff1932;
  width: auto;
  font-size: 14px;
  padding-left: 42px;
  padding-right: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff1932' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-phone-missed'%3E%3Cline x1='23' y1='1' x2='17' y2='7'/%3E%3Cline x1='17' y1='1' x2='23' y2='7'/%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'/%3E%3C/svg%3E");
  background-size: 20px;
  background-position: center left 12px;
}
.video-action-button.magnifier {
  padding: 0 12px;
  display: flex;
  align-items: center;
  width: auto;
  flex-grow: 0;
  color: #2c303a;
}
.video-action-button.magnifier svg {
  width: 20px;
  flex-shrink: 0;
}
.video-action-button.magnifier span {
  display: block;
  margin: 0 16px;
}

.participants {
  display: flex;
  background-color: var(--button-bg);
  box-shadow: var(--navigation-box-shadow);
  margin-top: 16px;
  padding: 12px;
  border-radius: 8px;
  max-width: 232px;
  margin-left: auto;
}

.participant-more {
  background-color: #e1e0e1;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #636181;
  font-weight: 700;
  border-radius: 8px;
  min-width: 32px;
}

.mode-switch {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 36px;
  background-color: var(--chat-background);
  border: none;
  color: #ddd;
  outline: none;
  cursor: pointer;
  box-shadow: var(--navigation-box-shadow);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  transform-origin: center;
}
.mode-switch svg {
  width: 0;
  height: 24px;
  transition: all 0.3s ease-in;
  transform-origin: center;
}
.mode-switch .moon {
  opacity: 0;
}
.mode-switch .sun {
  width: 24px;
}

.dark .moon {
  opacity: 1;
  width: 24px;
}

.dark .sun {
  opacity: 0;
  width: 0;
}

.expand-btn {
  position: absolute;
  right: 32px;
  top: 24px;
  border: none;
  background-color: var(--chat-background);
  border-radius: 4px;
  padding: none;
  color: var(--message-text);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: none;
}
.expand-btn.show {
  display: flex;
}

.btn-close-right {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--light-font);
  outline: none;
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 900px) {

  .expand-btn {
    display: block;
  }

  .right-side {
    display: none;
    position: absolute;
    right: 0px;
    background-color: var(--chat-background);
    transform: translateX(100%);
    z-index: 2;
    width: 100%;
    padding: 0;
    height: 100%;
  }
  .right-side.show {
    transform: translateX(0);
  }

  .btn-close-right {
    display: block;
  }
}
@media screen and (max-width: 900px) {
  .left-side {
    display: none;
  }

  .app-main {
    padding: 72px 16px 16px 16px;
  }

  .expand-btn {
    right: 16px;
  }

  .mode-switch {
    left: 16px;
  }

  .video-call-actions {
    padding-top: 32px;
  }

  .video-action-button {
    width: 32px;
    height: 32px;
    background-size: 14px;
    margin: 0 4px;
  }

  .video-action-button.endcall {
    background-size: 14px;
    font-size: 12px;
    padding-left: 36px;
  }

  .video-action-button.magnifier svg {
    width: 14px;
  }

  .video-action-button.magnifier span {
    margin: 0 4px;
    font-size: 12px;
  }
}
@media screen and (max-width: 520px)  {
  .video-participant {
    width: 50%;
    height: 33.3%;
  }
}
</style>
