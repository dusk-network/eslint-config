import sveltePlugin from "eslint-plugin-svelte";
import globals from "globals";

import baseRules from "./base.js";
import styleRules from "./style.js";

const rules = {
  ...baseRules,
  ...styleRules,
};

export default [
  ...sveltePlugin.configs.recommended,
  ...sveltePlugin.configs.prettier,
  {
    files: ["**/*.svelte"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
    },
    rules: {
      "no-undef-init": 0,
      ...rules,
    },
    settings: {
      "import/parsers": {
        espree: [".js"],
        "svelte-eslint-parser": [".svelte"],
      },
    },
  },
];
