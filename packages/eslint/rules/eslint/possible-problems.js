// @ts-check

/** @type {import("eslint").Linter.FlatConfig} */
export default {
	rules: {
		'array-callback-return': [
			'error',
			{
				allowImplicit: true,
			},
		], // eslint-config-airbnb-base@15.0.0; best-practices
		'no-await-in-loop': 'error', // eslint-config-airbnb-base@15.0.0; error
		'no-cond-assign': ['error', 'always'], // eslint-config-airbnb-base@15.0.0; error
		'no-console': 'warn', // eslint-config-airbnb-base@15.0.0; error
		'no-constructor-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		'no-promise-executor-return': 'error', // eslint-config-airbnb-base@15.0.0; error
		'no-self-compare': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-template-curly-in-string': 'error', // eslint-config-airbnb-base@15.0.0; error
		'no-unmodified-loop-condition': 'error',
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		], // eslint-config-airbnb-base@15.0.0; error
		'valid-typeof': ['error', { requireStringLiterals: true }], // eslint-config-airbnb-base@15.0.0; error
	},
};
