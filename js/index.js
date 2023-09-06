const rules = [
	"./base",
	"./import",
	"./style"
].map(require.resolve);

module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		...rules
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {}
};
