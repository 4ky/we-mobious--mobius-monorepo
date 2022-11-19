import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

import { buildSync } from 'esbuild'

const buildConfig = (): void => {
  const code = buildSync({
    entryPoints: ['src/config.ts'],
    bundle: true,
    define: {},
    format: 'cjs',
    minify: false,
    outfile: 'dist/config.cjs',
    platform: 'node',
    splitting: false,
    write: false
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return `${text.slice(953, -91)}\rmodule.exports = config_default;`
  }

  writeFileSync(path, transformText(text))
}
buildConfig()

const buildIndex = (): void => {
  const code = buildSync({
    entryPoints: ['src/index.ts'],
    bundle: true,
    define: {},
    format: 'esm',
    minify: true,
    outfile: 'dist/index.js',
    platform: 'node',
    banner: {
      js: `
    import { createRequire } from 'module';
    const require = createRequire(import.meta.url);
    import path from "path";
    import { fileURLToPath } from "url";
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    `
    },
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
