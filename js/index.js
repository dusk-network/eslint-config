import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier/flat";

import baseRules from "./base.js";
import importRules from "./import.js";
import styleRules from "./style.js";

const rules = {
  ...baseRules,
  ...importRules,
  ...styleRules,
};

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...rules,
    },
  },
  prettierConfig,
];
