export default {
	extends: ['stylelint-config-standard', 'stylelint-config-concentric-order'],
	rules: {
		/**
		 * Avoid errors
		 */
		/* Descending */
		'no-descending-specificity': null, // ✅

		/* Duplicate */
		// ✅ declaration-block-no-duplicate-custom-properties
		// ✅ declaration-block-no-duplicate-properties
		// ✅ font-family-no-duplicate-names
		// ✅ keyframe-block-no-duplicate-selectors
		// ✅ no-duplicate-at-import-rules
		// ✅ no-duplicate-selectors

		/* Empty */
		'block-no-empty': null, // ✅
		// ✅ comment-no-empty
		// ✅ no-empty-source

		/* Invalid */
		// ✅ color-no-invalid-hex
		// ✅ function-calc-no-unspaced-operator
		// ✅ keyframe-declaration-no-important
		// ✅ media-query-no-invalid
		// ✅ named-grid-areas-no-invalid
		// ✅ no-invalid-double-slash-comments
		// ✅ no-invalid-position-at-import-rule
		// ✅ string-no-newline

		/* Irregular */
		// ✅ no-irregular-whitespace

		/* Missing */
		// ✅ custom-property-no-missing-var-function
		// ✅ font-family-no-missing-generic-family-keyword

		/* Non-standard */
		// ✅ function-linear-gradient-no-nonstandard-direction

		/* Overrides */
		// ✅ declaration-block-no-shorthand-property-overrides

		/* Unmatchable */
		// ✅ selector-anb-no-unmatchable

		/* Unknown */
		// ✅ annotation-no-unknown
		// ✅ at-rule-no-unknown
		'declaration-property-value-no-unknown': true,
		// ✅ function-no-unknown
		// ✅ media-feature-name-no-unknown
		'media-feature-name-value-no-unknown': true,
		// no-unknown-animations
		// no-unknown-custom-media
		// no-unknown-custom-properties
		// ✅ property-no-unknown
		// ✅ selector-pseudo-class-no-unknown
		// ✅ selector-pseudo-element-no-unknown
		// ✅ selector-type-no-unknown
		// ✅ unit-no-unknown

		/**
		 * Enforce conventions
		 */
		/* Allowed, disallowed & required */
		// at-rule-allowed-list
		// at-rule-disallowed-list
		// ✅ at-rule-no-vendor-prefix
		'at-rule-property-required-list': {
			'font-face': ['font-family', 'src'],
		},
		'color-hex-alpha': 'never',
		'color-named': 'never',
		// color-no-hex
		// comment-word-disallowed-list
		'declaration-no-important': [
			true,
			{
				severity: 'warning',
			},
		],
		'declaration-property-unit-allowed-list': {
			'line-height': [],
		},
		// declaration-property-unit-disallowed-list
		// declaration-property-value-allowed-list
		'declaration-property-value-disallowed-list': [
			{
				display: [
					'block',
					'flow-root',
					'inline',
					'inline-block',
					'run-in',
					'list-item',
					'inline list-item',
					'flex',
					'inline-flex',
					'grid',
					'inline-grid',
					'ruby',
					'table',
					'inline-table',
				],
				float: ['left', 'right'],
				clear: ['left', 'right'],
				'text-align': ['left', 'right'],
				resize: ['vertical', 'horizontal'],
			},
			{
				message: (name, short) => {
					switch (name) {
						case 'display': {
							let full = '';
							switch (short) {
								/* property list: https://drafts.csswg.org/css-display/#display-value-summary */
								case 'block': {
									full = 'block flow';
									break;
								}
								case 'flow-root': {
									full = 'block flow-root';
									break;
								}
								case 'inline': {
									full = 'inline flow';
									break;
								}
								case 'inline-block': {
									full = 'inline flow-root';
									break;
								}
								case 'run-in': {
									full = 'run-in flow';
									break;
								}
								case 'list-item': {
									full = 'block flow list-item';
									break;
								}
								case 'inline list-item': {
									full = 'inline flow list-item';
									break;
								}
								case 'flex': {
									full = 'block flex';
									break;
								}
								case 'inline-flex': {
									full = 'inline flex';
									break;
								}
								case 'grid': {
									full = 'block grid';
									break;
								}
								case 'inline-grid': {
									full = 'inline grid';
									break;
								}
								case 'ruby': {
									full = 'inline ruby';
									break;
								}
								case 'table': {
									full = 'block table';
									break;
								}
								case 'inline-table': {
									full = 'inline table';
									break;
								}
							}
							return `Use multi-keyword syntax for "${name}" ("${short}" → "${full}")`;
						}
					}
					return `Use logical value for "${name}"`;
				},
				severity: 'warning',
			},
		],
		// function-allowed-list
		// function-disallowed-list
		'function-url-no-scheme-relative': true,
		// function-url-scheme-allowed-list
		// function-url-scheme-disallowed-list
		// ✅ length-zero-no-unit
		// media-feature-name-allowed-list
		// media-feature-name-disallowed-list
		// ✅ media-feature-name-no-vendor-prefix
		// media-feature-name-unit-allowed-list
		// media-feature-name-value-allowed-list
		// property-allowed-list
		'property-disallowed-list': [
			[
				'top',
				'right',
				'bottom',
				'left',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'border-top',
				'border-right',
				'border-bottom',
				'border-left',
				'border-top-width',
				'border-right-width',
				'border-bottom-width',
				'border-left-width',
				'border-top-style',
				'border-right-style',
				'border-bottom-style',
				'border-left-style',
				'border-top-color',
				'border-right-color',
				'border-bottom-color',
				'border-left-color',
				'border-top-right-radius',
				'border-top-left-radius',
				'border-bottom-right-radius',
				'border-bottom-left-radius',
				'padding-top',
				'padding-right',
				'padding-bottom',
				'padding-left',
				'width',
				'min-width',
				'max-width',
				'height',
				'min-height',
				'max-height',
				'overscroll-behavior-x',
				'overscroll-behavior-y',
			],
			{
				message: (name) => `Use logical property for "${name}"`,
				severity: 'warning',
			},
		],
		// ✅ property-no-vendor-prefix
		// rule-selector-property-disallowed-list
		// selector-attribute-name-disallowed-list
		// selector-attribute-operator-allowed-list
		// selector-attribute-operator-disallowed-list
		// selector-combinator-allowed-list
		// selector-combinator-disallowed-list
		// selector-disallowed-list
		// selector-no-qualifying-type
		// ✅ selector-no-vendor-prefix
		// selector-pseudo-class-allowed-list
		// selector-pseudo-class-disallowed-list
		// selector-pseudo-element-allowed-list
		// selector-pseudo-element-disallowed-list
		// unit-allowed-list
		// unit-disallowed-list
		// ✅ value-no-vendor-prefix

		/* Case */
		// ✅ function-name-case
		// ✅ selector-type-case
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true,
			},
		],

		/* Empty lines */
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment'],
				ignoreAtRules: ['import'],
			},
		], // ✅
		// ✅ comment-empty-line-before
		// ✅ custom-property-empty-line-before
		// ✅ declaration-empty-line-before
		// ✅ rule-empty-line-before

		/* Max & min */
		// ✅ declaration-block-single-line-max-declarations
		// declaration-property-max-values
		// max-nesting-depth
		// ✅ number-max-precision
		// selector-max-attribute
		// selector-max-class
		// selector-max-combinators
		// selector-max-compound-selectors
		'selector-max-id': 0,
		// selector-max-pseudo-class
		// selector-max-specificity
		// selector-max-type
		'selector-max-universal': [
			1,
			{
				ignoreAfterCombinators: ['+'],
			},
		],
		// time-min-milliseconds

		/* Notation */
		// ✅ alpha-value-notation
		// ✅ color-function-notation
		// ✅ color-hex-length
		'font-weight-notation': 'numeric',
		// ✅ hue-degree-notation
		// ✅ import-notation
		// ✅ keyframe-selector-notation
		// ✅ lightness-notation
		// ✅ media-feature-range-notation
		// ✅ selector-not-notation
		// ✅ selector-pseudo-element-colon-notation

		/* Pattern */
		// comment-pattern
		// ✅ custom-media-pattern
		'custom-property-pattern': '^_?([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		// ✅ keyframes-name-pattern
		// ✅ selector-class-pattern
		// ✅ selector-id-pattern
		// selector-nested-pattern

		/* Quotes */
		// ✅ font-family-name-quotes
		// ✅ function-url-quotes
		// ✅ selector-attribute-quotes

		/* Redundant */
		// ✅ declaration-block-no-redundant-longhand-properties
		// ✅ shorthand-property-no-redundant-values

		/* Whitespace inside */
		// ✅ comment-whitespace-inside

		/**
		 * order
		 */
		'order/order': [
			[
				'custom-properties',
				'declarations',
				{
					type: 'at-rule',
					name: 'supports',
					hasBlock: true,
				},
				{
					type: 'at-rule',
					name: 'container',
					hasBlock: true,
				},
				{
					type: 'at-rule',
					name: 'media',
					hasBlock: true,
				},
				'rules',
			],
			{ unspecified: 'bottom' },
		],
	},
};
