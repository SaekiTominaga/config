/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		'array-callback-return': [
			'error',
			{
				allowImplicit: true,
			},
		], // eslint-config-airbnb-base@15.0.0; best-practices
		'no-await-in-loop': 'error', // eslint-config-airbnb-base@15.0.0; errors
		'no-cond-assign': ['error', 'always'], // eslint-config-airbnb-base@15.0.0; errors
		'no-console': 'warn', // eslint-config-airbnb-base@15.0.0; errors
		'no-constructor-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		'no-promise-executor-return': 'error', // eslint-config-airbnb-base@15.0.0; errors
		'no-self-compare': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-template-curly-in-string': 'error', // eslint-config-airbnb-base@15.0.0; errors
		'no-unmodified-loop-condition': 'error',
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		], // eslint-config-airbnb-base@15.0.0; errors
		'no-unused-vars': [
			'error',
			{
				caughtErrors: 'none',
			},
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		], // eslint-config-airbnb-base@15.0.0; errors
	},
};
