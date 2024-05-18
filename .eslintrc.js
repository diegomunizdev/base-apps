// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-empty-pattern': 'error',
  },
};
