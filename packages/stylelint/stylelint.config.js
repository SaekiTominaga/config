/** @type {import('stylelint').Config} */
export default {
	plugins: ['stylelint-attribute-case-sensitivity', 'stylelint-no-default-viewport', 'stylelint-plugin-logical-css', 'stylelint-root-colors'],
	extends: ['stylelint-config-standard', 'stylelint-config-concentric-order', 'stylelint-plugin-logical-css/configs/recommended'],
	rules: {
		/**
		 * Avoid errors
		 */
		/* Deprecated */
		// ✅ at-rule-no-deprecated
		// ✅ declaration-property-value-keyword-no-deprecated
		// ✅ media-type-no-deprecated
		// ✅ property-no-deprecated

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
		// ✅ at-rule-prelude-no-invalid
		// color-no-invalid-hex
		// ✅ function-calc-no-unspaced-operator
		// ✅ keyframe-declaration-no-important
		// ✅ media-query-no-invalid
		// ✅ named-grid-areas-no-invalid
		// ✅ no-invalid-double-slash-comments
		// ✅ no-invalid-position-at-import-rule
		// ✅ no-invalid-position-declaration
		// ✅ string-no-newline
		// ✅ syntax-string-no-invalid

		/* Irregular */
		// ✅ no-irregular-whitespace

		/* Missing */
		// ✅ custom-property-no-missing-var-function
		// ✅ font-family-no-missing-generic-family-keyword
		// ✅ nesting-selector-no-missing-scoping-root

		/* Non-standard */
		// function-linear-gradient-no-nonstandard-direction

		/* Overrides */
		// ✅ declaration-block-no-shorthand-property-overrides

		/* Unmatchable */
		// ✅ selector-anb-no-unmatchable

		/* Unknown */
		// ✅ annotation-no-unknown
		// ✅ at-rule-descriptor-no-unknown
		// ✅ at-rule-descriptor-value-no-unknown
		// ✅ at-rule-no-unknown
		// ✅ declaration-property-value-no-unknown
		// function-no-unknown
		// ✅ media-feature-name-no-unknown
		// ✅ media-feature-name-value-no-unknown
		// no-unknown-animations
		// no-unknown-custom-media
		// no-unknown-custom-properties
		// ✅ property-no-unknown
		// ✅ selector-pseudo-class-no-unknown
		// ✅ selector-pseudo-element-no-unknown
		// ✅ selector-type-no-unknown
		// unit-no-unknown

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
		'declaration-no-important': true,
		'declaration-property-unit-allowed-list': {
			'line-height': [],
		},
		// declaration-property-unit-disallowed-list
		// declaration-property-value-allowed-list
		// declaration-property-value-disallowed-list
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
		'property-disallowed-list': ['white-space'],
		// ✅ property-no-vendor-prefix
		// rule-nesting-at-rule-required-list
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
		], // ✅

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
		// ✅ color-function-alias-notation
		// ✅ color-function-notation
		// ✅ color-hex-length
		'display-notation': 'full',
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
		// ✅ container-name-pattern
		// ✅ custom-media-pattern
		'custom-property-pattern': /^_?([a-z][a-z0-9]*)(-[a-z0-9]+)*$/, // ✅
		// ✅ keyframes-name-pattern
		// ✅ layer-name-pattern
		// ✅ selector-class-pattern
		// ✅ selector-id-pattern
		'selector-nested-pattern': /&/,

		/* Quotes */
		// ✅ font-family-name-quotes
		// ✅ function-url-quotes
		// ✅ selector-attribute-quotes

		/* Redundant */
		// ✅ block-no-redundant-nested-style-rules
		// ✅ declaration-block-no-redundant-longhand-properties
		// ✅ shorthand-property-no-redundant-values

		/* Whitespace inside */
		// ✅ comment-whitespace-inside

		/**
		 * stylelint-order
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

		/**
		 * [plugin] stylelint-plugin-logical-css
		 */
		'logical-css/require-logical-properties': [
			true,
			{
				ignore: ['overflow-x', 'overflow-y'],
			},
		],

		/**
		 * [plugin] stylelint-attribute-case-sensitivity
		 */
		'plugin/attribute-case-sensitivity': true,

		/**
		 * [plugin] stylelint-no-default-viewport
		 */
		'plugin/no-default-viewport': true,

		/**
		 * [plugin] stylelint-root-colors
		 */
		'plugin/root-colors': [
			true,
			{
				required: true,
			},
		],
	},
};
