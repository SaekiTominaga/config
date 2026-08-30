import type { DummyRuleMap } from 'oxlint';

const base = {
	/* style */
	'node/no-sync': [
		'error',
		{
			ignores: ['existsSync'],
		},
	],

	/* restriction */
	'node/no-top-level-await': 'off',
} as DummyRuleMap;

export default { base };
