/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: ['@rocketseat/eslint-config/next', 'plugin:@next/next/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
