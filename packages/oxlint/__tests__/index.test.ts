import { strict as assert } from 'node:assert/strict';
import { exec } from 'node:child_process';
import { test } from 'node:test';
import { promisify } from 'node:util';

interface OxlintJson {
	diagnostics: {
		message: string;
		code: string;
		severity: 'error' | 'warning';
		filename: string;
		help?: string;
		url?: string;
		labels: {
			span: { offset: number; length: number; line: number; column: number };
		}[];
		causes: unknown[];
		related: unknown[];
	}[];
	number_of_files: number;
	number_of_rules: number;
	threads_count?: number;
	start_time?: number;
}

const runLint = async (
	targetPaths: readonly string[],
	options?: {
		config?: string;
	},
): Promise<OxlintJson> => {
	try {
		const { stdout } = await promisify(exec)(`npx oxlint -f json -c ${options?.config ?? 'oxlint.config.ts'} ${targetPaths.join(' ')}`);
		return JSON.parse(stdout) as OxlintJson;
	} catch (error) {
		const execErr = error as { stdout?: string; message: string };
		if (execErr.stdout !== undefined) {
			return JSON.parse(execErr.stdout) as OxlintJson;
		}

		throw new Error(`Failed oxlint command: ${execErr.message}`, { cause: error });
	}
};

await test('node', async (t) => {
	const CONFIG = 'src/configs/node.ts';

	await t.test('valid', async () => {
		const TEST_DIR = '__tests__/valid';

		const result = await runLint([`${TEST_DIR}/options/typeAware.ts`, `${TEST_DIR}/options/typeCheck.js`], {
			config: CONFIG,
		});

		const errorCount = result.diagnostics.filter((d) => d.severity === 'error').length;
		const warningCount = result.diagnostics.filter((d) => d.severity === 'warning').length;
		const codes = result.diagnostics.map((d) => d.code);

		assert.equal(errorCount + warningCount, result.diagnostics.length);
		assert.equal(warningCount, 0);
		assert.deepEqual(codes, []);
	});

	await t.test('invalid', async () => {
		const TEST_DIR = '__tests__/invalid';

		const result = await runLint([`${TEST_DIR}/import/extensions.js`, `${TEST_DIR}/import/extensions.ts`], {
			config: CONFIG,
		});

		const errorCount = result.diagnostics.filter((d) => d.severity === 'error').length;
		const warningCount = result.diagnostics.filter((d) => d.severity === 'warning').length;
		const codes = result.diagnostics.map((d) => d.code);

		assert.equal(errorCount + warningCount, result.diagnostics.length);
		assert.equal(warningCount, 0);
		assert.deepEqual(codes.toSorted(), ['import(extensions)', 'import(extensions)']);
	});
});

await test('browser', async (t) => {
	const CONFIG = 'src/configs/browser.ts';

	await t.test('valid', async () => {
		const TEST_DIR = '__tests__/valid';

		const result = await runLint([`${TEST_DIR}/safely-storage/tryCatch.js`], {
			config: CONFIG,
		});

		const errorCount = result.diagnostics.filter((d) => d.severity === 'error').length;
		const warningCount = result.diagnostics.filter((d) => d.severity === 'warning').length;
		const codes = result.diagnostics.map((d) => d.code);

		assert.equal(errorCount + warningCount, result.diagnostics.length);
		assert.equal(warningCount, 0);
		assert.deepEqual(codes, []);
	});

	await t.test('invalid', async () => {
		const TEST_DIR = '__tests__/invalid';

		const result = await runLint([`${TEST_DIR}/safely-storage/tryCatch.js`], {
			config: CONFIG,
		});

		const errorCount = result.diagnostics.filter((d) => d.severity === 'error').length;
		const warningCount = result.diagnostics.filter((d) => d.severity === 'warning').length;
		const codes = result.diagnostics.map((d) => d.code);

		assert.equal(errorCount + warningCount, result.diagnostics.length);
		assert.equal(warningCount, 0);
		assert.deepEqual(codes.toSorted(), ['safely-storage(try-catch)']);
	});
});
