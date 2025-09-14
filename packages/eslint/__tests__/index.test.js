import { strict as assert } from 'node:assert/strict';
import { test } from 'node:test';
import { ESLint, Linter, loadESLint } from 'eslint';
import config from '../eslint.config.js';

/** @type {typeof ESLint} */
const FlatESLint = await loadESLint({ useFlatConfig: true });

const eslint = new FlatESLint({
	baseConfig: config,
});

test('valid', async (t) => {
	/** @type {ESLint.LintResult[]} */
	let linterResults;
	t.before(async () => {
		linterResults = await eslint.lintFiles(['__tests__/valid/**/*.{js,ts}']);
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
	/** @type {Linter.LintMessage[]} */
	let linterMessages;
	t.before(async () => {
		linterMessages = (await eslint.lintFiles(['__tests__/invalid/**/*.{js,ts}'])).map((result) => result.messages).flat();
	});

	await t.test('error', () => {
		assert.deepEqual(
			linterMessages
				.filter((message) => message.severity === 2)
				.map((message) => message.ruleId)
				.sort(),
			[
				'@typescript-eslint/dot-notation',
				'@typescript-eslint/no-array-delete',
				'@typescript-eslint/no-confusing-void-expression',
				'array-callback-return',
				'consistent-return',
				'constructor-super',
				'import/extensions',
				'import/extensions',
				'import/extensions',
				'import/newline-after-import',
				'import/no-absolute-path',
				'import/no-deprecated',
				'import/no-deprecated',
				'import/no-empty-named-blocks',
				'import/no-extraneous-dependencies',
				'import/no-mutable-exports',
				'import/no-named-default',
				'import/no-self-import',
				'import/no-unassigned-import',
				'import/no-unassigned-import',
				'import/no-unresolved',
				'import/no-useless-path-segments',
				'import/order',
				'line-comment-position',
				'no-await-in-loop',
				'no-cond-assign',
				'no-constant-condition',
				'no-constructor-return',
				'no-irregular-whitespace',
				'no-self-compare',
				'no-template-curly-in-string',
				'no-undef',
				'no-unmodified-loop-condition',
				'no-unsafe-optional-chaining',
				'no-unsafe-optional-chaining',
				'safely-storage/try-catch',
				'unicode-bom',
				'valid-typeof',
			],
		);
	});

	await t.test('warning', () => {
		assert.deepEqual(
			linterMessages
				.filter((message) => message.severity === 1)
				.map((message) => message.ruleId)
				.sort(),
			[
				'import/no-duplicates',
				'import/no-duplicates',
				'jsdoc/lines-before-block',
				'jsdoc/no-types',
				'jsdoc/require-returns-type',
				'jsdoc/tag-lines',
				'no-console',
			],
		);
	});
});
