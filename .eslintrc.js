module.exports = {
  env: { es2021: true, browser: true, jest: true, node: true },
  plugins: ["simple-import-sort"], //importをアルファベット順に並べ替える
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ], //外部パッケージの指定をするとparserOptions,plugins,envなど他部分も描き変わる

  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" }, //構文のルールの追加
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }], //consoleは書かない
    "prefer-arrow-callback": "error", //アロー関数を使う
    "prefer-const": "error", //letよりconstを使う
    "arrow-body-style": ["off", "always"], //returnをつけよう
    "react/prop-types": "off", //typescriptの場合は不要
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-handler-names": [
      "warn",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "never"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off", //hooksの第二引数が空などを検出
    "import/newline-after-import": "error", //importの後は１行空ける
    "import/no-default-export": "error", //defaultexportの使用
    "simple-import-sort/imports": "warn", //import文を並べ替える
    "simple-import-sort/exports": "warn", //export文を並べ替える
    "@typescript-eslint/no-explicit-any": "warn", //anyを明示的に使わない
    "@typescript-eslint/no-var-requires": "off", //importステートメントを除いてrequire禁止
    "@typescript-eslint/explicit-module-boundary-types": "off", //exportする関数の型の明記が必須
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error", //使っていない関数の検出
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      { selector: ["property", "method"], format: ["camelCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["no", "is", "has", "should"],
        filter: { regex: "^_", match: false },
      },
    ], //名前の付け方のルール
    "jsx-a11y/no-autofocus": "off", //autofocusの使用
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  }, //アンダーバーをリンクじゃない所で使用しない
  overrides: [
    {
      files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts"],
      rules: { "import/no-default-export": "off" },
    }, //上記の拡張子ファイルもチェックの対象にする
  ],
};
