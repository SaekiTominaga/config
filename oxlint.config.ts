import { defineConfig } from 'oxlint';
import configNode from './packages/oxlint/src/configs/node.ts';

export default defineConfig({
	extends: [configNode],
	ignorePatterns: ['packages/eslint/__tests__/{invalid,valid}', 'packages/oxlint/__tests__/{invalid,valid}'],
	overrides: [
		{
			files: ['*.test.ts'],
			rules: {
				'import/extensions': 'off',
			},
		},
		{
			files: ['packages/markuplint/__tests__/index.test.ts'],
			rules: {
				'eslint/no-continue': 'off',
			},
		},
		{
			files: ['packages/stylelint/configs/*.js'],
			rules: {
				'unicorn/no-null': 'off',
			},
		},
		{
			files: ['packages/typescript/__tests__/**/*.ts'],
			rules: {
				'unicorn/filename-case': 'off',
			},
		},
	],
});
