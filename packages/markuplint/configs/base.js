// @ts-check

/** @type {import('@markuplint/ml-config').Config} */
export default {
	rules: {
		/* Syntax */
		'no-content-after-body': true, // ✅ preset.html-standard
		'no-duplicate-attr': true, // ✅ preset.html-standard
		'no-malformed-character-reference': true,
		'no-orphaned-end-tag': true, // ✅ preset.html-standard
		'no-stray-head-or-body-tag': true, // ✅ preset.html-standard
		'no-unclosed-element-at-eof': true, // ✅ preset.html-standard
		'no-unescaped-char': true,
		'valid-importmap': true, // ✅ preset.html-standard
		'valid-speculation-rules': true, // ✅ preset.html-standard

		/* Structure */
		'consistent-table-row-length': true, // ✅ preset.a11y
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
		], // ✅ preset.performance
		'meta-charset-position': true, // ✅ preset.html-standard
		'no-deprecated-element': true, // ✅ preset.html-standard
		'no-disallowed-ancestor': true, // ✅ preset.html-standard
		'no-duplicate-dt': true,
		'no-duplicate-sibling-attr': true, // ✅ preset.html-standard
		'no-duplicate-visible-main': true, // ✅ preset.html-standard
		'no-empty-palpable-content': true,
		'no-empty-table-track': true, // ✅ preset.a11y
		'no-obsolete-doctype': true, // ✅ preset.html-standard
		'no-obsolete-element': true, // ✅ preset.html-standard
		'no-restricted-element': ['noscript', 'embed'],
		'no-table-cell-overlap': true, // ✅ preset.a11y
		'no-table-span-overflow': true, // ✅ preset.a11y
		'permitted-contents': true, // ✅ preset.html-standard
		'require-ancestor': true, // ✅ preset.html-standard
		'require-doctype': true, // ✅ preset.html-standard
		'require-element': false, // `nodeRules` または `childNodeRules` で指定

		/* Attributes */
		'itemprop-requires-itemscope': true, // ✅ preset.html-standard
		'link-types': true, // ✅ preset.html-standard
		'map-id-name-match': true, // ✅ preset.html-standard
		'meter-value-bounds': true, // ✅ preset.html-standard
		'no-always-matching-source': true, // ✅ preset.html-standard
		'no-ambiguous-navigable-target-names': true, // ✅ preset.a11y
		'no-deprecated-attr': true, // ✅ preset.html-standard
		'no-disallowed-attr': true, // ✅ preset.html-standard
		'no-duplicate-autofocus': true, // ✅ preset.html-standard
		'no-ineffective-attr': true,
		'no-invalid-attr-value': true, // ✅ preset.html-standard
		'no-mismatched-aspect-ratio': true, // ✅ preset.performance
		'no-mixed-srcset-descriptors': true, // ✅ preset.html-standard
		'no-obsolete-attr': true, // ✅ preset.html-standard
		'no-restricted-attr': {
			options: {
				disallowAttrs: [
					'accesskey',
					{
						name: 'tabindex',
						value: {
							pattern: '/^(?!-1$|0$).+$/',
						},
					},
				],
			},
		}, // ✅ preset.a11y
		'no-unknown-attr': true, // ✅ preset.html-standard
		'no-unpaired-srcset-sizes': true, // ✅ preset.html-standard
		'progress-value-bounds': true, // ✅ preset.html-standard
		'require-attr': true, // ✅ preset.html-standard
		'require-datetime': true, // ✅ preset.html-standard
		'sizes-auto-requires-lazy-loading': true, // ✅ preset.html-standard

		/* References */
		'form-attr-references-form': true, // ✅ preset.html-standard
		'input-list-references-datalist': true, // ✅ preset.html-standard
		'label-for-references-labelable': true, // ✅ preset.html-standard
		'no-broken-fragment-link': true, // ✅ preset.a11y
		'no-duplicate-id': true, // ✅ preset.html-standard / a11y
		'no-refer-to-non-existent-id': true, // ✅ preset.html-standard / a11y
		'usemap-references-map': true, // ✅ preset.html-standard

		/* Forms */
		'label-no-multiple-controls': true, // ✅ preset.html-standard
		'no-extra-selected-options': true, // ✅ preset.html-standard
		'no-input-file-value': true, // ✅ preset.html-standard
		'placeholder-label-option': true, // ✅ preset.html-standard

		/* Accessibility */
		'aria-prop-requires-role': true, // ✅ preset.a11y
		'element-supports-aria-prop': true, // ✅ preset.a11y
		'label-has-control': true, // ✅ preset.a11y
		'no-abstract-role': true, // ✅ preset.a11y
		'no-aria-hidden-on-hidden-until-found': true, // ✅ preset.a11y
		'no-aria-on-presentational-children': true, // ✅ preset.a11y
		'no-aria-on-unsupported-element': true, // ✅ preset.a11y
		'no-consecutive-br': true, // ✅ preset.a11y
		'no-contradictory-aria-prop': true, // ✅ preset.a11y
		'no-default-aria-value': true, // ✅ preset.a11y
		'no-deprecated-aria-prop': true, // ✅ preset.a11y
		'no-deprecated-role': true, // ✅ preset.a11y
		'no-duplicate-h1': true, // ✅ preset.a11y
		'no-focusable-in-aria-hidden': true, // ✅ preset.a11y
		'no-invalid-aria-prop-value': true, // ✅ preset.a11y
		'no-nested-top-level-landmark': true, // ✅ preset.a11y
		'no-prohibited-naming': true, // ✅ preset.a11y
		'no-pseudo-list': false, // ✅ preset.a11y: true
		'no-redundant-accessible-name': true, // ✅ preset.a11y
		'no-redundant-aria-prop': true, // ✅ preset.a11y
		'no-redundant-role': true, // ✅ preset.a11y
		'no-skipped-heading-level': true, // ✅ preset.html-standard
		'no-unknown-role': true, // ✅ preset.a11y
		'permitted-roles': true, // ✅ preset.a11y
		'require-accessible-name': true, // ✅ preset.a11y
		'require-adjacent-popover': true, // ✅ preset.a11y
		'require-aria-prop': true, // ✅ preset.a11y
		'require-dialog-autofocus': true, // ✅ preset.a11y
		'require-h1': true, // ✅ preset.a11y
		'require-landmark-label': true, // ✅ preset.a11y
		'require-owned-elements': true, // ✅ preset.a11y
		'require-parent-role': true, // ✅ preset.a11y
		'role-supports-aria-prop': true, // ✅ preset.a11y
		'tab-requires-tabpanel': true, // ✅ preset.a11y

		/* Style */
		'attr-order': false, // TODO: https://github.com/markuplint/markuplint/issues/4033
		'attr-value-quotes': true,
		'case-sensitive-attr-name': true, // ✅ preset.code-styles
		'case-sensitive-tag-name': true, // ✅ preset.code-styles
		'class-naming': false, // 個々のプロジェクトにおいて当該のプロジェクトルールに従い指定する
		'no-boolean-attr-value': false, // 空文字を明記する `required=""` 形式を許容
		'no-default-value': true,
		'require-end-tag': true,

		/* Maintainability */
		'no-event-handler-attr': true, // ✅ preset.security
		'no-hardcoded-id': false, // ID のハードコーディングを許容

		/* Browser Compatibility */
		'no-experimental-features': true,
		'no-nonstandard-features': true, // ✅ preset.compat
		'no-unsupported-browser-features': true, // ✅ preset.compat
	},
	nodeRules: [
		{
			selector: 'html',
			rules: {
				'no-unknown-attr': {
					options: {
						allowAttrs: ['prefix'],
					},
				},
				'require-attr': ['lang'], // ✅ preset.a11y
			},
		},
		{
			selector: 'meta[property]',
			rules: {
				'no-unknown-attr': {
					options: {
						allowAttrs: [
							{
								name: 'property',
								value: {
									pattern: '/^og:.+/',
								},
							},
							{
								name: 'content',
								value: 'NoEmptyAny',
							},
						],
					},
				}, // ✅ preset.rdfa
				'no-disallowed-attr': {
					options: {
						allowAttrs: [
							{
								name: 'property',
								value: {
									pattern: '/^og:.+/',
								},
							},
							{
								name: 'content',
								value: 'NoEmptyAny',
							},
						],
					},
				}, // ✅ preset.rdfa
				'no-invalid-attr-value': {
					options: {
						allowAttrs: [
							{
								name: 'property',
								value: {
									pattern: '/^og:.+/',
								},
							},
							{
								name: 'content',
								value: 'NoEmptyAny',
							},
						],
					},
				}, // ✅ preset.rdfa
				'require-attr': false, // ✅ preset.rdfa
			},
		},
		{
			selector: 'dl',
			rules: {
				'require-element': ['div'],
			},
		},
		{
			selector: 'search',
			rules: {
				'no-redundant-role': false,
			},
		},
		{
			selector: 'div',
			rules: {
				'require-attr': ['class'],
			},
		},
		{
			selector: 'div[id], div[role], dl > div',
			rules: {
				'require-attr': true,
			},
		},
		{
			selector: 'abbr',
			rules: {
				'no-restricted-attr': {
					options: {
						disallowAttrs: ['title'],
					},
				},
			},
		},
		{
			selector: 'img',
			rules: {
				'require-attr': ['alt'],
			},
		},
		{
			selector: 'iframe',
			rules: {
				'require-attr': ['title'], // ✅ preset.performance
			},
		},
		{
			selector: 'object',
			rules: {
				'require-attr': ['data', 'type', 'role', 'aria-labelledby'],
			},
		},
		{
			selector: 'figcaption ~ table, table:has(~ figcaption)',
			rules: {
				'no-restricted-element': ['caption'],
				'require-accessible-name': false,
			},
		}, // ✅ preset.html-standard
		{
			selector: 'table',
			rules: {
				'require-element': ['tbody'],
			},
		},
		{
			selector: 'thead th',
			rules: {
				'require-attr': [
					{
						name: 'scope',
						value: ['col', 'colgroup'],
					},
				],
			},
		},
		{
			selector: 'tbody th',
			rules: {
				'require-attr': [
					{
						name: 'scope',
						value: ['row', 'rowgroup'],
					},
				],
			},
		},
		{
			selector: 'td',
			rules: {
				'no-empty-palpable-content': false,
			},
		},
		{
			selector: 'input[pattern]',
			rules: {
				'require-attr': {
					value: [
						{
							name: 'title',
						},
					],
				},
			},
		}, // ✅ preset.html-standard
		{
			regexSelector: {
				nodeName: 'details',
				attrName: 'name',
				attrValue: '^(?<value>.+)$',
				combination: {
					combinator: ' ',
					nodeName: 'details',
				},
			},
			rules: {
				'no-restricted-attr': {
					options: {
						disallowAttrs: [
							{
								name: 'name',
								value: {
									pattern: '{{ value }}',
								},
							},
						],
					},
				},
			},
		}, // ✅ preset.html-standard
		{
			/* https://github.com/markuplint/markuplint/issues/1948 */
			selector: 'template *',
			rules: {
				'no-empty-palpable-content': false,
				'no-invalid-attr-value': false,
				'require-accessible-name': false,
			},
		},
		{
			/* https://github.com/markuplint/markuplint/issues/1948 */
			selector: ':has(> template)',
			rules: {
				'require-owned-elements': false,
			},
		},
	],
};
