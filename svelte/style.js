module.exports = {
  rules: {
    "svelte/comment-directive": [
      "error",
      { reportUnusedDisableDirectives: true },
    ],
    "svelte/derived-has-same-inputs-outputs": "error",
    "svelte/first-attribute-linebreak": [
      "error",
      {
        multiline: "below",
        singleline: "beside",
      },
    ],
    "svelte/html-closing-bracket-spacing": [
      "error",
      {
        endTag: "never",
        selfClosingTag: "never",
        startTag: "never",
      },
    ],
    "svelte/html-quotes": [
      "error",
      {
        dynamic: {
          avoidInvalidUnquotedInHTML: false,
          quoted: false,
        },
        prefer: "double",
      },
    ],
    "svelte/indent": ["error", { indent: "tab", switchCase: 1 }],
    "svelte/max-attributes-per-line": [
      "error",
      {
        multiline: 1,
        singleline: 3,
      },
    ],
    "svelte/no-restricted-html-elements": [
      "error",
      {
        elements: [
          "applet",
          "basefont",
          "center",
          "dir",
          "embed",
          "font",
          "image",
          "isindex",
          "listing",
          "marquee",
          "menuitem",
          "plaintext",
          "s",
          "strike",
          "u",
          "xmp",
        ],
        message: "Do not use deprecated HTML tags",
      },
    ],
    "svelte/no-spaces-around-equal-signs-in-attribute": "error",
    "svelte/spaced-html-comment": ["error", "always"],
  },
};
