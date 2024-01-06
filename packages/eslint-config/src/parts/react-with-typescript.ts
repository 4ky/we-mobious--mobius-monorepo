import typescriptEslintParser from '@typescript-eslint/parser'
import reactEslintPlugin from 'eslint-plugin-react'
import reactHooksEslintPlugin from 'eslint-plugin-react-hooks'
import reactRefreshEslintPlugin from 'eslint-plugin-react-refresh'

import { typescriptPlugins, typescriptSettings, typescriptRules } from './typescript'

import type { LanguageOptions, Plugins, Settings, Rules, FlatConfigItem } from '../types'

export const reactWithTypescriptLanguageOptions: LanguageOptions = {
  parser: typescriptEslintParser,
  /**
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/README.md
   * @see https://typescript-eslint.io/packages/parser/
   */
  parserOptions: {
    cacheLifetime: {
      glob: 30
    },
    ecmaFeatures: {
      jsx: true,
      globalReturn: false
    },
    ecmaVersion: 'latest',
    emitDecoratorMetadata: undefined,
    extraFileExtensions: undefined,
    jsDocParsingMode: 'none',
    project: true,
    projectFolderIgnoreList: ['**/node_modules/**'],
    tsconfigRootDir: undefined,
    warnOnUnsupportedTypeScriptVersion: true,
    EXPERIMENTAL_useProjectService: true
  }
}

export const reactWithTypescriptPlugins: Plugins = {
  ...typescriptPlugins,
  react: reactEslintPlugin,
  'react-hooks': reactHooksEslintPlugin,
  'react-refresh': reactRefreshEslintPlugin
}

export const reactWithTypeScriptSettings: Settings = {
  ...typescriptSettings,
  react: {
    createClass: 'createReactClass', // Regex for Component Factory to use,
    // default to "createReactClass"
    pragma: 'React', // Pragma to use, default to "React"
    fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
    version: 'detect' // React version. "detect" automatically picks the version you have installed.
    // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
    // It will default to "latest" and warn if missing, and to "detect" in the future
    // "flowVersion": "0.53" // Flow version
  }
}

export const reactWithTypeScriptRulesBase: Rules = {
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md}
   */
  'react/boolean-prop-naming': ['error', {
    propTypeNames: ['bool', 'boolean'],
    rule: '^(is|has|can|should)[A-Z]([A-Za-z0-9]?)+',
    message: 'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
    validateNested: true
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md}
   */
  'react/button-has-type': ['error', {
    button: true,
    submit: true,
    reset: true
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md}
   */
  'react/default-props-match-prop-types': ['error', {
    allowRequiredDefaults: true
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md}
   */
  'react/destructuring-assignment': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md}
   */
  'react/display-name': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md}
   */
  'react/forbid-component-props': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md}
   */
  'react/forbid-dom-props': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md}
   */
  'react/forbid-elements': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md}
   */
  'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: false }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md}
   */
  'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'], checkContextTypes: true, checkChildContextTypes: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md}
   */
  'react/function-component-definition': ['error', {
    namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
    unnamedComponents: ['function-expression', 'arrow-function']
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md}
   * @todo Until 2023-01-06 with eslint-plugin-react 7.31.11, the option `allowDestructuredState` is not supported.
   */
  // 'react/hook-use-state': ['error', { allowDestructuredState: true }],
  'react/hook-use-state': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md}
   */
  'react/iframe-missing-sandbox': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md}
   */
  'react/jsx-boolean-value': ['error', 'always', { never: [] }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md}
   */
  'react/jsx-child-element-spacing': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md}
   */
  'react/jsx-closing-bracket-location': ['error', {
    nonEmpty: 'line-aligned',
    selfClosing: 'line-aligned'
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md}
   */
  'react/jsx-closing-tag-location': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md}
   */
  'react/jsx-curly-brace-presence': ['error', {
    props: 'never',
    children: 'never',
    propElementValues: 'always'
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md}
   */
  'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md}
   */
  'react/jsx-curly-spacing': ['error', {
    when: 'always',
    children: true,
    spacing: {
      objectLiterals: 'always'
    }
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md}
   */
  'react/jsx-equals-spacing': ['error', 'never'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
   */
  'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.jsx', '.mjsx', '.tsx', '.mtsx'] }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md}
   */
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md}
   */
  'react/jsx-fragments': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md}
   */
  'react/jsx-handler-names': ['error', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on',
    checkLocalVariables: true,
    checkInlineFunction: true
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md}
   */
  'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md}
   */
  'react/jsx-indent-props': ['error', { indentMode: 2, ignoreTernaryOperator: false }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md}
   */
  'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md}
   */
  'react/jsx-max-depth': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md}
   */
  'react/jsx-max-props-per-line': ['error', {
    maximum: { single: 5, multiline: 5 }
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md}
   *
   * Ugly, determined by the developer to be better than the forced newline.
   */
  'react/jsx-newline': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
   */
  'react/jsx-no-bind': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md}
   */
  'react/jsx-no-comment-textnodes': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md}
   */
  'react/jsx-no-constructed-context-values': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md}
   */
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md}
   */
  'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary', 'coerce'] }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md}
   */
  'react/jsx-no-literals': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md}
   */
  'react/jsx-no-script-url': ['error', []],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md}
   */
  'react/jsx-no-target-blank': ['error', {
    allowReferrer: false,
    enforceDynamicLinks: 'always',
    warnOnSpreadAttributes: false,
    links: true,
    forms: false
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md}
   */
  'react/jsx-no-undef': ['error', { allowGlobals: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md}
   */
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md}
   */
  'react/jsx-one-expression-per-line': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md}
   */
  'react/jsx-pascal-case': ['error', { allowAllCaps: false, allowNamespace: false, allowLeadingUnderscore: false }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md}
   */
  'react/jsx-props-no-multi-spaces': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md}
   */
  'react/jsx-props-no-spreading': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md}
   */
  'react/jsx-sort-props': ['error', {
    ignoreCase: true,
    callbacksLast: true,
    shorthandFirst: false,
    shorthandLast: false,
    multiline: 'first',
    noSortAlphabetically: false,
    reservedFirst: true,
    locale: 'zh'
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md}
   */
  'react/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'proportional-always',
    afterOpening: 'never',
    beforeClosing: 'proportional-always'
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md}
   */
  'react/jsx-uses-react': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md}
   */
  'react/jsx-uses-vars': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md}
   */
  'react/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line'
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md}
   */
  'react/no-access-state-in-setstate': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md}
   */
  'react/no-adjacent-inline-elements': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md}
   */
  'react/no-array-index-key': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md}
   */
  'react/no-arrow-function-lifecycle': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md}
   */
  'react/no-children-prop': ['error', { allowFunctions: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md}
   */
  'react/no-danger': ['warn'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md}
   */
  'react/no-danger-with-children': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md}
   */
  'react/no-deprecated': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md}
   */
  'react/no-did-mount-set-state': ['warn', 'disallow-in-func'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md}
   */
  'react/no-did-update-set-state': ['warn', 'disallow-in-func'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md}
   */
  'react/no-direct-mutation-state': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md}
   */
  'react/no-find-dom-node': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md}
   */
  'react/no-invalid-html-attribute': ['error', ['rel']],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md}
   */
  'react/no-is-mounted': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md}
   */
  'react/no-multi-comp': ['error', { ignoreStateless: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md}
   */
  'react/no-namespace': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md}
   * @todo Until 2023-01-06 with eslint-plugin-react 7.31.11, this rule is not available.
   */
  // 'react/no-object-type-as-default-prop': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md}
   */
  'react/no-redundant-should-component-update': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md}
   */
  'react/no-render-return-value': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md}
   */
  'react/no-set-state': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md}
   */
  'react/no-string-refs': ['error', { noTemplateLiterals: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md}
   */
  'react/no-this-in-sfc': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md}
   */
  'react/no-typos': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md}
   */
  'react/no-unescaped-entities': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md}
   */
  'react/no-unknown-property': ['error', { ignore: [] }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md}
   */
  'react/no-unsafe': ['error', { checkAliases: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md}
   */
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md}
   */
  'react/no-unused-class-component-methods': ['warn'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md}
   */
  'react/no-unused-prop-types': ['warn', { ignore: [], customValidators: [], skipShapeProps: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md}
   */
  'react/no-unused-state': ['warn'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md}
   */
  'react/no-will-update-set-state': ['error', 'disallow-in-func'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md}
   */
  'react/prefer-es6-class': ['error', 'always'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md}
   */
  'react/prefer-exact-props': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md}
   */
  'react/prefer-read-only-props': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md}
   */
  'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md}
   */
  'react/prop-types': ['error', { ignore: [], customValidators: [], skipUndeclared: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md}
   */
  'react/react-in-jsx-scope': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md}
   */
  'react/require-default-props': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md}
   */
  'react/require-optimization': ['error', { allowDecorators: ['pureRender'] }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md}
   */
  'react/require-render-return': ['error'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md}
   */
  'react/self-closing-comp': ['error', { component: true, html: false }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md}
   */
  'react/sort-comp': ['error', {
    order: [
      'static-methods',
      'lifecycle',
      'everything-else',
      'render'
    ],
    groups: {
      lifecycle: [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'state',
        'getInitialState',
        'getChildContext',
        'getDerivedStateFromProps',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentDidCatch',
        'componentWillUnmount'
      ]
    }
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md}
   * @todo Until 2023-01-06 with eslint-plugin-react 7.31.11, this rule is not available.
   */
  // 'react/sort-default-props': ['off', { ignoreCase: true }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md}
   */
  'react/sort-prop-types': ['off', {
    ignoreCase: true,
    noSortAlphabetically: true,
    sortShapeProp: true,
    requiredFirst: false,
    callbacksLast: false
  }],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md}
   */
  'react/state-in-constructor': ['error', 'always'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md}
   */
  'react/static-property-placement': ['error', 'static public field'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md}
   */
  'react/style-prop-object': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md}
   */
  'react/void-dom-elements-no-children': ['error']
}

export const reactWithTypeScriptRulesJSXRuntime: Rules = {
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md}
   */
  'react/jsx-uses-react': ['off'],
  /**
   * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md}
   */
  'react/react-in-jsx-scope': ['off']
}

/**
 * @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh
 */
export const reactWithTypeScriptRulesFromRefresh: Rules = {
  'react-refresh/only-export-components': ['warn', {
    allowExportNames: [],
    allowConstantExport: true,
    checkJS: false
  }]
}

/**
 * @see {@link https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks}
 */
export const reactWithTypeScriptRulesFromHooks: Rules = {
  'react-hooks/rules-of-hooks': ['error'],
  'react-hooks/exhaustive-deps': ['warn']
}

export const reactWithTypeScriptRulesFromMobius: Rules = {
  /**
   * @see {@link https://typescript-eslint.io/rules/explicit-function-return-type/}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md}
   *
   * '.tsx' (or '.jsx', '.cjsx', etc.) files are not checked for return types.
   * These files are expected to only contain Functional Component themselves.
   * Always explicitly write the return type is not necessary and can be annoying.
   */
  '@typescript-eslint/explicit-function-return-type': ['off']
}

export const reactRules: Rules = {
  ...typescriptRules,
  ...reactWithTypeScriptRulesBase,
  ...reactWithTypeScriptRulesJSXRuntime,
  ...reactWithTypeScriptRulesFromHooks,
  ...reactWithTypeScriptRulesFromRefresh,
  ...reactWithTypeScriptRulesFromMobius
}

export const reactWithTypescript: FlatConfigItem = {
  files: ['**/*.tsx', '.ctsx', '**/*.mtsx'],
  ignores: [],
  plugins: reactWithTypescriptPlugins,
  settings: reactWithTypeScriptSettings,
  rules: reactRules
}
