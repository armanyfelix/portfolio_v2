module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    'plugin:@next/next/recommended',
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  // plugins: ["@typescript-eslint", "next"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2022,
    // Allows for the use of imports
    sourceType: "module",
  },
}
