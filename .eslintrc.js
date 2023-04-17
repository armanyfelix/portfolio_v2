module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next/core-web-vitals', 'plugin:@next/next/recommended', 'google', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2022,
    // Allows for the use of imports
    sourceType: 'module',
  },
};
