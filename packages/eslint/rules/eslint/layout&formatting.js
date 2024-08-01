// @ts-check

/** @type {import("eslint").Linter.FlatConfig} */
export default {
	rules: {
		'line-comment-position': [
			'error',
			{
				position: 'beside',
				ignorePattern: '@ts-',
			},
		],
		'unicode-bom': 'error',
	},
};
