import vitest from "@vitest/eslint-plugin";

import defaultJsConfig from "../js/index.js";

import baseRules from "./base.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...defaultJsConfig,
  vitest.configs.recommended,
  {
    languageOptions: {
      // the import plugin sets it to "2018" which overrides the default,
      // so by good measure we specify even the source type.
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: baseRules,
  },
];
