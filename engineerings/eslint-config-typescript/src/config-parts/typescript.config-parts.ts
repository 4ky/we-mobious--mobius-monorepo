import { javascriptPlugins, javascriptRules, javascriptRulesFromStandard } from '@we-mobius/eslint-config-basic/ts'

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/README.md
 */
export const typescriptParserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: [
    './tsconfig.eslint.json',
    './packages/**/tsconfig.json',
    './utilities/**/tsconfig.json',
    './features/**/tsconfig.json',
    './applications/**/tsconfig.json',
    './engineerings/**/tsconfig.json',
    './elements/**/tsconfig.json',
    './components/**/tsconfig.json',
    './services/**/tsconfig.json'
  ],
  projectFolderIgnoreList: ['**/node_modules/**'],
  ecmaFeatures: {
    globalReturn: false,
    impliedStrict: true,
    jsx: false
  }
}

export const typescriptPlugins = [...javascriptPlugins, '@typescript-eslint/eslint-plugin']

export const typescriptRulesFromJavaScript = { ...javascriptRules }

/**
 * @see https://typescript-eslint.io/docs/linting/configs#eslint-recommended
 */
export const typescriptRulesFromTypeScriptESLintESLintRecommended = {
  'constructor-super': ['off'], // ts(2335) & ts(2377)
  'getter-return': ['off'], // ts(2378)
  'no-const-assign': ['off'], // ts(2588)
  'no-dupe-args': ['off'], // ts(2300)
  'no-dupe-class-members': ['off'], // ts(2393) & ts(2300)
  'no-dupe-keys': ['off'], // ts(1117)
  'no-func-assign': ['off'], // ts(2539)
  'no-import-assign': ['off'], // ts(2539) & ts(2540)
  'no-new-symbol': ['off'], // ts(2588)
  'no-obj-calls': ['off'], // ts(2349)
  'no-redeclare': ['off'], // ts(2451)
  'no-setter-return': ['off'], // ts(2408)
  'no-this-before-super': ['off'], // ts(2376)
  'no-undef': ['off'], // ts(2304)
  'no-unreachable': ['off'], // ts(7027)
  'no-unsafe-negation': ['off'], // ts(2365) & ts(2360) & ts(2358)
  'no-var': ['error'], // ts transpiles let/const to var, so no need for vars any more
  'prefer-const': ['error'], // ts provides better types with const
  'prefer-rest-params': ['error'], // ts provides better types with rest args over arguments
  'prefer-spread': ['error'], // ts transpiles spread to apply, so no need for manual apply
  'valid-typeof': ['off'] // ts(2367)
}

/**
 * @see https://typescript-eslint.io/rules/
 */
export const typescriptRulesFromTypeScriptESLint = {
  // TypeScript Rules
  '@typescript-eslint/adjacent-overload-signatures': ['error'],
  '@typescript-eslint/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],

  '@typescript-eslint/ban-ts-comment': ['error'],
  '@typescript-eslint/ban-types': ['error'],
  'no-array-constructor': ['off'],
  '@typescript-eslint/no-array-constructor': ['error'],
  'no-empty-function': ['off'],
  '@typescript-eslint/no-empty-function': ['error'],
  '@typescript-eslint/no-empty-interface': ['error'],
  '@typescript-eslint/no-explicit-any': ['warn'],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  'no-extra-semi': ['off'],
  '@typescript-eslint/no-extra-semi': ['error'],
  '@typescript-eslint/no-inferrable-types': ['error'],
  'no-loss-of-precision': ['off'],
  '@typescript-eslint/no-loss-of-precision': ['error'],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['warn'],
  '@typescript-eslint/no-this-alias': ['error'],
  '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
  'no-unused-vars': ['off'],
  '@typescript-eslint/no-unused-vars': ['warn'],
  '@typescript-eslint/no-var-requires': ['error'],
  '@typescript-eslint/prefer-as-const': ['error'],
  '@typescript-eslint/prefer-namespace-keyword': ['error'],
  '@typescript-eslint/triple-slash-reference': ['error'],

  '@typescript-eslint/await-thenable': ['error'],
  '@typescript-eslint/no-floating-promises': ['error'],
  '@typescript-eslint/no-for-in-array': ['error'],
  'no-implied-eval': ['off'],
  '@typescript-eslint/no-implied-eval': ['error'],
  '@typescript-eslint/no-misused-promises': ['error'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  '@typescript-eslint/no-unsafe-argument': ['error'],
  '@typescript-eslint/no-unsafe-assignment': ['error'],
  '@typescript-eslint/no-unsafe-call': ['error'],
  '@typescript-eslint/no-unsafe-member-access': ['error'],
  '@typescript-eslint/no-unsafe-return': ['error'],
  'require-await': ['off'],
  '@typescript-eslint/require-await': ['error'],
  '@typescript-eslint/restrict-plus-operands': ['error'],
  '@typescript-eslint/restrict-template-expressions': ['error'],
  '@typescript-eslint/unbound-method': ['error'],

  '@typescript-eslint/ban-tslint-comment': ['warn'],
  '@typescript-eslint/class-literal-property-style': ['warn'],
  '@typescript-eslint/consistent-indexed-object-style': ['warn'],
  '@typescript-eslint/consistent-generic-constructors': ['warn'],
  '@typescript-eslint/consistent-type-assertions': ['warn'],
  '@typescript-eslint/consistent-type-definitions': ['warn'],
  'dot-notation': ['off'],
  '@typescript-eslint/dot-notation': ['warn'],
  '@typescript-eslint/no-base-to-string': ['warn'],
  '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],
  '@typescript-eslint/no-duplicate-enum-values': ['warn'],
  '@typescript-eslint/no-dynamic-delete': ['warn'],
  '@typescript-eslint/no-extraneous-class': ['warn'],
  '@typescript-eslint/no-invalid-void-type': ['warn'],
  '@typescript-eslint/no-meaningless-void-operator': ['warn'],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['warn'],
  'no-throw-literal': ['off'],
  '@typescript-eslint/no-throw-literal': ['warn'],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn'],
  '@typescript-eslint/no-unnecessary-condition': ['warn'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],
  'no-useless-constructor': ['off'],
  '@typescript-eslint/no-useless-constructor': ['warn'],
  '@typescript-eslint/non-nullable-type-assertion-style': ['warn'],
  '@typescript-eslint/prefer-for-of': ['warn'],
  '@typescript-eslint/prefer-function-type': ['warn'],
  '@typescript-eslint/prefer-includes': ['warn'],
  '@typescript-eslint/prefer-literal-enum-member': ['warn'],
  '@typescript-eslint/prefer-nullish-coalescing': ['warn'],
  '@typescript-eslint/prefer-optional-chain': ['warn'],
  '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],
  '@typescript-eslint/prefer-return-this-type': ['warn'],
  '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],
  '@typescript-eslint/prefer-ts-expect-error': ['warn'],
  '@typescript-eslint/unified-signatures': ['warn']
}

const equivalents = [
  'comma-spacing',
  'dot-notation',
  'brace-style',
  'func-call-spacing',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-extra-parens',
  'no-loss-of-precision',
  'no-redeclare',
  'no-throw-literal',
  'no-unused-vars',
  'no-unused-expressions',
  'no-useless-constructor',
  'object-curly-spacing',
  'quotes',
  'semi',
  'space-before-blocks',
  'space-before-function-paren',
  'space-infix-ops'
] as const
function fromEntries<T> (iterable: Array<[string, T]>): Record<string, T> {
  return [...iterable].reduce<Record<string, T>>((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {})
}

/**
 * @see https://github.com/standard/eslint-config-standard-with-typescript
 */
export const typescriptRulesFromESLintConfigStandardWithTypeScript = {
  'comma-dangle': ['off'],

  // TypeScript has this functionality by default:
  'no-undef': ['off'],

  // Rules replaced by @typescript-eslint versions:
  ...fromEntries(equivalents.map((name) => [name, 'off'])),
  camelcase: ['off'],
  'no-use-before-define': ['off'],

  // @typescript-eslint versions of Standard.js rules:
  ...fromEntries(equivalents.map((name) => [`@typescript-eslint/${name}`, javascriptRulesFromStandard[name]])),
  '@typescript-eslint/no-use-before-define': ['error', {
    functions: false,
    classes: false,
    enums: false,
    variables: false,
    typedefs: false // Only the TypeScript rule has this option.
  }],

  // Rules exclusive to Standard TypeScript:
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/comma-dangle': ['error', {
    arrays: 'never',
    objects: 'never',
    imports: 'never',
    exports: 'never',
    functions: 'never',
    enums: 'ignore',
    generics: 'ignore',
    tuples: 'ignore'
  }],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never'
    }
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-function-return-type': ['error', {
    allowExpressions: true,
    allowHigherOrderFunctions: true,
    allowTypedFunctionExpressions: true,
    allowDirectConstAssertionInArrowFunctions: true
  }],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'comma', requireLast: false }
    }
  ],
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': ['error', {
    selector: 'variableLike',
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE']
  }],
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
  '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
  '@typescript-eslint/return-await': ['error', 'always'],
  '@typescript-eslint/strict-boolean-expressions': ['error', {
    allowString: false,
    allowNumber: false,
    allowNullableObject: false,
    allowNullableBoolean: false,
    allowNullableString: false,
    allowNullableNumber: false,
    allowAny: false
  }],
  '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
  '@typescript-eslint/type-annotation-spacing': 'error',
  'no-void': ['error', { allowAsStatement: true }]
}

export const typescriptRulesFromImport = {
  // TypeScript compilation already ensures that named imports exist in the referenced module
  'import/named': 'off'
}

export const typescriptRules = {
  ...typescriptRulesFromJavaScript,
  ...typescriptRulesFromTypeScriptESLintESLintRecommended,
  ...typescriptRulesFromTypeScriptESLint,
  ...typescriptRulesFromESLintConfigStandardWithTypeScript,
  ...typescriptRulesFromImport,
  '@typescript-eslint/no-non-null-assertion': ['off'],
  '@typescript-eslint/unified-signatures': ['off'],
  '@typescript-eslint/no-unsafe-assignment': ['off'],
  'dot-notation': ['off']
}
export const typescriptSettings = {
  'import/extensions': ['.ts', '.mts', '.cts', '.tsx', '.js', '.mjs', '.cjs', '.jsx'],
  'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.mts', '.d.ts', '.cts', '.tsx']
  },
  'import/resolver': {
    node: {
      extensions: ['.ts', '.mts', '.cts', '.tsx', '.js', '.mjs', '.cjs', '.jsx']
    },
    /**
     * @see https://github.com/import-js/eslint-import-resolver-typescript
     */
    typescript: {
      alwaysTryTypes: true,
      project: typescriptParserOptions.project
    }
  }
}

export const typescriptOverride = {
  files: ['*.ts', '*.d.ts', '*.mts', '*.cts'],
  extends: [],
  plugins: [...typescriptPlugins],
  parser: '@typescript-eslint/parser',
  parserOptions: typescriptParserOptions,
  rules: {
    ...typescriptRules
  }
}
