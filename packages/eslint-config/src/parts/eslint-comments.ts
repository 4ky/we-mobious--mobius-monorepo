import eslintCommentsPlugin from 'eslint-plugin-eslint-comments'

import type { FlatConfigItem } from '../types'

/**
 * @see https://github.com/mysticatea/eslint-plugin-eslint-comments
 */
export const eslintComments: FlatConfigItem = {
  files: ['**/*'],
  plugins: {
    'eslint-comments': eslintCommentsPlugin
  },
  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': ['error'],
    'eslint-comments/no-duplicate-disable': ['error'],
    'eslint-comments/no-unlimited-disable': ['error'],
    'eslint-comments/no-unused-disable': ['error'],
    'eslint-comments/no-unused-enable': ['error'],
    'eslint-comments/no-restricted-disable': ['error'],
    'eslint-comments/no-use': ['off'],
    'eslint-comments/require-description': ['error', { ignore: [] }]
  }
}
