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
    external: []
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return text
  }

  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, transformText(text))
}
buildIndex()
