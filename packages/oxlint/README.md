# oxlint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Foxlint-config.svg)](https://www.npmjs.com/package/@w0s/oxlint-config)
[![CI status](https://github.com/SaekiTominaga/w0s/actions/workflows/ci.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/ci.yml)

Oxlint configuration file used on my personal website ([`w0s.jp`](https://github.com/SaekiTominaga/w0s.jp)).

## JS Plugins

In addition to the built-in plugins, this configuration uses the following npm packages.

- [oxlint-plugin-safely-storage](https://github.com/SaekiTominaga/oxlint-plugin/tree/main/packages/safely-storage)

## Usage

```typescript
/* oxlint.config.ts */
import { defineConfig } from 'oxlint';
import w0sConfigNode from '@w0s/oxlint-config/node';

export default defineConfig({
  extends: [w0sConfigNode],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  // other options
});
```

## Module specifier

<dl>
  <div>
    <dt><code>@w0s/oxlint-config</code></dt>
    <dd>Generic settings for JavaScript and TypeScript to be any execution environments. This settings are intended to be customized before use.</dd>
  </div>
  <div>
    <dt><code>@w0s/oxlint-config/node</code></dt>
    <dd>Settings for JavaScript and TypeScript to be executed in a Node.js.</dd>
  </div>
  <div>
    <dt><code>@w0s/oxlint-config/browser</code></dt>
    <dd>Settings for JavaScript and TypeScript to be executed in a browser.</dd>
  </div>
</dl>
