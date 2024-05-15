export function createProxy() {
  return {
    '/api': {
      target: '',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
