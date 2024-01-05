import eslintPluginMarkdown from 'eslint-plugin-markdown'

import type { FlatConfigItem } from '../types'

/**
 * @see https://github.com/eslint/eslint-plugin-markdown
 */
export const markdown: FlatConfigItem = {
  files: ['**/*.{md,mkdn,mdown,markdown}'],
  ignores: [],
  languageOptions: {},
  linterOptions: {},
  plugins: {
    markdown: eslintPluginMarkdown
  },
  processor: 'markdown/markdown',
  settings: {},
  rules: {}
}
