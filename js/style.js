module.exports = {
	rules: {
		"array-bracket-newline": ["error", "consistent"],
		"arrow-spacing": [
			"error",
			{ "after": true, "before": true }
		],
		"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"camelcase": "error",
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", { "after": true, "before": false }],
		"comma-style": ["error", "last"],
		"computed-property-spacing": ["error", "never"],
		"eol-last": "error",
		"function-paren-newline": ["error", "multiline-arguments"],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"key-spacing": [
			"error", {
				"afterColon": true,
				"beforeColon": false,
				"mode": "strict"
			}
		],
		"keyword-spacing": [
			"error", {
				"after": true,
				"before": true
			}
		],
		"linebreak-style": ["error", "unix"],
		"lines-around-comment": [
			"error", {
				"afterBlockComment": false,
				"afterLineComment": false,
				"allowArrayEnd": false,
				"allowArrayStart": true,
				"allowBlockEnd": true,
				"allowBlockStart": true,
				"allowObjectEnd": false,
				"allowObjectStart": true,
				"beforeBlockComment": true,
				"beforeLineComment": true
			}
		],
		"new-parens": "error",
		"no-extra-parens": ["error", "all", {
			"enforceForArrowConditionals": false,
			"enforceForNewInMemberExpressions": false,
			"ignoreJSX": "multi-line",
			"nestedBinaryExpressions": false
		}],
		"no-multiple-empty-lines": ["error", { "max": 1 }],
		"no-trailing-spaces": "error",
		"no-warning-comments": ["error", { "location": "anywhere" }],
		"object-curly-newline": [
			"error", {
				"ExportDeclaration": {
					"consistent": true,
					"minProperties": 4,
					"multiline": true
				},
				"ImportDeclaration": {
					"consistent": true,
					"minProperties": 4,
					"multiline": true
				},
				"ObjectExpression": {
					"consistent": true,
					"minProperties": 4,
					"multiline": true
				},
				"ObjectPattern": {
					"consistent": true,
					"minProperties": 4,
					"multiline": true
				}
			}
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"one-var": ["error", "never"],
		"operator-linebreak": [
			"error",
			"before", {
				"overrides": {
					"=": "after"
				}
			}
		],
		"padded-blocks": ["error", "never"],
		"padding-line-between-statements": [
			"error",
			{ "blankLine": "always", "next": "*", "prev": "block-like" },
			{ "blankLine": "always", "next": "block-like", "prev": "*" },
			{ "blankLine": "always", "next": "return", "prev": "*" },
			{ "blankLine": "always", "next": ["const", "let", "var"], "prev": "*" },
			{ "blankLine": "always", "next": "*", "prev": ["const", "let", "var"] },
			{ "blankLine": "any", "next": ["const", "let", "var"], "prev": ["const", "let", "var"] },
			{ "blankLine": "always", "next": "*", "prev": "directive" },
			{ "blankLine": "any", "next": "directive", "prev": "directive" }
		],
		"prefer-template": "error",
		"quote-props": ["error", "consistent"],
		"quotes": ["error", "double"],
		"semi-spacing": [
			"error", {
				"after": true,
				"before": false
			}
		],
		"sort-imports": ["error", {
			"allowSeparatedGroups": true,
			"ignoreCase": false,
			"ignoreDeclarationSort": true,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
		}],
		"sort-keys": ["error", "asc", { "caseSensitive": false, "natural": true }],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", "always"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": [
			"error", {
				"nonwords": false,
				"words": true
			}
		],
		"spaced-comment": [
			"error",
			"always", {
				"block": {
					"balanced": true
				}
			}
		],
		"switch-colon-spacing": [
			"error", {
				"after": true,
				"before": false
			}
		]
	}
};
