import { type OxlintConfig, defineConfig } from 'oxlint';
import rulesImport from '../rules/import.ts';
import rulesUnicorn from '../rules/unicorn.ts';
import base from './base.ts';

const config: OxlintConfig = defineConfig({
	extends: [base],
	plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'promise'],
	overrides: [
		{
			files: ['*'],
			excludeFiles: ['*.spec.{js,ts}', '*.test.{js,ts}'],
			env: {
				browser: true,
			},
			jsPlugins: [
				{
					name: 'safely-storage',
					specifier: 'oxlint-plugin-safely-storage',
				},
			],
			rules: {
				...rulesImport.browser,
				...rulesUnicorn.browser,
				'safely-storage/try-catch': 'error',
			},
		},
		{
			files: ['*.spec.{js,ts}', '*.test.{js,ts}'],
			env: {
				browser: true,
				node: true,
			},
		},
	],
});

export default config;
