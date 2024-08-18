// @ts-check

import pluginJsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';
import configEslintLayoutFormatting from './rules/eslint/layout&formatting.js';
import configEslintPossibleProblems from './rules/eslint/possible-problems.js';
import configEslintSuggestions from './rules/eslint/suggestions.js';
import configImport from './rules/import.js';
import configJsdoc from './rules/jsdoc.js';

const compat = new FlatCompat();

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
	// @ts-expect-error: ts(2345)
	...compat.plugins('eslint-plugin-import'),
	...compat.config({
		plugins: ['eslint-plugin-import'],
		extends: 'plugin:import/recommended',
	}),
	pluginJsdoc.configs['flat/recommended'],
	configImport,
	configJsdoc,

	/* TypeScript */
	...tseslint.configs.recommended,

	{
		files: ['**/*.js'],
		languageOptions: {
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
