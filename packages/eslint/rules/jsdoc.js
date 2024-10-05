// @ts-check

/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		'jsdoc/lines-before-block': 'warn',
		'jsdoc/tag-lines': [
			'warn',
			'any',
			{
				startLines: 1,
			},
		], // ✅
	},
};
