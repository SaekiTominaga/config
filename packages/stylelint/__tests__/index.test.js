import { strict as assert } from 'node:assert/strict';
import { test } from 'node:test';
import stylelint from 'stylelint';
import config from '../stylelint.config.js';

test('valid', async (t) => {
	/** @type {stylelint.LinterResult} */
	let linterResult;
	t.beforeEach(async () => {
		linterResult = await stylelint.lint({
			config: config,
			files: '__tests__/valid/*.css',
		});
	});

	await t.test('errored', () => {
		assert.equal(linterResult.errored, false);
	});

	await t.test('warnings', () => {
		assert.equal(
			linterResult.results.every((result) => result.warnings.length === 0),
			true,
		);
	});
});

test('invalid', async (t) => {
	/** @type {stylelint.LinterResult} */
	let linterResult;
	t.beforeEach(async () => {
		linterResult = await stylelint.lint({
			config: config,
			files: '__tests__/invalid/*.css',
		});
	});

	await t.test('errored', () => {
		assert.equal(
			linterResult.results.every((result) => result.errored),
			true,
		);
	});

	await t.test('warnings', () => {
		assert.equal(
			linterResult.results.flatMap((result) => result.warnings).length,
			36,
		);
	});
});
