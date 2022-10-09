// Inline from https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/recommended.js
// Inline time: 2022-10-09 17:44:00
// Latest commit: https://github.com/vuejs/eslint-plugin-vue/commit/166dfbff5101a01c5cde140d4316b584e2909e0a

/*
 * IMPORTANT!
 * This file has been automatically generated,
 * in order to update its content execute "npm run update"
 */
module.exports = {
  extends: require.resolve('./strongly-recommended'),
  rules: {
    'vue/attributes-order': 'warn',
    'vue/component-tags-order': 'warn',
    'vue/no-lone-template': 'warn',
    'vue/no-multiple-slot-args': 'warn',
    'vue/no-v-html': 'warn',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'warn'
  }
}
