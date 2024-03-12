# Dusk ESLint rules

ESLint config used by [Dusk](https://dusk.network/) JavaScript apps.

## Installation

```bash
npm i -D @dusk-network/eslint-config
```

Your package requires the following dev-dependencies:

- [`eslint`](https://github.com/eslint/eslint)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-import-newlines`](https://github.com/SeinopSys/eslint-plugin-import-newlines)

If you are using Svelte rules your package needs the following dev-dependency:

- [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte)

If you are using Vitest rules your package needs the following dev-dependency:

- [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest)

## Usage

Add the rulesets you want in the `extends` section of your ESLint configuration file.

e.g. to use both JS, Svelte and Vitest rules:

```javascript
// ...

extends: [
    "@dusk-network/eslint-config/js",
    "@dusk-network/eslint-config/svelte",
    "@dusk-network/eslint-config/vitest"
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
