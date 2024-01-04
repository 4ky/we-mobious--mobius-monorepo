export const eslintCommentsPlugins = ['eslint-comments']
/**
 * @see https://github.com/mysticatea/eslint-plugin-eslint-comments
 */
export const eslintCommentsRules = {
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
