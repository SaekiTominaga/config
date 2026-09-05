import { strict as assert } from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';
import { MLEngine, type MLResultInfo } from 'markuplint';
import config from '../markuplint.config.js';

test('valid', async (t) => {
	const linterResults: (MLResultInfo | null)[] = [];

	t.beforeEach(async () => {
		const files = fs.promises.glob('__tests__/valid/**/*.html');

		for await (const file of files) {
			console.debug(file);

			const mlFile = await MLEngine.toMLFile(file.replaceAll('\\', '/'));
			if (mlFile === undefined) {
				continue;
			}

			const engine = new MLEngine(mlFile, {
				config: config,
			});

			linterResults.push(await engine.exec());
		}
	});

	await t.test('violations', () => {
		const violations = linterResults
			.map((result) => result?.violations)
			.flat()
			.map((violation) => violation?.ruleId);

		assert.deepEqual(violations, []);
	});
});

test('invalid', async (t) => {
	const linterResults: (MLResultInfo | null)[] = [];

	t.beforeEach(async () => {
		const files = fs.promises.glob('__tests__/invalid/**/*.html');

		for await (const file of files) {
			console.debug(file);

			const mlFile = await MLEngine.toMLFile(file.replaceAll('\\', '/'));
			if (mlFile === undefined) {
				continue;
			}

			const engine = new MLEngine(mlFile, {
				config: config,
			});

			linterResults.push(await engine.exec());
		}
	});

	await t.test('violations', () => {
		const violations = linterResults
			.map((result) => result?.violations)
			.flat()
			.map((violation) => violation?.ruleId);

		assert.deepEqual(violations, [
			/* rules/no-restricted-attr.html */
			'no-restricted-attr',
			'no-restricted-attr',

			/* nodeRules/abbr.html */
			'no-restricted-attr',

			/* nodeRules/details.html */
			'no-restricted-attr',

			/* nodeRules/div.html */
			'require-attr',

			/* nodeRules/dl.html */
			'require-element',
			'require-element',

			/* nodeRules/figure-table.html */
			'no-restricted-element',
			'no-restricted-element',

			/* nodeRules/html.html */
			'require-attr',

			/* nodeRules/iframe.html */
			'require-attr',

			/* nodeRules/img.html */
			'require-attr',

			/* nodeRules/input.html */
			'require-attr',

			/* nodeRules/meta_property.html */
			'no-invalid-attr-value',
			'no-invalid-attr-value',
			'no-invalid-attr-value',

			/* nodeRules/object.html */
			'require-attr',
			'require-attr',
			'require-attr',

			/* nodeRules/table.html */
			'require-element',

			/* nodeRules/th.html */
			'require-attr',
			'require-attr',
			'require-attr',
			'require-attr',
			'require-attr',
			'require-attr',
		]);
	});
});
