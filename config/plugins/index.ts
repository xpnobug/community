import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'

import createMock from './mock'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createMock(viteEnv, isBuild))
  return vitePlugins
}
