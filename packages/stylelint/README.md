# stylelint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Fstylelint-config.svg)](https://www.npmjs.com/package/@w0s/stylelint-config)
[![test status](https://github.com/SaekiTominaga/w0s/actions/workflows/stylelint-test.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/stylelint-test.yml)

[Stylelint configuration](https://stylelint.io/user-guide/configure) file used on my personal website ([w0s.jp](https://github.com/SaekiTominaga/w0s.jp)).

## Features

It is based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with its own rule settings.

- Disallow `!important` within declarations. ([`declaration-no-important`](https://stylelint.io/user-guide/rules/declaration-no-important) rule)
  - 🙁 `color: #000 !important`
  - 🙂 `color: #000`
- [Multi-keyword syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/display/multi-keyword_syntax_of_display) is recommended for the `display` property. ([`declaration-property-value-disallowed-list`](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list) rule)
  - 🙁 `display: block`
  - 🙂 `display: block flow`
- Use of CSS physical properties and values is not recommended. Use [logical properties and values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). ([property-disallowed-list](https://stylelint.io/user-guide/rules/property-disallowed-list) rule)
  - 🙁 `margin-top: 1em`
  - 🙂 `margin-block-start: 1em`
  - 🙁 `text-align: right`
  - 🙂 `text-align: end`
- Do not use ID selector. ([`selector-max-id`](https://stylelint.io/user-guide/rules/selector-max-id) rule)
  - 😨 `#foo { color: #000 }`
  - 🙂 `.foo { color: #000 }`
- Do not use multiple universal selectors. However, this excludes the use of a next-sibling combinator (`+`). ([`selector-max-universal`](https://stylelint.io/user-guide/rules/selector-max-universal) rule)
  - 🙂 `*`
  - 😨 `* > *`
  - 🙂 `* + *` (This is used in the "owl selector" in [stack layout](https://every-layout.dev/layouts/stack/))
- The `font-weight` value must be numbers. ([`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation) rule)
  - 😨 `font-weight: normal`
  - 🙂 `font-weight: 500 /* Windows + Yu Gothic measures to be greater than 400 */`
- CSS nesting must use the `&` nesting selector. ([`selector-nested-pattern`](https://stylelint.io/user-guide/rules/selector-nested-pattern) rule)
  - 😨 `.foo { .bar {} }`
  - 🙂 `.foo { &.bar {} }`
- The order of properties within declaration blocks follows [stylelint-config-concentric-order](https://github.com/chaucerbao/stylelint-config-concentric-order).
  - 😨 `.foo { padding: 1em; margin: 1em }`
  - 🙂 `.foo { margin: 1em; padding: 1em }`

See [source code](https://github.com/SaekiTominaga/config/blob/main/packages/stylelint/stylelint.config.js) for other details.

## Usage

```json
{
  "extends": ["@w0s/stylelint-config"]
}
```
