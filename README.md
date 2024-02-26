# Dusk ESLint rules

ESLint config used by [Dusk](https://dusk.network/) JavaScript apps.

## Installation

```bash
npm i -D @dusk-network/eslint-config
```

The package requires the following peer dependencies:

- [`eslint`](https://github.com/eslint/eslint) `>=8`
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) `>=2`

If you are using Svelte rules the package need the following optional dependency:

- [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte) `>=2`

## Usage

Add the rulesets you want in the `extends` section of your ESLint configuration file.

e.g. to use both JS and Svelte's rules:

```javascript
// ...

extends: [
    "@dusk-network/eslint-config/js",
    "@dusk-network/eslint-config/svelte"
]

// ...
```

# npm scripts

- `npm run bump` updates version number using an interactive shell
- `npm run check` checks for deprecated rules and performs the linting check
- `npm run check-js` checks for deprecated JS rules
- `npm run check-rules` checks for deprecated JS and Svelte rules
- `npm run check-svelte` checks for deprecated Svelte rules
- `npm run lint` performs the linting check
