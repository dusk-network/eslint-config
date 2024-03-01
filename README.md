# Dusk ESLint rules

ESLint config used by [Dusk](https://dusk.network/) JavaScript apps.

## Installation

```bash
npm i -D @dusk-network/eslint-config
```

The package requires the following peer dependencies:

- [`eslint`](https://github.com/eslint/eslint) `>=8.57.0`
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) `>=9.1.0`
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) `>=2.29.1`
- [`eslint-plugin-import-newlines`](https://github.com/SeinopSys/eslint-plugin-import-newlines) `>=1.3.4`

If you are using Svelte rules the package needs the following optional dependency:

- [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte) `>=2.35.1`

## Usage

Add the rulesets you want in the `extends` section of your ESLint configuration file.

e.g. to use both JS and Svelte rules:

```javascript
// ...

extends: [
    "@dusk-network/eslint-config/js",
    "@dusk-network/eslint-config/svelte"
]

// ...
```

# npm scripts

- `npm run check` checks for deprecated rules and performs the linting check
- `npm run check-js` checks for deprecated JS rules
- `npm run check-rules` checks for deprecated JS and Svelte rules
- `npm run check-svelte` checks for deprecated Svelte rules
- `npm run format` performs the Prettier formatting check
- `npm run format:fix` reformats according to the Prettier rules
- `npm run lint` performs the linting check
- `npm run lint:fix` fixes fixable linting errors
