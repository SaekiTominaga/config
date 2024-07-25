// @ts-check

/** @type {import("eslint").Linter.FlatConfig} */
export default {
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'function-paren-newline': 'off',
		'implicit-arrow-linebreak': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'max-len': 'off',
		'newline-per-chained-call': 'off',
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'object-curly-newline': 'off',
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before',
				},
			},
		],
	},
};
