import type { DummyRuleMap } from 'oxlint';

/**
 * ✅ Oxlint v1.80.0: default <https://oxc.rs/docs/guide/usage/linter/rules.html?sort=category&dir=asc&scope=eslint>
 * ☑️ ESLint v10.9.1: recommended <https://eslint.org/docs/latest/rules/>
 */

const base = {
	/* correctness */
	'no-unsafe-optional-chaining': [
		'error',
		{
			disallowArithmeticOperators: true,
		},
	], // ✅☑️ eslint-config-airbnb-base@15.0.0; errors
	'valid-typeof': [
		'error',
		{
			requireStringLiterals: true,
		},
	], // ✅☑️ eslint-config-airbnb-base@15.0.0; errors

	/* suspicious */
	'no-unneeded-ternary': [
		'error',
		{
			defaultAssignment: false,
		},
	], // eslint-config-airbnb-base@15.0.0; style

	/* pedantic */
	'accessor-pairs': 'off',
	'array-callback-return': [
		'error',
		{
			allowImplicit: true,
		},
	], // eslint-config-airbnb-base@15.0.0; best-practices
	'max-depth': 'off',
	'max-lines': 'off',
	'max-lines-per-function': 'off',
	'max-nested-callbacks': 'off',
	'no-inline-comments': 'off',
	'no-inner-declarations': 'off',
	'no-negated-condition': 'off',
	'no-warning-comments': 'off',
	'require-await': 'off', // prefer `typescript/require-await`
	'sort-vars': 'off',

	/* style */
	'capitalized-comments': 'off',
	'func-name-matching': 'off',
	'grouped-accessor-pairs': ['error', 'getBeforeSet'],
	'id-denylist': 'off',
	'id-length': 'off',
	'id-match': 'off',
	'init-declarations': 'off',
	'max-params': 'off',
	'max-statements': 'off',
	'no-magic-numbers': 'off',
	'no-return-assign': ['error', 'always'], // eslint-config-airbnb-base@15.0.0; best-practices
	'no-ternary': 'off',
	'object-shorthand': ['error', 'methods'],
	'one-var': ['error', 'never'], // eslint-config-airbnb-base@15.0.0; style
	'prefer-const': [
		'error',
		{
			ignoreReadBeforeAssign: true,
		},
	], // eslint-config-airbnb-base@15.0.0; es6
	'prefer-destructuring': [
		'error',
		{
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: false,
			},
		},
	], // eslint-config-airbnb-base@15.0.0; es6
	'prefer-named-capture-group': 'off',
	'prefer-regex-literals': [
		'error',
		{
			disallowRedundantWrapping: true,
		},
	], // eslint-config-airbnb-base@15.0.0; best-practices
	'sort-imports': [
		'error',
		{
			ignoreDeclarationSort: true,
		},
	],
	'sort-keys': 'off',
	'vars-on-top': 'off',

	/* restriction */
	complexity: 'off',
	'no-empty': [
		'error',
		{
			allowEmptyCatch: true,
		},
	], // ☑️
	'no-restricted-globals': ['error', 'isFinite', 'isNaN'], // eslint-config-airbnb-base@15.0.0; variables
	'no-undefined': 'off',
} as DummyRuleMap;

const test = {
	/* suspicious */
	'no-new': 'off',
} as DummyRuleMap;

export default { base, test };
