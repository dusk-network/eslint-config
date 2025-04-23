import { defineConfig } from "eslint/config";
import globals from "globals";

import jsConfig from "./js/index.js";

export default defineConfig([
  {
    extends: [jsConfig],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2016,
        ...globals.node,
      },
    },
  },
]);
