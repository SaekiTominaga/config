module.exports = {
	rules: {
		curly: 'error',
		eqeqeq: 'error',
		'no-continue': 'error',
		'no-else-return': [
			'error',
			{
				allowElseIf: true,
			},
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-implicit-coercion': 'error',
		'no-invalid-this': 'error',
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-restricted-globals': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'error',
		'no-useless-call': 'error',
		'object-shorthand': ['error', 'methods'],
		'prefer-const': 'error',
		strict: ['error', 'safe'],
	},
};
