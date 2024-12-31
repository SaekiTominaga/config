// @ts-expect-error: ts(7016)
import pluginImport from 'eslint-plugin-import';
import pluginJsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import eslintJs from '@eslint/js';
import configEslintLayoutFormatting from './rules/eslint/layout&formatting.js';
import configEslintPossibleProblems from './rules/eslint/possible-problems.js';
import configEslintSuggestions from './rules/eslint/suggestions.js';
import configImport from './rules/import.js';
import configJsdoc from './rules/jsdoc.js';

export default tseslint.config(
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			pluginJsdoc,
		},
	},

	eslintJs.configs.recommended,
	configEslintPossibleProblems,
	configEslintSuggestions,
	configEslintLayoutFormatting,

	/* Plugins */
	pluginImport.flatConfigs.recommended,
	pluginJsdoc.configs['flat/recommended'],
	configImport,
	configJsdoc,

	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest', // デフォルト値は 'latest' だが明示的な指定が必要
			globals: globals.nodeBuiltin,
		},
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
		},
		extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
		rules: {
			...pluginJsdoc.configs['flat/recommended-typescript'].rules,
			'dot-notation': 'off',
			'import/no-unresolved': 'off',
			'@typescript-eslint/no-extraneous-class': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					caughtErrors: 'none',
				},
			],
			'@typescript-eslint/no-unsafe-type-assertion': 'error',
			'@typescript-eslint/strict-boolean-expressions': [
				'error',
				{
					allowNullableBoolean: true,
				},
			],
		},
	},
	{
		files: ['**/*.config.js'],
		rules: {
			'import/no-extraneous-dependencies': 'off',
		},
	},
	{
		files: ['**/*.test.js', '**/*.test.ts'],
		rules: {
			'no-new': 'off',
			'no-unused-expressions': 'off',
			'import/no-extraneous-dependencies': 'off',
		},
	},
);
