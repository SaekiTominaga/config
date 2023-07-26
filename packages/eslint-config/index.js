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
		project: true,
	},
	plugins: ['jsdoc'],
	overrides: [
		{
			files: ['*.ts'],
			extends: ['plugin:@typescript-eslint/strict-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked', 'plugin:jsdoc/recommended-typescript'],
			rules: {
				'dot-notation': 'off',
				'@typescript-eslint/dot-notation': 'off',
				'@typescript-eslint/no-extraneous-class': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
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
