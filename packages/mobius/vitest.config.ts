import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineProject } from 'vitest/config'

const relativeToRoot = (...paths: string[]): string => {
  const currentFilePath = fileURLToPath(import.meta.url)
  const currentDir = dirname(currentFilePath)
  const relativeToCurrentDir = (...paths: string[]): string => resolve(currentDir, ...paths)
  return relativeToCurrentDir(...paths)
}

const config = defineProject({
  test: {
    root: '.',
    include: ['specs/**/*.{test,spec}.ts'],
    alias: {
      '@': relativeToRoot('./src')
    },
    environment: 'node'
  }
})

export default config
