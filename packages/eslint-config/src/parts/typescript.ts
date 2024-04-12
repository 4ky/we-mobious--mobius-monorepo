import { cwd } from 'node:process'

import tseslint from 'typescript-eslint'

import { javascriptPlugins, javascriptRulesFromStandard, javascriptRulesFromMobius, javascriptRules } from './javascript'

import type { LanguageOptions, Plugins, Settings, Rules, FlatConfigItem } from '../types'

export const typescriptLanguageOptions: LanguageOptions = {
  parser: tseslint.parser,
  /**
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/README.md
   * @see https://typescript-eslint.io/packages/parser/
   */
  parserOptions: {
    allowAutomaticSingleRunInference: true,
    cacheLifetime: {
      glob: 30
    },
    ecmaFeatures: {
      jsx: false,
      globalReturn: false
    },
    ecmaVersion: 'latest',
    /**
     * Note: 注意 `sourceType` 并不是 `@typescript-eslint/parser` 的选项，而是 `espree` 的选项。
     *       此处 `parserOptions` 是所有有可能被使用的 `parser` 的选项的并集。
     */
    sourceType: 'module',
    emitDecoratorMetadata: undefined,
    experimentalDecorators: undefined,
    extraFileExtensions: undefined,
    jsDocParsingMode: 'none',
    jsxFragmentName: null,
    jsxPragma: 'React',
    programs: undefined,
    project: true,
    projectFolderIgnoreList: ['**/node_modules/**'],
    /**
     * Should using with `eslint.workingDirectories` in `.vscode/settings.json`.
     * For rules that need type information({@link https://typescript-eslint.io/linting/typed-linting/}).
     * @see {@link https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint}
     * @see {@link https://github.com/antfu/eslint-config/blob/65baf204430a125d7a3fe6f7ab513814a43d810e/src/configs/typescript.ts#L66-L71}
     */
    tsconfigRootDir: cwd(),
    warnOnUnsupportedTypeScriptVersion: true,
    EXPERIMENTAL_useProjectService: true
  }
}

export const typescriptPlugins: Plugins = {
  ...javascriptPlugins,
  typescript: tseslint.plugin
}

export const typescriptSettings: Settings = {
  'import-x/external-module-folders': ['node_modules'],
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/utils/parse.js
   */
  'import-x/parsers': {
    '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.d.ts', '.d.mts', '.d.cts'],
    /**
     * Note: 即使是为 TypeScript 定制的规则，也需要添加 `expree` 作为 `parser`，
     *       因为 `eslint-plugin-import` 的部分规则会分析依赖，而即使是 TypeScript 项目，
     *       来自 `node_modules` 的依赖也经常是 `.js` 文件。
     */
    espree: ['.js', '.mjs', '.cjs']
  },
  'import-x/resolver': {
    node: {
      extensions: ['.ts', '.mts', '.cts']
    },
    /**
     * @see https://github.com/import-js/eslint-import-resolver-typescript
     */
    typescript: {
      extensions: ['.ts', '.mts', '.cts', '.d.ts', '.d.mts', '.d.cts'],
      alwaysTryTypes: true
    }
  },
  'import-x/cache': {
    lifetime: 30
  }
}

export const typescriptRulesFromJavaScript: Rules = { ...javascriptRules }

/**
 * @see https://typescript-eslint.io/docs/linting/configs#eslint-recommended
 */
export const typescriptRulesFromTypeScriptESLintESLintRecommended: Rules = {
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
export const typescriptRulesFromTypeScriptESLint: Rules = {
  // TypeScript Rules
  'typescript/adjacent-overload-signatures': ['error'],
  'typescript/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],

  'typescript/ban-ts-comment': ['error'],
  'typescript/ban-types': ['error'],
  'no-array-constructor': ['off'],
  'typescript/no-array-constructor': ['error'],
  'no-empty-function': ['off'],
  'typescript/no-empty-function': ['error'],
  'typescript/no-empty-interface': ['error'],
  'typescript/no-explicit-any': ['warn'],
  'typescript/no-extra-non-null-assertion': ['error'],
  'no-extra-semi': ['off'],
  'typescript/no-extra-semi': ['error'],
  'typescript/no-inferrable-types': ['error'],
  'no-loss-of-precision': ['off'],
  'typescript/no-loss-of-precision': ['error'],
  'typescript/no-misused-new': ['error'],
  'typescript/no-namespace': ['error'],
  'typescript/no-non-null-asserted-optional-chain': ['error'],
  'typescript/no-non-null-assertion': ['warn'],
  'typescript/no-this-alias': ['error'],
  'typescript/no-unnecessary-type-constraint': ['error'],
  'no-unused-vars': ['off'],
  'typescript/no-unused-vars': ['warn'],
  'typescript/no-var-requires': ['error'],
  'typescript/prefer-as-const': ['error'],
  'typescript/prefer-namespace-keyword': ['error'],
  'typescript/triple-slash-reference': ['error'],

  'typescript/await-thenable': ['error'],
  'typescript/no-floating-promises': ['error'],
  'typescript/no-for-in-array': ['error'],
  'no-implied-eval': ['off'],
  'typescript/no-implied-eval': ['error'],
  'typescript/no-misused-promises': ['error'],
  'typescript/no-unnecessary-type-assertion': ['error'],
  'typescript/no-unsafe-argument': ['error'],
  'typescript/no-unsafe-assignment': ['error'],
  'typescript/no-unsafe-call': ['error'],
  'typescript/no-unsafe-member-access': ['error'],
  'typescript/no-unsafe-return': ['error'],
  'require-await': ['off'],
  'typescript/require-await': ['error'],
  'typescript/restrict-plus-operands': ['error'],
  'typescript/restrict-template-expressions': ['error'],
  'typescript/unbound-method': ['error'],

  'typescript/ban-tslint-comment': ['warn'],
  'typescript/class-literal-property-style': ['warn'],
  'typescript/consistent-indexed-object-style': ['warn'],
  'typescript/consistent-generic-constructors': ['warn'],
  'typescript/consistent-type-assertions': ['warn'],
  'typescript/consistent-type-definitions': ['warn'],
  'dot-notation': ['off'],
  'typescript/dot-notation': ['warn', {
    allKeywords: false,
    allowPrivateClassPropertyAccess: false,
    allowProtectedClassPropertyAccess: false,
    allowIndexSignaturePropertyAccess: false
  }],
  'typescript/no-base-to-string': ['warn'],
  'typescript/no-confusing-non-null-assertion': ['warn'],
  'typescript/no-duplicate-enum-values': ['warn'],
  'typescript/no-dynamic-delete': ['warn'],
  'typescript/no-extraneous-class': ['warn'],
  'typescript/no-invalid-void-type': ['warn'],
  'typescript/no-meaningless-void-operator': ['warn'],
  'typescript/no-non-null-asserted-nullish-coalescing': ['warn'],
  'no-throw-literal': ['off'],
  'typescript/no-throw-literal': ['warn'],
  'typescript/no-unnecessary-boolean-literal-compare': ['warn'],
  'typescript/no-unnecessary-condition': ['warn', {
    allowConstantLoopConditions: true,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
  }],
  'typescript/no-unnecessary-type-arguments': ['warn'],
  'no-useless-constructor': ['off'],
  'typescript/no-useless-constructor': ['warn'],
  'typescript/non-nullable-type-assertion-style': ['warn'],
  'typescript/prefer-for-of': ['warn'],
  'typescript/prefer-function-type': ['warn'],
  'typescript/prefer-includes': ['warn'],
  'typescript/prefer-literal-enum-member': ['warn'],
  'typescript/prefer-nullish-coalescing': ['warn', {
    ignoreTernaryTests: false,
    ignoreConditionalTests: false,
    ignoreMixedLogicalExpressions: false,
    ignorePrimitives: {
      bigint: false,
      boolean: false,
      number: false,
      string: false
    },
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
  }],
  'typescript/prefer-optional-chain': ['warn'],
  'typescript/prefer-reduce-type-parameter': ['warn'],
  'typescript/prefer-return-this-type': ['warn'],
  'typescript/prefer-string-starts-ends-with': ['warn'],
  'typescript/prefer-ts-expect-error': ['warn'],
  'typescript/unified-signatures': ['warn']
}

const equivalentsBetweenTypeScriptESLintRulesAndJavaScriptRulesFromStandard = [
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
export const typescriptRulesFromESLintConfigStandardWithTypeScript: Rules = {
  'comma-dangle': ['off'],

  // TypeScript has this functionality by default:
  'no-undef': ['off'],

  // Rules replaced by @typescript-eslint versions:
  ...fromEntries(equivalentsBetweenTypeScriptESLintRulesAndJavaScriptRulesFromStandard.map((name) => [name, 'off'])),
  camelcase: ['off'],
  'no-use-before-define': ['off'],

  // @typescript-eslint versions of Standard.js rules:
  ...fromEntries(equivalentsBetweenTypeScriptESLintRulesAndJavaScriptRulesFromStandard.map((name) => [`typescript/${name}`, javascriptRulesFromStandard[name]])),
  'typescript/no-use-before-define': ['error', {
    functions: false,
    classes: false,
    enums: false,
    variables: false,
    typedefs: false // Only the TypeScript rule has this option.
  }],

  // Rules exclusive to Standard TypeScript:
  'typescript/adjacent-overload-signatures': 'error',
  'typescript/array-type': ['error', { default: 'array-simple' }],
  'typescript/comma-dangle': ['error', {
    arrays: 'never',
    objects: 'never',
    imports: 'never',
    exports: 'never',
    functions: 'never',
    enums: 'ignore',
    generics: 'ignore',
    tuples: 'ignore'
  }],
  'typescript/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never'
    }
  ],
  'typescript/consistent-type-definitions': ['error', 'interface'],
  'typescript/explicit-function-return-type': ['error', {
    allowExpressions: true,
    allowHigherOrderFunctions: true,
    allowTypedFunctionExpressions: true,
    allowDirectConstAssertionInArrowFunctions: true
  }],
  'typescript/member-delimiter-style': [
    'error',
    {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'comma', requireLast: false }
    }
  ],
  'typescript/method-signature-style': 'error',
  'typescript/naming-convention': ['error', {
    selector: 'variableLike',
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE']
  }],
  'typescript/no-base-to-string': 'error',
  'typescript/no-dynamic-delete': 'error',
  'typescript/no-empty-interface': ['error', { allowSingleExtends: true }],
  'typescript/no-extra-non-null-assertion': 'error',
  'typescript/no-extraneous-class': ['error', { allowWithDecorator: true }],
  'typescript/no-floating-promises': 'error',
  'typescript/no-for-in-array': 'error',
  'typescript/no-implied-eval': 'error',
  'typescript/no-invalid-void-type': 'error',
  'typescript/no-misused-new': 'error',
  'typescript/no-misused-promises': 'error',
  'typescript/no-namespace': 'error',
  'typescript/no-non-null-asserted-optional-chain': 'error',
  'typescript/no-non-null-assertion': 'error',
  'typescript/no-this-alias': ['error', { allowDestructuring: true }],
  'typescript/no-unnecessary-boolean-literal-compare': 'error',
  'typescript/no-unnecessary-type-assertion': 'error',
  'typescript/no-var-requires': 'error',
  'typescript/prefer-function-type': 'error',
  'typescript/prefer-includes': 'error',
  'typescript/prefer-nullish-coalescing': ['warn', {
    ignoreTernaryTests: false,
    ignoreConditionalTests: false,
    ignoreMixedLogicalExpressions: false,
    ignorePrimitives: {
      bigint: false,
      boolean: false,
      number: false,
      string: false
    },
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
  }],
  'typescript/prefer-optional-chain': 'error',
  'typescript/prefer-readonly': 'error',
  'typescript/prefer-reduce-type-parameter': 'error',
  'typescript/prefer-ts-expect-error': 'error',
  'typescript/promise-function-async': 'error',
  'typescript/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
  'typescript/restrict-plus-operands': ['error', {
    allowAny: false,
    allowBoolean: false,
    allowNullish: false,
    allowNumberAndString: false,
    allowRegExp: false,
    skipCompoundAssignments: false
  }],
  'typescript/restrict-template-expressions': ['error', { allowNumber: true }],
  'typescript/return-await': ['error', 'always'],
  'typescript/strict-boolean-expressions': ['error', {
    allowString: false,
    allowNumber: false,
    allowNullableObject: false,
    allowNullableBoolean: false,
    allowNullableString: false,
    allowNullableNumber: false,
    allowNullableEnum: false,
    allowAny: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
  }],
  'typescript/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
  'typescript/type-annotation-spacing': 'error',
  'no-void': ['error', { allowAsStatement: true }]
}

export const typescriptRulesFromImport = {
  // TypeScript compilation already ensures that named imports exist in the referenced module
  'import-x/named': 'off'
}

export const equivalentsBetweenTypeScriptESLintRulesAndJavaScriptRulesFromMobius = [
  'no-unused-vars'
] as const
export const typescriptRulesFromMobius = {
  ...fromEntries(equivalentsBetweenTypeScriptESLintRulesAndJavaScriptRulesFromMobius.map((name) => [name, 'off'])),
  ...fromEntries(equivalentsBetweenTypeScriptESLintRulesAndJavaScriptRulesFromMobius.map((name) => [`typescript/${name}`, javascriptRulesFromMobius[name]])),
  'typescript/no-non-null-assertion': ['off'],
  'typescript/unified-signatures': ['off'],
  'typescript/no-unsafe-assignment': ['off'],
  'dot-notation': ['off'],
  'typescript/no-empty-interface': ['warn', { allowSingleExtends: true }],
  // @see https://typescript-eslint.io/rules/require-await/
  // @see https://eslint.org/docs/rules/require-await
  // @see https://typescript-eslint.io/rules/promise-function-async/
  'typescript/require-await': ['off']
}

export const typescriptRules = {
  ...typescriptRulesFromJavaScript,
  ...typescriptRulesFromTypeScriptESLintESLintRecommended,
  ...typescriptRulesFromTypeScriptESLint,
  ...typescriptRulesFromESLintConfigStandardWithTypeScript,
  ...typescriptRulesFromImport,
  ...typescriptRulesFromMobius
}

export const typescript: FlatConfigItem = {
  files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.d.ts', '**/*.d.mts', '**/*.d.cts'],
  languageOptions: typescriptLanguageOptions,
  plugins: typescriptPlugins,
  settings: typescriptSettings,
  rules: typescriptRules
}
