import { writeFileSync } from 'node:fs'
import { buildSync } from 'esbuild'

const code = buildSync({
  entryPoints: ['src/main.ts'],
  bundle: true,
  define: {},
  format: 'cjs',
  minify: false,
  outfile: 'dist/main.cjs',
  platform: 'node',
  splitting: false,
  write: false
})
const { path, text } = code.outputFiles[0]!

const transformText = (text: string): string => {
  return `${text.slice(943, -91)}\rmodule.exports = main_default;`
}

writeFileSync(path, transformText(text))
