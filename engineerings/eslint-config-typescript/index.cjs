
module.exports = {
  extends: ['@we-mobius/eslint-config-basic'],
  overrides: [
    {
      files: [
        '*.ts',
        '*.d.ts'
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'standard-with-typescript'
      ],
      ecmaFeatures: {
        jsx: false
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json'
      },
      plugins: [
        '@typescript-eslint/eslint-plugin'
      ],
      rules: {
        '@typescript-eslint/no-non-null-assertion': [
          'off'
        ],
        '@typescript-eslint/unified-signatures': [
          'off'
        ],
        '@typescript-eslint/no-unsafe-assignment': [
          'off'
        ],
        'dot-notation': [
          'off'
        ]
      }
    }
  ],
  plugins: [],
  rules: { }
}
