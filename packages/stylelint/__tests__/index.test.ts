import { strict as assert } from 'node:assert/strict';
import { test } from 'node:test';
import stylelint, { type LinterResult } from 'stylelint';
import config from '../stylelint.config.js';

test('valid', async (t) => {
	let linterResult: LinterResult;

	t.beforeEach(async () => {
		linterResult = await stylelint.lint({
			config: config,
			files: '__tests__/valid/**/*.css',
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
	let linterResult: LinterResult;

	t.beforeEach(async () => {
		linterResult = await stylelint.lint({
			config: config,
			files: '__tests__/invalid/**/*.css',
		});
	});

	await t.test('severity: error files', () => {
		assert.equal(linterResult.results.flatMap((result) => result.errored).filter((result) => result === true).length, 7);
	});

	await t.test('severity: warning files', () => {
		assert.equal(linterResult.results.flatMap((result) => result.errored).filter((result) => result === false).length, 0);
	});

	await t.test('warnings', () => {
		assert.equal(linterResult.results.flatMap((result) => result.warnings).length, 35);
	});
});
