module.exports = {
    root: true,
    extends: ["eslint:recommended", "prettier", "plugin:tailwindcss/recommended"],
    plugins: ["svelte3"],
    overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
    },
    globals: {
      window: true,
      module: true,
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    settings: {
      "svelte3/ignore-styles": () => true,
    },
  };
  