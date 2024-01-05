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
    external: ['commitizen', 'inquirer']
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return text
  }

  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, transformText(text))
}
buildIndex()

const buildMain = (): void => {
  const code = buildSync({
    entryPoints: ['src/main.ts'],
    bundle: true,
    define: {},
    format: 'esm',
    minify: false,
    outfile: 'dist/main.js',
    platform: 'node',
    splitting: false,
    write: false,
    external: ['commitizen', 'inquirer']
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return text
  }

  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, transformText(text))
}
buildMain()

const buildAdapter = (): void => {
  const code = buildSync({
    entryPoints: ['src/adapter.ts'],
    bundle: true,
    define: {},
    format: 'cjs',
    minify: false,
    outfile: 'dist/adapter.cjs',
    platform: 'node',
    splitting: false,
    write: false,
    external: ['inquirer']
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return `${text.slice(1553, -130)}\rmodule.exports = app;`
    // return text
  }

  writeFileSync(path, transformText(text))
}
buildAdapter()

const buildCommitlintConfig = (): void => {
  const code = buildSync({
    entryPoints: ['src/commitlint/index.ts'],
    bundle: true,
    define: {},
    format: 'cjs',
    minify: false,
    outfile: 'dist/commitlint.cjs',
    platform: 'node',
    splitting: false,
    write: false,
    external: ['inquirer']
  })
  const { path, text } = code.outputFiles[0]!

  const transformText = (text: string): string => {
    return `${text.slice(1004, -119)}\rmodule.exports = DEFAULT_COMMITLINT_CONFIG;`
  }

  writeFileSync(path, transformText(text))
}
buildCommitlintConfig()
