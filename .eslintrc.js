module.exports = {
  extends: [
    "airbnb-base-typescript",
    "prettier",
    "plugin:jest/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/prefer-default-export": ["off"],
  },
};
