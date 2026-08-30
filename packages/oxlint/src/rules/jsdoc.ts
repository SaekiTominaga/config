import type { DummyRuleMap } from 'oxlint';

/**
 * ✅ Oxlint v1.80.0: default <https://oxc.rs/docs/guide/usage/linter/rules.html?sort=category&dir=asc&scope=jsdoc>
 * ☑️ eslint-plugin-jsdoc v64.2.1: recommended <https://github.com/gajus/eslint-plugin-jsdoc#rules>
 */

const base = {} as DummyRuleMap;

const typeScript = {
	/* correctness */
	'jsdoc/check-tag-names': [
		'error',
		{
			typed: true,
		},
	],
	'jsdoc/require-property-type': 'off', // ☑️

	/* pedantic */
	'jsdoc/require-param-type': 'off', // ☑️
	'jsdoc/require-returns-type': 'off', // ☑️
} as DummyRuleMap;

export default { base, typeScript };
