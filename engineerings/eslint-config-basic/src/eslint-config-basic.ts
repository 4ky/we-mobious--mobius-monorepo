import { eslintCommentsPlugins, eslintCommentsRules } from './config-parts/eslint-comments.config-parts'
import { htmlPlugins, htmlOverride } from './config-parts/html.config-parts'
import { javascriptInMarkdownPlugins, markdownProcessorOverride, javascriptInMarkdownOverride } from './config-parts/javascript-in-markdown.config-parts'
import { javascriptSettings, javascriptParserOptions, javascriptPlugins, javascriptOverride } from './config-parts/javascript.config-parts'
import { jsonPlugins, jsonOverride } from './config-parts/json.config-parts'
import { nxPlugins } from './config-parts/nx.config-parts'
import { packageJSONOverride } from './config-parts/package-json.config-parts'

export const basicESLintConfig = {
  extends: [],
  // @see https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
  env: {
    browser: true,
    node: true,
    worker: true,
    es6: true,
    es2016: true,
    es2017: true,
    es2018: true,
    es2019: true,
    es2020: true,
    es2021: true,
    es2022: true
  },
  // @see https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-globals
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // @see https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
  parserOptions: javascriptParserOptions,
  // @see https://eslint.org/docs/latest/user-guide/configuring/configuration-files#adding-shared-settings
  settings: { ...javascriptSettings },
  // @see https://eslint.org/docs/latest/user-guide/configuring/rules
  rules: { ...eslintCommentsRules },
  overrides: [
    javascriptOverride,
    jsonOverride, packageJSONOverride,
    htmlOverride,
    markdownProcessorOverride, javascriptInMarkdownOverride
  ],
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  // @see https://eslint.org/docs/latest/user-guide/configuring/plugins
  plugins: [
    ...eslintCommentsPlugins, ...javascriptPlugins,
    ...jsonPlugins, ...htmlPlugins, ...javascriptInMarkdownPlugins,
    ...nxPlugins
  ],
  // @see https://eslint.org/docs/latest/user-guide/configuring/ignoring-code
  // @see derived from https://github.com/antfu/eslint-config/blob/main/packages/basic/index.js#L16-L32
  ignorePatterns: [
    '*.min.*',
    // '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'build',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
    '.mobius'
  ]
}
