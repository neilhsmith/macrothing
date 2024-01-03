module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "**/apis/*"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "no-debugger": "warn",
    "no-extra-semi": "off",
    "react-refresh/only-export-components": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
}
