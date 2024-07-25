# eslint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Feslint-config.svg)](https://www.npmjs.com/package/@w0s/eslint-config)
[![test status](https://github.com/SaekiTominaga/w0s/actions/workflows/eslint-test.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/eslint-test.yml)

ESLint configuration file used on my personal website ([w0s.jp](https://github.com/SaekiTominaga/w0s.jp)).

## `extends`

- [eslint:recommended](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [plugin:jsdoc/recommended](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/src/index.js)

### TypeScript file

- [plugin:@typescript-eslint/strict-type-checked](https://typescript-eslint.io/users/configs/#strict-type-checked)
- [plugin:@typescript-eslint/stylistic-type-checked](https://typescript-eslint.io/users/configs/#stylistic-type-checked)
- [plugin:jsdoc/recommended-typescript](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/src/index.js)

## `plugins`

- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

## Usage

```javascript
import w0sConfig from '@w0s/eslint-config';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...w0sConfig,
  {
    // other options
  }
];

```
