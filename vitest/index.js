const rules = ["./base"].map(require.resolve);

module.exports = {
  extends: ["plugin:vitest/recommended", ...rules],
  overrides: [
    {
      files: ["*.spec.js", "*.test.js"],
      rules: {
        "max-statements": 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vitest"],
};
