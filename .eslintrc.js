module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error", { singleQuote: false, endOfLine: "auto" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
