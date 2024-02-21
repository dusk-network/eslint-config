module.exports = {
	rules: {
		"camelcase": "error",
		"no-warning-comments": ["error", { "location": "anywhere" }],
		"one-var": ["error", "never"],
		"prefer-template": "error",
		"sort-imports": ["error", {
			"allowSeparatedGroups": true,
			"ignoreCase": false,
			"ignoreDeclarationSort": true,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
		}],
		"sort-keys": ["error", "asc", { "caseSensitive": false, "natural": true }]
	}
};
