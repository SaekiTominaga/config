import { strict as assert } from 'node:assert/strict';
import { test } from 'node:test';
import { ESLint, loadESLint } from 'eslint';
import config from '../eslint.config.js';

test('js', async (t) => {
	/** @type {ESLint.LinterResult[]} */
	let linterResults;
	t.beforeEach(async () => {
		const FlatESLint = await loadESLint({ useFlatConfig: true });

		const eslint = new FlatESLint({
			baseConfig: config,
		});

		linterResults = await eslint.lintFiles(['__tests__/valid/*.{js,ts}']);
	});

	await t.test('errorCount', () => {
		assert.equal(
			linterResults.every((result) => result.errorCount === 0),
			true,
		);
	});

	await t.test('warningCount', () => {
		assert.equal(
			linterResults.every((result) => result.warningCount === 0),
			true,
		);
	});
});
