import type { DummyRuleMap } from 'oxlint';

/**
 * ✅ Oxlint v1.80.0: default <https://oxc.rs/docs/guide/usage/linter/rules.html?sort=category&dir=asc&scope=import>
 * ☑️ eslint-plugin-import v2.32.0: recommended <https://github.com/import-js/eslint-plugin-import#rules>
 * ⌨️ eslint-plugin-import v2.32.0: typescript
 */

const base = {
	/* pedantic */
	'import/max-dependencies': 'off',

	/* style */
	'import/consistent-type-specifier-style': 'off',
	'import/no-anonymous-default-export': 'off',
	'import/no-named-export': 'off',
	'import/prefer-default-export': 'off',

	/* restriction */
	'import/extensions': ['error', 'ignorePackages'],
	'import/no-cycle': 'off', // ⚠ This rule is comparatively computationally expensive
	'import/no-default-export': 'off',
	'import/no-relative-parent-imports': 'off',
} as DummyRuleMap;

const typeScript = {
	/* restriction */
	'import/extensions': [
		'error',
		'ignorePackages',
		{
			js: 'never',
		},
	],
} as DummyRuleMap;

const node = {
	/* style */
	'import/no-nodejs-modules': 'off',
} as DummyRuleMap;

const declaration = {
	/* style */
	'import/group-exports': 'off',
} as DummyRuleMap;

const test = {
	/* style */
	'import/no-nodejs-modules': 'off',
} as DummyRuleMap;

export default { base, typeScript, node, declaration, test };
