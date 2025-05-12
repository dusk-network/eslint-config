import { defineConfig } from "@eslint/config-helpers";
import globals from "globals";

import jsConfig from "./js/index.js";

export default defineConfig([
  {
    extends: [jsConfig],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
      sourceType: "module",
    },
  },
]);
