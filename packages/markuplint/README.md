# markuplint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Fmarkuplint-config.svg)](https://www.npmjs.com/package/@w0s/markuplint-config)
[![Workflow status](https://github.com/SaekiTominaga/w0s/actions/workflows/markuplint.yml/badge.svg)](https://github.com/SaekiTominaga/w0s/actions/workflows/markuplint.yml)

個人サイト [w0s.jp](https://w0s.jp/) で使用している [Markuplint](https://markuplint.dev/ja/) の設定ファイルです。

ひとりで運営している個人サイトに特化した癖のある設定なので、実際のプロジェクトにそのまま導入するのはお勧めしません。多くのケースでは[公式のプリセット](https://markuplint.dev/ja/docs/guides/presets)を利用するのが良いでしょう。

私はいくつかの理由から [`markuplint:recommended`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.recommended.json) やそれ以外のプリセットをそのまま利用することはせず、有用なルールは部分的に取り入れながらも `rules` と `nodeRules` を独自に設定しています。

このドキュメントでは `markuplint:recommended` と異なる部分について**なぜあえて変えているのか**その理由を記しています。もし `markuplint:recommended` の適用に問題があるか、あるいは Markuplint の開発者とは別の意見を見てみたいというのであれば本設定ファイルが参考になる部分もあるかもしれません。そのうえで、あなたのプロジェクトに適した部分があれば部分的に取り入れるのが良いと思います。

もちろん熟考のうえであれば本設定ファイルをそのまま `extends` しても構いませんし、 Issue や Pull Request による改善提案は歓迎します。

- ▼ [`rules`](#rules)
- ▼ [`nodeRules`](#noderules)

## `rules`

`markuplint:recommended`（v4.11.4 時点）との差異一覧と、その理由を記す。

### `markuplint:recommended` との差異一覧

#### Conformance checking

| ルール ID                   | 本設定ファイル              | `markuplint:recommended`    | 差異                             |
| --------------------------- | --------------------------- | --------------------------- | -------------------------------- |
| `attr-duplication`          | true                        | true                        |                                  |
| `deprecated-attr`           | true                        | true                        |                                  |
| `deprecated-element`        | true                        | true                        |                                  |
| `disallowed-element`        | ["noscript", "embed"]       | ―                           | [⚠](#disallowed-element)        |
| `doctype`                   | true                        | true                        |                                  |
| `heading-levels`            | true                        | true                        |                                  |
| `id-duplication`            | true                        | true                        |                                  |
| `invalid-attr`              | { `accesskey`, `tabindex` } | { `accesskey`, `tabindex` } |                                  |
| `no-duplicate-dt`           | true                        | true                        |                                  |
| `no-empty-palpable-content` | true                        | ―                           | [⚠](#no-empty-palpable-content) |
| `no-orphaned-end-tag`       | true                        | true                        |                                  |
| `permitted-contents`        | true                        | true                        |                                  |
| `placeholder-label-option`  | true                        | true                        |                                  |
| `require-datetime`          | true                        | true                        |                                  |
| `required-attr`             | true                        | true                        |                                  |
| `required-element`          | false                       | ―                           |                                  |

#### Accessibility

| ルール ID                             | 本設定ファイル | `markuplint:recommended` | 差異                              |
| ------------------------------------- | -------------- | ------------------------ | --------------------------------- |
| `label-has-control`                   | true           | true                     |                                   |
| `landmark-roles`                      | true           | true                     |                                   |
| `neighbor-popovers`                   | true           | true                     |                                   |
| `no-ambiguous-navigable-target-names` | true           | true                     |                                   |
| `no-consecutive-br`                   | true           | true                     |                                   |
| `no-refer-to-non-existent-id`         | true           | true                     |                                   |
| `require-accessible-name`             | true           | true                     |                                   |
| `required-h1`                         | true           | true                     |                                   |
| `table-row-column-alignment`          | false          | true                     | [⚠](#table-row-column-alignment) |
| `use-list`                            | false          | true                     | [⚠](#use-list)                   |
| `wai-aria`                            | true           | true                     |                                   |

#### Naming Convention

| ルール ID      | 本設定ファイル | `markuplint:recommended` | 差異 |
| -------------- | -------------- | ------------------------ | ---- |
| `class-naming` | false          | ―                        |      |

#### Maintenability

| ルール ID                   | 本設定ファイル | `markuplint:recommended` | 差異                             |
| --------------------------- | -------------- | ------------------------ | -------------------------------- |
| `no-hard-code-id`           | false          | ―                        |                                  |
| `no-use-event-handler-attr` | true           | ―                        | [⚠](#no-use-event-handler-attr) |

#### Style

| ルール ID                  | 本設定ファイル | `markuplint:recommended` | 差異                            |
| -------------------------- | -------------- | ------------------------ | ------------------------------- |
| `attr-value-quotes`        | false          | ―                        |                                 |
| `case-sensitive-attr-name` | "lower"        | ―                        | [⚠](#case-sensitive-attr-name) |
| `case-sensitive-tag-name`  | "lower"        | ―                        | [⚠](#case-sensitive-tag-name)  |
| `character-reference`      | true           | true                     |                                 |
| `end-tag`                  | true           | ―                        | [⚠](#end-tag)                  |
| `ineffective-attr`         | true           | true                     |                                 |
| `no-boolean-attr-value`    | false          | ―                        |                                 |
| `no-default-value`         | true           | ―                        | [⚠](#no-default-value)         |

### 差異のあるルールの理由

#### [`disallowed-element`](https://markuplint.dev/ja/docs/rules/disallowed-element)

`<noscript>` 要素と `<embed>` 要素を無効にしている。

`<noscript>` 要素の本来の目的はスクリプト無効環境における代替内容の提示（フォールバック機能の提供など）であるが、残念ながら実態として「スクリプトを有効にしてください」といったメッセージの提供に使われがちである。また XML 構文（`application/xhtml+xml` のコンテンツ）では使えず、さらに「ブラウザのスクリプト設定は有効かつスクリプト実行が失敗した場合」も効果を発しないため、HTML 仕様で [<q>The `noscript` element is a blunt instrument.</q>](https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element) と書かれるなど、今の時代に有効に使えるケースは少ない。例外的(?)に、アクセス解析では比較的正しい使われ方がされているが、当サイトでは必要ないため `<noscript>` 要素自体を使わないルールを課している。

`<embed>` 要素はレガシーな要素であり、その存在意義は古いブラウザのための後方互換性の確保という認識である。HTML 仕様本文には明言されていないが、WHATWG の Issue では @domenic や @annevk が「`<embed>` 要素を使用して欲しくない」旨の発言をしており、機能追加にも慎重な姿勢を示している（例えば [Issue #7140](https://github.com/whatwg/html/issues/7140) など）。いずれにせよ現代の Web サイトで使う機会は皆無なため必要ない。

ちなみに `<object>` 要素も同様にレガシーな要素であるという考え方もあるが、複雑な図表画像の場合、`<img>` 要素でなく `<object>` 要素を使用し、その中身を表やリストでマークアップすることで「視覚環境で画像表示を無効にした場合」にメリットがある（`<object>` 要素の中身はフォールバックコンテンツとして機能する）ため、こちらは無効化せず、コンテンツによっては実際に使用している（詳細は [`nodeRules` – `object` の節](#object) を参照）。

#### [`no-empty-palpable-content`](https://markuplint.dev/ja/docs/rules/no-empty-palpable-content)

`markuplint:recommended` ではこのルールは有効化されていないが、当サイトでは `<div></div>` のように `<div>` 要素や `<span>` 要素の中身を空にすることはないため有効にしている。

#### [`table-row-column-alignment`](https://markuplint.dev/ja/docs/rules/table-row-column-alignment)

[v4.8.0](https://github.com/markuplint/markuplint/releases/tag/v4.8.0) で追加された新ルールだが、バグが多く意図しないエラーが多発するので一時的に無効にしている。

#### [`use-list`](https://markuplint.dev/ja/docs/rules/use-list)

個人で運営している当サイトではとくに必要なルールではないため無効にしている。

#### [`no-use-event-handler-attr`](https://markuplint.dev/ja/docs/rules/no-use-event-handler-attr)

当サイトでは HTML にイベントハンドラー属性を使うことはないため有効にしている。

#### [`case-sensitive-attr-name`](https://markuplint.dev/ja/docs/rules/case-sensitive-attr-name)

HTML の整形は Prettier を使用している。Prettier では属性名を自動的に小文字に変換するが、`data-*` 属性は変換されないため、このルールを有効にしてチェックしている

#### [`case-sensitive-tag-name`](https://markuplint.dev/ja/docs/rules/case-sensitive-tag-name)

Prettier では要素名を自動的に小文字に変換するが、カスタム要素は変換されないため、このルールを有効にしてチェックしている

#### [`end-tag`](https://markuplint.dev/ja/docs/rules/end-tag)

Prettier では終了タグを自動的に補完するが、カスタム要素は補完されないため、このルールを有効にしてチェックしている

#### [`no-default-value`](https://markuplint.dev/ja/docs/rules/no-default-value)

個人的な好みであるが、 `<form method="get">` や `<input type="text" />` といったデフォルト値の属性は省略したいため、このルールは有効設定にしている。

一昔前は CSS セレクターとの兼ね合いで省略しない方が都合良い時代もあったが、`:not()` 疑似クラスが使える現在では省略して問題が起こるケースはないと思う。

## `nodeRules`

`markuplint:recommended` での設定に関わらず、本設定ファイルで設定している内容についてすべて理由を記す。

### `html`

[`markuplint:a11y`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.a11y.json) では `lang` 属性が必須に設定されている。本設定ファイルではそれに加えて [OGP](https://ogp.me/) で必要な `prefix` 独自属性を許可する設定をしている。

### `meta[property]`

[OGP](https://ogp.me/) 用に `<meta>` 要素の `property` 属性を許容するようにしている。

[`markuplint:rdfa`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.rdfa.json) を `extends` しても良いのだが、当サイトでは OGP 用途以外で `property` 属性を使うことはないため、許可する属性値を正規表現で絞りたく独自設定としている。

### `search`

`<search>` 要素は2023年3月に登場した新しい要素であるため、ブラウザや支援技術の対応が追いついていない。そのため、サポートが充分に普及するまでは暫定的に `<search role="search">` とする必要がある。

公式のプリセットでは v4.0.0 にて [`role` 属性の記述を必須とする暫定対応が廃止](https://github.com/markuplint/markuplint/pull/1210)された。しかし `<search>` 要素に対応していない Safari 16 系のアクセスもまだ多いため、当サイトではもうしばらく `role="search"` を明記する対応を続けることにする。

### `div`

一切属性のない `<div>` 要素を配置するべきではないと考えている（`<dl>` 要素の子要素の場合を除く）。複雑なスタイルを表現したい場合、 CSS の都合で wrapper や inner 用の `<div>` 要素を差し込むこともあるだろう。とくに inner 用の場合、 `.component > div` のように指定すればクラス名を設定せずとも機能するが、それはあくまで制作者視点であり、ユーザー視点すなわちユーザースタイルシートの設定やスクレイピング、あるいは単に技術的興味のために HTML ソースコードを閲覧するユーザーに意図が伝わらないのは宜しくない。よってその場合も装飾用であることを伝えるクラスを設定するべきだ。

そのため [`required-attr`](https://markuplint.dev/ja/docs/rules/required-attr) ルールにて `class` 属性を必須としている。本来はクラス名に限らず `<div lang="foo">` や `<div role="foo">` などもあり得るため、「何らかの属性が一つ以上あること」のチェックをしたいところだが、そのようなルール設定ができないため、 `class` 属性の存在チェックとしている。

なお、以下の場合は `class` 属性なしのケースがあるため、上書き設定で `required-attr` を無効にしている。

- `id` 属性が設定されている場合
- `role` 属性が設定されている場合
- `<dl>` 要素の子要素の場合（例外的に一切属性のない `<div>` 要素を許容したい）

### `img`

HTML 仕様では `<img>` 要素の `alt` 属性は必須ではないが、省略できるケースは限定的である。当サイトでは省略するケースは存在しないため `alt` 属性を必須に設定している。

### `iframe`

Techniques for WCAG 2.1 の達成基準 4.1.2 における `<iframe>` 要素利用時の達成方法のひとつに [H64: Using the title attribute of the iframe element](https://www.w3.org/WAI/WCAG21/Techniques/html/H64) がある。それに倣い、当サイトでは `<iframe>` 要素の `title` 属性を必須に設定している。

### `object`

`<object>` 要素は様々な外部リソースの埋め込みに使えるため、 `type` 属性と `role` 属性を必須とし、データのタイプを明示するようにしている。さらに `aria-labelledby` 属性も必須として、前述のとおり `<object aria-labelledby="object-label"><div id="object-label">...</div></object>` のような形で支援技術が代替テキストを特定できるようにしている。

基本的に画像は `<img>` 要素、動画は `<video>` 要素といったように極力専用の要素を使うため、`<object>` 要素の使用箇所は少ないが、複雑な図表を表す画像など、代替テキストをリストや表で構造化したい場合は `<object>` 要素が適していることもある。

### `figcaption ~ table, table:has(~ figcaption)`

HTML 仕様では `<caption>` 要素の使い方として以下の記述がある。

> When a table element is the only content in a figure element other than the figcaption, the caption element should be omitted in favor of the figcaption.

そのため `<table>` 要素が `<figure>` 要素内にあるいくつかのケースについて `<caption>` 要素の使用を禁じる設定をしている。

[`markuplint:html-standard`](https://github.com/markuplint/markuplint/blob/main/packages/%40markuplint/config-presets/src/preset.html-standard.json) にも似たような設定があるが、[使用できるセレクター](https://markuplint.dev/configuration/#properties/node-rules-&-child-node-rules/selector)が限定的なこともあり、仕様どおりのチェックをすることが難しい。そのため条件設定については不正確ではあるが、当サイトにおいてはひとつの `<figure>` 要素内に複数の `<table>` 要素を配置するケースは今のところ存在しないため、とりあえずこれで妥協している。

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

`<template><a href=""></a></template>` のようなマークアップをすることがあるため、`<template>` 要素内では [`no-empty-palpable-content`](https://markuplint.dev/ja/docs/rules/no-empty-palpable-content) と [`require-accessible-name`](https://markuplint.dev/ja/docs/rules/require-accessible-name) を無効にしている。

### `:has(> template)`

`<ul><template><li></li></template></ul>` のようなマークアップをすることがあるため、`<template>` 要素の親要素は [`wai-aria`](https://markuplint.dev/ja/docs/rules/wai-aria) を無効にしている。

### `[role=radiogroup]`

[Fix `wai-aria` rule's validation · Issue #673 · markuplint/markuplint](https://github.com/markuplint/markuplint/issues/673)で起票されているが、`[role=radiogroup]` の WAI-ARIA ルール解釈にはバグがあるため、暫定的に [`wai-aria`](https://markuplint.dev/ja/docs/rules/wai-aria) を無効にしている。
