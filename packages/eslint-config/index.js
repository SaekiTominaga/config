module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'./rules/eslint/possible-problems.js',
		'./rules/eslint/suggestions.js',
		'./rules/eslint/layout&formatting.js',
		'./rules/import.js',
		'plugin:jsdoc/recommended',
		'./rules/jsdoc.js',
	],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	plugins: ['jsdoc'],
	overrides: [
		{
			files: ['*.ts'],
			extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsdoc/recommended-typescript'],
			rules: {
				'dot-notation': 'off',
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'no-use-before-define': 'off',
				'no-var': 'off',
				'vars-on-top': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
		{
			files: ['*.test.ts', '*.test.js'],
			rules: {
				'no-new': 'off',
				'no-tabs': 'off',
				'no-unused-expressions': 'off',
			},
		},
		{
			files: ['*.test.ts'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
			},
		},
		{
			files: ['*.test.js'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
				'import/no-named-as-default': 'off',
				'import/no-named-as-default-member': 'off',
			},
		},
	],
};
