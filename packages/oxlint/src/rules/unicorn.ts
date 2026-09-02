import type { DummyRuleMap } from 'oxlint';

const base = {
	/* pedantic */
	'unicorn/no-lonely-if': 'off',
	'unicorn/no-negated-condition': 'off',

	/* style */
	'unicorn/filename-case': [
		'error',
		{
			cases: {
				kebabCase: false,
				camelCase: true,
				snakeCase: false,
				pascalCase: true,
				lowercase: false,
				screamingSnakeCase: true,
			},
		},
	],
	'unicorn/no-await-expression-member': 'off',
	'unicorn/prefer-ternary': ['error', 'only-single-line'],

	/* restriction */
	'unicorn/no-anonymous-default-export': 'off',
	'unicorn/no-array-for-each': 'off',
	'unicorn/no-array-reduce': 'off',
} as DummyRuleMap;

const browser = {
	/* style */
	'unicorn/filename-case': [
		'error',
		{
			cases: {
				kebabCase: true,
				camelCase: true,
				snakeCase: false,
				pascalCase: true,
				lowercase: false,
				screamingSnakeCase: true,
			},
		},
	],
} as DummyRuleMap;

const config = {
	/* style */
	'unicorn/filename-case': [
		'error',
		{
			cases: {
				kebabCase: true,
				camelCase: false,
				snakeCase: false,
				pascalCase: false,
				lowercase: false,
				screamingSnakeCase: false,
			},
		},
	],
	'unicorn/no-null': 'off',
} as DummyRuleMap;

const test = {
	/* pedantic */
	'unicorn/no-useless-undefined': 'off',

	/* style */
	'unicorn/no-null': 'off',
} as DummyRuleMap;

export default { base, browser, config, test };
