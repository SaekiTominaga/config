import { strict as assert } from 'node:assert/strict';
import { test } from 'node:test';
import { ESLint, loadESLint } from 'eslint';
import config from '../eslint.config.js';

test('valid', async (t) => {
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
			linterResults.map((result) => result.errorCount).reduce((a, b) => a + b),
			0,
		);
	});

	await t.test('warningCount', () => {
		assert.equal(
			linterResults.map((result) => result.warningCount).reduce((a, b) => a + b),
			0,
		);
	});
});

test('invalid', async (t) => {
	/** @type {ESLint.LinterResult[]} */
	let linterResults;
	t.beforeEach(async () => {
		const FlatESLint = await loadESLint({ useFlatConfig: true });

		const eslint = new FlatESLint({
			baseConfig: config,
		});

		linterResults = await eslint.lintFiles(['__tests__/invalid/*.{js,ts}']);
	});

	await t.test('errorCount', () => {
		assert.equal(
			linterResults.map((result) => result.errorCount).reduce((a, b) => a + b),
			3,
		);
	});

	await t.test('warningCount', () => {
		assert.equal(
			linterResults.map((result) => result.warningCount).reduce((a, b) => a + b),
			0,
		);
	});
});
