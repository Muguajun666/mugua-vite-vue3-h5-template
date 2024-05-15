import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configStyleImportPlugin } from './styleImport'
import { configAutoComponentsPlugin } from './autoComponents'
import { configAutoImportPlugin } from './autoImport'
import { configCompressPlugin } from './compress'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv

	const vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx()]

	vitePlugins.push(configStyleImportPlugin(isBuild))

	vitePlugins.push(configAutoComponentsPlugin())

	vitePlugins.push(configAutoImportPlugin())

	if (isBuild) {
		vitePlugins.push(
			configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
		)
	}

	return vitePlugins
}
