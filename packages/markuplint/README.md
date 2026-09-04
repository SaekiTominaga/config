# markuplint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Fmarkuplint-config.svg)](https://www.npmjs.com/package/@w0s/markuplint-config)
[![CI status](https://github.com/SaekiTominaga/w0s/actions/workflows/ci.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/ci.yml)

個人サイト [w0s.jp](https://w0s.jp/) およびブログ [blog.w0s.jp](https://blog.w0s.jp/) で使用している [Markuplint](https://markuplint.dev/ja/) の設定ファイルです。

自分が利用するためだけに作った思想強めの設定なので、実際のプロジェクトにそのまま導入するのはお勧めしません。多くのケースでは[公式のプリセット](https://markuplint.dev/ja/docs/guides/presets)を利用するのが良いでしょう。

私はいくつかの理由から [`markuplint:recommended`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.recommended.json) やそれ以外のプリセットをそのまま利用することはせず、有用なルールは部分的に取り入れながらも `rules` と `nodeRules` を独自に設定しています。

このドキュメントでは `markuplint:recommended` と異なる部分について**なぜあえて変えているのか**その理由を記しています。もし `markuplint:recommended` の適用に問題があるか、あるいは Markuplint の開発者とは別の意見を見てみたいというのであれば本設定ファイルが参考になる部分もあるかもしれません。そのうえで、あなたのプロジェクトに適した部分があれば部分的に取り入れるのが良いと思います。

もちろん熟考のうえであれば本設定ファイルをそのまま `extends` しても構いませんし、 Issue や Pull Request による改善提案は歓迎します。

なお本ドキュメントは Markuplint v5.0.0-rc.7 時点のものです。

- ▼ [`rules`](#rules)
- ▼ [`nodeRules`](#noderules)

## `rules`

`markuplint:recommended` に含まれていないルールを含めて、極力すべてのルールを有効にする方針です。

### `markuplint:recommended` に含まれていないが、本設定では有効にしているルール

| カテゴリー            | ルール                                                                                                           | 設定内容と理由                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Syntax                | [`no-malformed-character-reference`](https://next.markuplint.dev/ja/docs/rules/no-malformed-character-reference) | 省略                                                                 |
| Syntax                | [`no-unescaped-char`](https://next.markuplint.dev/ja/docs/rules/no-unescaped-char)                               | 省略                                                                 |
| Structure             | [`head-element-order`](https://next.markuplint.dev/ja/docs/rules/head-element-order)                             | 詳細は[後述](#head-element-order)                                    |
| Structure             | [`no-duplicate-dt`](https://next.markuplint.dev/ja/docs/rules/no-duplicate-dt)                                   | 省略                                                                 |
| Structure             | [`no-empty-palpable-content`](https://next.markuplint.dev/ja/docs/rules/no-empty-palpable-content)               | 省略                                                                 |
| Structure             | [`no-restricted-element`](https://next.markuplint.dev/ja/docs/rules/no-restricted-element)                       | `noscript`, `embed` 要素を禁止、理由は[後述](#no-restricted-element) |
| Attributes            | [`no-ineffective-attr`](https://next.markuplint.dev/ja/docs/rules/no-ineffective-attr)                           | 省略                                                                 |
| Style                 | [`attr-value-quotes`](https://next.markuplint.dev/ja/docs/rules/attr-value-quotes)                               | 省略                                                                 |
| Style                 | [`no-default-value`](https://next.markuplint.dev/ja/docs/rules/no-default-value)                                 | 個人の好み                                                           |
| Style                 | [`require-end-tag`](https://next.markuplint.dev/ja/docs/rules/require-end-tag)                                   | フォーマッターに任せたいが、カスタム要素は終了タグが補完されないため |
| Browser Compatibility | [`no-experimental-features`](https://next.markuplint.dev/ja/docs/rules/no-experimental-features)                 | 省略                                                                 |

#### `head-element-order`

Markuplint のドキュメントでも言及されている [rviscomi/capo.js](https://github.com/rviscomi/capo.js/) を参考に `<head>` 要素内の記述順序を設定している。

```javascript
'head-element-order': [
  'meta[http-equiv="content-type" i]',
  'meta[charset]',
  'meta[http-equiv]',
  'meta[name="viewport" i]',
  'meta[name="text-scale" i]',
  'base',
  'title',
  'link[rel="preconnect" i]',
  'link[rel~="stylesheet" i]',
  'style',
  'link[rel="preload" i]',
  'link[rel="modulepreload" i]',
  'link[rel="prefetch" i]',
  'link[rel="dns-prefetch" i]',
  'link',
  'script[src]',
  'script',
  'meta',
],
```

ただし本設定ではパフォーマンスを重視しつつも視覚的なバランスも考慮した設定としている。一例を挙げると <cite>capo.js</cite> ではスタイルシート用の `<link>` 要素でも代替スタイル（`rel` 属性値に `alternate` が含まれる）や印刷用スタイル（`media=print` 属性が付く）は重み付けが弱くなっている。しかしスタイルシート用の指定は一箇所にまとまっていた方が見やすいだろう。

開発者である自分自身はもちろん、ユーザーが目視でソースコードを閲覧した際のアクセシビリティを高めるためにも、人間が見て自然な順序となっていることは重要である。

#### `no-restricted-element`

`<noscript>` 要素と `<embed>` 要素を無効にしている。

`<noscript>` 要素の本来の目的はスクリプト無効環境における代替内容の提示（フォールバック機能の提供など）であるが、残念ながら実態として「スクリプトを有効にしてください」といったメッセージの提供に使われがちである。また XML 構文（`application/xhtml+xml` のコンテンツ）では使えず、さらに「ブラウザのスクリプト設定は有効かつスクリプト実行が失敗した場合」も効果がないため、HTML 仕様で [<q>The `noscript` element is a blunt instrument.</q>](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element) と書かれるなど、現代の Web サイトで有効に使えるケースは少ない。例外的(?)にアクセス解析では比較的正しい使われ方がされているが、当サイトでは必要ないため `<noscript>` 要素自体を使わないルールを課している。

`<embed>` 要素はレガシーな要素であり、その存在意義は古いブラウザのための後方互換性の確保という認識である。HTML 仕様本文には明言されていないが、WHATWG の Issue では @domenic や @annevk が「`<embed>` 要素を使用して欲しくない」旨の発言をしており、機能追加にも慎重な姿勢を示している（[Issue #7140](https://github.com/whatwg/html/issues/7140) など）。いずれにせよ現代の Web サイトで使う機会は皆無である。

ちなみに `<object>` 要素も同様にレガシーな要素であるという考え方もあるが、複雑な図表画像の場合、`<img>` 要素でなく `<object>` 要素を使用し、その中身を表やリストでマークアップすることで「視覚環境で画像表示を無効にした場合」にメリットがある（`<object>` 要素の中身はフォールバックコンテンツとして機能する）ため、こちらは禁止せずコンテンツによっては実際に使用している（詳細は [`nodeRules` – `object` の節](#object) を参照）。

### 本設定で有効にしていないルール

| カテゴリー      | ルール                                                                                     | 理由                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Structure       | [`require-element`](https://next.markuplint.dev/ja/docs/rules/require-element)             | `nodeRules` または `childNodeRules` で指定するため                                                           |
| Accessibility   | [`no-pseudo-list`](https://next.markuplint.dev/ja/docs/rules/no-pseudo-list)               | テキストノードの先頭に当該記号文字があるケースがままあるため                                                 |
| Style           | [`attr-order`](https://next.markuplint.dev/ja/docs/rules/attr-order)                       | 誤検知の発生により一時的に無効化、詳細は [Issue #4033](https://github.com/markuplint/markuplint/issues/4033) |
| Style           | [`class-naming`](https://next.markuplint.dev/ja/docs/rules/class-naming)                   | 個々のプロジェクトルールに従うため共通設定となる本設定では指定しない                                         |
| Style           | [`no-boolean-attr-value`](https://next.markuplint.dev/ja/docs/rules/no-boolean-attr-value) | 空文字を明記する `required=""` 形式を許容したいため                                                          |
| Maintainability | [`no-hardcoded-id`](https://next.markuplint.dev/ja/docs/rules/no-hardcoded-id)             | ID は URL の一部になるため、意味を持つ値のハードコーディングを許容したい                                     |

## `nodeRules`

`markuplint:recommended` での設定に関わらず、本設定ファイルで設定している内容についてすべて理由を記す。

### `html`

[`markuplint:a11y`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.a11y.json) では `lang` 属性が必須に設定されている。本設定ファイルではそれに加えて [OGP](https://ogp.me/) で必要な `prefix` 独自属性を許容している。

### `meta[property]`

[OGP](https://ogp.me/) 用に `<meta>` 要素の `property` 属性を許容している。

[`markuplint:rdfa`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.rdfa.json) を `extends` しても良いのだが、当サイトでは OGP 用途以外で `property` 属性を使うことはないため、許可する属性値を正規表現で絞りたく独自設定としている。

### `dl`

機械可読を容易にし、よりアクセシビリティを高めるために `<dl>` 要素の子要素に `<dt>`, `<dd>` 要素を配置することを禁止し、`<div>` 要素によるグループ化を必須としている。

とくに新着情報のフィード配信が行われていないサイトにおいて、それならばとトップページの HTML をスクレイピングして新着差分を取得しようとした際、新着コンポーネントが以下のような形でマークアップされていると日付データと内容の紐付けが難しい。

```html
<dl id="news">
  <dt><time>2000-01-03</time></dt>
  <dd>新着内容</dd>
  <dt><time>2000-01-02</time></dt>
  <dd>新着内容</dd>
  <dt><time>2000-01-01</time></dt>
  <dd>新着内容</dd>
</dl>
```

仮に HTML でなく XML や JSON であったならこのような構造設計にはしないはずだ。HTML5 で `<dl>` 要素の子要素に `<div>` 要素が許可されるようになって久しいのだから、HTML4 以前の制約に縛られたマークアップを続ける必要はない。

### `search`

`<search>` 要素は2023年3月に登場した新しい要素であるため、ブラウザや支援技術のサポートが充分に普及するまでは暫定的に `<search role="search">` とする必要がある。

公式のプリセットでは v4.0.0 にて [`role` 属性の記述を必須とする暫定対応が廃止](https://github.com/markuplint/markuplint/pull/1210)された。しかし `<search>` 要素に対応していない Safari 16 系のアクセスもまだ存在するため（`w0s.jp` のアクセス解析によると2026年5月時点で Safari 全体の 1.7%）、もうしばらく `role="search"` を明記しておきたい。

### `div`

一切属性のない `<div>` 要素を配置するべきではないと考えている（`<dl>` 要素の子要素の場合を除く）。複雑なスタイルを表現したい場合、 CSS の都合で wrapper や inner 用の `<div>` 要素を差し込むこともあるだろう。とくに inner 用の場合、 `.component > div` のように指定すればクラス名を設定せずとも機能するが、それはあくまで制作者視点であり、ユーザー視点すなわちユーザースタイルシートの設定やスクレイピング、あるいは単に技術的興味のために HTML ソースコードを閲覧するユーザーに意図が伝わらないのは宜しくない。よってその場合も装飾用であることを伝えるクラスを設定するべきだ。

そのため [`require-attr`](https://next.markuplint.dev/ja/docs/rules/require-attr) ルールにて `class` 属性を必須としている。本来はクラス名に限らず `<div lang="foo">` や `<div role="foo">` などもあり得るため、「何らかの属性が一つ以上あること」のチェックをしたいところだが、そのようなルール設定ができないため、 `class` 属性の存在チェックとしている。

なお以下の場合は `class` 属性なしのケースがあるため、上書き設定で `required-attr` を無効にしている。

- `id` 属性が設定されている場合
- `role` 属性が設定されている場合
- `<dl>` 要素の子要素の場合（例外的に一切属性のない `<div>` 要素を許容したい）

### `img`

HTML 仕様では `<img>` 要素の `alt` 属性は必須ではないが、省略できるケースは限定的である。当サイトでは省略するケースは存在しないため `alt` 属性を必須に設定している。

### `iframe`

Techniques for WCAG 2.2 の達成基準 4.1.2 における `<iframe>` 要素利用時の達成方法のひとつに [H64: Using the title attribute of the iframe element](https://www.w3.org/WAI/WCAG22/Techniques/html/H64) がある。それに倣い、当サイトでは `<iframe>` 要素の `title` 属性を必須に設定している。

### `object`

`<object>` 要素は様々な外部リソースの埋め込みに使えるため、 `type` 属性と `role` 属性を必須とし、データのタイプを明示するようにしている。さらに `aria-labelledby` 属性も必須として、前述のとおり `<object aria-labelledby="object-label"><div id="object-label">...</div></object>` のような形で支援技術が代替テキストを特定できるようにしている。

基本的に画像は `<img>` 要素、動画は `<video>` 要素といったように極力専用の要素を使うため、`<object>` 要素の使用箇所は少ないが、複雑な図表を表す画像など、代替テキストをリストや表で構造化したい場合は `<object>` 要素が適していることもある。

### `figcaption ~ table, table:has(~ figcaption)`

HTML 仕様では `<caption>` 要素の使い方として以下の記述がある。

> When a table element is the only content in a figure element other than the figcaption, the caption element should be omitted in favor of the figcaption.

そのため `<table>` 要素が `<figure>` 要素内にあるいくつかのケースについて `<caption>` 要素の使用を禁じる設定をしている。

### `table`

`<table>` 要素内に `<tbody>` 要素の記述を強制している。

### `thead th`, `tbody th`

`<thead>` 要素と `<tbody>` 要素内の `<th>` 要素には `scope` 属性を必須としている。複雑な表でなければ `scope` 属性を設定する必要性は薄いが、設定すること自体に大きなコストはかからないため、当サイトでは一律で設定するようにしている。

### `td`

`rules` で `no-empty-palpable-content` を設定しているが、中身が空の `<td></td>` は許容したいため除外している。

### `input[pattern]`

[`markuplint:html-standard`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.html-standard.json) では `pattern` 属性が設定されている場合に `title` 属性が必須に設定されている。

これは [HTML 仕様](https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute)で <q>When an `input` element has a `pattern` attribute specified, authors should include a `title` attribute to give a description of the pattern.</q> と規定されているためで、あくまで <q>should</q> ではあるものの、これに背く理由もないので本設定ファイルでも同じく必須としている。

### `details[name]`

HTML 仕様では [`<details>` 要素](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)について <q>A document must not contain a `details` element that is a descendant of another `details` element in the same details name group.</q> と規定されている。

[`markuplint:html-standard`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.html-standard.json) ではそれに対応した設定があり、本設定ファイルでも同様の設定としている。

### `template *`

`<template><a href=""></a></template>` のようなマークアップをすることがあるため、`<template>` 要素内では [`no-empty-palpable-content`](https://next.markuplint.dev/ja/docs/rules/no-empty-palpable-content) と [`no-invalid-attr-value`](https://next.markuplint.dev/ja/docs/rules/no-invalid-attr-value)、[`require-accessible-name`](https://next.markuplint.dev/ja/docs/rules/require-accessible-name) を無効にしている。

### `:has(> template)`

`<ul><template><li></li></template></ul>` のようなマークアップをすることがあるため、`<template>` 要素の親要素は [`require-owned-elements`](https://next.markuplint.dev/ja/docs/rules/require-owned-elements) を無効にしている。
