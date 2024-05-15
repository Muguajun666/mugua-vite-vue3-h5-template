import { fileURLToPath, URL } from 'node:url'
import { defineConfig, ConfigEnv, loadEnv } from 'vite'

import { createProxy } from './build/vite/proxy'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugins'
import { createBuild } from './build/vite/build'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
	const root = process.cwd() // 当前工作目录
	const isBuild = command === 'build' // 是否是打包
	const env = loadEnv(mode, root)
	const viteEnv = wrapperEnv(env)

	const { VITE_PUBLIC_PATH, VITE_OUTPUT_DIR } = viteEnv

	return {
		base: VITE_PUBLIC_PATH,
		root,
		plugins: createVitePlugins(viteEnv, isBuild),
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			host: true,
			proxy: createProxy()
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `
				}
			}
		},
		build: createBuild(viteEnv)
	}
})
