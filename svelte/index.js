import sveltePlugin from "eslint-plugin-svelte";

import baseRules from "./base.js";
import styleRules from "./style.js";

import defaultJsConfig from "../js/index.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...defaultJsConfig,
  ...sveltePlugin.configs.recommended,
  ...sveltePlugin.configs.prettier,
  {
    languageOptions: {
      // the import plugin sets it to "2018" which overrides the default,
      // so by good measure we specify even the source type.
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-undef-init": 0,
      ...baseRules,
      ...styleRules,
    },
    settings: {
      // ignoring svelte files temporarily because right
      // now we are having problems with the import plugin
      "import/ignore": ["node_modules", "\\.svelte$"],
      "import/parsers": {
        espree: [".js", "*.cjs", "*.mjs"],
        "svelte-eslint-parser": [".svelte"],
      },
    },
  },
];
