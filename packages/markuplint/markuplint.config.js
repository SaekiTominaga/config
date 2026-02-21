/** @type {import('@markuplint/ml-config').Config} */
export default {
	rules: {
		/* Conformance checking */
		'attr-duplication': true, // ✅ preset.html-standard
		'deprecated-attr': true, // ✅ preset.html-standard
		'deprecated-element': true, // ✅ preset.html-standard
		'disallowed-element': ['noscript', 'embed'],
		doctype: true, // ✅ preset.html-standard
		'heading-levels': true, // ✅ preset.html-standard
		'id-duplication': true, // ✅ preset.html-standard / preset.a11y
		'invalid-attr': {
			options: {
				allowAttrs: [
					{
						name: 'tabindex',
						value: {
							enum: ['-1', '0'],
						},
					},
				],
				disallowAttrs: ['accesskey'],
			},
		}, // ✅ preset.a11y
		'no-duplicate-dt': true, // ✅ preset.html-standard
		'no-empty-palpable-content': true,
		'no-orphaned-end-tag': true, // ✅ preset.html-standard
		'permitted-contents': true, // ✅ preset.html-standard
		'placeholder-label-option': true, // ✅ preset.html-standard
		'require-datetime': true, // ✅ preset.html-standard
		'required-attr': true, // ✅ preset.html-standard
		'required-element': false,

		/* Accessibility */
		'label-has-control': true, // ✅ preset.a11y
		'landmark-roles': {
			options: {
				ignoreRoles: ['complementary'],
			},
		}, // preset.a11y: true
		'neighbor-popovers': true, // ✅ preset.a11y
		'no-ambiguous-navigable-target-names': true, // ✅ preset.a11y
		'no-consecutive-br': true, // ✅ preset.a11y
		'no-refer-to-non-existent-id': true, // ✅ preset.html-standard / preset.a11y
		'require-accessible-name': true, // ✅ preset.a11y
		'required-h1': true, // ✅ preset.a11y
		'table-row-column-alignment': false, // preset.a11y: true
		'use-list': false, // preset.a11y: true
		'wai-aria': true, // ✅ preset.a11y

		/* Naming Convention */
		'class-naming': false,

		/* Maintenability */
		'no-hard-code-id': false,
		'no-use-event-handler-attr': true,

		/* Style */
		'attr-value-quotes': false,
		'case-sensitive-attr-name': 'lower',
		'case-sensitive-tag-name': 'lower',
		'character-reference': true,
		'end-tag': true,
		'ineffective-attr': true, // ✅ preset.html-standard
		'no-boolean-attr-value': false,
		'no-default-value': true,

		/* v5 */
		'no-unsupported-features': {
			options: {
				checkNonStandard: true,
			},
		}, // ✅ preset.compat
		'redundant-accessible-name': true, // ✅ preset.a11y
		'require-dialog-autofocus': true, // ✅ preset.a11y
		'srcset-sizes-constraint': true, // ✅ preset.html-standard
		'link-types': {
			options: {
				allowMicroformats: true,
			},
		}, // ✅ preset.html-standard
	},
	nodeRules: [
		{
			selector: 'html',
			rules: {
				'invalid-attr': {
					options: {
						ignoreAttrNamePrefix: ['prefix'],
					},
				},
				'required-attr': ['lang'], // ✅ preset.a11y
			},
		},
		{
			selector: 'meta[property]',
			rules: {
				'invalid-attr': {
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
				},
				'required-attr': false, // ✅ preset.rdfa
			},
		},
		{
			selector: 'dl',
			rules: {
				'required-element': ['div'],
			},
		},
		{
			selector: 'search',
			rules: {
				'required-attr': ['role'],
				'wai-aria': {
					options: {
						disallowSetImplicitRole: false,
					},
				},
			},
		},
		{
			selector: 'div',
			rules: {
				'required-attr': ['class'],
			},
		},
		{
			selector: 'div[id], div[role], dl > div',
			rules: {
				'required-attr': true,
			},
		},
		{
			selector: 'img',
			rules: {
				'required-attr': ['alt'],
			},
		}, // https://github.com/markuplint/markuplint/issues/2451
		{
			selector: 'iframe',
			rules: {
				'required-attr': ['title'], // ✅ preset.performance
			},
		},
		{
			selector: 'object',
			rules: {
				'required-attr': ['data', 'type', 'role', 'aria-labelledby'],
			},
		},
		{
			selector: 'figcaption ~ table, table:has(~ figcaption)',
			rules: {
				'disallowed-element': ['caption'],
				'require-accessible-name': false,
			},
		}, // ✅ preset.html-standard
		{
			selector: 'table',
			rules: {
				'required-element': ['tbody'],
			},
		},
		{
			selector: 'thead th',
			rules: {
				'required-attr': [
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
				'required-attr': [
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
				'required-attr': {
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
				'invalid-attr': {
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
				'require-accessible-name': false,
			},
		},
		{
			/* https://github.com/markuplint/markuplint/issues/1948 */
			selector: ':has(> template)',
			rules: {
				'wai-aria': false,
			},
		},
		{
			/* https://github.com/markuplint/markuplint/issues/673 */
			selector: '[role=radiogroup]',
			rules: {
				'wai-aria': false,
			},
		},
	],
};
