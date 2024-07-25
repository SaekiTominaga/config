// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';
import pluginJsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import configEslintLayoutFormatting from './rules/eslint/layout&formatting.js';
import configEslintPossibleProblems from './rules/eslint/possible-problems.js';
import configEslintSuggestions from './rules/eslint/suggestions.js';
import configImport from './rules/import.js';
import configJsdoc from './rules/jsdoc.js';

const compat = new FlatCompat();

/** @type {import("@typescript-eslint/utils/ts-eslint").FlatConfig.ConfigArray} */
export default tseslint.config(
	eslintJs.configs.recommended,
	...compat.config({ extends: 'eslint-config-airbnb-base' }),
	configEslintPossibleProblems,
	configEslintSuggestions,
	configEslintLayoutFormatting,
	configImport,
	...tseslint.configs.recommended,
	pluginJsdoc.configs['flat/recommended'],
	configJsdoc,
	{
		languageOptions: {
			ecmaVersion: 'latest', // TODO: デフォルト値は latest だが、明示的に指定しないと Top-level await で Parsing error が発生する
		},
		plugins: {
			pluginJsdoc,
		},
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: parserTypeScript,
			parserOptions: {
				project: true,
			},
		},
		rules: {
			...pluginTypeScript.configs['strict-type-checked'].rules,
			...pluginTypeScript.configs['stylistic-type-checked'].rules,
			...pluginJsdoc.configs['flat/recommended-typescript'].rules,
			'dot-notation': 'off',
			'@typescript-eslint/dot-notation': 'off',
			'@typescript-eslint/no-extraneous-class': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/strict-boolean-expressions': [
				'error',
				{
					allowNullableBoolean: true,
				},
			],
		},
	},
	{
		files: ['**/**.d.ts'],
		rules: {
			'no-use-before-define': 'off',
			'no-var': 'off',
			'vars-on-top': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		files: ['**/**.test.ts', '**/**.test.js'],
		rules: {
			'no-new': 'off',
			'no-tabs': 'off',
			'no-unused-expressions': 'off',
		},
	},
	{
		files: ['**/**.test.ts'],
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	{
		files: ['**/**.test.js'],
		rules: {
			'import/no-extraneous-dependencies': 'off',
			'import/no-named-as-default': 'off',
			'import/no-named-as-default-member': 'off',
		},
	},
);
