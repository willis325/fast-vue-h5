import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import PostCssPxToViewport from 'postcss-px-to-viewport-8-plugin';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        { vant: ['showFailToast', 'showLoadingToast', 'showSuccessToast', 'showToast', 'closeToast', 'showDialog', 'showConfirmDialog', 'showImagePreview'] },
        { '@vueuse/core': ['createFetch'] },
      ],
      dirs: ['src/hooks', 'src/store'],
      eslintrc: { enabled: true },
      dts: './types/auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({ dirs: ['src/components'], extensions: ['vue'], deep: true, dts: './types/components.d.ts', resolvers: [VantResolver()] }),
    vueSetupExtend({}),
  ],
  esbuild: {
    drop: mode === 'prod' ? ['console', 'debugger'] : [],
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
