import type { DummyRuleMap } from 'oxlint';

const base = {
	/* suspicious*/
	'promise/always-return': [
		'error',
		{
			ignoreLastCallback: true,
		},
	],

	/* restriction */
	'promise/catch-or-return': 'off',
} as DummyRuleMap;

export default { base };
