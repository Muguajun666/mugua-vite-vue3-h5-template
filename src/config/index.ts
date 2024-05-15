export interface IConfig {
  env: string // 开发环境
  mock?: boolean // mock数据
  title: string // 项目title
  baseUrl?: string // 项目地址
  baseApi?: string // api请求地址
  APPID?: string // 公众号appId  一般放在服务器端
  APPSECRET?: string // 公众号appScript 一般放在服务器端
  $cdn: string // cdn公共资源路径
}

const envMap: Record<string, any> = {}
const globalEnvConfigs = import.meta.glob('./*.ts')

Object.entries(globalEnvConfigs).forEach(([key, value]) => {
  // key.match(/\.\/env\.(\S*)\.ts/)
  const name = key.replace(/\.\/env\.(.*)\.ts$/, '$1')
  envMap[name] = value
})

export const config: IConfig = (await envMap[import.meta.env.VITE_ENV]()).default
console.log('根据环境引入不同配置', config)
