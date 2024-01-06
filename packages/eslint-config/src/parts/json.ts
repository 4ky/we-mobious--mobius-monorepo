import eslintPluginJsonc from 'eslint-plugin-jsonc'
import * as jsoncEslintParser from 'jsonc-eslint-parser'

import { javascriptRulesFromStandard } from './javascript'

import type { FlatConfigItem } from '../types'

export const jsonPlugins: FlatConfigItem['plugins'] = {
  jsonc: eslintPluginJsonc
}

export const jsonRules: FlatConfigItem['rules'] = {
  // ESLint core rules known to cause problems with JSON.
  strict: 'off',
  'no-unused-expressions': 'off',
  // jsonc:JSONC Rules
  'jsonc/auto': ['off'],
  'jsonc/key-name-casing': ['off'],
  'jsonc/no-bigint-literals': ['error'],
  'jsonc/no-binary-expression': ['error'],
  'jsonc/no-binary-numeric-literals': ['error'],
  'jsonc/no-comments': ['off'],
  'jsonc/no-escape-sequence-in-identifier': ['error'],
  'jsonc/no-hexadecimal-numeric-literals': ['error'],
  'jsonc/no-infinity': ['error'],
  'jsonc/no-nan': ['error'],
  'jsonc/no-number-props': ['error'],
  'jsonc/no-numeric-separators': ['error'],
  'jsonc/no-octal-numeric-literals': ['error'],
  'jsonc/no-parenthesized': ['error'],
  'jsonc/no-plus-sign': ['error'],
  'jsonc/no-regexp-literals': ['error'],
  'jsonc/no-template-literals': ['error'],
  'jsonc/no-undefined-value': ['error'],
  'jsonc/no-unicode-codepoint-escapes': ['error'],
  'jsonc/sort-array-values': ['off'],
  'jsonc/sort-keys': ['off'],
  'jsonc/valid-json-number': ['error'],
  'jsonc/vue-custom-block/no-parsing-error': ['error'],
  // jsonc:Extension Rules
  'jsonc/array-bracket-newline': ['error', 'consistent'],
  'jsonc/array-bracket-spacing': ['error', 'never'],
  'jsonc/array-element-newline': ['off'],
  'jsonc/comma-dangle': ['error'],
  'jsonc/comma-style': ['error', 'last'],
  'jsonc/indent': javascriptRulesFromStandard['indent'],
  'jsonc/key-spacing': javascriptRulesFromStandard['key-spacing'],
  'jsonc/no-dupe-keys': ['error'],
  'jsonc/no-floating-decimal': ['error'],
  'jsonc/no-multi-str': ['error'],
  'jsonc/no-octal-escape': ['error'],
  'jsonc/no-octal': ['error'],
  'jsonc/no-sparse-arrays': ['error'],
  'jsonc/no-useless-escape': ['error'],
  'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
  'jsonc/object-curly-spacing': javascriptRulesFromStandard['object-curly-spacing'],
  'jsonc/object-property-newline': javascriptRulesFromStandard['object-property-newline'],
  'jsonc/quote-props': ['error', 'always'],
  'jsonc/quotes': ['error', 'double', { avoidEscape: false }],
  'jsonc/space-unary-ops': ['error']
}

/**
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
 */
export const json: FlatConfigItem = {
  files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
  languageOptions: {
    parser: jsoncEslintParser
  },
  plugins: jsonPlugins,
  rules: jsonRules
}
