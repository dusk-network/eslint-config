const rules = ["./base", "./import", "./import-newlines", "./style"].map(
  require.resolve
);

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    ...rules,
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import-newlines"],
};
