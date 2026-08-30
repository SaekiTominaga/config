import { defineConfig } from 'oxlint';
import base from './base.ts';
import rulesImport from '../rules/import.ts';

export default defineConfig({
	extends: [base],
	plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'node', 'promise'],
	rules: {
		...rulesImport.node,
	},
	overrides: [
		{
			files: ['*'],
			env: {
				node: true, // Since `env` is not inherited via `extends`, it specified within `override` <https://github.com/oxc-project/oxc/issues/20087>
			},
		},
	],
});
