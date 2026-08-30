import { defineConfig } from 'oxlint';
import base from './base.ts';

export default defineConfig({
	extends: [base],
	plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'promise'],
	jsPlugins: [
		{
			name: 'safely-storage',
			specifier: 'eslint-plugin-safely-storage',
		},
	],
	rules: {
		'safely-storage/try-catch': 'error',
	},
	overrides: [
		{
			files: ['*'],
			env: {
				browser: true, // Since `env` is not inherited via `extends`, it specified within `override` <https://github.com/oxc-project/oxc/issues/20087>
			},
		},
		{
			files: ['*.spec.{js,ts}', '*.test.{js,ts}'],
			env: {
				node: true,
			},
		},
	],
});
