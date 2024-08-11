import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import login from '../live/live.mock';
const modules = {
  login
  // 其他模块...
};
const mockModules: any[] = []
Object.keys(modules).forEach(async (key) => {
  if (key.includes('_')) {
    return
  }
  mockModules.push(...(modules[key] as any))
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}

