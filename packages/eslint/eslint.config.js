// @ts-check

// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import { jsdoc as pluginJsdoc } from 'eslint-plugin-jsdoc';
import pluginSafelyStorage from 'eslint-plugin-safely-storage';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import configEslintLayoutFormatting from './rules/eslint/layout&formatting.js';
import configEslintPossibleProblems from './rules/eslint/possible-problems.js';
import configEslintSuggestions from './rules/eslint/suggestions.js';
import configImport from './rules/import.js';
import configJsdoc from './rules/jsdoc.js';

export default defineConfig(
	eslint.configs.recommended,
	configEslintPossibleProblems,
	configEslintSuggestions,
	configEslintLayoutFormatting,

	/* Plugins */
	pluginImport.flatConfigs.recommended,
	configImport,

	pluginJsdoc({ config: 'flat/recommended' }),
	configJsdoc,

	pluginSafelyStorage.configs.default,

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
			parserOptions: {
				project: true,
			},
		},
		extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked, pluginJsdoc({ config: 'flat/recommended-typescript' })],
		rules: {
			'dot-notation': 'off',
			'no-unused-vars': 'off',
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
				},
			],
			'import/no-unresolved': 'off',
			'@typescript-eslint/no-extraneous-class': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					caughtErrors: 'none',
				},
			],
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
	{
		files: ['**/*.test.ts'],
		rules: {
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unnecessary-type-assertion': 'off',
		},
	},
);
