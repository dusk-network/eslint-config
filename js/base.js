module.exports = {
  rules: {
    "array-callback-return": ["error", { allowImplicit: true }],
    "class-methods-use-this": 0,
    complexity: ["error", 14],
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
    "consistent-this": "error",
    curly: ["error", "all"],
    "default-case": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "max-depth": ["error", 3],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 5],
    "max-statements": ["error", 15, { ignoreTopLevelFunctions: true }],
    "new-cap": ["error", { newIsCap: true, properties: true }],
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-nested-ternary": 0,
    "no-new": "error",
    "no-octal-escape": "error",
    "no-param-reassign": 0,
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": ["error", "event"],
    "no-return-assign": ["error", "always"],
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-throw-literal": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: false,
      },
    ],
    "no-unused-vars": [2, { args: "after-used" }],
    "no-use-before-define": [0, "nofunc"],
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-var": "error",
    "no-with": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    radix: "error",
    strict: ["error", "function"],
    yoda: "error",
  },
};
