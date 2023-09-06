const rules = [
	"./base",
	"./style"
].map(require.resolve);

module.exports = {
	extends: [
		"plugin:svelte/recommended",
		...rules
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [
		"svelte"
	],
	rules: {},
	settings: {
		"import/parsers": {
			"espree": [".js"],
			"svelte-eslint-parser": [".svelte"]
		}
	}
};
