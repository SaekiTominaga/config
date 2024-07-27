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
		'no-await-in-loop': 'error',
		'no-constructor-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
		'no-self-compare': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-unmodified-loop-condition': 'error',
	},
};
