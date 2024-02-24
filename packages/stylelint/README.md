# stylelint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Fstylelint-config.svg)](https://www.npmjs.com/package/@w0s/stylelint-config)
[![test status](https://github.com/SaekiTominaga/w0s/actions/workflows/stylelint-test.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/stylelint-test.yml)

[Stylelint configuration](https://stylelint.io/user-guide/configure) file used on my personal website ([w0s.jp](https://github.com/SaekiTominaga/w0s.jp)).

## Features

It is based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with its own rule settings.

- Disallow `!important` within declarations.
  - 🙁 `color: #000 !important`
  - 🙂 `color: #000`
- Do not use ID selector.
  - 😨 `#foo { color: #000 }`
  - 🙂 `.foo { color: #000 }`
- Do not use multiple universal selectors. However, this excludes the use of a next-sibling combinator (`+`).
  - 🙂 `*`
  - 😨 `* > *`
  - 🙂 `* + *` (This is used in the "owl selector" in [stack layout](https://every-layout.dev/layouts/stack/))
- Use of CSS physical properties and values is not recommended. Use [logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
  - 🙁 `margin-top: 1em`
  - 🙂 `margin-block-start: 1em`
  - 🙁 `text-align: right`
  - 🙂 `text-align: end`
- [Multi-keyword syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/display/multi-keyword_syntax_of_display) is recommended for the `display` property.
  - 🙁 `display: block`
  - 🙂 `display: block flow`
- The order of properties within declaration blocks follows [`stylelint-config-concentric-order`](https://github.com/chaucerbao/stylelint-config-concentric-order).
  - 😨 `.foo { padding: 1em; margin: 1em }`
  - 🙂 `.foo { margin: 1em; padding: 1em }`

See [source code](https://github.com/SaekiTominaga/config/blob/main/packages/stylelint/stylelint.config.js) for other details.

## Usage

```json
{
  "extends": ["@w0s/stylelint-config"]
}
```
