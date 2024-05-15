import AutoImport from 'unplugin-auto-import/vite'

export function configAutoImportPlugin() {
    return AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'src/auto-import.d.ts',
        // 生成全局声明文件，给eslint用
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      })
}