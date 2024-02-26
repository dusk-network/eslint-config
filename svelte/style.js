module.exports = {
  rules: {
    "svelte/comment-directive": [
      "error",
      { reportUnusedDisableDirectives: true },
    ],
    "svelte/derived-has-same-inputs-outputs": "error",
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
    "svelte/spaced-html-comment": ["error", "always"],
  },
};
