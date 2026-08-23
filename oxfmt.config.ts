import { defineConfig } from 'oxfmt';

export default defineConfig({
	singleQuote: true,
	ignorePatterns: [
		'packages/markuplint/__tests__/invalid/rules/end-tag.html', // SyntaxError
		'packages/stylelint/__tests__/invalid/avoid-errors.css', // Syntax error
	],
	sortImports: {
		newlinesBetween: false,
	},
	overrides: [
		{
			files: ['*.css'],
			options: {
				singleQuote: false,
			},
		},
		{
			files: ['packages/eslint/__tests__/invalid/import/order.js'],
			options: {
				sortImports: false,
			},
		},
	],
});
