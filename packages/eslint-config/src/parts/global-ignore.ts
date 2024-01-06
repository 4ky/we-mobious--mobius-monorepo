import type { FlatConfigItem } from '../types'

/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
 */
export const globalIgnores: FlatConfigItem = {
  ignores: [
    '**/node_modules/',
    '**/.git/',
    '**/.nx/',
    '!**/.github/',
    '!**/.vscode/',
    '!**/.vitepress/',

    '**/__snapshots__/',
    '**/__tests__/',
    '**/__fixtures__/',
    '**/coverage/',
    '**/dist/',
    '**/build/',
    '**/output/',
    '**/temp/',

    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/yarn.lock',
    '**/CHANGELOG.md',
    '**/*.min.*',
    '**/LICENSE*'
  ]
}
