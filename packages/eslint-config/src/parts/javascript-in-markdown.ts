import eslintPluginMarkdown from 'eslint-plugin-markdown'

import { javascriptLanguageOptions, javascriptPlugins, javascriptRules } from './javascript'

import type { FlatConfigItem } from '../types'

/**
 * @see https://github.com/eslint/eslint-plugin-markdown
 */
export const javascriptInMarkdown: FlatConfigItem = {
  files: ['**/*.{md,mkdn,mdown,markdown}/**/*.{js,javascript,jsx,node}'],
  ignores: [],
  languageOptions: javascriptLanguageOptions,
  linterOptions: {},
  plugins: {
    ...javascriptPlugins,
    markdown: eslintPluginMarkdown
  },
  processor: 'markdown/markdown',
  settings: {},
  rules: {
    ...javascriptRules,

    // Adding a "use strict" directive at the top of every
    // code block is tedious and distracting. The config
    // opts into strict mode parsing without the directive.
    strict: ['off'],

    'eol-last': ['off'],
    // The processor will not receive a Unicode Byte Order
    // Mark from the Markdown parser.
    'unicode-bom': ['off'],

    // In code snippets and examples, these rules are often
    // counterproductive to clarity and brevity.
    'no-undef': ['off'],
    'no-unused-expressions': ['off'],
    'no-unused-vars': ['off'],
    'padded-blocks': ['off'],
    'no-alert': ['off'],
    'no-console': ['off'],
    'no-restricted-imports': ['off'],

    'import/no-unresolved': ['off']
  }
}
