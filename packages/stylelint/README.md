# stylelint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Fstylelint-config.svg)](https://www.npmjs.com/package/@w0s/stylelint-config)
[![CI status](https://github.com/SaekiTominaga/w0s/actions/workflows/ci.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/ci.yml)

[Stylelint configuration](https://stylelint.io/user-guide/configure) file used on my personal website ([`w0s.jp`](https://github.com/SaekiTominaga/w0s.jp)).

## Features

It is based on [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) with its own rule settings.

🙂: No problem, 😨: Error

- Do not use ID selector.
  - 😨 `#foo {}`
  - 🙂 `.foo {}`
- Do not use multiple universal selectors. However, this excludes the use of a next-sibling combinator (`+`).
  - 🙂 `* {}`
  - 😨 `* > * {}`
  - 🙂 `* + * {}` (This is used in the "owl selector" in [stack layout](https://every-layout.dev/layouts/stack/))
- The attribute selectors' case-sensitivity require the `i` identifier. See [`stylelint-attribute-case-sensitivity`](https://github.com/SaekiTominaga/stylelint-plugin/tree/main/packages/attribute-case-sensitivity) for details.
  - 😨 `[type="foo"] { }`
  - 🙂 `[type="foo" i] { }`
- CSS nesting must use the `&` nesting selector.
  - 😨 `.foo { .bar {} }`
  - 🙂 `.foo { &.bar {} }`
- Disallow `!important` within declarations.
  - 😨 `color: #000 !important`
  - 🙂 `color: #000`
- Disallow complex shorthand properties such as `background` and `font`.
  - 😨 `white-space: pre-wrap`
  - 🙂 `white-space-collapse: preserve`
- The display property must use [multi keyword syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/display/multi-keyword_syntax_of_display).
  - 😨 `display: block`
  - 🙂 `display: block flow`
- Use logical properties instead of physical properties.
  - 😨 `margin-top: 1em`
  - 🙂 `margin-block-start: 1em`
  - 🙂 `overflow-x: visible` (The `overflow-*` logical properties is not well supported by browsers)
- Use logical values instead of physical values. The [`stylelint-plugin-logical-css`](https://github.com/yuschick/stylelint-plugin-logical-css) plugin is used.
  - 😨 `text-align: right`
  - 🙂 `text-align: end`
- Use logical units instead of physical units. The [`stylelint-plugin-logical-css`](https://github.com/yuschick/stylelint-plugin-logical-css) plugin is used.
  - 😨 `inline-size: 10lvw`
  - 🙂 `inline-size: 10lvi`
- Disallow default viewport-percentage units. The [`stylelint-no-default-viewport`](https://github.com/SaekiTominaga/stylelint-plugin/tree/main/packages/no-default-viewport) plugin is used.
  - 😨 `inline-size: 10vi`
  - 🙂 `inline-size: 10lvi`
- The `font-weight` value must be numbers.
  - 😨 `font-weight: normal`
  - 🙂 `font-weight: 500 /* Windows + Yu Gothic measures to be greater than 400 */`
- Flex containers require an explicit `flex-wrap` property. The [`stylelint-plugin-defensive-css`](https://github.com/yuschick/stylelint-plugin-defensive-css) plugin is used.
  - 😨 `display: block flex`
  - 🙂 `display: block flex; flex-wrap: nowrap`
- For the root element, `color` and `background-color` must be specified as a set. The [`stylelint-root-colors`](https://github.com/SaekiTominaga/stylelint-plugin/tree/main/packages/root-colors) plugin is used.
  - 😨 `:root { color: #000 }`
  - 🙂 `:root { background-color: #fff; color: #000 }`
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
