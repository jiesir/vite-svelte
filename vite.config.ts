import { defineConfig } from 'vite'
import { resolve } from 'path';
import { createProxy } from './src/utils/proxy';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { less } from 'svelte-preprocess-less';
import { appInject } from './plugins/app-inject';
import { mock } from './plugins/mock-server';
import { routerInject } from './plugins/router-inject';


export default defineConfig({
  base: './',
  server: {
    host: 'localhost',
    port: 8888,
    open: '/',
    proxy: createProxy(process.env.SERVER_PROXY)
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }, { find: '@components', replacement: resolve(__dirname, './static/es') }]
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/utils/var.less";`
      }
    }
  },
  plugins: [svelte({
    preprocess: {
      style: less(),
    },
  }), appInject(), mock(), routerInject()]
})
