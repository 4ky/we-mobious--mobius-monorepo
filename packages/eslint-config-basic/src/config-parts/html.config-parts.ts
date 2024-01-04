export const htmlPlugins = ['@html-eslint']
/**
 * @see https://github.com/yeonjuan/html-eslint
 */
export const htmlRules = {
  // @html-eslint:SEO
  '@html-eslint/require-lang': ['error'],
  '@html-eslint/require-title': ['error'],
  '@html-eslint/no-multiple-h1': ['error'],
  '@html-eslint/require-meta-description': ['error'],
  // @html-eslint:Style
  '@html-eslint/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: false }],
  '@html-eslint/element-newline': ['error'],
  '@html-eslint/indent': ['error', 2],
  '@html-eslint/quotes': ['error', 'double'],
  '@html-eslint/id-naming-convention': ['off'],
  '@html-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
  '@html-eslint/no-trailing-spaces': ['error'],
  // @html-eslint:Best Practices
  '@html-eslint/require-doctype': ['error'],
  '@html-eslint/no-duplicate-id': ['error'],
  '@html-eslint/no-inline-styles': ['off'],
  '@html-eslint/require-li-container': ['error'],
  '@html-eslint/no-obsolete-tags': ['error'],
  '@html-eslint/require-closing-tags': ['error', {
    selfClosing: 'always',
    allowSelfClosingCustom: false
  }],
  '@html-eslint/require-meta-charset': ['error'],
  '@html-eslint/no-target-blank': ['error'],
  '@html-eslint/no-duplicate-attrs': ['error'],
  '@html-eslint/require-button-type': ['error'],
  '@html-eslint/no-restricted-attrs': ['off'],
  // @html-eslint:Accessibility
  '@html-eslint/require-img-alt': ['error'],
  '@html-eslint/no-skip-heading-levels': ['error'],
  '@html-eslint/require-frame-title': ['error'],
  '@html-eslint/no-non-scalable-viewport': ['error'],
  '@html-eslint/no-positive-tabindex': ['error'],
  '@html-eslint/require-meta-viewport': ['error'],
  '@html-eslint/no-abstract-roles': ['off'],
  '@html-eslint/no-aria-hidden-body': ['error'],
  '@html-eslint/no-accesskey-attrs': ['warn']
}
export const htmlOverride = {
  files: ['*.html'],
  extends: [],
  plugins: [],
  parser: '@html-eslint/parser',
  rules: { ...htmlRules }
}
