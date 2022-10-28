module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    indent: ["error", 2],
    "no-console": ["error", { allow: ["warn", "error"] }],
    quotes: ["error", "double"],
    "object-curly-spacing": [
      "error",
      "always",
      { arraysInObjects: true, objectsInObjects: true },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", ["parent", "sibling"], "index"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "arrow-spacing": ["error", { before: true, after: true }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/prefer-default-export": ["error"],
    "multiline-ternary": ["error", "always-multiline"],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "comma-spacing": ["error", { before: false, after: true }],
  },
};
