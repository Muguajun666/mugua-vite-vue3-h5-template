import { VantResolve, createStyleImportPlugin } from 'vite-plugin-style-import'

export function configStyleImportPlugin(isBuild: boolean) {
    return createStyleImportPlugin({
        resolves: [VantResolve()]
      })
}