// @ts-check
/* eslint-disable import/no-unresolved */

import { defineConfig } from 'eslint/config';
import pluginFunctional from 'eslint-plugin-functional';
import pluginImport from 'eslint-plugin-import';
import { jsdoc as pluginJsdoc } from 'eslint-plugin-jsdoc';
import pluginSafelyStorage from 'eslint-plugin-safely-storage';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import configEslintLayoutFormatting from './rules/eslint/layout&formatting.js';
import configEslintPossibleProblems from './rules/eslint/possible-problems.js';
import configEslintSuggestions from './rules/eslint/suggestions.js';
import configFunctional from './rules/functional.js';
import configImport from './rules/import.js';
import configJsdoc from './rules/jsdoc.js';

/** @type {import("eslint").Linter.Config[]} */
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
		extends: [
			pluginFunctional.configs.externalVanillaRecommended,
			pluginFunctional.configs.recommended,
			pluginFunctional.configs.stylistic,
			pluginFunctional.configs.disableTypeChecked,
		],
		rules: {
			...configFunctional.rules,
		},
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parserOptions: {
				project: true,
			},
		},
		extends: [
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			pluginFunctional.configs.externalTypeScriptRecommended,
			pluginFunctional.configs.recommended,
			pluginFunctional.configs.stylistic,
			pluginJsdoc({ config: 'flat/recommended-typescript' }),
		],
		rules: {
			'dot-notation': 'off',
			'no-unused-vars': 'off',
			...configFunctional.rules,
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
				},
			],
			'import/no-unresolved': 'off',
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
					allowNullableObject: false,
					allowNumber: false,
					allowString: false,
				},
			],
			'@typescript-eslint/switch-exhaustiveness-check': [
				'error',
				{
					considerDefaultExhaustiveForUnions: true,
				},
			], // eslint-plugin-functional; externalTypeScriptRecommended
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
