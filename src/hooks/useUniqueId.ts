import {onMounted, ref} from 'vue';

// 定义一个组合函数，用于生成基于 IP 地址、User-Agent 和当前日期的唯一标识符
const useUniqueId = (ipAddress, userAgent) => {
    const uniqueId = ref(''); // 创建一个响应式引用，用于存储生成的唯一标识符

    onMounted(async () => {
        // 组件挂载完成后执行哈希生成操作
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, ''); // 获取当前日期并格式化为YYYYMMDD形式
        const combinedString = `${ipAddress}${userAgent}${date}`; // 将 IP 地址、User-Agent 和日期组合成一个字符串
        uniqueId.value = await hashString(combinedString); // 生成哈希值并更新 uniqueId 的值
    });

    // 定义一个异步函数，用于对输入的字符串进行 SHA-256 哈希处理
    async function hashString(input) {
        const encoder = new TextEncoder(); // 创建一个文本编码器
        const data = encoder.encode(input); // 将输入字符串编码成 UTF-8 的 Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', data); // 使用 Web Crypto API 进行 SHA-256 哈希计算
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // 将 ArrayBuffer 转换为字节数组
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // 将每个字节转换为十六进制字符串并拼接
        return hashHex;
    }

    return {
        uniqueId // 返回包含唯一标识符的对象
    };
}

export default useUniqueId;
