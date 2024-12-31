/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		'jsdoc/lines-before-block': [
			'warn',
			{
				checkBlockStarts: true,
			},
		],
		'jsdoc/tag-lines': [
			'warn',
			'any',
			{
				startLines: 1,
			},
		], // ✅
	},
};
