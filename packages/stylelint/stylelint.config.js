export default {
	extends: ['stylelint-config-standard', 'stylelint-config-concentric-order'],
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment'],
				ignoreAtRules: ['import'],
			},
		],
		'block-no-empty': null,
		'color-hex-alpha': 'never',
		'color-named': 'never',
		'custom-property-pattern': '^_?([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		'declaration-no-important': [
			true,
			{
				severity: 'warning',
			},
		],
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
		'declaration-property-value-no-unknown': true,
		'function-url-no-scheme-relative': true,
		'media-feature-name-value-no-unknown': true,
		'no-descending-specificity': null,
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
		'selector-max-id': 0,
		'selector-max-universal': [
			1,
			{
				ignoreAfterCombinators: ['+'],
			},
		],
		'value-keyword-case': [
			'lower',
			{
				camelCaseSvgKeywords: true,
			},
		],

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
