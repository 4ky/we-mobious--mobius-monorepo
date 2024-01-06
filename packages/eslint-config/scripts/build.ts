import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

import { buildSync } from 'esbuild'

const buildIndex = (): void => {
  const code = buildSync({
    entryPoints: ['src/index.ts'],
    bundle: true,
    define: {},
    format: 'esm',
    minify: false,
    outfile: 'dist/index.js',
    platform: 'node',
    splitting: false,
    write: false,
    external: [
      '@html-eslint/parser',
      '@nx/eslint-plugin',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint-config-standard',
      'eslint-config-standard-with-typescript',
      'eslint-import-resolver-typescript',
      'eslint-plugin-eslint-comments',
      'eslint-plugin-html',
      'eslint-plugin-import',
      'eslint-plugin-jsonc',
      'eslint-plugin-markdown',
      'eslint-plugin-markdownlint',
      'eslint-plugin-n',
      'eslint-plugin-promise',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'eslint-plugin-react-refresh',
      'eslint-plugin-vue',
      'eslint-processor-vue-blocks',
      'espree',
      'globals',
      'jsonc-eslint-parser',
      'vue-eslint-parser'
    ]
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return text
  }

  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, transformText(text))
}
buildIndex()
