module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "prettier", "airbnb"],
  plugins: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error"],
    "import/prefer-default-export": "off",
    indent: ["error", 2],
    "max-lines": "error",
    curly: "error",
  },
};
