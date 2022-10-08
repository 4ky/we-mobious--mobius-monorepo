// Inline from https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
// Inline time: 2022-10-09 02:16:00
// Latest commit: https://github.com/import-js/eslint-plugin-import/commit/4d15e268b694e9e9946ea16d9e1b94de1b850d7c

/**
 * Adds `.jsx`, `.ts` and `.tsx` as an extension, and enables JSX/TSX parsing.
 */

// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, and 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.
const allExtensions = ['.ts', '.tsx', '.js', '.jsx']

module.exports = {

  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: allExtensions
      }
    }
  },

  rules: {
    // analysis/correctness

    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off'
  }
}
