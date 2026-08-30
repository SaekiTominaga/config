import type { DummyRuleMap } from 'oxlint';

const base = {
	/* restriction */
	'oxc/no-async-await': 'off',
	'oxc/no-optional-chaining': 'off', // In most codebases at this point, you should not use this rule.
	'oxc/no-rest-spread-properties': 'off',
} as DummyRuleMap;

export default { base };
