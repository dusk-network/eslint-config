import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier/flat";

import baseRules from "./base.js";
import styleRules from "./style.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      ...baseRules,
      ...styleRules,
    },
  },
  prettierConfig,
  {
    languageOptions: {
      // the import plugin sets it to "2018" which overrides the default,
      // so by good measure we specify even the source type.
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
