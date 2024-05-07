import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import PostCssPxToViewport from 'postcss-px-to-viewport-8-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', { vant: ['showFailToast', 'showLoadingToast', 'showSuccessToast', 'showToast', 'closeToast'] }, { '@vueuse/core': [] }],
      eslintrc: { enabled: true },
      dts: './types/auto-imports.d.ts',
    }),
    Components({ dts: './types/components.d.ts', resolvers: [VantResolver()] }),
  ],
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          vconsole: ['vconsole'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [PostCssPxToViewport({ viewportWidth: 375 })],
    },
  },
  optimizeDeps: {
    include: ['dayjs/locale/zh-cn'],
  },
  server: {
    host: '0.0.0.0',
  },
}));
