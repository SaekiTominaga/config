# stylelint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Fstylelint-config.svg)](https://www.npmjs.com/package/@w0s/stylelint-config)
[![test status](https://github.com/SaekiTominaga/w0s/actions/workflows/stylelint-test.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/stylelint-test.yml)

[Stylelint configuration file](https://stylelint.io/user-guide/configure) used on [w0s.jp](https://w0s.jp/)

## Features

It is based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with its own rule settings.

- Disallow `!important` within declarations.
  - 🙁 `color: #000 !important`
  - 🙂 `color: #000`
- Do not use ID selector.
  - 😨 `#foo { color: #000 }`
  - 🙂 `.foo { color: #000 }`
- Use of CSS physical properties and values is not recommended. Use [logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
  - 🙁 `margin-top: 1em`
  - 🙂 `margin-block-start: 1em`
  - 🙁 `text-align: right`
  - 🙂 `text-align: end`
- The order of properties within declaration blocks follows [`stylelint-config-concentric-order`](https://github.com/chaucerbao/stylelint-config-concentric-order).
  - 😨 `.foo { padding: 1em; margin: 1em }`
  - 🙂 `.foo { margin: 1em; padding: 1em }`

See [source code](.stylelintrc) for other details.

## Usage

```json
{
  "extends": ["@w0s/stylelint-config"]
}
```
