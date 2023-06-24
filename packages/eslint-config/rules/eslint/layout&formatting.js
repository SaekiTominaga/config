module.exports = {
	rules: {
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],
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
