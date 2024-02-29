const rules = ["./base", "./style"].map(require.resolve);

module.exports = {
  extends: ["plugin:svelte/recommended", "plugin:svelte/prettier", ...rules],
  overrides: [
    {
      files: ["*.svelte"],
      rules: {
        "no-undef-init": 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["svelte"],
  rules: {},
  settings: {
    "import/parsers": {
      espree: [".js"],
      "svelte-eslint-parser": [".svelte"],
    },
  },
};
