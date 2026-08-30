import { defineConfig } from 'oxlint';
import rulesEslint from '../rules/eslint.ts';
import rulesImport from '../rules/import.ts';
import rulesJsdoc from '../rules/jsdoc.ts';
import rulesNode from '../rules/node.ts';
import rulesOxc from '../rules/oxc.ts';
import rulesPromise from '../rules/promise.ts';
import rulesTypeScript from '../rules/typescript.ts';
import rulesUnicorn from '../rules/unicorn.ts';

export default defineConfig({
	categories: {
		correctness: 'error',
		suspicious: 'error',
		pedantic: 'error',
		perf: 'error',
		style: 'error',
		restriction: 'error',
		nursery: 'error',
	},
	rules: {
		...rulesEslint.base,
		...rulesImport.base,
		...rulesJsdoc.base,
		...rulesNode.base,
		...rulesOxc.base,
		...rulesPromise.base,
		...rulesUnicorn.base,
	},
	overrides: [
		{
			files: ['*.js', '*.mjs'],
			rules: {
				'typescript/no-unnecessary-type-assertion': 'off', // Suppressing JSDoc annotations errors
			},
		},
		{
			files: ['*.ts'],
			rules: {
				...rulesTypeScript.base,
				...rulesImport.typeScript,
				...rulesJsdoc.typeScript,
			},
		},
		{
			files: ['*.config.{js,ts}'],
			rules: {
				...rulesUnicorn.config,
			},
		},
		{
			files: ['*.spec.{js,ts}', '*.test.{js,ts}'],
			rules: {
				...rulesEslint.test,
				...rulesUnicorn.test,
				...rulesImport.test,
			},
		},
		{
			files: ['*.spec.ts', '*.test.ts'],
			rules: {
				...rulesTypeScript.test,
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				...rulesImport.declaration,
			},
		},
	],
});
