// @ts-check

import pluginJsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';
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
	{
		plugins: {
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
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			globals: globals.nodeBuiltin,
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
			'import/no-unresolved': 'off',
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
		files: ['**/*.d.ts'],
		rules: {
			'no-use-before-define': 'off',
			'no-var': 'off',
			'vars-on-top': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		files: ['**/*.config.js'],
		rules: {
			'import/no-extraneous-dependencies': 'off',
		},
	},
);
