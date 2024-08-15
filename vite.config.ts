import {defineConfig, loadEnv} from 'vite'
import path from "path";
import viteCompression from 'vite-plugin-compression'
// import seoPrerender from 'vite-plugin-seo-prerender'
import Components from 'unplugin-vue-components/vite'
import {UndrawUiResolver} from 'undraw-ui/es/resolvers'
import createVitePlugins from './config/plugins'

const routes = [
  {path: '/'},
  // 其他路由...
]

// 提取路由路径
function getPrerenderRoutes() {
  return routes.map(route => route.path)
}

export default defineConfig(({command,mode}) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      // 服务启动时是否自动打开浏览器
      open: true,
      proxy: {
        '/api': {
          // target: 'http://182.92.201.19:8070',
          target: env.VITE_API_BASE_URL, // 使用 import.meta.env 获取环境变量
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        // '/music': {
        //   // target: 'http://182.92.201.19:8070',
        //   target: 'https://api-mu.reaicc.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/music/, ''),
        // },
      },
      port: 5173
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
        "@plugins": path.resolve(__dirname, "src/plugins"),
        "@locales": path.resolve(__dirname, "src/hooks/locales"),
        'script': path.resolve(__dirname, 'script')
      },
    },
    plugins: [ createVitePlugins(env, command === 'build'),
      Components({
        // 配置自动导入 Undraw UI 组件库的解析器
        resolvers: [UndrawUiResolver],
        // 自动扫描指定目录下的组件
        dirs: ['src/views/live-moudle/compontents'], // 指定组件目录
        extensions: ['vue'], // 支持的文件类型
        deep: true, // 是否深度扫描子目录
        dts: true, // 生成 `components.d.ts` 文件
      }),

      viteCompression({
        verbose: false, // 启用日志输出，可以设置为 false 关闭
        disable: false, // 是否禁用压缩，默认为 false，即启用压缩
        deleteOriginFile: true, // 是否删除源文件，默认为 false，即不删除
        threshold: 5120, // 压缩前最小文件大小，单位为字节，小于该值的文件不会被压缩
        algorithm: 'gzip', // 压缩算法，这里使用 gzip
        ext: '.gz' // 压缩后的文件扩展名
      }),
      // seoPrerender({
      //   //include：需要预渲染的页面路径列表，支持通配符匹配。
      //   // staticDir: 静态文件目录，默认为 “dist”，表示从这个目录中读取静态资源。
      //   // minify：是否压缩 HTML 文件，默认为 true。
      //   // fallback: 网络请求失败、404 错误等情况下应该返回的 HTML 文件，默认为 “index.html”。
      //   routes: ['/'],
      //   staticDir: path.join(__dirname, 'dist'),
      //   minify: true,
      //   fallback: "index.html",
      //   delay: 90000 , // 延迟时间，单位为毫秒，默认为 0。
      //   publicHtml: true, // 是否将预渲染的 HTML 文件添加到 public 目录中，默认为 false。
      // })
    ],
    define: {
      'process.env': process.env // 如果你需要注入 process.env
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/constant.scss";
          @import "@/assets/mixin.scss";
          @import "@/assets/common.scss";
          @import "@/assets/var.scss";
        `
        }
      }
    },
    // 构建
    build: {
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      outDir: 'dist', // 指定打包路径，默认为项目根目录下的dist目录
      minify: 'terser', // Vite 2.6.x 以上需要配置 minify："terser"，terserOptions才能生效
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true // 生产环境去除 debugger
        },
        format: {
          comments: false // 删除注释
        }
      },
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
