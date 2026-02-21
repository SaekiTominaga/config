# tsconfig

[![npm version](https://badge.fury.io/js/%40w0s%2Ftsconfig.svg)](https://www.npmjs.com/package/@w0s/tsconfig)
[![Workflow status](https://github.com/SaekiTominaga/w0s/actions/workflows/typescript.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/typescript.yml)

[TSConfig](https://www.typescriptlang.org/tsconfig) file used on my personal website ([`w0s.jp`](https://github.com/SaekiTominaga/w0s.jp)).

## Usage

```json
{
  "extends": "@w0s/tsconfig(/bundler|/node)?"
}
```

<dl>
<dt><code>@w0s/tsconfig</code></dt>
<dd>The <code><a href="https://www.typescriptlang.org/tsconfig/#module">module</a></code> and <code><a href="https://www.typescriptlang.org/tsconfig/#moduleResolution">moduleResolution</a></code> settings are not included.</dd>
<dt><code>@w0s/tsconfig/bundler</code></dt>
<dd>For use with bundlers.</dd>
<dt><code>@w0s/tsconfig/node</code></dt>
<dd>For Node.js projects.</dd>
</dl>
