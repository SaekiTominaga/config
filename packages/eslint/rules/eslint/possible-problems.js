// @ts-check

/** @type {import("eslint").Linter.FlatConfig} */
export default {
	rules: {
		'no-await-in-loop': 'error',
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
	},
};
