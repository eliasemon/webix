module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier","jest-dom","testing-library"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 4,
      },
    ],
    "import/prefer-default-export" : "off",
    "class-methods-use-this": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "import/newline-after-import": "error",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "linebreak-style": "off",
    "consistent-return": "off",
    "no-restricted-exports": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/no-unescaped-entities": 0,
    "arrow-body-style" : "off",
    "global-require": "off"
  },
  env: {
    node: true,
    jest: true,
    es2021: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules",
    "__tests__",
    "**/log/",
    "dist",
    "coverage",
    "**/*.d.ts",
    "**/*.js",
  ],
};