import { viteMockServe } from 'vite-plugin-mock'

export default function createMock(env, isBuild) {
  const { VITE_BUILD_MOCK } = env
  console.log('VITE_BUILD_MOCK', VITE_BUILD_MOCK);
  return viteMockServe({
    mockPath: 'src/mock', // 目录位置
    logger: !isBuild, //  是否在控制台显示请求日志
    supportTs: true, // 是否读取 ts 文件模块
    localEnabled: false, // 设置是否启用本地mock文件
    prodEnabled: true, // 设置打包是否启用mock功能
    // 这样可以控制关闭mock的时候不让mock打包到最终代码内
    injectCode: `
          import { setupProdMockServer } from '../src/mock/live/index';
          setupProdMockServer();
        `
  })
}
