module.exports = {
  env: { es2021: true, browser: true, jest: true, node: true },
  plugins: ["simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
};
