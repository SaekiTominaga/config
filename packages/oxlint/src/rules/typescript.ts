import type { DummyRuleMap } from 'oxlint';

/**
 * ✅ Oxlint v1.80.0: default <https://oxc.rs/docs/guide/usage/linter/rules.html?sort=category&dir=asc&scope=typescript>
 * ☑️ typescript-eslint v8.68.0: recommended <https://typescript-eslint.io/rules/?=recommended>
 * 🔒 typescript-eslint v8.68.0: strict <https://typescript-eslint.io/rules/?=strict>
 * 🎨 typescript-eslint v8.68.0: stylistic <https://typescript-eslint.io/rules/?=stylistic>
 */

const base = {
	/* suspicious */
	'typescript/no-unsafe-type-assertion': 'off',

	/* pedantic */
	'typescript/ban-ts-comment': ['error', { minimumDescriptionLength: 10 }], // ☑️
	'typescript/prefer-readonly-parameter-types': 'off',
	'typescript/strict-boolean-expressions': [
		'error',
		{
			allowNullableBoolean: true,
			allowNullableObject: false,
			allowNumber: false,
			allowString: false,
		},
	], // ✅
	'typescript/switch-exhaustiveness-check': [
		'error',
		{
			considerDefaultExhaustiveForUnions: true,
		},
	], // eslint-plugin-functional: externalTypeScriptRecommended

	/* restriction */
	'typescript/explicit-function-return-type': 'off',
	'typescript/explicit-member-accessibility': 'off',
	'typescript/explicit-module-boundary-types': 'off',
	'typescript/no-import-type-side-effects': 'off',
	'typescript/promise-function-async': 'off',
} as DummyRuleMap;

const test = {
	/* suspicious */
	'typescript/no-unnecessary-type-assertion': 'off',

	/* restriction */
	'typescript/no-non-null-assertion': 'off',
} as DummyRuleMap;

export default { base, test };
