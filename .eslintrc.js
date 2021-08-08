module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint'],
  rules: {},
};
