// Inline from https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
// Inline time: 2022-10-06 22:05:00
// Latest commit: https://github.com/import-js/eslint-plugin-import/commit/369b502b68ad8b3a69ea52605cf81b3bacc8ebf0

module.exports = {
  plugins: ['import'],

  rules: {
    // analysis/correctness
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',

    // red flags (thus, warnings)
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-duplicates': 'warn'
  },

  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  }
}
