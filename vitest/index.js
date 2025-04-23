import vitest from "@vitest/eslint-plugin";

import baseRules from "./base.js";

const rules = {
  ...baseRules,
};

export default [
  {
    ...vitest.configs.recommended,
    files: ["**/*.spec.js", "**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...rules,
      "max-nested-callbacks": ["error", 5],
      "max-statements": 0,
    },
  },
];
