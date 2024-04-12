import eslintPluginImport from 'eslint-plugin-import-x'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPromise from 'eslint-plugin-promise'
import * as espree from 'espree'
import globals from 'globals'

import type { LanguageOptions, Plugins, Rules, FlatConfigItem, Settings } from '../types'

export const javascriptLanguageOptions: LanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  parser: espree,
  // https://github.com/eslint/espree?tab=readme-ov-file#options
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      globalReturn: false,
      impliedStrict: true
    }
  },
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.worker,
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  }
}

export const javascriptPlugins: Plugins = {
  'import-x': eslintPluginImport,
  promise: eslintPluginPromise,
  n: eslintPluginN
}

export const javascriptSettings: Settings = {
  'import-x/parsers': {
    espree: ['.js', '.mjs', '.cjs']
  },
  'import-x/resolver': {
    node: { extensions: ['.js', '.mjs', '.cjs'] }
  }
}

/**
 * @see https://eslint.org/docs/latest/rules/
 */
export const javascriptRulesFromESLint: Rules = {
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-semi': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-new-symbol': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': 'error',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'require-yield': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error'
}

/**
 * @see https://standardjs.com/
 */
export const javascriptRulesFromStandard: Rules = {
  'no-var': 'warn',
  'object-shorthand': ['warn', 'properties'],

  'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
  'array-bracket-spacing': ['error', 'never'],
  'array-callback-return': ['error', {
    allowImplicit: false,
    checkForEach: false
  }],
  'arrow-spacing': ['error', { before: true, after: true }],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  camelcase: ['error', {
    allow: ['^UNSAFE_'],
    properties: 'never',
    ignoreGlobals: true
  }],
  'comma-dangle': ['error', {
    arrays: 'never',
    objects: 'never',
    imports: 'never',
    exports: 'never',
    functions: 'never'
  }],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
  'constructor-super': 'error',
  curly: ['error', 'multi-line'],
  'default-case-last': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': ['error', { allowKeywords: true }],
  'eol-last': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-call-spacing': ['error', 'never'],
  'generator-star-spacing': ['error', { before: true, after: true }],
  indent: ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
    ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    offsetTernaryExpressions: true
  }],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
  'new-parens': 'error',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-useless-backreference': 'error',
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': ['error', 'functions'],
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-iterator': 'error',
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-prototype-builtins': 'error',
  'no-useless-catch': 'error',
  'no-mixed-operators': ['error', {
    groups: [
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof']
    ],
    allowSamePrecedence: true
  }],
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-symbol': 'error',
  'no-new-wrappers': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-redeclare': ['error', { builtinGlobals: false }],
  'no-regex-spaces': 'error',
  'no-return-assign': ['error', 'except-parens'],
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-tabs': 'error',
  'no-template-curly-in-string': 'error',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-trailing-spaces': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable': 'error',
  'no-unreachable-loop': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unused-expressions': ['error', {
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: true
  }],
  'no-unused-vars': ['error', {
    args: 'none',
    caughtErrors: 'none',
    ignoreRestSiblings: true,
    vars: 'all'
  }],
  'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-whitespace-before-property': 'error',
  'no-with': 'error',
  'object-curly-newline': ['error', { multiline: true, consistent: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  'one-var': ['error', { initialized: 'never' }],
  'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
  'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
  'prefer-const': ['error', { destructuring: 'all' }],
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'quote-props': ['error', 'as-needed'],
  quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  'rest-spread-spacing': ['error', 'never'],
  semi: ['error', 'never'],
  'semi-spacing': ['error', { before: false, after: true }],
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', 'always'],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  'spaced-comment': ['error', 'always', {
    line: { markers: ['*package', '!', '/', ',', '='] },
    block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
  }],
  'symbol-description': 'error',
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'use-isnan': ['error', {
    enforceForSwitchCase: true,
    enforceForIndexOf: true
  }],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
  'yield-star-spacing': ['error', 'both'],
  yoda: ['error', 'never'],

  'import-x/export': 'error',
  'import-x/first': 'error',
  'import-x/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
  'import-x/no-duplicates': 'error',
  'import-x/no-named-default': 'error',
  'import-x/no-webpack-loader-syntax': 'error',

  'n/handle-callback-err': ['error', '^(err|error)$'],
  'n/no-callback-literal': 'error',
  'n/no-deprecated-api': 'error',
  'n/no-exports-assign': 'error',
  'n/no-new-require': 'error',
  'n/no-path-concat': 'error',
  'n/process-exit-as-throw': 'error',

  'promise/param-names': 'error'
}

/**
 * @see https://github.com/import-js/eslint-plugin-import
 */
export const javascriptRulesFromImport: Rules = {
  // import:Static analysis
  'import-x/no-unresolved': ['off'],
  'import-x/named': ['error'],
  'import-x/default': ['error'],
  'import-x/namespace': ['error', { allowComputed: true }],
  'import-x/no-restricted-paths': ['off'],
  'import-x/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
  'import-x/no-dynamic-require': ['off'],
  'import-x/no-internal-modules': ['off'],
  'import-x/no-webpack-loader-syntax': ['off'],
  'import-x/no-self-import': ['error'],
  'import-x/no-cycle': ['off'],
  'import-x/no-useless-path-segments': ['error', { noUselessIndex: false, commonjs: true }],
  'import-x/no-relative-parent-imports': ['off'],
  'import-x/no-relative-packages': ['error'],
  // import:Helpful warnings
  'import-x/export': ['error'],
  'import-x/no-named-as-default': ['error'],
  'import-x/no-named-as-default-member': ['off'],
  'import-x/no-mutable-exports': ['error'],
  'import-x/no-unused-modules': ['off'],
  // import:Module systems
  'import-x/unambiguous': ['off'],
  'import-x/no-commonjs': ['off'],
  'import-x/no-amd': ['error'],
  'import-x/no-nodejs-modules': ['off'],
  'import-x/no-import-module-exports': ['error'],
  // import:Style guide
  'import-x/first': ['error'],
  'import-x/exports-last': ['off'],
  'import-x/no-duplicates': ['error', { considerQueryString: true }],
  'import-x/no-namespace': ['off'],
  'import-x/extensions': ['off'],
  'import-x/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    pathGroups: [
      {
        pattern: '~/**',
        patternOptions: { nocomment: true },
        group: 'internal',
        position: 'before'
      }
    ],
    distinctGroup: false,
    pathGroupsExcludedImportTypes: ['builtin', 'external', 'object'],
    'newlines-between': 'always',
    alphabetize: {
      order: 'asc',
      orderImportKind: 'asc',
      caseInsensitive: true
    },
    warnOnUnassignedImports: false
  }],
  'import-x/newline-after-import': ['error', {
    count: 1,
    exactCount: true,
    considerComments: true
  }],
  'import-x/prefer-default-export': ['off'],
  'import-x/max-dependencies': ['off'],
  'import-x/no-unassigned-import': ['error'],
  'import-x/no-named-default': ['error'],
  'import-x/no-anonymous-default-export': ['error', {
    allowArray: false,
    allowArrowFunction: false,
    allowAnonymousClass: false,
    allowAnonymousFunction: false,
    allowCallExpression: true, // The true value here is for backward compatibility
    allowNew: false,
    allowLiteral: false,
    allowObject: false
  }],
  'import-x/group-exports': ['off'],
  'dynamic-import-chunkname': ['off'],
  'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level']
}

/**
 * @see https://github.com/eslint-community/eslint-plugin-n
 */
export const javascriptRulesFromN: Rules = {
  // n:Possible Errors
  'n/handle-callback-err': ['error', '^.*(e|E)(rr|rror|xception|xceptions)$'],
  'n/no-callback-literal': ['error'],
  'n/no-exports-assign': ['error'],
  'n/no-extraneous-import': ['error', {
    allowModules: ['electron']
  }],
  'n/no-extraneous-require': ['error', {
    allowModules: ['electron']
  }],
  'n/no-missing-import': ['off'],
  'n/no-missing-require': ['off'],
  'n/no-new-require': ['error'],
  'n/no-path-concat': ['error'],
  'n/no-process-exit': ['warn'],
  'n/no-unpublished-bin': ['error'],
  'n/no-unpublished-import': ['off', {
    allowModules: ['electron']
  }],
  'n/no-unpublished-require': ['off', {
    allowModules: ['electron']
  }],
  'n/no-unsupported-features/es-builtins': ['off'],
  'n/no-unsupported-features/es-syntax': ['off'],
  'n/no-unsupported-features/node-builtins': ['off'],
  'n/process-exit-as-throw': ['error'],
  'n/shebang': ['off'],
  // n:Best Practices
  'n/no-deprecated-api': ['error'],
  // n:Stylistic Issues
  'n/callback-return': ['off'],
  'n/exports-style': ['off'],
  'n/file-extension-in-import': ['off'],
  'n/global-require': ['off'],
  'n/no-mixed-requires': ['off'],
  'n/no-process-env': ['off'],
  'n/no-restricted-import': ['off'],
  'n/no-restricted-require': ['off'],
  'n/no-sync': ['off'],
  'n/prefer-global/buffer': ['off'],
  'n/prefer-global/console': ['off'],
  'n/prefer-global/process': ['off'],
  'n/prefer-global/text-decoder': ['off'],
  'n/prefer-global/text-encoder': ['off'],
  'n/prefer-global/url-search-params': ['off'],
  'n/prefer-global/url': ['off'],
  'n/prefer-promises/dns': ['off'],
  'n/prefer-promises/fs': ['off']
}

/**
 * @see https://github.com/eslint-community/eslint-plugin-promise
 */
export const javascriptRulesFromPromise: Rules = {
  'promise/catch-or-return': ['error', {
    allowThen: false,
    allowFinally: true,
    terminationMethod: ['catch', 'finally']
  }],
  // TODO: temporary disabled due to ESLint 9.0.0 release
  // 'promise/no-return-wrap': ['error', {
  //   allowReject: true
  // }],
  'promise/param-names': ['error'],
  // TODO: 2022-10-07 18:04:00 configurations not released yet
  // 'promise/param-names': ['error', {
  //   // eslint-disable-next-line no-useless-escape
  //   resolvePattern: '^(_?resolve|\w[\w\d]+Resolve)$',
  //   // eslint-disable-next-line no-useless-escape
  //   rejectPattern: '^(_?reject|\w[\w\d]+Reject)$'
  // }],
  'promise/always-return': ['error'],
  // TODO: 2022-10-07 18:04:00 configurations not released yet
  // 'promise/always-return': ['error', {
  //   ignoreLastCallback: true
  // }],
  'promise/no-native': ['off'],
  // TODO: temporary disabled due to ESLint 9.0.0 release
  // 'promise/no-nesting': ['warn'],
  // TODO: temporary disabled due to ESLint 9.0.0 release
  // 'promise/no-promise-in-callback': ['warn'],
  // TODO: temporary disabled due to ESLint 9.0.0 release
  // 'promise/no-callback-in-promise': ['warn'],
  'promise/avoid-new': ['off'],
  'promise/no-new-statics': ['error'],
  'promise/no-return-in-finally': ['error'],
  'promise/valid-params': ['error'],
  'promise/prefer-await-to-then': ['off'],
  'promise/prefer-await-to-callbacks': ['off']
  // TODO: 2022-10-07 18:04:00 not released yet
  // 'promise/no-multiple-resolved': ['error']
}

export const javascriptRulesFromMobius: Rules = {
  'no-unused-vars': ['error', {
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#vars
    vars: 'all',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#varsignorepattern
    varsIgnorePattern: '^_',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#args
    args: 'all',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#argsignorepattern
    argsIgnorePattern: '^_',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#caughterrors
    caughtErrors: 'all',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#caughterrorsignorepattern
    caughtErrorsIgnorePattern: '^_',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#destructuredarrayignorepattern
    destructuredArrayIgnorePattern: '^_',
    // @see https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings
    ignoreRestSiblings: true
  }]
}

export const javascriptRules: Rules = {
  ...javascriptRulesFromESLint,
  ...javascriptRulesFromStandard,
  ...javascriptRulesFromImport,
  ...javascriptRulesFromN,
  ...javascriptRulesFromPromise,
  ...javascriptRulesFromMobius
}

export const javascript: FlatConfigItem = {
  files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  languageOptions: javascriptLanguageOptions,
  plugins: javascriptPlugins,
  settings: javascriptSettings,
  rules: javascriptRules
}
