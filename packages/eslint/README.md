# eslint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Feslint-config.svg)](https://www.npmjs.com/package/@w0s/eslint-config)
[![Workflow status](https://github.com/SaekiTominaga/w0s/actions/workflows/eslint.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/eslint.yml)

ESLint configuration file used on my personal website ([`w0s.jp`](https://github.com/SaekiTominaga/w0s.jp)).

## Base rules & plugins

### All files (Vanilla JavaScript, etc.)

- [eslint](https://eslint.org/): recommended
- [eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional): externalVanillaRecommended, recommended, stylistic
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import): recommended
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc): recommended
- [eslint-plugin-safely-storage](https://github.com/SaekiTominaga/eslint-plugin/tree/main/packages/safely-storage)
- and, some customizations

### TypeScript

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/): strict-type-checked, stylistic-type-checked
- [eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional): externalTypeScriptRecommended, recommended, stylistic
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc/): recommended-typescript
- and, some customizations

## Usage

```javascript
import w0sConfig from '@w0s/eslint-config';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...w0sConfig,
  {
    // other options
  },
];
```

or

```javascript
import { defineConfig } from 'eslint/config';
import w0sConfig from '@w0s/eslint-config';

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig(w0sConfig, {
  // other options
});
```
