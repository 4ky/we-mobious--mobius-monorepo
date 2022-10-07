const javascriptParserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  ecmaFeatures: {
    globalReturn: false,
    impliedStrict: true,
    jsx: false
  }
}

/**
 * @see https://eslint.org/docs/latest/rules/
 */
const javascriptRulesFromESLint = {
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
const javascriptRulesFromStandard = {
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

  'import/export': 'error',
  'import/first': 'error',
  'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
  'import/no-duplicates': 'error',
  'import/no-named-default': 'error',
  'import/no-webpack-loader-syntax': 'error',

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
const javascriptRulesFromImport = {
  // import:Static analysis
  'import/no-unresolved': ['off'],
  'import/named': ['error'],
  'import/default': ['error'],
  'import/namespace': ['error', { allowComputed: true }],
  'import/no-restricted-paths': ['off'],
  'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
  'import/no-dynamic-require': ['off'],
  'import/no-internal-modules': ['off'],
  'import/no-webpack-loader-syntax': ['off'],
  'import/no-self-import': ['error'],
  'import/no-cycle': ['off'],
  'import/no-useless-path-segments': ['error', { noUselessIndex: false, commonjs: true }],
  'no-relative-parent-imports': ['off'],
  'import/no-relative-packages': ['error'],
  // import:Helpful warnings
  'import/export': ['error'],
  'import/no-named-as-default': ['error'],
  'import/no-named-as-default-member': ['off'],
  'import/no-mutable-exports': ['error'],
  'import/no-unused-modules': ['off'],
  // import:Module systems
  'import/unambiguous': ['off'],
  'import/no-commonjs': ['off'],
  'import/no-amd': ['error'],
  'import/no-nodejs-modules': ['off'],
  'import/no-import-module-exports': ['error'],
  // import:Style guide
  'import/first': ['error'],
  'import/exports-last': ['warn'],
  'import/no-duplicates': ['error', { considerQueryString: true }],
  'import/no-namespace': ['off'],
  'import/extensions': ['off'],
  'import/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    pathGroups: [
      {
        pattern: '~/**',
        patternOptions: { nocomment: true },
        group: 'internal',
        position: 'before'
      }
    ],
    // TODO: 2022-10-06 23:22:00 not released yet
    // distinctGroup: false,
    pathGroupsExcludedImportTypes: ['builtin', 'external', 'object'],
    'newlines-between': 'always',
    alphabetize: {
      order: 'asc',
      // TODO: 2022-10-06 23:22:00 not released yet
      // orderImportKind: 'asc',
      caseInsensitive: true
    },
    warnOnUnassignedImports: false
  }],
  'import/newline-after-import': ['error', {
    count: 1
    // TODO: 2022-10-06 23:22:00 not released yet
    // considerComments: true
  }],
  'import/prefer-default-export': ['off'],
  'import/max-dependencies': ['off'],
  'import/no-unassigned-import': ['error'],
  'import/no-named-default': ['error'],
  // TODO: 2022-10-06 23:22:00 not released yet
  'import/no-anonymous-default-export': ['error'],
  'import/group-exports': ['error'],
  'dynamic-import-chunkname': ['off']
  // TODO: 2022-10-06 23:22:00 not released yet
  // 'import/consistent-type-specifier-style': ['error', 'prefer-top-level']
}
/**
 * @see https://github.com/eslint-community/eslint-plugin-n
 */
const javascriptRulesFromN = {
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
  'n/no-unpublished-import': ['error', {
    allowModules: ['electron']
  }],
  'n/no-unpublished-require': ['error', {
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
const javascriptRulesFromPromise = {
  'promise/catch-or-return': ['error', {
    allowThen: false,
    allowFinally: true,
    terminationMethod: ['catch', 'finally']
  }],
  'promise/no-return-wrap': ['error', {
    allowReject: true
  }],
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
  'promise/no-nesting': ['warn'],
  'promise/no-promise-in-callback': ['warn'],
  'promise/no-callback-in-promise': ['warn'],
  'promise/avoid-new': ['off'],
  'promise/no-new-statics': ['error'],
  'promise/no-return-in-finally': ['error'],
  'promise/valid-params': ['error'],
  'promise/prefer-await-to-then': ['off'],
  'promise/prefer-await-to-callbacks': ['off']
  // TODO: 2022-10-07 18:04:00 not released yet
  // 'promise/no-multiple-resolved': ['error']
}
/**
 * @see https://github.com/mysticatea/eslint-plugin-eslint-comments
 */
const javascriptRulesFromESlintComments = {
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
const javascriptRules = {
  ...javascriptRulesFromESLint,
  ...javascriptRulesFromStandard,
  ...javascriptRulesFromImport,
  ...javascriptRulesFromN,
  ...javascriptRulesFromPromise,
  ...javascriptRulesFromESlintComments
}
const javascriptSettings = {
  'import/resolver': {
    node: { extensions: ['.js', '.mjs'] }
  }
}
const javascriptOverride = {
  files: ['*.js', '*.mjs', '*.cjs'],
  extends: [],
  plugins: [],
  parser: 'espree',
  parserOptions: javascriptParserOptions,
  rules: { ...javascriptRules }
}

/**
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
 */
const jsonRules = {
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
  'jsonc/array-bracket-newline': ['error',
    {
      multiline: true,
      minItems: null
    }
  ],
  'jsonc/array-bracket-spacing': ['error', 'never'],
  'jsonc/array-element-newline': ['off'],
  'jsonc/comma-dangle': ['error'],
  'jsonc/comma-style': ['error', 'last'],
  'jsonc/indent': javascriptRulesFromStandard.indent,
  'jsonc/key-spacing': javascriptRulesFromStandard['key-spacing'],
  'jsonc/no-dupe-keys': ['error'],
  'jsonc/no-floating-decimal': ['error'],
  'jsonc/no-multi-str': ['error'],
  'jsonc/no-octal-escape': ['error'],
  'jsonc/no-octal': ['error'],
  'jsonc/no-sparse-arrays': ['error'],
  'jsonc/no-useless-escape': ['error'],
  'jsonc/object-curly-newline': ['error', { consistent: true }],
  'jsonc/object-curly-spacing': ['error', 'never'],
  'jsonc/object-property-newline': javascriptRulesFromStandard['object-property-newline'],
  'jsonc/quote-props': ['error', 'always'],
  'jsonc/quotes': ['error', 'double', { avoidEscape: false }],
  'jsonc/space-unary-ops': ['error']
}
const jsonOverride = {
  files: ['*.json', '*.json5', '*.jsonc'],
  extends: [],
  plugins: [],
  parser: 'jsonc-eslint-parser',
  rules: { ...jsonRules }
}

const packageJSONRules = {
  ...jsonRules,
  'jsonc/sort-keys': [
    'error',
    {
      pathPattern: '^$',
      order: [
        'publisher',
        'name',
        'displayName',
        'icon',
        'type',
        'version',
        'private',
        'packageManager',
        'description',
        'author',
        'license',
        'funding',
        'homepage',
        'repository',
        'bugs',
        'keywords',
        'categories',
        'sideEffects',
        'engines',
        'typings',
        'types',
        'main',
        'module',
        'exports',
        'typesVersions',
        'bin',
        'directories',
        'scripts',
        'files',
        'unpkg',
        'jsdelivr',
        'publishConfig',

        'peerDependencies',
        'peerDependenciesMeta',
        'dependencies',
        'optionalDependencies',
        'devDependencies',
        'activationEvents',
        'contributes',
        'config',
        'pnpm',
        'overrides',
        'resolutions',
        'husky',
        'simple-git-hooks',
        'lint-staged',
        'eslintConfig'
      ]
    },
    {
      pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
      order: { type: 'asc' }
    },
    {
      pathPattern: '^(config|publishConfig)$',
      order: { type: 'asc' }
    },
    {
      pathPattern: '^exports.*$',
      order: [
        'types',
        'require',
        'import'
      ]
    }
  ]
}
const packageJSONOverride = {
  ...jsonOverride,
  files: ['package.json'],
  rules: { ...packageJSONRules }
}

/**
 * @see https://github.com/BenoitZugmeyer/eslint-plugin-html
 */
const javascriptInHTMLSettings = {
  'html/html-extensions': ['.html', '.erb', '.handlebard', '.hbs', '.htm', '.mustache', '.nunjucks', '.php', '.twig', '.we'],
  'html/xml-extensions': ['.xml', '.xhtml'],
  'html/indent': '+2',
  'html/report-bad-indent': 'error',
  'html/javascript-tag-names': ['script', 'customscript'],
  'html/javascript-mime-types': '/^text\\/(javascript|jsx)$/'
}

/**
 * @see https://github.com/yeonjuan/html-eslint
 */
const htmlRules = {
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
const htmlOverride = {
  files: ['*.html'],
  extends: [],
  plugins: [],
  parser: '@html-eslint/parser',
  rules: { ...htmlRules }
}

module.exports = {
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
  settings: { ...javascriptSettings, ...javascriptInHTMLSettings },
  // @see https://eslint.org/docs/latest/user-guide/configuring/rules
  rules: { ...javascriptRules, ...jsonRules },
  overrides: [javascriptOverride, jsonOverride, packageJSONOverride, htmlOverride],
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
  // @see https://eslint.org/docs/latest/user-guide/configuring/plugins
  plugins: ['import', 'n', 'promise', 'eslint-comments', 'jsonc', 'html', '@html-eslint'],
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
