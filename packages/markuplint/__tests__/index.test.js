import { strict as assert } from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { MLEngine } from 'markuplint';
import config from '../markuplint.config.js';

test('valid', async (t) => {
	const linterResults = [];
	t.beforeEach(async () => {
		const files = fs.promises.glob('__tests__/valid/**/*.html');

		for await (const file of files) {
			console.debug(file);
			const engine = new MLEngine(await MLEngine.toMLFile(file.replaceAll('\\', '/')), {
				config: config,
			});

			linterResults.push(await engine.exec());
		}
	});

	await t.test('violations', () => {
		assert.equal(
			linterResults.every((result) => result.violations.length === 0),
			true,
		);
	});
});

test('invalid', async (t) => {
	const linterResults = [];
	t.beforeEach(async () => {
		const files = fs.promises.glob('__tests__/invalid/**/*.html');

		for await (const file of files) {
			console.debug(file);
			const engine = new MLEngine(await MLEngine.toMLFile(file.replaceAll('\\', '/')), {
				config: config,
			});

			linterResults.push(await engine.exec());
		}
	});

	await t.test('violations', () => {
		assert.equal(
			linterResults.every((result) => result.violations.length >= 1),
			true,
		);
	});
});
