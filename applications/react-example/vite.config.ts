import { cwd } from 'node:process'
import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

import { makeWindiConfig } from './windi.config'

import type { UserConfigExport } from 'vite'

// https://vitejs.dev/config/
const viteConfig: UserConfigExport = defineConfig((configEnv) => {
  const { mode } = configEnv
  const env = loadEnv(mode, cwd(), 'VITE_') as ImportMetaEnv

  const config: UserConfigExport = {
    root: './src',
    base: '/',
    // https://vitejs.dev/guide/assets.html#the-public-directory
    publicDir: './src/public',
    // https://vitejs.dev/config/#envdir
    envDir: '../',
    plugins: [
      react(),
      WindiCSS({
        config: makeWindiConfig({ customRoot: '' }),
        onOptionsResolved: (resolvedOptions) => {
          console.log('[vite-plugin-windicss] resolvedOptions:')
          console.log('resolvedOptions.root', resolvedOptions.root)
          console.log('resolvedOptions.config', JSON.stringify(resolvedOptions.config, null, 2))
        }
      })
    ],
    resolve: {
      // https://vitejs.dev/config/#resolve-alias
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./', import.meta.url)) },
        { find: 'Src', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: 'Elements', replacement: fileURLToPath(new URL('./src/elements', import.meta.url)) },
        { find: 'Components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
        { find: 'Views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
        { find: 'Statics', replacement: fileURLToPath(new URL('./src/statics', import.meta.url)) },
        { find: 'Styles', replacement: fileURLToPath(new URL('./src/statics/styles', import.meta.url)) },
        { find: 'Images', replacement: fileURLToPath(new URL('./src/statics/images', import.meta.url)) },
        { find: 'Services', replacement: fileURLToPath(new URL('./src/services', import.meta.url)) }
      ]
    },
    clearScreen: false,
    server: {
      port: 5238,
      strictPort: false,
      open: false,
      host: '127.0.0.1',
      proxy: {
        '/api': env.VITE_SERVER_URL
      }
    },
    // build: {
    //   // https://vitejs.dev/config/#build-outdir
    //   outDir: resolve(cwd(), 'dist'),
    //   // https://vitejs.dev/config/#build-assetsdir
    //   assetsDir: './src/statics',
    //   emptyOutDir: true,
    //   target: 'modules',
    //   // @see https://www.thisdot.co/blog/how-to-create-and-deploy-a-vue-component-library-to-npm
    //   // @see https://vitejs.dev/config/build-options.html#build-lib
    //   lib: {
    //     entry: resolve(cwd(), 'src/index.ts'),
    //     name: 'DefaultName',
    //     formats: ['es', 'cjs'],
    //     fileName: (format) => {
    //       if (format === 'es') {
    //         return 'index.js'
    //       } else if (format === 'cjs') {
    //         return 'index.cjs'
    //       }
    //       throw new Error(`Unsupported format: ${format}`)
    //     }
    //   },
    //   minify: 'esbuild',
    //   rollupOptions: {
    //     // @see https://rollupjs.org/guide/en/#external
    //     external: (id, _parentId, _isResolved) => {
    //       if (id === 'vue') {
    //         return true
    //       }
    //       return false
    //     },
    //     output: {}
    //   }
    // },
    build: {
      // https://vitejs.dev/config/#build-outdir
      outDir: '../dist',
      // https://vitejs.dev/config/#build-assetsdir
      assetsDir: './statics',
      emptyOutDir: true
    },
    preview: {
      port: 624,
      open: false
    }
  }
  return config
})

export default viteConfig
