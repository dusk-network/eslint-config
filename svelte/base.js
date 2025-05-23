export default {
  "svelte/button-has-type": [
    "error",
    {
      button: true,
      reset: true,
      submit: true,
    },
  ],
  "svelte/html-closing-bracket-spacing": [
    "error",
    {
      selfClosingTag: "always",
    },
  ],
  "svelte/infinite-reactive-loop": "error",
  "svelte/no-at-debug-tags": "error",
  "svelte/no-at-html-tags": "error",
  "svelte/no-dom-manipulating": "error",
  "svelte/no-dupe-else-if-blocks": "error",
  "svelte/no-dupe-on-directives": "error",
  "svelte/no-dupe-style-properties": "error",
  "svelte/no-dupe-use-directives": "error",
  "svelte/no-dynamic-slot-name": "error",
  "svelte/no-immutable-reactive-statements": "error",
  "svelte/no-not-function-handler": "error",
  "svelte/no-reactive-functions": "error",
  "svelte/no-reactive-literals": "error",
  "svelte/no-reactive-reassign": "error",
  "svelte/no-shorthand-style-property-overrides": "error",
  "svelte/no-store-async": "error",
  "svelte/no-target-blank": [
    "error",
    {
      allowReferrer: false,
      enforceDynamicLinks: "always",
    },
  ],
  "svelte/no-unknown-style-directive-property": "error",
  "svelte/no-unused-svelte-ignore": "error",
  "svelte/no-useless-mustaches": [
    "error",
    {
      ignoreIncludesComment: true,
      ignoreStringEscape: true,
    },
  ],
  "svelte/prefer-destructured-store-props": "error",
  "svelte/require-each-key": "error",
  "svelte/require-optimized-style-attribute": 0,
  "svelte/require-store-callbacks-use-set-param": "error",
  "svelte/require-store-reactive-access": "error",
  "svelte/require-stores-init": "error",
  "svelte/valid-compile": ["error", { ignoreWarnings: false }],
  "svelte/valid-each-key": "error",
};
