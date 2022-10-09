// Inline from https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/base.js
// Inline time: 2022-10-09 17:44:00
// Latest commit: https://github.com/vuejs/eslint-plugin-vue/commit/2f963153a4bb21e973b12249eea5b68512060a57

/*
 * IMPORTANT!
 * This file has been automatically generated,
 * in order to update its content execute "npm run update"
 */
module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['vue'],
  rules: {
    'vue/comment-directive': 'error',
    'vue/jsx-uses-vars': 'error'
  }
}
