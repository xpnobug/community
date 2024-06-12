import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import viteCompression from 'vite-plugin-compression'
import seoPrerender from 'vite-plugin-seo-prerender'

const routes = [
  { path: '/' },
  // 其他路由...
]
// 提取路由路径
function getPrerenderRoutes() {
  return routes.map(route => route.path)
}
export default defineConfig({
  plugins: [vue(),
    viteCompression({
      verbose: true, // 启用日志输出，可以设置为 false 关闭
      disable: false, // 是否禁用压缩，默认为 false，即启用压缩
      deleteOriginFile: false, // 是否删除源文件，默认为 false，即不删除
      threshold: 5120, // 压缩前最小文件大小，单位为字节，小于该值的文件不会被压缩
      algorithm: 'gzip', // 压缩算法，这里使用 gzip
      ext: '.gz' // 压缩后的文件扩展名
    }),
    seoPrerender({
      routes: getPrerenderRoutes() // 需要生成的路由
    })],
  server: {
    proxy: {
      '/api': {
        target: 'http://182.92.201.19:8070',
        // target: 'http://127.0.0.1:8070',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 5174
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", //指定静态资源存放路径
    minify: 'terser', // 使用Terser压缩JavaScript
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 浏览器兼容性配置
    target: 'esnext',
    // 产物拆包配置
    rollupOptions: {
      output: {
        // 控制 chunk 的生成和命名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
})
