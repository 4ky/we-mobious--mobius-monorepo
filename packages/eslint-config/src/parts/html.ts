import htmlEslintParser from '@html-eslint/parser'
import eslintHtmlPlugin from 'eslint-plugin-html'

import type { FlatConfigItem } from '../types'

/**
 * @see https://github.com/yeonjuan/html-eslint
 */
export const html: FlatConfigItem = {
  files: ['**/*.html'],
  ignores: [],
  languageOptions: {
    parser: htmlEslintParser
  },
  linterOptions: {},
  plugins: {
    html: eslintHtmlPlugin
  },
  settings: {},
  rules: {
    // @html-eslint:SEO
    'html/require-lang': ['error'],
    'html/require-title': ['error'],
    'html/no-multiple-h1': ['error'],
    'html/require-meta-description': ['error'],
    // @html-eslint:Style
    'html/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: false }],
    'html/element-newline': ['error'],
    'html/indent': ['error', 2],
    'html/quotes': ['error', 'double'],
    'html/id-naming-convention': ['off'],
    'html/no-multiple-empty-lines': ['error', { max: 1 }],
    'html/no-trailing-spaces': ['error'],
    // @html-eslint:Best Practices
    'html/require-doctype': ['error'],
    'html/no-duplicate-id': ['error'],
    'html/no-inline-styles': ['off'],
    'html/require-li-container': ['error'],
    'html/no-obsolete-tags': ['error'],
    'html/require-closing-tags': ['error', {
      selfClosing: 'always',
      allowSelfClosingCustom: false
    }],
    'html/require-meta-charset': ['error'],
    'html/no-target-blank': ['error'],
    'html/no-duplicate-attrs': ['error'],
    'html/require-button-type': ['error'],
    'html/no-restricted-attrs': ['off'],
    // @html-eslint:Accessibility
    'html/require-img-alt': ['error'],
    'html/no-skip-heading-levels': ['error'],
    'html/require-frame-title': ['error'],
    'html/no-non-scalable-viewport': ['error'],
    'html/no-positive-tabindex': ['error'],
    'html/require-meta-viewport': ['error'],
    'html/no-abstract-roles': ['off'],
    'html/no-aria-hidden-body': ['error'],
    'html/no-accesskey-attrs': ['warn']
  }
}
